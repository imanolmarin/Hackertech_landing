# HackerTech Landing Page

Welcome to the frontend repository for the **HackerTech Landing Page**, an event site designed with a cyberpunk/terminal-inspired theme.

## 🚀 Features

- **Cyberpunk Theme**: Immersive user interface with neon colors and matrix-style overlays.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern Technologies**: Built with React 18, Vite, Tailwind CSS v4, and Framer Motion.
- **Easter Eggs**: Secret challenges built-in for the hacker community.

## 🛠️ Built With

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## ⚙️ Prerequisites

- **Docker** and **Docker Compose** (Recommended)
- **Node.js** (latest LTS) and **npm/yarn** (if running manually)

## 🐳 Running with Docker (Recommended)

The easiest way to run the HackerTech Landing Page locally is using Docker. This will build an optimized static version and serve it via Nginx.

1. **Clone the repository**:
   ```bash
   cd Hackertech_landing
   ```

2. **Build and start the container**:
   ```bash
   docker compose up --build -d
   ```

3. **View the site**:
   Open your browser and navigate to `http://localhost:8080`.

To stop the site and remove the container, run:
```bash
docker compose down
```

## 💻 Manual Installation (Node.js)

If you prefer to run the development server locally without Docker:

1. **Clone the repository**:
   ```bash
   cd Hackertech_landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file based on `.env.example` if available, and set up your environment variables.

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## 📁 Project Structure

- `src/index.css`: Global styles, CSS variables, and fonts.
- `src/components/`: Reusable React components (Hero, About, Agenda, Rooms, Recap, etc.).
- `public/assets/`: Static multimedia assets.
- `src/assets/`: Assets to be bundled with Vite.


