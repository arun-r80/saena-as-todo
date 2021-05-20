import React from 'react';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Theme from '../../Theme/theme.json';

const useStyles = makeStyles( themes =>  {
    
  
    return({
    root: {
        width:'100%',
        '& .MuiOutlinedInput-input':{
            padding: '8px 6px',
            'font-size': '12px'
        }
    }})
})



export const RenderTextField = (props) => {
    
    const classes = useStyles();
   

    return(
        <TextField id="outlined-basic" placeholder="Enter Reference Number" variant="outlined" classes={{root: classes.root}}/>
    )

}