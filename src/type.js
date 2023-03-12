declare global {
    interface Window {
        kakao: any;
    }
}

interface MapProps {
    latitude: number;
    longitude: number;
    mapViewState: boolean;
    callback: (e: React.MouseEvent) => void;
}