import Button from "../Button/Button";
import './ButtonBlock.css';
import Modal from '../Modal/Modal'; // Импортируем компонент модального окна
import { useState } from "react";

const ButtonBlock = () => {

    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления модальным окном

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('no-scroll'); // Блокируем прокрутку
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('no-scroll'); // Возвращаем прокрутку
      };
    return (
        <div className="button_block" id="booking">
            <Button 
                label="ЗАБРОНИРОВАТЬ" 
                variant="secondary" 
                onClick={openModal}
                className="custom-button" // Добавляем класс
            />
             {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Бронирование</h2>
        <p>Здесь будет форма для бронирования.</p>
      </Modal>
    </div>
        
    )
}

export default ButtonBlock;
