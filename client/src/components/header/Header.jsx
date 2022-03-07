
import {AppBar, Toolbar, makeStyles, Typography, Box, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Menu} from '@material-ui/icons';
//components
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import { withStyles } from '@material-ui/styles';
import { useState } from 'react';

const useStyle = makeStyles(theme=>({
    header:{
            background:'#2874f0',
            height:60
    },
    logo:{
        width: 75
    },
    subURL:{
        width:10,
        marginLeft:4,
        height:10
    },
    container:{
        display:'flex'
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration : 'none',
        color: '#fff'
    },
    subHeading:{
        fontSize:10,
        fontStyle:'italic'
    },
    list:{
        width: 250
    },
    menuButton:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    HeaderButtons:{
         margin:' 0 5% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }

}));

const ToolBar = withStyles({
    root: {
        minHeight:55
    }
})(Toolbar);


const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose=()=>{
        setOpen(false);
    }

    const handleOpen =()=>{
        setOpen(true);
    }

    const list =()=>{
        return(
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem button>
                    <HeaderButtons/>
                </ListItem>

            </List>
        </Box>
        )
    }

    return (
        <AppBar className= {classes.header}>
            <Toolbar>

                <IconButton color="inherit" className={classes.menuButton} onClick={handleOpen}>
                    <Menu></Menu>
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>


                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} alt="logo" />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore Plus</Typography>
                        <img src={subURL} className={ classes.subURL} alt="" />
                    </Box>
                </Link>
                <SearchBar/>
                

                <span className={classes.HeaderButtons}><HeaderButtons/></span>
            </Toolbar>
        
        </AppBar>
    )
}

export default Header;