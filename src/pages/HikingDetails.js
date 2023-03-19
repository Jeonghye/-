import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHikingMaps } from '../apis/MapAPI';
import MapSearchResult from '../components/MapSearchResult';
import style from './Details.module.css';

function WalkDetails() {

    const { mapId } = useParams();

    const [map, setMap] = useState({
        id: '',
        properties: {
            sec_len: 0, //구간거리(m)
            up_min: 0, //상행속도(분)
            down_min: 0,  //하행속도(분)
            start_z: 0, //시점표고(m)
            end_z: 0, //종점표고(m)
            cat_nam: '', //난이도(상, 중, 하)
            mntn_nm: ''
        },
        type: ''
    });

    const [mapList, setMapList] = useState([]);

    const getmaps = async () => {
        getHikingMaps().then(data => setMapList(data.response.result.featureCollection.features));
    };

    useEffect(
        () => {
            getmaps();
            // setMap(mapList.filter(mapitem => mapitem.id === mapId)[0]);
        }, []
    );

    const onClickHandler = () => {
        setMap(mapList.filter(mapitem => mapitem.id === mapId)[0]);
    }

    console.log(mapList);
    console.log(map);

    if (map === undefined) {
        return (
            <div className={style.box}>
                <button onClick={onClickHandler}>갱신</button>
                <h3>산 명칭</h3>
                <h2>흑석산</h2>
                <h3>구간거리</h3>
                <h1>1500m</h1>
                <h3>상행속도(분)</h3>
                <h1>00분</h1>
                <h3>하행속도(분)</h3>
                <h1>00분</h1>
                <h3>시점표고(m)</h3>
                <h1>000m</h1>
                <h3>종점표고(m)</h3>
                <h1>000m</h1>
                <MapSearchResult address={'흑석산'} />
            </div>
        );
    }

    return (
        <>            
        <div className={style.box}>
            <h3>산 명칭</h3>
            <h2>{map.properties.mntn_nm}</h2>
            <h3>구간거리</h3>
            <h1>{map.properties.sec_len}m</h1>
            <h3>상행속도(분)</h3>
            <h1>{map.properties.up_min}분</h1>
            <h3>하행속도(분)</h3>
            <h1>{map.properties.down_min}분</h1>
            <h3>시점표고(m)</h3>
            <h1>{map.properties.start_z}m</h1>
            <h3>종점표고(m)</h3>
            <h1>{map.properties.end_z}m</h1>
            <MapSearchResult address={map.properties.mntn_nm} />
        </div>

        </>
    );

}

export default WalkDetails;