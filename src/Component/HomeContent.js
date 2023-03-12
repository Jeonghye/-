import Prompt from './Prompt'

function HomeContent() {

    return (
        <main>
            <div className="page">
                <div>guest@my.homepage:$ ~ home</div>
                <div className="info">
                    <h1>Wellcome to My homepage</h1>
                    <br/>
                    <h1>-</h1>
                    <br/>
                    <h1>DO JEONGHYE</h1>
                    <br/>
                    <h3>: 더이상 쓸 말이 없다.</h3>
                </div>
                
                <Prompt page='home'/>
            </div>
        </main>
    );
}

export default HomeContent;