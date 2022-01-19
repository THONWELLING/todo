import * as C from './App.styles'
import { useState } from 'react'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'buy an additional monitor to study', done: false},
    {id: 2, name: 'Exercise React more to be able to get node to backend', done: false},
  ])
  return (
    <C.Container>
      <C.Area>
        <C.Header>Task List!!</C.Header>

        {/* add new task area */}

        {/*  task list */}
        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App