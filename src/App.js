import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('성공한 커플 수를 세는 중...');
  return users.filter(user => user.active).length;
} 

const initialState = {
  input: {
    accountId: '',
    password: '',
    active: false
  }, 
  user: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: {
          ...state.input,
          [action.name]: action.value
        }
      };
      
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id ? {...user, active: !user.active} : user)
      };

    case 'CREATE_USER':
      return {
        input: initialState.input,
        users: state.users.concat(action.user)
      };

    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(1);

  const {users} = state;
  const {accountId, password} = state.input;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name, 
      value
    });
  }, []);
  
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id:nextId.current,
        accountId,
        password
      }
    });
    nextId.current += 1;
  }, [accountId, password]);
  
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
