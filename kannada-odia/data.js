// ಕನ್ನಡ ↔ ଓଡ଼ିଆ learning content (for Odia speakers learning Kannada)
// target = Kannada, equiv = closest Odia letter, pron = pronunciation in Odia script

window.DATA = {
  vowels: [
    { id: "v-a",   target: "ಅ", equiv: "ଅ", pron: "ଅ",            latin: "a" },
    { id: "v-aa",  target: "ಆ", equiv: "ଆ", pron: "ଆ",            latin: "ā" },
    { id: "v-i",   target: "ಇ", equiv: "ଇ", pron: "ଇ",            latin: "i" },
    { id: "v-ii",  target: "ಈ", equiv: "ଈ", pron: "ଈ",            latin: "ī" },
    { id: "v-u",   target: "ಉ", equiv: "ଉ", pron: "ଉ",            latin: "u" },
    { id: "v-uu",  target: "ಊ", equiv: "ଊ", pron: "ଊ",            latin: "ū" },
    { id: "v-e",   target: "ಎ", equiv: "ଏ", pron: "ଏ (ହ୍ରସ୍ୱ)",   latin: "e",  note: "କନ୍ନଡ଼ରେ ହ୍ରସ୍ୱ ଏ ଅଛି — ଓଡ଼ିଆ ଏ ଠାରୁ ଛୋଟ" },
    { id: "v-ee",  target: "ಏ", equiv: "ଏ", pron: "ଏ (ଦୀର୍ଘ)",    latin: "ē",  note: "ଏହା ଓଡ଼ିଆ ଏ ସହ ମିଳେ" },
    { id: "v-ai",  target: "ಐ", equiv: "ଐ", pron: "ଐ",            latin: "ai" },
    { id: "v-o",   target: "ಒ", equiv: "ଓ", pron: "ଓ (ହ୍ରସ୍ୱ)",   latin: "o",  note: "କନ୍ନଡ଼ରେ ହ୍ରସ୍ୱ ଓ ଅଛି — ଓଡ଼ିଆ ଓ ଠାରୁ ଛୋଟ" },
    { id: "v-oo",  target: "ಓ", equiv: "ଓ", pron: "ଓ (ଦୀର୍ଘ)",    latin: "ō",  note: "ଏହା ଓଡ଼ିଆ ଓ ସହ ମିଳେ" },
    { id: "v-au",  target: "ಔ", equiv: "ଔ", pron: "ଔ",            latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "ಅಂ", equiv: "ଅଂ", pron: "ଅଂ", latin: "aṁ" },
    { id: "y-ah", target: "ಅಃ", equiv: "ଅଃ", pron: "ଅଃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",   target: "ಕ",  equiv: "କ",  pron: "କ",  latin: "ka" },
    { id: "c-kha",  target: "ಖ",  equiv: "ଖ",  pron: "ଖ",  latin: "kha" },
    { id: "c-ga",   target: "ಗ",  equiv: "ଗ",  pron: "ଗ",  latin: "ga" },
    { id: "c-gha",  target: "ಘ",  equiv: "ଘ",  pron: "ଘ",  latin: "gha" },
    { id: "c-nga",  target: "ಙ",  equiv: "ଙ",  pron: "ଙ",  latin: "ṅa" },
    { id: "c-cha",  target: "ಚ",  equiv: "ଚ",  pron: "ଚ",  latin: "ca" },
    { id: "c-chha", target: "ಛ",  equiv: "ଛ",  pron: "ଛ",  latin: "cha" },
    { id: "c-ja",   target: "ಜ",  equiv: "ଜ",  pron: "ଜ",  latin: "ja" },
    { id: "c-jha",  target: "ಝ",  equiv: "ଝ",  pron: "ଝ",  latin: "jha" },
    { id: "c-nya",  target: "ಞ",  equiv: "ଞ",  pron: "ଞ",  latin: "ña" },
    { id: "c-tta",  target: "ಟ",  equiv: "ଟ",  pron: "ଟ",  latin: "ṭa" },
    { id: "c-ttha", target: "ಠ",  equiv: "ଠ",  pron: "ଠ",  latin: "ṭha" },
    { id: "c-dda",  target: "ಡ",  equiv: "ଡ",  pron: "ଡ",  latin: "ḍa" },
    { id: "c-ddha", target: "ಢ",  equiv: "ଢ",  pron: "ଢ",  latin: "ḍha" },
    { id: "c-nna",  target: "ಣ",  equiv: "ଣ",  pron: "ଣ",  latin: "ṇa" },
    { id: "c-ta",   target: "ತ",  equiv: "ତ",  pron: "ତ",  latin: "ta" },
    { id: "c-tha",  target: "ಥ",  equiv: "ଥ",  pron: "ଥ",  latin: "tha" },
    { id: "c-da",   target: "ದ",  equiv: "ଦ",  pron: "ଦ",  latin: "da" },
    { id: "c-dha",  target: "ಧ",  equiv: "ଧ",  pron: "ଧ",  latin: "dha" },
    { id: "c-na",   target: "ನ",  equiv: "ନ",  pron: "ନ",  latin: "na" },
    { id: "c-pa",   target: "ಪ",  equiv: "ପ",  pron: "ପ",  latin: "pa" },
    { id: "c-pha",  target: "ಫ",  equiv: "ଫ",  pron: "ଫ",  latin: "pha" },
    { id: "c-ba",   target: "ಬ",  equiv: "ବ",  pron: "ବ",  latin: "ba" },
    { id: "c-bha",  target: "ಭ",  equiv: "ଭ",  pron: "ଭ",  latin: "bha" },
    { id: "c-ma",   target: "ಮ",  equiv: "ମ",  pron: "ମ",  latin: "ma" },
    { id: "c-ya",   target: "ಯ",  equiv: "ଯ",  pron: "ଯ",  latin: "ya" },
    { id: "c-ra",   target: "ರ",  equiv: "ର",  pron: "ର",  latin: "ra" },
    { id: "c-la",   target: "ಲ",  equiv: "ଲ",  pron: "ଲ",  latin: "la" },
    { id: "c-va",   target: "ವ",  equiv: "ଵ",  pron: "ଵ",  latin: "va" },
    { id: "c-sha",  target: "ಶ",  equiv: "ଶ",  pron: "ଶ",  latin: "śa" },
    { id: "c-ssa",  target: "ಷ",  equiv: "ଷ",  pron: "ଷ",  latin: "ṣa" },
    { id: "c-sa",   target: "ಸ",  equiv: "ସ",  pron: "ସ",  latin: "sa" },
    { id: "c-ha",   target: "ಹ",  equiv: "ହ",  pron: "ହ",  latin: "ha" },
    { id: "c-lla",  target: "ಳ",  equiv: "ଳ",  pron: "ଳ",  latin: "ḷa", note: "ଓଡ଼ିଆ ଳ ଏହା ସହ ମିଳେ" }
  ],

  categories: [
    {
      id: "greet", label: "ଅଭିବାଦନ", icon: "🙏",
      phrases: [
        { id: "g1", target: "ನಮಸ್ಕಾರ",         pron: "ନମସ୍କାର",         meaning: "ନମସ୍କାର",          en: "Hello / Greetings" },
        { id: "g2", target: "ಧನ್ಯವಾದ",          pron: "ଧନ୍ୟବାଦ",          meaning: "ଧନ୍ୟବାଦ",          en: "Thank you" },
        { id: "g3", target: "ಹೇಗಿದ್ದೀರಾ?",       pron: "ହେଗ଼ିଦ୍ଦୀରା?",      meaning: "ଭଲ ଅଛ?",           en: "How are you?" },
        { id: "g4", target: "ಚೆನ್ನಾಗಿದ್ದೇನೆ",     pron: "ଚେନ୍ନାଗ଼ିଦ୍ଦେନେ",   meaning: "ଭଲ ଅଛି",           en: "I am fine" },
        { id: "g5", target: "ಹೌದು",              pron: "ହୌଦୁ",             meaning: "ହଁ",               en: "Yes" },
        { id: "g6", target: "ಇಲ್ಲ",              pron: "ଇଲ୍ଲ",             meaning: "ନା",               en: "No" },
        { id: "g7", target: "ಬನ್ನಿ",             pron: "ବନ୍ନ",             meaning: "ଆସ",               en: "Come / Welcome" },
        { id: "g8", target: "ಹೋಗಿ",              pron: "ହୋଗ଼ି",             meaning: "ଯାଅ",              en: "Go / Goodbye" }
      ]
    },
    {
      id: "market", label: "ବଜାର", icon: "🛒",
      phrases: [
        { id: "m1", target: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",   pron: "ଏଷ୍ଟୁ ଆଗ଼ୁତ୍ତଦେ?",  meaning: "ଏହାର ଦାମ କେତେ?",  en: "How much does this cost?" },
        { id: "m2", target: "ಇದನ್ನು ಕೊಡಿ",       pron: "ଇଦନ୍ନୁ କୋଡ଼ି",      meaning: "ଏଇଟା ଦିଅ",         en: "Give me this one" },
        { id: "m3", target: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ",  pron: "ସ୍ୱଲ୍ପ କଡ଼ିମେ ମାଡ଼ି", meaning: "ଅଳ୍ପ ସସ୍ତା କର",   en: "Make it a bit cheaper" },
        { id: "m4", target: "ಇಲ್ಲಿ ಬನ್ನಿ",        pron: "ଇଲ୍ଲି ବନ୍ନ",         meaning: "ଏଠାକୁ ଆସ",        en: "Come here" },
        { id: "m5", target: "ರಶೀದಿ ಕೊಡಿ",        pron: "ରଶୀଦ଼ି କୋଡ଼ି",       meaning: "ରସିଦ ଦିଅ",         en: "Give me a receipt" }
      ]
    },
    {
      id: "travel", label: "ଯାତ୍ରା", icon: "🚌",
      phrases: [
        { id: "t1", target: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", pron: "ବସ୍ ନିଲ୍ଦ଼ାଣ ଏଲ୍ଲିଦ଼େ?", meaning: "ବସ ଷ୍ଟ୍ୟାଣ୍ଡ କୁଆଡ଼େ?", en: "Where is the bus stand?" },
        { id: "t2", target: "ನೇರ ಹೋಗಿ",           pron: "ନେର ହୋଗ଼ି",            meaning: "ସିଧା ଯାଅ",           en: "Go straight" },
        { id: "t3", target: "ಬಲಕ್ಕೆ ತಿರುಗಿ",       pron: "ବଲକ୍କେ ତ୍ ରୁଗ଼ି",      meaning: "ଡ଼ାହାଣ ହୁଅ",         en: "Turn right" },
        { id: "t4", target: "ಎಡಕ್ಕೆ ತಿರುಗಿ",       pron: "ଏଡ଼କ୍କେ ତ୍ ରୁଗ଼ି",      meaning: "ବାମ ହୁଅ",           en: "Turn left" },
        { id: "t5", target: "ನಿಲ್ಲಿ",              pron: "ନିଲ୍ଲି",              meaning: "ରୁକ",               en: "Stop" }
      ]
    },
    {
      id: "food", label: "ଖାଦ୍ୟ", icon: "🍛",
      phrases: [
        { id: "f1", target: "ನೀರು ಕೊಡಿ",          pron: "ନୀରୁ କୋଡ଼ି",          meaning: "ଜଳ ଦିଅ",            en: "Give me water" },
        { id: "f2", target: "ಚಹಾ ಕೊಡಿ",            pron: "ଚ ହା କୋଡ଼ି",          meaning: "ଚା ଦିଅ",            en: "Give me tea" },
        { id: "f3", target: "ಊಟ ರುಚಿಕರ",           pron: "ଊଟ ରୁଚ଼ ିକର",         meaning: "ଭୋଜନ ଭଲ",          en: "Food is tasty" },
        { id: "f4", target: "ಬಿಲ್ ಕೊಡಿ",           pron: "ବ ିଲ୍ କୋଡ଼ି",           meaning: "ବିଲ ଦିଅ",           en: "Give me the bill" }
      ]
    },
    {
      id: "emergency", label: "ଜରୁରୀ", icon: "🆘",
      phrases: [
        { id: "e1", target: "ಸಹಾಯ ಮಾಡಿ",          pron: "ସ ହାଯ ମାଡ଼ି",          meaning: "ସାହାଯ୍ୟ କର",        en: "Help me" },
        { id: "e2", target: "ಡಾಕ್ಟರ ಕರೆಯಿರಿ",     pron: "ଡ଼ ାକ୍ ଟର କ ରେଯ ିର ି", meaning: "ଡ଼ାକ୍ତର ଡ଼ାକ",     en: "Call a doctor" },
        { id: "e3", target: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ",     pron: "ପ ୋଲ ୀସ୍ କ ରେଯ ିର ି",  meaning: "ପୋଲିସ ଡ଼ାକ",        en: "Call the police" }
      ]
    }
  ]
};
