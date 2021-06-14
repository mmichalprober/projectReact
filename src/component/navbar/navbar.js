import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./navbar.css"

export default function ComponentName() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
                <div className="container-fluid">

                    <div >
                        <ul id="nav">
                            <li>
                                <Link to="/page1">add user</Link>
                            </li>
                            <li>
                                <Link to="/page2">user details</Link>
                            </li>
                            <li>
                                <Link to="/page3">all users</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

