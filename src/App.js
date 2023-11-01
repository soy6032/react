import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import ThemeRoutes from './routes/Router';


const App = () => {
  const routing = useRoutes(ThemeRoutes);
  return (
    <div >{routing}</div>
  );
}

export default App;
