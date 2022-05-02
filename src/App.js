import './App.css';
import Header from './components/Header';
import LogoWrapper from './components/LogoWrapper';
import MainPage from './components/MainPage';
import TitleWrapper from './components/TitleWrapper';

function App() {
  return (
    <div className='App'>
      <LogoWrapper />
      <Header />
      <TitleWrapper />
      <MainPage />
    </div>
  );
}

export default App;
