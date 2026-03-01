# Portfolio Muhammad Yasir Arafat

Portfolio website modern menggunakan React + Vite dengan desain Neo-Brutalism.

## 🚀 Tech Stack

- **React** - JavaScript library untuk UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library (termasuk icon tech stack lengkap)

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 🎨 Fitur

- ✅ Responsive design (mobile & desktop)
- ✅ Neo-Brutalism design style
- ✅ Smooth scrolling navigation
- ✅ Section About/Hero dengan informasi profil
- ✅ Section Projects dengan 7 proyek (DINAMIKA, Robot Trading, E-Aspirasi, dll)
- ✅ Section Tech Stack dengan icon-icon teknologi
- ✅ Section Contact dengan link GitHub, Email, WhatsApp, Instagram
- ✅ Footer

## 📁 Struktur Project

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero/About section
│   │   ├── Projects.jsx    # Portfolio projects
│   │   ├── TechStack.jsx   # Technologies & skills
│   │   ├── Contact.jsx     # Contact information
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── App.css             # App styles
│   ├── index.css           # Global styles + Tailwind
│   └── main.jsx            # Entry point
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json
```

## 🎯 Sections

### Hero/About
- Nama lengkap dan foto profil
- Role (Full-stack & Mobile Developer)
- Deskripsi singkat pendidikan dan pengalaman
- Social media links
- Call-to-action buttons

### Projects
7 proyek yang ditampilkan:
1. **DINAMIKA Forum** - Laravel, PHP, MySQL
2. **Forex Trading Robot** - MetaTrader 5, MQL5
3. **E-Aspirasi** - PHP, Tailwind CSS
4. **CV. Batu Usaha Mandiri** - Company Profile
5. **BelajarJejepangan** - Quiz website
6. **Hotelin** - Flutter hotel booking app
7. **Tabunganku** - Vue.js, FastAPI, OpenCV (AI Scanner)

### Tech Stack
17 teknologi dengan icon:
- Languages: PHP, Python, HTML5, CSS3, JavaScript, Dart
- Frameworks: Laravel, Tailwind CSS, CodeIgniter, Vue.js, Flutter, FastAPI
- Database: MySQL, MongoDB, SQLite
- Tools: MetaTrader 5, OpenCV

### Contact
- GitHub: yashiru0118
- Email: muhyasir299@gmail.com
- WhatsApp: 08993538811
- Instagram: @yashiru.13

## 🎨 Customization

### Warna (tailwind.config.js)
```javascript
colors: {
  primary: "#0d59f2",
  "neo-yellow": "#FFD700",
  "neo-blue": "#0d59f2",
  "neo-black": "#0d121c",
  "neo-white": "#f8f9fc",
}
```

### Font
- Space Grotesk (Google Fonts)

## 📝 Development

Server berjalan di `http://localhost:5173/`

Untuk edit:
- **Profil**: Edit `src/components/Hero.jsx`
- **Projects**: Edit array `projects` di `src/components/Projects.jsx`
- **Tech Stack**: Edit array `technologies` di `src/components/TechStack.jsx`
- **Contact**: Edit `src/components/Contact.jsx`

## 🌐 Deployment

Build project:
```bash
npm run build
```

File hasil build akan ada di folder `dist/` dan siap untuk di-deploy ke Vercel, Netlify, GitHub Pages, atau hosting lainnya.

## 👤 Author

**Muhammad Yasir Arafat**
- D3 Informatics Engineering Student at ULBI
- GPA: 3.81
- General Secretary of HIMATIF

---

Built with ❤️ using React + Vite + Tailwind CSS

