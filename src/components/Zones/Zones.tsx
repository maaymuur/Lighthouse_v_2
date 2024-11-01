import AdvForest from "../AdvantageForest/AdvForest";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import Footer from "../Footer/Footer";
import ZoneChooser from "../ZoneChooser/ZoneChooser";
import ZoneNumbers from "../ZoneNumbers/ZoneNumbers";

const Zones = () => {
    return (
    <main>
        <ZoneChooser />
        <ZoneNumbers />
        <AdvForest />
        <ButtonBlock />
        <Footer />
    </main>
    );
}

export default Zones;
