import express from 'express';
import graphqlHTTP from 'express-graphql';
import {buildSchema} from 'graphql';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.set('port', (process.env.PORT || 3001));

app.use('/graphql',(req, res) => {
  res.send({data: false});
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
