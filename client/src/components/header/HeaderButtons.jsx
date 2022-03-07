import { useState , useContext} from 'react';
import {Badge, Box, Button, makeStyles, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

//component
import LoginDialog from '../login/Login';
import {LoginContext} from '../../context/ContextProvider';
import Profile from './Profile';



const useStyle = makeStyles( theme=>({
    login :{
        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius:2,
        padding: '5px 40px 5px ',
        boxShadow: 'none',
        '&:hover': {
            background: '#FFFFFF',
        },
        [theme.breakpoints.down('sm')]:{
            background:'#2874f0',
            color:'#ffffff',
            '&:hover': {
                background:'#2874f0',
                color:'#ffffff'
            }
        }
    },
    wrapper:{
        margin:' 0 5% 0 auto',
        display:'flex',
        '&>*':{ // child components
            marginRight:50,
            fontSize: 16,
            alignItems:'center',
            textDecoration : 'none',
            color: '#fff',
            [theme.breakpoints.down('sm')]:{
                color:'#2874f0',
                alignItems:'center',
                display:'flex',
                flexDirection:'column',
                marginTop: 25
            }
        },
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    container:{
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            display:'block',
            alignItems:'center',
            display:'flex',
            flexDirection:'column'
        }
    }
}));

const HeaderButtons =()=>{
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(LoginContext);

    const {cartItems} = useSelector(state=> state.cart);

    const openLoginDialog=() =>{
        setOpen(true);
    }
return(
<Box className={classes.wrapper}>
    {
        account ?  <Profile account ={account} setAccount={setAccount} />  :
        <Link> 
            <Button varient = "contained" onClick={()=>openLoginDialog()} className={classes.login} >Login</Button> 
        </Link> 
    }
    <Link> <Typography style={{marginTop:5}}>More</Typography> </Link>
    <Link to='/cart' className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
        <ShoppingCart/>
        </Badge>
        <Typography style={{marginLeft:10}} >Cart</Typography>
    </Link>
    <LoginDialog open={open} setOpen={setOpen}  setAccount={setAccount}/>
</Box>

) 
 
}

export default HeaderButtons;
