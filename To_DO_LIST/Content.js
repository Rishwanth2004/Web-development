import React from 'react'
import ItemsList from './ItemsList';

// const Content = () => {
//       function randomWords(){
//           const names=["Earn","Grow","Make"];
//           const int= Math.floor(Math.random()*3);
//              return names[int];
//            }
//            const click=()=>{
//             console.log("Hello Everyone")
//            }
//            const parameterClick=(name)=>{
//             console.log(`Hello ${name}`)
//            }
//          return (
//             <main>
//              <p>Let's {randomWords()} Money</p>
//              <button onClick={click}>Normal Click</button>
//              <button onClick={()=>parameterClick('Rishwanth')}>Parameter Click</button>
//             </main>
//            );
//          }
//--------------------------------------
// -----------UseState------------
// const Content = () => {
//           function randomWords(){
//               const names=["Earn","Grow","Make"];
//               const int= Math.floor(Math.random()*3);
//                  return names[int];
//                }
//                const [count, setCount]=useState(99)

//                function increment(){
//                 setCount((count)=>count+1)
//                }

//                function decrement(){
//                 setCount(count -1)
//                }

//                return (
//                 <main>
//                 <p> Lets {randomWords()} Money </p>
//                 <button> Subscribe </button>
//                 <button onClick={decrement}>-</button>
//                 <span>{count}</span>
//                 <button onClick={increment}>+</button>
//                 </main>
//                )
//                          }
//--------------------------------
//--------UseState Practice--------------
// const Content = () => {

//             const [name, setname]=useState("")
//              function randomWords(){
//                  const names=["Earn","Grow","Make"];
//                  const int= Math.floor(Math.random()*3);
//                     setname(names[int]);
//                   }
//             const [hero, sethero]= useState("");
//             function heroName(){
//               sethero("Hi Rishwanth")
//             }
  
//                   return (
//                    <main>
//                    <p> Lets {name} Money </p>
//                    <button onClick={randomWords}> Subscribe </button>
//                    <button onClick={heroName}>Click to see Magic</button>
//                    <p>{hero}</p>
//                    </main>
//                   )
//                             }
//-----------------------------
// const Content=()=>{
//       const [items, setItems] = useState(
//         [
//           { id:1,
//             checked: false,
//             item: "Practice Coding"
//           },
//           { id:2,
//             checked: false,
//             item: "Earn Money"
//           },
//           { id:3,
//             checked: false,
//             item: "Learn React"
//           }
//         ]
//       );

//      const handleCheck= (id) =>{
//       const listItems = items.map ((item) =>
//       item.id===id? {...item, checked: !item.checked}:item)
//        setItems (listItems);
//        localStorage.setItem("todo_list", JSON.stringify (listItems))
//      } 
// const handleDelete =(id)=> {
//   const listDelete= items.filter(item =>
//     item.id!==id ) 
//   setItems(listDelete)
//   localStorage.setItem("todo_list", JSON.stringify (listDelete))
// }
// ----------------------------------

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p
          style={{
            textAlign: 'center',
            marginTop: 300,
          }}
        >
          Your List is Empty
        </p>
      )}
    </main>
  );
};

export default Content;