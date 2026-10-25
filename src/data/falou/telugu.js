export const TELUGU_FALOU_CONVERSATIONS = [
  {
    id: 'conv-telugu-chai',
    title: 'Charminar Irani Chai & Osmania Biscuit',
    subtitle: 'Order piping hot Irani chai & buttery Osmania biscuits near Charminar',
    icon: '☕',
    partnerName: 'Srinivas Annayya (Cafe Master)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'నమస్కారం బాస్! ఏం కావాలి? వేడి వేడి ఇరానీ ఛాయ్, ఉస్మానియా బిస్కెట్లు సిద్ధం!',
        phonetics: 'Namaskaram boss! Emi kaavali? Vedi vedi Irani chai, Osmania biscuitlu siddham!',
        english: 'Greetings boss! What would you like? Piping hot Irani chai and Osmania biscuits are ready!'
      },
      {
        speaker: 'user',
        prompt: 'Order two hot Irani chais and four Osmania biscuits.',
        targetText: 'నమస్కారం అన్నా! రెండు ఇరానీ ఛాయ్ మరియు నాలుగు ఉస్మానియా బిస్కెట్లు ఇవ్వండి.',
        phonetics: 'Namaskaram anna! Rendu Irani chai mariyu naalugu Osmania biscuitlu ivvandi.',
        english: 'Hello brother! Please give two Irani chais and four Osmania biscuits.',
        options: [
          { text: 'నమస్కారం అన్నా! రెండు ఇరానీ ఛాయ్ మరియు నాలుగు ఉస్మానియా బిస్కెట్లు ఇవ్వండి.', phonetics: 'Namaskaram anna! Rendu Irani chai mariyu naalugu Osmania biscuitlu ivvandi.', correct: true },
          { text: 'నాకు ఛాయ్ వద్దు.', phonetics: 'Naaku chai vaddu.', correct: false },
          { text: 'షాప్ మూసేశారా?', phonetics: 'Shop moosesaaraa?', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'సూపర్ బాస్! చక్కర సరిగ్గా ఉందా లేక తక్కువ వేయమంటారా?',
        phonetics: 'Super boss! Chakkera sarigga undaa leka thakkuva veyamantaaraa?',
        english: 'Super boss! Is the sugar level fine or should I make it less sweet?'
      },
      {
        speaker: 'user',
        prompt: 'Say moderate sugar is fine, and ask how much the total bill is.',
        targetText: 'చక్కర మధ్యస్తంగా ఉండనీయండి. మొత్తం ఎంత అయింది?',
        phonetics: 'Chakkera madhyasthangaa undaneeyandi. Moththam entha ayindi?',
        english: 'Keep the sugar moderate. How much is the total?',
        options: [
          { text: 'చక్కర మధ్యస్తంగా ఉండనీయండి. మొత్తం ఎంత అయింది?', phonetics: 'Chakkera madhyasthangaa undaneeyandi. Moththam entha ayindi?', correct: true },
          { text: 'నాకు ఆకలి లేదు.', phonetics: 'Naaku aakali ledu.', correct: false },
          { text: 'డబ్బులు లేవు.', phonetics: 'Dabbulu levu.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'మొత్తం యాభై రూపాయలు బాస్! UPI లేదా క్యాష్, ఏదైనా పర్వాలేదు! ఎంజాయ్ చేయండి!',
        phonetics: 'Moththam yaabhai roopaayalu boss! UPI leda cash, edainaa parvaaledu! Enjoy cheyandi!',
        english: 'Total fifty rupees boss! UPI or cash, anything is fine! Enjoy!'
      }
    ]
  },
  {
    id: 'conv-telugu-auto',
    title: 'Hyderabad Auto Ride to Tank Bund',
    subtitle: 'Ride past Hussain Sagar Lake & Buddha statue',
    icon: '🛺',
    partnerName: 'Auto Ramu Anna',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'నమస్తే అండీ! ఎక్కడికి వెళ్ళాలి? ట్యాంక్ బండ్ వైపా, హైటెక్ సిటీ వైపా?',
        phonetics: 'Namaste andi! Ekkadiki vellaali? Tank Bund vaipaa, Hitech City vaipaa?',
        english: 'Hello sir! Where do you need to go? Towards Tank Bund or Hitech City?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will take you to Tank Bund by meter.',
        targetText: 'అన్నా, ట్యాంక్ బండ్ వెళ్తారా? మీటర్ మీద పది రూపాయలు ఎక్కువిస్తాను.',
        phonetics: 'Anna, Tank Bund velthaaraa? Meter meeda padi roopaayalu ekkuvisthaanu.',
        english: 'Brother, will you go to Tank Bund? I will give ten rupees extra on the meter.',
        options: [
          { text: 'అన్నా, ట్యాంక్ బండ్ వెళ్తారా? మీటర్ మీద పది రూపాయలు ఎక్కువిస్తాను.', phonetics: 'Anna, Tank Bund velthaaraa? Meter meeda padi roopaayalu ekkuvisthaanu.', correct: true },
          { text: 'నాకు ఆటో వద్దు.', phonetics: 'Naaku auto vaddu.', correct: false },
          { text: 'నేను నడుచుకుంటూ వెళ్తాను.', phonetics: 'Nenu naduchukuntuu velthaanu.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ఎక్కండి సార్! సెక్రటేరియట్ దగ్గర ట్రాఫిక్ ఉంది కానీ పదిహేను నిమిషాల్లో తీసుకెళ్తా!',
        phonetics: 'Ekkandi sir! Secretariat daggara traffic undi kaani padhihenu nimishaallo theesukelthaa!',
        english: 'Hop in sir! There is traffic near Secretariat, but I will get you there in fifteen minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight and then turn left at the circle.',
        targetText: 'సరే అన్నా, ముందుకు నేరుగా వెళ్లి సర్కిల్ దగ్గర ఎడమవైపు తిప్పండి.',
        phonetics: 'Sare anna, munduku nerugaa velli circle daggara edamavaipu thippandi.',
        english: 'Alright brother, go straight ahead and turn left at the circle.',
        options: [
          { text: 'సరే అన్నా, ముందుకు నేరుగా వెళ్లి సర్కిల్ దగ్గర ఎడమవైపు తిప్పండి.', phonetics: 'Sare anna, munduku nerugaa velli circle daggara edamavaipu thippandi.', correct: true },
          { text: 'ఆపండి నేను దిగిపోతాను.', phonetics: 'Aapandi nenu digipothaanu.', correct: false },
          { text: 'చాలా వేగంగా వెళ్ళండి.', phonetics: 'Chaala vegangaa vellandi.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ట్యాంక్ బండ్ వచ్చేసింది సార్! బుద్ధుడి విగ్రహాన్ని చూస్తూ చల్లటి గాలి ఆస్వాదించండి!',
        phonetics: 'Tank Bund vachessindi sir! Buddhudi vigrahaanni choosthuu challati gaali aasvaadinchandi!',
        english: 'Tank Bund has arrived sir! Enjoy the cool breeze while viewing the Buddha statue!'
      }
    ]
  },
  {
    id: 'conv-telugu-cinema',
    title: 'Tollywood FDFS Euphoria at RTC X Roads',
    subtitle: 'Catch the madness of a superstar movie First Day First Show at Sandhya theater',
    icon: '🎬',
    partnerName: 'Bava Naveen',
    partnerAvatar: '😎',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'బావా! సంధ్య థియేటర్‌లో మన హీరో సినిమా ఫస్ట్ డే ఫస్ట్ షో టిక్కెట్లు దొరికాయి! వెళ్దామా?',
        phonetics: 'Baavaa! Sandhya theater-lo mana hero cinema First Day First Show tickets dorikaayi! Veldhaamaa?',
        english: 'Bava! Got tickets for our hero movie FDFS at Sandhya theater! Shall we go?'
      },
      {
        speaker: 'user',
        prompt: 'Say absolutely yes, hero entry will be goosebumps and massive festival.',
        targetText: 'ఖచ్చితంగా వెళ్దాం బావా! హీరో ఎంట్రీ చూస్తే రోమాలు నిక్కబొడుచుకుంటాయి, పండగే!',
        phonetics: 'Khachithangaa veldhaam baavaa! Hero entry choosthe romalu nikkaboduchukuntaayi, pandage!',
        english: 'Definitely let us go bava! Hero entry will give goosebumps, it is pure festival!',
        options: [
          { text: 'ఖచ్చితంగా వెళ్దాం బావా! హీరో ఎంట్రీ చూస్తే రోమాలు నిక్కబొడుచుకుంటాయి, పండగే!', phonetics: 'Khachithangaa veldhaam baavaa! Hero entry choosthe romalu nikkaboduchukuntaayi, pandage!', correct: true },
          { text: 'నాకు సినిమాలు నచ్చవు.', phonetics: 'Naaku cinemalu nachavu.', correct: false },
          { text: 'నేను పడుకుంటాను.', phonetics: 'Nenu padukuntaanu.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'కాన్ఫెట్టి పేపర్లు, ఈలలు సిద్ధం చేశా! థియేటర్ మొత్తం ఊగిపోవాలి అంతే!',
        phonetics: 'Confetti paperlu, eelalu siddham chesaa! Theater moththam oogipovaali anthe!',
        english: 'I prepared confetti paper and whistles! The entire theater must shake!'
      },
      {
        speaker: 'user',
        prompt: 'Say extraordinary, movie is a blockbuster mega hit.',
        targetText: 'అద్భుతం బావా! సినిమా బ్లాక్‌బస్టర్ హిట్!',
        phonetics: 'Adbhutham baavaa! Cinema blockbuster hit!',
        english: 'Extraordinary bava! The movie is a blockbuster hit!',
        options: [
          { text: 'అద్భుతం బావా! సినిమా బ్లాక్‌బస్టర్ హిట్!', phonetics: 'Adbhutham baavaa! Cinema blockbuster hit!', correct: true },
          { text: 'టిక్కెట్ దొరకలేదు.', phonetics: 'Ticket dorakaledu.', correct: false },
          { text: 'గోల చేయకు.', phonetics: 'Gola cheyaku.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'హీరో దమ్ము అది బావా! రాత్రి ప్యారడైజ్‌కి వెళ్లి బిర్యానీ తిందాం పద!',
        phonetics: 'Hero dammu adi baavaa! Raathri Paradise-ki velli biryani thindaam pada!',
        english: 'That is hero power bava! Come let us head to Paradise for biryani tonight!'
      }
    ]
  }
];
