# Website Project

A modern, minimalist website built with React and Node.js, inspired by Zara's clean design aesthetic.

## Features

- **Three Pages**: Home (image grid), Settings, and About
- **Burger Menu**: Fixed bottom-left navigation menu
- **Responsive Design**: Works on all device sizes
- **Clean Architecture**: Modular React components with CSS modules
- **Zara-inspired Styling**: Minimal, elegant design with neutral colors

## Project Structure

```
test-website-project/
├── backend/          # Node.js/Express server
├── frontend/         # React application
└── package.json      # Root package.json for convenience scripts
```

## Setup Instructions

### 1. Install Dependencies

Install all dependencies for both backend and frontend:

```bash
npm run install-all
```

Or install them separately:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Development

Run the frontend development server:

```bash
npm run dev:frontend
```

The React app will start on `http://localhost:3000`

For backend development (with nodemon):

```bash
npm run dev:backend
```

### 3. Production Build

Build the React app for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

The server will serve the built React app on `http://localhost:3000`

## Pages

- **Home** (`/`): Displays a responsive grid of images
- **Settings** (`/settings`): User settings form with account and preferences
- **About** (`/about`): Information about the website

## Technologies

- **Frontend**: React 18, React Router 6, CSS Modules
- **Backend**: Node.js, Express
- **Build Tool**: Create React App

## Customization

- Replace the sample images in `frontend/src/pages/Home.jsx` with your own images
- Modify the styling in the respective CSS files to match your brand
- Add more pages by creating new components in `frontend/src/pages/` and adding routes in `App.jsx`
