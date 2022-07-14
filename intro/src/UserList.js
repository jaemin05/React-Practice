import React, { useContext, useEffect } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function({user, onRemove, onToggle}) {
    const dispatch = useContext(UserDispatch);

    return (
            <p>
                <b style={{
                    cursor: 'pointer',
                    color: user.active ? 'red' : 'black'
                }} 
                onClick={() =>
                    dispatch({type: 'TOGGLE_USER', id:user.id})
                }>
                {user.accountId}
                </b>
                ❤️
                <b style={{
                    cursor: 'pointer',
                    color: user.active ? 'red' : "black"
                }}
                onClick={() =>
                    dispatch({type: 'TOGGLE_USER', id:user.id})
                }>
                    {user.password}
                </b>
                <button onClick={() => {
                    dispatch({type: 'REMOVE_USER', id:user.id});
                }}>REMOVE</button>
            </p>
    );
});

function UserList ({users}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))} 
        </div>
    );
}

export default React.memo(UserList);