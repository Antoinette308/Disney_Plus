# Disney+ Clone 🎬🍿

A fullstack Disney+ streaming platform clone built with React and Firebase, featuring real-time data synchronisation, OAuth authentication, and responsive design.

## About 

This project is a recreation of the Disney+ streaming interface, showcasing modern web development practices and cloud integration skills. Featuring dynamic content management, user authentication, and a fully responsive design that adapts to various screen sizes. It integrates multiple APIs and implements real-time data streaming for an authentic user experience.

### [➡️ Click here to view the Disney+ clone web app](https://disneyplus-clone-2214e.web.app/)

https://github.com/user-attachments/assets/ed714fad-b525-4301-8faf-d7ebb2c73e5d

## 🚀 Features 

### 🎬 **Movie Content Management**
- **4 Dynamic Categories**: Recommended, New to Disney+, Originals, and Trending sections
- **Real-time Data Updates**: Live synchronisation with Firebase Firestore database
- **Individual Movie Details**: Dynamic routing with parameterized URLs for each movie
- **5 Brand Viewers**: Interactive Disney, Pixar, Marvel, Star Wars, and National Geographic viewers

### 🎨 **User Interface**
- **Responsive Design**: Mobile responsive approach with CSS Grid and Flexbox
- **Interactive Carousel**: Auto-playing image slider for movies with navigation controls
- **Hover Animations**: Dynamic visual effects on movie cards and brand viewers
- **Modern Styling**: Styled-components implementation with Disney+ theming

### 🔐 **Authentication System**
- **Google OAuth Integration**: Secure sign-in with Google accounts
- **Session Persistence**: Maintained user state across browser sessions  
- **Protected Routes**: Conditional navigation based on authentication status
- **Profile Management**: User photo and information display


## 🛠️ Tech Stack

### **Frontend Technologies**
- **React** - Component-based UI framework
- **React Router DOM** - Client-side routing and navigation
- **Redux Toolkit** - State management and async data handling
- **Styled Components** - CSS in JS styling 
- **React Slick** - Carousel and slider components
- **Vite** - Build tool and development server

### **Backend & Cloud Services**
- **Firebase Authentication** - User authentication and authorization
- **Firebase Firestore** - NoSQL real-time database
- **Firebase Storage** - File storage and media management
- **Firebase Hosting** - Production deployment and hosting


## 💻 Frontend Development

### **Component Architecture** (11 Components)

- **Core Components**: `App`, `Header`, `Home`, `Login`, `Detail`
- **Feature Components**: `ImgSlider`, `Viewers`, `Recommends`, `NewDisney`, `Originals`, `Trending`

### **State Management**
- **Redux Store Configuration**: Centralised state management with Redux Toolkit
- **User Slice**: Authentication state, user profile, and session management
- **Movie Slice**: Content categorization, real-time data updates, and UI state

### **Routing System** (3 Main Routes)
- **Landing Page** (`/`) - Authentication and welcome interface
- **Home Dashboard** (`/home`) - Main content browsing experience  
- **Movie Details** (`/detail/:id`) - Individual movie information pages


## 🌐 Backend Integration and API's

### **Firebase Multi-Service Integration**
Comprehensive cloud backend implementation demonstrating API integration skills:

#### **Real-time Database Operations**
```javascript
// Live data streaming with onSnapshot listeners
db.collection('movies').onSnapshot((snapshot) => {
    // Real-time data processing and state updates
});

// Document retrieval with error handling
db.collection("movies").doc(id).get()
    .then((doc) => { /* Handle response */ })
    .catch((error) => { /* Error management */ });
```

#### **Authentication API Implementation**
- **OAuth Flow Management**: Complete Google Sign-In integration
- **Session State Monitoring**: Real-time authentication state changes
- **Secure Token Management**: Automatic token refresh and validation
- **User Profile Synchronisation**: API-driven user data management

#### **API Integration Highlights**
- **Asynchronous Operations**: Modern async/await patterns for API calls
- **State Synchronization**: Real-time data binding between Firebase and Redux
- **Error Resilience**: Comprehensive error handling across all API interactions  
- **Performance Optimization**: Efficient data fetching and caching strategies
---

