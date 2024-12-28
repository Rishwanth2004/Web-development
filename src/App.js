// import './App.css';
// import { useState } from 'react';

// function App() {
//   const[color, setColor]=useState('')

  
//   return (
//     <div className='outer'>
//     <div className='box' style={{backgroundColor:color}}></div>
//     <input 
//     type="text"
//     value={color}
//     onChange={(e) => setColor(e.target.value)}
//     />
//     <button onClick={()=>setColor('')}>
//       click to restore
//     </button>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  return (
    <div className="outer">
      <h1 className="title">Color Picker</h1>
      <div className="box" style={{ backgroundColor: color }}>
        {color ? <span className="color-label">{color}</span> : <span className="color-label">Preview</span>}
      </div>
      <input
        type="text"
        placeholder="Enter a color (e.g., red, #ff0000)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-input"
      />
      <button className="restore-button" onClick={() => setColor('')}>
        Reset Color
      </button>
    </div>
  );
}

export default App;

