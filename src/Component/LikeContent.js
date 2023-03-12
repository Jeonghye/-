import Prompt from './Prompt';
import Map from './Map'

function LikeContent() {

    return (
        <main>
            <div className="page">
                <div>guest@my.homepage:$ ~ Like</div>
                <div className="info">
                    <h1>Like</h1>
                </div>
                <div className='container'>
                    <div className='item'>
                        <h2>노래</h2>
                        <div className='con1'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yl0HP_OeUF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='con2'>
                            <div className='icon'>
                                <span />
                                <span />
                                <span />
                            </div>
                            <h4>불꽃놀이 - 하현상</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <h2>음식</h2>
                        <div className='con1'></div>
                        <div className='con2'>
                            <h4>고기조앟</h4>
                        </div>
                    </div>
                    <div className='item'>
                        <h2>추천식당</h2>
                        <div className='con1'>
                            <Map/>
                        </div>
                        <div className='con2'>
                            <h4>마커추가예정</h4>
                        </div>
                    </div>
                </div>
                <Prompt page='Like' />
            </div>
        </main>
    );
}

export default LikeContent;