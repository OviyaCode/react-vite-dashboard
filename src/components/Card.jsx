import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import BarDiagram from './charts/BarDiagram';
import PieDiagram from './charts/PieDiagram';

function Card() {

    const Item = styled(Paper)(() => ({
        padding: 8,
        textAlign: 'center',
        color: 'black',
    }));

    const containerStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
    };

    return (
        <>
            <Grid container spacing={4} style={containerStyle}>
                <Grid item xs={12} sm={6}>
                    <Item elevation={0}>
                        <Typography variant='body2' sx={{ float: "left" }}> Hello Shahrukh 👏 !</Typography>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Item elevation={0}>
                        <Typography sx={{ float: "right", marginRight: 6 }}> <SearchOutlinedIcon /> Search....</Typography>
                    </Item>
                </Grid>

                <Grid item  xs={12} sm={6} lg={3}>
                    <Item elevation={3}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <CurrencyExchangeOutlinedIcon sx={{ m: 3, fontSize: "5em", p: 3, backgroundColor: "#50C878", color: "#f2f2f2", borderRadius: "50%" }} />
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant='subtitle2'>Earning</Typography>
                                <Typography variant='h6'>$198K</Typography>
                                <Typography variant='subtitle2'>37.8% this month</Typography>
                            </Box>
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Item elevation={3}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <ArticleOutlinedIcon sx={{ m: 3, fontSize: "5em", p: 3, backgroundColor: "#0047AB", color: "#f2f2f2", borderRadius: "50%" }} />
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant='subtitle2'>Orders</Typography>
                                <Typography variant='h6'>$198K</Typography>
                                <Typography variant='subtitle2'>37.8% this month</Typography>
                            </Box>
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Item elevation={3}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <AccountBalanceWalletOutlinedIcon sx={{ m: 3, fontSize: "5em", p: 3, backgroundColor: "#FFC300 ", color: "#f2f2f2", borderRadius: "50%" }} />
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant='subtitle2'>Balance</Typography>
                                <Typography variant='h6'>$198K</Typography>
                                <Typography variant='subtitle2'>37.8% this month</Typography>
                            </Box>
                        </Box>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Item elevation={3}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <ShoppingBasketOutlinedIcon sx={{ m: 3, fontSize: "5em", p: 3, backgroundColor: "#D22B2B", color: "#f2f2f2", borderRadius: "50%" }} />
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant='subtitle2'>Total Sales</Typography>
                                <Typography variant='h6'>$198K</Typography>
                                <Typography variant='subtitle2'>37.8% this month</Typography>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Item elevation={3}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <BarDiagram/>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Item elevation={3}>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", height:"300px" }}>
                            <PieDiagram/>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default Card;


