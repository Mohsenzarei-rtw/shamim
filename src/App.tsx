import { useReducer } from 'react';
import { List } from './components/list';
import { listReducer } from './context/listReducer';
import { initialState } from './config/constants';
import { ListContext } from './context/context';
import { Accounts } from './types/list';
import ListButton from './components/listButton';

function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <main className="w-100 flex h-[100dvh] items-center justify-center">
      <ListContext.Provider value={{ state, dispatch }}>
        <List<Accounts> title="list 1" items={state.firstList} />
        <ListButton />
        <List<Accounts> title="list 2" items={state.secondList} />
      </ListContext.Provider>
    </main>
  );
}

export default App;
