import React from "react";

function User({user, onRemove, onToggle}) {
    return (
            <p>
                <b style={{cursor: 'pointer', color: user.active ? 'red' : 'black'}} onClick={() => onToggle(user.id)}>{user.accountId}</b>
                ❤️
                <b style={{cursor: 'pointer', color: user.active ? 'red' : "black"}} onClick={() => onToggle(user.id)}>{user.password}</b>
                <button onClick={() => onRemove(user.id)}>REMOVE</button>
            </p>
    );
}

function UserList({users, onRemove, onToggle}) {
    
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;