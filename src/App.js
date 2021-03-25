import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import WelcomeClass from './components/WelcomeClass';
import MessageState from './components/MessageState';
import CounterState from './components/CounterState';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ConditionalRendering from './components/ConditionalRendering';
import MethodAsPropsParent from './components/MethodAsPropsParent';
import ListRendering from './components/ListRendering/ListRendering';


function App() {
  return (
    <div className="App">
      {/* props with functional components */}
      {/* <Greet name="vijay"></Greet>
      <Greet name="diana"></Greet> */}

      {/* props with class components */}
      {/* <WelcomeClass classProps="C vijay"></WelcomeClass>
      <WelcomeClass classProps="C patel"></WelcomeClass>  */}
      
      {/* state with class components */}
      {/* <MessageState></MessageState> */}

      {/* state and setState using counter */}
      {/* <CounterState></CounterState> */}

      {/* Event handling */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}

      {/* EventBinding */}
      {/* <EventBind></EventBind> */}

      {/* Conditional Rendering */}
      {/* <ConditionalRendering></ConditionalRendering> */}

      {/* Method as props */}
      {/* <MethodAsPropsParent></MethodAsPropsParent> */}

      {/* List rendering */}
      <ListRendering></ListRendering>
    </div>
  );
}

export default App;
