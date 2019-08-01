import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CandidateCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

//   const { candidate_name, state, party, email, phone_number } = props.candidate;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* { props.candidate.candidate_name } */}
          Penny Tague
        </Typography>
        <Typography variant="h5" component="h2">
          {/* { props.candidate.state }  */}
          California
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* { props.candidate.party } */}
          Democrat
        </Typography>
        <Typography variant="body2" component="p">
            {/* { props.candidate.email } */}
            pmtague9@gmail.com
          <br />
          {/* { props.candidate.phone_number } */}
          858-555-1212
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={ '/candidates'} size="small">Learn More</Link>
      </CardActions>
    </Card>
  );
}