import React from 'react'
import {withRouter} from 'react-router-dom';

function Test(props) {
    console.log('Test Props',props);
    const navigateToLogin=()=>{
        props.history.push('/login')
    }
    return (
        <div>
           
           {/* <button onClick={navigateToLogin} >Login</button> */}
        </div>
    )
}

export default withRouter(Test)
