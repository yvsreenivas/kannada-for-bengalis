// Books sidebar data per direction
const BOOKS_DATA = {
  // Root: Kannada for Bengalis
  '': {
    lang: 'kn',
    title: 'ಕನ್ನಡ ಪುಸ್ತಕಗಳು',
    titleEn: 'Kannada Books',
    books: [
      {
        title: 'Spoken Kannada for Absolute Beginners',
        author: 'Sanjay D',
        url: 'https://www.amazon.in/s?k=Spoken+Kannada+Absolute+Beginners+Sanjay&tag=kannadawordle-21'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://www.amazon.in/s?k=Learn+Kannada+30+Days+Through+English&tag=kannadawordle-21'
      }
    ]
  },

  // /bengali/: Bengali for Kannadigas
  'bengali': {
    lang: 'bn',
    title: 'বাংলা বই',
    titleEn: 'Bengali Books',
    books: [
      {
        title: 'Complete Bengali Beginner to Intermediate Course',
        author: 'William Radice',
        url: 'https://www.amazon.in/s?k=Complete+Bengali+Beginner+Intermediate+Course&tag=kannadawordle-21'
      },
      {
        title: 'Learning Bengali Alphabet for English Speakers',
        author: 'Various',
        url: 'https://www.amazon.in/s?k=Learning+Bengali+Alphabet+English&tag=kannadawordle-21'
      }
    ]
  },

  // /malayalam/: Malayalam for Kannadigas
  'malayalam': {
    lang: 'ml',
    title: 'മലയാളം പുസ്തകങ്ങൾ',
    titleEn: 'Malayalam Books',
    books: [
      {
        title: 'Learn Basic Malayalam In Six Weeks',
        author: 'John D. Kunnathu & Lissy J. Kunnathu',
        url: 'https://www.amazon.in/s?k=Learn+Basic+Malayalam+Six+Weeks&tag=kannadawordle-21'
      },
      {
        title: 'Malayalam Learning Reading Writing and Colouring Books',
        author: 'InIkao',
        url: 'https://www.amazon.in/s?k=Malayalam+Learning+Reading+Writing+Colouring&tag=kannadawordle-21'
      }
    ]
  },

  // /kannada/: Kannada for Malayalis
  'kannada': {
    lang: 'kn',
    title: 'ಕನ್ನಡ ಪುಸ್ತಕಗಳು',
    titleEn: 'Kannada Books',
    books: [
      {
        title: 'Spoken Kannada for Absolute Beginners',
        author: 'Sanjay D',
        url: 'https://www.amazon.in/s?k=Spoken+Kannada+Absolute+Beginners+Sanjay&tag=kannadawordle-21'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://www.amazon.in/s?k=Learn+Kannada+30+Days+Through+English&tag=kannadawordle-21'
      }
    ]
  },

  // /konkani/: Konkani for Kannadigas
  'konkani': {
    lang: 'kok',
    title: 'कोंकणी पुस्तकें',
    titleEn: 'Konkani Books',
    books: [
      {
        title: 'Lets Learn Konkani',
        author: 'S.J. Borkar',
        url: 'https://www.amazon.in/s?k=Lets+Learn+Konkani+Borkar&tag=kannadawordle-21'
      },
      {
        title: 'Learn Konkani for Beginners',
        author: 'Ahmet Neseli',
        url: 'https://www.amazon.in/s?k=Learn+Konkani+Beginners+Ahmet+Neseli&tag=kannadawordle-21'
      }
    ]
  },

  // /gujarati/: Gujarati for Kannadigas
  'gujarati': {
    lang: 'gu',
    title: 'ગુજરાતી પુસ્તકો',
    titleEn: 'Gujarati Books',
    books: [
      {
        title: 'Teach Yourself Gujarati',
        author: 'Jagdish Dave & Kamal Dave',
        url: 'https://www.amazon.in/s?k=Teach+Yourself+Gujarati+Jagdish+Dave&tag=kannadawordle-21'
      },
      {
        title: 'Learn Gujarati In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://www.amazon.in/s?k=Learn+Gujarati+30+Days+Through+English&tag=kannadawordle-21'
      }
    ]
  },

  // /kannada-gujarati/: Kannada for Gujarati speakers
  'kannada-gujarati': {
    lang: 'kn',
    title: 'ಕನ್ನಡ ಪುಸ್ತಕಗಳು',
    titleEn: 'Kannada Books',
    books: [
      {
        title: 'Spoken Kannada for Absolute Beginners',
        author: 'Sanjay D',
        url: 'https://www.amazon.in/s?k=Spoken+Kannada+Absolute+Beginners+Sanjay&tag=kannadawordle-21'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://www.amazon.in/s?k=Learn+Kannada+30+Days+Through+English&tag=kannadawordle-21'
      }
    ]
  },

  // /tamil/: Tamil for Kannadigas
  'tamil': {
    lang: 'ta',
    title: 'தமிழ் புத்தகங்கள்',
    titleEn: 'Tamil Books',
    books: [
      {
        title: 'Learn Tamil in 30 Days Through English',
        author: 'K. Thirunavukkarasu',
        url: 'https://www.amazon.in/s?k=Learn+Tamil+30+Days+Through+English&tag=kannadawordle-21'
      },
      {
        title: 'Tamil Script Made Easy',
        author: 'Nivetha Mohan',
        url: 'https://www.amazon.in/s?k=Tamil+Script+Made+Easy&tag=kannadawordle-21'
      }
    ]
  },

  // /kannada-tamil/: Kannada for Tamil speakers
  'kannada-tamil': {
    lang: 'kn',
    title: 'ಕನ್ನಡ ಪುಸ್ತಕಗಳು',
    titleEn: 'Kannada Books',
    books: [
      {
        title: 'Spoken Kannada for Absolute Beginners',
        author: 'Sanjay D',
        url: 'https://www.amazon.in/s?k=Spoken+Kannada+Absolute+Beginners+Sanjay&tag=kannadawordle-21'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://www.amazon.in/s?k=Learn+Kannada+30+Days+Through+English&tag=kannadawordle-21'
      }
    ]
  },

  // /odia/: Odia for Kannadigas
  'odia': {
    lang: 'or',
    title: 'ଓଡ଼ିଆ ପୁସ୍ତକ',
    titleEn: 'Odia Books',
    books: [
      {
        title: 'Learn Odia Language Quickly',
        author: 'Tarun Kumar Panda',
        url: 'https://www.amazon.in/s?k=Learn+Odia+Language+Quickly+Tarun+Panda&tag=kannadawordle-21'
      },
      {
        title: 'Spoken Odia for Everyone',
        author: 'Various',
        url: 'https://www.amazon.in/s?k=Spoken+Odia+for+Everyone&tag=kannadawordle-21'
      }
    ]
  },

  // /kannada-odia/: Kannada for Odia speakers
  'kannada-odia': {
    lang: 'kn',
    title: 'ಕನ್ನಡ ಪುಸ್ತಕಗಳು',
    titleEn: 'Kannada Books',
    books: [
      {
        title: 'Spoken Kannada for Absolute Beginners',
        author: 'Sanjay D',
        url: 'https://www.amazon.in/s?k=Spoken+Kannada+Absolute+Beginners+Sanjay&tag=kannadawordle-21'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://www.amazon.in/s?k=Learn+Kannada+30+Days+Through+English&tag=kannadawordle-21'
      }
    ]
  },

  // /kannada-konkani/: Kannada for Konkani speakers
  'kannada-konkani': {
    lang: 'kn',
    title: 'ಕನ್ನಡ ಪುಸ್ತಕಗಳು',
    titleEn: 'Kannada Books',
    books: [
      {
        title: 'Spoken Kannada for Absolute Beginners',
        author: 'Sanjay D',
        url: 'https://www.amazon.in/s?k=Spoken+Kannada+Absolute+Beginners+Sanjay&tag=kannadawordle-21'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://www.amazon.in/s?k=Learn+Kannada+30+Days+Through+English&tag=kannadawordle-21'
      }
    ]
  }
};

// Competitive exam picks for SSLC (10th) pass & above — shown on every direction,
// aimed at migrant workers preparing for SSC, Railways, Banking and similar exams
const EXAM_BOOKS = {
  title: 'Competitive Exam Books',
  note: 'SSLC (10th) pass & above · SSC · Railways · Banking',
  books: [
    {
      title: "Lucent's General Knowledge",
      author: 'Dr. Binay Karna',
      url: 'https://www.amazon.in/s?k=Lucent+General+Knowledge&tag=kannadawordle-21'
    },
    {
      title: 'Quantitative Aptitude for Competitive Examinations',
      author: 'R.S. Aggarwal',
      url: 'https://www.amazon.in/s?k=Quantitative+Aptitude+Competitive+Examinations+Aggarwal&tag=kannadawordle-21'
    },
    {
      title: 'SSC GD Constable Exam Guide',
      author: 'Arihant Experts',
      url: 'https://www.amazon.in/s?k=SSC+GD+Constable+Exam+Guide+Arihant&tag=kannadawordle-21'
    },
    {
      title: 'RRB Group D Level 1 Exam Guide',
      author: 'Disha Experts',
      url: 'https://www.amazon.in/s?k=RRB+Group+D+Level+1+Exam+Guide&tag=kannadawordle-21'
    }
  ]
};

function renderBooksSidebar() {
  // Determine current direction from pathname
  const p = location.pathname;
  let dir = '';
  if (p.indexOf('/bengali/') !== -1) dir = 'bengali';
  else if (p.indexOf('/malayalam/') !== -1) dir = 'malayalam';
  else if (p.indexOf('/kannada-konkani/') !== -1) dir = 'kannada-konkani';
  else if (p.indexOf('/konkani/') !== -1) dir = 'konkani';
  else if (p.indexOf('/kannada-odia/') !== -1) dir = 'kannada-odia';
  else if (p.indexOf('/kannada-tamil/') !== -1) dir = 'kannada-tamil';
  else if (p.indexOf('/kannada-gujarati/') !== -1) dir = 'kannada-gujarati';
  else if (p.indexOf('/odia/') !== -1) dir = 'odia';
  else if (p.indexOf('/tamil/') !== -1) dir = 'tamil';
  else if (p.indexOf('/gujarati/') !== -1) dir = 'gujarati';
  else if (p.indexOf('/kannada/') !== -1) dir = 'kannada';

  const bookData = BOOKS_DATA[dir];

  if (!bookData) return '';

  let html = `
    <aside class="books-sidebar" lang="${bookData.lang}">
      <div class="books-header">
        <span class="books-title">${bookData.title}</span>
        <span class="books-title-en">${bookData.titleEn}</span>
      </div>
      <ul class="books-list">
  `;

  bookData.books.forEach(book => {
    html += `
      <li class="book-item">
        <a href="${book.url}" target="_blank" rel="noopener noreferrer" class="book-link">
          <span class="book-name">${book.title}</span>
          <span class="book-author">${book.author}</span>
        </a>
      </li>
    `;
  });

  html += `
      </ul>
      <div class="books-header books-header-exams" lang="en">
        <span class="books-title">${EXAM_BOOKS.title}</span>
        <span class="books-title-en">${EXAM_BOOKS.note}</span>
      </div>
      <ul class="books-list" lang="en">
  `;

  EXAM_BOOKS.books.forEach(book => {
    html += `
      <li class="book-item">
        <a href="${book.url}" target="_blank" rel="noopener noreferrer" class="book-link">
          <span class="book-name">${book.title}</span>
          <span class="book-author">${book.author}</span>
        </a>
      </li>
    `;
  });

  html += `
      </ul>
      <div class="books-footer">
        <a href="/blog/" class="blog-promo-link" lang="en">💼 Small business ideas for young workers →</a>
        <span class="affiliate-note">Amazon affiliate links</span>
      </div>
    </aside>
  `;

  return html;
}
