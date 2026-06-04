//DATA 
const categoriesList = ["Science", "Animals", "Human Body", "Space", "History", "Food", "Technology", "Nature"];

const categoryEmojis = {
   "Human": "🧍‍♂️", "Space": "🚀", "Animal": "🐾", "Science": "🔬",
    "Bermuda Triangle": "🔎", "Aliens": "👽", "Nephilim": "🧬", "History": "📜"
};

let id = 1;
for (let cat of categoriesList) {
    const texts = factTexts[cat] || factTexts["Science"];
    for (let i = 0; i < 15; i++) {
        facts.push({
            id: id++,
            text: texts[i % texts.length],
            category: cat,
            emoji: categoryEmojis[cat],
            image: `https://picsum.photos/id/${(id * 7) % 300}/400/250`
        });
    }
}

// State
let favorites = JSON.parse(localStorage.getItem('wf_favorites') || '[]');
let currentPage = 1;
let currentCategory = 'all';
let currentSearch = '';
const factsPerPage = 9;

// DOM Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const factsGrid = document.getElementById('factsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');