import './App.css';
// import CounterReducer from './CounterReducer';
import Head from './components/Head';
import Booklist from './components/Content';
import { BooklistProvider } from './context/BookListContext';
function App() {
  return (
    <BooklistProvider>
      <div className="App">
        <Head/>
        <Booklist/>
        {/* <CounterReducer/> */}
      </div>
    </BooklistProvider>
  );
}

export default App;
