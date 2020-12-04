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
          {/*console.log({quest.img1})*/}
          <label><img width="7%" length="7%" src = {quest.img1} /></label>
          <label className="radio-inline">
          <input type="radio" style={{width: "15%"}} name="optradio"/>
          </label>
          <label className="radio-inline">
          <input type="radio" style={{width: "15%"}} name="optradio"/>
          </label>
          <label className="radio-inline">
          <input type="radio" style={{width: "15%"}} name="optradio"/>
          </label>
          <label className="radio-inline">
          <input type="radio" style={{width: "15%"}} name="optradio"/>
          </label>
          <label className="radio-inline">
          <input type="radio" style={{width: "15%"}} name="optradio"/>
          </label>
          <label><img width="7%" length="7%" src = {quest.img2} /></label>
          </form>
    </div>
)
}

export default QNR;