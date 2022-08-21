import{React,useState}from 'react';
import {makeStyles} from "@material-ui/core";
 export  function Use(intitalvalue,validateOnChange=false,validate){

    const[values,setValues]=useState(intitalvalue);
    const[errors,setErrors]=useState({});

    const handleInputChange=e=>{
        const{name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({[name]:value})
    } 
    const resetForm=()=>{
        setValues(intitalvalue);
        setErrors({})
    }
    return{
         values,
         setValues,
         errors,
         setErrors,
         handleInputChange,
         resetForm
        
    }
 }
 const useStyle=makeStyles(theme=>({
    root:{
      '& .MuiFormControl-root':{
        width:'80%',
        margin:theme.spacing(1)
      }
    }
  }))
export function Stuform(props)
{const classes=useStyle();
    const{children,...other}=props;
    return(
      <form className={classes.root} autoComplete="off"{...other}>{props.children}</form>
    )
}