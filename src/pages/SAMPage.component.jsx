import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import SAM from "../components/SAM_questionnaire"
import {  Card, TextField, Button } from '@material-ui/core';
import TRUST from "../components/TRUST_questionnaire"
 
const useStyles = makeStyles({
  surveyRoot: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '50px',
  },
});
// put all the survey questions here in the form of dictionary
// these dictionary objects are passed as props to corrosponding component rendering the questionnaire
// SCTquestdata are the questionnaire to assess IV: ego development level
const SAMquestdata = {
  intro : 'Intro' ,
  questions : [{"question":'Rate Valence (include valence definition)', "img1":require("../images/happy.png"), "img2":require("../images/sad.png")}, 
                {"question":'Rate Arousal (include arousal definition)', "img1":require("../images/arousal_1.png"), "img2":require("../images/arousal_5.png")}
                  ],
  trustQuestions: [{"question":'Rate Trust'}, 
                   {"question":'Rate Credibility'},
                   {"question":'Rate Bias'}
                  ]
  }
  

// passing the survey question dictionary object to the coponent for rendering
const SAMPage = ({ match }) => {
  const classes = useStyles();

  return (
    <div>
      <SAM SAMquestdata = {SAMquestdata} /> 

      <TRUST SAMquestdata = {SAMquestdata} /> 
    </div>
  );
};

export default withRouter(SAMPage);
