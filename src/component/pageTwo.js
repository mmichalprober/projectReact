import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { actionsStore } from '../redux/actions/actions'

function mapStateToProps(state) {
    return {
        user: state.users
    }
}
export default connect(mapStateToProps)(function Page2(props) {
    const { user } = props;

    return (
        <div  >
            <p>hello to: {user.name}</p>
            <p>your age is: {user.age}</p>
            <p>and you from: {user.city}</p>
            <p>your mail is: {user.email}</p>
            <p>and your phone is: {user.phone}</p>
        </div>
    )
})
