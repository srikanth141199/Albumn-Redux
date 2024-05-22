import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Albumn from './components/Albumn/Albumn';
import { store } from './components/redux/store';

function App() {
  return (
    <Provider store = {store}>
      <Navbar/>
      <Albumn/>
    </Provider>
  );
}

export default App;
