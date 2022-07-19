import { Box, Container } from "@mui/material"

const footer = () => {
    return (
        <Box component="footer">
            <Container sx={{ 
                position: 'fixed', bottom: '0', height: '3rem', textAlign: 'center', lineHeight: '3rem',
                borderTop: '1px solid', borderTopColor: 'grey.300'
                 }}>
                made with ♡ by <b>pair-04</b>
            </Container>
        </Box>
    )
}

export default footer