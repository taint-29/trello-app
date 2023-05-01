import List from "./component/list/List";
import { useState } from "react";
import store from './utils/store';
import { v4 as uuid } from 'uuid';
import StoreApi from './utils/storeApi';
import InputContainer from './component/input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "./component/TopBar";
import SideMenu from "./component/SideMenu";

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // minHeight: '100vh',
    // // background: 'lightblue',
    // backgroundImage: `url(https://images.unsplash.com/photo-1433838552652-f9a46b332c40?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0NDAxODh8MHwxfHNlYXJjaHwxMXx8TGFuZHNjYXBlfGVufDB8fHx8MTY4Mjg3MzA3Nw&ixlib=rb-4.0.3&q=85)`,
    // width: '100%',
    minHeight: '100vh',
    background: 'lightblue',
    width: '100%',
    overflowY: 'auto',
  },
  // listContainer: {
  //   display: 'flex',
  // },
}));

function App() {

  const [data, setData] = useState(store);
  const [open, setOpen] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState('');
  
  const classes = useStyle();

  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };


  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle  }}>
    <div  className={classes.root} 
     style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
    {data.listIds.map((listId) => {
      const list = data.lists[listId];
      return <List list={list} key={listId} />;
    })}
    
    <InputContainer type="list" /> 
    <TopBar setOpen={setOpen} />
    <SideMenu
      setBackgroundUrl={setBackgroundUrl}
      open={open}
      setOpen={setOpen}
    />
    </div>
    


  </StoreApi.Provider>
  );
}

export default App;
