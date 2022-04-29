import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h2>Differentiate between props and state?</h2>
            <p>There are many differences exist between props and state they are-
                1)props are immutable on the other hand states are mutable
                that means props can not be modified and states are able to modified.
                2)props are read only components ,both read and write can be done by state components.
                3)Props can passed data from one component to another,
                state can passed data within components.
                4)State and other components can used props,but state only used within state component.
                5)Props are used for communicating within components,Dynamic changes within components done by state.
            </p>
            <h2>How use state work?</h2>
            <p>When we declare a state variable using useState , it returns a pair — an array with two items. The first item is the current value, and the second is a function.useState is a Hook (function) that is used for  declaring state variables in functional components. We first set the initial state of this function then it returns a variable with the current state value .And the return function is used to update the value of the variable.That's the  working process of useState.</p>
        </div>
    );
};

export default Footer;