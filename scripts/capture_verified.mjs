import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const ARTIFACT_DIR = 'C:/Users/coool/.gemini/antigravity/brain/15328d15-04b3-4c57-9703-e7083df2b41b';

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const cb = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) {
            cb.reject(new Error(msg.error.message));
          } else {
            cb.resolve(msg.result);
          }
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async screenshot(filename) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const fullPath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(fullPath, buffer);
    console.log(`[Screenshot Saved] -> ${fullPath}`);
    return fullPath;
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function run() {
  console.log('Starting vite preview...');
  const viteProc = spawn('npx.cmd', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    stdio: 'ignore'
  });

  await new Promise(r => setTimeout(r, 2000));

  console.log('Launching Chrome...');
  const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--user-data-dir=C:\\Users\\coool\\AppData\\Local\\Temp\\chrome_verify_profile_' + Date.now(),
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ], {
    detached: true,
    stdio: 'ignore'
  });

  try {
    let versionData = null;
    for (let i = 0; i < 20; i++) {
      try {
        const res = await fetch('http://127.0.0.1:9222/json/version');
        versionData = await res.json();
        break;
      } catch {
        await new Promise(r => setTimeout(r, 300));
      }
    }

    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const targets = await listRes.json();
    const pageTarget = targets.find(t => t.type === 'page') || targets[0];
    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    console.log('Navigating to Tamil course with Lesson 4 popover open...');
    await client.send('Page.navigate', { url: 'http://localhost:4173/?lang=tamil&test_node=3' });
    await new Promise(r => setTimeout(r, 2000));

    await client.screenshot('verified_tamil_popover_node3.png');

    console.log('Navigating to Path top...');
    await client.send('Page.navigate', { url: 'http://localhost:4173/?lang=tamil' });
    await new Promise(r => setTimeout(r, 1500));
    await client.screenshot('verified_tamil_path_top.png');

    client.close();
  } finally {
    try { chromeProc.kill(); } catch {}
    try { viteProc.kill(); } catch {}
  }
}

run().catch(console.error);
