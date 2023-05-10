// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import HooksCounterThree from './components/HooksCounterThree';
// import Hookcounter from './components/HookCounter';
// import ClassCount from './components/ClassCount';
// import HookcounterTwo from './components/HookcounterTwo';
// import HookCounterFour from './components/HookCounterFour';
// import EffectClass from './components/EffectClass';
// import Effect1 from './components/Effect1';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import FocusInput from './components/FocusInput';
// import ComponentC from './useContext/ComponentC';
import CounterOne from './useReducer/CounterOne';
export const UserContext = React.createContext()
export const NameContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <ClassCount/> */}
     {/* <Hookcounter/> */}
     {/* <HookcounterTwo/> */}
     {/* <HooksCounterThree/> */}
     {/* <HookCounterFour/> */}
     {/* <EffectClass/> */}
     {/* <Effect1 /> */}
     {/* <ClassMouse/> */}
     {/* <HookMouse/> */}
     {/* <MouseContainer/> */}
     {/* <IntervalClassCounter/> */}
     {/* <IntervalHookCounter/> */}
     {/* <FocusInput/> */}
     {/* <UserContext.Provider value={'Gnana'}>
      <NameContext.Provider value={'sekar'}>
        <ComponentC/>
      </NameContext.Provider>
     </UserContext.Provider> */}
     <CounterOne/>
    </div>
  );
}

export default App;
