import { Box, Container } from "@mui/material"
import Nav from "./navbar"

const home = (props) => {
    return (
        <>
            <Container>
                <Box sx={{height: '100vh', marginBottom: '3rem' }}>
                    <Nav />                    
                    Welcome {props.user?.name}
                </Box>
            </Container>
        </>
    )
}

export default home