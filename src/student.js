import React from 'react'
import Form from "./studentform";
import { Paper,makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))
export default function Stu(){
    const classes=useStyles();
    return(
        <>
        <Paper className={classes.pageContent}>{/*<Form/>*/}</Paper>
   </>
        )
}