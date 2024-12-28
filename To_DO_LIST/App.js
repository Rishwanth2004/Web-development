import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import './index.css';
import { useState } from 'react';
// function App() {
//   function randomWords(){
//     const names=["Earn","Grow","Make"];
//     const int= Math.floor(Math.random()*3);
//     return names[int];
//   }
//   return (
//     <div>
//       Hello world
//       <h1>Let's {randomWords()} Money</h1>
//     </div>
//   );
// }
//-------------------------------------------------------
function App(){

  
    const [items, setItems] = useState(
      // [
      //   { id:1,
      //     checked: false,
      //     item: "Practice Coding"
      //   },
      //   { id:2,
      //     checked: false,
      //     item: "Earn Money"
      //   },
      //   { id:3,
      //     checked: false,
      //     item: "Learn React"
      //   }
      // ]
      JSON.parse(localStorage.getItem('todo_list'))
    );

    const [newItem, setNewItem] = useState("");
    const addItem=(item)=>{
      const id= items.length+1;
      const addNewItem={id, checked:false,item};
      const listItems=[...items, addNewItem];
      setItems(listItems);
      localStorage.setItem("todo_list", JSON.stringify (listItems))
    }

    const [search, setSearch]=useState('')

   const handleCheck= (id) =>{
    const listItems = items.map ((item) =>
    item.id===id? {...item, checked: !item.checked}:item)
     setItems (listItems);
     localStorage.setItem("todo_list", JSON.stringify (listItems))
   } 

const handleDelete =(id)=> {
const listDelete= items.filter(item =>
  item.id!==id ) 
setItems(listDelete)
localStorage.setItem("todo_list", JSON.stringify (listDelete))
}

const handleSubmit = (e) => {
 e.preventDefault()
addItem(newItem)
setNewItem("")
}


  return(
    <div className='App'>
      <Header title ="Rishwanth To Do list"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(search))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  
  )
}

export default App;
