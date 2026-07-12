// বাংলা ↔ ಕನ್ನಡ learning content (for Kannada speakers learning Bengali)
// Each letter: target (Bengali), equiv (closest Kannada letter), pron (pronunciation in Kannada script), latin, note (optional Kannada note)
// Each phrase: id, target, pron, meaning, en; categories: id, label, icon, phrases
// NOTE: Bengali pronunciation differs from spelling — অ = "ô" (ಒ), স = mostly "ಶ್", য = "ಜ್"

window.DATA = {
  vowels: [
    { id: "v-o",  target: "অ", equiv: "ಅ", pron: "ಒ", latin: "ô",
      note: "ಬಂಗಾಳಿಯಲ್ಲಿ ಅ ಅಕ್ಷರ 'ಒ' ಎಂದು ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ!" },
    { id: "v-a",  target: "আ", equiv: "ಆ", pron: "ಆ", latin: "a" },
    { id: "v-i",  target: "ই", equiv: "ಇ", pron: "ಇ", latin: "i" },
    { id: "v-ii", target: "ঈ", equiv: "ಈ", pron: "ಇ", latin: "ī",
      note: "ಆಧುನಿಕ ಬಂಗಾಳಿಯಲ್ಲಿ ই ಮತ್ತು ঈ ಒಂದೇ ರೀತಿ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ." },
    { id: "v-u",  target: "উ", equiv: "ಉ", pron: "ಉ", latin: "u" },
    { id: "v-uu", target: "ঊ", equiv: "ಊ", pron: "ಉ", latin: "ū" },
    { id: "v-ri", target: "ঋ", equiv: "ಋ", pron: "ರಿ", latin: "ri" },
    { id: "v-e",  target: "এ", equiv: "ಏ", pron: "ಎ / ಯಾ", latin: "e/ê",
      note: "ಕೆಲವು ಪದಗಳಲ್ಲಿ 'ಯಾ' ಎಂದು ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ (ದ್ಯাখা = ದ್ಯಾಖಾ)." },
    { id: "v-oi", target: "ঐ", equiv: "ಐ", pron: "ಒಇ", latin: "oi" },
    { id: "v-oo", target: "ও", equiv: "ಓ", pron: "ಓ", latin: "o" },
    { id: "v-ou", target: "ঔ", equiv: "ಔ", pron: "ಒಉ", latin: "ou" }
  ],

  yogavaha: [
    { id: "y-ong", target: "অং", equiv: "ಅಂ", pron: "ಒಂ", latin: "ông" },
    { id: "y-oh",  target: "অঃ", equiv: "ಅಃ", pron: "ಒಃ", latin: "ôh" },
    { id: "y-chn", target: "অঁ", equiv: "—", pron: "ಒಁ (ಮೂಗಿನ ಧ್ವನಿ)", latin: "ỗ",
      note: "ಚಂದ್ರಬಿಂದು — ಮೂಗಿನಿಂದ ಉಚ್ಚರಿಸುವ ಸ್ವರ; ಕನ್ನಡದಲ್ಲಿ ಇಲ್ಲ." }
  ],

  consonants: [
    { id: "c-ka",  target: "ক", equiv: "ಕ", pron: "ಕ", latin: "kô" },
    { id: "c-kha", target: "খ", equiv: "ಖ", pron: "ಖ", latin: "khô" },
    { id: "c-ga",  target: "গ", equiv: "ಗ", pron: "ಗ", latin: "gô" },
    { id: "c-gha", target: "ঘ", equiv: "ಘ", pron: "ಘ", latin: "ghô" },
    { id: "c-nga", target: "ঙ", equiv: "ಙ", pron: "ಙ", latin: "ngô" },
    { id: "c-cha", target: "চ", equiv: "ಚ", pron: "ಚ", latin: "chô" },
    { id: "c-chh", target: "ছ", equiv: "ಛ", pron: "ಛ", latin: "chhô" },
    { id: "c-ja",  target: "জ", equiv: "ಜ", pron: "ಜ", latin: "jô" },
    { id: "c-jha", target: "ঝ", equiv: "ಝ", pron: "ಝ", latin: "jhô" },
    { id: "c-nya", target: "ঞ", equiv: "ಞ", pron: "ಞ", latin: "ñô" },
    { id: "c-tta", target: "ট", equiv: "ಟ", pron: "ಟ", latin: "ṭô" },
    { id: "c-tth", target: "ঠ", equiv: "ಠ", pron: "ಠ", latin: "ṭhô" },
    { id: "c-dda", target: "ড", equiv: "ಡ", pron: "ಡ", latin: "ḍô" },
    { id: "c-ddh", target: "ঢ", equiv: "ಢ", pron: "ಢ", latin: "ḍhô" },
    { id: "c-nna", target: "ণ", equiv: "ಣ", pron: "ನ", latin: "nô",
      note: "ಬಂಗಾಳಿಯಲ್ಲಿ ণ ಕೂಡ ನ ಎಂದೇ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ." },
    { id: "c-ta",  target: "ত", equiv: "ತ", pron: "ತ", latin: "tô" },
    { id: "c-tha", target: "থ", equiv: "ಥ", pron: "ಥ", latin: "thô" },
    { id: "c-da",  target: "দ", equiv: "ದ", pron: "ದ", latin: "dô" },
    { id: "c-dha", target: "ধ", equiv: "ಧ", pron: "ಧ", latin: "dhô" },
    { id: "c-na",  target: "ন", equiv: "ನ", pron: "ನ", latin: "nô" },
    { id: "c-pa",  target: "প", equiv: "ಪ", pron: "ಪ", latin: "pô" },
    { id: "c-pha", target: "ফ", equiv: "ಫ", pron: "ಫ", latin: "phô" },
    { id: "c-ba",  target: "ব", equiv: "ಬ", pron: "ಬ", latin: "bô",
      note: "ಕನ್ನಡದ ವ ಶಬ್ದವೂ ಬಂಗಾಳಿಯಲ್ಲಿ ব (ಬ) ಆಗುತ್ತದೆ." },
    { id: "c-bha", target: "ভ", equiv: "ಭ", pron: "ಭ", latin: "bhô" },
    { id: "c-ma",  target: "ম", equiv: "ಮ", pron: "ಮ", latin: "mô" },
    { id: "c-ja2", target: "য", equiv: "ಯ", pron: "ಜ", latin: "jô",
      note: "ಎಚ್ಚರ! য ಅಕ್ಷರ 'ಜ' ಎಂದು ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ, 'ಯ' ಅಲ್ಲ." },
    { id: "c-ra",  target: "র", equiv: "ರ", pron: "ರ", latin: "rô" },
    { id: "c-la",  target: "ল", equiv: "ಲ", pron: "ಲ", latin: "lô" },
    { id: "c-sha", target: "শ", equiv: "ಶ", pron: "ಶ", latin: "shô" },
    { id: "c-ssa", target: "ষ", equiv: "ಷ", pron: "ಶ", latin: "shô",
      note: "ಬಂಗಾಳಿಯಲ್ಲಿ ষ ಕೂಡ ಶ ಎಂದೇ ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ." },
    { id: "c-sa",  target: "স", equiv: "ಸ", pron: "ಶ / ಸ", latin: "sô/shô",
      note: "ಎಚ್ಚರ! স ಹೆಚ್ಚಾಗಿ 'ಶ' ಎಂದು ಉಚ್ಚರಿಸಲಾಗುತ್ತದೆ (সাত = ಶాత್ ಅಲ್ಲ, ಶಾತ್)." },
    { id: "c-ha",  target: "হ", equiv: "ಹ", pron: "ಹ", latin: "hô" },
    { id: "c-rra", target: "ড়", equiv: "—", pron: "ಡ಼ (ನಾಲಿಗೆ ತಿರುಗಿಸಿ ರ)", latin: "ṛô",
      note: "ಕನ್ನಡದಲ್ಲಿ ಇಲ್ಲ — ಡ ಮತ್ತು ರ ನಡುವಿನ ಧ್ವನಿ." },
    { id: "c-rrh", target: "ঢ়", equiv: "—", pron: "ಢ಼", latin: "ṛhô" },
    { id: "c-ya",  target: "য়", equiv: "ಯ", pron: "ಯ", latin: "yô" },
    { id: "c-t",   target: "ৎ", equiv: "ತ್", pron: "ತ್", latin: "t",
      note: "ಖಂಡ-ত — ಪದದ ಕೊನೆಯ ಅರ್ಧ ತ (হঠাৎ = ಹೊಠাত್)." }
  ],

  categories: [
    {
      id: "greetings", label: "ಶುಭಾಶಯಗಳು", icon: "👋",
      phrases: [
        { id: "g1", target: "নমস্কার", pron: "ನೊಮೋಶ್ಕার್", meaning: "ನಮಸ್ಕಾರ", en: "Hello" },
        { id: "g2", target: "কেমন আছেন?", pron: "ಕೇಮೊನ್ ಆಛೇನ್?", meaning: "ಹೇಗಿದ್ದೀರಾ?", en: "How are you?" },
        { id: "g3", target: "ভালো আছি", pron: "ಭಾಲೋ ಆಛಿ", meaning: "ಚೆನ್ನಾಗಿದ್ದೇನೆ", en: "I am fine" },
        { id: "g4", target: "আপনার নাম কী?", pron: "ಆಪ್ನಾರ್ ನಾಮ್ ಕೀ?", meaning: "ನಿಮ್ಮ ಹೆಸರೇನು?", en: "What is your name?" },
        { id: "g5", target: "আমার নাম...", pron: "ಆಮಾರ್ ನಾಮ್...", meaning: "ನನ್ನ ಹೆಸರು...", en: "My name is..." },
        { id: "g6", target: "ধন্যবাদ", pron: "ಧೊನ್ನೊಬಾದ್", meaning: "ಧನ್ಯವಾದ", en: "Thank you" },
        { id: "g7", target: "মাফ করবেন", pron: "ಮಾಫ್ ಕೊರ್ಬೆನ್", meaning: "ಕ್ಷಮಿಸಿ", en: "Sorry / Excuse me" },
        { id: "g8", target: "আবার দেখা হবে", pron: "ಆಬಾರ್ ದ್ಯಾಖಾ ಹೊಬೆ", meaning: "ಮತ್ತೆ ಸಿಗೋಣ", en: "See you again" },
        { id: "g9", target: "স্বাগতম", pron: "ಶాಗೊತೊಮ್", meaning: "ಸ್ವಾಗತ", en: "Welcome" },
        { id: "g10", target: "শুভ দিন", pron: "ಶುಭೊ ದಿನ್", meaning: "ಶುಭ ದಿನ", en: "Good day" }
      ]
    },
    {
      id: "essentials", label: "ಅಗತ್ಯ ಮಾತುಗಳು", icon: "💬",
      phrases: [
        { id: "e1", target: "হ্যাঁ", pron: "ಹ್ಯಾಂ", meaning: "ಹೌದು", en: "Yes" },
        { id: "e2", target: "না", pron: "ನಾ", meaning: "ಇಲ್ಲ", en: "No" },
        { id: "e3", target: "ঠিক আছে", pron: "ಠಿಕ್ ಆಛೆ", meaning: "ಸರಿ", en: "Okay" },
        { id: "e4", target: "জানি না", pron: "ಜಾನಿ ನಾ", meaning: "ಗೊತ್ತಿಲ್ಲ", en: "I don't know" },
        { id: "e5", target: "আমি বাংলা জানি না", pron: "ಆಮಿ ಬಾংಲಾ ಜಾನಿ ನಾ", meaning: "ನನಗೆ ಬೆಂಗಾಲಿ ಬರಲ್ಲ", en: "I don't know Bengali" },
        { id: "e6", target: "একটু একটু পারি", pron: "ಏಕ್ಟು ಏಕ್ಟು ಪಾರಿ", meaning: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ", en: "I know a little" },
        { id: "e7", target: "আস্তে বলুন", pron: "ಆಸ್ತೆ ಬೊಲುನ್", meaning: "ನಿಧಾನವಾಗಿ ಹೇಳಿ", en: "Please speak slowly" },
        { id: "e8", target: "বুঝিনি", pron: "ಬುಝಿನಿ", meaning: "ಅರ್ಥ ಆಗಲಿಲ್ಲ", en: "I didn't understand" },
        { id: "e9", target: "অসুবিধা নেই", pron: "ಒಶুಬಿಧಾ ನೇಯ್", meaning: "ಪರವಾಗಿಲ್ಲ", en: "No problem" },
        { id: "e10", target: "একটু", pron: "ಏಕ್ಟು", meaning: "ಸ್ವಲ್ಪ", en: "A little" }
      ]
    },
    {
      id: "numbers", label: "ಸಂಖ್ಯೆಗಳು", icon: "🔢",
      phrases: [
        { id: "n1", target: "এক", pron: "ಏಕ್", meaning: "ಒಂದು (೧)", en: "One" },
        { id: "n2", target: "দুই", pron: "ದುಇ", meaning: "ಎರಡು (೨)", en: "Two" },
        { id: "n3", target: "তিন", pron: "ತಿನ್", meaning: "ಮೂರು (೩)", en: "Three" },
        { id: "n4", target: "চার", pron: "ಚಾರ್", meaning: "ನಾಲ್ಕು (೪)", en: "Four" },
        { id: "n5", target: "পাঁচ", pron: "ಪಾಂಚ್", meaning: "ಐದು (೫)", en: "Five" },
        { id: "n6", target: "ছয়", pron: "ಛೊಯ್", meaning: "ಆರು (೬)", en: "Six" },
        { id: "n7", target: "সাত", pron: "ಶಾತ್", meaning: "ಏಳು (೭)", en: "Seven" },
        { id: "n8", target: "আট", pron: "ಆಟ್", meaning: "ಎಂಟು (೮)", en: "Eight" },
        { id: "n9", target: "নয়", pron: "ನೊಯ್", meaning: "ಒಂಬತ್ತು (೯)", en: "Nine" },
        { id: "n10", target: "দশ", pron: "ದೊಶ್", meaning: "ಹತ್ತು (೧೦)", en: "Ten" },
        { id: "n11", target: "বিশ", pron: "ಬಿಶ್", meaning: "ಇಪ್ಪತ್ತು (೨೦)", en: "Twenty" },
        { id: "n12", target: "একশো", pron: "ಏಕ್‌ಶೋ", meaning: "ನೂರು (೧೦೦)", en: "Hundred" }
      ]
    },
    {
      id: "market", label: "ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಚೌಕಾಸಿ", icon: "🛒",
      phrases: [
        { id: "m1", target: "এটা কত?", pron: "ಏಟಾ ಕೊತೋ?", meaning: "ಇದು ಎಷ್ಟು?", en: "How much is this?" },
        { id: "m2", target: "খুব বেশি", pron: "ಖುಬ್ ಬೇಶಿ", meaning: "ತುಂಬಾ ಜಾಸ್ತಿ", en: "Too much" },
        { id: "m3", target: "একটু কমান", pron: "ಏಕ್ಟು ಕೊಮಾನ್", meaning: "ಕಡಿಮೆ ಮಾಡಿ", en: "Please reduce" },
        { id: "m4", target: "চাই", pron: "ಚಾಯ್", meaning: "ಬೇಕು", en: "I want" },
        { id: "m5", target: "চাই না", pron: "ಚಾಯ್ ನಾ", meaning: "ಬೇಡ", en: "I don't want" },
        { id: "m6", target: "খুচরো আছে?", pron: "ಖುಚ್ರೋ ಆಛೆ?", meaning: "ಚಿಲ್ಲರೆ ಇದೆಯಾ?", en: "Do you have change?" },
        { id: "m7", target: "সবজি", pron: "ಶೊಬ್ಜಿ", meaning: "ತರಕಾರಿ", en: "Vegetables" },
        { id: "m8", target: "ফল", pron: "ಫೊಲ್", meaning: "ಹಣ್ಣು", en: "Fruit" },
        { id: "m9", target: "এক কেজি দিন", pron: "ಏಕ್ ಕೇಜಿ ದಿನ್", meaning: "ಒಂದು ಕೆಜಿ ಕೊಡಿ", en: "Give one kg" },
        { id: "m10", target: "মোট কত?", pron: "ಮೋಟ್ ಕೊತೋ?", meaning: "ಎಲ್ಲಾ ಸೇರಿ ಎಷ್ಟು?", en: "How much altogether?" }
      ]
    },
    {
      id: "travel", label: "ಪ್ರಯಾಣ", icon: "🚕",
      phrases: [
        { id: "t1", target: "কোথায়?", pron: "ಕೋಥಾಯ್?", meaning: "ಎಲ್ಲಿ?", en: "Where?" },
        { id: "t2", target: "এখানে থামান", pron: "ಏಖಾನೆ ಥಾಮಾನ್", meaning: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", en: "Stop here" },
        { id: "t3", target: "সোজা যান", pron: "ಶೋಜಾ ಜಾನ್", meaning: "ನೇರವಾಗಿ ಹೋಗಿ", en: "Go straight" },
        { id: "t4", target: "ডান দিকে", pron: "ಡಾನ್ ದಿಕೆ", meaning: "ಬಲಕ್ಕೆ", en: "To the right" },
        { id: "t5", target: "বাঁ দিকে", pron: "ಬಾಁ ದಿಕೆ", meaning: "ಎಡಕ್ಕೆ", en: "To the left" },
        { id: "t6", target: "কত দূর?", pron: "ಕೊತೋ ದೂರ್?", meaning: "ಎಷ್ಟು ದೂರ?", en: "How far?" },
        { id: "t7", target: "বাস স্ট্যান্ড কোথায়?", pron: "ಬಾಸ್ ಸ್ಟ್ಯಾಂಡ್ ಕೋಥಾಯ್?", meaning: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?", en: "Where is the bus stand?" },
        { id: "t8", target: "আস্তে চালান", pron: "ಆಸ್ತೆ ಚಾಲಾನ್", meaning: "ನಿಧಾನವಾಗಿ ಹೋಗಿ", en: "Go slowly" }
      ]
    },
    {
      id: "food", label: "ಆಹಾರ", icon: "🍛",
      phrases: [
        { id: "f1", target: "ভাত", pron: "ಭಾತ್", meaning: "ಅನ್ನ", en: "Rice / meal" },
        { id: "f2", target: "জল", pron: "ಜೊಲ್", meaning: "ನೀರು", en: "Water" },
        { id: "f3", target: "মাছ", pron: "ಮಾಛ್", meaning: "ಮೀನು", en: "Fish" },
        { id: "f4", target: "মিষ্টি", pron: "ಮಿಶ್ಟಿ", meaning: "ಸಿಹಿ", en: "Sweets" },
        { id: "f5", target: "চা দিন", pron: "ಚಾ ದಿನ್", meaning: "ಟೀ ಕೊಡಿ", en: "Give me tea" },
        { id: "f6", target: "ঝাল কম", pron: "ಝಾಲ್ ಕೊಮ್", meaning: "ಖಾರ ಕಡಿಮೆ", en: "Less spicy" },
        { id: "f7", target: "খুব সুস্বাদু", pron: "ಖুಬ್ ಶুಶ್ಶಾದು", meaning: "ತುಂಬಾ ರುಚಿ", en: "Very tasty" },
        { id: "f8", target: "বিল দিন", pron: "ಬಿಲ್ ದಿನ್", meaning: "ಬಿಲ್ ಕೊಡಿ", en: "Give the bill" },
        { id: "f9", target: "আর একটু দিন", pron: "ಆರ್ ಏಕ್ಟು ದಿನ್", meaning: "ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೊಡಿ", en: "Give a bit more" },
        { id: "f10", target: "যথেষ্ট", pron: "ಜೊಥೇಶ್ಟೋ", meaning: "ಸಾಕು", en: "Enough" }
      ]
    },
    {
      id: "emergency", label: "ತುರ್ತು", icon: "🆘",
      phrases: [
        { id: "x1", target: "সাহায্য করুন!", pron: "ಶಾಹಾಜ್ಜೋ ಕೊರುನ್!", meaning: "ಸಹಾಯ ಮಾಡಿ!", en: "Help!" },
        { id: "x2", target: "ডাক্তার চাই", pron: "ಡಾಕ್ತಾರ್ ಚಾಯ್", meaning: "ಡಾಕ್ಟರ್ ಬೇಕು", en: "I need a doctor" },
        { id: "x3", target: "হাসপাতাল কোথায়?", pron: "ಹಾಶ್ಪಾತಾಲ್ ಕೋಥಾಯ್?", meaning: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿ?", en: "Where is the hospital?" },
        { id: "x4", target: "পুলিশ ডাকুন", pron: "ಪুಲಿಶ್ ಡಾಕುನ್", meaning: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ", en: "Call the police" },
        { id: "x5", target: "শরীর খারাপ", pron: "ಶೊರೀರ್ ಖಾರಾಪ್", meaning: "ನನಗೆ ಹುಷಾರಿಲ್ಲ", en: "I am not well" },
        { id: "x6", target: "ওষুধের দোকান কোথায়?", pron: "ಒಶুಧೇರ್ ದೋಕಾನ್ ಕೋಥಾಯ್?", meaning: "ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿ?", en: "Where is the pharmacy?" },
        { id: "x7", target: "রাস্তা হারিয়ে ফেলেছি", pron: "ರಾಸ್ತಾ ಹಾರಿಯೆ ಫೆಲೆಛಿ", meaning: "ದಾರಿ ತಪ್ಪಿದೆ", en: "I am lost" },
        { id: "x8", target: "ফোন করতে পারি?", pron: "ಫೋನ್ ಕೊರ್ತೆ ಪಾರಿ?", meaning: "ಫೋನ್ ಮಾಡಬಹುದಾ?", en: "May I make a call?" }
      ]
    }
  ]
};
