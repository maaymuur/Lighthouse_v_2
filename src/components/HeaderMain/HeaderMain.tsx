import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'; // Импортируем компонент модального окна
import './HeaderMain.css';

const images = [
  'src/assets/images/main_1.png',
  'src/assets/images/main_3.png',
  'src/assets/images/main_2.png',
];

const HeaderMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления модальным окном

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('no-scroll'); // Блокируем прокрутку
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('no-scroll'); // Возвращаем прокрутку
  };
  return (
    <div
      className="header_main"
      id='main'
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        opacity: 1,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <div className='header_logo'>
        <div className="header_main_logo">
          <p>МАЯК</p>
        </div>
        <div className="header_main_logo_add">
          <p>гостевой дом</p>
        </div>
        <div className="button_order">
          <Button label="ЗАБРОНИРОВАТЬ" variant="secondary" onClick={openModal} />
        </div>
      </div>

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className='modal_header'>НАБЕРИТЕ ИЛИ НАПИШИТЕ НАМ:</h2>
        <p>Здесь будет форма для бронирования.</p>
      </Modal>
    </div>
  );
};

export default HeaderMain;
