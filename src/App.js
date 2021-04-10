
import Greet from './components/Basic/Greet'
import WelcomeClass from './components/Basic/WelcomeClass';
import MessageState from './components/Basic/MessageState';
import CounterState from './components/Basic/CounterState';
import FunctionClick from './components/Basic/FunctionClick';
import ClassClick from './components/Basic/ClassClick';
import EventBind from './components/Basic/EventBind';
import ConditionalRendering from './components/Basic/ConditionalRendering';
import MethodAsPropsParent from './components/Basic/MethodAsPropsParent';
import ListRendering from './components/ListRendering/ListRendering';
import StyleSheet from './components/Basic/StyleSheet';
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
import PostList from './components/AdvancedConcept/HTTP/PostList'
import PostForm from './components/AdvancedConcept/HTTP/PostForm'
import UseState from './components/Hooks/useState/UseState'
import UseStateDetails from './components/Hooks/useState/UseStateDtails'
import UseStateObject from './components/Hooks/useState/UseStateObject'
import UseStateArray from './components/Hooks/useState/UseStateArray'
import UseEffect from './components/Hooks/useEffect/UseEffect';
import ConditionalyRunUseEffect from './components/Hooks/useEffect/ConditionalyRunUseEffect';
import ClassMouse from './components/Hooks/useEffect/ClassMouse';
import RunEffectOnlyOnce from './components/Hooks/useEffect/RunEffectOnlyOnce';
import UseEffectCleanup from './components/Hooks/useEffect/UseEffectCleanup';
import UseEffectInterval from './components/Hooks/useEffect/UseEffectInterval';
import DataFetching from './components/Hooks/useEffect/DataFetching';
//import MainComponent from './components/Hooks/useContext/MainComponent';
import Counter1 from './components/Hooks/useReducer/Counter1';
import Counter2 from './components/Hooks/useReducer/Counter2';
import Counter3 from './components/Hooks/useReducer/Counter3';
import MainComponent from './components/Hooks/useReducerwithuseContext/MainComponent';
import FetchingData from './components/Hooks/useReducer/FetchingData';
//import FetchingDataOne from './components/Hooks/useReducer/FetchingDataOne'
//import ParentComponent from './components/Hooks/useCallback/ParentComponent'
import CounterMemo from './components/Hooks/useMemo/CounterMemo'

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
      {/* <UserProvider value="Vijay">
      <ComponentC></ComponentC>
      </UserProvider> */}
      {/* <ComponentC></ComponentC> */}

      {/* HTTP */}
      {/* <PostList></PostList> */}
      {/* <PostForm></PostForm> */}

      {/* Hooks */}

      {/* useState */}
      {/* <UseState></UseState> */}
      {/* <UseStateDetails></UseStateDetails> */}
      {/* <UseStateObject></UseStateObject> */}
      {/* <UseStateArray></UseStateArray> */}

      {/* useEffect */}
      {/* <UseEffect></UseEffect> */}
      {/* <ConditionalyRunUseEffect></ConditionalyRunUseEffect> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <RunEffectOnlyOnce></RunEffectOnlyOnce> */}
      {/* <UseEffectCleanup></UseEffectCleanup> */}
      {/* <UseEffectInterval></UseEffectInterval> */}
      {/* <DataFetching></DataFetching> */}

      {/* useContext */}
      {/* <MainComponent></MainComponent> */}

      {/* useReducer */}
      {/* <Counter1></Counter1> */}
      {/* <Counter2></Counter2> */}
      {/* <Counter3></Counter3> */}

      {/* useReducer with useContext */}
      {/* <MainComponent></MainComponent> */}
      
      {/* useState and useEffect */}
      {/* <FetchingData></FetchingData> */}

      {/* useReducer and useEffect */}
      {/* <FetchingDataOne></FetchingDataOne> */}

      {/* useCallback */}
      {/* <ParentComponent></ParentComponent> */}

      {/* useMemo */}
      {/* <CounterMemo></CounterMemo> */}

    </div>
  );
}

export default App;
