import Header from './Components/header';
import Menu from './Components/menubar';
import Body from './Components/body';
import './App.css';

function App() {
  return (
    <div className="App font-sans">
      <Header/>
      <div className='flex justify-middle'>
        <Menu/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
