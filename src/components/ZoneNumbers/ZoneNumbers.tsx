import { useState } from 'react';
import './ZoneNumbers.css';
import number_1 from '../../assets/images/number_1.png';
import number_2 from '../../assets/images/number_2.png';
import number_3 from '../../assets/images/number_3.png';
import leftArrow from '../../assets/images/arrow_left.png';
import rightArrow from '../../assets/images/arrow-right.png';
import room from '../../assets/images/room.png'
import cook from '../../assets/images/cook.png'
import bath from '../../assets/images/ bath.png'

const ZoneNumbers = () => {
    const images = [number_1, number_2, number_3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="zone_numbers_block" id='numbers'>
            <div className='zone_numbers_main'>
                <div className='zone_numbers_header'>
                    <p className='numbers_header'>НОМЕРА</p>
                    <div className='zone_numbers_section'>
                    <div className='zone_numbers_text'>
                    <img src={room} alt="room" className="icon-image" /> <p className='icon_text'>Есть двуспальные номера</p>
                    <img src={cook} alt="cook" className="icon-image" /> <p className='icon_text'>В каждом номере свой санузел с душем</p>
                    <img src={bath} alt="bath" className="icon-image" /> <p className='icon_text'>Есть общая кухня в домике</p>
                    </div>
                    </div>
                </div>
                <div className='zone_numbers_pictures'>
                    <button onClick={handlePrevImage} className="zones_arrow-button left-arrow">
                        <img src={leftArrow} alt="Предыдущая" className="arrow-image" />
                    </button>
                    <img src={images[currentIndex]} alt="Номер" className="zone-image" />
                    <button onClick={handleNextImage} className="zones_arrow-button right-arrow">
                        <img src={rightArrow} alt="Следующая" className="arrow-image" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ZoneNumbers;
