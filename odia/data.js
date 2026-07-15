// ಒಡಿಯಾ ↔ ಕನ್ನಡ learning content (for Kannada speakers learning Odia)
// target = Odia, equiv = closest Kannada letter, pron = pronunciation in Kannada script

window.DATA = {
  vowels: [
    { id: "v-a",   target: "ଅ", equiv: "ಅ", pron: "ಅ",          latin: "a" },
    { id: "v-aa",  target: "ଆ", equiv: "ಆ", pron: "ಆ",          latin: "ā" },
    { id: "v-i",   target: "ଇ", equiv: "ಇ", pron: "ಇ",          latin: "i" },
    { id: "v-ii",  target: "ଈ", equiv: "ಈ", pron: "ಈ",          latin: "ī" },
    { id: "v-u",   target: "ଉ", equiv: "ಉ", pron: "ಉ",          latin: "u" },
    { id: "v-uu",  target: "ଊ", equiv: "ಊ", pron: "ಊ",          latin: "ū" },
    { id: "v-ru",  target: "ଋ", equiv: "ಋ", pron: "ಋ",          latin: "ṛ" },
    { id: "v-e",   target: "ଏ", equiv: "ಏ", pron: "ಏ (ದೀರ್ಘ)", latin: "e",  note: "ಒಡಿಯಾದಲ್ಲಿ ಕೇವಲ ದೀರ್ಘ ಏ — ಕನ್ನಡದ ಹ್ರಸ್ವ ಎ ಇಲ್ಲ" },
    { id: "v-ai",  target: "ଐ", equiv: "ಐ", pron: "ಐ",          latin: "ai" },
    { id: "v-o",   target: "ଓ", equiv: "ಓ", pron: "ಓ (ದೀರ್ಘ)", latin: "o",  note: "ಒಡಿಯಾದಲ್ಲಿ ಕೇವಲ ದೀರ್ಘ ಓ — ಕನ್ನಡದ ಹ್ರಸ್ವ ಒ ಇಲ್ಲ" },
    { id: "v-au",  target: "ଔ", equiv: "ಔ", pron: "ಔ",          latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "ଅଂ", equiv: "ಅಂ", pron: "ಅಂ", latin: "aṁ" },
    { id: "y-ah", target: "ଅଃ", equiv: "ಅಃ", pron: "ಅಃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",   target: "କ",  equiv: "ಕ",  pron: "ಕ",  latin: "ka" },
    { id: "c-kha",  target: "ଖ",  equiv: "ಖ",  pron: "ಖ",  latin: "kha" },
    { id: "c-ga",   target: "ଗ",  equiv: "ಗ",  pron: "ಗ",  latin: "ga" },
    { id: "c-gha",  target: "ଘ",  equiv: "ಘ",  pron: "ಘ",  latin: "gha" },
    { id: "c-nga",  target: "ଙ",  equiv: "ಙ",  pron: "ಙ",  latin: "ṅa" },
    { id: "c-cha",  target: "ଚ",  equiv: "ಚ",  pron: "ಚ",  latin: "ca" },
    { id: "c-chha", target: "ଛ",  equiv: "ಛ",  pron: "ಛ",  latin: "cha" },
    { id: "c-ja",   target: "ଜ",  equiv: "ಜ",  pron: "ಜ",  latin: "ja" },
    { id: "c-jha",  target: "ଝ",  equiv: "ಝ",  pron: "ಝ",  latin: "jha" },
    { id: "c-nya",  target: "ଞ",  equiv: "ಞ",  pron: "ಞ",  latin: "ña" },
    { id: "c-tta",  target: "ଟ",  equiv: "ಟ",  pron: "ಟ",  latin: "ṭa" },
    { id: "c-ttha", target: "ଠ",  equiv: "ಠ",  pron: "ಠ",  latin: "ṭha" },
    { id: "c-dda",  target: "ଡ",  equiv: "ಡ",  pron: "ಡ",  latin: "ḍa" },
    { id: "c-ddha", target: "ଢ",  equiv: "ಢ",  pron: "ಢ",  latin: "ḍha" },
    { id: "c-nna",  target: "ଣ",  equiv: "ಣ",  pron: "ಣ",  latin: "ṇa" },
    { id: "c-ta",   target: "ତ",  equiv: "ತ",  pron: "ತ",  latin: "ta" },
    { id: "c-tha",  target: "ଥ",  equiv: "ಥ",  pron: "ಥ",  latin: "tha" },
    { id: "c-da",   target: "ଦ",  equiv: "ದ",  pron: "ದ",  latin: "da" },
    { id: "c-dha",  target: "ଧ",  equiv: "ಧ",  pron: "ಧ",  latin: "dha" },
    { id: "c-na",   target: "ନ",  equiv: "ನ",  pron: "ನ",  latin: "na" },
    { id: "c-pa",   target: "ପ",  equiv: "ಪ",  pron: "ಪ",  latin: "pa" },
    { id: "c-pha",  target: "ଫ",  equiv: "ಫ",  pron: "ಫ",  latin: "pha" },
    { id: "c-ba",   target: "ବ",  equiv: "ಬ",  pron: "ಬ",  latin: "ba" },
    { id: "c-bha",  target: "ଭ",  equiv: "ಭ",  pron: "ಭ",  latin: "bha" },
    { id: "c-ma",   target: "ମ",  equiv: "ಮ",  pron: "ಮ",  latin: "ma" },
    { id: "c-ya",   target: "ଯ",  equiv: "ಯ",  pron: "ಯ",  latin: "ya" },
    { id: "c-ra",   target: "ର",  equiv: "ರ",  pron: "ರ",  latin: "ra" },
    { id: "c-la",   target: "ଲ",  equiv: "ಲ",  pron: "ಲ",  latin: "la" },
    { id: "c-va",   target: "ଵ",  equiv: "ವ",  pron: "ವ",  latin: "va" },
    { id: "c-sha",  target: "ଶ",  equiv: "ಶ",  pron: "ಶ",  latin: "śa" },
    { id: "c-ssa",  target: "ଷ",  equiv: "ಷ",  pron: "ಷ",  latin: "ṣa" },
    { id: "c-sa",   target: "ସ",  equiv: "ಸ",  pron: "ಸ",  latin: "sa" },
    { id: "c-ha",   target: "ହ",  equiv: "ಹ",  pron: "ಹ",  latin: "ha" },
    { id: "c-lla",  target: "ଳ",  equiv: "ಳ",  pron: "ಳ",  latin: "ḷa", note: "ಕನ್ನಡದ ಳ ಇದಕ್ಕೆ ಹತ್ತಿರ" }
  ],

  categories: [
    {
      id: "greet", label: "ಶುಭಾಶಯಗಳು", icon: "🙏",
      phrases: [
        { id: "g1", target: "ନମସ୍କାର",    pron: "ನಮಸ್ಕಾರ",       meaning: "ವಂದನೆ",            en: "Hello / Greetings" },
        { id: "g2", target: "ଧନ୍ୟବାଦ",    pron: "ಧನ್ಯಬಾದ",       meaning: "ಧನ್ಯವಾದ",           en: "Thank you" },
        { id: "g3", target: "ଭଲ ଅଛ?",     pron: "ಭಲ ಅಛ?",         meaning: "ಹೇಗಿದ್ದೀರಾ?",       en: "How are you?" },
        { id: "g4", target: "ଭଲ ଅଛି",     pron: "ಭಲ ಅಛಿ",         meaning: "ಚೆನ್ನಾಗಿದ್ದೇನೆ",      en: "I am fine" },
        { id: "g5", target: "ହଁ",          pron: "ಹ~",              meaning: "ಹೌದು",              en: "Yes" },
        { id: "g6", target: "ନା",          pron: "ನಾ",              meaning: "ಇಲ್ಲ",              en: "No" },
        { id: "g7", target: "ଆସ",          pron: "ಆಸ",              meaning: "ಬನ್ನಿ",              en: "Come / Welcome" },
        { id: "g8", target: "ଯାଅ",         pron: "ಯಾಅ",             meaning: "ಹೋಗಿ",              en: "Go / Goodbye" }
      ]
    },
    {
      id: "market", label: "ಮಾರುಕಟ್ಟೆ", icon: "🛒",
      phrases: [
        { id: "m1", target: "ଏହାର ଦାମ କେତେ?",  pron: "ಏಹಾರ ದಾಮ ಕೇತೇ?",   meaning: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",     en: "How much does this cost?" },
        { id: "m2", target: "ଏଇଟା ଦିଅ",         pron: "ಏಇಟಾ ದಿಅ",          meaning: "ಇದನ್ನು ಕೊಡಿ",         en: "Give me this one" },
        { id: "m3", target: "ଅଳ୍ପ ସସ୍ତା କର",    pron: "ಅಳ್ಪ ಸಸ್ತಾ ಕರ",      meaning: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ",    en: "Make it a bit cheaper" },
        { id: "m4", target: "ଆଉ ଦେଖାଅ",         pron: "ಆಉ ದೇಖಾಅ",          meaning: "ಇನ್ನೊಂದು ತೋರಿಸಿ",     en: "Show me another one" },
        { id: "m5", target: "ଠିକ ଅଛ",           pron: "ಠಿಕ ಅಛ",            meaning: "ಸರಿ ಆಗಿದೆ",           en: "It's okay / fine" },
        { id: "m6", target: "ରସିଦ ଦିଅ",         pron: "ರಸಿದ ದಿಅ",          meaning: "ರಶೀದಿ ಕೊಡಿ",          en: "Give me a receipt" }
      ]
    },
    {
      id: "travel", label: "ಪ್ರಯಾಣ", icon: "🚌",
      phrases: [
        { id: "t1", target: "ବସ ଷ୍ଟ୍ୟାଣ୍ଡ କୁଆଡ଼େ?", pron: "ಬಸ ಸ್ಟ್ಯಾಣ್ಡ ಕುಆಡೇ?",  meaning: "ಬಸ್ ಸ್ಟ್ಯಾಂಡ್ ಎಲ್ಲಿದೆ?",  en: "Where is the bus stand?" },
        { id: "t2", target: "ଅଟୋ ମିଳିବ?",          pron: "ಅಟೋ ಮಿಳಿಬ?",           meaning: "ಅಟೋ ಸಿಗುತ್ತದಾ?",        en: "Will I get an auto?" },
        { id: "t3", target: "ସିଧା ଯାଅ",            pron: "ಸಿಧಾ ಯಾಅ",             meaning: "ನೇರ ಹೋಗಿ",              en: "Go straight" },
        { id: "t4", target: "ଡ଼ାହାଣ ହୁଅ",           pron: "ಡಾಹಾಣ ಹುಅ",            meaning: "ಬಲಕ್ಕೆ ತಿರುಗಿ",          en: "Turn right" },
        { id: "t5", target: "ବାମ ହୁଅ",              pron: "ಬಾಮ ಹುಅ",              meaning: "ಎಡಕ್ಕೆ ತಿರುಗಿ",          en: "Turn left" },
        { id: "t6", target: "ରୁକ",                  pron: "ರುಕ",                  meaning: "ನಿಲ್ಲಿ",                en: "Stop" }
      ]
    },
    {
      id: "food", label: "ಆಹಾರ", icon: "🍛",
      phrases: [
        { id: "f1", target: "ଖାଦ୍ୟ",              pron: "ಖಾದ್ಯ",              meaning: "ಆಹಾರ",                en: "Food" },
        { id: "f2", target: "ଜଳ ଦିଅ",             pron: "ಜಳ ದಿಅ",             meaning: "ನೀರು ಕೊಡಿ",           en: "Give me water" },
        { id: "f3", target: "ଚା ଦିଅ",              pron: "ಚಾ ದಿಅ",              meaning: "ಚಹಾ ಕೊಡಿ",            en: "Give me tea" },
        { id: "f4", target: "ଭୋଜନ ଭଲ ଅଛି",        pron: "ಭೋಜನ ಭಲ ಅಛಿ",        meaning: "ಊಟ ರುಚಿಕರವಾಗಿದೆ",    en: "The food is tasty" },
        { id: "f5", target: "ଅଉ ଟିକେ ଦିଅ",        pron: "ಅಉ ಟಿಕೇ ದಿಅ",        meaning: "ಇನ್ನು ಸ್ವಲ್ಪ ಕೊಡಿ",   en: "Give me a little more" },
        { id: "f6", target: "ବିଲ ଦିଅ",             pron: "ಬಿಲ ದಿಅ",             meaning: "ಬಿಲ್ ಕೊಡಿ",            en: "Give me the bill" }
      ]
    },
    {
      id: "emergency", label: "ತುರ್ತು", icon: "🆘",
      phrases: [
        { id: "e1", target: "ସାହାଯ୍ୟ କର",         pron: "ಸಾಹಾಯ್ಯ ಕರ",         meaning: "ಸಹಾಯ ಮಾಡಿ",           en: "Help me" },
        { id: "e2", target: "ଡ଼ାକ୍ତର ଡ଼ାକ",         pron: "ಡಾಕ್ತರ ಡಾಕ",          meaning: "ಡಾಕ್ಟರ ಕರೆಯಿರಿ",       en: "Call a doctor" },
        { id: "e3", target: "ପୋଲିସ ଡ଼ାକ",          pron: "ಪೋಲಿಸ ಡಾಕ",           meaning: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ",      en: "Call the police" },
        { id: "e4", target: "ହଠାତ ଅସୁସ୍ଥ ଅଛି",    pron: "ಹಠಾತ ಅಸ್ ಸ್ಥ ಅಛಿ",    meaning: "ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಅನಾರೋಗ್ಯ", en: "Suddenly feeling unwell" }
      ]
    }
  ]
};
