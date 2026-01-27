# ByteGame

A modern, responsive web application built with React, TypeScript, and Chakra UI. ByteGame showcases professional frontend development practices with state management, routing, and API integration.

## Features

- **Modern UI Framework**: Built with Chakra UI for accessible and beautiful components
- **Type-Safe Development**: Full TypeScript support for better code quality and IDE support
- **Client-Side Routing**: React Router DOM for seamless navigation
- **State Management**: Zustand for lightweight and flexible state management
- **Data Fetching**: TanStack React Query for powerful server state management
- **Dark Mode Support**: Built-in theme switching with next-themes
- **Smooth Animations**: Framer Motion for elegant UI animations
- **Infinite Scroll**: React Infinite Scroll Component for better UX
- **Development Tools**: React Query DevTools for debugging

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Library**: Chakra UI
- **State Management**: Zustand
- **Server State**: TanStack React Query
- **Routing**: React Router DOM
- **Styling**: Emotion (Chakra UI's styling engine)
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Development**: Node 24

## Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page components for routing
├── routes.tsx       # Route definitions
├── services/        # API and external service calls
├── hooks/           # Custom React hooks
├── entities/        # TypeScript type definitions and interfaces
├── data/            # Static data files
├── store.ts         # Zustand state store
├── theme.ts         # Chakra UI theme configuration
├── main.tsx         # React entry point
├── index.css        # Global styles
└── assets/          # Static assets (images, fonts, etc.)
```

## Installation
1. Go to rawg.io website
2. Register and apply for your won api key
3. Clone or download the project
4. Replace it in api-client file
5. Navigate to the project directory:
   ```bash
   cd ByteGame
   ```
6. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

### Development
Start the development server with hot module reloading:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build
Create an optimized production build:
```bash
npm run build
```

This command runs TypeScript compilation followed by Vite build optimization.

### Preview
Preview the production build locally:
```bash
npm run preview
```

## Development

### Setting Up Your Environment

1. Ensure Node.js 24+ is installed
2. Install VS Code recommended extensions for TypeScript and React
3. The project uses Vite for fast development and HMR (Hot Module Replacement)

### Code Organization

- **Components**: Store reusable UI components in the `components/` directory
- **Pages**: Create new pages in the `pages/` directory and add routes in `routes.tsx`
- **Services**: API calls and external integrations go in `services/`
- **Hooks**: Custom React hooks in `hooks/`
- **Types**: Entity definitions and interfaces in `entities/`

### State Management

The project uses Zustand for global state. Access your store from any component using the `store.ts` file.

### API Integration

TanStack React Query is configured for server state management. Use it for:
- Fetching data
- Caching
- Synchronization
- Background updates

React Query DevTools are available in development mode for debugging.

### Theming

Chakra UI theme can be customized in `theme.ts`. Supports dark mode through next-themes integration.

## Browser Support

Works on all modern browsers that support ES2020+

## License

This project is part of a web development practice course.
