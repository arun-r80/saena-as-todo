import React from 'react';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {ErrorValidation} from '../../Common/index';

const style =  {
    root: {
        width:'100%',
        '& .MuiOutlinedInput-input':{
            padding: '8px 6px',
            'border-radius':'4px',
            'font-size': '12px'
        },
        }};

const errorStyle = {root: {
        ...style.root,
        '& .MuiOutlinedInput-notchedOutline':{
            'border':'3px dotted red'
        },
        
'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
    'border':'3px dotted red'       

}
    }}

const useStyles = makeStyles( themes => style )
const useErrorStyles = makeStyles(theme => errorStyle )



const getClasses = (props) => {
    const classStyle = (props.error && props.touched) ? errorStyle : style;
    
    return makeStyles(classStyle)()
}

export const RenderTextField = ({input,
    label,
    meta:{touched, error}}) => {
    const classes =  getClasses({touched, error}) ;

    
    return(
        <div>
        <TextField id="outlined-basic" {...input} placeholder="Enter Reference Number" variant="outlined" classes={{root: classes.root}}>
            
        </TextField>
        {error && touched && <ErrorValidation>error</ErrorValidation>}
        </div>
    )
}