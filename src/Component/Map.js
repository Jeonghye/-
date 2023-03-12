import React from 'react';

/*global kakao*/ 

class Map extends React.Component{

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=87d13921546a9066edbc5495ea2df2d1&libraries=services,clusterer,drawing";
        
          document.head.appendChild(script);

      script.onload = () => {
        kakao.maps.load(() => {
            
          let container = document.getElementById("map"); // 지도를 표시할 div 
          let options = {
            center: new kakao.maps.LatLng(37.506502, 127.053617), // 지도의 중심좌표
            level: 3
          };

          // 지도를 생성합니다 
          const map = new window.kakao.maps.Map(container, options);

          // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new kakao.maps.services.Geocoder();

          // 주소로 좌표를 검색합니다
          geocoder.addressSearch('서울 강남구 역삼로4길 16 성우스타우스상가 지하1층', function(result, status) {

            // 정상적으로 검색이 완료됐으면 
             if (status === kakao.maps.services.Status.OK) {
        
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    title : '서울 강남구 역삼로4길 16 성우스타우스상가 지하1층',
                    position: coords
                });
        
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:5px 0;color:black;">영동불백</div>'
                });
                infowindow.open(map, marker);
        
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });    
       
        });
      };
    }
    render(){
        return(
            <>
            <div id="map" className='map'>
            </div>
            </>
        )
    }
}

export default Map;