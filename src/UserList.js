import React from "react";

function User({user}) {
    return (
        <div>
            <p>
                <b>{user.accountId}</b>❤️<b>{user.password}</b>
            </p>
        </div>
    );
}

function UserList({users}) {
    
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

export default UserList;