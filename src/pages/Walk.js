import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getWalkMapList } from '../apis/MapAPI';
import style from './Page.module.css';
import WalkMap from '../components/WalkMap';

function Walk() {

    const [mapList, setMapList] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    // const navigate = useNavigate();

    useEffect(() => {

        const mapList = getWalkMapList();
        mapList.then(data => setMapList(data.response.result.featureCollection.features));

    }, []);

    const onClickHandler = () => {
        // navigate(`/menu/search?menuName=${searchValue}`);/
    }

    return (
        <>
            <main>
                <h1>산책로</h1>
                <section className='page-info'>
                    <p>제주올레길, 지리산둘레길, 동해안해파랑길 등 전국의 유명한 13개의 둘레길 및 올레길</p>
                    <div className={style.search}>
                        <input type="range"/>
                        <input
                            type="search"
                            name="menuName"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={onClickHandler}>검색</button>
                    </div>
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

export default Walk;