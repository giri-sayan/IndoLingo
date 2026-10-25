export const HINDI_FALOU_CONVERSATIONS = [
  {
    id: 'conv-chai',
    title: 'At the Chai Tapri',
    subtitle: 'Order authentic ginger cutting chai & bun maska',
    icon: '☕',
    partnerName: 'Ramu (Chaiwala)',
    partnerAvatar: '👨🏽‍🍳',
    xpReward: 30,
    turns: [
      {
        speaker: 'partner',
        text: 'नमस्ते भैया! आज क्या लेंगे? कड़क अदरक चाय या मसाला चाय?',
        phonetics: 'Namaste bhaiya! Aaj kya lenge? Kadak adrak chai ya masala chai?',
        english: 'Hello brother! What will you have today? Strong ginger tea or spiced tea?'
      },
      {
        speaker: 'user',
        prompt: 'Order two hot cups of ginger tea with less sugar.',
        targetText: 'नमस्ते! दो कप अदरक वाली चाय, कम चीनी के साथ दीजिए।',
        phonetics: 'Namaste! Do cup adrak wali chai, kam cheeni ke saath deejiye.',
        english: 'Hello! Please give two cups of ginger tea with less sugar.',
        options: [
          { text: 'दो कप अदरक वाली चाय, कम चीनी के साथ दीजिए।', phonetics: 'Do cup adrak wali chai, kam cheeni ke saath deejiye.', correct: true },
          { text: 'मुझे ठंडा पानी चाहिए।', phonetics: 'Mujhe thanda paani chahiye.', correct: false },
          { text: 'चाय मत बनाइए।', phonetics: 'Chai mat banaiye.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'बिल्कुल! साथ में गरमा-गरम बन मस्का भी लगा दूँ क्या?',
        phonetics: 'Bilkul! Saath mein garma-garam bun maska bhi laga doon kya?',
        english: 'Of course! Shall I also prepare hot bun maska along with it?'
      },
      {
        speaker: 'user',
        prompt: 'Say yes, add one bun maska, and ask how much the total is.',
        targetText: 'हाँ, एक बन मस्का भी दे दीजिए। कुल कितने पैसे हुए?',
        phonetics: 'Haan, ek bun maska bhi de deejiye. Kul kitne paise hue?',
        english: 'Yes, please give one bun maska as well. How much is the total?',
        options: [
          { text: 'हाँ, एक बन मस्का भी दे दीजिए। कुल कितने पैसे हुए?', phonetics: 'Haan, ek bun maska bhi de deejiye. Kul kitne paise hue?', correct: true },
          { text: 'मुझे भूख नहीं है।', phonetics: 'Mujhe bhookh nahi hai.', correct: false },
          { text: 'दुकान बंद कर दो।', phonetics: 'Dukaan band kar do.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'सिर्फ चालीस रुपये भैया! Paytm या कैश, दोनों चलेगा!',
        phonetics: 'Sirf chaalees rupaye bhaiya! Paytm ya cash, dono chalega!',
        english: 'Just forty rupees, brother! Paytm or cash, both are fine!'
      }
    ]
  },
  {
    id: 'conv-auto',
    title: 'Auto-Rickshaw Ride',
    subtitle: 'Bargain fare and guide the driver through traffic',
    icon: '🛺',
    partnerName: 'Santosh (Auto Driver)',
    partnerAvatar: '🛺',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'हाँ जी, कहाँ जाना है आपको?',
        phonetics: 'Haan ji, kahan jaana hai aapko?',
        english: 'Yes, where do you want to go?'
      },
      {
        speaker: 'user',
        prompt: 'Ask if he will go to the Railway Station and by meter.',
        targetText: 'भैया, रेलवे स्टेशन चलोगे? मीटर से चलना होगा।',
        phonetics: 'Bhaiya, railway station chaloge? Meter se chalna hoga.',
        english: 'Brother, will you go to the railway station? It will have to be by meter.',
        options: [
          { text: 'भैया, रेलवे स्टेशन चलोगे? मीटर से चलना होगा।', phonetics: 'Bhaiya, railway station chaloge? Meter se chalna hoga.', correct: true },
          { text: 'मुझे घर जाना है।', phonetics: 'Mujhe ghar jaana hai.', correct: false },
          { text: 'ऑटो मत चलाओ।', phonetics: 'Auto mat chalao.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'बैठिए साब! ट्रैफिक बहुत है, पर मैं बीस मिनट में पहुँचा दूँगा।',
        phonetics: 'Baithiye saab! Traffic bahut hai, par main bees minute mein pahuncha doonga.',
        english: 'Hop in sir! There is heavy traffic, but I will get you there in twenty minutes.'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to turn right at the red light.',
        targetText: 'आगे लाल बत्ती से दाएँ मुड़ना भैया।',
        phonetics: 'Aage laal batti se daayein mudna bhaiya.',
        english: 'Turn right from the red light ahead, brother.',
        options: [
          { text: 'आगे लाल बत्ती से दाएँ मुड़ना भैया।', phonetics: 'Aage laal batti se daayein mudna bhaiya.', correct: true },
          { text: 'गाड़ी रोक दो मुझे उतरना है।', phonetics: 'Gaadi rok do mujhe utarna hai.', correct: false },
          { text: 'सीधे चलो मत रुको।', phonetics: 'Seedhe chalo mat ruko.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'स्टेशन आ गया साब! आराम से उतरिए, सामान मत भूलना।',
        phonetics: 'Station aa gaya saab! Aaram se utariye, saamaan mat bhoolna.',
        english: 'We have arrived at the station sir! Step down comfortably, do not forget your luggage.'
      }
    ]
  },
  {
    id: 'conv-dhaba',
    title: 'Highway Dhaba Lunch',
    subtitle: 'Order authentic tandoori rotis, dal makhani and lassi',
    icon: '🍛',
    partnerName: 'Jagjit (Dhaba Host)',
    partnerAvatar: '👳🏽‍♂️',
    xpReward: 35,
    turns: [
      {
        speaker: 'partner',
        text: 'जी आयां नू! बैठो जी चारपाई पे। आज की ताज़ा स्पेशल दाल मखनी है!',
        phonetics: 'Ji aayan nu! Baitho ji charpai pe. Aaj ki taaza special dal makhani hai!',
        english: 'Welcome! Please sit on the cot. Today\'s fresh special is Dal Makhani!'
      },
      {
        speaker: 'user',
        prompt: 'Order one Dal Makhani, two butter tandoori rotis, and one sweet lassi.',
        targetText: 'एक दाल मखनी, दो मक्खन वाली तंदूरी रोटी और एक मीठी लस्सी ले आइए।',
        phonetics: 'Ek dal makhani, do makkhan wali tandoori roti aur ek meethi lassi le aaiye.',
        english: 'Please bring one Dal Makhani, two butter tandoori rotis, and one sweet lassi.',
        options: [
          { text: 'एक दाल मखनी, दो मक्खन वाली तंदूरी रोटी और एक मीठी लस्सी ले आइए।', phonetics: 'Ek dal makhani, do makkhan wali tandoori roti aur ek meethi lassi le aaiye.', correct: true },
          { text: 'मुझे सिर्फ पानी चाहिए।', phonetics: 'Mujhe sirf paani chahiye.', correct: false },
          { text: 'खाना ठंडा दीजिए।', phonetics: 'Khaana thanda deejiye.', correct: false }
        ]
      },
      {
        speaker: 'partner',
        text: 'मिर्च कम रखें या तीखा पसंद है आपको?',
        phonetics: 'Mirch kam rakhein ya teekha pasand hai aapko?',
        english: 'Should we keep the spice mild or do you like it spicy?'
      },
      {
        speaker: 'user',
        prompt: 'Tell him to keep it medium spicy.',
        targetText: 'मध्यम तीखा रखिए, ज़्यादा मिर्च मत डालिए।',
        phonetics: 'Madhyam teekha rakhiye, zyada mirch mat daaliye.',
        english: 'Keep it medium spicy, do not put too much chilli.',
        options: [
          { text: 'मध्यम तीखा रखिए, ज़्यादा मिर्च मत डालिए।', phonetics: 'Madhyam teekha rakhiye, zyada mirch mat daaliye.', correct: true },
          { text: 'बहुत ज़्यादा तीखा बना दो।', phonetics: 'Bahut zyada teekha bana do.', correct: false },
          { text: 'मुझे नमक नहीं चाहिए।', phonetics: 'Mujhe namak nahi chahiye.', correct: false }
        ]
      }
    ]
  }
];
