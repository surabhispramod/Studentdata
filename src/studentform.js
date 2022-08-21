import React from'react';
import { Grid } from '@material-ui/core';
import {Use,Stuform} from './use';
import Input from './input';
import Controls from './control';

  const initialvalue={
Name:"",
email:"",
college:""
  }
 export default function Form(props)
 {
   const{addorEdit} = props


const validate =(fieldValues=values)=>{
  let temp={...errors}
  if('Name' in fieldValues)
  temp.Name=fieldValues.Name?"":"Please enter."
  if('email' in fieldValues)
  temp.email=fieldValues.email?"":"Please enter."
  if('college' in fieldValues)
  temp.college=fieldValues.college?"":"Please enter."
  setErrors({
    ...temp
  })
  if( fieldValues==values)

  return Object.values(temp).every(x=>x=="")
}

   const {
     values,
     setValues,
     errors,
     setErrors,
     handleInputChange,
     resetForm
   }=Use(initialvalue,true,validate);

const handleSubmit= e =>{
  e.preventDefault()
  if(validate())
addorEdit(values,resetForm);
}
   return(
       <Stuform onSubmit={handleSubmit}>
       <Grid container>
         <Grid item xs={6}>

       <Input variant="outlined" 
       label="Full Name"
       name="Name"
       value={values.Name}
       onChange={handleInputChange}
       error={errors.Name}/>


       <Input
        label="email-id"
       name="email"
       value={values.email}
       onChange={handleInputChange}
       error={errors.email}/>

       <Input variant="outlined" 
       label="College"
       name="college"
       value={values.college}
       onChange={handleInputChange}
       error={errors.college}/>
<div>
  <Controls.Button
  type="Submit"
  text="Submit"/>
   <Controls.Button
  text="Reset"
  color="default"
  onClick={resetForm}
  />
</div>


       </Grid>
       </Grid>
       </Stuform>
      
   )
 }
  