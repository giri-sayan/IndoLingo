import { HINDI_COURSE } from './courses/hindi';
import { TAMIL_COURSE } from './courses/tamil';
import { TELUGU_COURSE } from './courses/telugu';
import { BENGALI_COURSE } from './courses/bengali';
import { KANNADA_COURSE } from './courses/kannada';
import { MALAYALAM_COURSE } from './courses/malayalam';
import { MARATHI_COURSE } from './courses/marathi';
import { PUNJABI_COURSE } from './courses/punjabi';
import { GUJARATI_COURSE } from './courses/gujarati';

export const INDIAN_LANGUAGES = [
  HINDI_COURSE,
  TAMIL_COURSE,
  TELUGU_COURSE,
  BENGALI_COURSE,
  KANNADA_COURSE,
  MALAYALAM_COURSE,
  MARATHI_COURSE,
  PUNJABI_COURSE,
  GUJARATI_COURSE
];

export const CULTURAL_STORIES = [
  {
    id: 'story-1',
    title: 'The Secret of Cutting Chai',
    lang: 'Hindi / Indian Street Culture',
    langCode: 'hi-IN',
    imageEmoji: '☕',
    description: 'Why is it called "cutting" chai in Mumbai and across railway stations?',
    story: [
      'In India, chai is not just a drink; it is an emotion and a social catalyst.',
      'A "cutting" chai refers to half a glass of tea—strong, boiled with crushed ginger (adrak), cardamom (elaichi), milk, and sugar.',
      'Why half? Because people would meet friends multiple times a day at the tapri (roadside tea stall), and half a glass was the perfect portion to sip while chatting without getting overly full!'
    ],
    desiWord: 'अदरक वाली चाय (Adrak wali chai - Ginger tea)'
  },
  {
    id: 'story-2',
    title: 'The Mystery of South Indian Filter Coffee',
    lang: 'Tamil & South India',
    langCode: 'ta-IN',
    imageEmoji: '☕',
    description: 'The science of the dabara and the frothy "meter coffee" pour.',
    story: [
      'Brewed using a traditional stainless steel double-chamber drip filter with chicory-roasted coffee beans.',
      'It is served in a "dabara" (wide rim bowl) and "tumbler" (cup).',
      'The coffee is aerated by pouring it back and forth between cup and dabara from an arm’s length high (hence called "Meter Coffee"), creating a thick heavenly frothy cream without any artificial machine!'
    ],
    desiWord: 'பில்டர் காபி (Filter Kaapi)'
  },
  {
    id: 'story-3',
    title: 'The Art of Indian Head Bobble',
    lang: 'Pan-Indian Expression',
    langCode: 'hi-IN',
    imageEmoji: '🙂',
    description: 'What does the famous Indian head nod actually mean?',
    story: [
      'A gentle side-to-side tilt can communicate nuanced meanings depending on speed and context:',
      '1. Side to side smoothly: "Yes", "I understand", or "Sounds good!"',
      '2. Quick tilt with a smile: "Thank you" or greeting an acquaintance.',
      '3. Slight nod with eyebrows raised: "What’s up?" or "Are you ready?"',
      'It is a warm, polite non-verbal affirmation shared across every state in India!'
    ],
    desiWord: 'हाँ भाई / சரிங்க (All good!)'
  },
  {
    id: 'story-4',
    title: 'The Soul of "ழ" (Zha) & 2,500 Years of Classical Tamil',
    lang: 'Tamil / Classical Heritage',
    langCode: 'ta-IN',
    imageEmoji: '📜',
    description: 'Why is "ழ" the most sacred letter in Tamil, and how did Tamil survive 25 centuries intact?',
    story: [
      '"ழ" (Zha) is a unique retroflex approximant found in very few languages on Earth. To pronounce it, you curl the tip of your tongue backwards towards the soft palate without touching the roof.',
      'It gives the very word "தமிழ்" (Tamizh), "வாழ்க" (Vaazhga), and "மகிழ்ச்சி" (Magizhchi) their musical soul.',
      'With over 2,500 years of unbroken literary heritage—from Sangam poetry (சங்க இலக்கியம்) to Thirukkural and modern speech—Tamil is celebrated worldwide as a living classical language (செம்மொழி).'
    ],
    desiWord: 'தமிழ் என் உயிர் (Tamizh en uyir - Tamil is my life-breath)'
  },
  {
    id: 'story-5',
    title: 'Why Tamilians Never Say "Goodbye" (போய் வருகிறேன்)',
    lang: 'Tamil Culture & Etiquette',
    langCode: 'ta-IN',
    imageEmoji: '🙏',
    description: 'The heartfelt superstition and emotional warmth behind "Poi Varugiren".',
    story: [
      'In Tamil culture, uttering an abrupt "goodbye" or "I am going" (போகிறேன்) is considered inauspicious because it implies a final departure.',
      'Instead, every Tamilian smiles and says "போய் வருகிறேன்" (Poi varugiren) — literally: "I go, only to return to you".',
      'The other person warmly responds: "போய் வாருங்கள்" (Poi vaarungal - "Go and return safely"). It turns every departure into an affectionate promise of reunion!'
    ],
    desiWord: 'போய் வருகிறேன் (Poi varugiren - I will go and return)'
  },
  {
    id: 'story-6',
    title: 'The Sacred Science of the Banana Leaf Feast (வாழை இலை விருந்து)',
    lang: 'Tamil Dining Heritage',
    langCode: 'ta-IN',
    imageEmoji: '🍃',
    description: 'Why salt goes on the top-left, payasam on the bottom-right, and leaves fold upward.',
    story: [
      'Dining on a freshly cut banana leaf (தலைவாழை இலை) is an ancient culinary science. The warm food melts the leaf\'s natural polyphenol wax coating, releasing aroma and aiding digestion.',
      'The tapered tip always points to the diner\'s left. Salt, pickles, and pungent items are placed on the top-left (consumed in moderation), while rice, ghee, and vegetable curries sit at the center.',
      'When you finish, folding the leaf towards yourself (top to bottom) is the highest compliment you can pay the host, declaring you are fully satisfied!'
    ],
    desiWord: 'வயிறு நிறைந்தது! (Vayiru niraindhadhu - Stomach is fully satisfied!)'
  },
  {
    id: 'story-7',
    title: 'The Magic of "சும்மா" (Summa): The Word That Does Everything',
    lang: 'Tamil Colloquial Genius',
    langCode: 'ta-IN',
    imageEmoji: '✨',
    description: 'The one untranslatable word every Tamilian uses dozens of times each day.',
    story: [
      'If you ask a Tamilian: "What are you doing?", they will reply: "சும்மா இருக்கேன்" (Summa irukken - Just chilling / Doing nothing).',
      'If you ask: "Why did you call?", they say: "சும்மா தான்" (Summa dhaan - Just like that, to hear your voice).',
      'If someone sings amazingly, friends say: "சும்மா அதிருதுல்ல!" (Summa adhirudhulla - It\'s rocking effortlessly!). It is the ultimate Swiss-army knife of Tamil conversational intimacy!'
    ],
    desiWord: 'சும்மா (Summa - Just like that / Simply)'
  }
];

export const LEADERBOARD_USERS = [
  { rank: 1, name: 'Aarav Sharma', avatar: '🦁', xp: 2450, league: 'Amethyst', country: 'Delhi' },
  { rank: 2, name: 'Priya Sundaram', avatar: '🦚', xp: 2180, league: 'Amethyst', country: 'Chennai' },
  { rank: 3, name: 'Rohan Patel', avatar: '🐯', xp: 1940, league: 'Amethyst', country: 'Ahmedabad' },
  { rank: 4, name: 'Ananya Mukherjee', avatar: '🌸', xp: 1820, league: 'Gold', country: 'Kolkata' },
  { rank: 5, name: 'Gurpreet Singh', avatar: '🌾', xp: 1650, league: 'Gold', country: 'Amritsar' },
  { rank: 6, name: 'Deepa Hegde', avatar: '☕', xp: 1420, league: 'Silver', country: 'Bengaluru' },
  { rank: 7, name: 'Kavita Deshmukh', avatar: '✨', xp: 1200, league: 'Silver', country: 'Pune' },
];

export const DAILY_QUESTS = [
  { id: 'q1', text: 'Earn 50 XP today', target: 50, reward: 15, icon: 'Zap' },
  { id: 'q2', text: 'Complete 2 perfect lessons', target: 2, reward: 20, icon: 'Award' },
  { id: 'q3', text: 'Practice 10 Akshara (alphabet letters)', target: 10, reward: 10, icon: 'BookOpen' },
  { id: 'q4', text: 'Listen to 5 audio phrases', target: 5, reward: 10, icon: 'Volume2' },
];

export const BHASHA_SANGAM_CATEGORIES = [
  { id: 'greetings', label: 'Greetings & Politeness', icon: '🙏' },
  { id: 'introduction', label: 'Introductions & Small Talk', icon: '🤝' },
  { id: 'travel', label: 'Directions & Travel', icon: '🛺' },
  { id: 'food', label: 'Food & Dining', icon: '🍛' },
  { id: 'shopping', label: 'Bazaar & Shopping', icon: '🛍️' },
  { id: 'emergency', label: 'Help & Essentials', icon: '🆘' }
];

export const BHASHA_SANGAM_SENTENCES = [
  {
    id: 'bs-1',
    category: 'greetings',
    english: 'Hello / Greetings',
    translations: {
      hi: { text: 'नमस्ते', phonetics: 'Namaste' },
      ta: { text: 'வணக்கம்', phonetics: 'Vanakkam' },
      te: { text: 'నమస్కారం', phonetics: 'Namaskaram' },
      bn: { text: 'নমস্কার', phonetics: 'Nomoshkar' },
      kn: { text: 'ನಮಸ್ಕಾರ', phonetics: 'Namaskara' },
      ml: { text: 'നമസ്കാരം', phonetics: 'Namaskaram' },
      mr: { text: 'नमस्कार', phonetics: 'Namaskar' },
      pa: { text: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', phonetics: 'Sat Sri Akal' },
      gu: { text: 'નમસ્તે', phonetics: 'Namaste' }
    }
  },
  {
    id: 'bs-2',
    category: 'greetings',
    english: 'How are you?',
    translations: {
      hi: { text: 'आप कैसे हैं?', phonetics: 'Aap kaise hain?' },
      ta: { text: 'நீங்கள் எப்படி இருக்கிறீர்கள்?', phonetics: 'Neengal eppadi irukkireergal?' },
      te: { text: 'మీరు ఎలా ఉన్నారు?', phonetics: 'Meeru ela unnaru?' },
      bn: { text: 'আপনি কেমন আছেন?', phonetics: 'Apni kemon achhen?' },
      kn: { text: 'ನೀವು ಹೇಗಿದ್ದೀರಿ?', phonetics: 'Neevu hegiddiri?' },
      ml: { text: 'സുഖമാണോ?', phonetics: 'Sukhamano?' },
      mr: { text: 'तुम्ही कसे आहात?', phonetics: 'Tumhi kase ahat?' },
      pa: { text: 'ਤੁਹਾਡਾ ਕੀ ਹਾਲ ਹੈ?', phonetics: 'Tuhada ki haal hai?' },
      gu: { text: 'તમે કેમ છો?', phonetics: 'Tame kem chho?' }
    }
  },
  {
    id: 'bs-3',
    category: 'greetings',
    english: 'I am fine, thank you.',
    translations: {
      hi: { text: 'मैं ठीक हूँ, धन्यवाद।', phonetics: 'Main theek hoon, dhanyavaad.' },
      ta: { text: 'நான் நன்றாக இருக்கிறேன், நன்றி.', phonetics: 'Naan nandraaga irukkiren, nandri.' },
      te: { text: 'నేను బాగున్నాను, ధన్యవాదాలు.', phonetics: 'Nenu baagunnanu, dhanyavaadaalu.' },
      bn: { text: 'আমি ভালো আছি, ধন্যবাদ।', phonetics: 'Ami bhalo achhi, dhonnobad.' },
      kn: { text: 'ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.', phonetics: 'Naanu chennagiddene, dhanyavadagalu.' },
      ml: { text: 'എനിക്ക് സുഖമാണ്, നന്ദി.', phonetics: 'Enikku sukhamanu, nandi.' },
      mr: { text: 'मी ठीक आहे, धन्यवाद.', phonetics: 'Mee theek aahe, dhanyavaad.' },
      pa: { text: 'ਮੈਂ ਠੀਕ ਹਾਂ, ਧੰਨਵਾਦ।', phonetics: 'Main theek haan, dhanvaad.' },
      gu: { text: 'હું મજામાં છું, આભાર.', phonetics: 'Hoon majama chhoon, aabhar.' }
    }
  },
  {
    id: 'bs-4',
    category: 'greetings',
    english: 'Thank you very much.',
    translations: {
      hi: { text: 'बहुत-बहुत धन्यवाद।', phonetics: 'Bahut bahut dhanyavaad.' },
      ta: { text: 'மிக்க நன்றி.', phonetics: 'Mikka nandri.' },
      te: { text: 'చాలా ధన్యవాదాలు.', phonetics: 'Chaala dhanyavaadaalu.' },
      bn: { text: 'অনেক ধন্যবাদ।', phonetics: 'Onek dhonnobad.' },
      kn: { text: 'ತುಂಬಾ ಧನ್ಯವಾದಗಳು.', phonetics: 'Tumba dhanyavadagalu.' },
      ml: { text: 'വളരെ നന്ദി.', phonetics: 'Valare nandi.' },
      mr: { text: 'खूप खूप धन्यवाद.', phonetics: 'Khoop khoop dhanyavaad.' },
      pa: { text: 'ਬਹੁਤ ਬਹੁਤ ਧੰਨਵਾਦ।', phonetics: 'Bahut bahut dhanvaad.' },
      gu: { text: 'ખૂબ ખૂબ આભાર.', phonetics: 'Khoob khoob aabhar.' }
    }
  },
  {
    id: 'bs-5',
    category: 'greetings',
    english: 'You are welcome / It is fine.',
    translations: {
      hi: { text: 'आपका स्वागत है / कोई बात नहीं।', phonetics: 'Aapka swagat hai / Koi baat nahi.' },
      ta: { text: 'நல்வரவு / பரவாயில்லை.', phonetics: 'Nalvaravu / Paravayillai.' },
      te: { text: 'స్వాగతం / పర్వాలేదు.', phonetics: 'Swagatham / Parvaledu.' },
      bn: { text: 'আপনাকে স্বাগত / কোনো ব্যাপার না।', phonetics: 'Apnake shagoto / Kono byapar na.' },
      kn: { text: 'ಸ್ವಾಗತ / ಪರವಾಗಿಲ್ಲ.', phonetics: 'Swagata / Parvagilla.' },
      ml: { text: 'സ്വാഗതം / സാരമില്ല.', phonetics: 'Swagatham / Saaramilla.' },
      mr: { text: 'तुमचे स्वागत आहे / काही हरकत नाही.', phonetics: 'Tumche swagat aahe / Kaahi harkat naahi.' },
      pa: { text: 'ਜੀ ਆਇਆਂ ਨੂੰ / ਕੋਈ ਗੱਲ ਨਹੀਂ।', phonetics: 'Ji aayan nu / Koi gal nahi.' },
      gu: { text: 'તમારું સ્વાગત છે / કાંઈ વાંધો નહીં.', phonetics: 'Tamaru swagat chhe / Kai vandho nahi.' }
    }
  },
  {
    id: 'bs-6',
    category: 'introduction',
    english: 'What is your name?',
    translations: {
      hi: { text: 'आपका नाम क्या है?', phonetics: 'Aapka naam kya hai?' },
      ta: { text: 'உங்கள் பெயர் என்ன?', phonetics: 'Ungal peyar enna?' },
      te: { text: 'మీ పేరు ఏమిటి?', phonetics: 'Mee peru emiti?' },
      bn: { text: 'আপনার নাম কি?', phonetics: 'Apnar naam ki?' },
      kn: { text: 'ನಿಮ್ಮ ಹೆಸರೇನು?', phonetics: 'Nimma hesarenu?' },
      ml: { text: 'നിങ്ങളുടെ പേരെന്താണ്?', phonetics: 'Ningalude perenthanu?' },
      mr: { text: 'तुमचे नाव काय आहे?', phonetics: 'Tumche naav kaay aahe?' },
      pa: { text: 'ਤੁਹਾਡਾ ਨਾਂ ਕੀ ਹੈ?', phonetics: 'Tuhada naa ki hai?' },
      gu: { text: 'તમારું નામ શું છે?', phonetics: 'Tamaru naam shu chhe?' }
    }
  },
  {
    id: 'bs-7',
    category: 'introduction',
    english: 'Where are you from?',
    translations: {
      hi: { text: 'आप कहाँ से हैं?', phonetics: 'Aap kahan se hain?' },
      ta: { text: 'நீங்கள் எங்கிருந்து வருகிறீர்கள்?', phonetics: 'Neengal engirunthu varugeereergal?' },
      te: { text: 'మీరు ఎక్కడి నుండి వచ్చారు?', phonetics: 'Meeru ekkadi nundi vacharu?' },
      bn: { text: 'আপনি কোথা থেকে এসেছেন?', phonetics: 'Apni kotha theke eshechhen?' },
      kn: { text: 'ನೀವು ಎಲ್ಲಿಯವರು?', phonetics: 'Neevu elliyavaru?' },
      ml: { text: 'നിങ്ങൾ എവിടെ നിന്നാണ്?', phonetics: 'Ningal evide ninnanu?' },
      mr: { text: 'तुम्ही कुठले आहात?', phonetics: 'Tumhi kuthle aahat?' },
      pa: { text: 'ਤੁਸੀਂ ਕਿੱਥੋਂ ਦੇ ਹੋ?', phonetics: 'Tusi kittho de ho?' },
      gu: { text: 'તમે ક્યાંના છો?', phonetics: 'Tame kyan na chho?' }
    }
  },
  {
    id: 'bs-8',
    category: 'introduction',
    english: 'Pleased to meet you.',
    translations: {
      hi: { text: 'आपसे मिलकर बहुत खुशी हुई।', phonetics: 'Aapse milkar bahut khushi hui.' },
      ta: { text: 'உங்களைச் சந்தித்ததில் மகிழ்ச்சி.', phonetics: 'Ungalai sandhithadhil magizhchi.' },
      te: { text: 'మిమ్మల్ని కలవడం చాలా సంతోషంగా ఉంది.', phonetics: 'Mimmalni kalavadam chaala santhoshanga undi.' },
      bn: { text: 'আপনার সাথে দেখা করে ভালো লাগলো।', phonetics: 'Apnar sathe dekha kore bhalo laglo.' },
      kn: { text: 'ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.', phonetics: 'Nimmannu bhetiyagiddu santhoshavayithu.' },
      ml: { text: 'കണ്ടതിൽ വളരെ സന്തോഷം.', phonetics: 'Kandathil valare santhosham.' },
      mr: { text: 'तुम्हाला भेटून आनंद झाला.', phonetics: 'Tumhala bhetun aanand jhaala.' },
      pa: { text: 'ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਹੋਈ।', phonetics: 'Tuhanu mil ke bahut khushi hoyi.' },
      gu: { text: 'તમને મળીને ઘણો આનંદ થયો.', phonetics: 'Tamne maline ghano aanand thayo.' }
    }
  },
  {
    id: 'bs-9',
    category: 'travel',
    english: 'Where is the railway station?',
    translations: {
      hi: { text: 'रेलवे स्टेशन कहाँ है?', phonetics: 'Railway station kahan hai?' },
      ta: { text: 'ரயில் நிலையம் எங்கே இருக்கிறது?', phonetics: 'Rail nilayam enge irukkirathu?' },
      te: { text: 'రైల్వే స్టేషన్ ఎక్కడ ఉంది?', phonetics: 'Railway station ekkada undi?' },
      bn: { text: 'রেলওয়ে স্টেশনটি কোথায়?', phonetics: 'Railway station-ti kothay?' },
      kn: { text: 'ರೈಲ್ವೆ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?', phonetics: 'Railway nildaana ellide?' },
      ml: { text: 'റെയിൽവേ സ്റ്റേഷൻ എവിടെയാണ്?', phonetics: 'Railway station evideyanu?' },
      mr: { text: 'रेल्वे स्टेशन कुठे आहे?', phonetics: 'Railway station kuthe aahe?' },
      pa: { text: 'ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਕਿੱਥੇ ਹੈ?', phonetics: 'Railway station kithe hai?' },
      gu: { text: 'રેલવે સ્ટેશન ક્યાં છે?', phonetics: 'Railway station kyan chhe?' }
    }
  },
  {
    id: 'bs-10',
    category: 'travel',
    english: 'How much will it cost to go there? (Auto/Taxi)',
    translations: {
      hi: { text: 'वहाँ जाने का कितना किराया लगेगा?', phonetics: 'Vahan jaane ka kitna kiraya lagega?' },
      ta: { text: 'அங்கு செல்ல எவ்வளவு கட்டணம் ஆகும்?', phonetics: 'Angu sella evvalavu kattanam aagum?' },
      te: { text: 'అక్కడికి వెళ్ళడానికి ఎంత అవుతుంది?', phonetics: 'Akkadiki velladaniki entha avuthundi?' },
      bn: { text: 'সেখানে যেতে কত ভাড়া লাগবে?', phonetics: 'Shekhane jete koto bhara lagbe?' },
      kn: { text: 'ಅಲ್ಲಿಗೆ ಹೋಗಲು ಎಷ್ಟು ಬಾಡಿಗೆ ಆಗುತ್ತದೆ?', phonetics: 'Allige hogalu eshtu baadige aaguttade?' },
      ml: { text: 'അവിടെ പോകാൻ എത്ര രൂപയാകും?', phonetics: 'Avide pokan ethra roopayaakum?' },
      mr: { text: 'तिथे जायला किती भाडे होईल?', phonetics: 'Tithe jaayla kiti bhaade hoil?' },
      pa: { text: 'ਉੱਥੇ ਜਾਣ ਦਾ ਕਿੰਨਾ ਕਿਰਾਇਆ ਲੱਗੇਗਾ?', phonetics: 'Utthe jaan da kinna kiraya lagega?' },
      gu: { text: 'ત્યાં જવાના કેટલા રૂપિયા થશે?', phonetics: 'Tyan javana ketla rupiya thashe?' }
    }
  },
  {
    id: 'bs-11',
    category: 'food',
    english: 'I want one cup of tea / coffee, please.',
    translations: {
      hi: { text: 'कृपया एक कप चाय / कॉफ़ी दीजिए।', phonetics: 'Kripya ek cup chai / coffee deejiye.' },
      ta: { text: 'தயவுசெய்து ஒரு கப் டீ / காபி கொடுங்கள்.', phonetics: 'Thayavuseythu oru cup tea / coffee kodungal.' },
      te: { text: 'దయచేసి ఒక కప్పు టీ / కాఫీ ఇవ్వండి.', phonetics: 'Dayachesi oka kappu tea / coffee ivvandi.' },
      bn: { text: 'দয়া করে এক কাপ চা / কফি দিন।', phonetics: 'Doya kore ek cup cha / coffee din.' },
      kn: { text: 'ದಯವಿಟ್ಟು ಒಂದು ಕಪ್ ಚಹಾ / ಕಾಫಿ ಕೊಡಿ.', phonetics: 'Dayavittu ondu cup chaha / coffee kodi.' },
      ml: { text: 'ദയവായി ഒരു ചായ / കാപ്പി തരൂ.', phonetics: 'Dayavayi oru chaaya / kaappi tharoo.' },
      mr: { text: 'कृपया एक कप चहा / कॉफी द्या.', phonetics: 'Kripya ek cup chaha / coffee dya.' },
      pa: { text: 'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਕੱਪ ਚਾਹ / ਕੌਫ਼ੀ ਦਿਓ।', phonetics: 'Kirpa karke ik cup chah / coffee dio.' },
      gu: { text: 'કૃપા કરીને એક કપ ચા / કોફી આપો.', phonetics: 'Krupa karine ek cup cha / coffee aapo.' }
    }
  },
  {
    id: 'bs-12',
    category: 'food',
    english: 'The food is very delicious!',
    translations: {
      hi: { text: 'खाना बहुत स्वादिष्ट है!', phonetics: 'Khaana bahut swadisht hai!' },
      ta: { text: 'உணவு மிகவும் சுவையாக இருக்கிறது!', phonetics: 'Unavu migavum suvaiyaaga irukkirathu!' },
      te: { text: 'భోజనం చాలా రుచిగా ఉంది!', phonetics: 'Bhojanam chaala ruchiga undi!' },
      bn: { text: 'খাবারটি খুব সুস্বাদু!', phonetics: 'Khabarti khoob shushwadu!' },
      kn: { text: 'ಊಟ ತುಂಬಾ ರುಚಿಯಾಗಿದೆ!', phonetics: 'Oota tumba ruchiyagide!' },
      ml: { text: 'ഭക്ഷണം വളരെ രുചികരമാണ്!', phonetics: 'Bhakshanam valare ruchikaramannu!' },
      mr: { text: 'जेवण खूप चवदार आहे!', phonetics: 'Jevan khoop chavdaar aahe!' },
      pa: { text: 'ਖਾਣਾ ਬਹੁਤ ਸਵਾਦਿਸ਼ਟ ਹੈ!', phonetics: 'Khaana bahut swadisht hai!' },
      gu: { text: 'જમવાનું ખૂબ સ્વાદિષ્ટ છે!', phonetics: 'Jamvanu khoob swadisht chhe!' }
    }
  },
  {
    id: 'bs-13',
    category: 'shopping',
    english: 'How much does this cost?',
    translations: {
      hi: { text: 'यह कितने का है?', phonetics: 'Yeh kitne ka hai?' },
      ta: { text: 'இதன் விலை என்ன?', phonetics: 'Idhan vilai enna?' },
      te: { text: 'దీని ధర ఎంత?', phonetics: 'Deeni dhara entha?' },
      bn: { text: 'এটার দাম কত?', phonetics: 'Etar daam koto?' },
      kn: { text: 'ಇದರ ಬೆಲೆ ಎಷ್ಟು?', phonetics: 'Idara bele eshtu?' },
      ml: { text: 'ഇതിന് എത്ര വിലയാകും?', phonetics: 'Ithinu ethra vilayaakum?' },
      mr: { text: 'हे कितीचे आहे?', phonetics: 'He kitiche aahe?' },
      pa: { text: 'ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?', phonetics: 'Ih kinne da hai?' },
      gu: { text: 'આ કેટલાનું છે?', phonetics: 'Aa ketlanu chhe?' }
    }
  },
  {
    id: 'bs-14',
    category: 'emergency',
    english: 'Can you please help me?',
    translations: {
      hi: { text: 'क्या आप मेरी मदद कर सकते हैं?', phonetics: 'Kya aap meri madad kar sakte hain?' },
      ta: { text: 'எனக்கு கொஞ்சம் உதவ முடியுமா?', phonetics: 'Enakku konjam uthava mudiyuma?' },
      te: { text: 'నాకు సహాయం చేస్తారా?', phonetics: 'Naaku sahaayam chesthaara?' },
      bn: { text: 'আপনি কি আমাকে সাহায্য করতে পারেন?', phonetics: 'Apni ki amake sahajjo korte paren?' },
      kn: { text: 'ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?', phonetics: 'Neevu nanage sahaaya maadabahude?' },
      ml: { text: 'എന്നെ ഒന്ന് സഹായിക്കാമോ?', phonetics: 'Enne onnu sahayikkamo?' },
      mr: { text: 'तुम्ही मला मदत करू शकता का?', phonetics: 'Tumhi mala madat karu shakta ka?' },
      pa: { text: 'ਕੀ ਤੁਸੀਂ ਮੇਰੀ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ?', phonetics: 'Ki tusi meri madad kar sakde ho?' },
      gu: { text: 'શું તમે મને મદદ કરી શકો?', phonetics: 'Shu tame mane madad kari shako?' }
    }
  }
];

export {
  FALOU_CONVERSATIONS,
  getFalouConversationsForLanguage,
  HINDI_FALOU_CONVERSATIONS,
  TAMIL_FALOU_CONVERSATIONS,
  TELUGU_FALOU_CONVERSATIONS,
  BENGALI_FALOU_CONVERSATIONS,
  KANNADA_FALOU_CONVERSATIONS,
  MALAYALAM_FALOU_CONVERSATIONS,
  MARATHI_FALOU_CONVERSATIONS,
  PUNJABI_FALOU_CONVERSATIONS,
  GUJARATI_FALOU_CONVERSATIONS
} from './falou/index';
