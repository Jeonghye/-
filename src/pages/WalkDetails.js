import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWalkMaps } from '../apis/MapAPI';
import MapSearchResult from '../components/MapSearchResult';
import style from './Details.module.css';

function WalkDetails() {

    const { mapId } = useParams();

    const [map, setMap] = useState({
        id: '',
        properties: {
            cat_nam: '', //산책로구분
            lnk_nam: '', //명칭
            cos_num: 0,  //코스번호
            cos_nam: '', //코스명
            cos_lvl: '', //코스난이도
            len_tim: '', //소요시간
            leng_lnk: 0, //코스길이(km)
            comment: ''  //비고
        },
        type: ''
    });

    const [mapList, setMapList] = useState([]);

    // const getmaps = async () => {
    //     const maps = getWalkMapList(page);
    //     maps.then(data => setMapList(data.response.result.featureCollection.features));
    // };

    const getmaps = async () => {
        getWalkMaps().then(data => setMapList(data.response.result.featureCollection.features));
    };

    useEffect(
        () => {
            getmaps();
            setMap(mapList.filter(mapitem => mapitem.id === mapId)[0]);
        }, []
    );

    const onClickHandler = () => {
        setMap(mapList.filter(mapitem => mapitem.id === mapId)[0]);
    }

    console.log(mapList);
    console.log(map);

    if(map === undefined) {
        return (
            <div className={style.box}>
                <button onClick={onClickHandler}>갱신</button>
                <h3>산책로 구분</h3>
                <h2>둘레길링크</h2>
                <h3>산책로명</h3>
                <h1>지리산둘레길 11코스</h1>
                <h3>코스</h3>
                <h1>하동호-삼화실</h1>
                <h3>소요시간</h3>
                <h1>←4시간 9.3Km→</h1>
                <MapSearchResult address={'지리산둘레길 11코스'} />
            </div>
        );
    }

    return (
        <>
            <div className={style.box}>
                <h3>산책로 구분</h3>
                <h2>{map.properties.cat_nam}</h2>
                <h3>산책로명</h3>
                <h1>{map.properties.cos_nam} {map.properties.cos_num}</h1>
                <h3>코스</h3>
                <h1>{map.properties.lnk_nam}</h1>
                <h3>소요시간</h3>
                <h1>{map.properties.len_tim}</h1>
                <MapSearchResult address={map.cos_nam + map.cos_num} />
            </div>
        </>
    );

}

export default WalkDetails;