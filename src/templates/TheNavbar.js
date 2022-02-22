import { Link } from 'react-router-dom';

export default function TheNav() {
  return (
    <nav className="flex-between mb-4 py-8">
      <div className="flex-center gap-32">
        <div className="flex-center gap-4">
          <div className="flex-center h-10 w-10 rounded-md bg-dark-500">E</div>
          <span>Epictetus</span>
        </div>
        <div className="flex gap-10">
          <Link to="/">Discover</Link>
          <Link to="/uidesign">Ui Design</Link>
          <Link to="/frontend">Frontend</Link>
          <Link to="/backend">Backend</Link>
          <Link to="/other">Other</Link>
        </div>
      </div>
      <div>
        <input
          type="text"
          className="rounded-full bg-dark-700/60 px-8 py-2 outline-none focus:ring-2 focus:ring-dark-500"
          placeholder="Search"
        />
      </div>
    </nav>
  );
}
