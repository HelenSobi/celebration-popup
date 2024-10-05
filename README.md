# Celebration Popups with Next.js, Tailwind CSS, and Framer

This project is a Next.js application that features animated celebration popups with Framer Motion, styled using Tailwind CSS. The app demonstrates two types of celebration popups: a full-page popup and a compact reward popup, both of which are responsive for web and mobile. Popups are managed using Context API for global state management.

## Demo

You can visit the live demo here: [Live Demo Link](#) (Add link if deployed)

## Features

- Full-page and compact popups with smooth animations
- Global state management for showing/hiding popups using Context API
- Responsive design using Tailwind CSS
- Framer Motion for animation effects
- Simple and clean UI for triggering popups

## Technologies

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for responsive designs
- [Framer Motion](https://www.framer.com/motion/) - Library for animations and transitions
- Context API - Built-in React API for managing global state

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm 

### Setup

1. Clone the repository:

   git clone https://github.com/yourusername/celebration-popups.git
   cd celebration-popups

2. Install the dependencies:

    npm install

3. Run the development server:
    npm run dev

4. Open http://localhost:3000 to see the app in the browser.

# Usage
On the homepage, click on the buttons to trigger either a Full Page Popup or a Compact Popup.
The popups are animated using Framer Motion and will appear based on the button clicked.
The visibility of the popups is controlled by the Context API, ensuring smooth transitions between states.

# Managing Popups
Full Page Popup: Displays a full-screen celebratory animation with an XP bar and badge animation.
Compact Popup: Displays a smaller, reward-based popup with icons and reward animations.

# Global Font
The Inter font is applied globally throughout the app via a CDN link in the globals.css file, ensuring consistent typography across the app.

# Adding New Popups
To add new types of popups, create a new popup component and integrate it into the global state using the PopupContext.js.

# Folder Structure
.
├── components
│   ├── FullPagePopup.js     # Full page popup component
│   ├── CompactPopup.js      # Compact popup component
│   └── context
│       └── PopupContext.js  # Context API for managing popup state
├── pages
│   ├── _app.js              # Custom App component with PopupProvider
│   └── index.js             # Home page with popup trigger buttons
├── public                   # Public assets like images for popups
├── styles
│   ├── globals.css          # Global CSS file with Tailwind imports
├── tailwind.config.js        # Tailwind configuration file
└── package.json             # Project dependencies and scripts

