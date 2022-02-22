import { Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Uidesign from './pages/Uidesign';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Other from './pages/Other';

import TheNavbar from './templates/TheNavbar';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-600 to-dark-800 text-lg text-white antialiased">
      <div className="container">
        <TheNavbar />
        <Routes>
          <Route path="/" element={<Discover />}></Route>
          <Route path="/uidesign" element={<Uidesign />}></Route>
          <Route path="/frontend" element={<Frontend />}></Route>
          <Route path="/backend" element={<Backend />}></Route>
          <Route path="/other" element={<Other />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
