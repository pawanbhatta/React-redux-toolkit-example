
import './App.css'
import CakeView from './features/cake/CakeView.jsx'
import IceCreamView from './features/icecream/IceCreamView.jsx';
import UserView from './features/user/userView';


function App() {

  return (
    <div className="App">
    <CakeView/>
    <IceCreamView/>
    <UserView/>
    </div>
  )
}

export default App
