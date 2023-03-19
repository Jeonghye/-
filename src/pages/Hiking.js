import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Page.module.css';
import HikingMap from '../components/HikingMap';
import { getHikingMapList } from '../apis/MapAPI';

function Hiking() {

    const [mapList, setMapList] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const getmaps = async () => {
        const maps = getHikingMapList(page);
        maps.then(data => setMapList(data.response.result.featureCollection.features));
    };

    useEffect(() => {
        getmaps();
    }, [page]);

    console.log(mapList);

    const onClickPageHandler = (e) => {
        if (e.target.value != null && e.target.value != '') {
            setPage(parseInt(e.target.name) + page)
        } else if (page < 1) {
            setPage(1);
        }
    }

    const onClickHandler = () => {

        navigate(`/hiking/search?mntn_nm=${searchValue}`)
    }

    return (
        <>
            <main>
                <section className={style.pageinfo}>
                    <h1>등산로</h1>
                    <p>전국 120여개의 등산로</p>
                    <div className={style.search}>
                        <input
                            type="search"
                            name="cos_nam"
                            value={searchValue}
                            placeholder='산명칭'
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={onClickHandler}>검색</button>
                    </div>
                </section>
                <div className={style.page}>
                    <button onClick={onClickPageHandler} value={page} name={-1}>이전</button>
                    <button onClick={onClickPageHandler} value={page} name={+1}>다음</button>
                </div>
                <section className={style.MapBox}>
                    <div>
                        {mapList.map(map => <HikingMap key={map.id} map={map} />)}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Hiking;