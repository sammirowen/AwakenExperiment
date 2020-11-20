import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({});

const QuestionnairePage = () => {
  const classes = useStyles();

  return (
    <div>
        <h1>
            Questionnaire
        </h1>
        <form>
            <div className="container">
            <p>How often do you share, post or comment on social media sites (Facebook, Twitter, etc.) as opposed to reading or viewing content?</p>
            <RadioGroup row>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Never
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Hardly ever
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Sometimes
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Frequently
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Almost all the time
                </label>
            </RadioGroup>
            </div><br/>

            <div className="container">
            <p>How often do you read or view content on social media sites (Facebook, Twitter, etc.)?</p>
            <RadioGroup row>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Never
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Hardly ever
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Sometimes
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Frequently
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Almost all the time
                </label>
            </RadioGroup>
            </div><br/>

            <div className="container">
            <p>How often do you comment on news sites, news apps, or news social media pages?</p>
            <RadioGroup row>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Never
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Hardly ever
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Sometimes
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Frequently
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Almost all the time
                </label>
            </RadioGroup>
            </div><br/>

            <div className="container">
            <p>How often do you read comments on news sites, news apps, or news social media pages?</p>
            <RadioGroup row>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Never
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Hardly ever
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Sometimes
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Frequently
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Almost all the time
                </label>
            </RadioGroup>
            </div><br/>

            <div className="form-check">
                <p>What is your knowledge of computer science/technology? (Select all that apply.) </p>
                <input class="form-check-input" type="checkbox" name="examplecheckboxs"value="option1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                    I have taken at least one college-level course in computer science
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option2"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    I have a computer science or engineering undergraduate degree
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    I have a graduate degree in computer science or engineering
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option4"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    I have programming experience
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option5"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    I don’t have any of the educational or work experiences described above
                </label>
            </div><br/>

            <div className="form-check">
                <p>In your opinion, which of the following technologies, if any, uses artificial intelligence (AI)?</p>
                <input class="form-check-input" type="checkbox" name="examplecheckboxs"value="option1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Virtual assistants (e.g., Siri, Google Assistant, Amazon Alexa)
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option2"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Smart speakers (e.g., Amazon Echo, Google Home, Apple Homepod)
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Facebook photo tagging
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option4"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Google Search 
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option4"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Recommendations for Netflix movies or Amazon ebooks
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option4"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Google Translate 
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option4"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Driverless cars and trucks
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option4"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Social robots that can interact with humans 
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option4"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Industrial robots used in manufacturing 
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option5"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Drones that do not require a human controller
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="checkbox" name="examplecheckboxs" value="option5"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    None of the above
                </label>
            </div><br/>

            <div className="container">
            <p>How closely do you follow politics on TV, radio, newspapers, or the Internet?</p>
            <RadioGroup row>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Not at all
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Moderately
                </label>
                <label style={{width: "15%"}}>
                <input type="radio" name="optradio"/>Very Closely
                </label>
            </RadioGroup>
            </div><br/>

            <div className="container">
            <p>In politics, people often talk of the political "left" and "right". Where would you place yourself on this scale, where 0 means left and 10 means right?</p>
            <form>
                <RadioGroup row>
                <label style={{width: "7%"}}>Left </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>0
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>1
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>2
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>3
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>4
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>5
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>6
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>7
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>8
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>9
                </label>
                <label style={{width: "7%"}}>
                <input type="radio" name="optradio"/>10
                </label>
                <label> Right</label>
                </RadioGroup>
            </form>
            </div><br/>

            <div className="form-check">
                <p>Please select the option that best describes your political party affiliation</p>
                <input class="form-check-input" type="radio" name="exampleRadios" value="option1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                    A strong Democrat
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" value="option2"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    A not very strong Democrat
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Independent, lean toward Democrat
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Independent (close to neither party)
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Independent, lean toward Republican
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    A not very strong Republican
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    A strong Republican
                </label>
            </div><br/>

            <div className="form-check">
                <p>To check whether you are reading the questions, click on the second answer from the top.</p>
                <input class="form-check-input" type="radio" name="exampleRadios" value="option1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Never
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" value="option2"></input>
                <label className="form-check-label" htmlFor="defaultCheck2">
                    Last year
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Last month
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Last week
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Yesterday
                </label>
            </div>
            <div className="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="egoCheck3" value="option3"></input>
                <label className="form-check-label" htmlFor="defaultCheck3">
                    Other
                </label>
            </div><br/>

            <button type="submit" class="btn btn-primary">
                Submit
            </button>

            <div className="container">
            <p>Rate your arousal level?</p>
            <form>
                <label><img width="7%" length="7%" src = {require("../images/arousal_1.png")} /></label>
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
                <label><img width="7%" length="7%" src = {require("../images/arousal_5.png")} /></label>
            </form>
            </div><br/>

            <div className="container">
            <p>Rate your valence level?</p>
            <form>
                <label><img width="7%" length="7%" src = {require("../images/happy.png")} /></label>
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
                <label><img width="7%" length="7%" src = {require("../images/sad.png")} /></label>
            </form>
            </div><br/>
        </form>
    </div>);
};

export default QuestionnairePage;
