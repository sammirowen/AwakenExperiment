import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TRUST from '../components/likert.component'
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

const QNR = ({SAMquestdata}) => {
    const classes = useStyles();

    return (
        <div className= {classes.form}>
            {SAMquestdata.trustQuestions.map((question)=>(
            <TRUST quest={question} />))} 
        </div>
    )
    }
export default QNR;
