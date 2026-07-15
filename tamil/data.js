// ತಮಿಳು ↔ ಕನ್ನಡ learning content (for Kannada speakers learning Tamil)
// target = Tamil, equiv = closest Kannada letter, pron = pronunciation in Kannada script

window.DATA = {
  vowels: [
    { id: "v-a",   target: "அ", equiv: "ಅ", pron: "ಅ",           latin: "a" },
    { id: "v-aa",  target: "ஆ", equiv: "ಆ", pron: "ಆ",           latin: "ā" },
    { id: "v-i",   target: "இ", equiv: "ಇ", pron: "ಇ",           latin: "i" },
    { id: "v-ii",  target: "ஈ", equiv: "ಈ", pron: "ಈ",           latin: "ī" },
    { id: "v-u",   target: "உ", equiv: "ಉ", pron: "ಉ",           latin: "u" },
    { id: "v-uu",  target: "ஊ", equiv: "ಊ", pron: "ಊ",           latin: "ū" },
    { id: "v-e",   target: "எ", equiv: "ಎ", pron: "ಎ (ಹ್ರಸ್ವ)",  latin: "e" },
    { id: "v-ee",  target: "ஏ", equiv: "ಏ", pron: "ಏ (ದೀರ್ಘ)",  latin: "ē" },
    { id: "v-ai",  target: "ஐ", equiv: "ಐ", pron: "ಐ",           latin: "ai" },
    { id: "v-o",   target: "ஒ", equiv: "ಒ", pron: "ಒ (ಹ್ರಸ್ವ)",  latin: "o" },
    { id: "v-oo",  target: "ஓ", equiv: "ಓ", pron: "ಓ (ದೀರ್ಘ)",  latin: "ō" },
    { id: "v-au",  target: "ஔ", equiv: "ಔ", pron: "ಔ",           latin: "au" }
  ],

  yogavaha: [
    { id: "y-ayt", target: "ஃ", equiv: "ಃ", pron: "ಃ (ಆಯ್ತಂ)", latin: "ḥ", note: "ತಮಿಳಿಗೇ ವಿಶಿಷ್ಟ ಧ್ವನಿ; ಅಹ್-ಎಂದು ಉಚ್ಚರಿಸಿ" }
  ],

  consonants: [
    { id: "c-ka",  target: "க",  equiv: "ಕ",  pron: "ಕ",         latin: "ka",  note: "ಪದ ಮಧ್ಯದಲ್ಲಿ ಗ/ಹ ಧ್ವನಿ" },
    { id: "c-nga", target: "ங",  equiv: "ಙ",  pron: "ಙ",         latin: "ṅa" },
    { id: "c-ca",  target: "ச",  equiv: "ಚ",  pron: "ಚ/ಸ",       latin: "ca",  note: "ಸ್ಥಾನಾನುಸಾರ ಚ/ಸ/ಜ ಧ್ವನಿ" },
    { id: "c-nya", target: "ஞ",  equiv: "ಞ",  pron: "ಞ",         latin: "ña" },
    { id: "c-tta", target: "ட",  equiv: "ಟ",  pron: "ಟ",         latin: "ṭa",  note: "ಪದ ಮಧ್ಯದಲ್ಲಿ ಡ/ರ ಧ್ವನಿ" },
    { id: "c-nna", target: "ண",  equiv: "ಣ",  pron: "ಣ",         latin: "ṇa" },
    { id: "c-ta",  target: "த",  equiv: "ತ",  pron: "ತ/ದ",       latin: "ta",  note: "ಪದ ಮಧ್ಯದಲ್ಲಿ ದ/ಧ ಧ್ವನಿ" },
    { id: "c-na",  target: "ந",  equiv: "ನ",  pron: "ನ (ದಂತ)",   latin: "na" },
    { id: "c-pa",  target: "ப",  equiv: "ಪ",  pron: "ಪ",         latin: "pa",  note: "ಪದ ಮಧ್ಯದಲ್ಲಿ ಬ/ವ ಧ್ವನಿ" },
    { id: "c-ma",  target: "ம",  equiv: "ಮ",  pron: "ಮ",         latin: "ma" },
    { id: "c-ya",  target: "ய",  equiv: "ಯ",  pron: "ಯ",         latin: "ya" },
    { id: "c-ra",  target: "ர",  equiv: "ರ",  pron: "ರ (ತಟ್ಟು)", latin: "ra" },
    { id: "c-la",  target: "ல",  equiv: "ಲ",  pron: "ಲ",         latin: "la" },
    { id: "c-va",  target: "வ",  equiv: "ವ",  pron: "ವ",         latin: "va" },
    { id: "c-zha", target: "ழ",  equiv: "ಳ",  pron: "ಳ (ವಿಶಿಷ್ಟ)", latin: "ḻa", note: "ತಮಿಳಿಗೆ ಮಾತ್ರ ವಿಶಿಷ್ಟ; ನಾಲಿಗೆ ಹಿಂದಕ್ಕೆ ಬಾಗಿಸಿ ಳ ಹೇಳಿ" },
    { id: "c-lla", target: "ள",  equiv: "ಳ",  pron: "ಳ",         latin: "ḷa" },
    { id: "c-rra", target: "ற",  equiv: "ರ",  pron: "ರ/ಟ (ಉರುಳು)", latin: "ṟa", note: "ಮೂರ್ಧನ್ಯ ಉರುಳು ರ; ಟ+ರ ಮಿಶ್ರ ಧ್ವನಿ" },
    { id: "c-nna2",target: "ன",  equiv: "ನ",  pron: "ನ (ಮೂರ್ಧನ್ಯ)", latin: "ṉa" }
  ],

  categories: [
    {
      id: "greet", label: "ಶುಭಾಶಯಗಳು", icon: "🙏",
      phrases: [
        { id: "g1", target: "வணக்கம்",          pron: "ವಣಕ್ಕಂ",          meaning: "ವಂದನೆ",            en: "Hello / Greetings" },
        { id: "g2", target: "நன்றி",             pron: "ನನ್ರಿ",           meaning: "ಧನ್ಯವಾದ",           en: "Thank you" },
        { id: "g3", target: "எப்படி இருக்கீங்க?", pron: "ಎಪ್ಪಡಿ ಇರುಕ್ಕೀಂಗ?", meaning: "ಹೇಗಿದ್ದೀರಾ?",       en: "How are you?" },
        { id: "g4", target: "நல்லா இருக்கேன்",   pron: "ನಲ್ಲಾ ಇರುಕ್ಕೇನ್",  meaning: "ಚೆನ್ನಾಗಿದ್ದೇನೆ",    en: "I am fine" },
        { id: "g5", target: "ஆமாம்",             pron: "ಆಮಾಂ",            meaning: "ಹೌದು",              en: "Yes" },
        { id: "g6", target: "இல்ல",              pron: "ಇಲ್ಲ",            meaning: "ಇಲ್ಲ",              en: "No" },
        { id: "g7", target: "வாங்க",             pron: "ವಾಂಗ",            meaning: "ಬನ್ನಿ",             en: "Come / Welcome" },
        { id: "g8", target: "போங்க",             pron: "ಪೋಂಗ",            meaning: "ಹೋಗಿ",              en: "Go / Goodbye" }
      ]
    },
    {
      id: "market", label: "ಮಾರುಕಟ್ಟೆ", icon: "🛒",
      phrases: [
        { id: "m1", target: "இது எவ்வளவு?",               pron: "ಇದು ಏವ್ವಳವು?",          meaning: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",    en: "How much?" },
        { id: "m2", target: "இதை குடுங்க",                pron: "ಇದೈ ಕುಡುಂಗ",            meaning: "ಇದನ್ನು ಕೊಡಿ",         en: "Give me this" },
        { id: "m3", target: "கொஞ்சம் கம்மி பண்ணுங்க",    pron: "ಕೊಂಜಂ ಕಮ್ಮಿ ಪಣ್ಣುಂಗ",   meaning: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ",   en: "Make it cheaper" },
        { id: "m4", target: "இன்னொன்னு காட்டுங்க",        pron: "ಇನ್ನೊನ್ನು ಕಾಟ್ಟುಂಗ",     meaning: "ಇನ್ನೊಂದು ತೋರಿಸಿ",    en: "Show me another" },
        { id: "m5", target: "ரசீது குடுங்க",              pron: "ರಸೀದು ಕುಡುಂಗ",           meaning: "ರಶೀದಿ ಕೊಡಿ",          en: "Give a receipt" }
      ]
    },
    {
      id: "travel", label: "ಪ್ರಯಾಣ", icon: "🚌",
      phrases: [
        { id: "t1", target: "பஸ் ஸ்டாண்டு எங்க?",  pron: "ಪಸ್ ಸ್ಟಾಂಡು ಏಂಗ?",  meaning: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?",    en: "Where is the bus stand?" },
        { id: "t2", target: "நேரா போங்க",           pron: "ನೇರಾ ಪೋಂಗ",         meaning: "ನೇರ ಹೋಗಿ",              en: "Go straight" },
        { id: "t3", target: "வலது திரும்புங்க",     pron: "ವಲದು ತಿರುಂಬುಂಗ",    meaning: "ಬಲಕ್ಕೆ ತಿರುಗಿ",          en: "Turn right" },
        { id: "t4", target: "இடது திரும்புங்க",     pron: "ಇಡದು ತಿರುಂಬುಂಗ",    meaning: "ಎಡಕ್ಕೆ ತಿರುಗಿ",          en: "Turn left" },
        { id: "t5", target: "நிறுத்துங்க",          pron: "ನಿರುತ್ತುಂಗ",         meaning: "ನಿಲ್ಲಿ",                en: "Stop" }
      ]
    },
    {
      id: "food", label: "ಆಹಾರ", icon: "🍛",
      phrases: [
        { id: "f1", target: "தண்ணீர் குடுங்க",    pron: "ತಣ್ಣೀರ್ ಕುಡುಂಗ",    meaning: "ನೀರು ಕೊಡಿ",           en: "Give me water" },
        { id: "f2", target: "காபி குடுங்க",        pron: "ಕಾಪಿ ಕುಡುಂಗ",       meaning: "ಕಾಫಿ ಕೊಡಿ",            en: "Give me coffee" },
        { id: "f3", target: "சாப்பாடு நல்லா இருக்கு", pron: "ಸಾಪ್ಪಾಡು ನಲ್ಲಾ ಇರುಕ್ಕು", meaning: "ಊಟ ರುಚಿಕರ",      en: "The food is tasty" },
        { id: "f4", target: "பில்லு குடுங்க",      pron: "ಪಿಲ್ಲು ಕುಡುಂಗ",     meaning: "ಬಿಲ್ ಕೊಡಿ",            en: "Give me the bill" }
      ]
    },
    {
      id: "emergency", label: "ತುರ್ತು", icon: "🆘",
      phrases: [
        { id: "e1", target: "உதவுங்க",              pron: "ಉದವುಂಗ",              meaning: "ಸಹಾಯ ಮಾಡಿ",           en: "Help me" },
        { id: "e2", target: "டாக்டர் கூப்பிடுங்க", pron: "ಡಾಕ್ಟರ್ ಕೂಪ್ಪಿಡುಂಗ",  meaning: "ಡಾಕ್ಟರ ಕರೆಯಿರಿ",      en: "Call a doctor" },
        { id: "e3", target: "போலீஸ் கூப்பிடுங்க",  pron: "ಪೋಲೀಸ್ ಕೂಪ್ಪಿಡುಂಗ",  meaning: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ",      en: "Call the police" }
      ]
    }
  ]
};
