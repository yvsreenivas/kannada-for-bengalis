// ಕನ್ನಡ ↔ বাংলা learning content
// Each letter: kn (Kannada), bnEquiv (closest Bengali letter), bnPron (pronunciation in Bengali script), latin, note (optional Bengali note)
// Each phrase: id, kn, bnPron, bnMeaning, en

window.DATA = {
  vowels: [
    { id: "v-a",  kn: "ಅ", bnEquiv: "অ", bnPron: "অ",  latin: "a" },
    { id: "v-aa", kn: "ಆ", bnEquiv: "আ", bnPron: "আ",  latin: "ā" },
    { id: "v-i",  kn: "ಇ", bnEquiv: "ই", bnPron: "ই",  latin: "i" },
    { id: "v-ii", kn: "ಈ", bnEquiv: "ঈ", bnPron: "ঈ",  latin: "ī" },
    { id: "v-u",  kn: "ಉ", bnEquiv: "উ", bnPron: "উ",  latin: "u" },
    { id: "v-uu", kn: "ಊ", bnEquiv: "ঊ", bnPron: "ঊ",  latin: "ū" },
    { id: "v-ru", kn: "ಋ", bnEquiv: "ঋ", bnPron: "রু", latin: "ṛ" },
    { id: "v-e",  kn: "ಎ", bnEquiv: "এ", bnPron: "এ (হ্রস্ব)", latin: "e",
      note: "বাংলায় হ্রস্ব-দীর্ঘ এ-র পার্থক্য নেই; কন্নড়ে ಎ ছোট, ಏ লম্বা।" },
    { id: "v-ee", kn: "ಏ", bnEquiv: "এ", bnPron: "এ (দীর্ঘ)", latin: "ē" },
    { id: "v-ai", kn: "ಐ", bnEquiv: "ঐ", bnPron: "ঐ",  latin: "ai" },
    { id: "v-o",  kn: "ಒ", bnEquiv: "ও", bnPron: "ও (হ্রস্ব)", latin: "o",
      note: "কন্নড়ে ಒ ছোট, ಓ লম্বা — বাংলায় দুটোই ও।" },
    { id: "v-oo", kn: "ಓ", bnEquiv: "ও", bnPron: "ও (দীর্ঘ)", latin: "ō" },
    { id: "v-au", kn: "ಔ", bnEquiv: "ঔ", bnPron: "ঔ",  latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", kn: "ಅಂ", bnEquiv: "অং", bnPron: "অং", latin: "aṁ" },
    { id: "y-ah", kn: "ಅಃ", bnEquiv: "অঃ", bnPron: "অঃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",  kn: "ಕ", bnEquiv: "ক", bnPron: "ক",  latin: "ka" },
    { id: "c-kha", kn: "ಖ", bnEquiv: "খ", bnPron: "খ",  latin: "kha" },
    { id: "c-ga",  kn: "ಗ", bnEquiv: "গ", bnPron: "গ",  latin: "ga" },
    { id: "c-gha", kn: "ಘ", bnEquiv: "ঘ", bnPron: "ঘ",  latin: "gha" },
    { id: "c-nga", kn: "ಙ", bnEquiv: "ঙ", bnPron: "ঙ",  latin: "ṅa" },
    { id: "c-cha", kn: "ಚ", bnEquiv: "চ", bnPron: "চ",  latin: "ca" },
    { id: "c-chha",kn: "ಛ", bnEquiv: "ছ", bnPron: "ছ",  latin: "cha" },
    { id: "c-ja",  kn: "ಜ", bnEquiv: "জ", bnPron: "জ",  latin: "ja" },
    { id: "c-jha", kn: "ಝ", bnEquiv: "ঝ", bnPron: "ঝ",  latin: "jha" },
    { id: "c-nya", kn: "ಞ", bnEquiv: "ঞ", bnPron: "ঞ",  latin: "ña" },
    { id: "c-tta", kn: "ಟ", bnEquiv: "ট", bnPron: "ট",  latin: "ṭa" },
    { id: "c-ttha",kn: "ಠ", bnEquiv: "ঠ", bnPron: "ঠ",  latin: "ṭha" },
    { id: "c-dda", kn: "ಡ", bnEquiv: "ড", bnPron: "ড",  latin: "ḍa" },
    { id: "c-ddha",kn: "ಢ", bnEquiv: "ঢ", bnPron: "ঢ",  latin: "ḍha" },
    { id: "c-nna", kn: "ಣ", bnEquiv: "ণ", bnPron: "ণ",  latin: "ṇa" },
    { id: "c-ta",  kn: "ತ", bnEquiv: "ত", bnPron: "ত",  latin: "ta" },
    { id: "c-tha", kn: "ಥ", bnEquiv: "থ", bnPron: "থ",  latin: "tha" },
    { id: "c-da",  kn: "ದ", bnEquiv: "দ", bnPron: "দ",  latin: "da" },
    { id: "c-dha", kn: "ಧ", bnEquiv: "ধ", bnPron: "ধ",  latin: "dha" },
    { id: "c-na",  kn: "ನ", bnEquiv: "ন", bnPron: "ন",  latin: "na" },
    { id: "c-pa",  kn: "ಪ", bnEquiv: "প", bnPron: "প",  latin: "pa" },
    { id: "c-pha", kn: "ಫ", bnEquiv: "ফ", bnPron: "ফ",  latin: "pha" },
    { id: "c-ba",  kn: "ಬ", bnEquiv: "ব", bnPron: "ব",  latin: "ba" },
    { id: "c-bha", kn: "ಭ", bnEquiv: "ভ", bnPron: "ভ",  latin: "bha" },
    { id: "c-ma",  kn: "ಮ", bnEquiv: "ম", bnPron: "ম",  latin: "ma" },
    { id: "c-ya",  kn: "ಯ", bnEquiv: "য", bnPron: "ইয়া (য়-এর মতো)", latin: "ya",
      note: "উচ্চারণ বাংলা য়-এর মতো, য (জ)-এর মতো নয়।" },
    { id: "c-ra",  kn: "ರ", bnEquiv: "র", bnPron: "র",  latin: "ra" },
    { id: "c-la",  kn: "ಲ", bnEquiv: "ল", bnPron: "ল",  latin: "la" },
    { id: "c-va",  kn: "ವ", bnEquiv: "ব/ভ", bnPron: "ওয়া (ইংরেজি v)", latin: "va",
      note: "বাংলায় আলাদা ব-ফলা ধ্বনি; ইংরেজি v-এর কাছাকাছি।" },
    { id: "c-sha", kn: "ಶ", bnEquiv: "শ", bnPron: "শ",  latin: "śa" },
    { id: "c-ssa", kn: "ಷ", bnEquiv: "ষ", bnPron: "ষ",  latin: "ṣa" },
    { id: "c-sa",  kn: "ಸ", bnEquiv: "স", bnPron: "স (দন্ত্য)", latin: "sa" },
    { id: "c-ha",  kn: "ಹ", bnEquiv: "হ", bnPron: "হ",  latin: "ha" },
    { id: "c-lla", kn: "ಳ", bnEquiv: "—", bnPron: "ল (মূর্ধন্য)", latin: "ḷa",
      note: "বাংলায় নেই — জিভ উল্টে উচ্চারিত ল।" }
  ],

  categories: [
    {
      id: "greetings", bn: "শুভেচ্ছা", icon: "👋",
      phrases: [
        { id: "g1", kn: "ನಮಸ್ಕಾರ", bnPron: "নমস্কার", bnMeaning: "নমস্কার", en: "Hello" },
        { id: "g2", kn: "ಹೇಗಿದ್ದೀರಾ?", bnPron: "হেগিদ্দীরা?", bnMeaning: "কেমন আছেন?", en: "How are you?" },
        { id: "g3", kn: "ಚೆನ್ನಾಗಿದ್ದೀನಿ", bnPron: "চেন্নাগিদ্দীনি", bnMeaning: "আমি ভালো আছি", en: "I am fine" },
        { id: "g4", kn: "ನಿಮ್ಮ ಹೆಸರೇನು?", bnPron: "নিম্মা হেসারেনু?", bnMeaning: "আপনার নাম কী?", en: "What is your name?" },
        { id: "g5", kn: "ನನ್ನ ಹೆಸರು...", bnPron: "নন্না হেসারু...", bnMeaning: "আমার নাম...", en: "My name is..." },
        { id: "g6", kn: "ಧನ್ಯವಾದ", bnPron: "ধন্যবাদ", bnMeaning: "ধন্যবাদ", en: "Thank you" },
        { id: "g7", kn: "ಕ್ಷಮಿಸಿ", bnPron: "ক্ষমিসি", bnMeaning: "মাফ করবেন", en: "Sorry / Excuse me" },
        { id: "g8", kn: "ಮತ್ತೆ ಸಿಗೋಣ", bnPron: "মত্তে সিগোণা", bnMeaning: "আবার দেখা হবে", en: "See you again" },
        { id: "g9", kn: "ಸ್ವಾಗತ", bnPron: "স্বাগত", bnMeaning: "স্বাগতম", en: "Welcome" },
        { id: "g10", kn: "ಶುಭ ದಿನ", bnPron: "শুভ দিনা", bnMeaning: "শুভ দিন", en: "Good day" }
      ]
    },
    {
      id: "essentials", bn: "দরকারি কথা", icon: "💬",
      phrases: [
        { id: "e1", kn: "ಹೌದು", bnPron: "হৌদু", bnMeaning: "হ্যাঁ", en: "Yes" },
        { id: "e2", kn: "ಇಲ್ಲ", bnPron: "ইল্লা", bnMeaning: "না", en: "No" },
        { id: "e3", kn: "ಸರಿ", bnPron: "সরি", bnMeaning: "ঠিক আছে", en: "Okay" },
        { id: "e4", kn: "ಗೊತ್ತಿಲ್ಲ", bnPron: "গোত্তিল্লা", bnMeaning: "জানি না", en: "I don't know" },
        { id: "e5", kn: "ಕನ್ನಡ ಬರಲ್ಲ", bnPron: "কন্নড়া বরল্লা", bnMeaning: "আমি কন্নড় জানি না", en: "I don't know Kannada" },
        { id: "e6", kn: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ", bnPron: "স্বল্পা স্বল্পা বরুত্তে", bnMeaning: "একটু একটু পারি", en: "I know a little" },
        { id: "e7", kn: "ನಿಧಾನವಾಗಿ ಹೇಳಿ", bnPron: "নিধানাবাগি হেলি", bnMeaning: "আস্তে বলুন", en: "Please speak slowly" },
        { id: "e8", kn: "ಅರ್ಥ ಆಗಲಿಲ್ಲ", bnPron: "অর্থা আগলিল্লা", bnMeaning: "বুঝতে পারিনি", en: "I didn't understand" },
        { id: "e9", kn: "ಪರವಾಗಿಲ್ಲ", bnPron: "পরবাগিল্লা", bnMeaning: "অসুবিধা নেই", en: "No problem" },
        { id: "e10", kn: "ಸ್ವಲ್ಪ", bnPron: "স্বল্পা", bnMeaning: "একটু", en: "A little" }
      ]
    },
    {
      id: "numbers", bn: "সংখ্যা", icon: "🔢",
      phrases: [
        { id: "n1", kn: "ಒಂದು", bnPron: "ওন্দু", bnMeaning: "এক (১)", en: "One" },
        { id: "n2", kn: "ಎರಡು", bnPron: "এরাডু", bnMeaning: "দুই (২)", en: "Two" },
        { id: "n3", kn: "ಮೂರು", bnPron: "মূরু", bnMeaning: "তিন (৩)", en: "Three" },
        { id: "n4", kn: "ನಾಲ್ಕು", bnPron: "নাল্কু", bnMeaning: "চার (৪)", en: "Four" },
        { id: "n5", kn: "ಐದು", bnPron: "ঐদু", bnMeaning: "পাঁচ (৫)", en: "Five" },
        { id: "n6", kn: "ಆರು", bnPron: "আরু", bnMeaning: "ছয় (৬)", en: "Six" },
        { id: "n7", kn: "ಏಳು", bnPron: "এলু", bnMeaning: "সাত (৭)", en: "Seven" },
        { id: "n8", kn: "ಎಂಟು", bnPron: "এন্টু", bnMeaning: "আট (৮)", en: "Eight" },
        { id: "n9", kn: "ಒಂಬತ್ತು", bnPron: "ওম্বত্তু", bnMeaning: "নয় (৯)", en: "Nine" },
        { id: "n10", kn: "ಹತ್ತು", bnPron: "হত্তু", bnMeaning: "দশ (১০)", en: "Ten" },
        { id: "n11", kn: "ಇಪ್ಪತ್ತು", bnPron: "ইপ্পত্তু", bnMeaning: "কুড়ি (২০)", en: "Twenty" },
        { id: "n12", kn: "ನೂರು", bnPron: "নূরু", bnMeaning: "একশো (১০০)", en: "Hundred" }
      ]
    },
    {
      id: "market", bn: "বাজার ও দরদাম", icon: "🛒",
      phrases: [
        { id: "m1", kn: "ಇದು ಎಷ್ಟು?", bnPron: "ইদু এষ্টু?", bnMeaning: "এটা কত?", en: "How much is this?" },
        { id: "m2", kn: "ತುಂಬಾ ಜಾಸ್ತಿ", bnPron: "তুম্বা জাস্তি", bnMeaning: "খুব বেশি", en: "Too much" },
        { id: "m3", kn: "ಕಡಿಮೆ ಮಾಡಿ", bnPron: "কডিমে মাডি", bnMeaning: "একটু কমান", en: "Please reduce" },
        { id: "m4", kn: "ಬೇಕು", bnPron: "বেকু", bnMeaning: "চাই", en: "I want" },
        { id: "m5", kn: "ಬೇಡ", bnPron: "বেডা", bnMeaning: "চাই না", en: "I don't want" },
        { id: "m6", kn: "ಚಿಲ್ಲರೆ ಇದೆಯಾ?", bnPron: "চিল্লরে ইদেয়া?", bnMeaning: "খুচরো আছে?", en: "Do you have change?" },
        { id: "m7", kn: "ತರಕಾರಿ", bnPron: "তরকারি", bnMeaning: "সবজি", en: "Vegetables" },
        { id: "m8", kn: "ಹಣ್ಣು", bnPron: "হণ্ণু", bnMeaning: "ফল", en: "Fruit" },
        { id: "m9", kn: "ಒಂದು ಕೆಜಿ ಕೊಡಿ", bnPron: "ওন্দু কেজি কোডি", bnMeaning: "এক কেজি দিন", en: "Give one kg" },
        { id: "m10", kn: "ಎಲ್ಲಾ ಸೇರಿ ಎಷ್ಟು?", bnPron: "এল্লা সেরি এষ্টু?", bnMeaning: "সব মিলিয়ে কত?", en: "How much altogether?" }
      ]
    },
    {
      id: "travel", bn: "যাতায়াত", icon: "🛺",
      phrases: [
        { id: "t1", kn: "ಎಲ್ಲಿ?", bnPron: "এল্লি?", bnMeaning: "কোথায়?", en: "Where?" },
        { id: "t2", kn: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", bnPron: "ইল্লি নিল্লিসি", bnMeaning: "এখানে থামান", en: "Stop here" },
        { id: "t3", kn: "ನೇರವಾಗಿ ಹೋಗಿ", bnPron: "নেরাবাগি হোগি", bnMeaning: "সোজা যান", en: "Go straight" },
        { id: "t4", kn: "ಬಲಕ್ಕೆ", bnPron: "বলাক্কে", bnMeaning: "ডান দিকে", en: "To the right" },
        { id: "t5", kn: "ಎಡಕ್ಕೆ", bnPron: "এডাক্কে", bnMeaning: "বাঁ দিকে", en: "To the left" },
        { id: "t6", kn: "ಮೀಟರ್ ಹಾಕಿ", bnPron: "মিটার হাকি", bnMeaning: "মিটার চালু করুন", en: "Put the meter on" },
        { id: "t7", kn: "ಎಷ್ಟು ದೂರ?", bnPron: "এষ্টু দূরা?", bnMeaning: "কত দূর?", en: "How far?" },
        { id: "t8", kn: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?", bnPron: "বাস নিল্দাণা এল্লি?", bnMeaning: "বাস স্ট্যান্ড কোথায়?", en: "Where is the bus stand?" },
        { id: "t9", kn: "ನಿಧಾನವಾಗಿ ಹೋಗಿ", bnPron: "নিধানাবাগি হোগি", bnMeaning: "আস্তে চালান", en: "Go slowly" }
      ]
    },
    {
      id: "food", bn: "খাবার", icon: "🍛",
      phrases: [
        { id: "f1", kn: "ಊಟ", bnPron: "ঊটা", bnMeaning: "ভাত-খাবার (মিল)", en: "Meal" },
        { id: "f2", kn: "ತಿಂಡಿ", bnPron: "তিন্ডি", bnMeaning: "জলখাবার", en: "Breakfast / snack" },
        { id: "f3", kn: "ನೀರು", bnPron: "নীরু", bnMeaning: "জল", en: "Water" },
        { id: "f4", kn: "ಕಾಫಿ ಕೊಡಿ", bnPron: "কাফি কোডি", bnMeaning: "কফি দিন", en: "Give me coffee" },
        { id: "f5", kn: "ಟೀ ಕೊಡಿ", bnPron: "টি কোডি", bnMeaning: "চা দিন", en: "Give me tea" },
        { id: "f6", kn: "ಖಾರ ಕಡಿಮೆ", bnPron: "খারা কডিমে", bnMeaning: "ঝাল কম", en: "Less spicy" },
        { id: "f7", kn: "ರುಚಿಯಾಗಿದೆ", bnPron: "রুচিয়াগিদে", bnMeaning: "খুব সুস্বাদু", en: "It's tasty" },
        { id: "f8", kn: "ಬಿಲ್ ಕೊಡಿ", bnPron: "বিল কোডি", bnMeaning: "বিল দিন", en: "Give the bill" },
        { id: "f9", kn: "ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೊಡಿ", bnPron: "ইন্নূ স্বল্পা কোডি", bnMeaning: "আর একটু দিন", en: "Give a bit more" },
        { id: "f10", kn: "ಸಾಕು", bnPron: "সাকু", bnMeaning: "যথেষ্ট", en: "Enough" }
      ]
    },
    {
      id: "emergency", bn: "জরুরি", icon: "🆘",
      phrases: [
        { id: "x1", kn: "ಸಹಾಯ ಮಾಡಿ!", bnPron: "সহায়া মাডি!", bnMeaning: "সাহায্য করুন!", en: "Help!" },
        { id: "x2", kn: "ಡಾಕ್ಟರ್ ಬೇಕು", bnPron: "ডাক্টার বেকু", bnMeaning: "ডাক্তার চাই", en: "I need a doctor" },
        { id: "x3", kn: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿ?", bnPron: "আসপত্রে এল্লি?", bnMeaning: "হাসপাতাল কোথায়?", en: "Where is the hospital?" },
        { id: "x4", kn: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ", bnPron: "পোলিস করেয়িরি", bnMeaning: "পুলিশ ডাকুন", en: "Call the police" },
        { id: "x5", kn: "ನನಗೆ ಹುಷಾರಿಲ್ಲ", bnPron: "ননগে হুষারিল্লা", bnMeaning: "আমার শরীর খারাপ", en: "I am not well" },
        { id: "x6", kn: "ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿ?", bnPron: "ঔষধি অঙ্গডি এল্লি?", bnMeaning: "ওষুধের দোকান কোথায়?", en: "Where is the pharmacy?" },
        { id: "x7", kn: "ದಾರಿ ತಪ್ಪಿದೆ", bnPron: "দারি তপ্পিদে", bnMeaning: "রাস্তা হারিয়ে ফেলেছি", en: "I am lost" },
        { id: "x8", kn: "ಫೋನ್ ಮಾಡಬಹುದಾ?", bnPron: "ফোন মাডবহুদা?", bnMeaning: "ফোন করতে পারি?", en: "May I make a call?" }
      ]
    }
  ]
};
