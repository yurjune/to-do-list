import React, { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState([]);
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
    setTodo((prevTodo) => {
      return [...prevTodo, { key: value, done: false }];
    });
    setValue('');
  };

  const deletePlan = (v) => {
    setTodo((prevTodo) => {
      const data = [...prevTodo];
      const target = data.indexOf(v);
      data.splice(target, 1);
      return data;
    });
  }

  const clickDelBtn = (v) => (e) => {
    console.log(v);
    deletePlan(v);
  };

  const clickDoneBtn = (v) => (e) => {
    if (!v.done) {
      setTodo((prevTodo) => {
        const data = [...prevTodo];
        const target = data.indexOf(v);
        data[target].done = true;
        return data;
      });
    } else {
      setTodo((prevTodo) => {
        const data = [...prevTodo];
        const target = data.indexOf(v);
        data[target].done = false;
        return data;
      });
    }
    console.log(v.done);
  };

  return(
    <div id='container'>
      <h1 id="title">My Todo List</h1>
      <h3 id="today">{`오늘은 ${month + 1}월 ${date}일`}</h3>
      <form onSubmit={createPlan}>
        <input type="text" value={value} onChange={onChangeInput} placeholder='할 일을 적어보세요'/>
        <button id="create-btn">등록</button>
      </form>
      <div>
        {todo.map((v, i) => {
          return (
            <div id='box'>
              { v.done ? <li id='done-list'>{v.key}</li> : <li id='list'>{v.key}</li> }
              <button id='done-btn' onClick={clickDoneBtn(v)}>o</button>
              <button id='del-btn' onClick={clickDelBtn(v)}></button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
