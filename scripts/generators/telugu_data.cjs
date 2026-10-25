// Telugu Full 8-Unit Curriculum Data
module.exports = {
  id: "telugu",
  name: "Telugu",
  nativeName: "తెలుగు",
  code: "te-IN",
  family: "Dravidian (Classical)",
  region: "Andhra Pradesh, Telangana, Yanam & Rayalaseema",
  speakers: "96M+",
  greeting: "నమస్కారం (Namaskaram)",
  color: "from-blue-600 via-indigo-600 to-cyan-700",
  accentColor: "#2563eb",
  flagEmoji: "🏛️",
  mascotQuote: "రండి! వర్ణమాల నుండి జీవితకాల తెలుగు బిడ్డ వరకు గర్వంగా నేర్చుకుందాం!",
  alphabet: [
    { char: "అ", roman: "a", sound: "short 'uh' as in cup (అమ్మ - Mother)", type: "vowel" },
    { char: "ఆ", roman: "aa", sound: "long 'aah' as in father (ఆవు - Cow)", type: "vowel" },
    { char: "ఇ", roman: "i", sound: "short 'ih' as in ink (ఇల్లు - House)", type: "vowel" },
    { char: "ఈ", roman: "ee", sound: "long 'ee' as in eel (ఈగ - Housefly)", type: "vowel" },
    { char: "ఉ", roman: "u", sound: "short 'oo' as in put (ఉడుత - Squirrel)", type: "vowel" },
    { char: "ఊ", roman: "oo", sound: "long 'ooh' as in moon (ఊయల - Cradle)", type: "vowel" },
    { char: "ఋ", roman: "ru", sound: "vocalic 'ri' (ఋషి - Sage)", type: "vowel" },
    { char: "ఎ", roman: "e", sound: "short 'eh' as in egg (ఎలుక - Rat)", type: "vowel" },
    { char: "ఏ", roman: "ae", sound: "long 'ay' as in hey (ఏనుగు - Elephant)", type: "vowel" },
    { char: "ఐ", roman: "ai", sound: "diphthong 'eye' as in sky (ఐదు - Five)", type: "vowel" },
    { char: "ఒ", roman: "o", sound: "short 'oh' as in omit (ఒంటె - Camel)", type: "vowel" },
    { char: "ఓ", roman: "oa", sound: "long 'oah' as in boat (ఓడ - Ship)", type: "vowel" },
    { char: "ఔ", roman: "au", sound: "diphthong 'ow' as in cow (ఔషధం - Medicine)", type: "vowel" },
    { char: "అం", roman: "am", sound: "anusvara nasal (అందం - Beauty)", type: "vowel" },
    { char: "క", roman: "ka", sound: "unaspirated 'k' (కలము - Pen)", type: "consonant" },
    { char: "ఖ", roman: "kha", sound: "aspirated 'kh' (ఖడ్గం - Sword)", type: "consonant" },
    { char: "గ", roman: "ga", sound: "hard 'g' as in go (గడియారం - Clock)", type: "consonant" },
    { char: "ఘ", roman: "gha", sound: "aspirated 'gh' (ఘటం - Pot)", type: "consonant" },
    { char: "చ", roman: "cha", sound: "soft 'ch' (చక్రం - Wheel)", type: "consonant" },
    { char: "జ", roman: "ja", sound: "voiced 'j' (జలము - Water)", type: "consonant" },
    { char: "ట", roman: "ta", sound: "retroflex 't' (టపాకాయ - Firecracker)", type: "consonant" },
    { char: "డ", roman: "da", sound: "retroflex 'd' (డబ్బు - Money)", type: "consonant" },
    { char: "ణ", roman: "na", sound: "retroflex 'n' (వీణ - Veena instrument)", type: "consonant" },
    { char: "త", roman: "tha", sound: "soft dental 'th' as in thought (తల - Head)", type: "consonant" },
    { char: "ద", roman: "dha", sound: "soft dental 'dh' as in the (దండ - Garland)", type: "consonant" },
    { char: "న", roman: "na", sound: "alveolar 'n' (నమస్కారం - Greetings)", type: "consonant" },
    { char: "ప", roman: "pa", sound: "unaspirated 'p' (పండు - Fruit)", type: "consonant" },
    { char: "బ", roman: "ba", sound: "voiced 'b' (బంతి - Ball)", type: "consonant" },
    { char: "భ", roman: "bha", sound: "aspirated 'bh' (భారతం - Bharat/India)", type: "consonant" },
    { char: "మ", roman: "ma", sound: "bilabial 'm' (మంచి - Good)", type: "consonant" },
    { char: "య", roman: "ya", sound: "palatal glide 'y' (యమున - Yamuna river)", type: "consonant" },
    { char: "ర", roman: "ra", sound: "rolled 'r' (రైలు - Train)", type: "consonant" },
    { char: "ల", roman: "la", sound: "dental 'l' (లడ్డు - Laddu sweet)", type: "consonant" },
    { char: "వ", roman: "va", sound: "labiodental 'v' (వరి - Paddy/Rice)", type: "consonant" },
    { char: "స", roman: "sa", sound: "sibilant 's' (సంతోషం - Happiness)", type: "consonant" },
    { char: "హ", roman: "ha", sound: "glottal 'h' (హంస - Swan)", type: "consonant" },
    { char: "ళ", roman: "la", sound: "retroflex lateral 'L' (తాళం - Lock)", type: "special" },
    { char: "ఱ", roman: "rra", sound: "vibrant trill Bandi Ra (గుఱ్ఱం - Horse)", type: "special" }
  ],
  units: [
    {
      id: "te-u1",
      unitNumber: 1,
      title: "Unit 1: వర్ణమాల & ప్రాథమిక పదాలు",
      description: "Telugu Script, First Greetings, Politeness & Essential Introductions",
      color: "from-blue-600 to-indigo-700",
      guidebook: {
        title: "Telugu Foundations: The Italian of the East",
        summary: "Telugu words end in vowels, giving it a melodic musical quality famously termed 'The Italian of the East' by Niccolò de' Conti.",
        keyPhrases: [
          { native: "నమస్కారం", roman: "Namaskaram", meaning: "Hello / Formal Greeting" },
          { native: "ధన్యవాదాలు", roman: "Dhanyavaadaalu", meaning: "Thank you very much" },
          { native: "మీరు ఎలా ఉన్నారు?", roman: "Meeru ela unnaru?", meaning: "How are you? (Respectful)" },
          { native: "నేను బాగున్నాను", roman: "Nenu baagunnanu", meaning: "I am fine / doing well" },
          { native: "మీ పేరు ఏమిటి?", roman: "Mee peru emiti?", meaning: "What is your name?" }
        ]
      },
      lessons: [
        {
          id: "te-l1",
          title: "Warm Telugu Greetings (నమస్కారం)",
          description: "Learn how to greet and say thank you politely",
          xp: 20,
          questions: [
            {
              id: "te-q1",
              type: "multiple-choice",
              prompt: "How do you say 'Hello / Greetings' respectfully in Telugu?",
              options: [
                { text: "నమస్కారం (Namaskaram)", correct: true },
                { text: "ధన్యవాదాలు (Dhanyavaadaalu)", correct: false },
                { text: "బాగున్నాను (Baagunnanu)", correct: false }
              ],
              explanation: "'నమస్కారం' (Namaskaram) is the universal respectful greeting in Telugu.",
              audioText: "నమస్కారం"
            },
            {
              id: "te-q2",
              type: "sentence-builder",
              prompt: "Build: 'I am fine' in Telugu",
              wordBank: ["నేను", "బాగున్నాను", "మీరు", "ధన్యవాదాలు"],
              correctSequence: ["నేను", "బాగున్నాను"],
              targetSentence: "నేను బాగున్నాను",
              targetRoman: "Nenu baagunnanu",
              explanation: "'నేను' means I, and 'బాగున్నాను' means am doing well."
            },
            {
              id: "te-q3",
              type: "match-pairs",
              prompt: "Match the Telugu greetings with their English meanings",
              pairs: [
                { left: "నమస్కారం", right: "Hello / Greetings" },
                { left: "ధన్యవాదాలు", right: "Thank you" },
                { left: "బాగున్నాను", right: "I am fine" }
              ]
            }
          ]
        },
        {
          id: "te-l2",
          title: "Introducing Yourself (నా పేరు...)",
          description: "Say your name and ask where someone is from",
          xp: 20,
          questions: [
            {
              id: "te-q4",
              type: "multiple-choice",
              prompt: "What does 'మీ పేరు ఏమిటి?' (Mee peru emiti?) mean?",
              options: [
                { text: "What is your name?", correct: true },
                { text: "Where are you going?", correct: false },
                { text: "How are you?", correct: false }
              ],
              explanation: "'మీ' is respectful 'Your', 'పేరు' is 'Name', 'ఏమిటి' is 'What'.",
              audioText: "మీ పేరు ఏమిటి?"
            },
            {
              id: "te-q5",
              type: "sentence-builder",
              prompt: "Build: 'Pleased to meet you' in Telugu",
              wordBank: ["మిమ్మల్ని", "కలవడం", "సంతోషం", "ఎలా", "ఉన్నారు"],
              correctSequence: ["మిమ్మల్ని", "కలవడం", "సంతోషం"],
              targetSentence: "మిమ్మల్ని కలవడం సంతోషం",
              targetRoman: "Mimmalni kalavadam santhosham",
              explanation: "Expresses warm delight upon meeting someone."
            },
            {
              id: "te-q6",
              type: "match-pairs",
              prompt: "Match the Telugu conversational words",
              pairs: [
                { left: "పేరు", right: "Name" },
                { left: "సంతోషం", right: "Happiness / Pleasure" },
                { left: "అవును", right: "Yes" },
                { left: "కాదు", right: "No" }
              ]
            }
          ]
        },
        {
          id: "te-l3",
          title: "Polite Speech & Yes/No (అవును / కాదు)",
          description: "Affirmations, negations, and polite requests",
          xp: 25,
          questions: [
            {
              id: "te-q7",
              type: "multiple-choice",
              prompt: "How do you say 'Excuse me / Sorry' in Telugu?",
              options: [
                { text: "క్షమించండి (Kshaminchandi)", correct: true },
                { text: "పర్వాలేదు (Parvaledu)", correct: false },
                { text: "సరే (Sare)", correct: false }
              ],
              explanation: "'క్షమించండి' is the respectful way to apologize or say excuse me.",
              audioText: "క్షమించండి"
            },
            {
              id: "te-q8",
              type: "sentence-builder",
              prompt: "Build: 'It is fine / No problem'",
              wordBank: ["ఏమీ", "పర్వాలేదు", "సరే", "ధన్యవాదాలు"],
              correctSequence: ["ఏమీ", "పర్వాలేదు"],
              targetSentence: "ఏమీ పర్వాలేదు",
              targetRoman: "Emee parvaledu",
              explanation: "'ఏమీ పర్వాలేదు' means 'No problem at all'."
            },
            {
              id: "te-q9",
              type: "match-pairs",
              prompt: "Match the polite Telugu responses",
              pairs: [
                { left: "క్షమించండి", right: "Pardon / Excuse me" },
                { left: "పర్వాలేదు", right: "It is fine" },
                { left: "సరే", right: "Okay / Alright" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "te-u2",
      unitNumber: 2,
      title: "Unit 2: కుటుంబం & ఆప్యాయత",
      description: "Family Kinship, Respectful Suffixes (-గారు) & Emotional Warmth",
      color: "from-indigo-600 to-purple-700",
      guidebook: {
        title: "The Suffix '-గారు' (-Garu): The Hallmark of Telugu Respect",
        summary: "In Telugu, adding '-గారు' (-garu) to any name or title (నాన్నగారు, రావుగారు, గురువుగారు) instantly conveys profound Indian respect and affectionate reverence.",
        keyPhrases: [
          { native: "అమ్మ", roman: "Amma", meaning: "Mother" },
          { native: "నాన్న", roman: "Naanna", meaning: "Father" },
          { native: "అన్నయ్య", roman: "Annayya", meaning: "Elder Brother" },
          { native: "అక్క", roman: "Akka", meaning: "Elder Sister" },
          { native: "తమ్ముడు", roman: "Thammudu", meaning: "Younger Brother" }
        ]
      },
      lessons: [
        {
          id: "te-l4",
          title: "Immediate Family (అమ్మ & నాన్న)",
          description: "Learn terms for parents and close elders",
          xp: 20,
          questions: [
            {
              id: "te-q10",
              type: "multiple-choice",
              prompt: "What is the respectful Telugu word for 'Father'?",
              options: [
                { text: "నాన్నగారు (Naannagaaru)", correct: true },
                { text: "తమ్ముడు (Thammudu)", correct: false },
                { text: "మిత్రుడు (Mithrudu)", correct: false }
              ],
              explanation: "'నాన్న' means father; adding '-గారు' shows heartfelt respect.",
              audioText: "నాన్నగారు"
            },
            {
              id: "te-q11",
              type: "sentence-builder",
              prompt: "Build: 'This is my mother'",
              wordBank: ["ఈమె", "మా", "అమ్మ", "నాన్న", "గారు"],
              correctSequence: ["ఈమె", "మా", "అమ్మ"],
              targetSentence: "ఈమె మా అమ్మ",
              targetRoman: "Eeme maa amma",
              explanation: "'ఈమె' means this lady/she, 'మా అమ్మ' means our/my mother."
            },
            {
              id: "te-q12",
              type: "match-pairs",
              prompt: "Match Telugu family members",
              pairs: [
                { left: "అమ్మ", right: "Mother" },
                { left: "నాన్న", right: "Father" },
                { left: "అన్నయ్య", right: "Elder brother" }
              ]
            }
          ]
        },
        {
          id: "te-l5",
          title: "Siblings & Extended Kinship",
          description: "Brothers, sisters, and affectionate terms",
          xp: 20,
          questions: [
            {
              id: "te-q13",
              type: "multiple-choice",
              prompt: "How do you address your 'Elder Sister' in Telugu?",
              options: [
                { text: "అక్క (Akka)", correct: true },
                { text: "చెల్లి (Chelli)", correct: false },
                { text: "అమ్మ (Amma)", correct: false }
              ],
              explanation: "'అక్క' (Akka) is elder sister; 'చెల్లి' (Chelli) is younger sister.",
              audioText: "అక్క"
            },
            {
              id: "te-q14",
              type: "sentence-builder",
              prompt: "Build: 'Elder brother is coming'",
              wordBank: ["అన్నయ్య", "వస్తున్నారు", "వెళ్తున్నారు", "చెల్లి"],
              correctSequence: ["అన్నయ్య", "వస్తున్నారు"],
              targetSentence: "అన్నయ్య వస్తున్నారు",
              targetRoman: "Annayya vasthunnaru",
              explanation: "'వస్తున్నారు' is the polite present continuous for coming."
            },
            {
              id: "te-q15",
              type: "match-pairs",
              prompt: "Match Telugu sibling terms",
              pairs: [
                { left: "అక్క", right: "Elder sister" },
                { left: "చెల్లి", right: "Younger sister" },
                { left: "తమ్ముడు", right: "Younger brother" }
              ]
            }
          ]
        },
        {
          id: "te-l6",
          title: "Home & Hospitality (రండి, కూర్చోండి)",
          description: "Welcoming guests home with Telugu warmth",
          xp: 25,
          questions: [
            {
              id: "te-q16",
              type: "multiple-choice",
              prompt: "How do you politely invite a guest to 'Come in and sit down'?",
              options: [
                { text: "రండి, కూర్చోండి (Randi, koorchondi)", correct: true },
                { text: "వెళ్ళండి (Vellandi)", correct: false },
                { text: "తాగండి (Thagandi)", correct: false }
              ],
              explanation: "'రండి' means please come, and 'కూర్చోండి' means please sit.",
              audioText: "రండి, కూర్చోండి"
            },
            {
              id: "te-q17",
              type: "sentence-builder",
              prompt: "Build: 'Please drink water'",
              wordBank: ["మంచి", "నీళ్లు", "తాగండి", "రండి"],
              correctSequence: ["మంచి", "నీళ్లు", "తాగండి"],
              targetSentence: "మంచి నీళ్లు తాగండి",
              targetRoman: "Manchi neellu thagandi",
              explanation: "In Telugu, drinking water is affectionately called 'మంచి నీళ్లు' (good water)."
            },
            {
              id: "te-q18",
              type: "match-pairs",
              prompt: "Match Telugu hospitality verbs",
              pairs: [
                { left: "రండి", right: "Please come" },
                { left: "కూర్చోండి", right: "Please sit" },
                { left: "తినండి", right: "Please eat" },
                { left: "తాగండి", right: "Please drink" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "te-u3",
      unitNumber: 3,
      title: "Unit 3: ఇరానీ చాయ్ & రాయలసీమ రుచులు",
      description: "Hyderabad Irani Chai, Osmania Biscuits, Biryani & Andhra Pindi Vantalu",
      color: "from-amber-600 to-orange-700",
      guidebook: {
        title: "Telugu Culinary Soul: From Irani Cafes to Gongura",
        summary: "Telugu cuisine ranges from fragrant Hyderabadi Dum Biryani and Irani Chai to spicy Gongura Pachadi and crispy Pesarattu with ginger chutney.",
        keyPhrases: [
          { native: "ఒక కప్పు ఇరానీ చాయ్", roman: "Oka kappu Irani chai", meaning: "One cup of Irani tea" },
          { native: "బిర్యానీ చాలా బాగుంది", roman: "Biryani chaala baagundi", meaning: "The biryani is very delicious" },
          { native: "కారం కొంచెం తగ్గించండి", roman: "Kaaram konchem thagginchandi", meaning: "Please reduce the spice a little" },
          { native: "భోజనం చేశారా?", roman: "Bhojanam chesaara?", meaning: "Did you have your meal? (Affectionate)" }
        ]
      },
      lessons: [
        {
          id: "te-l7",
          title: "Irani Cafe & Chai Culture",
          description: "Order Irani chai and Osmania biscuits like a local",
          xp: 20,
          questions: [
            {
              id: "te-q19",
              type: "multiple-choice",
              prompt: "How do you order 'One cup of hot chai' in Telugu?",
              options: [
                { text: "ఒక కప్పు వేడి చాయ్ ఇవ్వండి (Oka kappu vedi chai ivvandi)", correct: true },
                { text: "నీళ్లు వద్దు (Neellu vaddu)", correct: false },
                { text: "బిల్లు ఇవ్వండి (Bill ivvandi)", correct: false }
              ],
              explanation: "'ఒక కప్పు' is one cup, 'వేడి చాయ్' is hot tea, 'ఇవ్వండి' is please give.",
              audioText: "ఒక కప్పు వేడి చాయ్ ఇవ్వండి"
            },
            {
              id: "te-q20",
              type: "sentence-builder",
              prompt: "Build: 'Tea is very sweet'",
              wordBank: ["చాయ్", "చాలా", "తీపిగా", "ఉంది", "కారం"],
              correctSequence: ["చాయ్", "చాలా", "తీపిగా", "ఉంది"],
              targetSentence: "చాయ్ చాలా తీపిగా ఉంది",
              targetRoman: "Chai chaala theepiga undi",
              explanation: "'తీపిగా' means sweet, 'చాలా' means very."
            },
            {
              id: "te-q21",
              type: "match-pairs",
              prompt: "Match Telugu cafe terms",
              pairs: [
                { left: "చాయ్", right: "Tea" },
                { left: "వేడి", right: "Hot" },
                { left: "తీపి", right: "Sweet" },
                { left: "ఇవ్వండి", right: "Please give" }
              ]
            }
          ]
        },
        {
          id: "te-l8",
          title: "Hyderabadi Biryani & Andhra Meals",
          description: "Ordering meals, spice levels, and praising taste",
          xp: 20,
          questions: [
            {
              id: "te-q22",
              type: "multiple-choice",
              prompt: "How do you say 'The food is very delicious' in Telugu?",
              options: [
                { text: "భోజనం చాలా రుచిగా ఉంది (Bhojanam chaala ruchiga undi)", correct: true },
                { text: "నాకు ఆకలి లేదు (Naaku aakali ledu)", correct: false },
                { text: "చల్లగా ఉంది (Challaga undi)", correct: false }
              ],
              explanation: "'రుచిగా' (Ruchiga) means tasty and delicious.",
              audioText: "భోజనం చాలా రుచిగా ఉంది"
            },
            {
              id: "te-q23",
              type: "sentence-builder",
              prompt: "Build: 'Please bring the bill'",
              wordBank: ["దయచేసి", "బిల్లు", "తీసుకురండి", "చాయ్"],
              correctSequence: ["దయచేసి", "బిల్లు", "తీసుకురండి"],
              targetSentence: "దయచేసి బిల్లు తీసుకురండి",
              targetRoman: "Dayachesi bill theesukurandi",
              explanation: "'తీసుకురండి' is the polite verb for please bring."
            },
            {
              id: "te-q24",
              type: "match-pairs",
              prompt: "Match Telugu food adjectives",
              pairs: [
                { left: "రుచి", right: "Taste / Delicious" },
                { left: "కారం", right: "Spicy" },
                { left: "చల్లని", right: "Cold" }
              ]
            }
          ]
        },
        {
          id: "te-l9",
          title: "The Magic Question: 'భోజనం చేశారా?'",
          description: "Understanding the most loving Telugu greeting",
          xp: 25,
          questions: [
            {
              id: "te-q25",
              type: "multiple-choice",
              prompt: "Why do Telugus always ask 'భోజనం చేశారా?' (Bhojanam chesaara?)?",
              options: [
                { text: "It is the heartfelt way of showing love and asking 'How are you?'", correct: true },
                { text: "They want to sell you food", correct: false },
                { text: "It is a formal warning", correct: false }
              ],
              explanation: "In Telugu culture, asking if you have eaten is the ultimate expression of care.",
              audioText: "భోజనం చేశారా?"
            },
            {
              id: "te-q26",
              type: "sentence-builder",
              prompt: "Build: 'Yes, I ate meal'",
              wordBank: ["అవును", "నేను", "భోజనం", "చేశాను", "లేదు"],
              correctSequence: ["అవును", "నేను", "భోజనం", "చేశాను"],
              targetSentence: "అవును నేను భోజనం చేశాను",
              targetRoman: "Avunu nenu bhojanam chesaanu",
              explanation: "'చేశాను' means I have done / finished."
            },
            {
              id: "te-q27",
              type: "match-pairs",
              prompt: "Match Telugu dining vocabulary",
              pairs: [
                { left: "భోజనం", right: "Meal / Lunch / Dinner" },
                { left: "ఆకలి", right: "Hunger" },
                { left: "నీళ్లు", right: "Water" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "te-u4",
      unitNumber: 4,
      title: "Unit 4: ఆటో మీటర్ & ప్రయాణం",
      description: "Auto Rickshaws, Hyderabad Metro, RTC Buses & Navigating Directions",
      color: "from-emerald-600 to-teal-700",
      guidebook: {
        title: "Navigating Telugu Cities: Auto Dialogues",
        summary: "Whether negotiating an auto at Charminar or boarding the Hyderabad Metro to Hitec City, knowing 'మీటర్ వేయండి' (Put the meter) and direction words is invaluable.",
        keyPhrases: [
          { native: "చార్మినార్ వెళ్తుందా?", roman: "Charminar velthundaa?", meaning: "Does this go to Charminar?" },
          { native: "మీటర్ వేయండి", roman: "Meter veyandi", meaning: "Please turn on the meter" },
          { native: "ఎంత అవుతుంది?", roman: "Entha avuthundi?", meaning: "How much will it cost?" },
          { native: "ఇక్కడ ఆపండి", roman: "Ikkada aapandi", meaning: "Please stop here" }
        ]
      },
      lessons: [
        {
          id: "te-l10",
          title: "Hailing an Auto (చార్మినార్ వెళ్తారా?)",
          description: "Flag down an auto and ask if they will take you",
          xp: 20,
          questions: [
            {
              id: "te-q28",
              type: "multiple-choice",
              prompt: "How do you ask an auto driver 'Will you go to Charminar?'",
              options: [
                { text: "చార్మినార్ వస్తారా? (Charminar vasthaaraa?)", correct: true },
                { text: "చార్మినార్ ఎక్కడ ఉంది? (Charminar ekkada undi?)", correct: false },
                { text: "మీటర్ వద్దు (Meter vaddu)", correct: false }
              ],
              explanation: "'వస్తారా' politely asks 'Will you come/go?'.",
              audioText: "చార్మినార్ వస్తారా?"
            },
            {
              id: "te-q29",
              type: "sentence-builder",
              prompt: "Build: 'Please put the meter'",
              wordBank: ["మీటర్", "వేయండి", "ఎంత", "ఆపండి"],
              correctSequence: ["మీటర్", "వేయండి"],
              targetSentence: "మీటర్ వేయండి",
              targetRoman: "Meter veyandi",
              explanation: "'వేయండి' is the imperative for 'please put/turn on'."
            },
            {
              id: "te-q30",
              type: "match-pairs",
              prompt: "Match Telugu transit terms",
              pairs: [
                { left: "ఎంత", right: "How much" },
                { left: "ఆపండి", right: "Stop here" },
                { left: "రైల్వే స్టేషన్", right: "Railway station" }
              ]
            }
          ]
        },
        {
          id: "te-l11",
          title: "Left, Right & Straight (ఎడమ & కుడి)",
          description: "Give turn-by-turn directions clearly",
          xp: 20,
          questions: [
            {
              id: "te-q31",
              type: "multiple-choice",
              prompt: "What is 'Turn Right' in Telugu?",
              options: [
                { text: "కుడి వైపు తిరగండి (Kudi vaipu thiragandi)", correct: true },
                { text: "ఎడమ వైపు తిరగండి (Edama vaipu thiragandi)", correct: false },
                { text: "తిన్నగా వెళ్లండి (Thinnagaa vellandi)", correct: false }
              ],
              explanation: "'కుడి' is right, 'ఎడమ' is left, 'తిరగండి' is turn.",
              audioText: "కుడి వైపు తిరగండి"
            },
            {
              id: "te-q32",
              type: "sentence-builder",
              prompt: "Build: 'Go straight ahead'",
              wordBank: ["తిన్నగా", "ముందుకు", "వెళ్లండి", "కుడి"],
              correctSequence: ["తిన్నగా", "ముందుకు", "వెళ్లండి"],
              targetSentence: "తిన్నగా ముందుకు వెళ్లండి",
              targetRoman: "Thinnagaa mundhuku vellandi",
              explanation: "'తిన్నగా' means straight, 'ముందుకు' means forward."
            },
            {
              id: "te-q33",
              type: "match-pairs",
              prompt: "Match Telugu direction words",
              pairs: [
                { left: "కుడి", right: "Right" },
                { left: "ఎడమ", right: "Left" },
                { left: "తిన్నగా", right: "Straight" },
                { left: "దగ్గర", right: "Near" }
              ]
            }
          ]
        },
        {
          id: "te-l12",
          title: "Bus & Metro Transit (మెట్రో టికెట్)",
          description: "Buying tickets and asking for stops",
          xp: 25,
          questions: [
            {
              id: "te-q34",
              type: "multiple-choice",
              prompt: "How do you ask 'Where is the metro station?' in Telugu?",
              options: [
                { text: "మెట్రో స్టేషన్ ఎక్కడ ఉంది? (Metro station ekkada undi?)", correct: true },
                { text: "మెట్రో ఎప్పుడు వస్తుంది? (Metro eppudu vasthundi?)", correct: false },
                { text: "టికెట్ ఎంత? (Ticket entha?)", correct: false }
              ],
              explanation: "'ఎక్కడ ఉంది' means 'Where is it?'.",
              audioText: "మెట్రో స్టేషన్ ఎక్కడ ఉంది?"
            },
            {
              id: "te-q35",
              type: "sentence-builder",
              prompt: "Build: 'Give one ticket please'",
              wordBank: ["ఒక", "టికెట్", "ఇవ్వండి", "రెండు"],
              correctSequence: ["ఒక", "టికెట్", "ఇవ్వండి"],
              targetSentence: "ఒక టికెట్ ఇవ్వండి",
              targetRoman: "Oka ticket ivvandi",
              explanation: "'ఒక' means one, 'ఇవ్వండి' means please give."
            },
            {
              id: "te-q36",
              type: "match-pairs",
              prompt: "Match Telugu travel questions",
              pairs: [
                { left: "ఎక్కడ", right: "Where" },
                { left: "ఎప్పుడు", right: "When" },
                { left: "ఎందుకు", right: "Why" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "te-u5",
      unitNumber: 5,
      title: "Unit 5: నిత్యజీవితం & సమయం",
      description: "Numbers, Telling Time, Days of the Week & Daily Routine",
      color: "from-teal-600 to-cyan-700",
      guidebook: {
        title: "Telugu Time & Numbers",
        summary: "Knowing Telugu numbers (ఒకటి, రెండు, మూడు) and time markers (ఉదయం, సాయంత్రం) helps in scheduling meetings and trains.",
        keyPhrases: [
          { native: "సమయం ఎంత అయింది?", roman: "Samayam entha ayindi?", meaning: "What time is it?" },
          { native: "ఉదయం ఎనిమిది గంటలకు", roman: "Udayam enimidi gantalaku", meaning: "At 8 o'clock in the morning" },
          { native: "ఈరోజు / రేపు / నిన్న", roman: "Eeroju / Repu / Ninna", meaning: "Today / Tomorrow / Yesterday" }
        ]
      },
      lessons: [
        {
          id: "te-l13",
          title: "Telugu Numbers 1 to 10 (ఒకటి, రెండు, మూడు)",
          description: "Count smoothly in native Telugu",
          xp: 20,
          questions: [
            {
              id: "te-q37",
              type: "multiple-choice",
              prompt: "What is 'Three' in Telugu?",
              options: [
                { text: "మూడు (Moodu)", correct: true },
                { text: "రెండు (Rendu)", correct: false },
                { text: "నాలుగు (Naalugu)", correct: false }
              ],
              explanation: "1=ఒకటి, 2=రెండు, 3=మూడు, 4=నాలుగు, 5=ఐదు.",
              audioText: "మూడు"
            },
            {
              id: "te-q38",
              type: "sentence-builder",
              prompt: "Build: 'Two cups of chai'",
              wordBank: ["రెండు", "కప్పుల", "చాయ్", "ఒకటి"],
              correctSequence: ["రెండు", "కప్పుల", "చాయ్"],
              targetSentence: "రెండు కప్పుల చాయ్",
              targetRoman: "Rendu kappula chai",
              explanation: "'రెండు' means two."
            },
            {
              id: "te-q39",
              type: "match-pairs",
              prompt: "Match Telugu numbers",
              pairs: [
                { left: "ఒకటి", right: "One (1)" },
                { left: "రెండు", right: "Two (2)" },
                { left: "ఐదు", right: "Five (5)" },
                { left: "పది", right: "Ten (10)" }
              ]
            }
          ]
        },
        {
          id: "te-l14",
          title: "Days of the Week (వారాలు)",
          description: "Learn weekdays and temporal expressions",
          xp: 20,
          questions: [
            {
              id: "te-q40",
              type: "multiple-choice",
              prompt: "What does 'రేపు' (Repu) mean in Telugu?",
              options: [
                { text: "Tomorrow", correct: true },
                { text: "Yesterday", correct: false },
                { text: "Today", correct: false }
              ],
              explanation: "'ఈరోజు' is today, 'రేపు' is tomorrow, 'నిన్న' is yesterday.",
              audioText: "రేపు"
            },
            {
              id: "te-q41",
              type: "sentence-builder",
              prompt: "Build: 'We will meet tomorrow'",
              wordBank: ["రేపు", "మనం", "కలుద్దాం", "ఈరోజు"],
              correctSequence: ["రేపు", "మనం", "కలుద్దాం"],
              targetSentence: "రేపు మనం కలుద్దాం",
              targetRoman: "Repu manam kaluddaam",
              explanation: "'కలుద్దాం' is the friendly future proposal 'let us meet'."
            },
            {
              id: "te-q42",
              type: "match-pairs",
              prompt: "Match Telugu time concepts",
              pairs: [
                { left: "ఈరోజు", right: "Today" },
                { left: "రేపు", right: "Tomorrow" },
                { left: "నిన్న", right: "Yesterday" }
              ]
            }
          ]
        },
        {
          id: "te-l15",
          title: "Telling the Time (గంటలు)",
          description: "Ask and state what time it is",
          xp: 25,
          questions: [
            {
              id: "te-q43",
              type: "multiple-choice",
              prompt: "How do you ask 'What is the time?' in Telugu?",
              options: [
                { text: "సమయం ఎంత అయింది? (Samayam entha ayindi?)", correct: true },
                { text: "ఎప్పుడు వస్తారు? (Eppudu vasthaaru?)", correct: false },
                { text: "ఎక్కడ ఉంది? (Ekkada undi?)", correct: false }
              ],
              explanation: "'సమయం' means time, 'ఎంత అయింది' means how much has occurred.",
              audioText: "సమయం ఎంత అయింది?"
            },
            {
              id: "te-q44",
              type: "sentence-builder",
              prompt: "Build: 'It is five o'clock'",
              wordBank: ["ఇప్పుడు", "ఐదు", "గంటలు", "అయింది"],
              correctSequence: ["ఇప్పుడు", "ఐదు", "గంటలు", "అయింది"],
              targetSentence: "ఇప్పుడు ఐదు గంటలు అయింది",
              targetRoman: "Ippudu aidu gantalu ayindi",
              explanation: "'గంటలు' means hours / o'clock."
            },
            {
              id: "te-q45",
              type: "match-pairs",
              prompt: "Match parts of the day",
              pairs: [
                { left: "ఉదయం", right: "Morning" },
                { left: "మధ్యాహ్నం", right: "Afternoon" },
                { left: "సాయంత్రం", right: "Evening" },
                { left: "రాత్రి", right: "Night" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "te-u6",
      unitNumber: 6,
      title: "Unit 6: బజారు & బేరసారాలు",
      description: "Shopping for Sarees, Pearls, Spices & Bargaining in Bazaars",
      color: "from-rose-600 to-pink-700",
      guidebook: {
        title: "Bazaar Savvy in Hyderabad & Vijayawada",
        summary: "Shopping in Laad Bazaar or Besant Road requires friendly negotiation skills using phrases like 'కొంచెం తగ్గించండి' (Reduce a little).",
        keyPhrases: [
          { native: "దీని ధర ఎంత?", roman: "Deeni dhara entha?", meaning: "What is its price?" },
          { native: "చాలా ఎక్కువ", roman: "Chaala ekkuva", meaning: "Too expensive / high" },
          { native: "కొంచెం తగ్గించండి", roman: "Konchem thagginchandi", meaning: "Please reduce a little" },
          { native: "వేరే రంగు ఉందా?", roman: "Vere rangu undaa?", meaning: "Do you have another colour?" }
        ]
      },
      lessons: [
        {
          id: "te-l16",
          title: "Asking Price & Colors (ధర & రంగులు)",
          description: "Browse textiles and ask about options",
          xp: 20,
          questions: [
            {
              id: "te-q46",
              type: "multiple-choice",
              prompt: "How do you ask 'What is the price of this?' in Telugu?",
              options: [
                { text: "దీని ధర ఎంత? (Deeni dhara entha?)", correct: true },
                { text: "నాకు నచ్చలేదు (Naaku nachaledu)", correct: false },
                { text: "ఎక్కడ కొన్నారు? (Ekkada konnaru?)", correct: false }
              ],
              explanation: "'దీని' means of this, 'ధర' means price, 'ఎంత' means how much.",
              audioText: "దీని ధర ఎంత?"
            },
            {
              id: "te-q47",
              type: "sentence-builder",
              prompt: "Build: 'Do you have another colour?'",
              wordBank: ["వేరే", "రంగు", "ఏదైనా", "ఉందా"],
              correctSequence: ["వేరే", "రంగు", "ఉందా"],
              targetSentence: "వేరే రంగు ఉందా",
              targetRoman: "Vere rangu undaa",
              explanation: "'రంగు' means colour, 'వేరే' means different/other."
            },
            {
              id: "te-q48",
              type: "match-pairs",
              prompt: "Match Telugu colours",
              pairs: [
                { left: "ఎరుపు", right: "Red" },
                { left: "నీలం", right: "Blue" },
                { left: "పసుపు", right: "Yellow" },
                { left: "తెలుపు", right: "White" }
              ]
            }
          ]
        },
        {
          id: "te-l17",
          title: "The Art of Bargaining (కొంచెం తగ్గించండి)",
          description: "Politely negotiate for fair bazaar rates",
          xp: 20,
          questions: [
            {
              id: "te-q49",
              type: "multiple-choice",
              prompt: "How do you politely tell a shopkeeper 'It is too expensive, please reduce'?",
              options: [
                { text: "చాలా ఎక్కువ, కొంచెం తగ్గించండి (Chaala ekkuva, konchem thagginchandi)", correct: true },
                { text: "నేను కొనను (Nenu konanu)", correct: false },
                { text: "డబ్బులు లేవు (Dabbulu levu)", correct: false }
              ],
              explanation: "'ఎక్కువ' is more/high, 'తగ్గించండి' is please reduce.",
              audioText: "చాలా ఎక్కువ, కొంచెం తగ్గించండి"
            },
            {
              id: "te-q50",
              type: "sentence-builder",
              prompt: "Build: 'I will take this one'",
              wordBank: ["నేను", "ఇది", "తీసుకుంటాను", "వద్దు"],
              correctSequence: ["నేను", "ఇది", "తీసుకుంటాను"],
              targetSentence: "నేను ఇది తీసుకుంటాను",
              targetRoman: "Nenu idi theesukuntaanu",
              explanation: "'తీసుకుంటాను' means I will take/buy."
            },
            {
              id: "te-q51",
              type: "match-pairs",
              prompt: "Match shopping adjectives",
              pairs: [
                { left: "ఎక్కువ", right: "More / High" },
                { left: "తక్కువ", right: "Less / Low" },
                { left: "మంచిది", right: "Good one / Quality" }
              ]
            }
          ]
        },
        {
          id: "te-l18",
          title: "Payment & Digital UPI (గూగుల్ పే ఉందా?)",
          description: "Paying with cash, UPI or card smoothly",
          xp: 25,
          questions: [
            {
              id: "te-q52",
              type: "multiple-choice",
              prompt: "How do you ask 'Do you accept UPI / PhonePe / Google Pay?'",
              options: [
                { text: "యూపీఐ లేదా గూగుల్ పే ఉందా? (UPI leda Google Pay undaa?)", correct: true },
                { text: "డబ్బులు వద్దు (Dabbulu vaddu)", correct: false },
                { text: "సరుకులు ఇవ్వండి (Sarukulu ivvandi)", correct: false }
              ],
              explanation: "'లేదా' means or, 'ఉందా' means is it available/present?",
              audioText: "యూపీఐ లేదా గూగుల్ పే ఉందా?"
            },
            {
              id: "te-q53",
              type: "sentence-builder",
              prompt: "Build: 'I sent the money'",
              wordBank: ["నేను", "డబ్బులు", "పంపించాను", "ఇవ్వు"],
              correctSequence: ["నేను", "డబ్బులు", "పంపించాను"],
              targetSentence: "నేను డబ్బులు పంపించాను",
              targetRoman: "Nenu dabbulu pampinchaanu",
              explanation: "'డబ్బులు' means money, 'పంపించాను' means sent."
            },
            {
              id: "te-q54",
              type: "match-pairs",
              prompt: "Match commerce words",
              pairs: [
                { left: "డబ్బులు", right: "Money / Cash" },
                { left: "రసీదు", right: "Receipt" },
                { left: "సంచి", right: "Carry bag" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "te-u7",
      unitNumber: 7,
      title: "Unit 7: సినిమా మాటలు & స్లాంగ్",
      description: "Tollywood Cinema Euphoria, Mass Dialogues & Street Slang",
      color: "from-purple-600 to-indigo-800",
      guidebook: {
        title: "Telugu Cinema & Modern Slang: The Vibe",
        summary: "From Hyderabad 'బాస్' (Boss) and 'తోపు' (Legend) to heartfelt friendship words like 'బావ' (Bava), modern Telugu overflows with energetic youth culture.",
        keyPhrases: [
          { native: "సినిమా అదిరిపోయింది!", roman: "Cinema adiripoyindi!", meaning: "The movie was mindblowing!" },
          { native: "నువ్వు తోపు గురూ!", roman: "Nuvvu thopu guru!", meaning: "You are a rockstar / genius!" },
          { native: "రచ్చ రచ్చ చేద్దాం", roman: "Raccha raccha cheddaam", meaning: "Let us celebrate and rock!" },
          { native: "చూసుకుందాం!", roman: "Choosukundaam!", meaning: "We will see / Let's face it!" }
        ]
      },
      lessons: [
        {
          id: "te-l19",
          title: "Cinema Fever & Dialogues (అదిరిపోయింది!)",
          description: "Talk about Telugu movies and blockbuster songs",
          xp: 20,
          questions: [
            {
              id: "te-q55",
              type: "multiple-choice",
              prompt: "What does 'అదిరిపోయింది!' (Adiripoyindi!) mean when Telugus watch a movie?",
              options: [
                { text: "It was awesome / extraordinary / rocked!", correct: true },
                { text: "It was boring", correct: false },
                { text: "It ended too soon", correct: false }
              ],
              explanation: "'అదిరిపోయింది' is the quintessential exclamation for extraordinary performance.",
              audioText: "అదిరిపోయింది!"
            },
            {
              id: "te-q56",
              type: "sentence-builder",
              prompt: "Build: 'The song is super'",
              wordBank: ["పాట", "చాలా", "సూపర్‌గా", "ఉంది", "సినిమా"],
              correctSequence: ["పాట", "చాలా", "సూపర్‌గా", "ఉంది"],
              targetSentence: "పాట చాలా సూపర్‌గా ఉంది",
              targetRoman: "Paata chaala superga undi",
              explanation: "'పాట' means song."
            },
            {
              id: "te-q57",
              type: "match-pairs",
              prompt: "Match Telugu cinema praise",
              pairs: [
                { left: "అదిరిపోయింది", right: "Mindblowing / Rocked" },
                { left: "తోపు", right: "Genius / Champion" },
                { left: "రచ్చ", right: "Wild fun / High energy" }
              ]
            }
          ]
        },
        {
          id: "te-l20",
          title: "Friendship Slang & Banter",
          description: "Speak like young people in Hyderabad, Vizag and Vijayawada",
          xp: 20,
          questions: [
            {
              id: "te-q58",
              type: "multiple-choice",
              prompt: "What is the ultra-popular friendly address among Telugu youth?",
              options: [
                { text: "బామ్మర్ది / బావా / గురూ (Baammardi / Bava / Guru)", correct: true },
                { text: "శత్రువు (Shathruvu)", correct: false },
                { text: "యజమాని (Yajamaani)", correct: false }
              ],
              explanation: "'బావా' or 'గురూ' is universally used among close pals.",
              audioText: "ఏరా బావా"
            },
            {
              id: "te-q59",
              type: "sentence-builder",
              prompt: "Build: 'What is up, friend?'",
              wordBank: ["ఏంటి", "సంగతులు", "మిత్రమా", "ఎలా"],
              correctSequence: ["ఏంటి", "సంగతులు", "మిత్రమా"],
              targetSentence: "ఏంటి సంగతులు మిత్రమా",
              targetRoman: "Enti sangathulu mithramaa",
              explanation: "'ఏంటి సంగతులు' is the friendly 'What is the news / What's up?'."
            },
            {
              id: "te-q60",
              type: "match-pairs",
              prompt: "Match Telugu street expressions",
              pairs: [
                { left: "సంగతులు", right: "News / What's up" },
                { left: "మిత్రుడు", right: "Friend" },
                { left: "బేఫికర్", right: "Carefree / Relax" }
              ]
            }
          ]
        },
        {
          id: "te-l21",
          title: "Telugu Wit & Banter",
          description: "Quick wit, playful retorts, and banter",
          xp: 25,
          questions: [
            {
              id: "te-q61",
              type: "multiple-choice",
              prompt: "What does 'తగ్గేదే లే!' (Thaggedhe le!) famously mean?",
              options: [
                { text: "I will not back down / No compromise!", correct: true },
                { text: "Let us go home", correct: false },
                { text: "Please speak softly", correct: false }
              ],
              explanation: "Made globally iconic by Pushpa, meaning absolute fearless determination.",
              audioText: "తగ్గేదే లే!"
            },
            {
              id: "te-q62",
              type: "sentence-builder",
              prompt: "Build: 'We will definitely succeed'",
              wordBank: ["మనం", "ఖచ్చితంగా", "గెలుస్తాం", "పోతాం"],
              correctSequence: ["మనం", "ఖచ్చితంగా", "గెలుస్తాం"],
              targetSentence: "మనం ఖచ్చితంగా గెలుస్తాం",
              targetRoman: "Manam khacchithanga gelusthaam",
              explanation: "'గెలుస్తాం' means we will win."
            },
            {
              id: "te-q63",
              type: "match-pairs",
              prompt: "Match Telugu power idioms",
              pairs: [
                { left: "గెలుపు", right: "Victory" },
                { left: "నమ్మకం", right: "Trust / Faith" },
                { left: "ధైర్యం", right: "Courage" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "te-u8",
      unitNumber: 8,
      title: "Unit 8: వేమన శతకం, సామెతలు & అమర సాహిత్యం",
      description: "Classical Literature, Vemana Verses, Timeless Proverbs & Lifetime Telugu Honor",
      color: "from-amber-700 via-rose-800 to-purple-950",
      guidebook: {
        title: "The Classical Soul of Telugu: 'దేశభాషలందు తెలుగు లెస్స'",
        summary: "Declared by Sri Krishnadevaraya as the finest among Indian vernaculars ('దేశభాషలందు తెలుగు లెస్స'), Telugu holds over two millennia of literary majesty, from Nannaya to Vemana and Annamayya.",
        keyPhrases: [
          { native: "దేశభాషలందు తెలుగు లెస్స", roman: "Deshabhashalandu Telugu lessa", meaning: "Among all regional tongues, Telugu is the finest" },
          { native: "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు", roman: "Uppu kappurambu nokka polika nundu", meaning: "Salt and camphor look alike, but taste reveals character (Vemana)" },
          { native: "చెప్పేది ఒకటి, చేసేది ఒకటి", roman: "Cheppedi okati, chesedi okati", meaning: "Saying one thing, doing another (Hypocrisy proverb)" },
          { native: "తెలుగు తల్లికి వందనం", roman: "Telugu thalliki vandhanam", meaning: "Salutations to Mother Telugu" }
        ]
      },
      lessons: [
        {
          id: "te-l22",
          title: "Vemana Padyam & Moral Wisdom",
          description: "Learn timeless verses from Yogi Vemana",
          xp: 30,
          questions: [
            {
              id: "te-q64",
              type: "multiple-choice",
              prompt: "What does Sri Krishnadevaraya's famous decree 'దేశభాషలందు తెలుగు లెస్స' celebrate?",
              options: [
                { text: "Telugu is the sweetest and finest among national tongues", correct: true },
                { text: "Telugu is the newest language", correct: false },
                { text: "Telugu is only spoken in palaces", correct: false }
              ],
              explanation: "Sri Krishnadevaraya, the legendary Vijayanagara emperor, immortalized this in his epic Amuktamalyada.",
              audioText: "దేశభాషలందు తెలుగు లెస్స"
            },
            {
              id: "te-q65",
              type: "sentence-builder",
              prompt: "Build: 'Among all languages, Telugu is sweet'",
              wordBank: ["భాషలన్నింటిలో", "తెలుగు", "చాలా", "మధురం", "చేదు"],
              correctSequence: ["భాషలన్నింటిలో", "తెలుగు", "చాలా", "మధురం"],
              targetSentence: "భాషలన్నింటిలో తెలుగు చాలా మధురం",
              targetRoman: "Bhaashalannintilo Telugu chaala madhuram",
              explanation: "'మధురం' means sweet as honey."
            },
            {
              id: "te-q66",
              type: "match-pairs",
              prompt: "Match classical Telugu concepts",
              pairs: [
                { left: "మధురం", right: "Sweet like honey" },
                { left: "సామెత", right: "Proverb" },
                { left: "పద్యం", right: "Poetic verse" }
              ]
            }
          ]
        },
        {
          id: "te-l23",
          title: "Cherished Telugu Proverbs (సామెతలు)",
          description: "Use native idioms like a born speaker",
          xp: 30,
          questions: [
            {
              id: "te-q67",
              type: "multiple-choice",
              prompt: "What does the Telugu proverb 'చేతులు కాలాక ఆకులు పట్టుకున్నట్లు' teach?",
              options: [
                { text: "Regretting or seeking remedy after the damage is already done", correct: true },
                { text: "Cooking leaves carefully", correct: false },
                { text: "Always wash your hands", correct: false }
              ],
              explanation: "Literally 'holding leaves after hands are burnt' — akin to locking the stable after the horse has bolted.",
              audioText: "చేతులు కాలాక ఆకులు పట్టుకున్నట్లు"
            },
            {
              id: "te-q68",
              type: "sentence-builder",
              prompt: "Build: 'Mother Telugu is our life-breath'",
              wordBank: ["తెలుగు", "తల్లి", "మా", "ప్రాణం", "ఊరు"],
              correctSequence: ["తెలుగు", "తల్లి", "మా", "ప్రాణం"],
              targetSentence: "తెలుగు తల్లి మా ప్రాణం",
              targetRoman: "Telugu thalli maa praanam",
              explanation: "'ప్రాణం' means life-force or soul."
            },
            {
              id: "te-q69",
              type: "match-pairs",
              prompt: "Match literary Telugu terms",
              pairs: [
                { left: "ప్రాణం", right: "Life-breath / Soul" },
                { left: "జ్ఞానం", right: "Wisdom / Knowledge" },
                { left: "గౌరవం", right: "Respect / Honor" }
              ]
            }
          ]
        },
        {
          id: "te-l24",
          title: "Mastery & The Lifetime Telugu Title (జీవితకాల తెలుగు బిడ్డ)",
          description: "Final graduation milestone to earn your lifetime certificate",
          xp: 35,
          questions: [
            {
              id: "te-q70",
              type: "multiple-choice",
              prompt: "What does it mean to achieve the honor 'జీవితకాల తెలుగు బిడ్డ' (Lifetime Telugu Native)?",
              options: [
                { text: "You have mastered Telugu from zero: script, conversations, food, culture & classical soul!", correct: true },
                { text: "You only know how to read the alphabet", correct: false },
                { text: "You memorized 10 words", correct: false }
              ],
              explanation: "You have embraced the language, food, warmth, and literature as a true native son or daughter of Telugu Thalli.",
              audioText: "జీవితకాల తెలుగు బిడ్డ"
            },
            {
              id: "te-q71",
              type: "sentence-builder",
              prompt: "Build: 'I am proud to speak Telugu'",
              wordBank: ["నేను", "తెలుగు", "మాట్లాడటం", "గర్వంగా", "ఉంది"],
              correctSequence: ["నేను", "తెలుగు", "మాట్లాడటం", "గర్వంగా", "ఉంది"],
              targetSentence: "నేను తెలుగు మాట్లాడటం గర్వంగా ఉంది",
              targetRoman: "Nenu Telugu maatlaadatam garvanga undi",
              explanation: "'గర్వంగా ఉంది' means feeling immense pride."
            },
            {
              id: "te-q72",
              type: "match-pairs",
              prompt: "Match the crowning achievements of Telugu mastery",
              pairs: [
                { left: "గర్వం", right: "Pride" },
                { left: "విజయం", right: "Success / Triumph" },
                { left: "అభినందనలు", right: "Hearty congratulations" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
