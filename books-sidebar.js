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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learning Bengali Alphabet for English Speakers',
        author: 'Various',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Malayalam Learning Reading Writing and Colouring Books',
        author: 'InIkao',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Konkani for Beginners',
        author: 'Ahmet Neseli',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Gujarati In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Tamil Script Made Easy',
        author: 'Nivetha Mohan',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Spoken Odia for Everyone',
        author: 'Various',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://link.amazon/B0fKCcGun'
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
        url: 'https://link.amazon/B0fKCcGun'
      },
      {
        title: 'Learn Kannada In 30 Days Through English',
        author: 'Krishna Gopal Vikal',
        url: 'https://link.amazon/B0fKCcGun'
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
      url: 'https://link.amazon/B0fKCcGun'
    },
    {
      title: 'Quantitative Aptitude for Competitive Examinations',
      author: 'R.S. Aggarwal',
      url: 'https://link.amazon/B0fKCcGun'
    },
    {
      title: 'SSC GD Constable Exam Guide',
      author: 'Arihant Experts',
      url: 'https://link.amazon/B0fKCcGun'
    },
    {
      title: 'RRB Group D Level 1 Exam Guide',
      author: 'Disha Experts',
      url: 'https://link.amazon/B0fKCcGun'
    },
    {
      title: 'General Knowledge 2026: One-Liner GK & Current Affairs Question Bank for SSC, Banking, Railways & All Competitive Exams',
      author: 'Sreenivash Venkatesh',
      url: 'https://link.amazon/B0fKCcGun'
    },
    {
      title: 'General Knowledge 2026 — Hindi Edition: One-Liner GK & Current Affairs for Competitive Exams (सामान्य ज्ञान 2026)',
      author: 'Sreenivash Venkatesh',
      url: 'https://link.amazon/B0fKCcGun'
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
        <span class="affiliate-note">Amazon affiliate links</span>
      </div>
    </aside>
  `;

  return html;
}
