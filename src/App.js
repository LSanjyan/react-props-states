
import './App.css';
import Student from './Student.js';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <Student name={data[0].name}/>
      <Student bio={data[0].bio}/>
      
    </div>
  );
}

export default App;
