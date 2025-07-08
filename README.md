# 🚀 Intern Design Assignment – React + TypeScript + Vite

This project is built using **React**, **TypeScript**, and **Vite**, and is a frontend implementation of the [Figma Design Assignment](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=o23ezbh70zPoXGZd-0) provided for intern evaluation.

## 📁 Project Structure

src/
│
├── Components/
│ └── Middle/ # Main UI logic (table rendering, scroll sync, etc.)
│
├── data/
│ └── table_data.json # JSON dataset used for populating the table
│
├── App.tsx # Entry UI composition
├── main.tsx # Vite entry point
└── index.css # Tailwind CSS setup


## 🔧 Tech Stack

- **React** with **TypeScript**
- **Vite** for blazing-fast dev server
- **Tailwind CSS** for utility-first styling
- **ESLint** for linting and code quality
- **Custom scroll-sync logic**
- **Responsive, accessible inputs** (with `title` attributes for a11y)

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/intern-assignment.git

# Navigate into the project folder
cd intern-assignment

# Install dependencies
npm install

# Start the dev server
npm run dev
 
 # To lint the code
npm run lint

...tseslint.configs.recommendedTypeChecked,
...tseslint.configs.strictTypeChecked,
...tseslint.configs.stylisticTypeChecked,

npm install eslint-plugin-react-x eslint-plugin-react-dom

reactX.configs['recommended-typescript'],
reactDom.configs.recommended,
