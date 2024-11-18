import MapComponent from '../YandexMap/YandexMap';
import './Footer.css';
import location from '../../assets/images/location-pin.png';
import contact from '../../assets/images/contacts-icon.png';

const Footer = () => {
    return (
        <div className="footer_block" id='contacts'>
            <div className='contacts_block'>
                <div className='contacts_block_header'>
                <img src={contact} alt="contact" className='contact_icon' />
                <p className='contact_text'>КОНТАКТЫ</p>
                </div>
                <div className='contacts_block_text'>
                    <p>Телефон: +7 (123) 456-78-90</p>
                    <p>Email: example@mail.com</p>
                    <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
                </div>
            </div>
            <div className='map_block'>
                <div className='map_block_header'>
                    <img src={location} alt="location" className='location_icon' /> КАК ДО НАС ДОБРАТЬСЯ
                </div>
                <MapComponent />
            </div>
        </div>
    );
}

export default Footer;
