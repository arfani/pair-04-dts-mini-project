import { Button } from "@mui/material"
import { logoutUser } from "../config/firebase"

const navbar = () => {
    const logoutHandler = () => {
        logoutUser()
    }
    return (
        <>
            This is navbar, <Button onClick={logoutHandler}>Logout</Button>
        </>
    )
}

export default navbar