import { useEffect, useState } from 'react';
import './HeaderMenu.css';
import Button from '../Button/Button';

const HeaderMenu = () => {
  const [menuBgColor, setMenuBgColor] = useState('rgba(135, 255, 248, 0.12)');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления видимостью меню

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > maxScroll * 0.1) {
        setMenuBgColor('#76b3bb92');
      } else {
        setMenuBgColor('rgba(135, 255, 248, 0.12)');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header_menu" style={{ backgroundColor: menuBgColor }}>
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
        <a href="#main">
          <Button label="МАЯК" variant="font" />
        </a>
        <a href="#zone_chooser">
          <Button label="ТЕРРИТОРИЯ" variant="primary" />
        </a>
        <a href="#numbers">
          <Button label="НОМЕРА" variant="primary" />
        </a>
        <a href="#booking">
          <Button label="ЗАБРОНИРОВАТЬ" variant="primary" />
        </a>
        <a href="#contacts">
          <Button label="КОНТАКТЫ" variant="primary" />
        </a>
      </div>
    </div>
  );
};

export default HeaderMenu;