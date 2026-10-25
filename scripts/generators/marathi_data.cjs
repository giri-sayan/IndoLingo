// Marathi Full 8-Unit Curriculum Data
module.exports = {
  id: "marathi",
  name: "Marathi",
  nativeName: "मराठी",
  code: "mr-IN",
  family: "Indo-Aryan (Southern)",
  region: "Maharashtra, Goa & Western Deccan",
  speakers: "99M+",
  greeting: "नमस्कार (Namaskar)",
  color: "from-amber-600 via-orange-600 to-rose-700",
  accentColor: "#ea580c",
  flagEmoji: "🚩",
  mascotQuote: "चला! अ-आ-इ-ई पासून आजीवन अस्सल मराठी होईपर्यंत अभिमानाने शिकूया!",
  alphabet: [
    { char: "अ", roman: "a", sound: "short 'uh' as in cup (अननस - Pineapple)", type: "vowel" },
    { char: "आ", roman: "aa", sound: "long 'aah' as in father (आई - Mother)", type: "vowel" },
    { char: "इ", roman: "i", sound: "short 'ih' as in pin (इमारت - Building)", type: "vowel" },
    { char: "ई", roman: "ee", sound: "long 'ee' as in feel (ईश्वर - God)", type: "vowel" },
    { char: "उ", roman: "u", sound: "short 'oo' as in put (उंदीर - Mouse)", type: "vowel" },
    { char: "ऊ", roman: "oo", sound: "long 'ooh' as in moon (ऊस - Sugarcane)", type: "vowel" },
    { char: "ऋ", roman: "ru", sound: "vocalic 'ri' (ऋषी - Sage)", type: "vowel" },
    { char: "ए", roman: "e", sound: "short 'ay' as in hey (एक - One)", type: "vowel" },
    { char: "ऐ", roman: "ai", sound: "diphthong 'eye' as in sky (ऐट - Style / Swagger)", type: "vowel" },
    { char: "ओ", roman: "o", sound: "short 'oh' as in omit (ओठ - Lips)", type: "vowel" },
    { char: "औ", roman: "au", sound: "diphthong 'ow' as in cow (औषध - Medicine)", type: "vowel" },
    { char: "अं", roman: "am", sound: "anusvara nasal (अंगठी - Ring)", type: "vowel" },
    { char: "क", roman: "ka", sound: "unaspirated 'k' (कमळ - Lotus)", type: "consonant" },
    { char: "ख", roman: "kha", sound: "aspirated 'kh' (खिडकी - Window)", type: "consonant" },
    { char: "ग", roman: "ga", sound: "hard 'g' as in go (गणपती - Ganpati)", type: "consonant" },
    { char: "घ", roman: "gha", sound: "aspirated 'gh' (घर - Home)", type: "consonant" },
    { char: "च", roman: "cha", sound: "soft 'ch' (चहा - Tea)", type: "consonant" },
    { char: "छ", roman: "chha", sound: "aspirated 'chh' (छत्री - Umbrella)", type: "consonant" },
    { char: "ज", roman: "ja", sound: "voiced 'j' (जहाज - Ship)", type: "consonant" },
    { char: "झ", roman: "jha", sound: "aspirated 'jh' (झेंडा - Flag)", type: "consonant" },
    { char: "ट", roman: "ta", sound: "retroflex 't' (टोपी - Cap)", type: "consonant" },
    { char: "ठ", roman: "tha", sound: "aspirated retroflex 'th' (ठसा - Stamp)", type: "consonant" },
    { char: "ड", roman: "da", sound: "retroflex 'd' (डबा - Tiffin box)", type: "consonant" },
    { char: "ढ", roman: "dha", sound: "aspirated retroflex 'dh' (ढग - Cloud)", type: "consonant" },
    { char: "ण", roman: "na", sound: "retroflex 'n' (बाण - Arrow)", type: "consonant" },
    { char: "त", roman: "tha", sound: "soft dental 't' (तलाव - Pond)", type: "consonant" },
    { char: "थ", roman: "tha", sound: "aspirated dental 'th' (थवा - Flock)", type: "consonant" },
    { char: "द", roman: "dha", sound: "soft voiced dental 'd' (दुकान - Shop)", type: "consonant" },
    { char: "ध", roman: "dha", sound: "aspirated dental 'dh' (धनुष्य - Bow)", type: "consonant" },
    { char: "न", roman: "na", sound: "alveolar 'n' (नमस्कार - Greetings)", type: "consonant" },
    { char: "प", roman: "pa", sound: "unaspirated 'p' (पाणी - Water)", type: "consonant" },
    { char: "फ", roman: "pha", sound: "aspirated 'ph' (फळ - Fruit)", type: "consonant" },
    { char: "ब", roman: "ba", sound: "voiced 'b' (बैल - Ox)", type: "consonant" },
    { char: "भ", roman: "bha", sound: "aspirated 'bh' (भारत - India)", type: "consonant" },
    { char: "म", roman: "ma", sound: "bilabial 'm' (माणूस - Human)", type: "consonant" },
    { char: "य", roman: "ya", sound: "palatal glide 'y' (यात्रा - Pilgrimage)", type: "consonant" },
    { char: "र", roman: "ra", sound: "rolled 'r' (रास्ता - Path)", type: "consonant" },
    { char: "ल", roman: "la", sound: "dental 'l' (लाडू - Laddu sweet)", type: "consonant" },
    { char: "व", roman: "va", sound: "labiodental 'v' (वडापाव - Vada Pav)", type: "consonant" },
    { char: "श", roman: "sha", sound: "palatal 'sh' (शिवाजी - Shivaji)", type: "consonant" },
    { char: "स", roman: "sa", sound: "sibilant 's' (सूर्य - Sun)", type: "consonant" },
    { char: "ह", roman: "ha", sound: "glottal 'h' (हत्ती - Elephant)", type: "consonant" },
    { char: "ळ", roman: "la", sound: "retroflex lateral 'L' (बाळ - Baby)", type: "special" },
    { char: "क्ष", roman: "ksha", sound: "conjunct ksh (क्षत्रिय - Warrior)", type: "special" },
    { char: "ज्ञ", roman: "dnya", sound: "nasalized dnya (ज्ञान - Knowledge)", type: "special" }
  ],
  units: [
    {
      id: "mr-u1",
      unitNumber: 1,
      title: "Unit 1: वर्णमाला & आपुलकीची सुरुवात",
      description: "Marathi Devanagari, Namaskar, Courteous Introductions & First Words",
      color: "from-orange-600 to-amber-700",
      guidebook: {
        title: "Marathi Foundations: Dignity, Sweetness & Pride",
        summary: "Marathi possesses profound literary heritage celebrating chivalry and devotion. Words are spoken with distinct clarity and heartfelt warmth (Namaskar, Kase aahat).",
        keyPhrases: [
          { native: "नमस्कार", roman: "Namaskar", meaning: "Hello / Formal Greeting" },
          { native: "धन्यवाद", roman: "Dhanyavaad", meaning: "Thank you" },
          { native: "तुम्ही कसे आहात?", roman: "Tumhi kase ahat?", meaning: "How are you? (Respectful)" },
          { native: "मी ठीक आहे", roman: "Mee theek aahe", meaning: "I am fine / doing well" },
          { native: "तुमचे नाव काय आहे?", roman: "Tumche naav kaay aahe?", meaning: "What is your name?" }
        ]
      },
      lessons: [
        {
          id: "mr-l1",
          title: "Warm Marathi Greetings (नमस्कार)",
          description: "Say hello and ask how someone is doing",
          xp: 20,
          questions: [
            {
              id: "mr-q1",
              type: "multiple-choice",
              prompt: "How do you say 'Hello / Greetings' politely in Marathi?",
              options: [
                { text: "नमस्कार (Namaskar)", correct: true },
                { text: "धन्यवाद (Dhanyavaad)", correct: false },
                { text: "ठीक आहे (Theek aahe)", correct: false }
              ],
              explanation: "'नमस्कार' is the universal respectful Marathi greeting.",
              audioText: "नमस्कार"
            },
            {
              id: "mr-q2",
              type: "sentence-builder",
              prompt: "Build: 'I am fine' in Marathi",
              wordBank: ["मी", "मजेत", "आहे", "तुम्ही", "कसे"],
              correctSequence: ["मी", "मजेत", "आहे"],
              targetSentence: "मी मजेत आहे",
              targetRoman: "Mee majet aahe",
              explanation: "'मी' means I, 'मजेत' means fine/cheerful, 'आहे' means am."
            },
            {
              id: "mr-q3",
              type: "match-pairs",
              prompt: "Match the Marathi greetings",
              pairs: [
                { left: "नमस्कार", right: "Hello / Greetings" },
                { left: "धन्यवाद", right: "Thank you" },
                { left: "मजेत", right: "Fine / In joy" }
              ]
            }
          ]
        },
        {
          id: "mr-l2",
          title: "Introductions (तुमचे नाव काय?)",
          description: "Say your name and ask someone's identity",
          xp: 20,
          questions: [
            {
              id: "mr-q4",
              type: "multiple-choice",
              prompt: "What does 'तुमचे नाव काय आहे?' (Tumche naav kaay aahe?) mean?",
              options: [
                { text: "What is your name?", correct: true },
                { text: "Where do you live?", correct: false },
                { text: "How much is this?", correct: false }
              ],
              explanation: "'तुमचे' is respectful Your, 'नाव' is Name, 'काय' is What.",
              audioText: "तुमचे नाव काय आहे?"
            },
            {
              id: "mr-q5",
              type: "sentence-builder",
              prompt: "Build: 'Pleased to meet you' in Marathi",
              wordBank: ["तुम्हाला", "भेटून", "आनंद", "झाला"],
              correctSequence: ["तुम्हाला", "भेटून", "आनंद", "झाला"],
              targetSentence: "तुम्हाला भेटून आनंद झाला",
              targetRoman: "Tumhala bhetun aanand jhaala",
              explanation: "Expresses delight upon meeting someone."
            },
            {
              id: "mr-q6",
              type: "match-pairs",
              prompt: "Match Marathi conversational words",
              pairs: [
                { left: "नाव", right: "Name" },
                { left: "हो", right: "Yes" },
                { left: "नाही", right: "No" },
                { left: "मित्र", right: "Friend" }
              ]
            }
          ]
        },
        {
          id: "mr-l3",
          title: "Polite Phrases & Excuses (माफ करा)",
          description: "Say excuse me, no problem, and alright",
          xp: 25,
          questions: [
            {
              id: "mr-q7",
              type: "multiple-choice",
              prompt: "How do you say 'Excuse me / Sorry' in Marathi?",
              options: [
                { text: "माफ करा (Maaf kara)", correct: true },
                { text: "काही हरकत नाही (Kaahi harkat naahi)", correct: false },
                { text: "ठीक आहे (Theek aahe)", correct: false }
              ],
              explanation: "'माफ करा' is the polite way to apologize or say excuse me.",
              audioText: "माफ करा"
            },
            {
              id: "mr-q8",
              type: "sentence-builder",
              prompt: "Build: 'It is fine / No problem'",
              wordBank: ["काही", "हरकत", "नाही", "बरं"],
              correctSequence: ["काही", "हरकत", "नाही"],
              targetSentence: "काही हरकत नाही",
              targetRoman: "Kaahi harkat naahi",
              explanation: "'काही हरकत नाही' means no problem at all."
            },
            {
              id: "mr-q9",
              type: "match-pairs",
              prompt: "Match polite expressions",
              pairs: [
                { left: "माफ करा", right: "Excuse me / Sorry" },
                { left: "काही हरकत नाही", right: "No problem" },
                { left: "बरं", right: "Alright / Okay" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mr-u2",
      unitNumber: 2,
      title: "Unit 2: कुटुंब & नात्यांची माया",
      description: "Family Kinship, Respectful Suffixes (-राव, -ताई) & Deep Affection",
      color: "from-amber-700 to-rose-700",
      guidebook: {
        title: "Marathi Family & Kinship: Aai, Baba, Dada, Tai",
        summary: "In Maharashtra, family words overflow with respect. Calling someone 'Dada' (elder brother) or 'Tai' (elder sister) is universal.",
        keyPhrases: [
          { native: "आई आणि बाबा", roman: "Aai aani Baba", meaning: "Mother and Father" },
          { native: "दादा आणि ताई", roman: "Dada aani Tai", meaning: "Elder brother and Elder sister" },
          { native: "लहान भाऊ", roman: "Lahaan bhaau", meaning: "Younger brother" },
          { native: "या, बसा", roman: "Yaa, basaa", meaning: "Please come, please sit" }
        ]
      },
      lessons: [
        {
          id: "mr-l4",
          title: "Parents & Immediate Family (आई & बाबा)",
          description: "Learn family terms and respectful words",
          xp: 20,
          questions: [
            {
              id: "mr-q10",
              type: "multiple-choice",
              prompt: "What is the beloved Marathi word for 'Mother'?",
              options: [
                { text: "आई (Aai)", correct: true },
                { text: "ताई (Tai)", correct: false },
                { text: "मावशी (Mavshi)", correct: false }
              ],
              explanation: "'आई' (Aai) is the sacred word for mother in Marathi.",
              audioText: "आई"
            },
            {
              id: "mr-q11",
              type: "sentence-builder",
              prompt: "Build: 'This is my mother'",
              wordBank: ["या", "माझ्या", "आई", "आहेत"],
              correctSequence: ["या", "माझ्या", "आई", "आहेत"],
              targetSentence: "या माझ्या आई आहेत",
              targetRoman: "Yaa maajhya aai aahet",
              explanation: "'या' is respectful 'she/this lady', 'माझ्या' is my."
            },
            {
              id: "mr-q12",
              type: "match-pairs",
              prompt: "Match Marathi family members",
              pairs: [
                { left: "आई", right: "Mother" },
                { left: "बाबा", right: "Father" },
                { left: "घर", right: "House / Home" }
              ]
            }
          ]
        },
        {
          id: "mr-l5",
          title: "Siblings & Affectionate Kinship (दादा & ताई)",
          description: "Brothers, sisters, and calling someone Dada or Tai",
          xp: 20,
          questions: [
            {
              id: "mr-q13",
              type: "multiple-choice",
              prompt: "How do you address an elder brother in Marathi?",
              options: [
                { text: "दादा (Dada)", correct: true },
                { text: "ताई (Tai)", correct: false },
                { text: "काका (Kaka)", correct: false }
              ],
              explanation: "'दादा' is elder brother, widely used across Maharashtra.",
              audioText: "दादा"
            },
            {
              id: "mr-q14",
              type: "sentence-builder",
              prompt: "Build: 'Elder sister is reading a book'",
              wordBank: ["ताई", "पुस्तक", "वाचत", "आहे"],
              correctSequence: ["ताई", "पुस्तक", "वाचत", "आहे"],
              targetSentence: "ताई पुस्तक वाचत आहे",
              targetRoman: "Tai pustak vaachat aahe",
              explanation: "'वाचत आहे' means reading."
            },
            {
              id: "mr-q15",
              type: "match-pairs",
              prompt: "Match sibling titles",
              pairs: [
                { left: "दादा", right: "Elder brother" },
                { left: "ताई", right: "Elder sister" },
                { left: "भाऊ", right: "Brother" },
                { left: "बहीण", right: "Sister" }
              ]
            }
          ]
        },
        {
          id: "mr-l6",
          title: "Maharashtrian Hospitality (या, बसा)",
          description: "Welcoming guests and offering snacks & water",
          xp: 25,
          questions: [
            {
              id: "mr-q16",
              type: "multiple-choice",
              prompt: "How do you warmly invite a guest inside your home in Marathi?",
              options: [
                { text: "आत या, बसा (Aat yaa, basaa)", correct: true },
                { text: "बाहेर जा (Baaher jaa)", correct: false },
                { text: "झोपा (Jhopaa)", correct: false }
              ],
              explanation: "'आत या' means please come in, 'बसा' means please sit.",
              audioText: "आत या, बसा"
            },
            {
              id: "mr-q17",
              type: "sentence-builder",
              prompt: "Build: 'Please drink water'",
              wordBank: ["पाणी", "घ्या", "या", "बसा"],
              correctSequence: ["पाणी", "घ्या"],
              targetSentence: "पाणी घ्या",
              targetRoman: "Paani ghyaa",
              explanation: "'पाणी' is water, 'घ्या' is please take."
            },
            {
              id: "mr-q18",
              type: "match-pairs",
              prompt: "Match hospitality verbs",
              pairs: [
                { left: "या", right: "Please come" },
                { left: "बसा", right: "Please sit" },
                { left: "घ्या", right: "Please take" },
                { left: "खा", right: "Please eat" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mr-u3",
      unitNumber: 3,
      title: "Unit 3: टपरी चहा, वडापाव & पुरणपोळी",
      description: "Cutting Chai Tapri, Sizzling Vada Pav, Kolhapuri Misal & Festive Puran Poli",
      color: "from-orange-600 to-red-700",
      guidebook: {
        title: "The Culinary Heart of Maharashtra: Vada Pav & Puran Poli",
        summary: "Mumbai's lifelines are the cutting chai tapri and spicy green chutney Vada Pav, while festivals are sweetened with ghee-soaked Puran Poli and fragrant Modaks.",
        keyPhrases: [
          { native: "एक कटिंग चहा द्या", roman: "Ek cutting chaha dyaa", meaning: "Give one cutting tea" },
          { native: "एक गरम वडापाव", roman: "Ek garam vada pav", meaning: "One hot vada pav" },
          { native: "मिसळ खूप झणझणीत आहे", roman: "Misal khup jhanjhaneet aahe", meaning: "The misal is wonderfully spicy" },
          { native: "जेवलात का?", roman: "Jevlaat kaa?", meaning: "Did you have your meal? (Affectionate)" }
        ]
      },
      lessons: [
        {
          id: "mr-l7",
          title: "Cutting Chai & Vada Pav (एक कटिंग द्या)",
          description: "Order cutting tea and Mumbai's iconic burger",
          xp: 20,
          questions: [
            {
              id: "mr-q19",
              type: "multiple-choice",
              prompt: "How do you order 'One cutting chai and one vada pav' in Marathi?",
              options: [
                { text: "एक कटिंग चहा आणि एक वडापाव द्या (Ek cutting chaha aani ek vada pav dyaa)", correct: true },
                { text: "पाणी नको (Paani nako)", correct: false },
                { text: "बिल द्या (Bill dyaa)", correct: false }
              ],
              explanation: "'कटिंग चहा' is half a glass of strong tea; 'द्या' means please give.",
              audioText: "एक कटिंग चहा आणि एक वडापाव द्या"
            },
            {
              id: "mr-q20",
              type: "sentence-builder",
              prompt: "Build: 'One tea with less sugar'",
              wordBank: ["कमी", "साखरेचा", "चहा", "एक", "जास्त"],
              correctSequence: ["कमी", "साखरेचा", "चहा"],
              targetSentence: "कमी साखरेचा चहा",
              targetRoman: "Kami saakhrecha chaha",
              explanation: "'कमी साखरेचा' means with less sugar."
            },
            {
              id: "mr-q21",
              type: "match-pairs",
              prompt: "Match street food snacks",
              pairs: [
                { left: "वडापाव", right: "Vada Pav" },
                { left: "मिसळ पाव", right: "Spicy Misal Pav" },
                { left: "पोहे", right: "Kanda Poha" },
                { left: "चहा", right: "Cutting Chai" }
              ]
            }
          ]
        },
        {
          id: "mr-l8",
          title: "Misal & Traditional Feasts (पुरणपोळी)",
          description: "Taste praises, spice levels, and sweets",
          xp: 20,
          questions: [
            {
              id: "mr-q22",
              type: "multiple-choice",
              prompt: "How do you say 'The food is very delicious' in Marathi?",
              options: [
                { text: "जेवण खूप चवदार आहे (Jevan khup chavdaar aahe)", correct: true },
                { text: "भूक नाही (Bhook naahi)", correct: false },
                { text: "थंड आहे (Thand aahe)", correct: false }
              ],
              explanation: "'चवदार' (Chavdaar) means full of flavor / tasty.",
              audioText: "जेवण खूप चवदार आहे"
            },
            {
              id: "mr-q23",
              type: "sentence-builder",
              prompt: "Build: 'Please make it less spicy'",
              wordBank: ["तिखट", "थोडे", "कमी", "करा", "जास्त"],
              correctSequence: ["तिखट", "थोडे", "कमी", "करा"],
              targetSentence: "तिखट थोडे कमी करा",
              targetRoman: "Tikhat thode kami kara",
              explanation: "'तिखट' is spicy, 'कमी करा' means please reduce.",
              audioText: "तिखट थोडे कमी करा"
            },
            {
              id: "mr-q24",
              type: "match-pairs",
              prompt: "Match taste words in Marathi",
              pairs: [
                { left: "तिखट", right: "Spicy / Hot" },
                { left: "गोड", right: "Sweet" },
                { left: "आंबट", right: "Sour" },
                { left: "खारट", right: "Salty" }
              ]
            }
          ]
        },
        {
          id: "mr-l9",
          title: "The Caring Question: 'जेवलात का?'",
          description: "Understanding Maharashtra's most loving greeting",
          xp: 25,
          questions: [
            {
              id: "mr-q25",
              type: "multiple-choice",
              prompt: "Why do Maharashtrians always ask 'जेवलात का?' (Jevlaat kaa?)?",
              options: [
                { text: "It is the warmest cultural expression asking 'Have you eaten?' and showing love", correct: true },
                { text: "They want to know your diet plan", correct: false },
                { text: "It means the store is shutting", correct: false }
              ],
              explanation: "In Maharashtra, asking if you have dined is the ultimate manifestation of hospitality.",
              audioText: "जेवलात का?"
            },
            {
              id: "mr-q26",
              type: "sentence-builder",
              prompt: "Build: 'Yes, my meal is done'",
              wordBank: ["हो", "माझे", "जेवण", "झाले", "नाही"],
              correctSequence: ["हो", "माझे", "जेवण", "झाले"],
              targetSentence: "हो माझे जेवण झाले",
              targetRoman: "Ho maajhe jevan jhaale",
              explanation: "'झाले' means is finished / done."
            },
            {
              id: "mr-q27",
              type: "match-pairs",
              prompt: "Match meal terms",
              pairs: [
                { left: "जेवण", right: "Meal / Lunch / Dinner" },
                { left: "नाश्ता", right: "Breakfast / Snacks" },
                { left: "पाणी", right: "Water" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mr-u4",
      unitNumber: 4,
      title: "Unit 4: लोकल ट्रेन, रिक्षा & रस्ते",
      description: "Mumbai Local Trains, Auto Meter, CST & Pune City Navigation",
      color: "from-blue-600 to-indigo-700",
      guidebook: {
        title: "Mumbai Commuting: Local Trains & 'पुढील स्टेशन'",
        summary: "Mumbai local trains are the veins of the city. Knowing 'पुढील स्टेशन' (Next station), directions like 'उजवीकडे' (Right), and hailing autos makes travel seamless.",
        keyPhrases: [
          { native: "दादरला जाणार का?", roman: "Dadar-la jaanaar kaa?", meaning: "Will you go to Dadar?" },
          { native: "मीटरने चला", roman: "Meter-ne chalaa", meaning: "Please go by the meter" },
          { native: "उजवीकडे / डावीकडे", roman: "Ujveekade / Daaveekade", meaning: "To the right / To the left" },
          { native: "इथेच थांबवा", roman: "Ithech thaambvaa", meaning: "Please stop right here" }
        ]
      },
      lessons: [
        {
          id: "mr-l10",
          title: "Hailing an Auto (दादरला जाणार کا?)",
          description: "Flag down an auto and confirm destination",
          xp: 20,
          questions: [
            {
              id: "mr-q28",
              type: "multiple-choice",
              prompt: "How do you ask an auto driver 'Will you go to Dadar?' in Marathi?",
              options: [
                { text: "दादरला जाणार का? (Dadar-la jaanaar kaa?)", correct: true },
                { text: "दादर कुठे आहे? (Dadar kuthe aahe?)", correct: false },
                { text: "नको (Nako)", correct: false }
              ],
              explanation: "'जाणार का?' politely asks 'Will you go?'.",
              audioText: "दादरला जाणार का?"
            },
            {
              id: "mr-q29",
              type: "sentence-builder",
              prompt: "Build: 'Please go by meter'",
              wordBank: ["मीटरने", "चला", "थांबवा", "किती"],
              correctSequence: ["मीटरने", "चला"],
              targetSentence: "मीटरने चला",
              targetRoman: "Meter-ne chalaa",
              explanation: "'चला' means please proceed."
            },
            {
              id: "mr-q30",
              type: "match-pairs",
              prompt: "Match transit vocabulary",
              pairs: [
                { left: "किती भाडे", right: "How much fare" },
                { left: "इथेच थांबवा", right: "Stop right here" },
                { left: "रेल्वे स्टेशन", right: "Railway station" }
              ]
            }
          ]
        },
        {
          id: "mr-l11",
          title: "Directions & Turns (उजवीकडे & डावीकडे)",
          description: "Give turn-by-turn navigation in streets and lanes",
          xp: 20,
          questions: [
            {
              id: "mr-q31",
              type: "multiple-choice",
              prompt: "What is 'Turn Right' in Marathi?",
              options: [
                { text: "उजवीकडे वळा (Ujveekade valaa)", correct: true },
                { text: "डावीकडे वळा (Daaveekade valaa)", correct: false },
                { text: "सरळ जा (Saral jaa)", correct: false }
              ],
              explanation: "'उजवीकडे' is to the right, 'वळा' is turn.",
              audioText: "उजवीकडे वळा"
            },
            {
              id: "mr-q32",
              type: "sentence-builder",
              prompt: "Build: 'Go straight ahead'",
              wordBank: ["सरळ", "पुढे", "जा", "वळा"],
              correctSequence: ["सरळ", "पुढे", "जा"],
              targetSentence: "सरळ पुढे जा",
              targetRoman: "Saral pudhe jaa",
              explanation: "'सरळ' means straight, 'पुढे' means ahead/forward."
            },
            {
              id: "mr-q33",
              type: "match-pairs",
              prompt: "Match Marathi directions",
              pairs: [
                { left: "उजवीकडे", right: "To the right" },
                { left: "डावीकडे", right: "To the left" },
                { left: "सरळ", right: "Straight" },
                { left: "जवळ", right: "Near / Close by" }
              ]
            }
          ]
        },
        {
          id: "mr-l12",
          title: "Mumbai Local Train Navigation",
          description: "Catching local trains, fast/slow platforms, and tickets",
          xp: 25,
          questions: [
            {
              id: "mr-q34",
              type: "multiple-choice",
              prompt: "How do you ask 'Where is the ticket counter?' in Marathi?",
              options: [
                { text: "तिकीट खिडकी कुठे आहे? (Ticket khidki kuthe aahe?)", correct: true },
                { text: "ट्रेन कधी येईल? (Train kadhi yeil?)", correct: false },
                { text: "तिकीट किती? (Ticket kiti?)", correct: false }
              ],
              explanation: "'कुठे आहे' means where is it.",
              audioText: "तिकीट खिडकी कुठे आहे?"
            },
            {
              id: "mr-q35",
              type: "sentence-builder",
              prompt: "Build: 'Give one ticket to CST'",
              wordBank: ["सीएसटीचे", "एक", "तिकीट", "द्या"],
              correctSequence: ["सीएसटीचे", "एक", "तिकीट", "द्या"],
              targetSentence: "सीएसटीचे एक तिकीट द्या",
              targetRoman: "CST-che ek ticket dyaa",
              explanation: "'द्या' is please give."
            },
            {
              id: "mr-q36",
              type: "match-pairs",
              prompt: "Match question words",
              pairs: [
                { left: "कुठे", right: "Where" },
                { left: "कधी", right: "When" },
                { left: "का", right: "Why" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mr-u5",
      unitNumber: 5,
      title: "Unit 5: वेळ, दिनक्रम & अंक",
      description: "Numbers, Telling Time, Days of the Week & Daily Routine",
      color: "from-teal-600 to-cyan-700",
      guidebook: {
        title: "Marathi Time & Numbers: Ek, Don, Teen",
        summary: "Knowing numbers and time helps in catching trains, bargaining, and setting appointments across Maharashtra.",
        keyPhrases: [
          { native: "किती वाजले?", roman: "Kiti vaajle?", meaning: "What time is it?" },
          { native: "आज / उद्या / काल", roman: "Aaj / Udya / Kaal", meaning: "Today / Tomorrow / Yesterday" },
          { native: "सकाळी आठ वाजता", roman: "Sakaali aath vaajta", meaning: "At 8 o'clock in the morning" }
        ]
      },
      lessons: [
        {
          id: "mr-l13",
          title: "Numbers 1 to 10 (एक, दोन, तीन)",
          description: "Count smoothly in native Marathi",
          xp: 20,
          questions: [
            {
              id: "mr-q37",
              type: "multiple-choice",
              prompt: "What is 'Three' in Marathi?",
              options: [
                { text: "तीन (Teen)", correct: true },
                { text: "दोन (Don)", correct: false },
                { text: "चार (Chaar)", correct: false }
              ],
              explanation: "1=एक, 2=दोन, 3=तीन, 4=चार, 5=पाच.",
              audioText: "तीन"
            },
            {
              id: "mr-q38",
              type: "sentence-builder",
              prompt: "Build: 'Two cups of tea'",
              wordBank: ["दोन", "कप", "चहा", "एक"],
              correctSequence: ["दोन", "कप", "चहा"],
              targetSentence: "दोन कप चहा",
              targetRoman: "Don cup chaha",
              explanation: "'दोन' means two."
            },
            {
              id: "mr-q39",
              type: "match-pairs",
              prompt: "Match Marathi numbers",
              pairs: [
                { left: "एक", right: "One (1)" },
                { left: "दोन", right: "Two (2)" },
                { left: "पाच", right: "Five (5)" },
                { left: "दहा", right: "Ten (10)" }
              ]
            }
          ]
        },
        {
          id: "mr-l14",
          title: "Days of the Week (आठवड्याचे दिवस)",
          description: "Weekdays, scheduling, and tomorrow/yesterday",
          xp: 20,
          questions: [
            {
              id: "mr-q40",
              type: "multiple-choice",
              prompt: "What does 'उद्या' (Udya) mean in Marathi?",
              options: [
                { text: "Tomorrow", correct: true },
                { text: "Yesterday", correct: false },
                { text: "Today", correct: false }
              ],
              explanation: "'आज' is today, 'उद्या' is tomorrow, 'काल' is yesterday.",
              audioText: "उद्या"
            },
            {
              id: "mr-q41",
              type: "sentence-builder",
              prompt: "Build: 'We will meet tomorrow'",
              wordBank: ["उद्या", "आपण", "भेटू", "आज"],
              correctSequence: ["उद्या", "आपण", "भेटू"],
              targetSentence: "उद्या आपण भेटू",
              targetRoman: "Udya aapan bhetu",
              explanation: "'भेटू' means let us meet."
            },
            {
              id: "mr-q42",
              type: "match-pairs",
              prompt: "Match time words in Marathi",
              pairs: [
                { left: "आज", right: "Today" },
                { left: "उद्या", right: "Tomorrow" },
                { left: "काल", right: "Yesterday" }
              ]
            }
          ]
        },
        {
          id: "mr-l15",
          title: "Telling the Time (किती वाजले?)",
          description: "Ask and state the exact hour",
          xp: 25,
          questions: [
            {
              id: "mr-q43",
              type: "multiple-choice",
              prompt: "How do you ask 'What is the time?' in Marathi?",
              options: [
                { text: "किती वाजले? (Kiti vaajle?)", correct: true },
                { text: "कधी येणार? (Kadhi yenaaar?)", correct: false },
                { text: "कुठे आहात? (Kuthe aahat?)", correct: false }
              ],
              explanation: "'किती वाजले' is the standard way to ask the time.",
              audioText: "किती वाजले?"
            },
            {
              id: "mr-q44",
              type: "sentence-builder",
              prompt: "Build: 'It is five o'clock now'",
              wordBank: ["आता", "पाच", "वाजले", "चार"],
              correctSequence: ["आता", "पाच", "वाजले"],
              targetSentence: "आता पाच वाजले",
              targetRoman: "Aata paach vaajle",
              explanation: "'आता' is now, 'वाजले' means o'clock."
            },
            {
              id: "mr-q45",
              type: "match-pairs",
              prompt: "Match parts of the day",
              pairs: [
                { left: "सकाळ", right: "Morning" },
                { left: "दुपार", right: "Afternoon" },
                { left: "संध्याकाळ", right: "Evening" },
                { left: "रात्र", right: "Night" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mr-u6",
      unitNumber: 6,
      title: "Unit 6: एफसी रोड, बाजार & घासाघिस",
      description: "FC Road, Tulshibaug Shopping, Paithani Sarees & Friendly Bargaining",
      color: "from-purple-600 to-pink-700",
      guidebook: {
        title: "Bazaar Savvy in Pune & Mumbai: 'कमी करा ना!'",
        summary: "From bargaining for Kolhapuri Chappals and Paithani silk sarees in Pune's Tulshibaug to Colaba Causeway, knowing 'कमी करा' (reduce a little) ensures great deals.",
        keyPhrases: [
          { native: "याची किंमत किती?", roman: "Yaachi kimmat kiti?", meaning: "What is its price?" },
          { native: "खूप महाग आहे", roman: "Khup mahaag aahe", meaning: "It is too expensive" },
          { native: "थोडे कमी करा ना", roman: "Thode kami kara naa", meaning: "Please reduce a little" },
          { native: "दुसरा रंग आहे का?", roman: "Dusra rang aahe kaa?", meaning: "Do you have another colour?" }
        ]
      },
      lessons: [
        {
          id: "mr-l16",
          title: "Asking Price & Colors (किंमत & रंग)",
          description: "Browse sarees, chappals, and ask prices",
          xp: 20,
          questions: [
            {
              id: "mr-q46",
              type: "multiple-choice",
              prompt: "How do you ask 'What is the price of this?' in Marathi?",
              options: [
                { text: "याची किंमत किती आहे? (Yaachi kimmat kiti aahe?)", correct: true },
                { text: "हे आवडले नाही (He aavadle naahi)", correct: false },
                { text: "कुठे जाणार? (Kuthe jaanaar?)", correct: false }
              ],
              explanation: "'किंमत' means price, 'किती' means how much.",
              audioText: "याची किंमत किती आहे?"
            },
            {
              id: "mr-q47",
              type: "sentence-builder",
              prompt: "Build: 'Do you have another colour?'",
              wordBank: ["दुसरा", "रंग", "आहे", "का"],
              correctSequence: ["दुसरा", "रंग", "आहे", "का"],
              targetSentence: "दुसरा रंग आहे का",
              targetRoman: "Dusra rang aahe kaa",
              explanation: "'रंग' means colour, 'दुसरा' means another."
            },
            {
              id: "mr-q48",
              type: "match-pairs",
              prompt: "Match Marathi colours",
              pairs: [
                { left: "लाल", right: "Red" },
                { left: "निळा", right: "Blue" },
                { left: "पिवळा", right: "Yellow" },
                { left: "पांढरा", right: "White" }
              ]
            }
          ]
        },
        {
          id: "mr-l17",
          title: "Bargaining (थोडे कमी करा ना)",
          description: "Politely negotiate in street markets",
          xp: 20,
          questions: [
            {
              id: "mr-q49",
              type: "multiple-choice",
              prompt: "How do you politely tell a shopkeeper 'It is too expensive, please reduce'?",
              options: [
                { text: "खूप महाग आहे, थोडे कमी करा ना (Khup mahaag aahe, thode kami kara naa)", correct: true },
                { text: "मी घेणार नाही (Mee ghenaar naahi)", correct: false },
                { text: "पैसे नाहीत (Paise naahit)", correct: false }
              ],
              explanation: "'महाग' is expensive; 'कमी करा' means please reduce.",
              audioText: "खूप महाग आहे, थोडे कमी करा ना"
            },
            {
              id: "mr-q50",
              type: "sentence-builder",
              prompt: "Build: 'I will take this one'",
              wordBank: ["मी", "हे", "घेतो", "नको"],
              correctSequence: ["मी", "हे", "घेतो"],
              targetSentence: "मी हे घेतो",
              targetRoman: "Mee he gheto",
              explanation: "'घेतो' means I take/buy."
            },
            {
              id: "mr-q51",
              type: "match-pairs",
              prompt: "Match shopping adjectives",
              pairs: [
                { left: "महाग", right: "Expensive / High" },
                { left: "स्वस्त", right: "Cheap / Affordable" },
                { left: "उत्तम", right: "Excellent quality" }
              ]
            }
          ]
        },
        {
          id: "mr-l18",
          title: "Payment & Digital UPI (गुगल पे चालेल का?)",
          description: "Paying with UPI or cash smoothly",
          xp: 25,
          questions: [
            {
              id: "mr-q52",
              type: "multiple-choice",
              prompt: "How do you ask 'Will Google Pay or UPI work?' in Marathi?",
              options: [
                { text: "गुगल पे किंवा युपीआय चालेल का? (Google Pay kinva UPI chaalel kaa?)", correct: true },
                { text: "पैसे नको (Paise nako)", correct: false },
                { text: "पावती नको (Paavti nako)", correct: false }
              ],
              explanation: "'किंवा' means or, 'चालेल का' politely asks will it work / be accepted.",
              audioText: "गुगल पे किंवा युपीआय चालेल का?"
            },
            {
              id: "mr-q53",
              type: "sentence-builder",
              prompt: "Build: 'I sent the money'",
              wordBank: ["मी", "पैसे", "पाठवले", "दिले"],
              correctSequence: ["मी", "पैसे", "पाठवले"],
              targetSentence: "मी पैसे पाठवले",
              targetRoman: "Mee paise paathavle",
              explanation: "'पैसे' is money, 'पाठवले' means sent."
            },
            {
              id: "mr-q54",
              type: "match-pairs",
              prompt: "Match monetary terms",
              pairs: [
                { left: "पैसे", right: "Money / Cash" },
                { left: "सुट्टे पैसे", right: "Loose change / Coins" },
                { left: "पिशवी", right: "Carry bag" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mr-u7",
      unitNumber: 7,
      title: "Unit 7: नाटक, सिनेमा & अस्सल मुंबईया स्लाँग",
      description: "Marathi Theatre (Natak), Cinema, Friendship & Mumbai/Pune Slang (भावा, झकास, राडा)",
      color: "from-indigo-600 via-purple-700 to-rose-800",
      guidebook: {
        title: "Marathi Slang: 'भावा', 'एक नंबर' & 'झकास'",
        summary: "From greeting your best buddy as 'भावा' (Bhava) to celebrating great news with 'एक नंबर!' (Ek number!) and 'झकास!' (Jhakaas!), Marathi slang is electric and witty.",
        keyPhrases: [
          { native: "एक नंबर भावा!", roman: "Ek number bhaava!", meaning: "First class / Top notch, brother!" },
          { native: "काय चाललंय?", roman: "Kaay chaallay?", meaning: "What's going on / What's up?" },
          { native: "एकदम झकास!", roman: "Ekdom jhakaas!", meaning: "Totally fantastic / stylish!" },
          { native: "काळजी करू नका!", roman: "Kaalji karu nakaa!", meaning: "Do not worry at all!" }
        ]
      },
      lessons: [
        {
          id: "mr-l19",
          title: "Cinema, Natak & Praise (एक नंबर!)",
          description: "Praise theatre performances, actors, and films",
          xp: 20,
          questions: [
            {
              id: "mr-q55",
              type: "multiple-choice",
              prompt: "What does the iconic slang 'एक नंबर!' (Ek number!) mean?",
              options: [
                { text: "Top class / Absolutely fantastic / Brilliant!", correct: true },
                { text: "Only one ticket", correct: false },
                { text: "First chapter", correct: false }
              ],
              explanation: "'एक नंबर' is the ultimate everyday praise in Mumbai and Pune.",
              audioText: "एक नंबर!"
            },
            {
              id: "mr-q56",
              type: "sentence-builder",
              prompt: "Build: 'The play was totally fantastic'",
              wordBank: ["नाटक", "एकदम", "झकास", "होते", "वाईट"],
              correctSequence: ["नाटक", "एकदम", "झकास", "होते"],
              targetSentence: "नाटक एकदम झकास होते",
              targetRoman: "Naatak ekdom jhakaas hote",
              explanation: "'झकास' means dazzling / fantastic."
            },
            {
              id: "mr-q57",
              type: "match-pairs",
              prompt: "Match Marathi praise words",
              pairs: [
                { left: "एक नंबर", right: "Top notch / Superb" },
                { left: "झकास", right: "Awesome / Dazzling" },
                { left: "राडा", right: "Grand commotion / Celebration" }
              ]
            }
          ]
        },
        {
          id: "mr-l20",
          title: "Friendship Slang (भावा & दोस्ता)",
          description: "Friendly talk with buddies across Mumbai, Pune, and Nagpur",
          xp: 20,
          questions: [
            {
              id: "mr-q58",
              type: "multiple-choice",
              prompt: "What is the universal friendly address for a pal in Marathi?",
              options: [
                { text: "भावा / दोस्ता (Bhaava / Dosta)", correct: true },
                { text: "शत्रू (Shatru)", correct: false },
                { text: "परका (Parka)", correct: false }
              ],
              explanation: "'भावा' (literally brother) is used like 'bro / dude' among friends.",
              audioText: "काय चाललंय भावा"
            },
            {
              id: "mr-q59",
              type: "sentence-builder",
              prompt: "Build: 'What is going on, brother?'",
              wordBank: ["काय", "चाललंय", "भावा", "कसे"],
              correctSequence: ["काय", "चाललंय", "भावा"],
              targetSentence: "काय चाललंय भावा",
              targetRoman: "Kaay chaallay bhaava",
              explanation: "'काय चाललंय' is the friendly 'What's up / What's happening?'."
            },
            {
              id: "mr-q60",
              type: "match-pairs",
              prompt: "Match street expressions",
              pairs: [
                { left: "चाललंय", right: "Happening / Going on" },
                { left: "दोस्त", right: "Friend" },
                { left: "नक्कीच", right: "Definitely" }
              ]
            }
          ]
        },
        {
          id: "mr-l21",
          title: "Courage & Optimism (काळजी करू नका)",
          description: "Comforting reassurance and Maratha spirit",
          xp: 25,
          questions: [
            {
              id: "mr-q61",
              type: "multiple-choice",
              prompt: "What does 'काळजी करू नका!' (Kaalji karu nakaa!) mean?",
              options: [
                { text: "Do not worry / Everything will be taken care of!", correct: true },
                { text: "Go away immediately", correct: false },
                { text: "It is impossible", correct: false }
              ],
              explanation: "'काळजी करू नका' provides warm, solid reassurance.",
              audioText: "काळजी करू नका!"
            },
            {
              id: "mr-q62",
              type: "sentence-builder",
              prompt: "Build: 'We will definitely win'",
              wordBank: ["आपण", "नक्कीच", "जिंकू", "हारू"],
              correctSequence: ["आपण", "नक्कीच", "जिंकू"],
              targetSentence: "आपण नक्कीच जिंकू",
              targetRoman: "Aapan nakkeech jinku",
              explanation: "'जिंकू' means we will win."
            },
            {
              id: "mr-q63",
              type: "match-pairs",
              prompt: "Match courage words",
              pairs: [
                { left: "विजय", right: "Victory" },
                { left: "विश्वास", right: "Trust / Faith" },
                { left: "हिंमत", right: "Courage" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "mr-u8",
      unitNumber: 8,
      title: "Unit 8: संत साहित्य, म्हणी & मराठी बाणा",
      description: "Sant Tukaram Abhangas, Shivaji Maharaj Pride, Proverbs & Lifetime Marathi Honor",
      color: "from-amber-700 via-rose-800 to-purple-950",
      guidebook: {
        title: "The Classical Soul of Marathi: 'लाभले आम्हास भाग्य बोलतो मराठी'",
        summary: "From Sant Dnyaneshwar and Sant Tukaram's immortal abhangas to the valor of Chhatrapati Shivaji Maharaj, Marathi carries centuries of spiritual depth, chivalry, and social equality.",
        keyPhrases: [
          { native: "लाभले आम्हास भाग्य बोलतो मराठी", roman: "Laabhle aamhas bhaagya bolto Marathi", meaning: "We are blessed with the good fortune that we speak Marathi (Suresh Bhat)" },
          { native: "अति तिथे माती", roman: "Ati thithe maati", meaning: "Excess of anything leads to ruin (Proverb)" },
          { native: "गरवाचा घर खाली", roman: "Garvaacha ghar khaali", meaning: "Pride goes before a fall (Proverb)" },
          { native: "जय भवानी, जय शिवाजी!", roman: "Jai Bhavani, Jai Shivaji!", meaning: "Victory to Mother Bhavani and Chhatrapati Shivaji!" }
        ]
      },
      lessons: [
        {
          id: "mr-l22",
          title: "Poetry & The Soul of Marathi (मराठी गौरव)",
          description: "Immortal verses celebrating Marathi mother tongue",
          xp: 30,
          questions: [
            {
              id: "mr-q64",
              type: "multiple-choice",
              prompt: "What does the famous line 'लाभले आम्हास भाग्य बोलतो मराठी' celebrate?",
              options: [
                { text: "We are immensely blessed with the good fortune to speak Marathi", correct: true },
                { text: "Marathi is only spoken in villages", correct: false },
                { text: "Speaking is difficult", correct: false }
              ],
              explanation: "Suresh Bhat's immortal anthem celebrating the pride and cultural dignity of the Marathi language.",
              audioText: "लाभले आम्हास भाग्य बोलतो मराठी"
            },
            {
              id: "mr-q65",
              type: "sentence-builder",
              prompt: "Build: 'Marathi is our mother tongue'",
              wordBank: ["मराठी", "आमची", "मातृभाषा", "आहे", "गाव"],
              correctSequence: ["मराठी", "आमची", "मातृभाषा", "आहे"],
              targetSentence: "मराठी आमची मातृभाषा आहे",
              targetRoman: "Marathi aamchi maatrubhaasha aahe",
              explanation: "'मातृभाषा' means mother tongue."
            },
            {
              id: "mr-q66",
              type: "match-pairs",
              prompt: "Match classical concepts",
              pairs: [
                { left: "मातृभाषा", right: "Mother tongue" },
                { left: "अभंग", right: "Spiritual poetic verse" },
                { left: "म्हण", right: "Proverb" }
              ]
            }
          ]
        },
        {
          id: "mr-l23",
          title: "Cherished Proverbs (म्हणी)",
          description: "Ancient folk wisdom in daily conversation",
          xp: 30,
          questions: [
            {
              id: "mr-q67",
              type: "multiple-choice",
              prompt: "What does the popular Marathi proverb 'अति तिथे माती' teach?",
              options: [
                { text: "Excess of anything turns to dust (Moderation in all things)", correct: true },
                { text: "Always play in the mud", correct: false },
                { text: "More is always better", correct: false }
              ],
              explanation: "Classic proverb teaching that excess leads to downfall.",
              audioText: "अति तिथे माती"
            },
            {
              id: "mr-q68",
              type: "sentence-builder",
              prompt: "Build: 'Truth always wins'",
              wordBank: ["सत्याचा", "नेहमी", "विजय", "होतो", "पराभव"],
              correctSequence: ["सत्याचा", "नेहमी", "विजय", "होतो"],
              targetSentence: "सत्याचा नेहमी विजय होतो",
              targetRoman: "Satyacha nehmi vijay hoto",
              explanation: "'सत्याचा' is of truth, 'विजय होतो' is wins/triumphs."
            },
            {
              id: "mr-q69",
              type: "match-pairs",
              prompt: "Match philosophical terms",
              pairs: [
                { left: "सत्य", right: "Truth" },
                { left: "शांती", right: "Peace" },
                { left: "आनंद", right: "Joy / Bliss" }
              ]
            }
          ]
        },
        {
          id: "mr-l24",
          title: "Mastery & The Lifetime Marathi Title (आजीवन अस्सल मराठी)",
          description: "Graduation milestone honoring lifelong fluency",
          xp: 35,
          questions: [
            {
              id: "mr-q70",
              type: "multiple-choice",
              prompt: "What does achieving the title 'आजीवन अस्सल मराठी' (Lifetime Assal Marathi) mean?",
              options: [
                { text: "You have mastered Marathi from alphabet to Vada Pav, local trains, literature and soul!", correct: true },
                { text: "You only ate puran poli once", correct: false },
                { text: "You know how to say namaskar", correct: false }
              ],
              explanation: "You have embraced the language, food, warmth, and literature as a true native son or daughter of Maharashtra.",
              audioText: "आजीवन अस्सल मराठी"
            },
            {
              id: "mr-q71",
              type: "sentence-builder",
              prompt: "Build: 'I speak Marathi with pride'",
              wordBank: ["मी", "अभिमानाने", "मराठी", "बोलतो"],
              correctSequence: ["मी", "अभिमानाने", "मराठी", "बोलतो"],
              targetSentence: "मी अभिमानाने मराठी बोलतो",
              targetRoman: "Mee abhimaanane Marathi bolto",
              explanation: "'अभिमानाने' means with pride, 'बोलतो' means I speak."
            },
            {
              id: "mr-q72",
              type: "match-pairs",
              prompt: "Match graduation milestones",
              pairs: [
                { left: "अभिमान", right: "Pride" },
                { left: "यश", right: "Success / Triumph" },
                { left: "अभिनंदन", right: "Heartiest congratulations" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
