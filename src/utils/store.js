const cards = [
    {
      id: 'card-1',
      content: 'Learning ReactJS',
    },
    {
      id: 'card-2',
      content: 'Learning ES6',
    },
    {
      id: 'card-3',
      content: 'Play some Game',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards,
      },
    },
    listIds: ['list-1'],
  };
  
  export default data;