import { ClassNames } from '@emotion/react';
import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Controls from './control';
import CloseIcon from '@material-ui/icons/Close';
const useStyles=makeStyles(theme=>({
    dialogWrapper:{
        padding:theme.spacing(2),
        position:"absolute",
        top:theme.spacing(5)
    }
}))
export default function Popup(props){
    const{title,children,openPopup,setOpenPopup}=props;
    const classes=useStyles();
    return(
        <Dialog open={openPopup} maxWidth="md" classes={{paper:classes.dialogWrapper}}>
            <DialogTitle>
                
<div style={{display:'flex'}}>
    <Typography variant='h5' component='div'style={{flexGrow:1}}>
    {title}
    </Typography>
    <Controls.ActionButton
    color="primary"
    onClick={()=>{setOpenPopup(false)}}>
        <CloseIcon/>
    </Controls.ActionButton>
    
    
    
    
    </div>
            </DialogTitle>
            <DialogContent dividers>
           {children}

            </DialogContent>
        </Dialog>
    )
}