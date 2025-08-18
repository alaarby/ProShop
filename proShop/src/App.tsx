import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <Provider store={store}>
      <Nav />
      <Outlet />
    </Provider>
  )
}

export default App
