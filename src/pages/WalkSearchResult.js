import style from './Page.module.css';
import WalkMap from '../components/WalkMap';
import { searchMap } from '../apis/MapAPI';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function WalkSearchResult() {

    const [searchParams] = useSearchParams();

    const [mapList, setMapList] = useState([]);

    const cos_nam = searchParams.get('cos_nam');

    useEffect(
        () => {
            const maps = searchMap(cos_nam);
            maps.then(data => setMapList(data.response.result.featureCollection.features));
        },
        [cos_nam]
    );

    console.log(mapList);

    return (
        <>
            <main>
                <section className={style.pageinfo}>
                    <h1>산책로</h1>
                    <p>제주올레길, 지리산둘레길, 동해안해파랑길 등 전국의 유명한 13개의 둘레길 및 올레길</p>
                </section>
                <section className={style.MapBox}>
                    <div>
                        {mapList.map(map => <WalkMap key={map.id} map={map} />)}
                    </div>
                </section>
            </main>
        </>
    );
}

export default WalkSearchResult;