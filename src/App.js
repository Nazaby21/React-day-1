import './App.css';
// import Welcome from './component/Welcome';
import Course from './Components/Course';
import Count from './Components/State/Count';
import CounterApp from './Components/State/CounterApp';
import TodoUi from './Components/Todo/TodoUi';
import Product from './Components/State/Product';

function App() {
  return (
    <div className="App">
      {/* <Count/>
      <CounterApp/> 
      <TodoUi/>*/}

      <Product/>
    </div>
  );
}

export default App;
