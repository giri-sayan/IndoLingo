export const MARATHI_FALOU_CONVERSATIONS = [
  {
    id: 'conv-marathi-vada-pav',
    title: 'Dadar Tapri: Vada Pav & Cutting Chaha',
    subtitle: 'Order Mumbai\'s legendary crispy Vada Pav, red garlic chutney & cutting chai',
    icon: '☕',
    partnerName: 'Sachin Bhau (Tapri Host)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'नमस्कार भाऊ! काय देऊं आज? गरमा-गरम वडापाव की आल्याचा कडक कटिंग चहा?',
        phonetics: 'Namaskar bhau! Kaay deu aaj? Garma-garam vadapav ki aalyacha kadak cutting chaha?',
        english: 'Greetings brother! What shall I give today? Piping hot vada pav or strong ginger cutting tea?'
      },
      {
        speaker: 'user',
        prompt: 'Order two hot vada pavs with dry garlic chutney and one cutting chai.',
        targetText: 'नमस्कार भाऊ! दोन गरमा-गरम वडापाव आणि एक कटिंग चहा द्या.',
        phonetics: 'Namaskar bhau! Don garma-garam vadapav aani ek cutting chaha dya.',
        english: 'Hello brother! Please give two piping hot vada pavs and one cutting tea.',
        options: [
          { text: 'नमस्कार भाऊ! दोन गरमा-गरम वडापाव आणि एक कटिंग चहा द्या.', phonetics: 'Namaskar bhau! Don garma-garam vadapav aani ek cutting chaha dya.', correct: true },
          { text: 'मला चहा नको.', phonetics: 'Mala chaha nako.', correct: false },
          { text: 'दुकान बंद करा.', phonetics: 'Dukan band kara.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'लसणाची लाल चटणी आणि तळलेली हिरवी मिरची लावू का? मस्त झणझणीत होईल!',
        phonetics: 'Lasnachi laal chatni aani tal-leli hirvi mirchi laavu ka? Mast zhanzhanit hoil!',
        english: 'Shall I add red garlic chutney and fried green chili? It will be deliciously spicy!'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, add chutney, and ask how much the total bill is.',
        targetText: 'हो भाऊ, लसूण चटणी लावा. एकूण किती पैसे झाले?',
        phonetics: 'Ho bhau, lasun chatni laava. Ekun kiti paise jhaale?',
        english: 'Yes brother, add garlic chutney. How much is the total amount?',
        options: [
          { text: 'हो भाऊ, लसूण चटणी लावा. एकूण किती पैसे झाले?', phonetics: 'Ho bhau, lasun chatni laava. Ekun kiti paise jhaale?', correct: true },
          { text: 'भूक नाही मला.', phonetics: 'Bhook nahi mala.', correct: false },
          { text: 'पैसे नाहीत माझ्याकडे.', phonetics: 'Paise naahit maajhyakade.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'फक्त पन्नास रुपये भाऊ! GPay किंवा कॅश, काहीही चालेल! चवीने खा!',
        phonetics: 'Fakta pannaas rupaye bhau! GPay kinva cash, kaahihi chaalel! Chavine khaa!',
        english: 'Just fifty rupees brother! GPay or cash, anything works! Enjoy the taste!'
      }
    ]
  },
  {
    id: 'conv-marathi-auto',
    title: 'Pune Auto Ride to Shaniwar Wada',
    subtitle: 'Ride through historic Peth lanes to Bajirao\'s fortress',
    icon: '🛺',
    partnerName: 'Dattatray Kaka (Auto Driver)',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'बोला साहेब! कुठे जायचंय? शनिवार वाडा की एफसी रोड?',
        phonetics: 'Bola saheb! Kuthe jaaychay? Shaniwar Wada ki FC Road?',
        english: 'Tell me sir! Where do you want to go? Shaniwar Wada or FC Road?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will go to Shaniwar Wada by meter.',
        targetText: 'काका, शनिवार वाड्याला चालणार का? मीटरने चला.',
        phonetics: 'Kaka, Shaniwar Wadyala chaalnaar ka? Meter-ne chala.',
        english: 'Uncle, will you go to Shaniwar Wada? Please go by the meter.',
        options: [
          { text: 'काका, शनिवार वाड्याला चालणार का? मीटरने चला.', phonetics: 'Kaka, Shaniwar Wadyala chaalnaar ka? Meter-ne chala.', correct: true },
          { text: 'मला रिक्षा नको.', phonetics: 'Mala rickshaw nako.', correct: false },
          { text: 'पाऊस पडतोय मी जात नाही.', phonetics: 'Paaoos padtoy mee jaat naahi.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'बसा साहेब! पेठेत थोडी गर्दी आहे, पण वीस मिनिटांत पोहोचवतो!',
        phonetics: 'Basa saheb! Pethet thodi gardi aahe, pan vees minitaant pohachvato!',
        english: 'Sit in sir! There is some crowd in the Peths, but I will get you there in twenty minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight and take a right turn near the temple.',
        targetText: 'बरं काका, सरळ जा आणि मंदिराच्या पुढे उजवीकडे वळा.',
        phonetics: 'Bara kaka, saral ja aani mandiraachya pudhe ujveekade vala.',
        english: 'Alright uncle, go straight and turn right past the temple.',
        options: [
          { text: 'बरं काका, सरळ जा आणि मंदिराच्या पुढे उजवीकडे वळा.', phonetics: 'Bara kaka, saral ja aani mandiraachya pudhe ujveekade vala.', correct: true },
          { text: 'रिक्षा थांबवा मी उतरतो.', phonetics: 'Rickshaw thaambva mee utarto.', correct: false },
          { text: 'खूप जोरात चालवा.', phonetics: 'Khoop joraat chaalva.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'शनिवार वाडा आला साहेब! ऐतिहासिक वास्तू आहे, मनसोक्त फिरा!',
        phonetics: 'Shaniwar Wada aala saheb! Aitihaasik vaastu aahe, mansokt phira!',
        english: 'Shaniwar Wada has arrived sir! It is a historic fortress, explore with delight!'
      }
    ]
  },
  {
    id: 'conv-marathi-ganpati',
    title: 'Ganeshotsav & Dhol Tasha Pathak',
    subtitle: 'Experience the electric beats of Dhol Tasha & sweet steamed Ukadiche Modak',
    icon: '🥁',
    partnerName: 'Tejas Mitra',
    partnerAvatar: '🚩',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'गणपती बाप्पा मोरया! ढोल-ताशा पथकाचा गजर सुरू झालाय! बघायला चल पटकन!',
        phonetics: 'Ganpati Bappa Morya! Dhol-tasha pathakacha gajar suru jhaalay! Baghaayala chal patkan!',
        english: 'Ganpati Bappa Morya! The resonant beats of Dhol-Tasha troupe have started! Come quick to see!'
      },
      {
        speaker: 'user',
        prompt: 'Say let us definitely go, and chant Mangal Murti Morya with excitement.',
        targetText: 'नक्कीच मित्रा! मंगलमूर्ती मोरया! आजचा दिवस खूप उत्साहाचा आहे!',
        phonetics: 'Nakkich mitra! Mangal murti morya! Aajcha divas khoop utsaahacha aahe!',
        english: 'Definitely friend! Mangal Murti Morya! Today is a day of immense excitement!',
        options: [
          { text: 'नक्कीच मित्रा! मंगलमूर्ती मोरया! आजचा दिवस खूप उत्साहाचा आहे!', phonetics: 'Nakkich mitra! Mangal murti morya! Aajcha divas khoop utsaahacha aahe!', correct: true },
          { text: 'मला आवाज आवडत नाही.', phonetics: 'Mala aavaaz aavadat naahi.', correct: false },
          { text: 'मी घरी जातो.', phonetics: 'Mee ghari jaato.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'आईने खास ताजे उकडीचे मोदक बनवले आहेत! साजूक तूप टाकून खाशील?',
        phonetics: 'Aaine khaas taaje ukadiche modak banavle aahet! Saajuk toop taakun khaasheel?',
        english: 'Mother specially made fresh steamed rice modaks! Will you eat them with pure ghee?'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, ukadiche modak with pure ghee is pure heaven.',
        targetText: 'अहाहा! साजूक तुपासह उकडीचा मोदक म्हणजे स्वर्गाचा आनंद!',
        phonetics: 'Ahaha! Saajuk toopaasaha ukadicha modak mhanje swargaacha aanand!',
        english: 'Ahaha! Steamed modak with pure ghee is nothing short of heavenly bliss!',
        options: [
          { text: 'अहाहा! साजूक तुपासह उकडीचा मोदक म्हणजे स्वर्गाचा आनंद!', phonetics: 'Ahaha! Saajuk toopaasaha ukadicha modak mhanje swargaacha aanand!', correct: true },
          { text: 'मोदक गोड नसतो.', phonetics: 'Modak god nasto.', correct: false },
          { text: 'मला भूक नाही.', phonetics: 'Mala bhook naahi.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'चला मग, बाप्पाचे दर्शन घेऊया आणि मोदकावर ताव मारूया!',
        phonetics: 'Chala mag, Bappaache darshan gheu-ya aani modakaavar taav maaru-ya!',
        english: 'Come on then, let us take Bappa\'s blessings and feast on the modaks!'
      }
    ]
  }
];
