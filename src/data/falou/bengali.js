export const BENGALI_FALOU_CONVERSATIONS = [
  {
    id: 'conv-bengali-boi-para',
    title: 'College Street Boi Para & Cha Adda',
    subtitle: 'Browse rare vintage books & sip earthen cup tea on College Street',
    icon: '☕',
    partnerName: 'Sourav Da (Book Stall Owner)',
    partnerAvatar: '👨🏽‍🏫',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'নমস্কার! কলেজ স্ট্রিটে স্বাগতম! আজ কী খুঁজছেন? নতুন কবিতা না মাটির ভাঁড়ের স্পেশাল চা?',
        phonetics: 'Nomoshkar! College Street-e shagotom! Aaj ki khunjchhen? Notun kobita na maatir bhaarer special cha?',
        english: 'Greetings! Welcome to College Street! What are you looking for today? New poetry or special earthen-cup tea?'
      },
      {
        speaker: 'user',
        prompt: 'Order two clay cups of ginger tea and ask about Tagore poetry collections.',
        targetText: 'নমস্কার দাদা! দুটো ভাঁড়ের আদা চা দিন, আর রবীন্দ্রনাথের কবিতার বই দেখান।',
        phonetics: 'Nomoshkar daada! Duto bhaarer aada cha din, aar Robindronaather kobitar boi dekhaan.',
        english: 'Hello brother! Please give two earthen cups of ginger tea, and show Tagore poetry books.',
        options: [
          { text: 'নমস্কার দাদা! দুটো ভাঁড়ের আদা চা দিন, আর রবীন্দ্রনাথের কবিতার বই দেখান।', phonetics: 'Nomoshkar daada! Duto bhaarer aada cha din, aar Robindronaather kobitar boi dekhaan.', correct: true },
          { text: 'আমার চা ভালো লাগে না।', phonetics: 'Aamar cha bhaalo laage na.', correct: false },
          { text: 'দোকান বন্ধ করুন।', phonetics: 'Dukaan bondho korun.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'চমৎকার পছন্দ! গীতবিতানের সুন্দর বাঁধাই কপি আছে। চায়ে কি চিনি কম দেব?',
        phonetics: 'Chomothkaar pochhondo! Gitobitaaner sundor baandhai copy aachhe. Chaaye ki chini kom debo?',
        english: 'Wonderful choice! I have a beautifully bound copy of Gitobitan. Less sugar in the tea?'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, less sugar, and ask for the total price.',
        targetText: 'হ্যাঁ দাদা, চিনি কম দিন। মোট কত টাকা হলো?',
        phonetics: 'Hyaan daada, chini kom din. Mot koto taaka holo?',
        english: 'Yes brother, put less sugar. How much is the total price?',
        options: [
          { text: 'হ্যাঁ দাদা, চিনি কম দিন। মোট কত টাকা হলো?', phonetics: 'Hyaan daada, chini kom din. Mot koto taaka holo?', correct: true },
          { text: 'আমার বই চাই না।', phonetics: 'Aamar boi chaai na.', correct: false },
          { text: 'টাকা দেব না।', phonetics: 'Taaka debo na.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'চায়ের কুড়ি টাকা আর বইয়ের একশো আশি টাকা, মোট দুশো টাকা! মন দিয়ে পড়ুন আর আড্ডা দিন!',
        phonetics: 'Chayer kuri taaka aar boiyer eksho aashi taaka, mot dusho taaka! Mon diye porhun aar aadda din!',
        english: 'Twenty rupees for tea and 180 for book, total 200 rupees! Read with joy and enjoy the adda!'
      }
    ]
  },
  {
    id: 'conv-bengali-taxi',
    title: 'Kolkata Yellow Taxi across Howrah Bridge',
    subtitle: 'Ride through historic streets past Howrah Bridge & Victoria Memorial',
    icon: '🚕',
    partnerName: 'Subhash Kaku (Taxi Driver)',
    partnerAvatar: '🚕',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'হ্যাঁ বাবু! কোথায় যাবেন? হাওড়া স্টেশন না ভিক্টোরিয়া মেমোরিয়াল?',
        phonetics: 'Hyaan baabu! Kothay jaaben? Howrah station na Victoria Memorial?',
        english: 'Yes babu! Where will you go? Howrah Station or Victoria Memorial?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will go to Howrah Station by meter.',
        targetText: 'কাকু, হাওড়া স্টেশন যাবেন? মিটারে যাবেন তো?',
        phonetics: 'Kaaku, Howrah station jaaben? Meter-e jaaben to?',
        english: 'Uncle, will you go to Howrah Station? You will go by meter, right?',
        options: [
          { text: 'কাকু, হাওড়া স্টেশন যাবেন? মিটারে যাবেন তো?', phonetics: 'Kaaku, Howrah station jaaben? Meter-e jaaben to?', correct: true },
          { text: 'ট্যাক্সি চাই না।', phonetics: 'Taxi chaai na.', correct: false },
          { text: 'বৃষ্টি হচ্ছে যাব না।', phonetics: 'Brishti hochhe jaabo na.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'উঠে পড়ুন বাবু! স্ট্র্যান্ড রোডে একটু জ্যাম আছে, কিন্তু কুড়ি মিনিটে পৌঁছে দেব!',
        phonetics: 'Uthe porhun baabu! Strand Road-e ektu jam aachhe, kintu kuri minute-e ponchhe debo!',
        english: 'Hop in babu! Slight jam on Strand Road, but I will get you there in twenty minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight ahead and cross Howrah Bridge carefully.',
        targetText: 'ঠিক আছে কাকু, সোজা চলুন আর ব্রিজটা আস্তে পার করুন।',
        phonetics: 'Thik aachhe kaaku, soja cholun aar bridge-ta aaste paar korun.',
        english: 'Alright uncle, go straight and cross the bridge steadily.',
        options: [
          { text: 'ঠিক আছে কাকু, সোজা চলুন আর ব্রিজটা আস্তে পার করুন।', phonetics: 'Thik aachhe kaaku, soja cholun aar bridge-ta aaste paar korun.', correct: true },
          { text: 'গাড়ি থামান নামব।', phonetics: 'Gaari thaamaan naambo.', correct: false },
          { text: 'খুব জোরে চালান।', phonetics: 'Khub jore chaalaan.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'হাওড়া স্টেশন এসে গেছে বাবু! সাবধানে নামুন, মালপত্র ভুলবেন না যেন!',
        phonetics: 'Howrah station ese gechhe baabu! Saabdhane naamun, maalpotro bhulben na jeno!',
        english: 'Howrah Station has arrived babu! Step down carefully, do not leave your luggage!'
      }
    ]
  },
  {
    id: 'conv-bengali-mishti',
    title: 'Legendary Mishti: Roshogolla & Mishti Doi',
    subtitle: 'Savor warm spongy roshogolla & rich caramel mishti doi in an earthen handi',
    icon: '🍮',
    partnerName: 'Gourab Da (Sweet Master)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'স্বাগতম! গরম নলেন গুড়ের রসগোল্লা আর মাটির হাঁড়ির মিষ্টি দই রেডি আছে!',
        phonetics: 'Shagotom! Gorom nolen gurer roshogolla aar maatir haanrir mishti doi ready aachhe!',
        english: 'Welcome! Hot date-palm jaggery roshogolla and earthen-pot mishti doi are ready!'
      },
      {
        speaker: 'user',
        prompt: 'Order four warm roshogollas and one small pot of mishti doi.',
        targetText: 'দাদা, চারটে গরম রসগোল্লা আর এক হাঁড়ি মিষ্টি দই দিন।',
        phonetics: 'Daada, chaarte gorom roshogolla aar ek haanri mishti doi din.',
        english: 'Brother, please give four hot roshogollas and one pot of sweet curd.',
        options: [
          { text: 'দাদা, চারটে গরম রসগোল্লা আর এক হাঁড়ি মিষ্টি দই দিন।', phonetics: 'Daada, chaarte gorom roshogolla aar ek haanri mishti doi din.', correct: true },
          { text: 'মিষ্টি খাব না।', phonetics: 'Mishti khaabo na.', correct: false },
          { text: 'নোনতা কিছু আছে?', phonetics: 'Nonta kichhu aachhe?', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'একেবারে খাঁটি গরুর দুধের তৈরি! কেমন লাগলো বলুন?',
        phonetics: 'Ekebaare khati gorur dudher toiri! Kemon laaglo bolun?',
        english: 'Made from pure cow milk! Tell me how you liked it?'
      },
      {
        speaker: 'user',
        prompt: 'Say the taste is heavenly and ask for the bill.',
        targetText: 'অসাধারণ স্বাদ দাদা! মন ভরে গেল, কত টাকা হলো?',
        phonetics: 'Oshaadharon swaad daada! Mon bhore gelo, koto taaka holo?',
        english: 'Extraordinary taste brother! My heart is full, how much is the bill?',
        options: [
          { text: 'অসাধারণ স্বাদ দাদা! মন ভরে গেল, কত টাকা হলো?', phonetics: 'Oshaadharon swaad daada! Mon bhore gelo, koto taaka holo?', correct: true },
          { text: 'স্বাদ ভালো নয়।', phonetics: 'Swaad bhaalo noy.', correct: false },
          { text: 'বিল দেবেন না।', phonetics: 'Bill deben na.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'একশো বিশ টাকা বাবু! আবার আসবেন, মিষ্টিমুখ ছাড়া বাঙালি জীবন অচল!',
        phonetics: 'Eksho bish taaka baabu! Aabaar aashben, mishtimukh chhara Bangali jibon ochol!',
        english: 'One hundred twenty rupees babu! Come again, Bengali life cannot run without sweets!'
      }
    ]
  }
];
