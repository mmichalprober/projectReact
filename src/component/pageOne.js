import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { actionsStore } from '../redux/actions/actions'

function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({
    setUserName: (value) => dispatch(actionsStore.setUserName(value)),
    setAge: (value) => dispatch(actionsStore.setAge(value)),
    setCity: (value) => dispatch(actionsStore.setCity(value)),
    setUserEmail: (value) => dispatch(actionsStore.setUserEmail(value)),
    setPhone: (value) => dispatch(actionsStore.setPhone(value))

})
export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    const { setUserName, setAge, setCity, setUserEmail, setPhone, user } = props;
    //בגלל שהנתונים נשמרים ברידקס, אם אני לא אמלא נתונים, 
    //   אוטומטי יוצגו בדף2 הנתונים הקודמים,
    //  ואם לא הוכנס נתון, במקום לראות "שם מלא", נראה את השם הקודם שהוכנס,
    //  לכן כל פעם שנגיע לדף הזה, נאפס את הנתונים ברידקס
    useEffect(() => {
        setUserName('enter fullname')
        setAge('enter age')
        setCity('enter city')
        setUserEmail('enter mail')
        setPhone('enter phone')
    }, [])

    const addUser = () => {
        // זה בעצם מונע מהמשתמש להכניס משתמש בלי נתונים
        // בסוף מחקתי את זה, כי ראיתי שצריך להיות אפשרות כזאת...
        //     if (user.name === "enter fullname" || user.age === "enter age" || user.city === "enter city" || user.email === "enter email" || user.phone === "enter phone") {
        //         alert('לא מולאו כל הפרטים')
        //     }
        //     else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
        var raw = "{\r\n    \"name\":\"aaa\"\r\n}";
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`http://localhost:3001/api/createUser/${user.name}/${user.age}/${user.city}/${user.email}/${user.phone}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                alert("התווסף בהצלחה!")
            })
            .catch(error => console.log('error', error));
    }
    // }

    return (


        <div className="inner-container">
            <div className="box">
                <div className="input-group">
                    <label htmlFor="password">name</label>
                    <input type="text" className="login-input" onChange={(e) => setUserName(e.target.value)} placeholder="enter name" />
                </div>

                <div className="input-group">
                    <label>email</label>
                    <input type="text" className="login-input" onChange={(e) => setUserEmail(e.target.value)} placeholder="enter email" />
                </div>

                <div className="input-group">
                    <label >age</label>
                    <input type="number" className="login-input" onChange={(e) => setAge(e.target.value)} placeholder="enter age" />
                </div>
                <div className="input-group">
                    <label >phone</label>
                    <input type="text" className="login-input" onChange={(e) => setPhone(e.target.value)} placeholder="enter phone" />
                </div>
                <div className="input-group">
                    <label >city</label>
                    <input type="text" className="login-input" onChange={(e) => setCity(e.target.value)} placeholder="enter city" />
                </div>
                <button type="button" className="login-btn" onClick={addUser}>Add User</button>
            </div>
        </div>
    )
})
