
import React from "react";
import { useContext } from "react"
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context"
import ActivityStudent from "./ActivityStudent"
import ActivityTeacher from "./ActivityTeacher"

const Activity = () => {
    const ctx = useContext(AuthContext);
    const history = useHistory();

    if(!ctx.isLoggedIn) {
        console.log("bee");
        history.push("/auth")
    }

    return (
    <>
        {  ctx.isStudent ? 
            <ActivityStudent /> :
            <ActivityTeacher />    
        }
    </>
    );
}

export default Activity;