import React,{Children, useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'



export default function Protected(children,authentication=true) {

    const naviagte = useNavigate()
    const [loader, setLoader] = useState(true)
    //check that user is login or not
    const authStatus = useSelector(state =>state.auth.status)

    useEffect(()=>{
        ///TODO make it more easy to understand
        // if (authStatus===true) {
        //     naviagte("/")
        // } else if(authStatus ===false){
        //     naviagte("/login")
        // }



        // let authValue = authStatus ===true ? true :false
        //or you can use this take all variables like this and put this for less complications

        // true && false !== true
        //true && true
        if (authentication && authStatus !== authentication) {
            navigate("/login")
            //false && true!== true
            //false && false
        } else if (!authentication && authStatus !== authentication){
            naviagte ("/")
        }
        setLoader(false)
    }, [authStatus,naviagte,authentication])

    return loader? <h1>Loading...</h1> : <>{Children}</>
}
 
