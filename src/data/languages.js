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
    lang: 'Hindi & Indian Street Culture',
    langCode: 'hi-IN',
    imageEmoji: '☕',
    description: 'Why do friends always ask for "cutting" chai at street stalls?',
    xpReward: 15,
    characters: [
      { name: 'Ramesh', avatar: '👨' },
      { name: 'Chaiwala', avatar: '🧔' }
    ],
    lines: [
      { 
        type: 'dialogue', 
        speaker: 'Ramesh', 
        avatar: '👨', 
        text: 'भैया, दो कटिंग चाय देना!', 
        roman: 'Bhaiya, do cutting chai dena!', 
        english: 'Brother, please give two cutting chais!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Chaiwala', 
        avatar: '🧔', 
        text: 'हाँ बाबूजी, अभी ताज़ा अदरक कूट के बनाता हूँ!', 
        roman: 'Haan babuji, abhi taaza adrak koot ke banata hoon!', 
        english: 'Yes sir, making it fresh right now with crushed ginger!' 
      },
      { 
        type: 'question', 
        prompt: 'Why is it called "cutting" chai in India?', 
        options: [
          { text: 'Half a glass of strong tea to sip while chatting with friends', correct: true },
          { text: 'Tea with cold ice cubes', correct: false },
          { text: 'Tea served with kitchen scissors', correct: false }
        ], 
        explanation: '"Cutting" refers to half a glass—strong, spiced, and ideal for quick road chats without getting overly full!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Ramesh', 
        avatar: '👨', 
        text: 'वाह! गरमा-गरम चाय की खुशबू बहुत बढ़िया है।', 
        roman: 'Waah! Garma-garam chai ki khushboo bahut badhiya hai.', 
        english: 'Wow! The aroma of hot spiced tea is wonderful.' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Chaiwala', 
        avatar: '🧔', 
        text: 'लीजिए, कड़क चाय पीजिए और दिन बनाइए!', 
        roman: 'Leejiye, kadak chai peejiye aur din banaiye!', 
        english: 'Here you go, drink this strong tea and enjoy your day!' 
      },
      { 
        type: 'question', 
        prompt: 'What does "कड़क चाय" (Kadak chai) mean?', 
        options: [
          { text: 'Strong and richly brewed tea', correct: true },
          { text: 'Sour tea', correct: false },
          { text: 'Watery tea without milk', correct: false }
        ], 
        explanation: 'Kadak means strong, rich, and full-bodied tea!' 
      }
    ],
    desiWord: 'अदरक वाली कड़क चाय (Adrak wali kadak chai)'
  },
  {
    id: 'story-2',
    title: 'The Mystery of South Indian Filter Coffee',
    lang: 'Tamil & South India',
    langCode: 'ta-IN',
    imageEmoji: '☕',
    description: 'The science of the dabara and the frothy "meter coffee" pour.',
    xpReward: 15,
    characters: [
      { name: 'Priya', avatar: '👩' },
      { name: 'Coffee Master', avatar: '👨‍🍳' }
    ],
    lines: [
      { 
        type: 'dialogue', 
        speaker: 'Priya', 
        avatar: '👩', 
        text: 'அண்ணா, ஒரு ஸ்ட்ராங் பில்டர் காபி குடுங்க!', 
        roman: 'Anna, oru strong filter kaapi kudunga!', 
        english: 'Brother, please give one strong filter coffee!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Coffee Master', 
        avatar: '👨‍🍳', 
        text: 'டபரா செட்ல சூடா, நுரை ததும்ப தரேன் அம்மா!', 
        roman: 'Dabara set-la sooda, nurai thadhumba tharen amma!', 
        english: 'Giving it hot in a brass dabara set with frothy foam, ma\'am!' 
      },
      { 
        type: 'question', 
        prompt: 'Why is South Indian filter coffee called "Meter Coffee"?', 
        options: [
          { text: 'It is aerated by pouring between cup and dabara from a meter high', correct: true },
          { text: 'It costs one meter of silk', correct: false },
          { text: 'It takes one meter of time to brew', correct: false }
        ], 
        explanation: 'Masters pour the coffee back and forth from an arm\'s length to create velvety natural crema foam without steam machines!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Priya', 
        avatar: '👩', 
        text: 'காபி வாசனை தூக்குது! சக்கரை சரியா இருக்கு.', 
        roman: 'Kaapi vaasanai thookudhu! Sakkari sariyaa irukku.', 
        english: 'The coffee aroma is heavenly! Sugar is just right.' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Coffee Master', 
        avatar: '👨‍🍳', 
        text: 'நம்ம காபி குடிச்சா நாள் பூரா சுறுசுறுப்பா இருக்கும்!', 
        roman: 'Namma kaapi kudicha naal poora surusuruppaa irukkum!', 
        english: 'Drinking our coffee keeps you energetic all day long!' 
      }
    ],
    desiWord: 'பில்டர் காபி (Filter Kaapi)'
  },
  {
    id: 'story-3',
    title: 'The Art of Indian Head Bobble',
    lang: 'Pan-Indian Expression',
    langCode: 'hi-IN',
    imageEmoji: '🙂',
    description: 'What does the famous Indian affirmative head nod actually mean?',
    xpReward: 15,
    characters: [
      { name: 'Traveler', avatar: '🎒' },
      { name: 'Amit', avatar: '🧑' }
    ],
    lines: [
      { 
        type: 'dialogue', 
        speaker: 'Traveler', 
        avatar: '🎒', 
        text: 'Excuse me, is this the right bus to the railway station?', 
        roman: 'Excuse me, is this the right bus?', 
        english: 'Excuse me, is this the right bus to the railway station?' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Amit', 
        avatar: '🧑', 
        text: 'हाँ भाई, बिल्कुल यही बस है! (warm head tilt)', 
        roman: 'Haan bhai, bilkul yahi bus hai!', 
        english: 'Yes brother, definitely this bus!' 
      },
      { 
        type: 'question', 
        prompt: 'What does a gentle side-to-side Indian head nod mean?', 
        options: [
          { text: '"Yes", "I understand", or "All good!"', correct: true },
          { text: '"No, go away"', correct: false },
          { text: '"I am angry"', correct: false }
        ], 
        explanation: 'A smooth side-to-side tilt is a polite, warm non-verbal affirmation shared across all Indian states!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Traveler', 
        avatar: '🎒', 
        text: 'Thank you so much! You are very kind.', 
        roman: 'Dhanyavaad!', 
        english: 'Thank you so much! You are very kind.' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Amit', 
        avatar: '🧑', 
        text: 'अरे कोई बात नहीं, यात्रा मंगलमय हो!', 
        roman: 'Arre koi baat nahi, yaatra mangalmay ho!', 
        english: 'No problem at all, have a blessed journey!' 
      }
    ],
    desiWord: 'हाँ भाई / சரிங்க (All good / Affirmative)'
  },
  {
    id: 'story-4',
    title: 'Why Tamilians Never Say "Goodbye"',
    lang: 'Tamil Culture & Etiquette',
    langCode: 'ta-IN',
    imageEmoji: '🙏',
    description: 'The heartfelt cultural reason behind saying "Poi Varugiren".',
    xpReward: 15,
    characters: [
      { name: 'Kavitha', avatar: '👧' },
      { name: 'Paati (Grandmother)', avatar: '👵' }
    ],
    lines: [
      { 
        type: 'dialogue', 
        speaker: 'Kavitha', 
        avatar: '👧', 
        text: 'பாட்டி, நான் கிளம்புறேன்... போய் வருகிறேன்!', 
        roman: 'Paati, naan kelamburen... Poi varugiren!', 
        english: 'Grandma, I am heading out... I will go and return!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Paati', 
        avatar: '👵', 
        text: 'நல்லபடியா போய் வா கண்ணா, பத்திரமா போ!', 
        roman: 'Nallabadiya poi vaa kanna, pathirama po!', 
        english: 'Go and return safely dear, take care on the road!' 
      },
      { 
        type: 'question', 
        prompt: 'Why do Tamilians say "போய் வருகிறேன்" (Poi varugiren) instead of goodbye?', 
        options: [
          { text: 'Saying a blunt "goodbye" implies finality; this promises an affectionate reunion', correct: true },
          { text: 'They forgot where they are going', correct: false },
          { text: 'It means they refuse to leave', correct: false }
        ], 
        explanation: '"Poi Varugiren" literally means "I go, only to return to you", turning departures into promises of seeing each other again!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Kavitha', 
        avatar: '👧', 
        text: 'சாயங்காலம் கண்டிப்பா வந்துடுவேன் பாட்டி!', 
        roman: 'Saayangalam kandippaa vandhuduven paati!', 
        english: 'I will definitely be back by this evening, grandma!' 
      }
    ],
    desiWord: 'போய் வருகிறேன் (Poi varugiren - I will go and return)'
  },
  {
    id: 'story-5',
    title: 'The Sacred Banana Leaf Feast',
    lang: 'Tamil & Kerala Dining Heritage',
    langCode: 'ta-IN',
    imageEmoji: '🍃',
    description: 'The ancient culinary etiquette of the banana leaf feast.',
    xpReward: 15,
    characters: [
      { name: 'Host', avatar: '👨‍💼' },
      { name: 'Guest', avatar: '🧑' }
    ],
    lines: [
      { 
        type: 'dialogue', 
        speaker: 'Host', 
        avatar: '👨‍💼', 
        text: 'வாருங்கள்! தலைவாழை இலை விருந்து தயார்!', 
        roman: 'Vaarungal! Thalaivaazhai ilai virundhu thayaar!', 
        english: 'Welcome! The fresh banana leaf feast is ready!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Guest', 
        avatar: '🧑', 
        text: 'பாயாசம், சாம்பார், வடை... எல்லாமே அருமை!', 
        roman: 'Paayasam, saambaar, vadai... ellame arumai!', 
        english: 'Payasam, sambar, vadai... everything smells amazing!' 
      },
      { 
        type: 'question', 
        prompt: 'After dining on a banana leaf, why do guests fold it towards themselves?', 
        options: [
          { text: 'It is the highest compliment showing the guest is deeply satisfied', correct: true },
          { text: 'To hide food leftovers', correct: false },
          { text: 'Because the leaf is dirty', correct: false }
        ], 
        explanation: 'Folding the top half down towards yourself indicates pure gastronomic satisfaction and heartfelt gratitude to the host!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Guest', 
        avatar: '🧑', 
        text: 'வயிறு நிறைந்தது, மனசும் நிறைந்தது!', 
        roman: 'Vayiru niraindhadhu, manasum niraindhadhu!', 
        english: 'My stomach is full, and my heart is completely satisfied!' 
      }
    ],
    desiWord: 'வயிறு நிறைந்தது! (Vayiru niraindhadhu - Fully satisfied)'
  },
  {
    id: 'story-6',
    title: 'The Magic of "சும்மா" (Summa)',
    lang: 'Tamil Colloquial Genius',
    langCode: 'ta-IN',
    imageEmoji: '✨',
    description: 'The one untranslatable word every Tamilian uses dozens of times each day.',
    xpReward: 15,
    characters: [
      { name: 'Mani', avatar: '🧔' },
      { name: 'Siva', avatar: '🧑' }
    ],
    lines: [
      { 
        type: 'dialogue', 
        speaker: 'Mani', 
        avatar: '🧔', 
        text: 'மச்சி, என்ன பண்ற இப்போ?', 
        roman: 'Machi, enna panra ippo?', 
        english: 'Buddy, what are you doing right now?' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Siva', 
        avatar: '🧑', 
        text: 'சும்மா தான் இருக்கேன் டா, சொல்லு!', 
        roman: 'Summa dhaan irukken da, sollu!', 
        english: 'Just chilling doing nothing bro, tell me!' 
      },
      { 
        type: 'question', 
        prompt: 'What does "சும்மா" (Summa) mean in Tamil colloquial speech?', 
        options: [
          { text: '"Just like that", "simply", or "just chilling"', correct: true },
          { text: '"Very serious official work"', correct: false },
          { text: '"Danger ahead"', correct: false }
        ], 
        explanation: '"Summa" is the versatile Tamil word for "just like that", "simply", or "casually"!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Mani', 
        avatar: '🧔', 
        text: 'டீ குடிக்க போலாமா? சும்மா ஒரு ரவுண்ட்!', 
        roman: 'Tea kudikka polaama? Summa oru round!', 
        english: 'Shall we go drink tea? Just a quick casual walk!' 
      },
      { 
        type: 'dialogue', 
        speaker: 'Siva', 
        avatar: '🧑', 
        text: 'வா போலாம்! சும்மா அதிர வைக்கலாம்!', 
        roman: 'Vaa polaam! Summa adhira vaikkalaam!', 
        english: 'Come let\'s go! Let\'s have a blast!' 
      }
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
