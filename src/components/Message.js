import React, { Component } from 'react';

const Msg = (props) => (
        <div> Hello {props.text}
            <ul> 
                {props.phrases.map((el,ind) => (
                    <li key = {ind}> {el} </li>
                ))}
            </ul>
        </div>
)

export default Msg;