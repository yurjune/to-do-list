import React, { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const createPlan = (e) => {
    e.preventDefault();
    setTodo((prevTodo) => {
      return [...prevTodo, value];
    });
    setValue('');
  };

  const removePlan = (v) => {
    setTodo((prevTodo) => {
      const data = [...prevTodo];
      const delete_target = data.indexOf(v);
      data.splice(delete_target, 1);
      return data;
    });
  }

  const onClickBtn = (v) => (e) => {
    console.log(v);
    removePlan(v);
  };

  return(
    <>
      <form onSubmit={createPlan}>
        <input type="text" value={value} onChange={onChangeInput} />
        <button>버튼</button>
      </form>
      <div>
        {todo.map((v, i) => {
          return (
            <>
              <li>{v}</li>
              <button onClick={onClickBtn(v)}>삭제</button>
              <br/>
            </>
          )
        })}
      </div>
    </>
  )
}

export default App;
