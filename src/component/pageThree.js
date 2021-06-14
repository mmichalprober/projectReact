import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom'
import { actionsStore } from '../redux/actions/actions'

export default function Page2() {
    const [usersList, setusersList] = useState([{}])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:3001/api/getAllUsers", requestOptions)
            .then(response => response.json())
            .then(result => {
                setusersList(result.user)
                console.log('result.us', result.user)
                console.log('result', result)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
    <>
        <div  >
            <div id="myUsers">
                <h1>users</h1>
                <table>
                    {usersList.map((x, key) => {
                        return (
                            <ul key={key} style={{ display: 'inline-block', padding: "25px" }}>
                                <li>user name:</li>
                                <br />
                                <li>{x.name}</li>
                                <br />
                                < li>user email:</li>
                                <br />
                                <li>{x.mail}</li>
                            </ul>)
                    })}
                </table>
            </div>
        </div>
    </>
  )
}

