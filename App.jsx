import React, { useState } from 'react';

const setId = () => {
  return Math.random().toString(36).substring(2);
}

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  
  const month = new Date().getMonth();
  const date = new Date().getDate();

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const createPlan = (e) => {
    e.preventDefault();
    if (!value) {
      return alert('내용을 입력해주세요!');
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: setId(), text: value, done: false }];
    });
    setValue('');
  };

  const deletePlan = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos].filter((data) => data.id !== todo.id);
    });
  }

  const clickDelBtn = (todo) => (e) => {
    console.log(todo.id);
    deletePlan(todo);
  };

  const clickDoneBtn = (todo) => (e) => {
    if (!todo.done) {
      setTodos((prevTodos) => [...prevTodos].map((data) => data.id === todo.id ? {...todo, done: true} : data));
    } else {
      setTodos((prevTodos) => [...prevTodos].map((data) => data.id === todo.id ? {...todo, done: false} : data));
    }
    console.log(todo.id);
  }

  return(
    <div id='container'>
      <h1 id="title">My Todo List</h1>
      <h3 id="today">{`오늘은 ${month + 1}월 ${date}일`}</h3>
      <form onSubmit={createPlan}>
        <input type="text" value={value} onChange={onChangeInput} placeholder='할 일을 적어보세요'/>
        <button id="create-btn">등록</button>
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <div id='box' key={todo.id}>
              { todo.done ? <li id='done-list'>{todo.text}</li> : <li id='list'>{todo.text}</li> }
              <button id='done-btn' onClick={clickDoneBtn(todo)}>o</button>
              <button id='del-btn' onClick={clickDelBtn(todo)}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
