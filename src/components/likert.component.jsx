import React from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    qnaroot: {
      margin: '20px',
    }
  });

const QNR = ({quest}) =>{
const classes = useStyles();
return (
    <div className = {classes.qnaroot}>
        <label>{quest["question"]}</label> <br/>
        <form>
          {/*console.log({quest["img1"]})*/}
          <label className="radio-inline"> Strongly Disagree
          <input type="radio" style={{width: "2%"}} name="optradio"/>
          </label>
          <label className="radio-inline"> Disagree
          <input type="radio" style={{width: "2%"}} name="optradio"/>
          </label>
          <label className="radio-inline"> Somewhat Disagree
          <input type="radio" style={{width: "2%"}} name="optradio"/>
          </label>
          <label className="radio-inline"> Neutral
          <input type="radio" style={{width: "2%"}} name="optradio"/>
          </label>
          <label className="radio-inline">Somewhat Agree
          <input type="radio" style={{width: "2%"}} name="optradio"/>
          </label>
          <label className="radio-inline">Agree
          <input type="radio" style={{width: "2%"}} name="optradio"/>
          </label>
          <label className="radio-inline">Strongly Agree
          <input type="radio" style={{width: "2%"}} name="optradio"/>
          </label>
          </form>
    </div>
)
}

export default QNR;