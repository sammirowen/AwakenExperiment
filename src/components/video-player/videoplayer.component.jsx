import React from 'react';
import ReactPlayer from 'react-player';
import NewComment from './comments.component';
import VideoReactions from './reactions.component';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { UserContext } from './../../constants/context.component';

const useStyles = makeStyles({
  root: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  title: {},
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: 'center',
  },
  videoPlayerContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
  },
  viewsAndIcons: {
    display: 'flex',
    width: '100%',
    height: '100px',
    justifyContent: 'space-between',
  },
  views: {
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  comments: {},
});

const VideoPlayer = () => {
  const classes = useStyles();
  const user = useContext(UserContext);
  console.log(user.experimentCondition);
  if (user.experimentCondition === 0) {
    if (user.vaccineAttitude === 0) {
      user.commentType = 0; //show pro vaccine comments
      // show participant pro attitudinal vaccine video as participant is pro-vaccine
      return (
        <div className={classes.root}>
          <h2 className={classes.title}> Chris Pratt on Trump </h2>
          <div className={classes.videoPlayerContainer}>
            <ReactPlayer
              className={classes.video}
              url='https://youtu.be/hoNb6HuNmU0'
              controls={true}
              width='100%'
              height='100%'
              //height='56.25%'
            />
          </div>
          <div className={classes.viewsAndIcons}>
            <div className={classes.views}> Views: 40,236</div>
            <div className={classes.icons}>
              <VideoReactions />
            </div>
          </div>
          <div className={classes.comments}>
            <NewComment />
          </div>
        </div>
      );
    } else {
      user.commentType = 1; //show anti vaccine comments
      // show participant anti vaccine video as participant is anti vaccine
      return (
        <div className={classes.root}>
          <h2 className={classes.title}> Chris Pratt on Trump </h2>
          <div className={classes.videoPlayerContainer}>
            <ReactPlayer
              className={classes.video}
              url='https://youtu.be/hoNb6HuNmU0'
              controls={true}
              width='100%'
              height='100%'
              //height='56.25%'
            />
          </div>
          <div className={classes.viewsAndIcons}>
            <div className={classes.views}> Views: 40,236</div>
            <div className={classes.icons}>
              <VideoReactions />
            </div>
          </div>
          <div className={classes.comments}>
            <NewComment />
          </div>
        </div>
      );
    }
  } else {
    if (user.vaccineAttitude === 0) {
      // show participant anti vaccine video and comments as participant is pro-vaccine
      user.commentType = 1;
      return (
        <div className={classes.root}>
          <h2 className={classes.title}> Chris Pratt on Trump </h2>
          <div className={classes.videoPlayerContainer}>
            <ReactPlayer
              className={classes.video}
              url='https://youtu.be/hoNb6HuNmU0'
              controls={true}
              width='100%'
              height='100%'
              //height='56.25%'
            />
          </div>
          <div className={classes.viewsAndIcons}>
            <div className={classes.views}> Views: 40,236</div>
            <div className={classes.icons}>
              <VideoReactions />
            </div>
          </div>
          <div className={classes.comments}>
            <NewComment />
          </div>
        </div>
      );
    } else {
      // show participant pro vaccine video and comments as participant is anti-vaccine
      user.commentType = 0;
      return (
        <div className={classes.root}>
          <h2 className={classes.title}> Chris Pratt on Trump </h2>
          <div className={classes.videoPlayerContainer}>
            <ReactPlayer
              className={classes.video}
              url='https://youtu.be/hoNb6HuNmU0'
              controls={true}
              width='100%'
              height='100%'
              //height='56.25%'
            />
          </div>
          <div className={classes.viewsAndIcons}>
            <div className={classes.views}> Views: 40,236</div>
            <div className={classes.icons}>
              <VideoReactions />
            </div>
          </div>
          <div className={classes.comments}>
            <NewComment />
          </div>
        </div>
      );
    }
  }
};

export default VideoPlayer;
