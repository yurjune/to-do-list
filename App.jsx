import React, { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const createPlan = (e) => {
    e.preventDefault();
    if (!value) {
      return alert('내용을 입력해주세요!');
    }
    setTodo((prevTodo) => {
      return [...prevTodo, value];
    });
    setValue('');
  };

  const deletePlan = (v) => {
    setTodo((prevTodo) => {
      const data = [...prevTodo];
      const delete_target = data.indexOf(v);
      data.splice(delete_target, 1);
      return data;
    });
  }

  const clickDelBtn = (v) => (e) => {
    console.log(v);
    deletePlan(v);
  };

  const clickFinishBtn = (v) => (e) => {
  };

  return(
    <div id='container'>
      <form onSubmit={createPlan}>
        <input type="text" value={value} onChange={onChangeInput} placeholder='할 일을 적어보세요'/>
        <button id="create-btn">등록</button>
      </form>
      <div>
        {todo.map((v, i) => {
          return (
            <div id='box'>
              <li id='list'>{v}</li>
              <button id='finish-btn' onClick={clickDelBtn(v)}>o</button>
              <button id='del-btn' onClick={clickDelBtn(v)}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
