import { useEffect, useState } from 'react';
import './HeaderMenu.css';
import Button from '../Button/Button';

const HeaderMenu = () => {
  const [menuBgColor, setMenuBgColor] = useState('rgba(135, 255, 248, 0.12)'); // Начальный цвет фона меню

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Максимальная прокрутка
      const scrollY = window.scrollY; // Текущая позиция прокрутки

      // Определяем, изменять ли цвет текста и фона
      if (scrollY > maxScroll * 0.1) {
        setMenuBgColor('#76b3bb92'); // Изменяем цвет фона
      } else {
        setMenuBgColor('rgba(135, 255, 248, 0.12)'); // Возвращаем цвет фона на начальный
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Убираем слушатель при размонтировании
    };
  }, []);

  return (
    <div className='header_menu' style={{ backgroundColor: menuBgColor }}>
      <div className="menu">
        <a href="#main">
          <Button label="МАЯК" variant="font"  />
        </a>
        <a href="#zone_chooser">
          <Button label="ТЕРРИТОРИЯ" variant="primary" />
        </a>
        <a href="#numbers">
          <Button label="НОМЕРА" variant="primary"/>
        </a>
        <a href="#booking">
          <Button label="ЗАБРОНИРОВАТЬ" variant="primary" />
        </a>
        <a href="#contacts">
          <Button label="КОНТАКТЫ" variant="primary"/>
        </a>
      </div>
    </div>
  );
};

export default HeaderMenu;
