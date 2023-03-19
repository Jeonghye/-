import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWalkMapList } from '../apis/MapAPI';
import style from './Page.module.css';
import WalkMap from '../components/WalkMap';

function Walk() {

    const [mapList, setMapList] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const getmaps = async () => {
        const maps = getWalkMapList(page);
        maps.then(data => setMapList(data.response.result.featureCollection.features));
    };

    useEffect( () => {
        getmaps();
    }, [page]);
 
    const onClickPageHandler = (e) => {
        if (e.target.value != null && e.target.value != '') {
            setPage(parseInt(e.target.name) + page)
        } else if(page < 1) {
            setPage(1);
        }
    }

    const onClickHandler = () => {

        navigate(`/walk/search?cos_nam=${ searchValue }`)
    }
    return (
        <>
            <main>
                <section className={style.pageinfo}>
                    <h1>산책로</h1>
                    <p>제주올레길, 지리산둘레길, 동해안해파랑길 등 전국의 유명한 13개의 둘레길 및 올레길</p>
                    <div className={style.search}>
                        <input
                            type="search"
                            name="cos_nam"
                            value={ searchValue }
                            placeholder='코스명'
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={ onClickHandler }>검색</button>
                    </div>
                </section>
                <div className={style.page}>
                    <button onClick={ onClickPageHandler } value={page} name={-1}>이전</button>
                    <button onClick={ onClickPageHandler } value={page} name={+1}>다음</button>
                </div>
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