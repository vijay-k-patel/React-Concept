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
import StyleSheet from './components/StyleSheet';
import FormHandling from './components/FormHandling/FormHandling';
import MountingA from './components/LifeCycleMethod/MountingA';
import UpdatingA from './components/LifeCycleMethod/UpdatingA';
import Fragments from './components/AdvancedConcept/Fragements/Fragments';
import Table from './components/AdvancedConcept/Fragements/Table';
import PureComponentS from './components/AdvancedConcept/Components/PureComponentS';
import ParentComponentS from './components/AdvancedConcept/Components/ParentComponentS';
import Memo from './components/AdvancedConcept/Memo';
import Refs from './components/AdvancedConcept/Refs/Refs';
import FocusInput from './components/AdvancedConcept/Refs/FocusInput';
import FordwardParentRefInput from './components/AdvancedConcept/Refs/FordwardParentRefInput';
import PortalsComponent from './components/AdvancedConcept/PortalsComponent';
import ErrorHero from './components/AdvancedConcept/ErrorHero';
import ErrorBoundary from './components/AdvancedConcept/ErrorBoundary';
//import ClickCounter from './components/AdvancedConcept/HigherOrderComponent/ClickCounter'
import ClickCounter from './components/AdvancedConcept/RenderProps/ClickCounter'
//import HoverCounter from './components/AdvancedConcept/HigherOrderComponent/HoverCounter'
import HoverCounter from './components/AdvancedConcept/RenderProps/HoverCounter'
import User from './components/AdvancedConcept/RenderProps/User'
import Counter from './components/AdvancedConcept/RenderProps/Counter'
import ComponentC from './components/AdvancedConcept/Context/ComponentC'
import {UserProvider} from './components/AdvancedConcept/Context/UserContext'


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
      {/* <ListRendering></ListRendering> */}

      {/* Style css */}
      {/* <StyleSheet></StyleSheet> */}

      {/* Form Handling */}
      {/* <FormHandling></FormHandling> */}

      {/* Life Cycle Method */}
      {/* <MountingA></MountingA> */}
      {/* <UpdatingA></UpdatingA> */}

      {/* Fragement in React */}
      {/* <Fragments></Fragments> */}
      {/* <Table></Table> */}

      {/* Pure Components */}
      {/* <PureComponentS></PureComponentS> */}
      {/* <ParentComponentS></ParentComponentS> */}

      {/* Memo Components */}
      {/* <Memo></Memo>
      <ParentComponentS></ParentComponentS> */}

      {/* Refs */}
      {/* <Refs></Refs> */}
      {/* <FocusInput></FocusInput> */}
      {/* <FordwardParentRefInput></FordwardParentRefInput> */}

      {/* Portals */}
      {/* <PortalsComponent></PortalsComponent> */}

      {/* Error Boundary */}
      {/* <ErrorHero heroName="Batman"></ErrorHero>
      <ErrorHero heroName="Superman"></ErrorHero>
      <ErrorHero heroName="jocker"></ErrorHero> */}
      {/* <ErrorBoundary>
        <ErrorHero heroName="Batman"></ErrorHero>
        <ErrorHero heroName="Superman"></ErrorHero>
        <ErrorHero heroName="jocker"></ErrorHero>
      </ErrorBoundary> */}

      {/* Higher Order Component */}
      {/* <ClickCounter name="vijay"></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/* Render Props */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <User name = {(isLoggedIn) => isLoggedIn ? "vijay" : "guest"}></User>   */}
      {/* <Counter renderProps = {(count,incrementCounter) => (
        <ClickCounter count={count} incrementCounter={incrementCounter} />)}
        /> 
      <Counter renderProps = {(count,incrementCounter) => (
        <HoverCounter count={count} incrementCounter={incrementCounter} />)}
        />  */}

      {/* Context */}
      <UserProvider value="Vijay">
      <ComponentC></ComponentC>
      </UserProvider>
      {/* <ComponentC></ComponentC> */}
    </div>
  );
}

export default App;
