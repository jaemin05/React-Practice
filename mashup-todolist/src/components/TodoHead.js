import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 18px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin-top: 13x;
    font-size: 27px;
    color: #343a40;
    text-align: center;
    color: red;
  }
  .day {
      text-align: right;
      color: black;
      font-size: 14px;
  }
  .crime {
    margin-top: 10px;
    color: #38d9a9;
    font-size: 15px;
    font-weight: bold;
  }
  .name {
    text-align: center;
    margin-top: 10px;
    color: #868e96;
    font-size: 32px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneCrime = todos.filter(todo => !todo.done);
  const crimeCount = todos.length - undoneCrime.length;

  const today = new Date();
  const dateString = today.toLocaleDateString('kr-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

  return (
        <TodoHeadBlock>
            <div className="day">{dateString} {dayName}</div>
            <h1>용의자 수배 </h1>
            <div className="name">김범진</div> 
            <div className="crime">인정한 범죄 {crimeCount}개</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;