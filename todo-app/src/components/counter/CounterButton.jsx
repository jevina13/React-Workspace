// import {PropTypes } from "prop-types";
// import { useState } from 'react';


export default function CounterButton({by , incrementMethod , decrementMethod}){

    //[0,f]  state stores value, internal function --> const state = useState(0);
    // const [count,setCount] = useState(0);

    /*function incrementCounter() {
        setCount(count + by);
        incrementMethod(by);
    }

    function decrementCounter() {
        // setCount(count - by);
        decrementMethod(by);
        } */

    return(
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" 
                        onClick={() => incrementMethod(by)}
                        >+{by}</button> 
                <button className="counterButton" 
                        onClick={() => decrementMethod(by)}
                        >-{by}</button> 
            </div>
        </div>
    )
}

// CounterButton.propTyes ={
//     by: PropTypes.number    //setting up that by value should be number
// }

// CounterButton.defaultProps={
//     by: 1                   //setting default value as 1
// }

