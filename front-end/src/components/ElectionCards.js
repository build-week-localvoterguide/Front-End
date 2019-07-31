import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

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


export default function ElectionCards() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
    
// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//  state = {
//    name: '',
//  }

//  handleChange = event => {
//    this.setState({ name: event.target.value });
//  }

 // handleSubmit = event => {
  //  event.preventDefault();

//    const user = {
//      name: this.state.name
//    };

//    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//      .then(res => {
//        console.log(res);
//        console.log(res.data);
//      })
//  }

//  render() {
//    return (
//      <div>
//        <form onSubmit={this.handleSubmit}>
//          <label>
//            Person Name:
//            <input type="text" name="name" onChange={this.handleChange} />
//          </label>
//          <button type="submit">Add</button>
//        </form>
//      </div>
//    )
//  }
// }