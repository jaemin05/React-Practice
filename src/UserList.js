import React from "react";

function User({user, onRemove}) {
    return (
            <p>
                <b>{user.accountId}</b>❤️<b>{user.password}</b>
                <button onClick={() => onRemove(user.id)}>REMOVE</button>
            </p>
    );
}

function UserList({users, onRemove}) {
    
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;