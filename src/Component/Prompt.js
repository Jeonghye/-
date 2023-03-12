import React, { useState } from "react";

function command(props) {

    if (props == 'help') {
        return '커맨드 입력 시 페이지 이동 혹은 이벤트가 발생됩니다!';
    } else if (props == 'email') {
        return '연락은 djh7659@gmail.com으로 부탁드립니다!';
    }

}

function Prompt(prop) {

    const page = prop.page;

    const [text, setText] = useState('');

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <p className="commandList">
                <br />
                <h2>→ 입력 가능한 커맨드 :</h2>
                <br />
                help, home, about, my, roadmap, escape, guest, login, github, instagram, email, theme
            </p>
            <div className="answer">
                <h3>{command(text)}</h3>
            </div>
            <div className="command">
                <label>guest@my.homepage:$ ~ {page}</label>
                <input
                    className="prompt"
                    name='text'
                    type='text'
                    value={text}
                    onChange={onChangeHandler}
                />
            </div>
        </>
    );
}

export default Prompt;