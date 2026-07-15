// கன்னடம் ↔ தமிழ் learning content (for Tamil speakers learning Kannada)
// target = Kannada, equiv = closest Tamil letter, pron = pronunciation in Tamil script

window.DATA = {
  vowels: [
    { id: "v-a",   target: "ಅ", equiv: "அ", pron: "அ",           latin: "a" },
    { id: "v-aa",  target: "ಆ", equiv: "ஆ", pron: "ஆ",           latin: "ā" },
    { id: "v-i",   target: "ಇ", equiv: "இ", pron: "இ",           latin: "i" },
    { id: "v-ii",  target: "ಈ", equiv: "ஈ", pron: "ஈ",           latin: "ī" },
    { id: "v-u",   target: "ಉ", equiv: "உ", pron: "உ",           latin: "u" },
    { id: "v-uu",  target: "ಊ", equiv: "ஊ", pron: "ஊ",           latin: "ū" },
    { id: "v-e",   target: "ಎ", equiv: "எ", pron: "எ (குட்டை)",  latin: "e" },
    { id: "v-ee",  target: "ಏ", equiv: "ஏ", pron: "ஏ (நீண்ட)",   latin: "ē" },
    { id: "v-ai",  target: "ಐ", equiv: "ஐ", pron: "ஐ",           latin: "ai" },
    { id: "v-o",   target: "ಒ", equiv: "ஒ", pron: "ஒ (குட்டை)",  latin: "o" },
    { id: "v-oo",  target: "ಓ", equiv: "ஓ", pron: "ஓ (நீண்ட)",   latin: "ō" },
    { id: "v-au",  target: "ಔ", equiv: "ஔ", pron: "ஔ",           latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "ಅಂ", equiv: "அம்", pron: "அம்", latin: "aṁ" },
    { id: "y-ah", target: "ಅಃ", equiv: "அஃ",  pron: "அஃ",  latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",   target: "ಕ",  equiv: "க",  pron: "க",              latin: "ka" },
    { id: "c-kha",  target: "ಖ",  equiv: "க",  pron: "க (மிகை)",       latin: "kha", note: "தமிழில் மிகை மெய் இல்லை — க என்றே படிக்கவும்" },
    { id: "c-ga",   target: "ಗ",  equiv: "க",  pron: "க (மென்மை)",     latin: "ga",  note: "தமிழில் இடை நிலையில் மென்மையான க ஆகும்" },
    { id: "c-gha",  target: "ಘ",  equiv: "க",  pron: "க",              latin: "gha" },
    { id: "c-nga",  target: "ಙ",  equiv: "ங",  pron: "ங",              latin: "ṅa" },
    { id: "c-ca",   target: "ಚ",  equiv: "ச",  pron: "ச",              latin: "ca" },
    { id: "c-cha",  target: "ಛ",  equiv: "ச",  pron: "ச (மிகை)",       latin: "cha", note: "தமிழில் மிகை மெய் இல்லை" },
    { id: "c-ja",   target: "ಜ",  equiv: "ஜ",  pron: "ஜ",              latin: "ja" },
    { id: "c-jha",  target: "ಝ",  equiv: "ஜ",  pron: "ஜ",              latin: "jha" },
    { id: "c-nya",  target: "ಞ",  equiv: "ஞ",  pron: "ஞ",              latin: "ña" },
    { id: "c-tta",  target: "ಟ",  equiv: "ட",  pron: "ட",              latin: "ṭa" },
    { id: "c-ttha", target: "ಠ",  equiv: "ட",  pron: "ட (மிகை)",       latin: "ṭha" },
    { id: "c-dda",  target: "ಡ",  equiv: "ட",  pron: "ட",              latin: "ḍa" },
    { id: "c-ddha", target: "ಢ",  equiv: "ட",  pron: "ட",              latin: "ḍha" },
    { id: "c-nna",  target: "ಣ",  equiv: "ண",  pron: "ண",              latin: "ṇa" },
    { id: "c-ta",   target: "ತ",  equiv: "த",  pron: "த",              latin: "ta" },
    { id: "c-tha",  target: "ಥ",  equiv: "த",  pron: "த (மிகை)",       latin: "tha" },
    { id: "c-da",   target: "ದ",  equiv: "த",  pron: "த (மென்மை)",     latin: "da" },
    { id: "c-dha",  target: "ಧ",  equiv: "த",  pron: "த",              latin: "dha" },
    { id: "c-na",   target: "ನ",  equiv: "ந",  pron: "ந",              latin: "na" },
    { id: "c-pa",   target: "ಪ",  equiv: "ப",  pron: "ப",              latin: "pa" },
    { id: "c-pha",  target: "ಫ",  equiv: "ப",  pron: "ப (மிகை)",       latin: "pha" },
    { id: "c-ba",   target: "ಬ",  equiv: "ப",  pron: "ப (மென்மை)",     latin: "ba" },
    { id: "c-bha",  target: "ಭ",  equiv: "ப",  pron: "ப",              latin: "bha" },
    { id: "c-ma",   target: "ಮ",  equiv: "ம",  pron: "ம",              latin: "ma" },
    { id: "c-ya",   target: "ಯ",  equiv: "ய",  pron: "ய",              latin: "ya" },
    { id: "c-ra",   target: "ರ",  equiv: "ர",  pron: "ர",              latin: "ra" },
    { id: "c-la",   target: "ಲ",  equiv: "ல",  pron: "ல",              latin: "la" },
    { id: "c-va",   target: "ವ",  equiv: "வ",  pron: "வ",              latin: "va" },
    { id: "c-sha",  target: "ಶ",  equiv: "ஶ",  pron: "ஶ",              latin: "śa" },
    { id: "c-ssa",  target: "ಷ",  equiv: "ஷ",  pron: "ஷ",              latin: "ṣa" },
    { id: "c-sa",   target: "ಸ",  equiv: "ஸ",  pron: "ஸ",              latin: "sa" },
    { id: "c-ha",   target: "ಹ",  equiv: "ஹ",  pron: "ஹ",              latin: "ha" },
    { id: "c-lla",  target: "ಳ",  equiv: "ள",  pron: "ள",              latin: "ḷa" }
  ],

  categories: [
    {
      id: "greet", label: "வாழ்த்துக்கள்", icon: "🙏",
      phrases: [
        { id: "g1", target: "ನಮಸ್ಕಾರ",         pron: "நமஸ்காரம்",       meaning: "வணக்கம்",          en: "Hello / Greetings" },
        { id: "g2", target: "ಧನ್ಯವಾದ",          pron: "தன்யவாதம்",       meaning: "நன்றி",            en: "Thank you" },
        { id: "g3", target: "ಹೇಗಿದ್ದೀರಾ?",       pron: "ஹேகிதீரா?",       meaning: "எப்படி இருக்கீங்க?", en: "How are you?" },
        { id: "g4", target: "ಚೆನ್ನಾಗಿದ್ದೇನೆ",     pron: "சென்னாகிதேனே",    meaning: "நல்லா இருக்கேன்",  en: "I am fine" },
        { id: "g5", target: "ಹೌದು",              pron: "ஹௌது",            meaning: "ஆமாம்",            en: "Yes" },
        { id: "g6", target: "ಇಲ್ಲ",              pron: "இல்லை",           meaning: "இல்ல",             en: "No" },
        { id: "g7", target: "ಬನ್ನಿ",             pron: "பன்னி",           meaning: "வாங்க",            en: "Come / Welcome" },
        { id: "g8", target: "ಹೋಗಿ",              pron: "ஹோகி",            meaning: "போங்க",            en: "Go / Goodbye" }
      ]
    },
    {
      id: "market", label: "கடை", icon: "🛒",
      phrases: [
        { id: "m1", target: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",   pron: "எஷ்டு ஆகுத்ததெ?",  meaning: "இது எவ்வளவு?",       en: "How much?" },
        { id: "m2", target: "ಇದನ್ನು ಕೊಡಿ",       pron: "இதன்னு கொடி",      meaning: "இதை குடுங்க",        en: "Give me this" },
        { id: "m3", target: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ",  pron: "ஸ்வல்ப கடிமெ மாடி", meaning: "கொஞ்சம் கம்மி பண்ணுங்க", en: "Make it cheaper" },
        { id: "m4", target: "ರಶೀದಿ ಕೊಡಿ",        pron: "ரஷீதி கொடி",       meaning: "ரசீது குடுங்க",      en: "Give a receipt" }
      ]
    },
    {
      id: "travel", label: "பயணம்", icon: "🚌",
      phrases: [
        { id: "t1", target: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", pron: "பஸ் நில்தாண எல்லிதெ?", meaning: "பஸ் ஸ்டாண்டு எங்க?",  en: "Where is the bus stand?" },
        { id: "t2", target: "ನೇರ ಹೋಗಿ",           pron: "நேர ஹோகி",           meaning: "நேரா போங்க",          en: "Go straight" },
        { id: "t3", target: "ಬಲಕ್ಕೆ ತಿರುಗಿ",       pron: "பலக்கெ திருகி",       meaning: "வலது திரும்புங்க",    en: "Turn right" },
        { id: "t4", target: "ಎಡಕ್ಕೆ ತಿರುಗಿ",       pron: "எடக்கெ திருகி",       meaning: "இடது திரும்புங்க",    en: "Turn left" },
        { id: "t5", target: "ನಿಲ್ಲಿ",              pron: "நில்லி",              meaning: "நிறுத்துங்க",         en: "Stop" }
      ]
    },
    {
      id: "food", label: "உணவு", icon: "🍛",
      phrases: [
        { id: "f1", target: "ನೀರು ಕೊಡಿ",          pron: "நீரு கொடி",           meaning: "தண்ணீர் குடுங்க",     en: "Give me water" },
        { id: "f2", target: "ಕಾಫಿ ಕೊಡಿ",           pron: "காஃபி கொடி",          meaning: "காபி குடுங்க",         en: "Give me coffee" },
        { id: "f3", target: "ಊಟ ರುಚಿಕರ",           pron: "ஊட ருசிகர",           meaning: "சாப்பாடு நல்லா இருக்கு", en: "The food is tasty" },
        { id: "f4", target: "ಬಿಲ್ ಕೊಡಿ",           pron: "பில் கொடி",           meaning: "பில்லு குடுங்க",      en: "Give me the bill" }
      ]
    },
    {
      id: "emergency", label: "அவசரம்", icon: "🆘",
      phrases: [
        { id: "e1", target: "ಸಹಾಯ ಮಾಡಿ",          pron: "ஸஹாய மாடி",           meaning: "உதவுங்க",              en: "Help me" },
        { id: "e2", target: "ಡಾಕ್ಟರ ಕರೆಯಿರಿ",     pron: "டாக்டர கரெயிரி",      meaning: "டாக்டர் கூப்பிடுங்க", en: "Call a doctor" },
        { id: "e3", target: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ",     pron: "போலீஸ் கரெயிரி",      meaning: "போலீஸ் கூப்பிடுங்க",  en: "Call the police" }
      ]
    }
  ]
};
