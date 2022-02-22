import { Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Articles from './pages/Articles';
import ArticlesDetail from './pages/ArticlesDetail';

import TheNavbar from './templates/TheNavbar';
import TheFooter from './templates/TheFooter';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <div className="container">
        <TheNavbar />
        <Routes>
          <Route path="/" element={<Discover />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/:id" element={<ArticlesDetail />}></Route>
        </Routes>
        <TheFooter />
      </div>
    </main>
  );
}

export default App;
