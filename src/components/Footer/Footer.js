import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h3>Differentiate between props and state?</h3>
            <p>There are many differences exist between props and state they are-
                1)props are immutable on the other hand states are mutable
                that means props can not be modified and states are able to modified.
                2)props are read only components ,both read and write can be done by state components.
                3)Props can passed data from one component to another,
                state can passed data within components.
                4)State and other components can used props,but state only used within state component.
                5)Props are used for communicating within components,Dynamic changes within components done by state.
            </p>
            <h3>How use state work?</h3>
            <p>When we declare a state variable with useState , it returns a pair — an array with two items. The first item is the current value, and the second is a function.useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
        </div>
    );
};

export default Footer;