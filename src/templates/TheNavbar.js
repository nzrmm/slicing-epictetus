import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function TheNav() {
  const [list, setList] = useState(false);
  const [menu, setmenu] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  function toggleMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  function checkScreen() {
    if (window.innerWidth <= 1024) {
      return setmenu(true);
    }
    setmenu(false);
  }

  useEffect(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen();
  }, []);

  function toggleList() {
    setList(!list);
  }
  return (
    <nav className="py-8">
      <div className="flex-between">
        <div className="flex">
          <div className="flex-center gap-4">
            <div className="flex-center h-10 w-10 rounded-md bg-dark-500">
              E
            </div>
            Epictetus
          </div>
        </div>

        {menuMobile && (
          <div className="flex-center fixed top-0 right-0 min-h-screen w-full bg-dark-800">
            <div className="flex-center flex-col gap-8">
              <div>
                <input
                  type="text"
                  className="rounded-full bg-dark-700/60 px-8 py-2 outline-none focus:ring-2 focus:ring-dark-500"
                  placeholder="Search"
                />
              </div>
              <Link to="/" className="hover:underline">
                Discover
              </Link>
              <Link to="/articles" className="hover:underline">
                Ui Design
              </Link>
              <Link to="/articles" className="hover:underline">
                Frontend
              </Link>
              <Link to="/articles" className="hover:underline">
                Backend
              </Link>
              <div className="relative">
                <button className="hover:underline" onClick={toggleList}>
                  Other
                </button>
                {list && (
                  <div className="absolute left-0 top-8 grid w-48 overflow-hidden rounded-md bg-dark-800">
                    <Link
                      to="/"
                      onClick={toggleList}
                      className="border-b border-neutral-600/40 px-6 py-3 hover:bg-dark-500">
                      Internet
                    </Link>
                    <Link
                      to="/"
                      onClick={toggleList}
                      className="border-b border-neutral-600/40 px-6 py-3 hover:bg-dark-500">
                      Books
                    </Link>
                    <Link
                      to="/"
                      onClick={toggleList}
                      className="border-b border-neutral-600/40 px-6 py-3 hover:bg-dark-500">
                      Open Source
                    </Link>
                  </div>
                )}
              </div>
              <div
                class="flex-center mt-4 h-12 w-12 cursor-pointer rounded-full bg-dark-700/60"
                onClick={toggleMenuMobile}>
                <img src="/icons/icon-close.svg" alt="icon-close" />
              </div>
            </div>
          </div>
        )}

        <div className="lg:flex-between hidden gap-32">
          <div className="flex gap-10">
            <Link to="/" className="hover:underline">
              Discover
            </Link>
            <Link to="/articles" className="hover:underline">
              Ui Design
            </Link>
            <Link to="/articles" className="hover:underline">
              Frontend
            </Link>
            <Link to="/articles" className="hover:underline">
              Backend
            </Link>
            <div className="relative">
              <button className="hover:underline" onClick={toggleList}>
                Other
              </button>
              {list && (
                <div className="absolute left-0 top-8 grid w-48 overflow-hidden rounded-md bg-dark-800">
                  <Link
                    to="/"
                    onClick={toggleList}
                    className="border-b border-neutral-600/40 px-6 py-3 hover:bg-dark-500">
                    Internet
                  </Link>
                  <Link
                    to="/"
                    onClick={toggleList}
                    className="border-b border-neutral-600/40 px-6 py-3 hover:bg-dark-500">
                    Books
                  </Link>
                  <Link
                    to="/"
                    onClick={toggleList}
                    className="border-b border-neutral-600/40 px-6 py-3 hover:bg-dark-500">
                    Open Source
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div>
            <input
              type="text"
              className="rounded-full bg-dark-700/60 px-8 py-2 outline-none focus:ring-2 focus:ring-dark-500"
              placeholder="Search"
            />
          </div>
        </div>

        {menu && (
          <img
            src="/icons/icon-menu.svg"
            onClick={toggleMenuMobile}
            alt="icon-menu"
          />
        )}
      </div>
    </nav>
  );
}
