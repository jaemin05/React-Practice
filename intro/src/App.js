import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users) {
  console.log('성공한 커플 수를 세는 중...');
  return users.filter(user => user.active).length;
} 

const initialState = {
  users: []
};

function reducer(state, action) {
  switch (action.type) {
      
    case 'TOGGLE_USER':
      return {
        users: state.users.map(user => 
          user.id === action.id ? {...user, active: !user.active} : user)
      };

    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      };

    case 'REMOVE_USER':
      return {
        users: state.users.filter(user => user.id !== action.id)
      };

    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [{accountId, password}, onChange, onReset] = useInputs({
    accountId: "",
    password: "",
    active: false
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(1);

  const {users} = state;
  
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id:nextId.current,
        accountId,
        password
      }
    });
    onReset();
    nextId.current += 1;
  }, [accountId, password, onReset]);


  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        accountId={accountId}
        password={password}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>성공한 커플 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
