import Prompt from './Prompt'

function GuestContent() {

    return (
        <main>
            <div className="page">
                <div>guest@my.homepage:$ ~ guest</div>
                <div className="info">
                    <h1>Guest</h1>
                    <br/>
                </div>
                <Prompt page='guest'/>
            </div>
        </main>
    );
}

export default GuestContent;