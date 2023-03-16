import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWalkMapList } from '../apis/MapAPI';

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
            const maps = getWalkMapList();
            maps.then(data => setMapList(data.response.result.featureCollection.features));
            
            setMap(mapList.filter(map => map.id === mapId)[0]);
        },[]
    );

    console.log(map);

    return (
        <>
            <h1>코스 상세 설명...</h1>
        </>
    );
}

export default MapDetails;