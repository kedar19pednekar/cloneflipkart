import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const useStyle = makeStyles( theme=>({
    image:{
        width:'100%',
        height: 280,
        [theme.breakpoints.down('sm')]:{
            objectFit : 'cover',
            height:  180
        }
    },
    carousel:{
        marginTop:10
    }
}))

const Banner = () =>{
    const classes = useStyle();
    return(
        <Carousel
            autoPlay={true}
            animation='slide'
            interval= '2000'
            indicators={false}
            navButtonsAlwaysVisible ={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:'#FFFFFF',
                    color:'#494949',
                    borderRadius: 0,
                    margin:0
                }
            }}
            className = {classes.carousel}
        >
            {
                bannerData.map( image => ( 
                <img src={image} className={classes.image} alt="" />
                     ))
            }
        </Carousel>
    )
}

export default Banner;