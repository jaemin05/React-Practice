import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.accountId}</b> <span>{user.password}</span>
        </div>
    );
}

function UserList() {
    
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default UserList;