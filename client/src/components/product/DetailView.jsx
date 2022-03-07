import { Box, makeStyles, Typography, Table, TableBody, TableRow, TableCell, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import {LocalOffer as Badge} from '@mui/icons-material';
import clsx from 'clsx'; 
//component
import ActionItems from "./ActionItems";

const useStyle = makeStyles(theme => ({
    component:{
        marginTop: 55,
        background: '#F2F2F2'
    },
    container:{ 
       // margin: '0 80px',
        background:'#FFF',
        display: 'flex',
        [theme.breakpoints.down('md')]:{
            margin: 0
        }
    },
    rightContainer:{
        marginTop: 50,
        '&>*':{
            marginTop:10
        }
    },
    smallText:{
        fontSize:14,
        verticalAlign:'baseline',   
        '&>*':{
            fontSize: 13,
            marginTop:10
        }

    },
    greyTextColor:{
        color:'#878787'
    },
    price:{
        fontSize:28
    },
    badge:{
        fontSize: 13,
        marginRight: 10,
        color:'#00CC00'
    }

}));

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


const DetailView = ({match}) =>{
const classes = useStyle();
const {product} = useSelector(state=> state.getProductDetails);
const date = new Date(new Date().getTime() + (5*24*60*60*1000));

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getProductDetails(match.params.id));
},[dispatch])

    return(
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
                <Grid container className= {classes.container}>
                    <Grid item lg ={4} md={4} sm={8} xs={12} >
                        <ActionItems product={product} />
                    </Grid>
                    <Grid item lg ={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}> 8 Ratings & 1 Review 
                        <span><img src={fassured} style={{width:77, marginLeft:20}} /></span> </Typography>
                        
                        <Typography> 
                        <span className={classes.price}> ₹{product.price.cost}</span> &nbsp;&nbsp; &nbsp;
                        <span className={classes.greyTextColor} ><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp; &nbsp;
                        <span style={{color:'#388E3C'}}> {product.price.discount} off</span> &nbsp;&nbsp; &nbsp;
                        </Typography>
                        
                        <Typography style={{marginTop:20, fontWeight:600}}> Available Offers </Typography> 
                        <Box className={classes.smallText}>
                            <Typography> <Badge className={classes.badge}/>Bank Offer10% off on RBL Bank Cards, up to ₹1500. On orders of ₹5000 and aboveT&C </Typography> 
                            <Typography><Badge className={classes.badge}/>Bank Offer10% off on Federal Bank Cards, up to ₹1,500 . On orders of ₹5000 and aboveT&C</Typography>
                            <Typography><Badge className={classes.badge}/> Bank Offer10% off on AU Bank Credit Cards, up to ₹1500 . On orders of ₹5000 and aboveT&C </Typography>
                            <Typography><Badge className={classes.badge}/>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More </Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell> Delivery</TableCell>
                                    <TableCell style={{fontWeight:600}}>{date.toDateString()}</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell> Warranty </TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell> Seller </TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{color:'#0000FF'}}>SuperComNet</span>
                                        <Typography>GST invoice available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View More sellers starting from ₹ 500</Typography> 
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell colSpan ={3}>
                                    <img src={sellerURL} style={{width:390}} />
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell> Description </TableCell>
                                    <TableCell> {product.description} </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>



                        
                    </Grid>
                </Grid>
            }
        </Box>
    )
}


export default DetailView;