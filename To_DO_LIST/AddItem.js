import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form action="addForm" onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="addItem">AddItems</label>
        <input 
        autoFocus
        id='addItem'
        type="texts" 
        placeholder='Add new Item'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        
        />
        <button 
            type='submit'
            aria-label='Add Item'
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem