import { Link } from 'react-router-dom';
import mapStyle from './Map.module.css';

export function HikingMap({ map }) {

    function Lvl({map}) {
        if (map.properties.cos_lvl) {
            return (
                <div className={ mapStyle.lvl }>
                <h5>난이도</h5><p>{map.properties.cat_nam}</p>
                </div>
            );
        } else {
            return (
                <div className={ mapStyle.lvl }>
                <h5>난이도</h5><p>無</p>
                </div>
            );
        }
    }

    return (
        <Link to={`/hiking/${map.id}`} className={ mapStyle.link }>
            <div className={ mapStyle.map }>
                <div>
                    <h1>{map.properties.mntn_nm}</h1>
                </div>
                <div>
                    <h1>{map.properties.sec_len}m</h1>
                </div>
                <Lvl map={map}/>
            </div>
        </Link>
    );
}

export default HikingMap;