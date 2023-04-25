import List from "./component/list/List";
import { useState } from "react";
import store from './utils/store';

function App() {

  const [data, setData] = useState(store);

  const listId = "list-1";
  console.log(data.lists[listId]);

  return (
    <div className="App">
       {
        data.listIds.map((listId) => {
          const list = data.lists[listId];
          console.log(list);
          return <List list={list} key={listId} />;
        })
      }
    </div>
  );
}

export default App;
