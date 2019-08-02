import React from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Candidate from './Candidate.js';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '49%',
    display: 'inline-grid',
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
    console.log('Candidate Card', props)
//   const { candidate_name, state, party, email, phone_number } = props.candidate;
//   const { name, state, party, email, phone_number } = props.candidate;

    const name = props.candidate.name;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* { props.candidate.candidate_name } */}
          { props.candidate.name }
          {/* Penny Tague */}
        </Typography>
        <Typography variant="h5" component="h2">
          {/* { props.candidate.state }  */}
          { props.candidate.birth_year } 
          {/* California */}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* { props.candidate.party } */}
          { props.candidate.height }
          {/* Democrat */}
        </Typography>
        <Typography variant="body2" component="p">
            {/* { props.candidate.email } */}
            { props.candidate.mass }
            {/* pmtague9@gmail.com */}
          <br />
          {/* { props.candidate.phone_number } */}
          { props.candidate.gender }
          {/* 858-555-1212 */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
            <Link to={ `/candidates/${name}` }>More Info</Link>
        </Button>
      </CardActions>
    </Card>
  );
}