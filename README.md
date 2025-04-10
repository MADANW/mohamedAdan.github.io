# Mohamed Adan Portfolio Website

A modern, responsive portfolio website built with React, JavaScript, and CSS. This project serves as my personal platform for showcasing my projects and experiences as a sophomore at the University of Minnesota. The design features a sleek gradient background (starting at `#0c340c` and transitioning to white) paired with a clean, minimalist layout.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This portfolio website is designed to display my work and projects. With a focus on modern design principles, the site features a consistent color scheme, responsive layout, and intuitive navigation. It includes a header with my name ("Mohamed Adan"), a section dedicated to project details with placeholders for three projects, and additional sections that I can customize further as my portfolio grows.

## Features

- **Modern Design:** Clean and minimalist layout with a gradient background.
- **Responsive:** Adjusts elegantly for desktops, tablets, and mobile devices.
- **Projects Section:** Placeholders for three projects with space for title, description, and imagery.
- **Easy Customization:** Built with standard React components, vanilla JavaScript, and CSS.

## Tech Stack

- **Frontend Framework:** React
- **Programming Language:** JavaScript (Vanilla)
- **Styling:** CSS
- **Build Tool:** Create React App

## Project Structure

My recommended file structure for the project:

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Projects.js
│   │   └── ProjectItem.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── README.md
```

- **`Header.js`**: Component for the header displaying my name and UMN affiliation.
- **`Projects.js`**: Component to house the three project placeholders.
- **`ProjectItem.js`**: Component for individual project details.
- **`styles.css`**: Contains global styles including the gradient background and component-specific styles.

## Installation

To set up my project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mohamedadan/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**

   If using npm:
   ```bash
   npm install
   ```
   Or if using yarn:
   ```bash
   yarn install
   ```

## Usage

To run the development server:

```bash
npm start
```
or
```bash
yarn start
```

This will start the React development server, and you can view my website in your browser at [http://localhost:3000](http://localhost:3000).

For a production build, run:

```bash
npm run build
```
or
```bash
yarn build
```

## Contributing

Contributions are welcome! If you have suggestions or improvements:
- Fork the repository.
- Create a new branch with your changes.
- Submit a pull request with a clear description of the modifications.

For any questions, please open an issue in the repository.

## License

This project is open source under the [MIT License](LICENSE).

---

Feel free to contact me with any questions or feedback about my portfolio website!