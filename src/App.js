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

function App() {
  const [{accountId, password}, onChange, reset] = useInputs({
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
    reset();
    nextId.current += 1;
  }, [accountId, password, reset]);
  
  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        accountId={accountId}
        password={password}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>성공한 커플 수 : {count}</div>
    </>
  );
}

export default App;
