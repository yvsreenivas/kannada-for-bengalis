// ಕನ್ನಡ ↔ മലയാളം learning content (for Malayalam speakers learning Kannada)
// Each letter: target (Kannada), equiv (closest Malayalam letter), pron (pronunciation in Malayalam script), latin, note (optional Malayalam note)
// Each phrase: id, target, pron, meaning, en; categories: id, label, icon, phrases
// NOTE: Kannada & Malayalam aksharas map almost 1:1 (both Southern Dravidian, with short/long e & o).

window.DATA = {
  vowels: [
    { id: "v-a",  target: "ಅ", equiv: "അ", pron: "അ", latin: "a" },
    { id: "v-aa", target: "ಆ", equiv: "ആ", pron: "ആ", latin: "ā" },
    { id: "v-i",  target: "ಇ", equiv: "ഇ", pron: "ഇ", latin: "i" },
    { id: "v-ii", target: "ಈ", equiv: "ഈ", pron: "ഈ", latin: "ī" },
    { id: "v-u",  target: "ಉ", equiv: "ഉ", pron: "ഉ", latin: "u" },
    { id: "v-uu", target: "ಊ", equiv: "ഊ", pron: "ഊ", latin: "ū" },
    { id: "v-ru", target: "ಋ", equiv: "ഋ", pron: "ഋ", latin: "ṛ" },
    { id: "v-e",  target: "ಎ", equiv: "എ", pron: "എ (ഹ്രസ്വം)", latin: "e" },
    { id: "v-ee", target: "ಏ", equiv: "ഏ", pron: "ഏ (ദീർഘം)", latin: "ē" },
    { id: "v-ai", target: "ಐ", equiv: "ഐ", pron: "ഐ", latin: "ai" },
    { id: "v-o",  target: "ಒ", equiv: "ഒ", pron: "ഒ (ഹ്രസ്വം)", latin: "o" },
    { id: "v-oo", target: "ಓ", equiv: "ഓ", pron: "ഓ (ദീർഘം)", latin: "ō" },
    { id: "v-au", target: "ಔ", equiv: "ഔ", pron: "ഔ", latin: "au" }
  ],

  yogavaha: [
    { id: "y-am", target: "ಅಂ", equiv: "അം", pron: "അം", latin: "aṁ" },
    { id: "y-ah", target: "ಅಃ", equiv: "അഃ", pron: "അഃ", latin: "aḥ" }
  ],

  consonants: [
    { id: "c-ka",  target: "ಕ", equiv: "ക", pron: "ക", latin: "ka" },
    { id: "c-kha", target: "ಖ", equiv: "ഖ", pron: "ഖ", latin: "kha" },
    { id: "c-ga",  target: "ಗ", equiv: "ഗ", pron: "ഗ", latin: "ga" },
    { id: "c-gha", target: "ಘ", equiv: "ഘ", pron: "ഘ", latin: "gha" },
    { id: "c-nga", target: "ಙ", equiv: "ങ", pron: "ങ", latin: "ṅa" },
    { id: "c-cha", target: "ಚ", equiv: "ച", pron: "ച", latin: "ca" },
    { id: "c-chha",target: "ಛ", equiv: "ഛ", pron: "ഛ", latin: "cha" },
    { id: "c-ja",  target: "ಜ", equiv: "ജ", pron: "ജ", latin: "ja" },
    { id: "c-jha", target: "ಝ", equiv: "ഝ", pron: "ഝ", latin: "jha" },
    { id: "c-nya", target: "ಞ", equiv: "ഞ", pron: "ഞ", latin: "ña" },
    { id: "c-tta", target: "ಟ", equiv: "ട", pron: "ട", latin: "ṭa" },
    { id: "c-ttha",target: "ಠ", equiv: "ഠ", pron: "ഠ", latin: "ṭha" },
    { id: "c-dda", target: "ಡ", equiv: "ഡ", pron: "ഡ", latin: "ḍa" },
    { id: "c-ddha",target: "ಢ", equiv: "ഢ", pron: "ഢ", latin: "ḍha" },
    { id: "c-nna", target: "ಣ", equiv: "ണ", pron: "ണ", latin: "ṇa" },
    { id: "c-ta",  target: "ತ", equiv: "ത", pron: "ത", latin: "ta" },
    { id: "c-tha", target: "ಥ", equiv: "ഥ", pron: "ഥ", latin: "tha" },
    { id: "c-da",  target: "ದ", equiv: "ദ", pron: "ദ", latin: "da" },
    { id: "c-dha", target: "ಧ", equiv: "ധ", pron: "ധ", latin: "dha" },
    { id: "c-na",  target: "ನ", equiv: "ന", pron: "ന", latin: "na" },
    { id: "c-pa",  target: "ಪ", equiv: "പ", pron: "പ", latin: "pa" },
    { id: "c-pha", target: "ಫ", equiv: "ഫ", pron: "ഫ", latin: "pha" },
    { id: "c-ba",  target: "ಬ", equiv: "ബ", pron: "ബ", latin: "ba" },
    { id: "c-bha", target: "ಭ", equiv: "ഭ", pron: "ഭ", latin: "bha" },
    { id: "c-ma",  target: "ಮ", equiv: "മ", pron: "മ", latin: "ma" },
    { id: "c-ya",  target: "ಯ", equiv: "യ", pron: "യ", latin: "ya" },
    { id: "c-ra",  target: "ರ", equiv: "ര", pron: "ര", latin: "ra" },
    { id: "c-la",  target: "ಲ", equiv: "ല", pron: "ല", latin: "la" },
    { id: "c-va",  target: "ವ", equiv: "വ", pron: "വ", latin: "va" },
    { id: "c-sha", target: "ಶ", equiv: "ശ", pron: "ശ", latin: "śa" },
    { id: "c-ssa", target: "ಷ", equiv: "ഷ", pron: "ഷ", latin: "ṣa" },
    { id: "c-sa",  target: "ಸ", equiv: "സ", pron: "സ", latin: "sa" },
    { id: "c-ha",  target: "ಹ", equiv: "ഹ", pron: "ഹ", latin: "ha" },
    { id: "c-lla", target: "ಳ", equiv: "ള", pron: "ള", latin: "ḷa" }
  ],

  categories: [
    {
      id: "greetings", label: "ആശംസകൾ", icon: "👋",
      phrases: [
        { id: "g1", target: "ನಮಸ್ಕಾರ", pron: "നമസ്കാര", meaning: "നമസ്കാരം", en: "Hello" },
        { id: "g2", target: "ಹೇಗಿದ್ದೀರಾ?", pron: "ഹേഗിദ്ദീരാ?", meaning: "സുഖമാണോ?", en: "How are you?" },
        { id: "g3", target: "ಚೆನ್ನಾಗಿದ್ದೀನಿ", pron: "ചെന്നാഗിദ്ദീനി", meaning: "സുഖമാണ്", en: "I am fine" },
        { id: "g4", target: "ನಿಮ್ಮ ಹೆಸರೇನು?", pron: "നിമ്മ ഹെസരേനു?", meaning: "താങ്കളുടെ പേരെന്ത്?", en: "What is your name?" },
        { id: "g5", target: "ನನ್ನ ಹೆಸರು...", pron: "നന്ന ഹെസരു...", meaning: "എന്റെ പേര്...", en: "My name is..." },
        { id: "g6", target: "ಧನ್ಯವಾದ", pron: "ധന്യവാദ", meaning: "നന്ദി", en: "Thank you" },
        { id: "g7", target: "ಕ್ಷಮಿಸಿ", pron: "ക്ഷമിസി", meaning: "ക്ഷമിക്കണം", en: "Sorry / Excuse me" },
        { id: "g8", target: "ಮತ್ತೆ ಸಿಗೋಣ", pron: "മത്തെ സിഗോണ", meaning: "വീണ്ടും കാണാം", en: "See you again" },
        { id: "g9", target: "ಸ್ವಾಗತ", pron: "സ്വാഗത", meaning: "സ്വാഗതം", en: "Welcome" },
        { id: "g10", target: "ಶುಭ ದಿನ", pron: "ശുഭ ദിന", meaning: "നല്ല ദിവസം", en: "Good day" }
      ]
    },
    {
      id: "essentials", label: "അവശ്യ വാക്കുകൾ", icon: "💬",
      phrases: [
        { id: "e1", target: "ಹೌದು", pron: "ഹൌദു", meaning: "അതെ", en: "Yes" },
        { id: "e2", target: "ಇಲ್ಲ", pron: "ഇല്ല", meaning: "അല്ല", en: "No" },
        { id: "e3", target: "ಸರಿ", pron: "സരി", meaning: "ശരി", en: "Okay" },
        { id: "e4", target: "ಗೊತ್ತಿಲ್ಲ", pron: "ഗൊത്തില്ല", meaning: "അറിയില്ല", en: "I don't know" },
        { id: "e5", target: "ಕನ್ನಡ ಬರಲ್ಲ", pron: "കന്നഡ ബരല്ല", meaning: "എനിക്ക് കന്നഡ അറിയില്ല", en: "I don't know Kannada" },
        { id: "e6", target: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಬರುತ್ತೆ", pron: "സ്വൽപ സ്വൽപ ബരുത്തെ", meaning: "കുറച്ച് അറിയാം", en: "I know a little" },
        { id: "e7", target: "ನಿಧಾನವಾಗಿ ಹೇಳಿ", pron: "നിധാനവാഗി ഹേളി", meaning: "പതുക്കെ പറയൂ", en: "Please speak slowly" },
        { id: "e8", target: "ಅರ್ಥ ಆಗಲಿಲ್ಲ", pron: "അർഥ ആഗലില്ല", meaning: "മനസ്സിലായില്ല", en: "I didn't understand" },
        { id: "e9", target: "ಪರವಾಗಿಲ್ಲ", pron: "പരവാഗില്ല", meaning: "കുഴപ്പമില്ല", en: "No problem" },
        { id: "e10", target: "ಸ್ವಲ್ಪ", pron: "സ്വൽപ", meaning: "കുറച്ച്", en: "A little" }
      ]
    },
    {
      id: "numbers", label: "സംഖ്യകൾ", icon: "🔢",
      phrases: [
        { id: "n1", target: "ಒಂದು", pron: "ഒന്ദു", meaning: "ഒന്ന് (൧)", en: "One" },
        { id: "n2", target: "ಎರಡು", pron: "എരഡു", meaning: "രണ്ട് (൨)", en: "Two" },
        { id: "n3", target: "ಮೂರು", pron: "മൂരു", meaning: "മൂന്ന് (൩)", en: "Three" },
        { id: "n4", target: "ನಾಲ್ಕು", pron: "നാൽകു", meaning: "നാല് (൪)", en: "Four" },
        { id: "n5", target: "ಐದು", pron: "ഐദു", meaning: "അഞ്ച് (൫)", en: "Five" },
        { id: "n6", target: "ಆರು", pron: "ആരു", meaning: "ആറ് (൬)", en: "Six" },
        { id: "n7", target: "ಏಳು", pron: "ഏളു", meaning: "ഏഴ് (൭)", en: "Seven" },
        { id: "n8", target: "ಎಂಟು", pron: "എംടു", meaning: "എട്ട് (൮)", en: "Eight" },
        { id: "n9", target: "ಒಂಬತ್ತು", pron: "ഒംബത്തു", meaning: "ഒമ്പത് (൯)", en: "Nine" },
        { id: "n10", target: "ಹತ್ತು", pron: "ഹത്തു", meaning: "പത്ത് (൧൦)", en: "Ten" },
        { id: "n11", target: "ಇಪ್ಪತ್ತು", pron: "ഇപ്പത്തു", meaning: "ഇരുപത് (൨൦)", en: "Twenty" },
        { id: "n12", target: "ನೂರು", pron: "നൂരു", meaning: "നൂറ് (൧൦൦)", en: "Hundred" }
      ]
    },
    {
      id: "market", label: "മാർക്കറ്റും വിലപേശലും", icon: "🛒",
      phrases: [
        { id: "m1", target: "ಇದು ಎಷ್ಟು?", pron: "ഇദു എഷ്ടു?", meaning: "ഇത് എത്ര?", en: "How much is this?" },
        { id: "m2", target: "ತುಂಬಾ ಜಾಸ್ತಿ", pron: "തുംബാ ജാസ്തി", meaning: "വളരെ കൂടുതൽ", en: "Too much" },
        { id: "m3", target: "ಕಡಿಮೆ ಮಾಡಿ", pron: "കഡിമെ മാഡി", meaning: "കുറയ്ക്കൂ", en: "Please reduce" },
        { id: "m4", target: "ಬೇಕು", pron: "ബേകു", meaning: "വേണം", en: "I want" },
        { id: "m5", target: "ಬೇಡ", pron: "ബേഡ", meaning: "വേണ്ട", en: "I don't want" },
        { id: "m6", target: "ಚಿಲ್ಲರೆ ಇದೆಯಾ?", pron: "ചില്ലരെ ഇദെയാ?", meaning: "ചില്ലറയുണ്ടോ?", en: "Do you have change?" },
        { id: "m7", target: "ತರಕಾರಿ", pron: "തരകാരി", meaning: "പച്ചക്കറി", en: "Vegetables" },
        { id: "m8", target: "ಹಣ್ಣು", pron: "ഹണ്ണു", meaning: "പഴം", en: "Fruit" },
        { id: "m9", target: "ಒಂದು ಕೆಜಿ ಕೊಡಿ", pron: "ഒന്ദു കെജി കൊഡി", meaning: "ഒരു കിലോ തരൂ", en: "Give one kg" },
        { id: "m10", target: "ಎಲ್ಲಾ ಸೇರಿ ಎಷ್ಟು?", pron: "എല്ലാ സേരി എഷ്ടു?", meaning: "മൊത്തം എത്ര?", en: "How much altogether?" }
      ]
    },
    {
      id: "travel", label: "യാത്ര", icon: "🛺",
      phrases: [
        { id: "t1", target: "ಎಲ್ಲಿ?", pron: "എല്ലി?", meaning: "എവിടെ?", en: "Where?" },
        { id: "t2", target: "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", pron: "ഇല്ലി നില്ലിസി", meaning: "ഇവിടെ നിർത്തൂ", en: "Stop here" },
        { id: "t3", target: "ನೇರವಾಗಿ ಹೋಗಿ", pron: "നേരവാഗി ഹോഗി", meaning: "നേരെ പോകൂ", en: "Go straight" },
        { id: "t4", target: "ಬಲಕ್ಕೆ", pron: "ബലക്കെ", meaning: "വലത്തോട്ട്", en: "To the right" },
        { id: "t5", target: "ಎಡಕ್ಕೆ", pron: "എഡക്കെ", meaning: "ഇടത്തോട്ട്", en: "To the left" },
        { id: "t6", target: "ಮೀಟರ್ ಹಾಕಿ", pron: "മീടർ ഹാകി", meaning: "മീറ്റർ ഇടൂ", en: "Put the meter on" },
        { id: "t7", target: "ಎಷ್ಟು ದೂರ?", pron: "എഷ്ടു ദൂര?", meaning: "എത്ര ദൂരം?", en: "How far?" },
        { id: "t8", target: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿ?", pron: "ബസ് നില്ദാണ എല്ലി?", meaning: "ബസ് സ്റ്റാൻഡ് എവിടെ?", en: "Where is the bus stand?" },
        { id: "t9", target: "ನಿಧಾನವಾಗಿ ಹೋಗಿ", pron: "നിധാനവാഗി ഹോഗി", meaning: "പതുക്കെ പോകൂ", en: "Go slowly" }
      ]
    },
    {
      id: "food", label: "ഭക്ഷണം", icon: "🍛",
      phrases: [
        { id: "f1", target: "ಊಟ", pron: "ഊട", meaning: "ഊണ് (ഭക്ഷണം)", en: "Meal" },
        { id: "f2", target: "ತಿಂಡಿ", pron: "തിംഡി", meaning: "പലഹാരം", en: "Breakfast / snack" },
        { id: "f3", target: "ನೀರು", pron: "നീരു", meaning: "വെള്ളം", en: "Water" },
        { id: "f4", target: "ಕಾಫಿ ಕೊಡಿ", pron: "കാഫി കൊഡി", meaning: "കാപ്പി തരൂ", en: "Give me coffee" },
        { id: "f5", target: "ಟೀ ಕೊಡಿ", pron: "ടീ കൊഡി", meaning: "ചായ തരൂ", en: "Give me tea" },
        { id: "f6", target: "ಖಾರ ಕಡಿಮೆ", pron: "ഖാര കഡിമെ", meaning: "എരിവ് കുറച്ച്", en: "Less spicy" },
        { id: "f7", target: "ರುಚಿಯಾಗಿದೆ", pron: "രുചിയാഗിദെ", meaning: "രുചിയുണ്ട്", en: "It's tasty" },
        { id: "f8", target: "ಬಿಲ್ ಕೊಡಿ", pron: "ബിൽ കൊഡി", meaning: "ബിൽ തരൂ", en: "Give the bill" },
        { id: "f9", target: "ಇನ್ನೂ ಸ್ವಲ್ಪ ಕೊಡಿ", pron: "ഇന്നൂ സ്വൽപ കൊഡി", meaning: "കുറച്ച് കൂടി തരൂ", en: "Give a bit more" },
        { id: "f10", target: "ಸಾಕು", pron: "സാകു", meaning: "മതി", en: "Enough" }
      ]
    },
    {
      id: "emergency", label: "അടിയന്തരം", icon: "🆘",
      phrases: [
        { id: "x1", target: "ಸಹಾಯ ಮಾಡಿ!", pron: "സഹായ മാഡി!", meaning: "സഹായിക്കൂ!", en: "Help!" },
        { id: "x2", target: "ಡಾಕ್ಟರ್ ಬೇಕು", pron: "ഡാക്ടർ ബേകു", meaning: "ഡോക്ടറെ വേണം", en: "I need a doctor" },
        { id: "x3", target: "ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿ?", pron: "ആസ്പത്രെ എല്ലി?", meaning: "ആശുപത്രി എവിടെ?", en: "Where is the hospital?" },
        { id: "x4", target: "ಪೊಲೀಸ್ ಕರೆಯಿರಿ", pron: "പൊലീസ് കരെയിരി", meaning: "പോലീസിനെ വിളിക്കൂ", en: "Call the police" },
        { id: "x5", target: "ನನಗೆ ಹುಷಾರಿಲ್ಲ", pron: "നനഗെ ഹുഷാരില്ല", meaning: "എനിക്ക് സുഖമില്ല", en: "I am not well" },
        { id: "x6", target: "ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿ?", pron: "ഔഷധി അംഗഡി എല്ലി?", meaning: "മരുന്ന് കട എവിടെ?", en: "Where is the pharmacy?" },
        { id: "x7", target: "ದಾರಿ ತಪ್ಪಿದೆ", pron: "ദാരി തപ്പിദെ", meaning: "വഴി തെറ്റി", en: "I am lost" },
        { id: "x8", target: "ಫೋನ್ ಮಾಡಬಹುದಾ?", pron: "ഫോൺ മാഡബഹുദാ?", meaning: "ഒരു കോൾ ചെയ്യാമോ?", en: "May I make a call?" }
      ]
    }
  ]
};
