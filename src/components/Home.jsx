// Hello Shahrukh 👏 !
import { useProSidebar } from "react-pro-sidebar"
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Container, IconButton } from "@mui/material";
import Card from "./Card";


const Home = () => {
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
    const MenuIconClick = () => {
        broken ? toggleSidebar() : collapseSidebar()
    }
    return (
        <>
            <IconButton onClick={MenuIconClick} color='#333'>
                <MenuIcon sx={{ fontSize: 25 }} />
            </IconButton>
            <Container>
                <Box sx={{ m: 2 }}>
                    <Card/>
                </Box>
            </Container>
        </>
    )
}

export default Home