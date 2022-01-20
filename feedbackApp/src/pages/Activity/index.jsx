
import React from "react";
import { useContext } from "react"
import AuthContext from "../../store/auth-context"
import ActivityStudent from "./ActivityStudent"
import ActivityTeacher from "./ActivityTeacher"

const Activity = () => {
    const ctx = useContext(AuthContext);

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