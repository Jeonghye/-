import style from './Page.module.css';
import HikingMap from '../components/HikingMap';
import { searchHikingMap } from '../apis/MapAPI';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function HikingSearchResult() {

    const [searchParams] = useSearchParams();

    const [mapList, setMapList] = useState([]);

    const mntn_nm = searchParams.get('mntn_nm');
    
    const getmaps = async () => {
        const maps = searchHikingMap(mntn_nm);
        maps.then(data => setMapList(data.response.result.featureCollection.features));
    }
    useEffect(
        () => {
            getmaps();
        },
        [mntn_nm]
    );

    console.log(mapList);

    return (
        <>
            <main>
                <section className={style.pageinfo}>
                    <h1>등산로</h1>
                    <p>전국 120여개의 등산로</p>
                </section>
                <section className={style.MapBox}>
                    <div>
                        {mapList.map(map => <HikingMap key={map.id} map={map} />)}
                    </div>
                </section>
            </main>
        </>
    );
}

export default HikingSearchResult;