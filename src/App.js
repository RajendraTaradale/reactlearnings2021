import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import MasterComponent from './components/masterLayout'
import FormValid from './components/formvalidation'
import Counter from './components/counter'
import ParentComp from './components/parentComp'

function App() {
  return (
    <div className="container">

<ParentComp/>
      {/* <FormValid/>
      <MasterComponent/> */}
     {/* <Home/>
     <Counter/> */}
    </div>
  );
}

export default App;
