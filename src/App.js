import React, { useState, useMemo } from 'react';
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";
import {Button, Icon} from 'semantic-ui-react'



function App() {
  const [todoList, setTodoList] = useState([]);
  const isLimitReached = useMemo(() => {return todoList.length >= 10;},[todoList]);
  const handleInsert = (value) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.push({
        key: new Date().getTime(),
        value,
        isCompleted: false,
      });
      return newList;
    });
  }
  
  const handleComplete = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    })
  }
  
  const handleRemove = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    })
  }
  
  return (
    <div className="App">
        <Button size='small' color='green'>
          <Icon name='download' />
          Download
        </Button>
        <ListView todoList={todoList} onComplete={handleComplete} onRemove={handleRemove} />      
        {isLimitReached && <div style={{
            padding: "8px 16px",
            border: "1px solid #FA466A",
            backgroundColor: "#feecf0",
            color: "#FA466A",
            marginBottom: 16
        }}>
           ※ 할일 목록이 너무 많습니다.
        </div>}
        <InsertForm onInsert={handleInsert} disabled = {isLimitReached}/>
    </div>
  );
}

export default App;