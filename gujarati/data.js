// ಗುಜರಾತಿ ↔ ಕನ್ನಡ learning content (for Kannada speakers learning Gujarati)
// target = Gujarati, equiv = closest Kannada letter, pron = pronunciation in Kannada script

window.DATA = {
  vowels: [
    { id: "v-a",   target: "અ", equiv: "ಅ", pron: "ಅ",          latin: "a" },
    { id: "v-aa",  target: "આ", equiv: "ಆ", pron: "ಆ",          latin: "ā" },
    { id: "v-i",   target: "ઇ", equiv: "ಇ", pron: "ಇ",          latin: "i" },
    { id: "v-ii",  target: "ઈ", equiv: "ಈ", pron: "ಈ",          latin: "ī" },
    { id: "v-u",   target: "ઉ", equiv: "ಉ", pron: "ಉ",          latin: "u" },
    { id: "v-uu",  target: "ઊ", equiv: "ಊ", pron: "ಊ",          latin: "ū" },
    { id: "v-ru",  target: "ઋ", equiv: "ಋ", pron: "ಋ",          latin: "ṛ" },
    { id: "v-e",   target: "એ", equiv: "ಏ", pron: "ಏ (ದೀರ್ಘ)", latin: "e",  note: "ಗುಜರಾತಿಯಲ್ಲಿ ಕೇವಲ ಒಂದೇ ಎ — ಕನ್ನಡದ ಹ್ರಸ್ವ/ದೀರ್ಘ ಭೇದವಿಲ್ಲ" },
    { id: "v-ai",  target: "ઐ", equiv: "ಐ", pron: "ಐ",          latin: "ai" },
    { id: "v-o",   target: "ઓ", equiv: "ಓ", pron: "ಓ (ದೀರ್ಘ)", latin: "o",  note: "ಗುಜರಾತಿಯಲ್ಲಿ ಕೇವಲ ಒಂದೇ ಒ — ಕನ್ನಡದ ಹ್ರಸ್ವ/ದೀರ್ಘ ಭೇದವಿಲ್ಲ" },
    { id: "v-au",  target: "ઔ", equiv: "ಔ", pron: "ಔ",          latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "અં", equiv: "ಅಂ", pron: "ಅಂ", latin: "aṁ" },
    { id: "y-ah", target: "અઃ", equiv: "ಅಃ", pron: "ಅಃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",   target: "ક",  equiv: "ಕ",  pron: "ಕ",  latin: "ka" },
    { id: "c-kha",  target: "ખ",  equiv: "ಖ",  pron: "ಖ",  latin: "kha" },
    { id: "c-ga",   target: "ગ",  equiv: "ಗ",  pron: "ಗ",  latin: "ga" },
    { id: "c-gha",  target: "ઘ",  equiv: "ಘ",  pron: "ಘ",  latin: "gha" },
    { id: "c-nga",  target: "ઙ",  equiv: "ಙ",  pron: "ಙ",  latin: "ṅa" },
    { id: "c-cha",  target: "ચ",  equiv: "ಚ",  pron: "ಚ",  latin: "ca" },
    { id: "c-chha", target: "છ",  equiv: "ಛ",  pron: "ಛ",  latin: "cha" },
    { id: "c-ja",   target: "જ",  equiv: "ಜ",  pron: "ಜ",  latin: "ja" },
    { id: "c-jha",  target: "ઝ",  equiv: "ಝ",  pron: "ಝ",  latin: "jha" },
    { id: "c-nya",  target: "ઞ",  equiv: "ಞ",  pron: "ಞ",  latin: "ña" },
    { id: "c-tta",  target: "ટ",  equiv: "ಟ",  pron: "ಟ",  latin: "ṭa" },
    { id: "c-ttha", target: "ઠ",  equiv: "ಠ",  pron: "ಠ",  latin: "ṭha" },
    { id: "c-dda",  target: "ડ",  equiv: "ಡ",  pron: "ಡ",  latin: "ḍa" },
    { id: "c-ddha", target: "ઢ",  equiv: "ಢ",  pron: "ಢ",  latin: "ḍha" },
    { id: "c-nna",  target: "ણ",  equiv: "ಣ",  pron: "ಣ",  latin: "ṇa" },
    { id: "c-ta",   target: "ત",  equiv: "ತ",  pron: "ತ",  latin: "ta" },
    { id: "c-tha",  target: "થ",  equiv: "ಥ",  pron: "ಥ",  latin: "tha" },
    { id: "c-da",   target: "દ",  equiv: "ದ",  pron: "ದ",  latin: "da" },
    { id: "c-dha",  target: "ધ",  equiv: "ಧ",  pron: "ಧ",  latin: "dha" },
    { id: "c-na",   target: "ન",  equiv: "ನ",  pron: "ನ",  latin: "na" },
    { id: "c-pa",   target: "પ",  equiv: "ಪ",  pron: "ಪ",  latin: "pa" },
    { id: "c-pha",  target: "ફ",  equiv: "ಫ",  pron: "ಫ",  latin: "pha" },
    { id: "c-ba",   target: "બ",  equiv: "ಬ",  pron: "ಬ",  latin: "ba" },
    { id: "c-bha",  target: "ભ",  equiv: "ಭ",  pron: "ಭ",  latin: "bha" },
    { id: "c-ma",   target: "મ",  equiv: "ಮ",  pron: "ಮ",  latin: "ma" },
    { id: "c-ya",   target: "ય",  equiv: "ಯ",  pron: "ಯ",  latin: "ya" },
    { id: "c-ra",   target: "ર",  equiv: "ರ",  pron: "ರ",  latin: "ra" },
    { id: "c-la",   target: "લ",  equiv: "ಲ",  pron: "ಲ",  latin: "la" },
    { id: "c-va",   target: "વ",  equiv: "ವ",  pron: "ವ",  latin: "va" },
    { id: "c-sha",  target: "શ",  equiv: "ಶ",  pron: "ಶ",  latin: "śa" },
    { id: "c-ssa",  target: "ષ",  equiv: "ಷ",  pron: "ಷ",  latin: "ṣa" },
    { id: "c-sa",   target: "સ",  equiv: "ಸ",  pron: "ಸ",  latin: "sa" },
    { id: "c-ha",   target: "હ",  equiv: "ಹ",  pron: "ಹ",  latin: "ha" },
    { id: "c-lla",  target: "ળ",  equiv: "ಳ",  pron: "ಳ",  latin: "ḷa", note: "ಕನ್ನಡದ ಳ ಇದಕ್ಕೆ ಹತ್ತಿರ" }
  ],

  categories: [
    {
      id: "greet", label: "ಶುಭಾಶಯಗಳು", icon: "🙏",
      phrases: [
        { id: "g1", target: "નમસ્તે",       pron: "ನಮಸ್ತೇ",       meaning: "ವಂದನೆ",            en: "Hello / Greetings" },
        { id: "g2", target: "આભાર",         pron: "ಆಭಾರ್",        meaning: "ಧನ್ಯವಾದ",           en: "Thank you" },
        { id: "g3", target: "કેમ છો?",       pron: "ಕೇಮ್ ಛೋ?",     meaning: "ಹೇಗಿದ್ದೀರಾ?",       en: "How are you?" },
        { id: "g4", target: "મજામાં છું",    pron: "ಮಜಾಮಾಂ ಛುಂ",  meaning: "ಚೆನ್ನಾಗಿದ್ದೇನೆ",     en: "I am fine" },
        { id: "g5", target: "હા",           pron: "ಹಾ",           meaning: "ಹೌದು",              en: "Yes" },
        { id: "g6", target: "ના",           pron: "ನಾ",           meaning: "ಇಲ್ಲ",              en: "No" },
        { id: "g7", target: "આવો",          pron: "ಆವೋ",          meaning: "ಬನ್ನಿ",             en: "Come / Welcome" },
        { id: "g8", target: "જાવ",          pron: "ಜಾವ್",         meaning: "ಹೋಗಿ",              en: "Go / Goodbye" }
      ]
    },
    {
      id: "market", label: "ಮಾರುಕಟ್ಟೆ", icon: "🛒",
      phrases: [
        { id: "m1", target: "આનો ભાવ શું છે?",   pron: "ಆನೋ ಭಾವ್ ಶುಂ ಛೇ?",   meaning: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",    en: "How much does this cost?" },
        { id: "m2", target: "આ આપો",             pron: "ಆ ಆಪೋ",              meaning: "ಇದನ್ನು ಕೊಡಿ",         en: "Give me this" },
        { id: "m3", target: "થોડું સસ્તું કરો",   pron: "ಥೋಡುಂ ಸಸ್ತುಂ ಕರೋ",   meaning: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ",   en: "Make it cheaper" },
        { id: "m4", target: "બીજું બતાવો",       pron: "ಬೀಜುಂ ಬತಾವೋ",        meaning: "ಇನ್ನೊಂದು ತೋರಿಸಿ",    en: "Show me another" },
        { id: "m5", target: "રસીદ આપો",          pron: "ರಸೀದ್ ಆಪೋ",          meaning: "ರಶೀದಿ ಕೊಡಿ",          en: "Give a receipt" }
      ]
    },
    {
      id: "travel", label: "ಪ್ರಯಾಣ", icon: "🚌",
      phrases: [
        { id: "t1", target: "બસ સ્ટેન્ડ ક્યાં છે?", pron: "ಬಸ್ ಸ್ಟೇಂಡ್ ಕ್ಯಾಂ ಛೇ?", meaning: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?",   en: "Where is the bus stand?" },
        { id: "t2", target: "સીધા જાવ",             pron: "ಸೀಧಾ ಜಾವ್",              meaning: "ನೇರ ಹೋಗಿ",             en: "Go straight" },
        { id: "t3", target: "જમણે વળો",             pron: "ಜಮಣೇ ವಳೋ",               meaning: "ಬಲಕ್ಕೆ ತಿರುಗಿ",         en: "Turn right" },
        { id: "t4", target: "ડાબે વળો",             pron: "ಡಾಬೇ ವಳೋ",               meaning: "ಎಡಕ್ಕೆ ತಿರುಗಿ",         en: "Turn left" },
        { id: "t5", target: "ઊભા રહો",              pron: "ಊಭಾ ರಹೋ",                meaning: "ನಿಲ್ಲಿ",               en: "Stop" }
      ]
    },
    {
      id: "food", label: "ಆಹಾರ", icon: "🍛",
      phrases: [
        { id: "f1", target: "પાણી આપો",             pron: "ಪಾಣೀ ಆಪೋ",           meaning: "ನೀರು ಕೊಡಿ",           en: "Give me water" },
        { id: "f2", target: "ચા આપો",                pron: "ಚಾ ಆಪೋ",             meaning: "ಚಹಾ ಕೊಡಿ",            en: "Give me tea" },
        { id: "f3", target: "ખાવાનું સ્વાદિષ્ટ છે",  pron: "ಖಾವಾನುಂ ಸ್ವಾದಿಷ್ಟ್ ಛೇ", meaning: "ಊಟ ರುಚಿಕರ",         en: "The food is tasty" },
        { id: "f4", target: "બિલ આપો",               pron: "ಬಿಲ್ ಆಪೋ",           meaning: "ಬಿಲ್ ಕೊಡಿ",           en: "Give me the bill" }
      ]
    },
    {
      id: "emergency", label: "ತುರ್ತು", icon: "🆘",
      phrases: [
        { id: "e1", target: "મદદ કરો",            pron: "ಮದದ್ ಕರೋ",          meaning: "ಸಹಾಯ ಮಾಡಿ",           en: "Help me" },
        { id: "e2", target: "ડોક્ટરને બોલાવો",    pron: "ಡಾಕ್ಟರ್ ನೇ ಬೋಲಾವೋ", meaning: "ಡಾಕ್ಟರ ಕರೆಯಿರಿ",      en: "Call a doctor" },
        { id: "e3", target: "પોલીસને બોલાવો",     pron: "ಪೋಲೀಸ್ ನೇ ಬೋಲಾವೋ", meaning: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ",      en: "Call the police" }
      ]
    }
  ]
};
