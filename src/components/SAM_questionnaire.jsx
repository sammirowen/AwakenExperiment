import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QNR from '../components/sam_qnr.component'
import * as Colors from '../constants/colors';

// define CSS styles
const useStyles = makeStyles({
    intro: {
        marginBottom: '50px',
    },
    submitBtn: {
        marginTop: '50px',
        marginBottom: '150px',
        float: 'right',
    },
    form:{
        background: Colors.BACKGROUND,
    }
  });

const SAM = ({SAMquestdata}) => {
    const classes = useStyles();

    return (
        <div className= {classes.form}>
            {SAMquestdata.questions.map((question)=>(
            <QNR quest={question} />))}    
        </div>
    )
    }
export default SAM;
