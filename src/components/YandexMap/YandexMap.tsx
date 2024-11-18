import { useEffect } from 'react';
import './YandexMap.css';

const MapComponent = () => {
  useEffect(() => {
    // Проверяем, существует ли уже скрипт карты
    const existingScript = document.getElementById('yandex-map-script');
    if (!existingScript) {
      // Создаем и добавляем скрипт к документу
      const script = document.createElement('script');
      script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A05711c939b11aa7ec8e0e586487269662beb0f4a67b3a333d6713ab518a0a01a&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
      script.async = true;
      script.id = 'yandex-map-script'; // Устанавливаем ID для скрипта
      const mapContainer = document.getElementById('map-container');

      if (mapContainer) {
        mapContainer.appendChild(script);
      } else {
        console.error("Элемент с ID 'map-container' не найден.");
      }
    }
  }, []);

  return (
    <div id="map-container" className="map-container"></div>
  );
};

export default MapComponent;
