// ಕನ್ನಡ ↔ कोंकणी (Devanagari) learning content (for Konkani speakers learning Kannada)
// Each letter: target (Kannada), equiv (closest Devanagari letter), pron (pronunciation in Devanagari), latin, note (optional Konkani note)
// Each phrase: id, target, pron, meaning, en; categories: id, label, icon, phrases
// NOTE: Kannada distinguishes short ಎ/ಒ and long ಏ/ಓ; Devanagari has single ए/ओ.

window.DATA = {
  vowels: [
    { id: "v-a",  target: "ಅ", equiv: "अ", pron: "अ", latin: "a" },
    { id: "v-aa", target: "ಆ", equiv: "आ", pron: "आ", latin: "ā" },
    { id: "v-i",  target: "ಇ", equiv: "इ", pron: "इ", latin: "i" },
    { id: "v-ii", target: "ಈ", equiv: "ई", pron: "ई", latin: "ī" },
    { id: "v-u",  target: "ಉ", equiv: "उ", pron: "उ", latin: "u" },
    { id: "v-uu", target: "ಊ", equiv: "ऊ", pron: "ऊ", latin: "ū" },
    { id: "v-ru", target: "ಋ", equiv: "ऋ", pron: "ऋ", latin: "ṛ" },
    { id: "v-e",  target: "ಎ", equiv: "ए", pron: "ए (र्‍हस्व)", latin: "e",
      note: "देवनागरींत एकूच ए; कन्नडांत ಎ मट्वें, ಏ लांब." },
    { id: "v-ee", target: "ಏ", equiv: "ए", pron: "ए (दीर्घ)", latin: "ē" },
    { id: "v-ai", target: "ಐ", equiv: "ऐ", pron: "ऐ", latin: "ai" },
    { id: "v-o",  target: "ಒ", equiv: "ओ", pron: "ओ (र्‍हस्व)", latin: "o",
      note: "देवनागरींत एकूच ओ; कन्नडांत ಒ मट्वें, ಓ लांब." },
    { id: "v-oo", target: "ಓ", equiv: "ओ", pron: "ओ (दीर्घ)", latin: "ō" },
    { id: "v-au", target: "ಔ", equiv: "औ", pron: "औ", latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "ಅಂ", equiv: "अं", pron: "अं", latin: "aṁ" },
    { id: "y-ah", target: "ಅಃ", equiv: "अः", pron: "अः", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",  target: "ಕ", equiv: "क", pron: "क", latin: "ka" },
    { id: "c-kha", target: "ಖ", equiv: "ख", pron: "ख", latin: "kha" },
    { id: "c-ga",  target: "ಗ", equiv: "ग", pron: "ग", latin: "ga" },
    { id: "c-gha", target: "ಘ", equiv: "घ", pron: "घ", latin: "gha" },
    { id: "c-nga", target: "ಙ", equiv: "ङ", pron: "ङ", latin: "ṅa" },
    { id: "c-cha", target: "ಚ", equiv: "च", pron: "च", latin: "ca" },
    { id: "c-chha",target: "ಛ", equiv: "छ", pron: "छ", latin: "cha" },
    { id: "c-ja",  target: "ಜ", equiv: "ज", pron: "ज", latin: "ja" },
    { id: "c-jha", target: "ಝ", equiv: "झ", pron: "झ", latin: "jha" },
    { id: "c-nya", target: "ಞ", equiv: "ञ", pron: "ञ", latin: "ña" },
    { id: "c-tta", target: "ಟ", equiv: "ट", pron: "ट", latin: "ṭa" },
    { id: "c-ttha",target: "ಠ", equiv: "ठ", pron: "ठ", latin: "ṭha" },
    { id: "c-dda", target: "ಡ", equiv: "ड", pron: "ड", latin: "ḍa" },
    { id: "c-ddha",target: "ಢ", equiv: "ढ", pron: "ढ", latin: "ḍha" },
    { id: "c-nna", target: "ಣ", equiv: "ण", pron: "ण", latin: "ṇa" },
    { id: "c-ta",  target: "ತ", equiv: "त", pron: "त", latin: "ta" },
    { id: "c-tha", target: "ಥ", equiv: "थ", pron: "थ", latin: "tha" },
    { id: "c-da",  target: "ದ", equiv: "द", pron: "द", latin: "da" },
    { id: "c-dha", target: "ಧ", equiv: "ध", pron: "ध", latin: "dha" },
    { id: "c-na",  target: "ನ", equiv: "न", pron: "न", latin: "na" },
    { id: "c-pa",  target: "ಪ", equiv: "प", pron: "प", latin: "pa" },
    { id: "c-pha", target: "ಫ", equiv: "फ", pron: "फ", latin: "pha" },
    { id: "c-ba",  target: "ಬ", equiv: "ब", pron: "ब", latin: "ba" },
    { id: "c-bha", target: "ಭ", equiv: "भ", pron: "भ", latin: "bha" },
    { id: "c-ma",  target: "ಮ", equiv: "म", pron: "म", latin: "ma" },
    { id: "c-ya",  target: "ಯ", equiv: "य", pron: "य", latin: "ya" },
    { id: "c-ra",  target: "ರ", equiv: "र", pron: "र", latin: "ra" },
    { id: "c-la",  target: "ಲ", equiv: "ल", pron: "ल", latin: "la" },
    { id: "c-va",  target: "ವ", equiv: "व", pron: "व", latin: "va" },
    { id: "c-sha", target: "ಶ", equiv: "श", pron: "श", latin: "śa" },
    { id: "c-ssa", target: "ಷ", equiv: "ष", pron: "ष", latin: "ṣa" },
    { id: "c-sa",  target: "ಸ", equiv: "स", pron: "स", latin: "sa" },
    { id: "c-ha",  target: "ಹ", equiv: "ह", pron: "ह", latin: "ha" },
    { id: "c-lla", target: "ಳ", equiv: "ळ", pron: "ळ", latin: "ḷa" }
  ],

  categories: [
    {
      id: "greetings", label: "येवकार", icon: "👋",
      phrases: [
        { id: "g1", target: "ನಮಸ್ಕಾರ", pron: "नमस्कार", meaning: "नमस्कार", en: "Hello" },
        { id: "g2", target: "ಹೇಗಿದ್ದೀರಾ?", pron: "हेगिद्दीरा?", meaning: "कशें आसा?", en: "How are you?" },
        { id: "g3", target: "ಚೆನ್ನಾಗಿದ್ದೀನಿ", pron: "चेन्नागिद्दीनि", meaning: "हांव बरो आसां", en: "I am fine" },
        { id: "g4", target: "ನಿಮ್ಮ ಹೆಸರೇನು?", pron: "निम्म हेसरेनु?", meaning: "तुजें नांव कितें?", en: "What is your name?" },
        { id: "g5", target: "ನನ್ನ ಹೆಸರು...", pron: "नन्न हेसरु...", meaning: "म्हजें नांव...", en: "My name is..." },
        { id: "g6", target: "ಧನ್ಯವಾದ", pron: "धन्यवाद", meaning: "देव बरें करूं", en: "Thank you" },
        { id: "g7", target: "ಕ್ಷಮಿಸಿ", pron: "क्षमिसि", meaning: "माफ करात", en: "Sorry / Excuse me" },
        { id: "g8", target: "ಮತ್ತೆ ಸಿಗೋಣ", pron: "मत्ते सिगोण", meaning: "परतून मेळया", en: "See you again" },
        { id: "g9", target: "ಸ್ವಾಗತ", pron: "स्वागत", meaning: "येवकार", en: "Welcome" },
        { id: "g10", target: "ಶುಭ ದಿನ", pron: "शुभ दिन", meaning: "बरो दीस", en: "Good day" }
      ]
    },
    {
      id: "essentials", label: "गरजेचीं उतरां", icon: "💬",
      phrases: [
        { id: "e1", target: "ಹೌದು", pron: "हौदु", meaning: "व्हय", en: "Yes" },
        { id: "e2", target: "ಇಲ್ಲ", pron: "इल्ल", meaning: "ना", en: "No" },
        { id: "e3", target: "ಸರಿ", pron: "सरि", meaning: "बरें", en: "Okay" },
        { id: "e4", target: "ಗೊತ್ತಿಲ್ಲ", pron: "गोत्तिल्ल", meaning: "म्हाका खबर ना", en: "I don't know" },
        { id: "e5", target: "ಕನ್ನಡ ಬರಲ್ಲ", pron: "कन्नड बरल्ल", meaning: "म्हाका कन्नड येना", en: "I don't know Kannada" },
        { id: "e6", target: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ", pron: "स्वल्प स्वल्प बरुत्ते", meaning: "थोडें थोडें येता", en: "I know a little" },
        { id: "e7", target: "ನಿಧಾನವಾಗಿ ಹೇಳಿ", pron: "निधानवागि हेळि", meaning: "सवकास उलयात", en: "Please speak slowly" },
        { id: "e8", target: "ಅರ್ಥ ಆಗಲಿಲ್ಲ", pron: "अर्थ आगलिल्ल", meaning: "म्हाका समजलें ना", en: "I didn't understand" },
        { id: "e9", target: "ಪರವಾಗಿಲ್ಲ", pron: "परवागिल्ल", meaning: "हरकत ना", en: "No problem" },
        { id: "e10", target: "ಸ್ವಲ್ಪ", pron: "स्वल्प", meaning: "थोडें", en: "A little" }
      ]
    },
    {
      id: "numbers", label: "अंक", icon: "🔢",
      phrases: [
        { id: "n1", target: "ಒಂದು", pron: "ओन्दु", meaning: "एक (१)", en: "One" },
        { id: "n2", target: "ಎರಡು", pron: "एरडु", meaning: "दोन (२)", en: "Two" },
        { id: "n3", target: "ಮೂರು", pron: "मूरु", meaning: "तीन (३)", en: "Three" },
        { id: "n4", target: "ನಾಲ್ಕು", pron: "नाल्कु", meaning: "चार (४)", en: "Four" },
        { id: "n5", target: "ಐದು", pron: "ऐदु", meaning: "पांच (५)", en: "Five" },
        { id: "n6", target: "ಆರು", pron: "आरु", meaning: "सव (६)", en: "Six" },
        { id: "n7", target: "ಏಳು", pron: "एळु", meaning: "सात (७)", en: "Seven" },
        { id: "n8", target: "ಎಂಟು", pron: "एंटु", meaning: "आठ (८)", en: "Eight" },
        { id: "n9", target: "ಒಂಬತ್ತು", pron: "ओंबत्तु", meaning: "नोव (९)", en: "Nine" },
        { id: "n10", target: "ಹತ್ತು", pron: "हत्तु", meaning: "धा (१०)", en: "Ten" },
        { id: "n11", target: "ಇಪ್ಪತ್ತು", pron: "इप्पत्तु", meaning: "वीस (२०)", en: "Twenty" },
        { id: "n12", target: "ನೂರು", pron: "नूरु", meaning: "शंभर (१००)", en: "Hundred" }
      ]
    },
    {
      id: "market", label: "बाजार आनी घासाघीस", icon: "🛒",
      phrases: [
        { id: "m1", target: "ಇದು ಎಷ್ಟು?", pron: "इदु एष्टु?", meaning: "हें कितलें?", en: "How much is this?" },
        { id: "m2", target: "ತುಂಬಾ ಜಾಸ್ತಿ", pron: "तुंबा जास्ति", meaning: "खूब चड", en: "Too much" },
        { id: "m3", target: "ಕಡಿಮೆ ಮಾಡಿ", pron: "कडिमे माडि", meaning: "उणें करात", en: "Please reduce" },
        { id: "m4", target: "ಬೇಕು", pron: "बेकु", meaning: "म्हाका जाय", en: "I want" },
        { id: "m5", target: "ಬೇಡ", pron: "बेड", meaning: "म्हाका नाका", en: "I don't want" },
        { id: "m6", target: "ಚಿಲ್ಲರೆ ಇದೆಯಾ?", pron: "चिल्लरे इदेया?", meaning: "सुटे आसात?", en: "Do you have change?" },
        { id: "m7", target: "ತರಕಾರಿ", pron: "तरकारि", meaning: "भाजी", en: "Vegetables" },
        { id: "m8", target: "ಹಣ್ಣು", pron: "हण्णु", meaning: "फळ", en: "Fruit" },
        { id: "m9", target: "ಒಂದು ಕೆಜಿ ಕೊಡಿ", pron: "ओन्दु केजि कोडि", meaning: "एक किलो दियात", en: "Give one kg" },
        { id: "m10", target: "ಎಲ್ಲಾ ಸೇರಿ ಎಷ್ಟು?", pron: "एल्ला सेरि एष्टु?", meaning: "सगळें मेळून कितलें?", en: "How much altogether?" }
      ]
    },
    {
      id: "travel", label: "प्रवास", icon: "🛺",
      phrases: [
        { id: "t1", target: "ಎಲ್ಲಿ?", pron: "एल्लि?", meaning: "खंय?", en: "Where?" },
        { id: "t2", target: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", pron: "इल्लि निल्लिसि", meaning: "हांगा रावात", en: "Stop here" },
        { id: "t3", target: "ನೇರವಾಗಿ ಹೋಗಿ", pron: "नेरवागि होगि", meaning: "नीट वचात", en: "Go straight" },
        { id: "t4", target: "ಬಲಕ್ಕೆ", pron: "बलक्के", meaning: "उजव्या वटेन", en: "To the right" },
        { id: "t5", target: "ಎಡಕ್ಕೆ", pron: "एडक्के", meaning: "दाव्या वटेन", en: "To the left" },
        { id: "t6", target: "ಮೀಟರ್ ಹಾಕಿ", pron: "मीटर हाकि", meaning: "मीटर घालात", en: "Put the meter on" },
        { id: "t7", target: "ಎಷ್ಟು ದೂರ?", pron: "एष्टु दूर?", meaning: "कितलें पयस?", en: "How far?" },
        { id: "t8", target: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?", pron: "बस् निल्दाण एल्लि?", meaning: "बस स्टँड खंय आसा?", en: "Where is the bus stand?" },
        { id: "t9", target: "ನಿಧಾನವಾಗಿ ಹೋಗಿ", pron: "निधानवागि होगि", meaning: "सवकास वचात", en: "Go slowly" }
      ]
    },
    {
      id: "food", label: "जेवण", icon: "🍛",
      phrases: [
        { id: "f1", target: "ಊಟ", pron: "ऊट", meaning: "जेवण", en: "Meal" },
        { id: "f2", target: "ತಿಂಡಿ", pron: "तिंडि", meaning: "फराळ", en: "Breakfast / snack" },
        { id: "f3", target: "ನೀರು", pron: "नीरु", meaning: "उदक", en: "Water" },
        { id: "f4", target: "ಕಾಫಿ ಕೊಡಿ", pron: "काफि कोडि", meaning: "कॉफी दियात", en: "Give me coffee" },
        { id: "f5", target: "ಟೀ ಕೊಡಿ", pron: "टी कोडि", meaning: "चा दियात", en: "Give me tea" },
        { id: "f6", target: "ಖಾರ ಕಡಿಮೆ", pron: "खार कडिमे", meaning: "तिखट उणें", en: "Less spicy" },
        { id: "f7", target: "ರುಚಿಯಾಗಿದೆ", pron: "रुचियागिदे", meaning: "रुचिक आसा", en: "It's tasty" },
        { id: "f8", target: "ಬಿಲ್ ಕೊಡಿ", pron: "बिल् कोडि", meaning: "बिल दियात", en: "Give the bill" },
        { id: "f9", target: "ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೊಡಿ", pron: "इन्नू स्वल्प कोडि", meaning: "अजून थोडें दियात", en: "Give a bit more" },
        { id: "f10", target: "ಸಾಕು", pron: "साकु", meaning: "पुरो", en: "Enough" }
      ]
    },
    {
      id: "emergency", label: "आणीबाणी", icon: "🆘",
      phrases: [
        { id: "x1", target: "ಸಹಾಯ ಮಾಡಿ!", pron: "सहाय माडि!", meaning: "मदत करात!", en: "Help!" },
        { id: "x2", target: "ಡಾಕ್ಟರ್ ಬೇಕು", pron: "डाक्टर बेकु", meaning: "म्हाका डॉक्टर जाय", en: "I need a doctor" },
        { id: "x3", target: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿ?", pron: "आस्पत्रे एल्लि?", meaning: "हॉस्पिटल खंय आसा?", en: "Where is the hospital?" },
        { id: "x4", target: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ", pron: "पोलीस् करेयिरि", meaning: "पोलिसांक आपयात", en: "Call the police" },
        { id: "x5", target: "ನನಗೆ ಹುಷಾರಿಲ್ಲ", pron: "ननगे हुषारिल्ल", meaning: "म्हाका बरें ना", en: "I am not well" },
        { id: "x6", target: "ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿ?", pron: "औषधि अंगडि एल्लि?", meaning: "वखदांचें दुकान खंय?", en: "Where is the pharmacy?" },
        { id: "x7", target: "ದಾರಿ ತಪ್ಪಿದೆ", pron: "दारि तप्पिदे", meaning: "हांव वाट चुकलों", en: "I am lost" },
        { id: "x8", target: "ಫೋನ್ ಮಾಡಬಹುದಾ?", pron: "फोन् माडबहुदा?", meaning: "एक फोन करूं?", en: "May I make a call?" }
      ]
    }
  ]
};
