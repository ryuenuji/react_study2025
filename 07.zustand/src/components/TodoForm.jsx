import React from 'react'
import { useRef } from 'react'
import useTodoStore from '../Stores/useTodoStore'

const TodoForm = () => {

    const { addTodo } = useTodoStore();

    const todoRef = useRef()
    const dateRef = useRef();

    const handleAddTodo = (e) => {
        e.preventDefault();

        let todo = todoRef.current.value;
        let date = dateRef.current.value;
        
        todoRef.current.value = '';
        todoRef.current.focus();

        dateRef.current.value = '';
        dateRef.current.focus();

        addTodo(todo, date);
    }
  return (
    <div>
        <form>
            <input type="text" ref={todoRef}/>
            <input type="date" ref={dateRef}/>
            <input type="submit" value="등록" onClick={handleAddTodo}/>
        </form>
    </div>
  )
}

export default TodoForm