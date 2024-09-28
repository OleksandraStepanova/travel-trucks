import { AppBar, Box, Toolbar } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import icon from "../../img/logo.svg"

export default function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{
                    backgroundColor: '#F7F7F7',
                    padding: '0 46px',
                }}
                position="static">
                <Toolbar sx={{
                    justifyContent: 'start',
                 }}>
                    <img src={icon} alt="logo" />
                    <Navigation />             
                </Toolbar>
            </AppBar>
        </Box>
    )
}