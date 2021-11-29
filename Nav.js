import React from 'react'
import './nav.css';
import SingleNav from './SingleNav';

function Nav() {
    return (
        <div className="nab">
            <h2> Type </h2>
            <div className="nabbar">
            <SingleNav active path="/" text="Home" />
            <SingleNav path="/about"  text="About" />
            </div>
        </div>
    )
}

export default Nav
