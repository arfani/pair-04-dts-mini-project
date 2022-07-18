import { Box, Container } from "@mui/material"

const home = (props) => {
    return (
        <>
            <Container>
                <Box sx={{height: '100vh', marginBottom: '3rem' }}>
                    Welcome {props.user?.name}
                </Box>
            </Container>
        </>
    )
}

export default home