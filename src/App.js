import React, { useRef, useState } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';

function App() {

  const [input, setInput] = useState({
    accountId: '',
    password: ''
  });

  const {accountId, password} = input;

  const onChange = e => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const [users, setUser] = useState([ 
  ]);

  const nextId = useRef(1);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      accountId,
      password
    };

    setUser(users.concat(user));

    setInput({
      accountId:'',
      password: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUser(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser
        accountId={accountId}
        password={password}
        onChange={onChange}
        onCreate={onCreate} />

      <UserList users={users} onRemove={onRemove} />
    </>
  );  
}

export default App;
