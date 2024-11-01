import '../HeaderMenu/HeaderMenu.css';

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'third' | 'font';
  onClick?: () => void;
  className?: string; // Новый пропс для кастомного класса
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, className}) => {
  const buttonClass = `header-button header-button--${variant} ${className || ''}`; // Добавляем кастомный класс

  return (
      <button className={buttonClass} onClick={onClick} > {/* Устанавливаем цвет текста через стиль */}
          {label}
      </button>
  );
};

export default Button;
