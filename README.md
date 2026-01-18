# Pokedex

A modern web application built with React and TypeScript that allows you to explore the first 151 Pokémon from the original generation. This project was developed as part of a selection process, focusing on functionality, user experience, responsiveness, and development best practices.

## 🎯 Features

### Listing Page
- ✅ Complete list of the first 151 Pokémon
- ✅ Search and filter by Pokémon name or number
- ✅ Pagination for efficient navigation through large amounts of data
- ✅ Sorting by number (ascending/descending) or name (A-Z/Z-A)
- ✅ Grid or list view
- ✅ Cards with name and thumbnail image for each Pokémon
- ✅ Loading state with skeletons
- ✅ Empty states

### Pokémon Details Page
- ✅ Complete information for each Pokémon:
  - Pokémon number
  - Pokémon name
  - Genus
  - Description (flavor text)
  - Official Pokémon image
  - Types (with colored badges)
  - Base stats (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)
  - Height and weight
  - Abilities (including hidden abilities)
- ✅ Navigation back to the list
- ✅ Loading and error states

### Additional Features
- ✅ **Parcial Multi-language support** 
  - Automatic browser language detection
  - Language selector in the header
  - Descriptions and genera translated according to selected language
- ✅ Light/dark theme with persistence
- ✅ Responsive design (mobile-first)
- ✅ SEO: titles and descriptions
- ✅ Performance optimized with React Query (intelligent cache and refetch)
- ✅ "Surprise Me" button to discover random Pokémon

## 🛠️ Technologies and Dependencies

### Main Dependencies

- **React** (^19.2.0) - Library for building the interface
- **TypeScript** (~5.9.3) - Static typing for increased safety and productivity
- **Vite** (^7.2.4) - Modern and fast build tool
- **React Router DOM** (^7.12.0) - Client-side routing
- **@tanstack/react-query** (^5.90.19) - Server state management and data caching
- **@emotion/react** (^11.14.0) & **@emotion/styled** (^11.14.1) - CSS-in-JS for styling
- **@radix-ui/react-select** (^2.2.6) - Accessible Select component
- **@radix-ui/react-label** (^2.1.8) - Accessible Label component
- **react-icons** (^5.5.0) - Icon library

### Development Dependencies

- **@biomejs/biome** (2.3.11) - Linter and formatter (alternative to ESLint/Prettier)
- **Vitest** (^4.0.17) - Testing framework
- **@testing-library/react** (^16.3.1) - Utilities for testing React components
- **@testing-library/jest-dom** (^6.9.1) - Custom DOM matchers
- **@testing-library/user-event** (^14.6.1) - User interaction simulation

### Technology Choices Justification

- **Vite**: Extremely fast build tool with instant HMR and production optimizations
- **React Query**: Automatically manages API data cache, reducing unnecessary requests and improving performance
- **Emotion**: CSS-in-JS with theme support, enabling dynamic styling and componentization
- **Radix UI**: Accessible and unstyled components, allowing full customization while maintaining accessibility
- **Biome**: Unified linter and formatter, faster than ESLint + Prettier
- **Vitest**: Modern testing framework, compatible with Vite and TypeScript

## 📦 Installation and Running

### Prerequisites

- Node.js (version 18 or higher)
- Yarn or npm

### Installation

```bash
# Install dependencies
yarn install
# or
npm install
```

### Development

```bash
# Start development server
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
yarn build
# or
npm run build
```

Optimized files will be generated in the `dist/` folder

### Preview Production Build

```bash
# Preview production build locally
yarn preview
# or
npm run preview
```

## 🧪 Testing

```bash
# Run tests in watch mode
yarn test
# or
npm run test

# Run tests once
yarn test:run
# or
npm run test:run

# Run tests with coverage
yarn test:coverage
# or
npm run test:coverage
```

## 🎨 Linting and Formatting

```bash
# Check and fix linting issues
yarn lint
# or
npm run lint

# Format code
yarn format
# or
npm run format
```

## 📁 Project Structure

```
pokedex/
├── public/                 # Static files
│   ├── fonts/             # Custom fonts
│   └── image/             # Images and icons
├── src/
│   ├── components/        # Reusable components
│   │   ├── layout/       # Layout components (Header, Container, Grid)
│   │   └── ui/           # UI components (Button, Card, Badge, etc.)
│   ├── constants/        # Application constants
│   ├── contexts/         # React contexts (Theme, Language)
│   ├── pages/            # Application pages
│   ├── services/         # API services and mappers
│   ├── styles/           # Global styles, theme and utilities
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   └── widgets/          # Complex widgets (Home, Details)
├── index.html            # Main HTML
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Vitest configuration
└── package.json          # Dependencies and scripts
```

## 🌐 API

The application uses [PokeAPI](https://pokeapi.co/) as the data source:

- **Species endpoint**: `https://pokeapi.co/api/v2/pokemon-species/`
- **Pokémon endpoint**: `https://pokeapi.co/api/v2/pokemon/`
- **Game version**: Data extracted from X and Y versions (as suggested)

The application fetches the first 151 Pokémon from the first generation and makes batch requests to optimize loading.

## 🚀 Deployment

The application is configured to be deployed as a static site. You can use any static hosting service:

- **Vercel**: Connect your GitHub repository and deployment will be automatic
- **Netlify**: Drag the `dist` folder or connect the repository
- **GitHub Pages**: Configure the workflow to build and deploy
- **Cloudflare Pages**: Connect the repository and configure the build command

### Environment Variables

No environment variables are required, as the application uses the public PokeAPI.

## 🐛 Error Handling

The application handles the following error scenarios:

- Network errors when fetching data from the API
- Pokémon not found (404)
- Invalid IDs in the URL
- Empty states (no search results)
- Loading errors with visual feedback to the user
- Fallback to English when descriptions are not available in the selected language

## 📄 License

This project was developed as part of a selection process.

---

**Public link**: [https://kahzitacodes.github.io/pokedex/]

**Repository**: [https://github.com/kahzitacodes/pokedex]
