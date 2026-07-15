// ಕನ್ನಡ ↔ ગુજરાતી learning content (for Gujarati speakers learning Kannada)
// target = Kannada, equiv = closest Gujarati letter, pron = pronunciation in Gujarati script

window.DATA = {
  vowels: [
    { id: "v-a",   target: "ಅ", equiv: "અ", pron: "અ",           latin: "a" },
    { id: "v-aa",  target: "ಆ", equiv: "આ", pron: "આ",           latin: "ā" },
    { id: "v-i",   target: "ಇ", equiv: "ઇ", pron: "ઇ",           latin: "i" },
    { id: "v-ii",  target: "ಈ", equiv: "ઈ", pron: "ઈ",           latin: "ī" },
    { id: "v-u",   target: "ಉ", equiv: "ઉ", pron: "ઉ",           latin: "u" },
    { id: "v-uu",  target: "ಊ", equiv: "ઊ", pron: "ઊ",           latin: "ū" },
    { id: "v-e",   target: "ಎ", equiv: "એ", pron: "એ (ટૂંકું)",   latin: "e",  note: "કન્નડમાં ટૂંકું અને લાંબું એ અલગ છે — ગુજરાતીમાં ફક્ત એક જ એ" },
    { id: "v-ee",  target: "ಏ", equiv: "એ", pron: "એ (લાંબું)",   latin: "ē" },
    { id: "v-ai",  target: "ಐ", equiv: "ઐ", pron: "ઐ",           latin: "ai" },
    { id: "v-o",   target: "ಒ", equiv: "ઓ", pron: "ઓ (ટૂંકું)",   latin: "o",  note: "કન્નડમાં ટૂંકું અને લાંબું ઓ અલગ છે — ગુજરાતીમાં ફક્ત એક જ ઓ" },
    { id: "v-oo",  target: "ಓ", equiv: "ઓ", pron: "ઓ (લાંબું)",   latin: "ō" },
    { id: "v-au",  target: "ಔ", equiv: "ઔ", pron: "ઔ",           latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "ಅಂ", equiv: "અં", pron: "અં", latin: "aṁ" },
    { id: "y-ah", target: "ಅಃ", equiv: "અઃ", pron: "અઃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",   target: "ಕ",  equiv: "ક",  pron: "ક",  latin: "ka" },
    { id: "c-kha",  target: "ಖ",  equiv: "ખ",  pron: "ખ",  latin: "kha" },
    { id: "c-ga",   target: "ಗ",  equiv: "ગ",  pron: "ગ",  latin: "ga" },
    { id: "c-gha",  target: "ಘ",  equiv: "ઘ",  pron: "ઘ",  latin: "gha" },
    { id: "c-nga",  target: "ಙ",  equiv: "ઙ",  pron: "ઙ",  latin: "ṅa" },
    { id: "c-cha",  target: "ಚ",  equiv: "ચ",  pron: "ચ",  latin: "ca" },
    { id: "c-chha", target: "ಛ",  equiv: "છ",  pron: "છ",  latin: "cha" },
    { id: "c-ja",   target: "ಜ",  equiv: "જ",  pron: "જ",  latin: "ja" },
    { id: "c-jha",  target: "ಝ",  equiv: "ઝ",  pron: "ઝ",  latin: "jha" },
    { id: "c-nya",  target: "ಞ",  equiv: "ઞ",  pron: "ઞ",  latin: "ña" },
    { id: "c-tta",  target: "ಟ",  equiv: "ટ",  pron: "ટ",  latin: "ṭa" },
    { id: "c-ttha", target: "ಠ",  equiv: "ઠ",  pron: "ઠ",  latin: "ṭha" },
    { id: "c-dda",  target: "ಡ",  equiv: "ડ",  pron: "ડ",  latin: "ḍa" },
    { id: "c-ddha", target: "ಢ",  equiv: "ઢ",  pron: "ઢ",  latin: "ḍha" },
    { id: "c-nna",  target: "ಣ",  equiv: "ણ",  pron: "ણ",  latin: "ṇa" },
    { id: "c-ta",   target: "ತ",  equiv: "ત",  pron: "ત",  latin: "ta" },
    { id: "c-tha",  target: "ಥ",  equiv: "થ",  pron: "થ",  latin: "tha" },
    { id: "c-da",   target: "ದ",  equiv: "દ",  pron: "દ",  latin: "da" },
    { id: "c-dha",  target: "ಧ",  equiv: "ધ",  pron: "ધ",  latin: "dha" },
    { id: "c-na",   target: "ನ",  equiv: "ન",  pron: "ન",  latin: "na" },
    { id: "c-pa",   target: "ಪ",  equiv: "પ",  pron: "પ",  latin: "pa" },
    { id: "c-pha",  target: "ಫ",  equiv: "ફ",  pron: "ફ",  latin: "pha" },
    { id: "c-ba",   target: "ಬ",  equiv: "બ",  pron: "બ",  latin: "ba" },
    { id: "c-bha",  target: "ಭ",  equiv: "ભ",  pron: "ભ",  latin: "bha" },
    { id: "c-ma",   target: "ಮ",  equiv: "મ",  pron: "મ",  latin: "ma" },
    { id: "c-ya",   target: "ಯ",  equiv: "ય",  pron: "ય",  latin: "ya" },
    { id: "c-ra",   target: "ರ",  equiv: "ર",  pron: "ર",  latin: "ra" },
    { id: "c-la",   target: "ಲ",  equiv: "લ",  pron: "લ",  latin: "la" },
    { id: "c-va",   target: "ವ",  equiv: "વ",  pron: "વ",  latin: "va" },
    { id: "c-sha",  target: "ಶ",  equiv: "શ",  pron: "શ",  latin: "śa" },
    { id: "c-ssa",  target: "ಷ",  equiv: "ષ",  pron: "ષ",  latin: "ṣa" },
    { id: "c-sa",   target: "ಸ",  equiv: "સ",  pron: "સ",  latin: "sa" },
    { id: "c-ha",   target: "ಹ",  equiv: "હ",  pron: "હ",  latin: "ha" },
    { id: "c-lla",  target: "ಳ",  equiv: "ળ",  pron: "ળ",  latin: "ḷa", note: "ગુજરાતી ળ આની સાથે મળે છે" }
  ],

  categories: [
    {
      id: "greet", label: "શુભેચ્છા", icon: "🙏",
      phrases: [
        { id: "g1", target: "ನಮಸ್ಕಾರ",         pron: "નમસ્કાર",         meaning: "નમસ્તે",           en: "Hello / Greetings" },
        { id: "g2", target: "ಧನ್ಯವಾದ",          pron: "ધન્યવાદ",         meaning: "આભાર",             en: "Thank you" },
        { id: "g3", target: "ಹೇಗಿದ್ದೀರಾ?",       pron: "હેગિદ્દીરા?",      meaning: "કેમ છો?",          en: "How are you?" },
        { id: "g4", target: "ಚೆನ್ನಾಗಿದ್ದೇನೆ",     pron: "ચેન્નાગિદ્દેને",    meaning: "મજામાં છું",       en: "I am fine" },
        { id: "g5", target: "ಹೌದು",              pron: "હૌદુ",             meaning: "હા",               en: "Yes" },
        { id: "g6", target: "ಇಲ್ಲ",              pron: "ઇલ્લ",             meaning: "ના",               en: "No" },
        { id: "g7", target: "ಬನ್ನಿ",             pron: "બન્નિ",            meaning: "આવો",              en: "Come / Welcome" },
        { id: "g8", target: "ಹೋಗಿ",              pron: "હોગિ",             meaning: "જાવ",              en: "Go / Goodbye" }
      ]
    },
    {
      id: "market", label: "બજાર", icon: "🛒",
      phrases: [
        { id: "m1", target: "ಎಷ್ಟು ಆಗುತ್ತದೆ?",   pron: "એષ્ટુ આગુત્તદે?",   meaning: "આનો ભાવ શું છે?",  en: "How much does this cost?" },
        { id: "m2", target: "ಇದನ್ನು ಕೊಡಿ",       pron: "ઇદન્નુ કોદિ",       meaning: "આ આપો",            en: "Give me this" },
        { id: "m3", target: "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ",  pron: "સ્વલ્પ કડિમે માડિ", meaning: "થોડું સસ્તું કરો",  en: "Make it cheaper" },
        { id: "m4", target: "ರಶೀದಿ ಕೊಡಿ",        pron: "રશીદિ કોદિ",       meaning: "રસીદ આપો",         en: "Give a receipt" }
      ]
    },
    {
      id: "travel", label: "પ્રવાસ", icon: "🚌",
      phrases: [
        { id: "t1", target: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", pron: "બસ નિલ્દાણ એલ્લિદે?", meaning: "બસ સ્ટેન્ડ ક્યાં છે?", en: "Where is the bus stand?" },
        { id: "t2", target: "ನೇರ ಹೋಗಿ",           pron: "નેર હોગિ",           meaning: "સીધા જાવ",            en: "Go straight" },
        { id: "t3", target: "ಬಲಕ್ಕೆ ತಿರುಗಿ",       pron: "બલક્કે તિરુગિ",       meaning: "જમણે વળો",            en: "Turn right" },
        { id: "t4", target: "ಎಡಕ್ಕೆ ತಿರುಗಿ",       pron: "એડક્કે તિરુગિ",       meaning: "ડાબે વળો",            en: "Turn left" },
        { id: "t5", target: "ನಿಲ್ಲಿ",              pron: "નિલ્લિ",             meaning: "ઊભા રહો",             en: "Stop" }
      ]
    },
    {
      id: "food", label: "ખોરાક", icon: "🍛",
      phrases: [
        { id: "f1", target: "ನೀರು ಕೊಡಿ",          pron: "નીરુ કોડિ",          meaning: "પાણી આપો",         en: "Give me water" },
        { id: "f2", target: "ಚಹಾ ಕೊಡಿ",           pron: "ચહા કોડિ",           meaning: "ચા આપો",           en: "Give me tea" },
        { id: "f3", target: "ಊಟ ರುಚಿಕರ",           pron: "ઊટ રુચિકર",          meaning: "ખાવાનું સ્વાદિષ્ટ",  en: "The food is tasty" },
        { id: "f4", target: "ಬಿಲ್ ಕೊಡಿ",           pron: "બિલ કોડિ",           meaning: "બિલ આપો",          en: "Give me the bill" }
      ]
    },
    {
      id: "emergency", label: "કટોકટી", icon: "🆘",
      phrases: [
        { id: "e1", target: "ಸಹಾಯ ಮಾಡಿ",          pron: "સહાય માડિ",          meaning: "મદદ કરો",          en: "Help me" },
        { id: "e2", target: "ಡಾಕ್ಟರ ಕರೆಯಿರಿ",     pron: "ડાક્ટર કરેયિરિ",     meaning: "ડોક્ટરને બોલાવો",  en: "Call a doctor" },
        { id: "e3", target: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ",     pron: "પોલીસ કરેયિરિ",      meaning: "પોલીસને બોલાવો",   en: "Call the police" }
      ]
    }
  ]
};
