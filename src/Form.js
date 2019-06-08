import React, { Component } from 'react';
import classes from './Form.module.css';

export default class Form extends Component {
    render() {
        return (
            <div className = {classes.Form}>
               
                <input/>
                <input/>
                <textarea/>
                <button>Some</button>
            </div>
        )
    }
}
