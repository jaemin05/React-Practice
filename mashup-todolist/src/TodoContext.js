import React, { useReducer, createContext, useContext, useRef } from "react";

const initisalTodos = [
    {
        id: 1,
        text: '갈취',
        done: true
    },
    {
        id: 2,
        text: '인종차별',
        done: false
    }
];

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
            todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
    const[state, dispatch] = useReducer(todoReducer, initisalTodos);
    const nextId = useRef(3);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);

    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }

    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);

    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    
    return context;
}

export function useTodoNextId() {

    const context = useContext(TodoNextIdContext);

    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    
    return context;
}