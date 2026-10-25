export const KANNADA_FALOU_CONVERSATIONS = [
  {
    id: 'conv-kannada-tiffin',
    title: 'Bengaluru Benne Dosa & Filter Coffee',
    subtitle: 'Order golden butter dosa & frothy filter coffee in Gandhi Bazaar',
    icon: '☕',
    partnerName: 'Manjunath Anna (Tiffin Master)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'ನಮಸ್ಕಾರ ಸರ್! ಇವತ್ತು ಏನು ತಿಂತೀರಾ? ಗರಿಗರಿಯಾದ ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆನಾ, ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿನಾ?',
        phonetics: 'Namaskara sir! Ivathu enu thintira? Garigariyaada benne masale dosena, bisi filter coffina?',
        english: 'Greetings sir! What will you have today? Crispy butter masala dosa or hot filter coffee?'
      },
      {
        speaker: 'user',
        prompt: 'Order one crispy butter masala dosa and one strong filter coffee.',
        targetText: 'ನಮಸ್ಕಾರ ಅಣ್ಣ! ಒಂದು ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ ಮತ್ತು ಒಂದು ಫಿಲ್ಟರ್ ಕಾಫಿ ಕೊಡಿ.',
        phonetics: 'Namaskara anna! Ondu benne masale dose matthu ondu filter coffee kodi.',
        english: 'Hello brother! Please give one butter masala dosa and one filter coffee.',
        options: [
          { text: 'ನಮಸ್ಕಾರ ಅಣ್ಣ! ಒಂದು ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ ಮತ್ತು ಒಂದು ಫಿಲ್ಟರ್ ಕಾಫಿ ಕೊಡಿ.', phonetics: 'Namaskara anna! Ondu benne masale dose matthu ondu filter coffee kodi.', correct: true },
          { text: 'ನನಗೆ ದೋಸೆ ಬೇಡ.', phonetics: 'Nanage dose beda.', correct: false },
          { text: 'ಹೋಟೆಲ್ ಮುಚ್ಚಿದೆಯಾ?', phonetics: 'Hotel mucchideyaa?', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ಬೆಣ್ಣೆ ಘಮಘಮಿಸುವ ದೋಸೆ, ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿ, ಆಲೂಗಡ್ಡೆ ಪಲ್ಯ ರೆಡಿ! ಕಾಫಿಯಲ್ಲಿ ಸಕ್ಕರೆ ಕಡಿಮೆ ಹಾಕಲಾ?',
        phonetics: 'Benne ghamaghamisuva dose, thenginakaayi chutney, aaloogadde palya ready! Coffeeyalli sakkare kadime haakalaa?',
        english: 'Aromatic butter dosa, coconut chutney and potato palya ready! Shall I put less sugar in coffee?'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, put less sugar, and ask for the total bill amount.',
        targetText: 'ಹೌದು ಅಣ್ಣ, ಸಕ್ಕರೆ ಕಡಿಮೆ ಹಾಕಿ. ಒಟ್ಟು ಎಷ್ಟು ಹಣವಾಯಿತು?',
        phonetics: 'Haudu anna, sakkare kadime haaki. Ottu eshtu hanavaayithu?',
        english: 'Yes brother, put less sugar. How much is the total amount?',
        options: [
          { text: 'ಹೌದು ಅಣ್ಣ, ಸಕ್ಕರೆ ಕಡಿಮೆ ಹಾಕಿ. ಒಟ್ಟು ಎಷ್ಟು ಹಣವಾಯಿತು?', phonetics: 'Haudu anna, sakkare kadime haaki. Ottu eshtu hanavaayithu?', correct: true },
          { text: 'ನನಗೆ ಹಸಿವಿಲ್ಲ.', phonetics: 'Nanage hasivilla.', correct: false },
          { text: 'ದುಡ್ಡು ಕೊಡಲ್ಲ.', phonetics: 'Duddu kodalla.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ಒಟ್ಟು ಎಪ್ಪತ್ತು ರೂಪಾಯಿ ಸರ್! PhonePe ಅಥವಾ ನಗದು, ಎರಡೂ ನಡೆಯುತ್ತೆ! ಆರಾಮವಾಗಿ ತಿನ್ನಿ!',
        phonetics: 'Ottu eppatthu roopaayi sir! PhonePe athava nagadu, eradoo nadeyutthe! Aaraamavaagi thinni!',
        english: 'Total seventy rupees sir! PhonePe or cash, both work! Enjoy your meal!'
      }
    ]
  },
  {
    id: 'conv-kannada-auto',
    title: 'Bengaluru Auto Ride to MG Road',
    subtitle: 'Negotiate meter fare and weave through Bengaluru traffic',
    icon: '🛺',
    partnerName: 'Auto Shankar Anna',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'ಹಲೋ ಬಾಸ್! ಎಲ್ಲಿಗೆ ಹೋಗ್ಬೇಕು? ಎಂ.ಜಿ ರೋಡಾ, ಇಂದಿರಾನಗರಾನಾ?',
        phonetics: 'Hello boss! Ellige hogbeku? MG Roada, Indiranagaraanaa?',
        english: 'Hello boss! Where do you need to go? MG Road or Indiranagar?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will go to MG Road and tell him to put the meter on.',
        targetText: 'ಅಣ್ಣ, ಎಂ.ಜಿ ರೋಡ್ ಹೋಗ್ತೀರಾ? ಮೀಟರ್ ಹಾಕಿ ಬನ್ನಿ.',
        phonetics: 'Anna, MG Road hogtheera? Meter haaki banni.',
        english: 'Brother, will you go to MG Road? Please put the meter on.',
        options: [
          { text: 'ಅಣ್ಣ, ಎಂ.ಜಿ ರೋಡ್ ಹೋಗ್ತೀರಾ? ಮೀಟರ್ ಹಾಕಿ ಬನ್ನಿ.', phonetics: 'Anna, MG Road hogtheera? Meter haaki banni.', correct: true },
          { text: 'ನನಗೆ ಆಟೋ ಬೇಡ.', phonetics: 'Nanage auto beda.', correct: false },
          { text: 'ಮಳೆ ಬರ್ತಿದೆ ನಾನು ಬರಲ್ಲ.', phonetics: 'Male bartide naanu baralla.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ಹತ್ತಿ ಸರ್! ಸಿಲ್ಕ್ ಬೋರ್ಡ್ ಹತ್ರ ಸ್ವಲ್ಪ ಟ್ರಾಫಿಕ್ ಇದೆ, ಆದ್ರೆ ಇಪ್ಪತ್ತು ನಿಮಿಷದಲ್ಲಿ ತಲುಪಿಸ್ತೀನಿ!',
        phonetics: 'Hatthi sir! Silk Board hathra swalpa traffic ide, aadre ippatthu nimishadalli thalupistheeni!',
        english: 'Hop in sir! Slight traffic near Silk Board, but I will get you there in twenty minutes!'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to go straight and take a right turn at the signal.',
        targetText: 'ಸರಿ ಅಣ್ಣ, ಮುಂದಕ್ಕೆ ನೇರವಾಗಿ ಹೋಗಿ ಸಿಗ್ನಲ್ ಹತ್ರ ಬಲಗಡೆ ತಿರುಗಿಸಿ.',
        phonetics: 'Sari anna, mundhakke neravaagi hogi signal hathra balagade thirugisi.',
        english: 'Alright brother, go straight ahead and take a right at the signal.',
        options: [
          { text: 'ಸರಿ ಅಣ್ಣ, ಮುಂದಕ್ಕೆ ನೇರವಾಗಿ ಹೋಗಿ ಸಿಗ್ನಲ್ ಹತ್ರ ಬಲಗಡೆ ತಿರುಗಿಸಿ.', phonetics: 'Sari anna, mundhakke neravaagi hogi signal hathra balagade thirugisi.', correct: true },
          { text: 'ವಾಹನ ನಿಲ್ಲಿಸಿ ನಾನು ಇಳಿತೀನಿ.', phonetics: 'Vaahana nillisi naanu ilitheeni.', correct: false },
          { text: 'ತುಂಬಾ ವೇಗವಾಗಿ ಓಡಿಸಿ.', phonetics: 'Thumba vegavaagi odisi.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ಎಂ.ಜಿ ರೋಡ್ ಬಂತು ಸರ್! ಆರಾಮವಾಗಿ ಇಳಿರಿ, ನಿಮ್ಮ ಬ್ಯಾಗ್ ಮರೀಬೇಡಿ!',
        phonetics: 'MG Road banthu sir! Aaraamavaagi iliri, nimma bag mareebedi!',
        english: 'MG Road has arrived sir! Step down comfortably, do not forget your bag!'
      }
    ]
  },
  {
    id: 'conv-kannada-market',
    title: 'Malleshwaram Flower Market Walk',
    subtitle: 'Buy fresh fragrant jasmine strings (Malle Hoovu) in heritage Malleshwaram',
    icon: '🌸',
    partnerName: 'Kavya Akka',
    partnerAvatar: '👩🏽',
    xpReward: 40,
    turns: [
      {
        speaker: 'partner',
        text: 'ಬನ್ನಿ! ಮಲ್ಲೇಶ್ವರಂ ಮಲ್ಲಿಗೆ ಹೂವಿನ ಪರಿಮಳ ಹೇಗಿದೆ ನೋಡಿ! ಎರಡು ಮೊಳ ತಗೋತೀರಾ?',
        phonetics: 'Banni! Malleshwaram mallige hoovina parimala hegide nodi! Eradu mola thagotheeraa?',
        english: 'Welcome! Look at the fragrance of Malleshwaram jasmine flowers! Will you take two lengths?'
      },
      {
        speaker: 'user',
        prompt: 'Ask how much two lengths of fresh jasmine flowers cost.',
        targetText: 'ಅಕ್ಕ, ಎರಡು ಮೊಳ ತಾಜಾ ಮಲ್ಲಿಗೆ ಹೂವಿಗೆ ಎಷ್ಟು ಬೆಲೆ?',
        phonetics: 'Akka, eradu mola taaja mallige hoovige eshtu bele?',
        english: 'Sister, how much does two lengths of fresh jasmine cost?',
        options: [
          { text: 'ಅಕ್ಕ, ಎರಡು ಮೊಳ ತಾಜಾ ಮಲ್ಲಿಗೆ ಹೂವಿಗೆ ಎಷ್ಟು ಬೆಲೆ?', phonetics: 'Akka, eradu mola taaja mallige hoovige eshtu bele?', correct: true },
          { text: 'ಹೂವು ಹಳಸಿದೆ.', phonetics: 'Hoovu halaside.', correct: false },
          { text: 'ನನಗೆ ಹೂವು ಬೇಡ.', phonetics: 'Nanage hoovu beda.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ಕೇವಲ ನಲವತ್ತು ರೂಪಾಯಿ! ದೇವರ ಪೂಜೆಗೆ ಮತ್ತು ಮುಡಿಯೋಕೆ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ!',
        phonetics: 'Kevala nalavatthu roopaayi! Devara poojege matthu mudiyoke thumba chennaagide!',
        english: 'Just forty rupees! Excellent for temple prayer and wearing in the hair!'
      },
      {
        speaker: 'user',
        prompt: 'Say give two lengths and ask if she accepts UPI payment.',
        targetText: 'ಸರಿ ಅಕ್ಕ, ಎರಡು ಮೊಳ ಕಟ್ಟಿ ಕೊಡಿ. ಆನ್‌ಲೈನ್ ಪೇಮೆಂಟ್ ಇದೆಯಾ?',
        phonetics: 'Sari akka, eradu mola katti kodi. Online payment ideyaa?',
        english: 'Alright sister, tie two lengths. Do you have online payment?',
        options: [
          { text: 'ಸರಿ ಅಕ್ಕ, ಎರಡು ಮೊಳ ಕಟ್ಟಿ ಕೊಡಿ. ಆನ್‌ಲೈನ್ ಪೇಮೆಂಟ್ ಇದೆಯಾ?', phonetics: 'Sari akka, eradu mola katti kodi. Online payment ideyaa?', correct: true },
          { text: 'ನಾನು ಕೊಳ್ಳುವುದಿಲ್ಲ.', phonetics: 'Naanu kolluvudilla.', correct: false },
          { text: 'ದುಬಾರಿ ಬೆಲೆ.', phonetics: 'Dubaari bele.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'ಹೌದು, ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ! ಮಲ್ಲೇಶ್ವರಂಗೆ ಪದೇ ಪದೇ ಬರ್ತಾ ಇರಿ!',
        phonetics: 'Haudu, QR code scan maadi! Malleshwaram-ge pade pade barthaa iri!',
        english: 'Yes, scan the QR code! Keep visiting Malleshwaram often!'
      }
    ]
  }
];
