export const GUJARATI_FALOU_CONVERSATIONS = [
  {
    id: 'conv-gujarati-fafda',
    title: 'Sunday Morning Jalebi-Fafda & Cha',
    subtitle: 'Order crispy besan Fafda, piping hot spiral Jalebis & papaya sambharo',
    icon: '☕',
    partnerName: 'Bipin Bhai (Farsan Master)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'જય શ્રી કૃષ્ણ! આવો આવો! રવિવારની સવાર છે, ગરમાગરમ ફાફડા-જલેબી તૈયાર છે!',
        phonetics: 'Jai Shri Krishna! Aavo aavo! Ravivaarni savaar chhe, garmagaram faafda-jalebi taiyaar chhe!',
        english: 'Jai Shri Krishna! Welcome! It is Sunday morning, piping hot fafda-jalebi is ready!'
      },
      {
        speaker: 'user',
        prompt: 'Order 250 grams of fafda, hot jalebis, papaya sambharo and one masala tea.',
        targetText: 'જય શ્રી કૃષ્ણ ભાઈ! અઢીસો ગ્રામ ફાફડા, ગરમ જલેબી, પપૈયાનો સંભારો અને એક ચા આપો.',
        phonetics: 'Jai Shri Krishna bhai! Adheeso gram faafda, garam jalebi, papaiyano sambhaaro ane ek chaa aapo.',
        english: 'Jai Shri Krishna brother! Please give 250g fafda, hot jalebi, papaya sambharo and one tea.',
        options: [
          { text: 'જય શ્રી કૃષ્ણ ભાઈ! અઢીસો ગ્રામ ફાફડા, ગરમ જલેબી, પપૈયાનો સંભારો અને એક ચા આપો.', phonetics: 'Jai Shri Krishna bhai! Adheeso gram faafda, garam jalebi, papaiyano sambhaaro ane ek chaa aapo.', correct: true },
          { text: 'મને નાસ્તો નથી કરવો.', phonetics: 'Mane naasto nathi karvo.', correct: false },
          { text: 'દુકાન બંધ કરો.', phonetics: 'Dukaan band karo.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'સાથે તીખી કઢી અને તળેલાં લીલાં મરચાં પણ મૂકી દઉં? એકદમ જમાવટ થઈ જશે!',
        phonetics: 'Saathe teekhi kadhi ane talelaan leelaan marchaam pan mooki dau? Ekdam jamaavat thai jashe!',
        english: 'Shall I also put spicy kadhi and fried green chillies? It will be an absolute treat!'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, definitely put chillies, and ask how much the total is.',
        targetText: 'હા ભાઈ, મરચાં ચોક્કસ મૂકો. કુલ કેટલા રૂપિયા થયા?',
        phonetics: 'Haa bhai, marchaam chokkas mooko. Kul ketla rupiya thaya?',
        english: 'Yes brother, definitely put chillies. How much is the total?',
        options: [
          { text: 'હા ભાઈ, મરચાં ચોક્કસ મૂકો. કુલ કેટલા રૂપિયા થયા?', phonetics: 'Haa bhai, marchaam chokkas mooko. Kul ketla rupiya thaya?', correct: true },
          { text: 'મારી પાસે પૈસા નથી.', phonetics: 'Maari paase paisa nathi.', correct: false },
          { text: 'હું નથી ખાવાનો.', phonetics: 'Hoo nathi khaavano.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ફક્ત એકસો વીસ રૂપિયા! GPay કે રોકડા, ગમે તે આપો! શાંતિથી જલસા કરીને ખાઓ!',
        phonetics: 'Fakt ekso vees rupiya! GPay ke rokda, game te aapo! Shaantithi jalsa karine khaao!',
        english: 'Just one hundred twenty rupees! GPay or cash, give whatever! Enjoy with total joy!'
      }
    ]
  },
  {
    id: 'conv-gujarati-auto',
    title: 'Ahmedabad Auto Ride to Law Garden',
    subtitle: 'Ride to Law Garden market for traditional Bandhani & Chaniya Choli shopping',
    icon: '🛺',
    partnerName: 'Pravin Bhai (Auto Driver)',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'નમસ્તે સાહેબ! ક્યાં જવું છે? લૉ ગાર્ડન કે માણેક ચોક?',
        phonetics: 'Namaste saaheb! Kyan javu chhe? Law Garden ke Manek Chowk?',
        english: 'Namaste sir! Where do you want to go? Law Garden or Manek Chowk?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will take you to Law Garden by meter.',
        targetText: 'ભાઈ, લૉ ગાર્ડન જશો? મીટરથી ચાલશો ને?',
        phonetics: 'Bhai, Law Garden jasho? Meter-thi chaalsho ne?',
        english: 'Brother, will you go to Law Garden? You will go by meter, right?',
        options: [
          { text: 'ભાઈ, લૉ ગાર્ડન જશો? મીટરથી ચાલશો ને?', phonetics: 'Bhai, Law Garden jasho? Meter-thi chaalsho ne?', correct: true },
          { text: 'મારે રિક્ષા નથી જોતી.', phonetics: 'Maare rickshaw nathi joti.', correct: false },
          { text: 'હું ચાલીને જઈશ.', phonetics: 'Hoo chaaline jaeesh.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'બેસી જાઓ સાહેબ! આશ્રમ રોડ પર થોડો ટ્રાફિક છે પણ પંદર મિનિટમાં પહોંચાડી દઈશ!',
        phonetics: 'Besi jaao saaheb! Ashram Road par thodo traffic chhe pan pandar minute-ma ponchaadi daeesh!',
        english: 'Hop in sir! Slight traffic on Ashram Road, but I will get you there in fifteen minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight ahead and take a left turn near the circle.',
        targetText: 'બરાબર ભાઈ, સીધા ચાલો અને સર્કલ પાસેથી ડાબી બાજુ વળી જજો.',
        phonetics: 'Baraabar bhai, seedha chaalo ane circle paasethi daabi baaju vali jajo.',
        english: 'Alright brother, go straight and turn left near the circle.',
        options: [
          { text: 'બરાબર ભાઈ, સીધા ચાલો અને સર્કલ પાસેથી ડાબી બાજુ વળી જજો.', phonetics: 'Baraabar bhai, seedha chaalo ane circle paasethi daabi baaju vali jajo.', correct: true },
          { text: 'ગાડી રોકો હું ઊતરી જાઉં છું.', phonetics: 'Gaadi roko hoo ootari jaau chhu.', correct: false },
          { text: 'ખૂબ ઝડપથી ચલાવો.', phonetics: 'Khoob jhadapthi chaalaavo.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'લૉ ગાર્ડન આવી ગયું સાહેબ! ચણિયા-ચોળી અને બાંધણીની મનભરીને ખરીદી કરો!',
        phonetics: 'Law Garden aavi gayu saaheb! Chaniya-choli ane bandhani-ni manbharine khareedi karo!',
        english: 'Law Garden is here sir! Shop for Chaniya-Choli and Bandhani to your heart\'s content!'
      }
    ]
  },
  {
    id: 'conv-gujarati-garba',
    title: 'Navratri Sheri Garba & Raas',
    subtitle: 'Whirl in 3-Taali Garba and Dodhiya dance till midnight under dazzling lights',
    icon: '✨',
    partnerName: 'Jigar Dost',
    partnerAvatar: '🕺🏽',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'અરે દોસ્ત! ઢોલના ધબકારા સંભળાય છે! શેરી ગરબા શરૂ થઈ ગયા, ચાલ રમવા જઈએ!',
        phonetics: 'Are dost! Dhol-na dhabkaara sambhalaay chhe! Sheri garba sharu thai gaya, chaal ramva jaaie!',
        english: 'Hey friend! Hear the pounding dhol beats! Street Garba has started, let\'s go dance!'
      },
      {
        speaker: 'user',
        prompt: 'Say definitely friend, let us put on Kediyu and play 3-Taali Garba.',
        targetText: 'ચોક્કસ ભાઈબંધ! કેડિયું પહેરીને ત્રણ તાળી ગરબા અને દોઢિયામાં રમઝટ બોલાવીશું!',
        phonetics: 'Chokkas bhaibandh! Kediyu peherine tran taali garba ane dodhiya-ma ramzat bolaavishu!',
        english: 'Definitely buddy! Wearing Kediyu, we will rock 3-Taali Garba and Dodhiya steps!',
        options: [
          { text: 'ચોક્કસ ભાઈબંધ! કેડિયું પહેરીને ત્રણ તાળી ગરબા અને દોઢિયામાં રમઝટ બોલાવીશું!', phonetics: 'Chokkas bhaibandh! Kediyu peherine tran taali garba ane dodhiya-ma ramzat bolaavishu!', correct: true },
          { text: 'મને ગરબા નથી ગમતા.', phonetics: 'Mane garba nathi gamta.', correct: false },
          { text: 'હું ઘરે સૂઈ જાઉં છું.', phonetics: 'Hoo ghare sooi jaau chhu.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'દાંડિયા લાવ્યો છે ને? રાતના બે વાગ્યા સુધી ગરબે ઘૂમવાનું છે આજે!',
        phonetics: 'Dandiya laavyo chhe ne? Raatna be vaagya sudhi garbe ghoomvaanu chhe aaje!',
        english: 'You brought dandiya sticks right? Today we are whirling in garba till 2 AM!'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, dandiya is ready, and later we will eat hot midnight snack at Manek Chowk.',
        targetText: 'હા દોસ્ત, પછી માણેક ચોકમાં મસ્ત પાવભાજી અને કચ્છી દાબેલી ખાવા જઈશું!',
        phonetics: 'Haa dost, pachhi Manek Chowk-ma mast pav bhaji ane Kutchi dabeli khaava jaaishu!',
        english: 'Yes friend, afterwards we will head to Manek Chowk for pav bhaji and Kutchi dabeli!',
        options: [
          { text: 'હા દોસ્ત, પછી માણેક ચોકમાં મસ્ત પાવભાજી અને કચ્છી દાબેલી ખાવા જઈશું!', phonetics: 'Haa dost, pachhi Manek Chowk-ma mast pav bhaji ane Kutchi dabeli khaava jaaishu!', correct: true },
          { text: 'મને ભૂખ નથી.', phonetics: 'Mane bhookh nathi.', correct: false },
          { text: 'હું ક્યાંય નથી આવતો.', phonetics: 'Hoo kyaany nathi aavto.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'વાહ ભાઈ વાહ! આનું નામ જ ગરવી ગુજરાત! મા અંબેના આશીર્વાદ સાથે ગરબો ઘૂમો!',
        phonetics: 'Vaah bhai vaah! Aanu naam ja Garvi Gujarat! Maa Ambe-na aashirvaad saathe garbo ghoomo!',
        english: 'Bravo brother! This is the true spirit of Garvi Gujarat! Whirl in garba with Ma Ambe\'s blessings!'
      }
    ]
  }
];
