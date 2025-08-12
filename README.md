# TurningPages

TurningPages is a modern, responsive book website built with React and TypeScript.  
It leverages Redux Toolkit for state management, Zod for schema validation, shadcn UI components for styling, and React Router for client-side routing.

---

## Features

- Browse and search books by title, author, genre, and ISBN
- Add, borrow, and manage book inventory
- Form validation with Zod, including advanced async checks
- Smooth client-side navigation with React Router
- Global state management using Redux Toolkit Query
- Clean, accessible UI powered by shadcn components
- Loading spinners for asynchronous actions to improve UX

---

## Tech Stack

- **React** - Frontend library
- **TypeScript** - Static typing for safer code
- **Redux Toolkit (RTK Query)** - API data fetching and caching
- **Zod** - Schema validation and form parsing
- **shadcn UI** - UI component library with Tailwind CSS
- **React Router v7** - Client-side routing
- **Loading spinner** - Custom or library-based spinner for async feedback

---

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone git@github.com:RajuM1997/Library-Management-Frontend.git
cd Library-Management-Frontend

npm install
# or
yarn install

npm start
# or
yarn start


src/
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── pages/           # Route-based pages
├── routes/          # React Router routes configuration
├── store/           # Redux store setup
├── types/           # TypeScript types and interfaces
├── utils/           # Utility functions
├── layout/           # Main layout
└── main.tsx         # Main app component

```
