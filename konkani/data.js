// कोंकणी (Devanagari) ↔ ಕನ್ನಡ learning content (for Kannada speakers learning Konkani)
// Each letter: target (Konkani/Devanagari), equiv (closest Kannada letter), pron (pronunciation in Kannada script), latin, note (optional Kannada note)
// Each phrase: id, target, pron, meaning, en; categories: id, label, icon, phrases
// NOTE: Devanagari has single ए/ओ; Kannada distinguishes short ಎ/ಒ and long ಏ/ಓ.

window.DATA = {
  vowels: [
    { id: "v-a",  target: "अ", equiv: "ಅ", pron: "ಅ", latin: "a" },
    { id: "v-aa", target: "आ", equiv: "ಆ", pron: "ಆ", latin: "ā" },
    { id: "v-i",  target: "इ", equiv: "ಇ", pron: "ಇ", latin: "i" },
    { id: "v-ii", target: "ई", equiv: "ಈ", pron: "ಈ", latin: "ī" },
    { id: "v-u",  target: "उ", equiv: "ಉ", pron: "ಉ", latin: "u" },
    { id: "v-uu", target: "ऊ", equiv: "ಊ", pron: "ಊ", latin: "ū" },
    { id: "v-ru", target: "ऋ", equiv: "ಋ", pron: "ಋ (ರು)", latin: "ṛ" },
    { id: "v-e",  target: "ए", equiv: "ಏ", pron: "ಎ / ಏ", latin: "e",
      note: "ದೇವನಾಗರಿಯಲ್ಲಿ ಒಂದೇ ए — ಕನ್ನಡದ ಹ್ರಸ್ವ ಎ ಮತ್ತು ದೀರ್ಘ ಏ ಎರಡಕ್ಕೂ." },
    { id: "v-ai", target: "ऐ", equiv: "ಐ", pron: "ಐ", latin: "ai" },
    { id: "v-o",  target: "ओ", equiv: "ಓ", pron: "ಒ / ಓ", latin: "o",
      note: "ದೇವನಾಗರಿಯಲ್ಲಿ ಒಂದೇ ओ — ಕನ್ನಡದ ಹ್ರಸ್ವ ಒ ಮತ್ತು ದೀರ್ಘ ಓ ಎರಡಕ್ಕೂ." },
    { id: "v-au", target: "औ", equiv: "ಔ", pron: "ಔ", latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "अं", equiv: "ಅಂ", pron: "ಅಂ", latin: "aṁ" },
    { id: "y-ah", target: "अः", equiv: "ಅಃ", pron: "ಅಃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",  target: "क", equiv: "ಕ", pron: "ಕ", latin: "ka" },
    { id: "c-kha", target: "ख", equiv: "ಖ", pron: "ಖ", latin: "kha" },
    { id: "c-ga",  target: "ग", equiv: "ಗ", pron: "ಗ", latin: "ga" },
    { id: "c-gha", target: "घ", equiv: "ಘ", pron: "ಘ", latin: "gha" },
    { id: "c-nga", target: "ङ", equiv: "ಙ", pron: "ಙ", latin: "ṅa" },
    { id: "c-cha", target: "च", equiv: "ಚ", pron: "ಚ", latin: "ca" },
    { id: "c-chha",target: "छ", equiv: "ಛ", pron: "ಛ", latin: "cha" },
    { id: "c-ja",  target: "ज", equiv: "ಜ", pron: "ಜ", latin: "ja" },
    { id: "c-jha", target: "झ", equiv: "ಝ", pron: "ಝ", latin: "jha" },
    { id: "c-nya", target: "ञ", equiv: "ಞ", pron: "ಞ", latin: "ña" },
    { id: "c-tta", target: "ट", equiv: "ಟ", pron: "ಟ", latin: "ṭa" },
    { id: "c-ttha",target: "ठ", equiv: "ಠ", pron: "ಠ", latin: "ṭha" },
    { id: "c-dda", target: "ड", equiv: "ಡ", pron: "ಡ", latin: "ḍa" },
    { id: "c-ddha",target: "ढ", equiv: "ಢ", pron: "ಢ", latin: "ḍha" },
    { id: "c-nna", target: "ण", equiv: "ಣ", pron: "ಣ", latin: "ṇa" },
    { id: "c-ta",  target: "त", equiv: "ತ", pron: "ತ", latin: "ta" },
    { id: "c-tha", target: "थ", equiv: "ಥ", pron: "ಥ", latin: "tha" },
    { id: "c-da",  target: "द", equiv: "ದ", pron: "ದ", latin: "da" },
    { id: "c-dha", target: "ध", equiv: "ಧ", pron: "ಧ", latin: "dha" },
    { id: "c-na",  target: "न", equiv: "ನ", pron: "ನ", latin: "na" },
    { id: "c-pa",  target: "प", equiv: "ಪ", pron: "ಪ", latin: "pa" },
    { id: "c-pha", target: "फ", equiv: "ಫ", pron: "ಫ", latin: "pha" },
    { id: "c-ba",  target: "ब", equiv: "ಬ", pron: "ಬ", latin: "ba" },
    { id: "c-bha", target: "भ", equiv: "ಭ", pron: "ಭ", latin: "bha" },
    { id: "c-ma",  target: "म", equiv: "ಮ", pron: "ಮ", latin: "ma" },
    { id: "c-ya",  target: "य", equiv: "ಯ", pron: "ಯ", latin: "ya" },
    { id: "c-ra",  target: "र", equiv: "ರ", pron: "ರ", latin: "ra" },
    { id: "c-la",  target: "ल", equiv: "ಲ", pron: "ಲ", latin: "la" },
    { id: "c-va",  target: "व", equiv: "ವ", pron: "ವ", latin: "va" },
    { id: "c-sha", target: "श", equiv: "ಶ", pron: "ಶ", latin: "śa" },
    { id: "c-ssa", target: "ष", equiv: "ಷ", pron: "ಷ", latin: "ṣa" },
    { id: "c-sa",  target: "स", equiv: "ಸ", pron: "ಸ", latin: "sa" },
    { id: "c-ha",  target: "ह", equiv: "ಹ", pron: "ಹ", latin: "ha" },
    { id: "c-lla", target: "ळ", equiv: "ಳ", pron: "ಳ (ಮೂರ್ಧನ್ಯ ಲ)", latin: "ḷa" }
  ],

  categories: [
    {
      id: "greetings", label: "ಶುಭಾಶಯಗಳು", icon: "👋",
      phrases: [
        { id: "g1", target: "नमस्कार", pron: "ನಮಸ್ಕಾರ್", meaning: "ನಮಸ್ಕಾರ", en: "Hello" },
        { id: "g2", target: "कशें आसा?", pron: "ಕಶೇಂ ಆಸಾ?", meaning: "ಹೇಗಿದ್ದೀರಾ?", en: "How are you?" },
        { id: "g3", target: "हांव बरो आसां", pron: "ಹಾಂವ್ ಬರೊ ಆಸಾಂ", meaning: "ಚೆನ್ನಾಗಿದ್ದೇನೆ", en: "I am fine" },
        { id: "g4", target: "तुजें नांव कितें?", pron: "ತುಜೇಂ ನಾಂವ್ ಕಿತೇಂ?", meaning: "ನಿಮ್ಮ ಹೆಸರೇನು?", en: "What is your name?" },
        { id: "g5", target: "म्हजें नांव...", pron: "ಮ್ಹಜೇಂ ನಾಂವ್...", meaning: "ನನ್ನ ಹೆಸರು...", en: "My name is..." },
        { id: "g6", target: "देव बरें करूं", pron: "ದೇವ್ ಬರೇಂ ಕರುಂ", meaning: "ಧನ್ಯವಾದ", en: "Thank you" },
        { id: "g7", target: "माफ करात", pron: "ಮಾಫ್ ಕರಾತ್", meaning: "ಕ್ಷಮಿಸಿ", en: "Sorry / Excuse me" },
        { id: "g8", target: "परतून मेळया", pron: "ಪರತೂನ್ ಮೆಳ್ಯಾ", meaning: "ಮತ್ತೆ ಸಿಗೋಣ", en: "See you again" },
        { id: "g9", target: "येवकार", pron: "ಯೆವ್ಕಾರ್", meaning: "ಸ್ವಾಗತ", en: "Welcome" },
        { id: "g10", target: "बरो दीस", pron: "ಬರೊ ದೀಸ್", meaning: "ಶುಭ ದಿನ", en: "Good day" }
      ]
    },
    {
      id: "essentials", label: "ಅಗತ್ಯ ಮಾತುಗಳು", icon: "💬",
      phrases: [
        { id: "e1", target: "व्हय", pron: "ವ್ಹಯ್", meaning: "ಹೌದು", en: "Yes" },
        { id: "e2", target: "ना", pron: "ನಾ", meaning: "ಇಲ್ಲ", en: "No" },
        { id: "e3", target: "बरें", pron: "ಬರೇಂ", meaning: "ಸರಿ", en: "Okay" },
        { id: "e4", target: "म्हाका खबर ना", pron: "ಮ್ಹಾಕಾ ಖಬರ್ ನಾ", meaning: "ಗೊತ್ತಿಲ್ಲ", en: "I don't know" },
        { id: "e5", target: "म्हाका कोंकणी येना", pron: "ಮ್ಹಾಕಾ ಕೊಂಕಣಿ ಯೇನಾ", meaning: "ನನಗೆ ಕೊಂಕಣಿ ಬರಲ್ಲ", en: "I don't know Konkani" },
        { id: "e6", target: "थोडें थोडें येता", pron: "ತೊಡೇಂ ತೊಡೇಂ ಯೇತಾ", meaning: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ", en: "I know a little" },
        { id: "e7", target: "सवकास उलयात", pron: "ಸವ್ಕಾಸ್ ಉಲಯಾತ್", meaning: "ನಿಧಾನವಾಗಿ ಹೇಳಿ", en: "Please speak slowly" },
        { id: "e8", target: "म्हाका समजलें ना", pron: "ಮ್ಹಾಕಾ ಸಮಜಲೇಂ ನಾ", meaning: "ಅರ್ಥ ಆಗಲಿಲ್ಲ", en: "I didn't understand" },
        { id: "e9", target: "हरकत ना", pron: "ಹರಕತ್ ನಾ", meaning: "ಪರವಾಗಿಲ್ಲ", en: "No problem" },
        { id: "e10", target: "थोडें", pron: "ತೊಡೇಂ", meaning: "ಸ್ವಲ್ಪ", en: "A little" }
      ]
    },
    {
      id: "numbers", label: "ಸಂಖ್ಯೆಗಳು", icon: "🔢",
      phrases: [
        { id: "n1", target: "एक", pron: "ಏಕ್", meaning: "ಒಂದು (೧)", en: "One" },
        { id: "n2", target: "दोन", pron: "ದೋನ್", meaning: "ಎರಡು (೨)", en: "Two" },
        { id: "n3", target: "तीन", pron: "ತೀನ್", meaning: "ಮೂರು (೩)", en: "Three" },
        { id: "n4", target: "चार", pron: "ಚಾರ್", meaning: "ನಾಲ್ಕು (೪)", en: "Four" },
        { id: "n5", target: "पांच", pron: "ಪಾಂಚ್", meaning: "ಐದು (೫)", en: "Five" },
        { id: "n6", target: "सव", pron: "ಸವ್", meaning: "ಆರು (೬)", en: "Six" },
        { id: "n7", target: "सात", pron: "ಸಾತ್", meaning: "ಏಳು (೭)", en: "Seven" },
        { id: "n8", target: "आठ", pron: "ಆಠ್", meaning: "ಎಂಟು (೮)", en: "Eight" },
        { id: "n9", target: "नोव", pron: "ನೋವ್", meaning: "ಒಂಬತ್ತು (೯)", en: "Nine" },
        { id: "n10", target: "धा", pron: "ಧಾ", meaning: "ಹತ್ತು (೧೦)", en: "Ten" },
        { id: "n11", target: "वीस", pron: "ವೀಸ್", meaning: "ಇಪ್ಪತ್ತು (೨೦)", en: "Twenty" },
        { id: "n12", target: "शंभर", pron: "ಶಂಭರ್", meaning: "ನೂರು (೧೦೦)", en: "Hundred" }
      ]
    },
    {
      id: "market", label: "ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಚೌಕಾಸಿ", icon: "🛒",
      phrases: [
        { id: "m1", target: "हें कितलें?", pron: "ಹೇಂ ಕಿತ್ಲೇಂ?", meaning: "ಇದು ಎಷ್ಟು?", en: "How much is this?" },
        { id: "m2", target: "खूब चड", pron: "ಖೂಬ್ ಚಡ್", meaning: "ತುಂಬಾ ಜಾಸ್ತಿ", en: "Too much" },
        { id: "m3", target: "उणें करात", pron: "ಉಣೇಂ ಕರಾತ್", meaning: "ಕಡಿಮೆ ಮಾಡಿ", en: "Please reduce" },
        { id: "m4", target: "म्हाका जाय", pron: "ಮ್ಹಾಕಾ ಜಾಯ್", meaning: "ಬೇಕು", en: "I want" },
        { id: "m5", target: "म्हाका नाका", pron: "ಮ್ಹಾಕಾ ನಾಕಾ", meaning: "ಬೇಡ", en: "I don't want" },
        { id: "m6", target: "सुटे आसात?", pron: "ಸುಟೆ ಆಸಾತ್?", meaning: "ಚಿಲ್ಲರೆ ಇದೆಯಾ?", en: "Do you have change?" },
        { id: "m7", target: "भाजी", pron: "ಭಾಜಿ", meaning: "ತರಕಾರಿ", en: "Vegetables" },
        { id: "m8", target: "फळ", pron: "ಫಳ್", meaning: "ಹಣ್ಣು", en: "Fruit" },
        { id: "m9", target: "एक किलो दियात", pron: "ಏಕ್ ಕಿಲೊ ದಿಯಾತ್", meaning: "ಒಂದು ಕೆಜಿ ಕೊಡಿ", en: "Give one kg" },
        { id: "m10", target: "सगळें मेळून कितलें?", pron: "ಸಗಳೇಂ ಮೆಳೂನ್ ಕಿತ್ಲೇಂ?", meaning: "ಎಲ್ಲಾ ಸೇರಿ ಎಷ್ಟು?", en: "How much altogether?" }
      ]
    },
    {
      id: "travel", label: "ಪ್ರಯಾಣ", icon: "🛺",
      phrases: [
        { id: "t1", target: "खंय?", pron: "ಖಂಯ್?", meaning: "ಎಲ್ಲಿ?", en: "Where?" },
        { id: "t2", target: "हांगा रावात", pron: "ಹಾಂಗಾ ರಾವಾತ್", meaning: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", en: "Stop here" },
        { id: "t3", target: "नीट वचात", pron: "ನೀಟ್ ವಚಾತ್", meaning: "ನೇರವಾಗಿ ಹೋಗಿ", en: "Go straight" },
        { id: "t4", target: "उजव्या वटेन", pron: "ಉಜವ್ಯಾ ವಟೆನ್", meaning: "ಬಲಕ್ಕೆ", en: "To the right" },
        { id: "t5", target: "दाव्या वटेन", pron: "ದಾವ್ಯಾ ವಟೆನ್", meaning: "ಎಡಕ್ಕೆ", en: "To the left" },
        { id: "t6", target: "मीटर घालात", pron: "ಮೀಟರ್ ಘಾಲಾತ್", meaning: "ಮೀಟರ್ ಹಾಕಿ", en: "Put the meter on" },
        { id: "t7", target: "कितलें पयस?", pron: "ಕಿತ್ಲೇಂ ಪಯ್ಸ್?", meaning: "ಎಷ್ಟು ದೂರ?", en: "How far?" },
        { id: "t8", target: "बस स्टँड खंय आसा?", pron: "ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಖಂಯ್ ಆಸಾ?", meaning: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?", en: "Where is the bus stand?" },
        { id: "t9", target: "सवकास वचात", pron: "ಸವ್ಕಾಸ್ ವಚಾತ್", meaning: "ನಿಧಾನವಾಗಿ ಹೋಗಿ", en: "Go slowly" }
      ]
    },
    {
      id: "food", label: "ಆಹಾರ", icon: "🍛",
      phrases: [
        { id: "f1", target: "जेवण", pron: "ಜೆವಣ್", meaning: "ಊಟ", en: "Meal" },
        { id: "f2", target: "फराळ", pron: "ಫರಾಳ್", meaning: "ತಿಂಡಿ", en: "Breakfast / snack" },
        { id: "f3", target: "उदक", pron: "ಉದಕ್", meaning: "ನೀರು", en: "Water" },
        { id: "f4", target: "कॉफी दियात", pron: "ಕಾಫಿ ದಿಯಾತ್", meaning: "ಕಾಫಿ ಕೊಡಿ", en: "Give me coffee" },
        { id: "f5", target: "चा दियात", pron: "ಚಾ ದಿಯಾತ್", meaning: "ಟೀ ಕೊಡಿ", en: "Give me tea" },
        { id: "f6", target: "तिखट उणें", pron: "ತಿಖಟ್ ಉಣೇಂ", meaning: "ಖಾರ ಕಡಿಮೆ", en: "Less spicy" },
        { id: "f7", target: "रुचिक आसा", pron: "ರುಚಿಕ್ ಆಸಾ", meaning: "ರುಚಿಯಾಗಿದೆ", en: "It's tasty" },
        { id: "f8", target: "बिल दियात", pron: "ಬಿಲ್ ದಿಯಾತ್", meaning: "ಬಿಲ್ ಕೊಡಿ", en: "Give the bill" },
        { id: "f9", target: "अजून थोडें दियात", pron: "ಅಜೂನ್ ತೊಡೇಂ ದಿಯಾತ್", meaning: "ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೊಡಿ", en: "Give a bit more" },
        { id: "f10", target: "पुरो", pron: "ಪುರೊ", meaning: "ಸಾಕು", en: "Enough" }
      ]
    },
    {
      id: "emergency", label: "ತುರ್ತು", icon: "🆘",
      phrases: [
        { id: "x1", target: "मदत करात!", pron: "ಮದತ್ ಕರಾತ್!", meaning: "ಸಹಾಯ ಮಾಡಿ!", en: "Help!" },
        { id: "x2", target: "म्हाका डॉक्टर जाय", pron: "ಮ್ಹಾಕಾ ಡಾಕ್ಟರ್ ಜಾಯ್", meaning: "ಡಾಕ್ಟರ್ ಬೇಕು", en: "I need a doctor" },
        { id: "x3", target: "हॉस्पिटल खंय आसा?", pron: "ಹಾಸ್ಪಿಟಲ್ ಖಂಯ್ ಆಸಾ?", meaning: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿ?", en: "Where is the hospital?" },
        { id: "x4", target: "पोलिसांक आपयात", pron: "ಪೊಲಿಸಾಂಕ್ ಆಪಯಾತ್", meaning: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ", en: "Call the police" },
        { id: "x5", target: "म्हाका बरें ना", pron: "ಮ್ಹಾಕಾ ಬರೇಂ ನಾ", meaning: "ನನಗೆ ಹುಷಾರಿಲ್ಲ", en: "I am not well" },
        { id: "x6", target: "वखदांचें दुकान खंय?", pron: "ವಖದಾಂಚೇಂ ದುಕಾನ್ ಖಂಯ್?", meaning: "ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿ?", en: "Where is the pharmacy?" },
        { id: "x7", target: "हांव वाट चुकलों", pron: "ಹಾಂವ್ ವಾಟ್ ಚುಕ್ಲೊಂ", meaning: "ದಾರಿ ತಪ್ಪಿದೆ", en: "I am lost" },
        { id: "x8", target: "एक फोन करूं?", pron: "ಏಕ್ ಫೋನ್ ಕರುಂ?", meaning: "ಫೋನ್ ಮಾಡಬಹುದಾ?", en: "May I make a call?" }
      ]
    }
  ]
};
