import { useState } from 'react';
import CounterButton from './CounterButton'
import './Counter.css'

export default function Counter() {

    const [count,setCount] = useState(0);

    function incCounterParent(by) {
        setCount(count + by);
    }

    function decCounterParent(by) {
        setCount(count - by);
    }

    function resetCounter() {
        setCount(0);
    }

    return(
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                incrementMethod = {incCounterParent}
                decrementMethod={decCounterParent}/>
            <CounterButton by={2} 
                incrementMethod = {incCounterParent}
                decrementMethod={decCounterParent}/>
            <CounterButton by={5} 
                incrementMethod = {incCounterParent}
                decrementMethod={decCounterParent}/>
            <button className="resetButton" 
                    onClick={resetCounter}
            >Reset</button>
        </>
    )
}


