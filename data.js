// ಕನ್ನಡ ↔ বাংলা learning content
// Each letter: target (Kannada), equiv (closest Bengali letter), pron (pronunciation in Bengali script), latin, note (optional Bengali note)
// Each phrase: id, target, pron, meaning, en; categories: id, label, icon, phrases

window.DATA = {
  vowels: [
    { id: "v-a",  target: "ಅ", equiv:"অ", pron:"অ",  latin: "a" },
    { id: "v-aa", target: "ಆ", equiv:"আ", pron:"আ",  latin: "ā" },
    { id: "v-i",  target: "ಇ", equiv:"ই", pron:"ই",  latin: "i" },
    { id: "v-ii", target: "ಈ", equiv:"ঈ", pron:"ঈ",  latin: "ī" },
    { id: "v-u",  target: "ಉ", equiv:"উ", pron:"উ",  latin: "u" },
    { id: "v-uu", target: "ಊ", equiv:"ঊ", pron:"ঊ",  latin: "ū" },
    { id: "v-ru", target: "ಋ", equiv:"ঋ", pron:"রু", latin: "ṛ" },
    { id: "v-e",  target: "ಎ", equiv:"এ", pron:"এ (হ্রস্ব)", latin: "e",
      note: "বাংলায় হ্রস্ব-দীর্ঘ এ-র পার্থক্য নেই; কন্নড়ে ಎ ছোট, ಏ লম্বা।" },
    { id: "v-ee", target: "ಏ", equiv:"এ", pron:"এ (দীর্ঘ)", latin: "ē" },
    { id: "v-ai", target: "ಐ", equiv:"ঐ", pron:"ঐ",  latin: "ai" },
    { id: "v-o",  target: "ಒ", equiv:"ও", pron:"ও (হ্রস্ব)", latin: "o",
      note: "কন্নড়ে ಒ ছোট, ಓ লম্বা — বাংলায় দুটোই ও।" },
    { id: "v-oo", target: "ಓ", equiv:"ও", pron:"ও (দীর্ঘ)", latin: "ō" },
    { id: "v-au", target: "ಔ", equiv:"ঔ", pron:"ঔ",  latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "ಅಂ", equiv:"অং", pron:"অং", latin: "aṁ" },
    { id: "y-ah", target: "ಅಃ", equiv:"অঃ", pron:"অঃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",  target: "ಕ", equiv:"ক", pron:"ক",  latin: "ka" },
    { id: "c-kha", target: "ಖ", equiv:"খ", pron:"খ",  latin: "kha" },
    { id: "c-ga",  target: "ಗ", equiv:"গ", pron:"গ",  latin: "ga" },
    { id: "c-gha", target: "ಘ", equiv:"ঘ", pron:"ঘ",  latin: "gha" },
    { id: "c-nga", target: "ಙ", equiv:"ঙ", pron:"ঙ",  latin: "ṅa" },
    { id: "c-cha", target: "ಚ", equiv:"চ", pron:"চ",  latin: "ca" },
    { id: "c-chha",target: "ಛ", equiv:"ছ", pron:"ছ",  latin: "cha" },
    { id: "c-ja",  target: "ಜ", equiv:"জ", pron:"জ",  latin: "ja" },
    { id: "c-jha", target: "ಝ", equiv:"ঝ", pron:"ঝ",  latin: "jha" },
    { id: "c-nya", target: "ಞ", equiv:"ঞ", pron:"ঞ",  latin: "ña" },
    { id: "c-tta", target: "ಟ", equiv:"ট", pron:"ট",  latin: "ṭa" },
    { id: "c-ttha",target: "ಠ", equiv:"ঠ", pron:"ঠ",  latin: "ṭha" },
    { id: "c-dda", target: "ಡ", equiv:"ড", pron:"ড",  latin: "ḍa" },
    { id: "c-ddha",target: "ಢ", equiv:"ঢ", pron:"ঢ",  latin: "ḍha" },
    { id: "c-nna", target: "ಣ", equiv:"ণ", pron:"ণ",  latin: "ṇa" },
    { id: "c-ta",  target: "ತ", equiv:"ত", pron:"ত",  latin: "ta" },
    { id: "c-tha", target: "ಥ", equiv:"থ", pron:"থ",  latin: "tha" },
    { id: "c-da",  target: "ದ", equiv:"দ", pron:"দ",  latin: "da" },
    { id: "c-dha", target: "ಧ", equiv:"ধ", pron:"ধ",  latin: "dha" },
    { id: "c-na",  target: "ನ", equiv:"ন", pron:"ন",  latin: "na" },
    { id: "c-pa",  target: "ಪ", equiv:"প", pron:"প",  latin: "pa" },
    { id: "c-pha", target: "ಫ", equiv:"ফ", pron:"ফ",  latin: "pha" },
    { id: "c-ba",  target: "ಬ", equiv:"ব", pron:"ব",  latin: "ba" },
    { id: "c-bha", target: "ಭ", equiv:"ভ", pron:"ভ",  latin: "bha" },
    { id: "c-ma",  target: "ಮ", equiv:"ম", pron:"ম",  latin: "ma" },
    { id: "c-ya",  target: "ಯ", equiv:"য", pron:"ইয়া (য়-এর মতো)", latin: "ya",
      note: "উচ্চারণ বাংলা য়-এর মতো, য (জ)-এর মতো নয়।" },
    { id: "c-ra",  target: "ರ", equiv:"র", pron:"র",  latin: "ra" },
    { id: "c-la",  target: "ಲ", equiv:"ল", pron:"ল",  latin: "la" },
    { id: "c-va",  target: "ವ", equiv:"ব/ভ", pron:"ওয়া (ইংরেজি v)", latin: "va",
      note: "বাংলায় আলাদা ব-ফলা ধ্বনি; ইংরেজি v-এর কাছাকাছি।" },
    { id: "c-sha", target: "ಶ", equiv:"শ", pron:"শ",  latin: "śa" },
    { id: "c-ssa", target: "ಷ", equiv:"ষ", pron:"ষ",  latin: "ṣa" },
    { id: "c-sa",  target: "ಸ", equiv:"স", pron:"স (দন্ত্য)", latin: "sa" },
    { id: "c-ha",  target: "ಹ", equiv:"হ", pron:"হ",  latin: "ha" },
    { id: "c-lla", target: "ಳ", equiv:"—", pron:"ল (মূর্ধন্য)", latin: "ḷa",
      note: "বাংলায় নেই — জিভ উল্টে উচ্চারিত ল।" }
  ],

  categories: [
    {
      id: "greetings", label: "শুভেচ্ছা", icon: "👋",
      phrases: [
        { id: "g1", target: "ನಮಸ್ಕಾರ", pron:"নমস্কার", meaning:"নমস্কার", en: "Hello" },
        { id: "g2", target: "ಹೇಗಿದ್ದೀರಾ?", pron:"হেগিদ্দীরা?", meaning:"কেমন আছেন?", en: "How are you?" },
        { id: "g3", target: "ಚೆನ್ನಾಗಿದ್ದೀನಿ", pron:"চেন্নাগিদ্দীনি", meaning:"আমি ভালো আছি", en: "I am fine" },
        { id: "g4", target: "ನಿಮ್ಮ ಹೆಸರೇನು?", pron:"নিম্মা হেসারেনু?", meaning:"আপনার নাম কী?", en: "What is your name?" },
        { id: "g5", target: "ನನ್ನ ಹೆಸರು...", pron:"নন্না হেসারু...", meaning:"আমার নাম...", en: "My name is..." },
        { id: "g6", target: "ಧನ್ಯವಾದ", pron:"ধন্যবাদ", meaning:"ধন্যবাদ", en: "Thank you" },
        { id: "g7", target: "ಕ್ಷಮಿಸಿ", pron:"ক্ষমিসি", meaning:"মাফ করবেন", en: "Sorry / Excuse me" },
        { id: "g8", target: "ಮತ್ತೆ ಸಿಗೋಣ", pron:"মত্তে সিগোণা", meaning:"আবার দেখা হবে", en: "See you again" },
        { id: "g9", target: "ಸ್ವಾಗತ", pron:"স্বাগত", meaning:"স্বাগতম", en: "Welcome" },
        { id: "g10", target: "ಶುಭ ದಿನ", pron:"শুভ দিনা", meaning:"শুভ দিন", en: "Good day" }
      ]
    },
    {
      id: "essentials", label: "দরকারি কথা", icon: "💬",
      phrases: [
        { id: "e1", target: "ಹೌದು", pron:"হৌদু", meaning:"হ্যাঁ", en: "Yes" },
        { id: "e2", target: "ಇಲ್ಲ", pron:"ইল্লা", meaning:"না", en: "No" },
        { id: "e3", target: "ಸರಿ", pron:"সরি", meaning:"ঠিক আছে", en: "Okay" },
        { id: "e4", target: "ಗೊತ್ತಿಲ್ಲ", pron:"গোত্তিল্লা", meaning:"জানি না", en: "I don't know" },
        { id: "e5", target: "ಕನ್ನಡ ಬರಲ್ಲ", pron:"কন্নড়া বরল্লা", meaning:"আমি কন্নড় জানি না", en: "I don't know Kannada" },
        { id: "e6", target: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ", pron:"স্বল্পা স্বল্পা বরুত্তে", meaning:"একটু একটু পারি", en: "I know a little" },
        { id: "e7", target: "ನಿಧಾನವಾಗಿ ಹೇಳಿ", pron:"নিধানাবাগি হেলি", meaning:"আস্তে বলুন", en: "Please speak slowly" },
        { id: "e8", target: "ಅರ್ಥ ಆಗಲಿಲ್ಲ", pron:"অর্থা আগলিল্লা", meaning:"বুঝতে পারিনি", en: "I didn't understand" },
        { id: "e9", target: "ಪರವಾಗಿಲ್ಲ", pron:"পরবাগিল্লা", meaning:"অসুবিধা নেই", en: "No problem" },
        { id: "e10", target: "ಸ್ವಲ್ಪ", pron:"স্বল্পা", meaning:"একটু", en: "A little" }
      ]
    },
    {
      id: "numbers", label: "সংখ্যা", icon: "🔢",
      phrases: [
        { id: "n1", target: "ಒಂದು", pron:"ওন্দু", meaning:"এক (১)", en: "One" },
        { id: "n2", target: "ಎರಡು", pron:"এরাডু", meaning:"দুই (২)", en: "Two" },
        { id: "n3", target: "ಮೂರು", pron:"মূরু", meaning:"তিন (৩)", en: "Three" },
        { id: "n4", target: "ನಾಲ್ಕು", pron:"নাল্কু", meaning:"চার (৪)", en: "Four" },
        { id: "n5", target: "ಐದು", pron:"ঐদু", meaning:"পাঁচ (৫)", en: "Five" },
        { id: "n6", target: "ಆರು", pron:"আরু", meaning:"ছয় (৬)", en: "Six" },
        { id: "n7", target: "ಏಳು", pron:"এলু", meaning:"সাত (৭)", en: "Seven" },
        { id: "n8", target: "ಎಂಟು", pron:"এন্টু", meaning:"আট (৮)", en: "Eight" },
        { id: "n9", target: "ಒಂಬತ್ತು", pron:"ওম্বত্তু", meaning:"নয় (৯)", en: "Nine" },
        { id: "n10", target: "ಹತ್ತು", pron:"হত্তু", meaning:"দশ (১০)", en: "Ten" },
        { id: "n11", target: "ಇಪ್ಪತ್ತು", pron:"ইপ্পত্তু", meaning:"কুড়ি (২০)", en: "Twenty" },
        { id: "n12", target: "ನೂರು", pron:"নূরু", meaning:"একশো (১০০)", en: "Hundred" }
      ]
    },
    {
      id: "market", label: "বাজার ও দরদাম", icon: "🛒",
      phrases: [
        { id: "m1", target: "ಇದು ಎಷ್ಟು?", pron:"ইদু এষ্টু?", meaning:"এটা কত?", en: "How much is this?" },
        { id: "m2", target: "ತುಂಬಾ ಜಾಸ್ತಿ", pron:"তুম্বা জাস্তি", meaning:"খুব বেশি", en: "Too much" },
        { id: "m3", target: "ಕಡಿಮೆ ಮಾಡಿ", pron:"কডিমে মাডি", meaning:"একটু কমান", en: "Please reduce" },
        { id: "m4", target: "ಬೇಕು", pron:"বেকু", meaning:"চাই", en: "I want" },
        { id: "m5", target: "ಬೇಡ", pron:"বেডা", meaning:"চাই না", en: "I don't want" },
        { id: "m6", target: "ಚಿಲ್ಲರೆ ಇದೆಯಾ?", pron:"চিল্লরে ইদেয়া?", meaning:"খুচরো আছে?", en: "Do you have change?" },
        { id: "m7", target: "ತರಕಾರಿ", pron:"তরকারি", meaning:"সবজি", en: "Vegetables" },
        { id: "m8", target: "ಹಣ್ಣು", pron:"হণ্ণু", meaning:"ফল", en: "Fruit" },
        { id: "m9", target: "ಒಂದು ಕೆಜಿ ಕೊಡಿ", pron:"ওন্দু কেজি কোডি", meaning:"এক কেজি দিন", en: "Give one kg" },
        { id: "m10", target: "ಎಲ್ಲಾ ಸೇರಿ ಎಷ್ಟು?", pron:"এল্লা সেরি এষ্টু?", meaning:"সব মিলিয়ে কত?", en: "How much altogether?" }
      ]
    },
    {
      id: "travel", label: "যাতায়াত", icon: "🛺",
      phrases: [
        { id: "t1", target: "ಎಲ್ಲಿ?", pron:"এল্লি?", meaning:"কোথায়?", en: "Where?" },
        { id: "t2", target: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", pron:"ইল্লি নিল্লিসি", meaning:"এখানে থামান", en: "Stop here" },
        { id: "t3", target: "ನೇರವಾಗಿ ಹೋಗಿ", pron:"নেরাবাগি হোগি", meaning:"সোজা যান", en: "Go straight" },
        { id: "t4", target: "ಬಲಕ್ಕೆ", pron:"বলাক্কে", meaning:"ডান দিকে", en: "To the right" },
        { id: "t5", target: "ಎಡಕ್ಕೆ", pron:"এডাক্কে", meaning:"বাঁ দিকে", en: "To the left" },
        { id: "t6", target: "ಮೀಟರ್ ಹಾಕಿ", pron:"মিটার হাকি", meaning:"মিটার চালু করুন", en: "Put the meter on" },
        { id: "t7", target: "ಎಷ್ಟು ದೂರ?", pron:"এষ্টু দূরা?", meaning:"কত দূর?", en: "How far?" },
        { id: "t8", target: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?", pron:"বাস নিল্দাণা এল্লি?", meaning:"বাস স্ট্যান্ড কোথায়?", en: "Where is the bus stand?" },
        { id: "t9", target: "ನಿಧಾನವಾಗಿ ಹೋಗಿ", pron:"নিধানাবাগি হোগি", meaning:"আস্তে চালান", en: "Go slowly" }
      ]
    },
    {
      id: "food", label: "খাবার", icon: "🍛",
      phrases: [
        { id: "f1", target: "ಊಟ", pron:"ঊটা", meaning:"ভাত-খাবার (মিল)", en: "Meal" },
        { id: "f2", target: "ತಿಂಡಿ", pron:"তিন্ডি", meaning:"জলখাবার", en: "Breakfast / snack" },
        { id: "f3", target: "ನೀರು", pron:"নীরু", meaning:"জল", en: "Water" },
        { id: "f4", target: "ಕಾಫಿ ಕೊಡಿ", pron:"কাফি কোডি", meaning:"কফি দিন", en: "Give me coffee" },
        { id: "f5", target: "ಟೀ ಕೊಡಿ", pron:"টি কোডি", meaning:"চা দিন", en: "Give me tea" },
        { id: "f6", target: "ಖಾರ ಕಡಿಮೆ", pron:"খারা কডিমে", meaning:"ঝাল কম", en: "Less spicy" },
        { id: "f7", target: "ರುಚಿಯಾಗಿದೆ", pron:"রুচিয়াগিদে", meaning:"খুব সুস্বাদু", en: "It's tasty" },
        { id: "f8", target: "ಬಿಲ್ ಕೊಡಿ", pron:"বিল কোডি", meaning:"বিল দিন", en: "Give the bill" },
        { id: "f9", target: "ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೊಡಿ", pron:"ইন্নূ স্বল্পা কোডি", meaning:"আর একটু দিন", en: "Give a bit more" },
        { id: "f10", target: "ಸಾಕು", pron:"সাকু", meaning:"যথেষ্ট", en: "Enough" }
      ]
    },
    {
      id: "emergency", label: "জরুরি", icon: "🆘",
      phrases: [
        { id: "x1", target: "ಸಹಾಯ ಮಾಡಿ!", pron:"সহায়া মাডি!", meaning:"সাহায্য করুন!", en: "Help!" },
        { id: "x2", target: "ಡಾಕ್ಟರ್ ಬೇಕು", pron:"ডাক্টার বেকু", meaning:"ডাক্তার চাই", en: "I need a doctor" },
        { id: "x3", target: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿ?", pron:"আসপত্রে এল্লি?", meaning:"হাসপাতাল কোথায়?", en: "Where is the hospital?" },
        { id: "x4", target: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ", pron:"পোলিস করেয়িরি", meaning:"পুলিশ ডাকুন", en: "Call the police" },
        { id: "x5", target: "ನನಗೆ ಹುಷಾರಿಲ್ಲ", pron:"ননগে হুষারিল্লা", meaning:"আমার শরীর খারাপ", en: "I am not well" },
        { id: "x6", target: "ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿ?", pron:"ঔষধি অঙ্গডি এল্লি?", meaning:"ওষুধের দোকান কোথায়?", en: "Where is the pharmacy?" },
        { id: "x7", target: "ದಾರಿ ತಪ್ಪಿದೆ", pron:"দারি তপ্পিদে", meaning:"রাস্তা হারিয়ে ফেলেছি", en: "I am lost" },
        { id: "x8", target: "ಫೋನ್ ಮಾಡಬಹುದಾ?", pron:"ফোন মাডবহুদা?", meaning:"ফোন করতে পারি?", en: "May I make a call?" }
      ]
    }
  ]
};
