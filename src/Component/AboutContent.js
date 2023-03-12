import Prompt from './Prompt'

function AboutContent() {

    return (
        <main>
            <div className="page">
                <div>guest@my.homepage:$ ~ About</div>
                <div className="info">
                    <h1>About me</h1>
                    <br />
                    <h1>-</h1>
                    <br />
                    <h2>djh7659@gmail.com</h2>
                    <br />
                    <h2>뭐라설명넣어야할거같기도하고</h2>
                    
                </div>
                <Prompt page='about'/>
            </div>
        </main>
    );
}

export default AboutContent;