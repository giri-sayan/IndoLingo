export const MALAYALAM_FALOU_CONVERSATIONS = [
  {
    id: 'conv-malayalam-tea',
    title: 'Naadan Chayakada: Kattan Chappi & Pazham Pori',
    subtitle: 'Order black coffee & crispy golden banana fritters at a village teashop',
    icon: '☕',
    partnerName: 'Kunjumon Chettan (Chayakada Host)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'നമസ്കാരം! ചായക്കടയിലേക്ക് സ്വാഗതം! നല്ല ചൂട് കട്ടൻ കാപ്പിയോ അതോ പാൽച്ചായയോ വേണോ?',
        phonetics: 'Namaskaram! Chayakadayilekku swaagatham! Nalla choodu kattan kaappiyo atho paalchaayayo veno?',
        english: 'Greetings! Welcome to the teashop! Would you like piping hot black coffee or milk tea?'
      },
      {
        speaker: 'user',
        prompt: 'Order one hot black coffee and two crispy banana fritters (pazham pori).',
        targetText: 'നമസ്കാരം ചേട്ടാ! ഒരു ചൂട് കട്ടൻ കാപ്പിയും രണ്ട് പഴംപൊരിയും തരൂ.',
        phonetics: 'Namaskaram chetta! Oru choodu kattan kaappiyum randu pazham poriyum tharoo.',
        english: 'Hello brother! Please give one hot black coffee and two banana fritters.',
        options: [
          { text: 'നമസ്കാരം ചേട്ടാ! ഒരു ചൂട് കട്ടൻ കാപ്പിയും രണ്ട് പഴംപൊരിയും തരൂ.', phonetics: 'Namaskaram chetta! Oru choodu kattan kaappiyum randu pazham poriyum tharoo.', correct: true },
          { text: 'എനിക്ക് ചായ വേണ്ട.', phonetics: 'Enikku chaya venda.', correct: false },
          { text: 'കട അടച്ചോ?', phonetics: 'Kada adacho?', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'നല്ല മധുരമുള്ള നേന്ത്രപ്പഴം കൊണ്ടുള്ള പൊരിയാണ്! കാപ്പിയിൽ മധുരം കുറയ്ക്കണോ?',
        phonetics: 'Nalla madhuramulla nendrapazham kondulla poriyaanu! Kaappiyil madhuram kuraykkano?',
        english: 'Fritters made with sweet ripe Nendran bananas! Should I reduce sugar in coffee?'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, put less sugar, and ask for the total bill amount.',
        targetText: 'അതെ ചേട്ടാ, മധുരം കുറച്ചു മതി. ആകെ എത്ര രൂപയായി?',
        phonetics: 'Athe chetta, madhuram kurachu mathi. Aake ethra roopaayi?',
        english: 'Yes brother, less sugar is enough. How much is the total amount?',
        options: [
          { text: 'അതെ ചേട്ടാ, മധുരം കുറച്ചു മതി. ആകെ എത്ര രൂപയായി?', phonetics: 'Athe chetta, madhuram kurachu mathi. Aake ethra roopaayi?', correct: true },
          { text: 'വിശപ്പില്ല.', phonetics: 'Vishappilla.', correct: false },
          { text: 'പൈസ തരില്ല.', phonetics: 'Paisa tharilla.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ആകെ മുപ്പത്തിയഞ്ച് രൂപ! ഗൂഗിൾ പേയോ പണമോ തരാം! കട്ടൻ ആസ്വദിച്ചു കുടിക്കൂ!',
        phonetics: 'Aake muppaththiyanju roopa! Google Pay-o panamo tharaam! Kattan aaswadhichu kudikku!',
        english: 'Total thirty-five rupees! Google Pay or cash is fine! Enjoy the black coffee!'
      }
    ]
  },
  {
    id: 'conv-malayalam-auto',
    title: 'Kochi Auto Ride to Fort Kochi Beach',
    subtitle: 'Ride past heritage colonial lanes and Chinese fishing nets',
    icon: '🛺',
    partnerName: 'Auto Suresh Chettan',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'ഹലോ സാർ! എങ്ങോട്ടാണ് പോകേണ്ടത്? ഫോർട്ട് കൊച്ചിയോ അതോ മറൈൻ ഡ്രൈവോ?',
        phonetics: 'Hello sir! Engottaanu pokendathu? Fort Kochiyo atho Marine Drive-o?',
        english: 'Hello sir! Where do you need to go? Fort Kochi or Marine Drive?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will go to Fort Kochi Beach by meter fare.',
        targetText: 'ചേട്ടാ, ഫോർട്ട് കൊച്ചി ബീച്ചിലേക്ക് പോകുമോ? മീറ്റർ ഇടാമോ?',
        phonetics: 'Chetta, Fort Kochi beachilekku pokumo? Meter idaamo?',
        english: 'Brother, will you go to Fort Kochi Beach? Can you put the meter on?',
        options: [
          { text: 'ചേട്ടാ, ഫോർട്ട് കൊച്ചി ബീച്ചിലേക്ക് പോകുമോ? മീറ്റർ ഇടാമോ?', phonetics: 'Chetta, Fort Kochi beachilekku pokumo? Meter idaamo?', correct: true },
          { text: 'എനിക്ക് ഓട്ടോ വേണ്ട.', phonetics: 'Enikku auto venda.', correct: false },
          { text: 'മഴ പെയ്യുന്നുണ്ട്.', phonetics: 'Mazha peyyunnundu.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'കയറിക്കോളൂ സാർ! തോപ്പുംപടി പാലത്തിൽ ചെറിയ ബ്ലോക്കുണ്ട്, പക്ഷെ ഇരുപത് മിനിറ്റിൽ എത്തിക്കാം!',
        phonetics: 'Kayarikkoloo sir! Thoppumpady paalathil cheriya blockundu, pakshe irupathu minittil ethikkaam!',
        english: 'Hop in sir! Slight traffic on Thoppumpady bridge, but I will get you there in twenty minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight ahead and take a left turn near the church.',
        targetText: 'ശരി ചേട്ടാ, നേരെ പോയി പള്ളിയുടെ അടുത്ത് നിന്ന് ഇടത്തോട്ട് തിരിയൂ.',
        phonetics: 'Shari chetta, nere poyi palliyude aduthu ninnu idathottu thiriyoo.',
        english: 'Alright brother, go straight and turn left near the church.',
        options: [
          { text: 'ശരി ചേട്ടാ, നേരെ പോയി പള്ളിയുടെ അടുത്ത് നിന്ന് ഇടത്തോട്ട് തിരിയൂ.', phonetics: 'Shari chetta, nere poyi palliyude aduthu ninnu idathottu thiriyoo.', correct: true },
          { text: 'വണ്ടി നിർത്തൂ ഞാൻ ഇറങ്ങുന്നു.', phonetics: 'Vandi nirthoo njaan irangunnu.', correct: false },
          { text: 'വേഗത്തിൽ ഓടിക്കൂ.', phonetics: 'Vegathil odikkoo.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ഫോർട്ട് കൊച്ചി ബീച്ച് എത്തി സാർ! ചീനവലകളും സൂര്യാസ്തമയവും കണ്ട് ആസ്വദിക്കൂ!',
        phonetics: 'Fort Kochi beach ethi sir! Cheenavalakalum sooryaasthamayavum kandu aaswadhikku!',
        english: 'Fort Kochi Beach is here sir! Enjoy the sunset and Chinese fishing nets!'
      }
    ]
  },
  {
    id: 'conv-malayalam-sadya',
    title: 'Grand Onam Sadya on Banana Leaf',
    subtitle: 'Relish 24 royal Kerala dishes, avial, parippu ghee & palada payasam',
    icon: '🍛',
    partnerName: 'Radha Chechi (Sadya Host)',
    partnerAvatar: '👩🏽‍🍳',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'വരൂ! ഓണസദ്യ കഴിക്കാൻ ഇലയിട്ടിട്ടുണ്ട്! നെയ്യും പരിപ്പും ചോറും വിളമ്പട്ടെ?',
        phonetics: 'Varoo! Onasadya kazhikkaan ilayittundu! Neyyum parippum chorum vilambatte?',
        english: 'Welcome! Banana leaf is laid for Onam Sadya! Shall I serve ghee, dal and hot rice?'
      },
      {
        speaker: 'user',
        prompt: 'Thank her warmly and ask for hot rice, sambar and tasty avial.',
        targetText: 'വളരെ നന്ദി ചേച്ചി! നല്ല ചൂട് ചോറും സാമ്പാറും അവിയലും വിളമ്പൂ.',
        phonetics: 'Valare nandi chechi! Nalla choodu chorum saambaarum aviyalum vilamboo.',
        english: 'Thank you very much sister! Please serve hot rice, sambar and avial.',
        options: [
          { text: 'വളരെ നന്ദി ചേച്ചി! നല്ല ചൂട് ചോറും സാമ്പാറും അവിയലും വിളമ്പൂ.', phonetics: 'Valare nandi chechi! Nalla choodu chorum saambaarum aviyalum vilamboo.', correct: true },
          { text: 'എനിക്ക് ഊണ് വേണ്ട.', phonetics: 'Enikku oonu venda.', correct: false },
          { text: 'പായസം മാത്രം മതി.', phonetics: 'Paayasam maathram mathi.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ഓലൻ, കാളൻ, തോരൻ, പപ്പടം എല്ലാം വെച്ചിട്ടുണ്ട്! വയറുനിറയെ കഴിക്കൂ!',
        phonetics: 'Olan, kalan, thoran, pappadam ellaam vechittundu! Vayaruniraye kazhikkoo!',
        english: 'Olan, kalan, thoran, pappadam are all placed! Eat till your heart and belly are full!'
      },
      {
        speaker: 'user',
        prompt: 'Compliment the divine taste and say the palada payasam is superb.',
        targetText: 'അമൃതുപോലെയുള്ള രുചി ചേച്ചി! അടപ്രഥമനും പാലടയും അതിഗംഭീരം!',
        phonetics: 'Amruthupoleyulla ruchi chechi! Adaprathamanum paaladayum athigambheeram!',
        english: 'Tastes like nectar sister! The prathaman and palada payasam are superb!',
        options: [
          { text: 'അമൃതുപോലെയുള്ള രുചി ചേച്ചി! അടപ്രഥമനും പാലടയും അതിഗംഭീരം!', phonetics: 'Amruthupoleyulla ruchi chechi! Adaprathamanum paaladayum athigambheeram!', correct: true },
          { text: 'ഭക്ഷണം കൊള്ളില്ല.', phonetics: 'Bhakshanam kollilla.', correct: false },
          { text: 'ഇല മാറ്റൂ.', phonetics: 'Ilai maattoo.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ഒരുപാട് സന്തോഷം! ഓണാശംസകൾ! വീണ്ടും വീട്ടിലേക്ക് വരണം കേട്ടോ!',
        phonetics: 'Orupaadu santhosham! Onashamsakal! Veendum veettilekku varanam ketto!',
        english: 'Heartfelt joy! Happy Onam! You must visit our home again!'
      }
    ]
  }
];
