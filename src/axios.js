import Homescreen from "./Screen/Homescreen";
import LoginScreen from "./Screen/LoginScreen";


function App() {
  const user = true ;

  return (
    <div className="App bg-black">
        {
          !user ? <LoginScreen /> : <Homescreen />
        }
    </div>
  );
}

export default App;