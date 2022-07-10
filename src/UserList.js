import React, { useEffect } from "react";

const User = React.memo(function({user, onRemove, onToggle}) {
    useEffect(() => {
        console.log('값이 설정됨');
        console.log(user);
        return () => {
          console.log('바뀌기 전..');
          console.log(user);
        };
    }, [user]);

    return (
            <p>
                <b style={{cursor: 'pointer', color: user.active ? 'red' : 'black'}} onClick={() => onToggle(user.id)}>{user.accountId}</b>
                ❤️
                <b style={{cursor: 'pointer', color: user.active ? 'red' : "black"}} onClick={() => onToggle(user.id)}>{user.password}</b>
                <button onClick={() => onRemove(user.id)}>REMOVE</button>
            </p>
    );
});

const UserList = ({users, onRemove, onToggle}) => {
    
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;