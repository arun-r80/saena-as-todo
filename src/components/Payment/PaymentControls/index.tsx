import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import {makeStyles} from '@material-ui/core/styles';


const useStyles =   makeStyles({
    root:{
        width:'100%' ,
        height: '32px',
        '& .MuiFilledInput-input': {
            padding: '6px 0px 2px 6px',
            height: '32px',
            'box-sizing': 'border-box'
            
           },
           //remove underlining color
        '& .MuiFilledInput-underline:before':{
            'border-bottom':'0px',
            transition: 'none'
        },
        //remove underlining color after focus
        '& .MuiFilledInput-underline:after':{
            'transition':'none',
            'border-bottom':'0px'
        },
        '& .MuiFilledInput-root':{
            'border-bottom-right-radius': '4px',
            'border-bottom-left-radius':'4px',
            'border-color':'black'
        }
    },
        
    
});

const useSelectStyles = makeStyles({
   
});



export const RenderSelect = ({
    input,
    label,
    meta:{touched, error},
    children,
    ...other
}) => {

    const classes = useStyles();
    const selectClasses = useSelectStyles();
    
    return(
    <FormControl variant="filled" error={touched && error} classes={{root:classes.root}}>
        <Select 
            native
            {...input}
        >
           
            {children}
            
        </Select>
    </FormControl>
    )
}
