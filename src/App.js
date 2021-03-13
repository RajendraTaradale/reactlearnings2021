import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import MasterComponent from './components/masterLayout'
import FormValid from './components/formvalidation'
import Counter from './components/counter'
import ParentComp from './components/parentComp'

import DemoFunction from './components/plainfuntion'
import PlainFunDemo from './components/plainCompTest'
import LifeCycleSequence from './components/lifeCycleHooks'
import RouterDemo from './components/routerDemo'

import Appss from './components/reactHookForm.jsx'

function App() {
  return (

    <div className="container">
      <Appss/>
      <RouterDemo/>
         {/* <LifeCycleSequence/> */}
      {/* <PlainFunDemo/>
<DemoFunction/>
<ParentComp/> 

       <FormValid/>
      <MasterComponent/> 
      <Home/>
     <Counter/> */}
    </div>
  );
}

export default App;
