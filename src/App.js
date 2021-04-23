import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import First from './component/First';
import Second from './component/Second';
import { Third } from './component/Third';

function App() {
  return (
    <div className="App">
     
    <Second/>
       <First/>
     <Third/>
    </div>
  );
}

export default App;
