import React from "react";

const Counter = (props) => {

    let [counter , setCounter ] = React.useState(props.initialValue);
    // let [color, setColor ] = React.useState('red');
   
    // let increment = () => (
    //     setCounter (Number(counter) + 1)
    // )

    // let decrement = () => (
    //     setCounter(Number(counter) - 1)
    // )

    return (
        <div className="App">
            <h1>Counter : <span style={{ color : counter%2===0?"red":"green" }}>{counter}</span></h1>
            <button onClick={() => setCounter (Number(counter) + 1) }>Increment</button>
            <button onClick={() => setCounter (Number(counter) - 1)}>Decrement</button>
            <button  onClick={() => setCounter (Number(counter) * 2) }>Double</button>
        </div>
    )
}

export default Counter;