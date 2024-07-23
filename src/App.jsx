import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, TodoList, Input, Button, ListItem, Check, Trash, TitleTree } from './styles.js'

function App() {

  const [list, setList] = useState([]);
  const [inpuTask, setInputTask] = useState("");

  function inputValueTask(event) {
    setInputTask(event.target.value)
  }

  function pickUpTask() {
    if (inpuTask){
      setList([...list, { id: uuid(), task: inpuTask, finished: false }])
    }
  }

  function completTask(id) {
    const newList = list.map( item => (
      item.id == id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletTask(id) {
    const newList = list.filter( item => (
      item.id == id ? item.id !==id : item  
    ))

    setList(newList)
  }

  return (
    <Container>
      <TodoList>
        <Input onChange={inputValueTask} placeholder="O que tenho que fazer!" />
        <Button onClick={pickUpTask}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem $isFinished={item.finished} key={item.id}>
                  <Check onClick={() => completTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletTask(item.id)} />
                </ListItem>
              ))
            ) : (
              <TitleTree>Não tem nenhuma Tarefa :( </TitleTree>
            )
          }
        </ul>
      </TodoList>
    </Container>
  )
}

export default App