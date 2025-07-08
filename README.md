# 🚀 Mohd Kamil's Cyberpunk Portfolio

A stunning, immersive 3D portfolio website built with React, Three.js, and modern web technologies. Experience a cyberpunk creative studio where every element is interactive and visually captivating.

## ✨ Features

### 🎮 Interactive 3D Environment
- **Immersive 3D Scene**: Explore a cyberpunk creative studio with floating project cards and skill spheres
- **Orbit Controls**: Click and drag to navigate the 3D environment
- **Hover Effects**: Interactive elements that respond to user interaction
- **Animated Objects**: Floating, rotating 3D elements with neon lighting

### 🎨 Visual Design
- **Neon Cyberpunk Aesthetic**: Custom color palette with pink, blue, green, yellow, and purple neon accents
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Custom CSS Effects**: Neon glow effects, floating animations, and cyberpunk styling

### 📱 Pages & Sections
- **Home**: 3D immersive scene with welcome overlay and feature showcase
- **About**: Interactive timeline, animated skill graph, and personal information
- **Projects**: Gallery with hover-reveal effects, modal previews, and category filtering
- **Skills**: Interactive skill tree, animated progress bars, and detailed skill information
- **Contact**: Animated contact form with 3D social media icons

### 🎵 Interactive Features
- **Background Music Toggle**: Ambient cyberpunk music with animated controls
- **Easter Eggs**: Hidden features including Konami code and secret click areas
- **Loading Screen**: Animated intro with progress bar and pulsing effects
- **Navigation**: Active state indicators and smooth page transitions

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kamil-portfolio.git
   cd kamil-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 🎯 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Scene3D.tsx     # 3D environment
│   ├── LoadingScreen.tsx # Animated loading screen
│   ├── MusicToggle.tsx # Background music controls
│   └── EasterEgg.tsx   # Hidden interactive features
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page with 3D scene
│   ├── About.tsx       # About page with timeline
│   ├── Projects.tsx    # Project gallery
│   ├── Skills.tsx      # Skills showcase
│   └── Contact.tsx     # Contact form
├── assets/             # Static assets
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── App.tsx             # Main application component
```

## 🎨 Customization

### Colors
The neon color palette is defined in `tailwind.config.js`:
- `neon-pink`: #FF4FCE
- `neon-blue`: #00F0FF
- `neon-green`: #39FF14
- `neon-yellow`: #FFF700
- `neon-purple`: #A259FF

### 3D Scene
Modify the 3D environment in `components/Scene3D.tsx`:
- Add new 3D objects
- Adjust lighting and materials
- Create new interactive elements

### Content
Update content in respective page components:
- Personal information in `pages/About.tsx`
- Project details in `pages/Projects.tsx`
- Skills and experience in `pages/Skills.tsx`

## 🎮 Easter Eggs

Discover hidden features:
1. **Konami Code**: Press ↑↑↓↓←→←→BA to reveal a secret
2. **Secret Click**: Click the top-left corner 5 times
3. **Music Toggle**: Click the floating music button in the bottom-right

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Jesse Zhou for the cyberpunk aesthetic inspiration
- Three.js community for 3D graphics examples
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first styling approach

---

**Built with ❤️ and lots of ☕ by Mohd Kamil**
