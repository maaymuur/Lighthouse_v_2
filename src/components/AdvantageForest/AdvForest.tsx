import './AdvForest.css';
import forest from '/assets/images/forest.png'
import clouds from '/assets/images/clouds.png'
import leafs from '/assets/images/leafs.png'

const AdvForest =()=>{
    return(
        <div className='adv_block'>
        
        <div className='adv_block_image'>

        <div className='adv_block_header'>
            ОТДЫХ ДЛЯ ДУШИ И ТЕЛА
        </div>
        <div className='adv_block_text'> Аромат можжевеловой рощи приводит к нормализации работы нервной системы и улучшению настроения</div>    
        <img src={leafs} alt="leafs" className="adv-image leafs-image"/> 
        <img src={forest} alt="forest" className="adv-image forest-image" /> 
        <img src={clouds} alt="clouds" className="adv-image clouds-image" /> 

        </div>
        </div>
    )
}

export default AdvForest