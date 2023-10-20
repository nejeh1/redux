import React from 'react';
import AddTask from './Addtask';
import ListTask from './ListTask';
import { Provider } from 'react-redux';
import store from './store'; 

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
