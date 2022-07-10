import React from "react";

const CreateUser = ({accountId, password, onChange, onCreate}) => {
    return (
        <div>
            <h1>이름을 적으면 사랑이 이루어져요!</h1>
            <input
                name="accountId"
                placeholder="이름을 입력하세요"
                onChange={onChange}
                value={accountId}/>
            
            <input 
                name="password"
                placeholder="이름을 입력하세요"
                onChange={onChange}
                value={password}
                />         
            <button onClick={onCreate}>Create User</button>
        </div>
    );
}

export default CreateUser;