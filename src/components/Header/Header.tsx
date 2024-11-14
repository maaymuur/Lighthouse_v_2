import HeaderMenu from '../HeaderMenu/HeaderMenu'
import HeaderMain from '../HeaderMain/HeaderMain'
import'./Header.css'
import HeaderBlocks from '../HeaderBlocks/HeaderBlocks';

const Header = () => {
    return (
        <header>
            <HeaderMenu />
            <HeaderMain />
            <HeaderBlocks/>
        </header>
    );
};

export default Header;