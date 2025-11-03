import { useState, useEffect } from "preact/hooks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header id="main-header">
        <div class="header-container">
          <a href="/" class="logo">
            YESID M.
          </a>

          <nav class="desktop-nav">
            <a href="#">Inicio</a>
            <a href="#projects">Proyectos</a>
            <a href="#skills">Habilidades</a>
            <a href="#experience">Experiencia</a>
            <a href="#contact">Contacto</a>
          </nav>

          <button
            id="hamburger-btn"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "is-active" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav id="mobile-menu" className={isOpen ? "is-active" : ""}>
          <a href="#" onClick={closeMenu}>
            Inicio
          </a>
          <a href="#projects" onClick={closeMenu}>
            Proyectos
          </a>
          <a href="#skills" onClick={closeMenu}>
            Habilidades
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experiencia
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      </header>

      <style>{`
        #main-header {
          position: fixed; top: 0; left: 0; width: 100%; padding: .5rem 2rem;
          background-color: rgba(1, 0, 20, 0.8); backdrop-filter: blur(10px);
          z-index: 9999; border-bottom: 1px solid #00FFFF; box-sizing: border-box;
        }
        .header-container {
          max-width: 1200px; margin: 0 auto; display: flex;
          justify-content: space-between; align-items: center;
        }
        .logo {
          font-family: 'Press Start 2P', system-ui; font-size: 1.2rem;
          color: #FF00FF; text-decoration: none; text-shadow: 0 0 5px #FF00FF;
        }
        .desktop-nav { display: flex; gap: 2rem; }
        .desktop-nav a { color: #E0FFFF; text-decoration: none; font-size: 0.9rem; }
        
        /* Por defecto, los controles móviles están ocultos en escritorio */
        #hamburger-btn, #mobile-menu { display: none; }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          #hamburger-btn {
            display: flex; background: transparent; border: 2px solid #00FFFF;
            border-radius: 4px; padding: 0.5rem; width: 40px; height: 40px;
            flex-direction: column; justify-content: space-around; cursor: pointer;
            box-sizing: border-box;
          }
          #hamburger-btn span {
            display: block; width: 100%; height: 2px; background: #00FFFF;
            transition: transform 0.3s, opacity 0.3s; border-radius: 2px;
          }
          #hamburger-btn.is-active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
          #hamburger-btn.is-active span:nth-child(2) { opacity: 0; }
          #hamburger-btn.is-active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
          
          #mobile-menu {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(1, 0, 20, 0.98); backdrop-filter: blur(10px);
            display: flex; flex-direction: column; align-items: center;
            justify-content: center; gap: 2rem;
            transform: translateX(100%);
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            z-index: -1;
          }
          #mobile-menu.is-active { transform: translateX(0); }
          #mobile-menu a {
            color: #E0FFFF; text-decoration: none; font-size: 2rem;
            font-family: 'Press Start 2P', system-ui;
          }
        }
      `}</style>
    </>
  );
}
