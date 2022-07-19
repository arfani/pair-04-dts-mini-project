import { useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import {
    auth,
    loginUser,
    registerUser
} from "../config/firebase"
import { Telegram } from "@mui/icons-material"

const Form = ({ regOrLogin }) => {
    const navigate = useNavigate()

    const [credential, setCredential] = useState({
        email: "",
        password: "",
    })

    const emailOnChangeHandler = (e) => {
        setCredential({
            ...credential,
            email: e.target.value,
        })
    }

    const passOnChangeHandler = (e) => {
        setCredential({
            ...credential,
            password: e.target.value,
        })
    }

    const loginHandler = () => {
        loginUser(credential.email, credential.password)
    }

    const registerHandler = () => {
        registerUser(credential.email, credential.password)
        console.log('clicked');
    }

    const submitHandler = () => {
        console.log('submit invoked');
        regOrLogin === "login" ? loginHandler() : registerHandler()
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ mb: "1.5rem" }}>Please {regOrLogin === "login" ? "Login" : "register"}</Typography>
            <Box component="form" sx={{ width: '300px' }}>
                <TextField onChange={emailOnChangeHandler} id="email" type="email" variant="standard" label="Email" fullWidth />
                <TextField onChange={passOnChangeHandler} id="password" type="password" variant="standard" label="Password" fullWidth sx={{ margin: '1rem 0 1.5rem' }} />
                <Button onClick={submitHandler} variant="contained" endIcon={<Telegram />}>{regOrLogin === "login" ? "Login" : "Register"}</Button>
                <Typography sx={{ mt: "1rem" }}> Or {regOrLogin === "login" ? <Link to="/register">Register</Link> : <Link to="/login">Login</Link>  }</Typography>
            </Box>
        </Box>
    )
}

export default Form