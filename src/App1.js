import React from "react";
import "./App.css";
import ChildComponent01 from "./childComponent01";

const INCRREMENT = "increment";

const initialState = {
  count: 0,
};

const AppContext = React.createContext();

const reducerFunction = (state, action) => {
  const { type } = action;
  console.log(type);
  switch (type) {
    case INCRREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducerFunction, initialState);
  const { count } = state;
  return (
    <AppContext.Provider value={state}>
      <div className="App">
        <h1>Reducer Example</h1>
        <div>
          <label htmlFor="counter"></label>
          <input
            type="number"
            id="counter"
            onChange={(e) => dispatch({ type: INCRREMENT })}
          />
          <div>{count}</div>
          <br />
          <button>Initialize Counter</button>
          <p>0</p>
          <button>Increment</button>
          <button>Decrement</button>
          <ChildComponent01 />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export { App, AppContext };
