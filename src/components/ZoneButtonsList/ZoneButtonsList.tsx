import { useState, useEffect } from 'react';
import './ZoneButtonsList.css';

interface ZoneButtonsListProps {
    onZoneClick: (zone: string) => void;
    initialActiveZone?: string; // Добавляем пропс для начальной активной зоны
}

const ZoneButtonsList: React.FC<ZoneButtonsListProps> = ({ onZoneClick, initialActiveZone }) => {
    const [activeZone, setActiveZone] = useState<string | null>(initialActiveZone || null); // Устанавливаем начальное состояние

    const buttons = [
        'ЗОНЫ ОТДЫХА',
        'УЛИЧНАЯ КУХНЯ',
        'АКТИВНЫЙ ДОСУГ',
        'ПАРКОВКА',
        'БЛИЖАЙШИЕ КОММЕРЧЕСКИЕ ЗОНЫ',
    ];

    const handleClick = (zone: string) => {
        setActiveZone(zone); // Установите текущую активную зону
        onZoneClick(zone); // Вызовите функцию обратного вызова
    };

    useEffect(() => {
        setActiveZone(initialActiveZone || null); // Обновляем состояние при изменении пропса
    }, [initialActiveZone]);

    return (
        <div className="button-list">
            {buttons.map((label) => (
                <button
                    key={label} // Используем label как ключ, так как он уникален
                    className={`button-item ${activeZone === label ? 'active' : ''}`} // Исправлено здесь
                    onClick={() => handleClick(label)} // При нажатии передаем название зоны
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default ZoneButtonsList;
