import style from './MapSearchResult.module.css';

function MapSearchResult(address) {

    const url = `https://map.kakao.com/link/search/${address.address}`

    const onClickHandler = () => {
        window.open(url);
    }

    return (
        <div id='map' className={style.map}>
            <button onClick={onClickHandler}>경로보기</button>
        </div>
    );
}

export default MapSearchResult;