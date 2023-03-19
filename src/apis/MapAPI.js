import axios from 'axios';


export function getWalkMapList(page) {

    const url =
        `/req/data?key=1CE20075-12E6-3252-8671-7CDE9696ECEB&service=data&version=2.0&request=getfeature&format=json&size=20&page=${page}&geometry=false&attribute=true&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_L_TRKROAD`;
    
    return new Promise((resolve, reject) => {

        axios.get(url)
            .then(res => resolve(res.data))
    });
}

export function getWalkMaps() {

    const url =
    `/req/data?key=1CE20075-12E6-3252-8671-7CDE9696ECEB&service=data&version=2.0&request=getfeature&format=json&size=1000&page=1&geometry=false&attribute=true&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_L_TRKROAD`;
    
    return new Promise((resolve, reject) => {
        
        fetch(url)
        .then(res => res.json())
        .then(json => resolve(json))
    });
}

export function searchMap(cos_nam) {
    
    const url =
    `/req/data?key=1CE20075-12E6-3252-8671-7CDE9696ECEB&service=data&version=2.0&request=getfeature&format=json&size=500&page=1&geometry=false&attrFilter=cos_nam:like:${cos_nam}&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_L_TRKROAD`;

    return new Promise((resolve, reject) => {

        axios.get(url)
        .then(res => resolve(res.data))
    });
}

export function getHikingMapList(page) {

    const url =
    `/req/data?key=1CE20075-12E6-3252-8671-7CDE9696ECEB&service=data&version=2.0&request=getfeature&format=json&size=30&page=${page}&geometry=false&attribute=true&crs=EPSG:3857&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_L_FRSTCLIMB
    `;

    return new Promise((resolve, reject) => {

      fetch(url)
      .then(res => res.json())
      .then(json => resolve(json))
    });
}

export function getHikingMaps() {

    const url =
    `/req/data?key=1CE20075-12E6-3252-8671-7CDE9696ECEB&service=data&version=2.0&request=getfeature&format=json&size=1000&page=1&geometry=false&attribute=true&crs=EPSG:5181&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_L_FRSTCLIMB`;
    
    return new Promise((resolve, reject) => {

        fetch(url)
        .then(res => res.json())
        .then(json => resolve(json))
      });
}

export function searchHikingMap(mntn_nm) {

    const url =
    `/req/data?key=1CE20075-12E6-3252-8671-7CDE9696ECEB&service=data&version=2.0&request=getfeature&format=json&size=1000&page=1&geometry=false&attrFilter=mntn_nm:like:${mntn_nm}&crs=EPSG:5181&geomfilter=BOX(13663271.680031825,3894007.9689600193,14817776.555251127,4688953.0631258525)&data=LT_L_FRSTCLIMB`;
    
    return new Promise((resolve, reject) => {

        fetch(url)
        .then(res => res.json())
        .then(json => resolve(json))
      });
}