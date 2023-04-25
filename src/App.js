import List from "./component/list/List";
import { useState } from "react";
import store from './utils/store';

function App() {

  const [data, setData] = useState(store);

  return (
    <div className="App">
        {/* <List/> */}
        {
          data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })
      }
    </div>
  );
}

export default App;
