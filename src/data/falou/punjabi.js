export const PUNJABI_FALOU_CONVERSATIONS = [
  {
    id: 'conv-punjabi-dhaba',
    title: 'GT Road Dhaba: Sarson da Saag & Lassi',
    subtitle: 'Order Makki di Roti with fresh white butter, Sarson da Saag & rich creamy lassi',
    icon: '🥛',
    partnerName: 'Balwinder Paaji (Dhaba Host)',
    partnerAvatar: '👳🏽‍♂️',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ਜੀ! ਜੀ ਆਇਆਂ ਨੂੰ! ਚਾਰਪਾਈ ਤੇ ਬੈਠੋ! ਅੱਜ ਤਾਜ਼ਾ ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ ਤੇ ਮੱਕੀ ਦੀ ਰੋਟੀ ਬਣੀ ਹੈ!',
        phonetics: 'Sat Sri Akal ji! Jee aayan nu! Chaarpai te baitho! Aaj taaza sarson da saag te makki di roti bani hai!',
        english: 'Sat Sri Akal! Hearty welcome! Sit on the cot! Fresh sarson da saag and makki di roti are ready today!'
      },
      {
        speaker: 'user',
        prompt: 'Order two makki di rotis with white butter, sarson da saag, and a sweet lassi.',
        targetText: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ਪਾਜੀ! ਦੋ ਮੱਕੀ ਦੀਆਂ ਰੋਟੀਆਂ ਮੱਖਣ ਨਾਲ, ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ ਤੇ ਇੱਕ ਮਿੱਠੀ ਲੱਸੀ ਲੈ ਆਓ।',
        phonetics: 'Sat Sri Akal paaji! Do makki diyan rotiyaan makkhan naal, sarson da saag te ikk mitthi lassi lai aao.',
        english: 'Sat Sri Akal paaji! Please bring two makki rotis with butter, sarson da saag, and one sweet lassi.',
        options: [
          { text: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ਪਾਜੀ! ਦੋ ਮੱਕੀ ਦੀਆਂ ਰੋਟੀਆਂ ਮੱਖਣ ਨਾਲ, ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ ਤੇ ਇੱਕ ਮਿੱਠੀ ਲੱਸੀ ਲੈ ਆਓ।', phonetics: 'Sat Sri Akal paaji! Do makki diyan rotiyaan makkhan naal, sarson da saag te ikk mitthi lassi lai aao.', correct: true },
          { text: 'ਮੈਨੂੰ ਖਾਣਾ ਨਹੀਂ ਚਾਹੀਦਾ।', phonetics: 'Mainu khaana nahi chaahida.', correct: false },
          { text: 'ਢਾਬਾ ਬੰਦ ਕਰੋ।', phonetics: 'Dhaba band karo.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ਨਾਲ ਗੁੜ ਤੇ ਹਰੀ ਮਿਰਚ ਵੀ ਰੱਖ ਦਿਆਂ? ਸਾਗ ਦਾ ਸਵਾਦ ਦੁੱਗਣਾ ਹੋ ਜਾਊਗਾ!',
        phonetics: 'Naal gurh te hari mirch vi rakh diyan? Saag da swaad dugna ho jaauga!',
        english: 'Shall I also place jaggery and green chili alongside? It will double the taste of saag!'
      },
      {
        speaker: 'user',
        prompt: 'Say yes paaji, definitely add jaggery, and ask for the total bill.',
        targetText: 'ਹਾਂ ਜੀ ਪਾਜੀ, ਗੁੜ ਜ਼ਰੂਰ ਰੱਖੋ। ਕੁੱਲ ਕਿੰਨੇ ਪੈਸੇ ਹੋਏ?',
        phonetics: 'Haan ji paaji, gurh zaroor rakkho. Kull kinne paise hoye?',
        english: 'Yes paaji, definitely put jaggery. How much is the total bill?',
        options: [
          { text: 'ਹਾਂ ਜੀ ਪਾਜੀ, ਗੁੜ ਜ਼ਰੂਰ ਰੱਖੋ। ਕੁੱਲ ਕਿੰਨੇ ਪੈਸੇ ਹੋਏ?', phonetics: 'Haan ji paaji, gurh zaroor rakkho. Kull kinne paise hoye?', correct: true },
          { text: 'ਮੈਂ ਪੈਸੇ ਨਹੀਂ ਦਿਆਂਗਾ।', phonetics: 'Main paise nahi deyaanga.', correct: false },
          { text: 'ਮੈਨੂੰ ਭੁੱਖ ਨਹੀਂ ਹੈ।', phonetics: 'Mainu bhukh nahi hai.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ਸਿਰਫ਼ ਇੱਕ ਸੌ ਪੰਜਾਹ ਰੁਪਏ ਭਾਊ! ਪਿਆਰ ਨਾਲ ਛਕੋ, ਪੰਜਾਬੀ ਢਾਬੇ ਤੇ ਦਿਲ ਖੋਲ੍ਹ ਕੇ ਖਵਾਈਦਾ ਹੈ!',
        phonetics: 'Sirf ikk sau panjah rupaye bhaau! Pyaar naal chhako, Punjabi dhabe te dil kholh ke khwayida hai!',
        english: 'Just 150 rupees brother! Eat with joy, at a Punjabi dhaba we serve with open hearts!'
      }
    ]
  },
  {
    id: 'conv-punjabi-auto',
    title: 'Amritsar Auto to Sri Harmandir Sahib',
    subtitle: 'Ride through historic Amritsar to the sacred Golden Temple',
    icon: '🛺',
    partnerName: 'Gurpreet Veer (Auto Driver)',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ਜੀ! ਕਿੱਥੇ ਚੱਲੇ ਹੋ? ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਜਾਣਾ ਹੈ?',
        phonetics: 'Sat Sri Akal ji! Kithe challe ho? Sri Darbar Sahib jaana hai?',
        english: 'Sat Sri Akal! Where are you headed? Going to Sri Darbar Sahib?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will take you to Sri Harmandir Sahib and ask the fare.',
        targetText: 'ਹਾਂ ਜੀ ਵੀਰ ਜੀ, ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਚੱਲੋਗੇ? ਕਿੰਨਾ ਕਿਰਾਇਆ ਲਵੋਗੇ?',
        phonetics: 'Haan ji veer ji, Sri Darbar Sahib challoge? Kinna kiraya lavoge?',
        english: 'Yes brother, will you go to Sri Darbar Sahib? What fare will you charge?',
        options: [
          { text: 'ਹਾਂ ਜੀ ਵੀਰ ਜੀ, ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਚੱਲੋਗੇ? ਕਿੰਨਾ ਕਿਰਾਇਆ ਲਵੋਗੇ?', phonetics: 'Haan ji veer ji, Sri Darbar Sahib challoge? Kinna kiraya lavoge?', correct: true },
          { text: 'ਮੈਨੂੰ ਆਟੋ ਨਹੀਂ ਚਾਹੀਦਾ।', phonetics: 'Mainu auto nahi chaahida.', correct: false },
          { text: 'ਮੈਂ ਪੈਦਲ ਜਾਵਾਂਗਾ।', phonetics: 'Main paidal jaavaanga.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ਸਿਰਫ਼ ਪੰਜਾਹ ਰੁਪਏ ਜੀ! ਬੈਠੋ ਪਿਆਰ ਨਾਲ, ਦਸ ਮਿੰਟਾਂ ਵਿਚ ਪਹੁੰਚਾ ਦਿਆਂਗਾ!',
        phonetics: 'Sirf panjah rupaye ji! Baitho pyaar naal, das mintaan vich pahuncha deyaanga!',
        english: 'Just fifty rupees! Sit comfortably, I will get you there in ten minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight ahead and drop near the main Heritage Street entrance.',
        targetText: 'ਸਿੱਧਾ ਚੱਲੋ ਵੀਰ ਜੀ, ਹੈਰੀਟੇਜ ਸਟ੍ਰੀਟ ਦੇ ਕੋਲ ਉਤਾਰ ਦਿਓ।',
        phonetics: 'Siddha challo veer ji, Heritage Street de kol utaar dio.',
        english: 'Go straight brother, drop me near Heritage Street.',
        options: [
          { text: 'ਸਿੱਧਾ ਚੱਲੋ ਵੀਰ ਜੀ, ਹੈਰੀਟੇਜ ਸਟ੍ਰੀਟ ਦੇ ਕੋਲ ਉਤਾਰ ਦਿਓ।', phonetics: 'Siddha challo veer ji, Heritage Street de kol utaar dio.', correct: true },
          { text: 'ਆਟੋ ਰੋਕੋ ਮੈਂ ਉੱਤਰ ਰਿਹਾ ਹਾਂ।', phonetics: 'Auto roko main uttar riha haan.', correct: false },
          { text: 'ਤੇਜ਼ੀ ਨਾਲ ਚਲਾਓ।', phonetics: 'Tezi naal chalao.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ਦਰਬਾਰ ਸਾਹਿਬ ਆ ਗਿਆ ਜੀ! ਸਿਰ ਢੱਕ ਕੇ ਸ਼ਰਧਾ ਨਾਲ ਦਰਸ਼ਨ ਕਰੋ ਅਤੇ ਗੁਰੂ ਕਾ ਲੰਗਰ ਜ਼ਰੂਰ ਛਕਣਾ!',
        phonetics: 'Darbar Sahib aa gaya ji! Sir dhakk ke shardha naal darshan karo ate Guru ka langar zaroor chhakna!',
        english: 'Darbar Sahib has arrived! Cover your head, take darshan with devotion and do partake in Guru\'s Langar!'
      }
    ]
  },
  {
    id: 'conv-punjabi-mela',
    title: 'Vaisakhi Mela Bhangra & Dhol',
    subtitle: 'Dance to energetic Dhol beats and celebrate the golden harvest',
    icon: '🥁',
    partnerName: 'Manpreet Yaar',
    partnerAvatar: '🌾',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'ਬੱਲੇ ਬੱਲੇ ਵੀਰ! ਵਿਸਾਖੀ ਦਾ ਮੇਲਾ ਸਜ ਗਿਆ! ਢੋਲ ਦੀ ਤਾਲ ਸੁਣ, ਚੱਲੀਏ ਭੰਗੜਾ ਪਾਉਣ?',
        phonetics: 'Balle balle veer! Vaisakhi da mela saj gaya! Dhol di taal sun, challiye bhangra paaun?',
        english: 'Balle balle brother! Vaisakhi fair is set up! Hear the dhol beat, shall we go do Bhangra?'
      },
      {
        speaker: 'user',
        prompt: 'Say definitely brother, let us dance with all our heart and celebrate harvest.',
        targetText: 'ਜ਼ਰੂਰ ਵੀਰ! ਢੋਲ ਦੇ ਡਗੇ ਤੇ ਭੰਗੜਾ ਪਾਵਾਂਗੇ, ਵਿਸਾਖੀ ਦੀ ਖ਼ੁਸ਼ੀ ਮਨਾਵਾਂਗੇ!',
        phonetics: 'Zaroor veer! Dhol de dage te bhangra paavaange, Vaisakhi di khushi manavaange!',
        english: 'Definitely brother! We will dance to the dhol beats and celebrate Vaisakhi\'s joy!',
        options: [
          { text: 'ਜ਼ਰੂਰ ਵੀਰ! ਢੋਲ ਦੇ ਡਗੇ ਤੇ ਭੰਗੜਾ ਪਾਵਾਂਗੇ, ਵਿਸਾਖੀ ਦੀ ਖ਼ੁਸ਼ੀ ਮਨਾਵਾਂਗੇ!', phonetics: 'Zaroor veer! Dhol de dage te bhangra paavaange, Vaisakhi di khushi manavaange!', correct: true },
          { text: 'ਮੈਨੂੰ ਨੱਚਣਾ ਨਹੀਂ ਆਉਂਦਾ।', phonetics: 'Mainu nachna nahi aaunda.', correct: false },
          { text: 'ਮੇਲਾ ਖ਼ਰਾਬ ਹੈ।', phonetics: 'Mela kharab hai.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ਤਾਜ਼ੀਆਂ ਗਰਮ ਜਲੇਬੀਆਂ ਤੇ ਕੁਲਫ਼ੀ ਫ਼ਲੂਦਾ ਖਾਵਾਂਗੇ! ਭੁੱਖ ਲੱਗੀ ਹੈ ਤੈਨੂੰ?',
        phonetics: 'Taaziyan garam jalebiyan te kulfi faluda khaavaange! Bhukh laggi hai tainu?',
        english: 'We will eat fresh hot jalebis and kulfi falooda! Are you feeling hungry?'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, hot jalebis at the mela are unbeatable.',
        targetText: 'ਹਾਂ ਵੀਰ, ਮੇਲੇ ਦੀਆਂ ਗਰਮ ਜਲੇਬੀਆਂ ਦਾ ਕੋਈ ਮੁਕਾਬਲਾ ਨਹੀਂ!',
        phonetics: 'Haan veer, mele diyan garam jalebiyan da koi mukaabla nahi!',
        english: 'Yes brother, fair\'s piping hot jalebis have no match!',
        options: [
          { text: 'ਹਾਂ ਵੀਰ, ਮੇਲੇ ਦੀਆਂ ਗਰਮ ਜਲੇਬੀਆਂ ਦਾ ਕੋਈ ਮੁਕਾਬਲਾ ਨਹੀਂ!', phonetics: 'Haan veer, mele diyan garam jalebiyan da koi mukaabla nahi!', correct: true },
          { text: 'ਜਲੇਬੀ ਮਿੱਠੀ ਹੁੰਦੀ ਹੈ।', phonetics: 'Jalebi mitthi hundi hai.', correct: false },
          { text: 'ਕੁਝ ਨਹੀਂ ਖਾਣਾ।', phonetics: 'Kujh nahi khaana.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ਚੱਕ ਦੇ ਫੱਟੇ! ਆਜਾ ਫਿਰ, ਅੱਜ ਪੂਰਾ ਮੇਲਾ ਧੁੜਕਾ ਦੇਣਾ ਹੈ!',
        phonetics: 'Chakk de phatte! Aaja phir, ajj poora mela dhurka dena hai!',
        english: 'Chakk de phatte! Come along, today we will rock the entire fair!'
      }
    ]
  }
];
