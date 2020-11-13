import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({});

const ConsentPage = () => {
  const classes = useStyles();

  return (
    <div>
        <h1>
            Consent Form
        </h1>
        <form>
            <p>
                INSTRUCTIONS: Delete this section before sending to the IRB office with your application. 
                The language should be modified as appropriate for your study. Provide relevant information 
                in the sections below, replacing italicized directions/guidance (anything in this font color)
                with information specific to your study, and deleting sections that do not apply to your research.
                <br/>
                I am/we are asking you to participate in a research study titled “TITLE”. I/We will describe this 
                study to you and answer any of your questions. This study is being led by Name of PI, Department 
                at Cornell University. The Faculty Advisor for this study is (if PI is a student) Name, Department
                at Cornell University.
                <br/> 
                Et cetera....
            </p>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">
                    I agree
                </label>
            </div><br/>
            <button type="submit" class="btn btn-primary">
                Submit
            </button>
        </form>
    </div>);
};

export default ConsentPage;
