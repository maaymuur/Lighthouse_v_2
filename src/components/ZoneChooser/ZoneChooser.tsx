import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // Импортируем хук
import ZoneButtonsList from '../ZoneButtonsList/ZoneButtonsList';
import './ZoneChooser.css';
import main1 from '../../assets/images/main_1.png';
import main2 from '../../assets/images/main_2.png';
import leftArrow from '../../assets/images/arrow_left.png';
import rightArrow from '../../assets/images/arrow-right.png';
import active_1 from '../../assets/images/active_zones_1.png';
import parking_1 from '../../assets/images/parking_1.png'
import parking_2 from '../../assets/images/parking_2.png'
import kitchen_1 from '../../assets/images/street_kitchen_1.png'
import kitchen_2 from '../../assets/images/street_kitchen_2.png'
import kitchen_3 from '../../assets/images/street_kitchen_3.png'

const ZoneChooser = () => {
    const [zoneText, setZoneText] = useState('');
    const [zoneImages, setZoneImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const zoneImagesData: Record<string, string[]> = {
        'ЗОНЫ ОТДЫХА': [main1, main2],
        'УЛИЧНАЯ КУХНЯ': [kitchen_1, kitchen_2, kitchen_3],
        'АКТИВНЫЙ ДОСУГ': [active_1],
        'ПАРКОВКА': [parking_1, parking_2]
    };

    const zoneDescriptions: Record<string, string> = {
        'ЗОНЫ ОТДЫХА': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        'УЛИЧНАЯ КУХНЯ': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        'АКТИВНЫЙ ДОСУГ': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        'ПАРКОВКА': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        'БЛИЖАЙШИЕ КОММЕРЧЕСКИЕ ЗОНЫ': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    };

    const handleZoneChange = (zone: string) => {
        setZoneText(zoneDescriptions[zone] || 'Выберите зону для описания');
        setZoneImages(zoneImagesData[zone] || []);
        setCurrentImageIndex(0);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? zoneImages.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === zoneImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNextImage,    // Если свайп влево — показываем следующее изображение
        onSwipedRight: handlePrevImage,   // Если свайп вправо — показываем предыдущее изображение
    });

    useEffect(() => {
        handleZoneChange('ЗОНЫ ОТДЫХА');
    }, []);

    return (
        <main className="zone-chooser" id="zone_chooser">
            <div className="header_zone_block">ТЕРРИТОРИЯ</div>
            <div className="buttons_zone_block">
                <ZoneButtonsList onZoneClick={handleZoneChange} initialActiveZone="ЗОНЫ ОТДЫХА" />
            </div>
            <div className="main_zone_block">
                <div className="text_zone_block">{zoneText}</div>
                <div className="pictures_zone_block">
                    {zoneImages.length > 0 && (
                        <div
                            className="image-slider"
                            {...swipeHandlers}  // Добавляем обработчик свайпов
                        >
                            <button onClick={handlePrevImage} className="arrow-button left-arrow">
                                <img src={leftArrow} alt="Назад" className="arrow-image" />
                            </button>
                            <img
                                src={zoneImages[currentImageIndex]}
                                alt="Зона"
                                className="zone-image"
                            />
                            <button onClick={handleNextImage} className="arrow-button right-arrow">
                                <img src={rightArrow} alt="Вперед" className="arrow-image" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ZoneChooser;
