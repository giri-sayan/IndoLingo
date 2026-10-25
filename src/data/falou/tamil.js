export const TAMIL_FALOU_CONVERSATIONS = [
  {
    id: 'conv-tamil-tiffin',
    title: 'Chennai Filter Kaapi & Tiffin',
    subtitle: 'Order piping hot degree coffee, crunchy vadai & crispy ghee roast',
    icon: '☕',
    partnerName: 'Murugan Anna (Tiffin Master)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'வணக்கம் தம்பி! இன்னைக்கு என்ன சாப்பிட போறீங்க? சூடான பில்டர் காபியா, நெய் ரோஸ்ட்டா?',
        phonetics: 'Vanakkam thambi! Innaikku enna saappida poreenga? Soodaana filter kaapiya, ghee roasta?',
        english: 'Welcome brother! What will you have today? Hot filter coffee or ghee roast dosa?'
      },
      {
        speaker: 'user',
        prompt: 'Order one degree filter coffee and one masala dosa.',
        targetText: 'வணக்கம் அண்ணா! ஒரு டிகிரி காபி மற்றும் மசால் தோசை கொடுங்கள்.',
        phonetics: 'Vanakkam anna! Oru degree kaapi mattrum masal dosai kodungal.',
        english: 'Hello brother! Please give one degree coffee and masala dosa.',
        options: [
          { text: 'வணக்கம் அண்ணா! ஒரு டிகிரி காபி மற்றும் மசால் தோசை கொடுங்கள்.', phonetics: 'Vanakkam anna! Oru degree kaapi mattrum masal dosai kodungal.', correct: true },
          { text: 'எனக்கு தோசை வேண்டாம்.', phonetics: 'Enakku dosai vendaam.', correct: false },
          { text: 'கடை மூடிவிட்டதா?', phonetics: 'Kadai moodivittadha?', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'சூப்பர் தம்பி! மொறுமொறுன்னு மசால் தோசை, தேங்காய் சட்னி, சாம்பார் ரெடி! காபில சர்க்கரை கம்மியா போடட்டுமா?',
        phonetics: 'Super thambi! Morumorunnu masal dosai, thengai chutney, sambar ready! Kaapila sarkarai kammiya podattuma?',
        english: 'Super brother! Crispy masala dosa, coconut chutney, and sambar ready! Should I add less sugar in coffee?'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, less sugar, and ask for the total bill amount.',
        targetText: 'ஆம் அண்ணா, சர்க்கரை கம்மியா போடுங்க. மொத்தம் எவ்வளவு ஆச்சு?',
        phonetics: 'Aam anna, sarkarai kammiya podunga. Moththam evvalavu aachu?',
        english: 'Yes brother, put less sugar. How much is the total?',
        options: [
          { text: 'ஆம் அண்ணா, சர்க்கரை கம்மியா போடுங்க. மொத்தம் எவ்வளவு ஆச்சு?', phonetics: 'Aam anna, sarkarai kammiya podunga. Moththam evvalavu aachu?', correct: true },
          { text: 'எனக்கு பசி இல்லை.', phonetics: 'Enakku pasi illai.', correct: false },
          { text: 'ரசம் வேண்டாம்.', phonetics: 'Rasam vendaam.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'மொத்தம் அறுபது ரூபாய் தம்பி! GPay அல்லது ரொக்கம், எதுனாலும் குடுங்க! அருமையா சாப்பிடுங்க!',
        phonetics: 'Moththam arubadhu roobai thambi! GPay alladhu rokkam, edhunaalum kudunga! Arumaiyaa saappidunga!',
        english: 'Total sixty rupees brother! GPay or cash, both are fine! Enjoy your meal!'
      }
    ]
  },
  {
    id: 'conv-tamil-auto',
    title: 'Chennai Auto Ride to Marina',
    subtitle: 'Negotiate meter fare and cruise through Anna Salai to the beach',
    icon: '🛺',
    partnerName: 'Auto Selvam',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'ஹலோ பாஸ்! எங்க போகணும்? தி.நகரா, மெரினா பீச்சா?',
        phonetics: 'Hello boss! Enga poganum? T.Nagara, Marina beacha?',
        english: 'Hello boss! Where do you want to go? T.Nagar or Marina Beach?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will go to Marina Beach and by meter fare.',
        targetText: 'அண்ணா, மெரினா பீச் போவீங்களா? மீட்டருக்கு மேல பத்து ரூபாய் தரேன்.',
        phonetics: 'Anna, Marina beach poveengala? Meter-kku mela pathu roobai tharen.',
        english: 'Brother, will you go to Marina Beach? I will give ten rupees above meter.',
        options: [
          { text: 'அண்ணா, மெரினா பீச் போவீங்களா? மீட்டருக்கு மேல பத்து ரூபாய் தரேன்.', phonetics: 'Anna, Marina beach poveengala? Meter-kku mela pathu roobai tharen.', correct: true },
          { text: 'எனக்கு ஆட்டோ வேண்டாம்.', phonetics: 'Enakku auto vendaam.', correct: false },
          { text: 'மழை பெய்யுது நான் வரல.', phonetics: 'Mazhai peyyudhu naan varala.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ஏறுங்க தம்பி! அண்ணா சாலையில் டிராபிக் கொஞ்சம் ஜாஸ்தி, ஆனா இருபது நிமிஷத்துல கொண்டு போய்டுறேன்!',
        phonetics: 'Earunga thambi! Anna Saalai-la traffic konjam jaasthi, aana irubadhu nimishathula kondu poiduren!',
        english: 'Hop in brother! Heavy traffic on Anna Salai, but I will get you there in twenty minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight ahead and then turn right.',
        targetText: 'சரிங்க அண்ணா, நேராக சென்று வலது பக்கம் திருப்புங்க.',
        phonetics: 'Saringa anna, neraaga sendru valadhu pakkam thiruppunga.',
        english: 'Alright brother, go straight and turn right.',
        options: [
          { text: 'சரிங்க அண்ணா, நேராக சென்று வலது பக்கம் திருப்புங்க.', phonetics: 'Saringa anna, neraaga sendru valadhu pakkam thiruppunga.', correct: true },
          { text: 'வண்டியை நிறுத்துங்க நான் இறங்குறேன்.', phonetics: 'Vandiyai niruthunga naan iranguren.', correct: false },
          { text: 'வேகமா போகாதீங்க.', phonetics: 'Vegamaa pogaadheenga.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'மெரினா பீச் வந்தாச்சு தம்பி! சூடான சுண்டல் சாப்பிட்டு நல்லா காத்து வாங்குங்க! வர்றேன் பாஸ்!',
        phonetics: 'Marina beach vandhaachu thambi! Soodaana sundal saappittu nalla kaathu vaangunga! Varren boss!',
        english: 'Marina Beach is here brother! Enjoy hot sundal and the ocean breeze! See you boss!'
      }
    ]
  },
  {
    id: 'conv-tamil-cinema',
    title: 'Kollywood FDFS Movie Buzz',
    subtitle: 'Celebrate First Day First Show cinema entry with your machi',
    icon: '🎬',
    partnerName: 'Machi Karthik',
    partnerAvatar: '😎',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'மச்சி! தலைவர் படம் ரிலீஸ் ஆயிடுச்சு! ரோகினி தியேட்டர்ல ஃபர்ஸ்ட் டே ஃபர்ஸ்ட் ஷோ போலாமா?',
        phonetics: 'Machi! Thalaivar padam release aayiduchu! Rohini theater-la First Day First Show polaama?',
        english: 'Machi! Thalaivar movie released! Shall we go for First Day First Show at Rohini theater?'
      },
      {
        speaker: 'user',
        prompt: 'Say definitely yes, Thalaivar entry is pure mass and beast mode.',
        targetText: 'கண்டிப்பா போலாம் மச்சி! தலைவர் என்ட்ரி வெறித்தனம் மாஸ்!',
        phonetics: 'Kandippa polaam machi! Thalaivar entry verithanam mass!',
        english: 'Definitely let us go machi! Thalaivar entry is pure beast-mode mass!',
        options: [
          { text: 'கண்டிப்பா போலாம் மச்சி! தலைவர் என்ட்ரி வெறித்தனம் மாஸ்!', phonetics: 'Kandippa polaam machi! Thalaivar entry verithanam mass!', correct: true },
          { text: 'எனக்கு சினிமா பிடிக்காது.', phonetics: 'Enakku cinema pidikkaadhu.', correct: false },
          { text: 'நான் தூங்க போறேன்.', phonetics: 'Naan thoonga poren.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'பாப்கார்னும் கூல்டிரிங்க்ஸும் வாங்கிட்டேன்டா! தியேட்டரே அதிருது! விசிலடி மச்சி!',
        phonetics: 'Popcorn-um cooldrinks-um vaangittenda! Theatere adhirudhu! Visiladi machi!',
        english: 'I bought popcorn and drinks! The whole theater is vibrating! Blow the whistle machi!'
      },
      {
        speaker: 'user',
        prompt: 'Say awesome machi, the movie is a next-level mass hit.',
        targetText: 'செம மச்சி! படம் வேற லெவல் மாஸ் ஹிட்!',
        phonetics: 'Sema machi! Padam vera level mass hit!',
        english: 'Awesome machi! The movie is another-level mass hit!',
        options: [
          { text: 'செம மச்சி! படம் வேற லெவல் மாஸ் ஹிட்!', phonetics: 'Sema machi! Padam vera level mass hit!', correct: true },
          { text: 'எனக்கு டிக்கெட் கிடைக்கல.', phonetics: 'Enakku ticket kidaikkala.', correct: false },
          { text: 'தியேட்டர்ல அமைதியா இரு.', phonetics: 'Theater-la amaidhiyaa iru.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'தலைவர் கெத்துடா! இன்னைக்கு கொண்டாட்டம் தான், வா போய் பில்டர் காபி குடிக்கலாம்!',
        phonetics: 'Thalaivar gethuda! Innaikku kondaattam dhaan, vaa poi filter kaapi kudikkalam!',
        english: 'Thalaivar swag bro! Today is pure celebration, come let us have filter coffee!'
      }
    ]
  },
  {
    id: 'conv-tamil-virundhu',
    title: 'Madurai Banana Leaf Virundhu',
    subtitle: 'Experience hearty Madurai hospitality on a fresh banana leaf',
    icon: '🍛',
    partnerName: 'Pandian Annan',
    partnerAvatar: '🧑🏽‍🍳',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'வாங்க தம்பி! மதுரைக்கு வந்துட்டு விருந்து சாப்பிடாம போக முடியுமா? வாழை இலை போடுங்க!',
        phonetics: 'Vaanga thambi! Maduraikku vandhuttu virundhu saappidama poga mudiyuma? Vaazhai ilai podunga!',
        english: 'Welcome brother! Can anyone visit Madurai and leave without a feast? Lay the banana leaf!'
      },
      {
        speaker: 'user',
        prompt: 'Thank him warmly and ask for hot rice and pepper rasam.',
        targetText: 'மிக்க நன்றி அண்ணா! நல்ல சூடான சாதமும் ரசமும் போடுங்க.',
        phonetics: 'Mikka nandri anna! Nalla soodaana saadhamum rasamum podunga.',
        english: 'Thank you very much brother! Please serve hot rice and rasam.',
        options: [
          { text: 'மிக்க நன்றி அண்ணா! நல்ல சூடான சாதமும் ரசமும் போடுங்க.', phonetics: 'Mikka nandri anna! Nalla soodaana saadhamum rasamum podunga.', correct: true },
          { text: 'எனக்கு சாப்பாடு வேண்டாம்.', phonetics: 'Enakku saappaadu vendaam.', correct: false },
          { text: 'இலை வேண்டாம் தட்டுல குடுங்க.', phonetics: 'Ilai vendaam thattula kudunga.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'நம்ம ஊரு பருப்பு நெய், சாம்பார், பாயாசம் எல்லாம் வைக்குறேன்! வயிறு நிறைய சாப்பிடுங்க தம்பி!',
        phonetics: 'Namma ooru paruppu ney, sambar, payasam ellaam vaikkuren! Vayiru niraiya saappidunga thambi!',
        english: "I will serve our dal ghee, sambar, and payasam! Eat to your heart and stomach's content brother!"
      },
      {
        speaker: 'user',
        prompt: 'Compliment the wonderful taste and say your stomach is completely satisfied.',
        targetText: 'அருமையான சுவை அண்ணா! வயிறு நிறைந்தது, ரொம்ப மகிழ்ச்சி!',
        phonetics: 'Arumaiyaana suvai anna! Vayiru niraindhadhu, romba magizhchi!',
        english: 'Wonderful taste brother! My stomach is full, very happy!',
        options: [
          { text: 'அருமையான சுவை அண்ணா! வயிறு நிறைந்தது, ரொம்ப மகிழ்ச்சி!', phonetics: 'Arumaiyaana suvai anna! Vayiru niraindhadhu, romba magizhchi!', correct: true },
          { text: 'சாப்பாடு சுவை இல்லை.', phonetics: 'Saappaadu suvai illai.', correct: false },
          { text: 'உடனே பில் குடுங்க.', phonetics: 'Udane bill kudunga.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ரொம்ப சந்தோஷம் தம்பி! கடைசியா ஒரு ஜிகர்தண்டா குடிச்சிட்டு போங்க! மீண்டும் வாங்க!',
        phonetics: 'Romba santhosham thambi! Kadaisiyaa oru Jigarthanda kudichittu ponga! Meendum vaanga!',
        english: 'Very joyful brother! Finish with a chilled Jigarthanda before you leave! Come again!'
      }
    ]
  }
];
