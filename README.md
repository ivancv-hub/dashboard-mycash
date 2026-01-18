# mycash+

**mycash+** is a modern, responsive financial management dashboard designed for families. It allows users to track income, expenses, credit cards, and financial goals in a unified and intuitive interface.

![Project Status](https://img.shields.io/badge/status-development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Features

- **Dashboard Overview**: Real-time summary of balance, income, and expenses.
- **Transaction Management**: Detailed tracking of daily financial activities.
- **Credit Card Widget**: Visual tracking of credit card limits and bills.
- **Goals & Planning**: Set and monitor financial goals for the family.
- **Family Management**: Multi-user support for family members to track individual spending.
- **Responsive Design**: Optimized for Desktop (Sidebar), Tablet, and Mobile (Drawer Navigation).
- **Dark/Light Mode Ready**: Built with a scalable design system (tokens).

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: React Context API (No external libraries for state)

## 📂 Project Structure

The project follows a Domain-Driven Design (DDD) inspired structure within `src/components`:

```bash
src/
├── assets/              # Static assets (images, svg)
├── components/
│   ├── layout/          # Sidebar, Header, MobileDrawer
│   ├── dashboard/       # Widgets specific to the dashboard view
│   ├── transactions/    # Tables and filters for transactions
│   ├── cards/           # Credit card components
│   ├── goals/           # Goals visualization components
│   ├── modals/          # Global modal system
│   └── ui/              # Reusable atom components (Button, Input, Badge)
├── contexts/            # Global Application State (FinanceContext)
├── hooks/               # Custom Hooks (useFinance, useMedia)
├── lib/                 # Utilities (formatters, cn)
├── pages/               # Main View Components (routed)
├── styles/              # Global CSS and Tailwind directives
└── types/               # TypeScript Interfaces (Transaction, Member, etc.)
```

## 🎨 Design System

The UI is built upon a strict set of design tokens tailored for financial data visualization:

- **Primary Color**: Lime (`#DFFE35`) for actions and highlights.
- **Semantic Colors**: Green for Income, Red for Expenses.
- **Typography**: Inter/Roboto for clean readability.

## 🏁 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ivancv-hub/dashboard-mycash.git
   cd dashboard-mycash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📄 Documentation

- [Project Specifications](./docs/specifications.md): Detailed functional requirements.
- [Design Tokens](./docs/tokens.md): Reference for colors, spacing, and typography.
- [Prompt Sequence](./docs/Sequência%20de%20prompts.md): Plan of execution for the AI assistant.

---

Developed with ❤️ by Ivan Vanzella
