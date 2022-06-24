import { useState } from 'react';
import './App.css';

function App() {
  const [actions, setAction] = useState([
    {
      action: "Going to Market",
    },
    {
      action: "Reading Books",
    }
  ]);
  let input = document.getElementById("actionInput");
  const clear = () => {
    input.value = "";
  }
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    e.preventDefault();
    setValue({ action: e.target.value });
  }
  function clickDelete(index) {
    const newAction = actions.filter(work => work.action !== index);
    setAction(newAction);
  }
  function clickAdd() {
    input.value === "" ? alert("Not a valid input") : setAction([...actions, value])
    clear();
  }

  return (
    <div className="App">
      <h2>TO-DO List Using React</h2> <br />
      <input type='text' id='actionInput' name='actionName' placeholder='Enter Action' onChange={handleChange} />&nbsp;
      <button onClick={clickAdd} className='btn btn-success'>Add</button>
      {actions.length === 0 ? <h1>No tasks to display</h1> : actions.map(work =>
        <li key={work.index}>{work.action}&nbsp;
          <button className='btn btn-sm btn-danger' onClick={() => clickDelete(work.action)}>Delete</button>
        </li>)}
    </div>
  );
}

export default App;
