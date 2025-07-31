# Weather App 🌤️

A responsive weather application built as part of [The Odin Project](https://www.theodinproject.com/) curriculum. This project demonstrates proficiency in vanilla JavaScript, API integration, and responsive design principles. Features a beautiful dark theme with glowing blue accents and smooth animations while showcasing modern web development practices.

## ✨ Features

- **Real-time weather data** for any city worldwide via API integration
- **7-day forecast** with detailed daily information processing
- **Temperature unit toggle** (°F/°C) with smooth animations and instant conversion
- **Responsive design** that adapts seamlessly across desktop, tablet, and mobile devices
- **Beautiful UI** with glassmorphism effects and glowing elements
- **Weather icons** that dynamically match current conditions
- **Smooth hover effects** and CSS transitions throughout
- **Asynchronous JavaScript** for non-blocking API requests
- **Error handling** for network failures and invalid city searches

## 🚀 Live Demo

[View Live Demo](https://CalvinPrajogo.github.io/weather-app)

## 🛠️ Technologies Used

This project showcases modern web development skills learned through The Odin Project curriculum:

- **HTML5** - Semantic markup structure and accessibility best practices
- **CSS3** - Advanced styling techniques including:
  - CSS Grid & Flexbox for responsive layouts
  - CSS Gradients, transforms & animations
  - Glassmorphism effects and custom toggle switches
  - Mobile-first responsive design with media queries
- **JavaScript (ES6+)** - Modern JavaScript development demonstrating:
  - **Async/await** for handling API requests
  - **Fetch API** for making HTTP requests to external services
  - **DOM manipulation** for dynamic content updates
  - **Event handling** for user interactions
  - **Data processing** and temperature conversion utilities
  - **Error handling** for robust user experience
- **API Integration** - Visual Crossing Weather API implementation
- **Webpack** - Module bundling and development server configuration
- **Babel** - JavaScript transpilation for browser compatibility

## 🏗️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/CalvinPrajogo/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── index.html          # Main HTML file
│   ├── index.js            # JavaScript logic and API calls
│   ├── style.css           # CSS styles and animations
│   └── assets/
│       └── icons/          # Weather condition icons
├── webpack.config.js       # Webpack configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 Key Features Explained

### API Integration & Data Management
- **Asynchronous JavaScript** using fetch() and async/await patterns
- **RESTful API consumption** from Visual Crossing Weather service
- **JSON data processing** to extract relevant weather information
- **Smart caching** to avoid unnecessary API calls during unit conversions
- **Error handling** for network issues and invalid responses

### Temperature Toggle Switch
- **Custom CSS toggle** with glassmorphism design principles
- **Smooth sliding animation** using CSS transforms and transitions
- **JavaScript state management** for unit conversion without re-fetching data
- **Dynamic label highlighting** to indicate active temperature unit

### Responsive JavaScript Architecture
- **Event-driven programming** for user interactions
- **Global state management** for weather data and user preferences
- **Modular function design** for maintainable and reusable code
- **DOM manipulation** for dynamic content updates without page refreshes

### Responsive Design
- **Mobile-first approach** with progressive enhancement methodology
- **Flexible layouts** using CSS Grid and Flexbox for optimal viewing on any device
- **Breakpoint optimization** for screens from 320px to 1200px+
- **Touch-friendly interface** with appropriate sizing for mobile interactions
- **Cross-browser compatibility** ensured through modern CSS techniques

## 🎓 Learning Objectives (The Odin Project)

This project demonstrates mastery of key concepts from The Odin Project curriculum:

- **API Integration**: Working with external APIs and handling asynchronous JavaScript
- **Responsive Design**: Creating layouts that work across all device sizes
- **Modern JavaScript**: Using ES6+ features, async/await, and proper error handling
- **User Experience**: Building intuitive interfaces with smooth animations and feedback
- **Code Organization**: Structuring JavaScript for maintainability and readability
- **Build Tools**: Using Webpack for modern development workflow

## 🌟 Future Enhancements

- [ ] Add location-based weather (geolocation API)
- [ ] Weather alerts and notifications
- [ ] Hourly forecast display
- [ ] Weather maps integration
- [ ] Dark/light theme toggle
- [ ] Favorite cities list
- [ ] Weather history charts

## 🙏 Acknowledgments

- Weather icons from [Weather Icons](https://erikflowers.github.io/weather-icons/)
- Weather data provided by [Visual Crossing Weather API](https://www.visualcrossing.com/)
- Font: [Oxygen](https://fonts.google.com/specimen/Oxygen) from Google Fonts

## 📞 Contact

**Calvin Prajogo**
- GitHub: [@CalvinPrajogo](https://github.com/CalvinPrajogo)
- Email: prajogo@wisc.edu

---
