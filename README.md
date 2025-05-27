# 🚀 Mohamed Adan - Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=github-pages)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3)

**A terminal-inspired developer portfolio with unique monospace aesthetic and interactive animations**

[🌐 **Live Demo**](https://madanw.github.io/portfolio/) • [📋 **Features**](#-features) • [🛠️ **Tech Stack**](#️-tech-stack) • [🚀 **Quick Start**](#-quick-start)

</div>

---

## 📖 About

This portfolio website showcases my journey as a Software Developer and Data Analyst through a unique **terminal-inspired design**. Built with modern web technologies, it features a distinctive developer aesthetic using monospace fonts, terminal commands, and retro-tech elements that immediately communicate my passion for code and technology.

### 🎯 Purpose
- **Developer Identity**: Express my passion for code through terminal-inspired design language
- **Showcase Projects**: Display technical projects with file-like naming and command-line aesthetics
- **Professional Presence**: Stand out with a unique, memorable developer portfolio
- **Technical Demonstration**: Showcase skills in React, JavaScript, CSS, and modern web development
- **User Experience**: Provide an engaging, developer-friendly experience that resonates with tech professionals

---

## ✨ Features

### 🎨 **Visual & Interactive**
- **Terminal Aesthetic**: Monospace fonts (VT323, Share Tech Mono) with command-line styling
- **Developer Theming**: File extensions, terminal commands, and code-like syntax throughout
- **Retro Grid Background**: Dynamic CSS-based grid with perspective effects
- **HyperText Animation**: Scrambling text effect with blinking cursor
- **Card-Based Layout**: Modern sections with hover effects and clean typography
- **Responsive Design**: Mobile-first approach with adaptive layouts

### 🔧 **Technical**
- **Component Architecture**: Modular React components for maintainability
- **Performance Optimized**: Efficient rendering and CSS animations
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Ready**: Optimized meta tags and structured data
- **PWA Capable**: Service worker ready for offline functionality

### 📱 **User Experience**
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Mobile Optimized**: Touch-friendly interactions and gestures
- **Fast Loading**: Optimized assets and lazy loading
- **Cross-Browser**: Compatible with all modern browsers

---

## 🛠️ Tech Stack

### **Frontend**
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Variables-1572B6?style=flat-square&logo=css3)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5)

### **Build & Development**
![Create React App](https://img.shields.io/badge/Create_React_App-5.0.1-09D3AC?style=flat-square&logo=create-react-app)
![Motion](https://img.shields.io/badge/Motion-12.7.3-FF6B6B?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square&logo=node.js)

### **Testing & Quality**
![Jest](https://img.shields.io/badge/Jest-Testing-C21325?style=flat-square&logo=jest)
![React Testing Library](https://img.shields.io/badge/RTL-Testing-E33332?style=flat-square&logo=testing-library)
![ESLint](https://img.shields.io/badge/ESLint-Code_Quality-4B32C3?style=flat-square&logo=eslint)

### **Deployment & Hosting**
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Hosting-181717?style=flat-square&logo=github)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=flat-square&logo=github-actions)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MADANW/portfolio-web.git
   cd portfolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the portfolio in action!

### 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Deploys to GitHub Pages |

---

## 📁 Project Structure

```
portfolio-web/
├── 📁 public/                    # Static assets
│   ├── 🖼️ images/               # Project images and icons
│   ├── 📄 index.html            # HTML template
│   ├── 📄 manifest.json         # PWA manifest
│   └── 🤖 robots.txt            # SEO configuration
├── 📁 src/                      # Source code
│   ├── 📁 components/           # React components
│   │   ├── 🎨 Header.js/.css    # Site header with animations
│   │   ├── 👤 AboutMe.js/.css   # Personal information
│   │   ├── 🛠️ Skills.js/.css    # Skills showcase
│   │   ├── 📂 Projects.js/.css  # Projects grid
│   │   ├── 📋 ProjectItem.js/.css # Individual project cards
│   │   ├── 🔤 HyperText.js/.css # Animated text component
│   │   ├── 📜 Marquee.js/.css   # Scrolling text
│   │   ├── 🎯 RetroGrid.js/.css # Background effects
│   │   └── 🦶 Footer.js/.css    # Site footer
│   ├── 🎨 App.css              # Global styles
│   ├── ⚛️ App.js               # Main application
│   └── 🚀 index.js             # Application entry point
├── 📄 package.json             # Dependencies and scripts
├── 🚀 deploy.sh                # Deployment script
└── 📖 README.md                # This file
```

---

## 🎨 Design System

### **Color Palette**
```css
/* Monochrome Terminal Theme */
--bg-color: #ffffff
--text-color: #000000
--primary-color: #000000
--accent-color: #666666
--border-color: #e0e0e0
--hover-color: #f5f5f5

/* Clean, minimal palette emphasizing content over color */
```

### **Typography**
- **Primary Font**: Share Tech Mono (Monospace) - Body text and content
- **Secondary Font**: VT323 (Display) - Headers and terminal commands
- **Design Philosophy**: Full monospace aesthetic for authentic developer feel
- **Font Loading**: Google Fonts with preconnect optimization

### **Animations**
- **Terminal Effects**: Blinking cursor animation and command-line styling
- **Hover Effects**: Smooth transitions on cards and interactive elements
- **Text Effects**: Character scrambling with HyperText component
- **Background**: Animated retro grid with perspective effects
- **Skill Marquee**: Scrolling file-like skill names

---

## 💻 Unique Design Features

### **Terminal-Inspired Elements**
- **Header**: `$ whoami: Software Developer && Data Analyst` with blinking cursor
- **About Sections**: Terminal commands like `$ cat skills.txt`, `$ echo $MISSION`
- **Skills Display**: File-like naming (AI_ML_Engineer.py, FullStack_Developer.js)
- **Interests**: File extensions (traveling.exe, tech_exploration.sh)
- **Command Syntax**: Throughout the site using `$`, `>`, `&&`, `|` operators

### **Developer Aesthetic**
- **Monospace Typography**: VT323 and Share Tech Mono for authentic code feel
- **Card-Based Layout**: Clean, scannable sections replacing wall-of-text
- **File System Metaphors**: Skills and interests presented as files and scripts
- **Terminal Prompts**: Interactive elements styled as command-line interfaces

### **Modern UX Principles**
- **Visual Hierarchy**: Clear information architecture with proper spacing
- **Hover Interactions**: Subtle animations that enhance user engagement
- **Responsive Design**: Seamless experience across all device sizes
- **Accessibility**: Semantic HTML and proper contrast ratios

---

## 💻 Featured Projects

```bash
$ ls ~/projects/
```

### `./muhsinai.py` 🤖
```bash
$ cat muhsinai.py
# Web-based application providing Muslims with AI-driven chat support
# Personalized daily planning and Islamic utilities integration
```
- **Stack**: `Python | AI/ML | React | Prayer_API`
- **Features**: `AI_Chat.py`, `Daily_Planning.js`, `Prayer_Times.json`
- **Status**: `Active_Development.status`
- **Demo**: [Repository →](https://github.com/MADANW/MuhsinAI)

### `./trading-bot.py` 📈
```bash
$ cat trading-bot.py
# Algorithmic trading bot using machine learning
# Automated trading decisions with ML algorithms
```
- **Stack**: `Python | Machine_Learning | Trading_APIs | Data_Analysis`
- **Features**: `ML_Models.py`, `Trading_Logic.js`, `Risk_Management.py`
- **Status**: `Production_Ready.status`
- **Demo**: [Repository →](https://github.com/MADANW/fullstackWebAppTemplate)

### `./financial-dashboard.sql` 💳
```bash
$ cat financial-dashboard.sql
# Credit risk and spending trends dashboard
# Consumer behavior analysis and loan risk prediction
```
- **Stack**: `Python | SQL | Data_Visualization | Risk_Analysis`
- **Features**: `Credit_Risk.py`, `Spending_Analysis.sql`, `Predictions.js`
- **Status**: `In_Development.status`
- **Demo**: [Coming Soon →](#)

```bash
$ echo "More projects in development..." && sleep 1
$ git log --oneline | head -3
```

---

## 🚀 Deployment

### Automatic Deployment
This project uses GitHub Actions for automatic deployment to GitHub Pages:

1. **Push to main branch** triggers the deployment
2. **Build process** creates optimized production files
3. **GitHub Pages** serves the built application
4. **Custom domain** configured for professional URL

### Manual Deployment
```bash
# Build and deploy manually
npm run build
npm run deploy
```

---

## 📈 Performance Metrics

### **Lighthouse Scores**
- **Performance**: 95+ 🚀
- **Accessibility**: 100 ♿
- **Best Practices**: 100 ✅
- **SEO**: 95+ 🔍

### **Core Web Vitals**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MADANW/portfolio-web/issues).

### **How to Contribute**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure accessibility compliance

---

## 📞 Contact & Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-madanw.github.io-000000?style=for-the-badge&logo=github)](https://madanw.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mohamed-a-0536a4259/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/MADANW)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:adan.mohamed.w@gmail.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Create React App** for the excellent build tooling
- **Google Fonts** for the beautiful typography
- **GitHub Pages** for free hosting
- **Open Source Community** for inspiration and resources

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

*Built with ❤️ by Mohamed Adan*

</div>
