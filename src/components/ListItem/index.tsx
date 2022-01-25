import { useState } from 'react'
import * as C from './styles'
import { Item } from '../../types/item'

type Props ={
  item: Item,
  onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item , onChange}: Props) => {
  const [isChecked, setIsChecked] =useState(item.done)
  return (
    <C.Container done={isChecked}>
      <input 
        type='checkbox' 
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
      {/* para teste se está funcionando corretamente adicione o seguinte código - {item.done.toString()} ao label e click no checkbox e veja a mudança*/}
      </C.Container>
  )
}