import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWalkMaps } from '../apis/MapAPI';

function MapDetails() {

    const { mapId } = useParams();
    
    const [map, setMap] = useState({});

    // cat_nam: '', //산책로구분
    // lnk_nam: '', //명칭
    // cos_num: 0,  //코스번호
    // cos_nam: '', //코스명
    // cos_lvl: '', //코스난이도
    // len_tim: '', //소요시간
    // leng_lnk: 0, //코스길이(km)
    // comment: ''  //비고

    const [mapList, setMapList] = useState([]);

    useEffect(
        () => {

            const maps = getWalkMaps();
            maps.then(data => setMapList(data.response.result.featureCollection.features));
            setMap(mapList.filter(mapitem => mapitem.id === mapId)[0]);
            console.log(map);
        },[]
    );

    console.log(map);

    return (
        <>
            <div>
            <h3>산책로 구분 : {map.properties.cat_nam}</h3>
            <h1>산책로명 : {map.properties.cos_nam} {map.properties.cos_num} </h1>
            <h3>코스 : {map.properties.lnk_nam} </h3>
            <h1>{map.properties.len_tim}</h1>
            </div>
        </>
    );
}

export default MapDetails;