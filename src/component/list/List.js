import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../input/InputContainer';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(1),
  },
}));

export default function List({ list }) {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title title={list.title} />
        {/* {list.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))} */}
        <Card key={list.cards[0].id} card={list.cards[0]}/>
        <Card key={list.cards[1].id} card={list.cards[1]}/>
        <Card key={list.cards[2].id} card={list.cards[2]}/>
        <InputContainer/>
      </Paper>
    </div>
  );
}