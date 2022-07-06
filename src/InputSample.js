import React, {useState} from "react";

function InputSample() {

    const [input, setInput] = useState({
        name: '',
        age: 0
    });

    const {name, age} = input;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };
    //여기서 사용한 ... 문법은 spread 문법입니다. 객체의 내용을 모두 "펼쳐서" 기존 객체를 복사해주는데요.

    const onReset = () => {
        setInput({
            name: '',
            age: 0,
        })
    };

    return (
        <div>
            <input name="name" placeholder="input your name" onChange={onChange} value={name}/>
            <input name="age" placeholder="input your age" onChange={onChange} value={age}/>
            <button onClick={onReset}>RESET</button>
            <div>
                <p><b>VAULE</b></p>
                name: {name} age: {age}
            </div>
        </div>
    );
}

export default InputSample;