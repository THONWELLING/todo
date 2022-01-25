import { useState } from 'react'

import * as C from './App.styles'

import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import AddArea from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'buy an additional monitor to study', done: false},
    {id: 2, name: 'Exercise React more to be able to get node to backend', done: false},
  ])
  // creating the function that will be executed when the user presses Enter to add a new task

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  //Tarefa deixada como desafio => fazer com que o 'done' de uma determinada tarefa mude também na lista e não somente no state

   const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Task List!!</C.Header>

        {/* add new task area */}
        <AddArea onEnter={handleAddTask} />

        {/*  task list */}
        {list.map((item, index) => (
          <ListItem 
            key={index}
            item={item}
            onChange={handleTaskChange}
            />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App