import React from 'react'
import LineItem from './LineItem'
const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
    <ul>
            {items.map((item) =>(
              // <li className='item' key={item.id}>
              //   <input type="checkbox"
              //         onChange={()=> handleCheck(item.id)}
              //         checked={item.checked}
              //   />
              //   <label
              //   onDoubleClick={()=> handleCheck(item.id)}
              //   style={(item.checked) ? {textDecoration : 'line-through'} : null}
              //   >{item.item}</label>
              //   <FaTrashAlt
              //       role='button'
              //       onClick={()=>handleDelete(item.id)}
              //       tabIndex="0"
              //   />
              // </li>
              <LineItem
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              
              />
            ))}
          </ul>
          </main>
  )
}

export default ItemsList