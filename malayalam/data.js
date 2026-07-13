// ಮಲಯಾಳಂ ↔ ಕನ್ನಡ learning content (for Kannada speakers learning Malayalam)
// Each letter: target (Malayalam), equiv (closest Kannada letter), pron (pronunciation in Kannada script), latin, note (optional Kannada note)
// Each phrase: id, target, pron, meaning, en; categories: id, label, icon, phrases
// NOTE: Kannada & Malayalam aksharas map almost 1:1 (both Southern Dravidian, with short/long e & o).

window.DATA = {
  vowels: [
    { id: "v-a",  target: "അ", equiv: "ಅ", pron: "ಅ", latin: "a" },
    { id: "v-aa", target: "ആ", equiv: "ಆ", pron: "ಆ", latin: "ā" },
    { id: "v-i",  target: "ഇ", equiv: "ಇ", pron: "ಇ", latin: "i" },
    { id: "v-ii", target: "ഈ", equiv: "ಈ", pron: "ಈ", latin: "ī" },
    { id: "v-u",  target: "ഉ", equiv: "ಉ", pron: "ಉ", latin: "u" },
    { id: "v-uu", target: "ഊ", equiv: "ಊ", pron: "ಊ", latin: "ū" },
    { id: "v-ru", target: "ഋ", equiv: "ಋ", pron: "ಋ", latin: "ṛ" },
    { id: "v-e",  target: "എ", equiv: "ಎ", pron: "ಎ (ಹ್ರಸ್ವ)", latin: "e" },
    { id: "v-ee", target: "ഏ", equiv: "ಏ", pron: "ಏ (ದೀರ್ಘ)", latin: "ē" },
    { id: "v-ai", target: "ഐ", equiv: "ಐ", pron: "ಐ", latin: "ai" },
    { id: "v-o",  target: "ഒ", equiv: "ಒ", pron: "ಒ (ಹ್ರಸ್ವ)", latin: "o" },
    { id: "v-oo", target: "ഓ", equiv: "ಓ", pron: "ಓ (ದೀರ್ಘ)", latin: "ō" },
    { id: "v-au", target: "ഔ", equiv: "ಔ", pron: "ಔ", latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "അം", equiv: "ಅಂ", pron: "ಅಂ", latin: "aṁ" },
    { id: "y-ah", target: "അഃ", equiv: "ಅಃ", pron: "ಅಃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",  target: "ക", equiv: "ಕ", pron: "ಕ", latin: "ka" },
    { id: "c-kha", target: "ഖ", equiv: "ಖ", pron: "ಖ", latin: "kha" },
    { id: "c-ga",  target: "ഗ", equiv: "ಗ", pron: "ಗ", latin: "ga" },
    { id: "c-gha", target: "ഘ", equiv: "ಘ", pron: "ಘ", latin: "gha" },
    { id: "c-nga", target: "ങ", equiv: "ಙ", pron: "ಙ", latin: "ṅa" },
    { id: "c-cha", target: "ച", equiv: "ಚ", pron: "ಚ", latin: "ca" },
    { id: "c-chha",target: "ഛ", equiv: "ಛ", pron: "ಛ", latin: "cha" },
    { id: "c-ja",  target: "ജ", equiv: "ಜ", pron: "ಜ", latin: "ja" },
    { id: "c-jha", target: "ഝ", equiv: "ಝ", pron: "ಝ", latin: "jha" },
    { id: "c-nya", target: "ഞ", equiv: "ಞ", pron: "ಞ", latin: "ña" },
    { id: "c-tta", target: "ട", equiv: "ಟ", pron: "ಟ", latin: "ṭa" },
    { id: "c-ttha",target: "ഠ", equiv: "ಠ", pron: "ಠ", latin: "ṭha" },
    { id: "c-dda", target: "ഡ", equiv: "ಡ", pron: "ಡ", latin: "ḍa" },
    { id: "c-ddha",target: "ഢ", equiv: "ಢ", pron: "ಢ", latin: "ḍha" },
    { id: "c-nna", target: "ണ", equiv: "ಣ", pron: "ಣ", latin: "ṇa" },
    { id: "c-ta",  target: "ത", equiv: "ತ", pron: "ತ", latin: "ta" },
    { id: "c-tha", target: "ഥ", equiv: "ಥ", pron: "ಥ", latin: "tha" },
    { id: "c-da",  target: "ദ", equiv: "ದ", pron: "ದ", latin: "da" },
    { id: "c-dha", target: "ധ", equiv: "ಧ", pron: "ಧ", latin: "dha" },
    { id: "c-na",  target: "ന", equiv: "ನ", pron: "ನ", latin: "na" },
    { id: "c-pa",  target: "പ", equiv: "ಪ", pron: "ಪ", latin: "pa" },
    { id: "c-pha", target: "ഫ", equiv: "ಫ", pron: "ಫ", latin: "pha" },
    { id: "c-ba",  target: "ബ", equiv: "ಬ", pron: "ಬ", latin: "ba" },
    { id: "c-bha", target: "ഭ", equiv: "ಭ", pron: "ಭ", latin: "bha" },
    { id: "c-ma",  target: "മ", equiv: "ಮ", pron: "ಮ", latin: "ma" },
    { id: "c-ya",  target: "യ", equiv: "ಯ", pron: "ಯ", latin: "ya" },
    { id: "c-ra",  target: "ര", equiv: "ರ", pron: "ರ", latin: "ra" },
    { id: "c-la",  target: "ല", equiv: "ಲ", pron: "ಲ", latin: "la" },
    { id: "c-va",  target: "വ", equiv: "ವ", pron: "ವ", latin: "va" },
    { id: "c-sha", target: "ശ", equiv: "ಶ", pron: "ಶ", latin: "śa" },
    { id: "c-ssa", target: "ഷ", equiv: "ಷ", pron: "ಷ", latin: "ṣa" },
    { id: "c-sa",  target: "സ", equiv: "ಸ", pron: "ಸ", latin: "sa" },
    { id: "c-ha",  target: "ഹ", equiv: "ಹ", pron: "ಹ", latin: "ha" },
    { id: "c-lla", target: "ള", equiv: "ಳ", pron: "ಳ (ಮೂರ್ಧನ್ಯ ಲ)", latin: "ḷa" },
    { id: "c-zha", target: "ഴ", equiv: "—", pron: "ೞ (ನಾಲಿಗೆ ಸುರುಳಿ ಲ/ೞ)", latin: "ẓha",
      note: "ಮಲಯಾಳಂ ವಿಶೇಷ ಅಕ್ಷರ — ಕನ್ನಡದಲ್ಲಿ ಸಮಾನವಿಲ್ಲ; ನಾಲಿಗೆ ಹಿಂದೆ ಮಡಚಿ 'ೞ' ರೀತಿ." },
    { id: "c-rra", target: "റ", equiv: "—", pron: "ರ಼ (ಗಟ್ಟಿ ರ)", latin: "ṟa",
      note: "ಗಟ್ಟಿ/ಅಲ್ವಿಯೊಲಾರ್ ರ — ಕನ್ನಡ ರ ಗಿಂತ ಒತ್ತಿ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ." }
  ],

  categories: [
    {
      id: "greetings", label: "ಶುಭಾಶಯಗಳು", icon: "👋",
      phrases: [
        { id: "g1", target: "നമസ്കാരം", pron: "ನಮಸ್ಕಾರಂ", meaning: "ನಮಸ್ಕಾರ", en: "Hello" },
        { id: "g2", target: "സുഖമാണോ?", pron: "ಸುಖಮಾಣೋ?", meaning: "ಹೇಗಿದ್ದೀರಾ?", en: "How are you?" },
        { id: "g3", target: "സുഖമാണ്", pron: "ಸುಖಮಾಣ್", meaning: "ಚೆನ್ನಾಗಿದ್ದೇನೆ", en: "I am fine" },
        { id: "g4", target: "താങ്കളുടെ പേരെന്ത്?", pron: "ತಾಂಗಳುಡೆ ಪೇರೆಂತ್?", meaning: "ನಿಮ್ಮ ಹೆಸರೇನು?", en: "What is your name?" },
        { id: "g5", target: "എന്റെ പേര്...", pron: "ಎಂಟೆ ಪೇರ್...", meaning: "ನನ್ನ ಹೆಸರು...", en: "My name is..." },
        { id: "g6", target: "നന്ദി", pron: "ನಂದಿ", meaning: "ಧನ್ಯವಾದ", en: "Thank you" },
        { id: "g7", target: "ക്ഷമിക്കണം", pron: "ಕ್ಷಮಿಕ್ಕಣಂ", meaning: "ಕ್ಷಮಿಸಿ", en: "Sorry / Excuse me" },
        { id: "g8", target: "വീണ്ടും കാണാം", pron: "ವೀಂಡುಂ ಕಾಣಾಂ", meaning: "ಮತ್ತೆ ಸಿಗೋಣ", en: "See you again" },
        { id: "g9", target: "സ്വാഗതം", pron: "ಸ್ವಾಗತಂ", meaning: "ಸ್ವಾಗತ", en: "Welcome" },
        { id: "g10", target: "നല്ല ദിവസം", pron: "ನಲ್ಲ ದಿವಸಂ", meaning: "ಶುಭ ದಿನ", en: "Good day" }
      ]
    },
    {
      id: "essentials", label: "ಅಗತ್ಯ ಮಾತುಗಳು", icon: "💬",
      phrases: [
        { id: "e1", target: "അതെ", pron: "ಅತೆ", meaning: "ಹೌದು", en: "Yes" },
        { id: "e2", target: "അല്ല", pron: "ಅಲ್ಲ", meaning: "ಇಲ್ಲ", en: "No" },
        { id: "e3", target: "ശരി", pron: "ಶರಿ", meaning: "ಸರಿ", en: "Okay" },
        { id: "e4", target: "അറിയില്ല", pron: "ಅರಿಯಿಲ್ಲ", meaning: "ಗೊತ್ತಿಲ್ಲ", en: "I don't know" },
        { id: "e5", target: "എനിക്ക് മലയാളം അറിയില്ല", pron: "ಎನಿಕ್ಕ್ ಮಲಯಾಳಂ ಅರಿಯಿಲ್ಲ", meaning: "ನನಗೆ ಮಲಯಾಳಂ ಬರಲ್ಲ", en: "I don't know Malayalam" },
        { id: "e6", target: "കുറച്ച് അറിയാം", pron: "ಕುರಚ್ಚ್ ಅರಿಯಾಂ", meaning: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ", en: "I know a little" },
        { id: "e7", target: "പതുക്കെ പറയൂ", pron: "ಪತುಕ್ಕೆ ಪರಯೂ", meaning: "ನಿಧಾನವಾಗಿ ಹೇಳಿ", en: "Please speak slowly" },
        { id: "e8", target: "മനസ്സിലായില്ല", pron: "ಮನಸ್ಸಿಲಾಯಿಲ್ಲ", meaning: "ಅರ್ಥ ಆಗಲಿಲ್ಲ", en: "I didn't understand" },
        { id: "e9", target: "കുഴപ്പമില്ല", pron: "ಕುೞಪ್ಪಮಿಲ್ಲ", meaning: "ಪರವಾಗಿಲ್ಲ", en: "No problem" },
        { id: "e10", target: "കുറച്ച്", pron: "ಕುರಚ್ಚ್", meaning: "ಸ್ವಲ್ಪ", en: "A little" }
      ]
    },
    {
      id: "numbers", label: "ಸಂಖ್ಯೆಗಳು", icon: "🔢",
      phrases: [
        { id: "n1", target: "ഒന്ന്", pron: "ಒನ್ನ್", meaning: "ಒಂದು (೧)", en: "One" },
        { id: "n2", target: "രണ്ട്", pron: "ರಂಡ್", meaning: "ಎರಡು (೨)", en: "Two" },
        { id: "n3", target: "മൂന്ന്", pron: "ಮೂನ್ನ್", meaning: "ಮೂರು (೩)", en: "Three" },
        { id: "n4", target: "നാല്", pron: "ನಾಲ್", meaning: "ನಾಲ್ಕು (೪)", en: "Four" },
        { id: "n5", target: "അഞ്ച്", pron: "ಅಂಚ್", meaning: "ಐದು (೫)", en: "Five" },
        { id: "n6", target: "ആറ്", pron: "ಆರ್", meaning: "ಆರು (೬)", en: "Six" },
        { id: "n7", target: "ഏഴ്", pron: "ಏೞ್ (ಏಳ್)", meaning: "ಏಳು (೭)", en: "Seven" },
        { id: "n8", target: "എട്ട്", pron: "ಎಟ್ಟ್", meaning: "ಎಂಟು (೮)", en: "Eight" },
        { id: "n9", target: "ഒമ്പത്", pron: "ಒಂಬತ್", meaning: "ಒಂಬತ್ತು (೯)", en: "Nine" },
        { id: "n10", target: "പത്ത്", pron: "ಪತ್ತ್", meaning: "ಹತ್ತು (೧೦)", en: "Ten" },
        { id: "n11", target: "ഇരുപത്", pron: "ಇರುಪತ್", meaning: "ಇಪ್ಪತ್ತು (೨೦)", en: "Twenty" },
        { id: "n12", target: "നൂറ്", pron: "ನೂರ್", meaning: "ನೂರು (೧೦೦)", en: "Hundred" }
      ]
    },
    {
      id: "market", label: "ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಚೌಕಾಸಿ", icon: "🛒",
      phrases: [
        { id: "m1", target: "ഇത് എത്ര?", pron: "ಇತ್ ಎತ್ರ?", meaning: "ಇದು ಎಷ್ಟು?", en: "How much is this?" },
        { id: "m2", target: "വളരെ കൂടുതൽ", pron: "ವಳರೆ ಕೂಡುತಲ್", meaning: "ತುಂಬಾ ಜಾಸ್ತಿ", en: "Too much" },
        { id: "m3", target: "കുറയ്ക്കൂ", pron: "ಕುರಯ್ಕ್ಕೂ", meaning: "ಕಡಿಮೆ ಮಾಡಿ", en: "Please reduce" },
        { id: "m4", target: "വേണം", pron: "ವೇಣಂ", meaning: "ಬೇಕು", en: "I want" },
        { id: "m5", target: "വേണ്ട", pron: "ವೇಂಡ", meaning: "ಬೇಡ", en: "I don't want" },
        { id: "m6", target: "ചില്ലറയുണ്ടോ?", pron: "ಚಿಲ್ಲರಯುಂಡೋ?", meaning: "ಚಿಲ್ಲರೆ ಇದೆಯಾ?", en: "Do you have change?" },
        { id: "m7", target: "പച്ചക്കറി", pron: "ಪಚ್ಚಕ್ಕರಿ", meaning: "ತರಕಾರಿ", en: "Vegetables" },
        { id: "m8", target: "പഴം", pron: "ಪೞಂ (ಪಳಂ)", meaning: "ಹಣ್ಣು", en: "Fruit" },
        { id: "m9", target: "ഒരു കിലോ തരൂ", pron: "ಒರು ಕಿಲೋ ತರೂ", meaning: "ಒಂದು ಕೆಜಿ ಕೊಡಿ", en: "Give one kg" },
        { id: "m10", target: "മൊത്തം എത്ര?", pron: "ಮೊತ್ತಂ ಎತ್ರ?", meaning: "ಎಲ್ಲಾ ಸೇರಿ ಎಷ್ಟು?", en: "How much altogether?" }
      ]
    },
    {
      id: "travel", label: "ಪ್ರಯಾಣ", icon: "🛺",
      phrases: [
        { id: "t1", target: "എവിടെ?", pron: "ಎವಿಡೆ?", meaning: "ಎಲ್ಲಿ?", en: "Where?" },
        { id: "t2", target: "ഇവിടെ നിർത്തൂ", pron: "ಇವಿಡೆ ನಿರ್ತ್ತೂ", meaning: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", en: "Stop here" },
        { id: "t3", target: "നേരെ പോകൂ", pron: "ನೇರೆ ಪೋಕೂ", meaning: "ನೇರವಾಗಿ ಹೋಗಿ", en: "Go straight" },
        { id: "t4", target: "വലത്തോട്ട്", pron: "ವಲತ್ತೋಟ್ಟ್", meaning: "ಬಲಕ್ಕೆ", en: "To the right" },
        { id: "t5", target: "ഇടത്തോട്ട്", pron: "ಇಡತ್ತೋಟ್ಟ್", meaning: "ಎಡಕ್ಕೆ", en: "To the left" },
        { id: "t6", target: "എത്ര ദൂരം?", pron: "ಎತ್ರ ದೂರಂ?", meaning: "ಎಷ್ಟು ದೂರ?", en: "How far?" },
        { id: "t7", target: "ബസ് സ്റ്റാൻഡ് എവിടെ?", pron: "ಬಸ್ ಸ್ಟಾಂಡ್ ಎವಿಡೆ?", meaning: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?", en: "Where is the bus stand?" },
        { id: "t8", target: "പതുക്കെ പോകൂ", pron: "ಪತುಕ್ಕೆ ಪೋಕೂ", meaning: "ನಿಧಾನವಾಗಿ ಹೋಗಿ", en: "Go slowly" }
      ]
    },
    {
      id: "food", label: "ಆಹಾರ", icon: "🍛",
      phrases: [
        { id: "f1", target: "ഊണ്", pron: "ಊಣ್", meaning: "ಊಟ", en: "Meal" },
        { id: "f2", target: "ചോറ്", pron: "ಚೋರ್", meaning: "ಅನ್ನ", en: "Cooked rice" },
        { id: "f3", target: "വെള്ളം", pron: "ವೆಳ್ಳಂ", meaning: "ನೀರು", en: "Water" },
        { id: "f4", target: "കാപ്പി തരൂ", pron: "ಕಾಪ್ಪಿ ತರೂ", meaning: "ಕಾಫಿ ಕೊಡಿ", en: "Give me coffee" },
        { id: "f5", target: "ചായ തരൂ", pron: "ಚಾಯ ತರೂ", meaning: "ಟೀ ಕೊಡಿ", en: "Give me tea" },
        { id: "f6", target: "എരിവ് കുറച്ച്", pron: "ಎರಿವ್ ಕುರಚ್ಚ್", meaning: "ಖಾರ ಕಡಿಮೆ", en: "Less spicy" },
        { id: "f7", target: "രുചിയുണ്ട്", pron: "ರುಚಿಯುಂಡ್", meaning: "ರುಚಿಯಾಗಿದೆ", en: "It's tasty" },
        { id: "f8", target: "ബിൽ തരൂ", pron: "ಬಿಲ್ ತರೂ", meaning: "ಬಿಲ್ ಕೊಡಿ", en: "Give the bill" },
        { id: "f9", target: "കുറച്ച് കൂടി തരൂ", pron: "ಕುರಚ್ಚ್ ಕೂಡಿ ತರೂ", meaning: "ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೊಡಿ", en: "Give a bit more" },
        { id: "f10", target: "മതി", pron: "ಮತಿ", meaning: "ಸಾಕು", en: "Enough" }
      ]
    },
    {
      id: "emergency", label: "ತುರ್ತು", icon: "🆘",
      phrases: [
        { id: "x1", target: "സഹായിക്കൂ!", pron: "ಸಹಾಯಿಕ್ಕೂ!", meaning: "ಸಹಾಯ ಮಾಡಿ!", en: "Help!" },
        { id: "x2", target: "ഡോക്ടറെ വേണം", pron: "ಡೋಕ್ಟರೆ ವೇಣಂ", meaning: "ಡಾಕ್ಟರ್ ಬೇಕು", en: "I need a doctor" },
        { id: "x3", target: "ആശുപത്രി എവിടെ?", pron: "ಆಶುಪತ್ರಿ ಎವಿಡೆ?", meaning: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿ?", en: "Where is the hospital?" },
        { id: "x4", target: "പോലീസിനെ വിളിക്കൂ", pron: "ಪೋಲೀಸಿನೆ ವಿಳಿಕ್ಕೂ", meaning: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ", en: "Call the police" },
        { id: "x5", target: "എനിക്ക് സുഖമില്ല", pron: "ಎನಿಕ್ಕ್ ಸುಖಮಿಲ್ಲ", meaning: "ನನಗೆ ಹುಷಾರಿಲ್ಲ", en: "I am not well" },
        { id: "x6", target: "മരുന്ന് കട എവിടെ?", pron: "ಮರುನ್ನ್ ಕಡ ಎವಿಡೆ?", meaning: "ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿ?", en: "Where is the pharmacy?" },
        { id: "x7", target: "വഴി തെറ്റി", pron: "ವೞಿ ತೆಟ್ಟಿ", meaning: "ದಾರಿ ತಪ್ಪಿದೆ", en: "I am lost" },
        { id: "x8", target: "ഒരു കോൾ ചെയ്യാമോ?", pron: "ಒರು ಕೋಳ್ ಚೆಯ್ಯಾಮೋ?", meaning: "ಫೋನ್ ಮಾಡಬಹುದಾ?", en: "May I make a call?" }
      ]
    }
  ]
};
