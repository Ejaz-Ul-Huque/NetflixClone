
import './App.css';
import Homescreen from './Screen/Homescreen';
import LoginScreen from './Screen/LoginScreen';

function App() {
  const user = true ;
  return (
    <div className="">
      {
          !user ? <LoginScreen /> : <Homescreen />
        }
    </div>
  );
}

export default App;
