import './App.css';
import NavBar from './Components/NavBar';
import TempOne from './Components/TempOne';
import TempThree from './Components/TempThree';
import TempTwo from './Components/TempTwo';
import TempFour from './Components/TempFour'
import TempFive from './Components/TempFive';

function App() {
  let Image = {
    backgroundColor:"Green",
    color:"white",
    border:" 2px solid Blue"
  }

  return (
    <>
    <NavBar />
    <TempOne Image={Image}/>
    <TempTwo Image={Image}/>
    <TempThree/>
    <TempFour/>
    <TempFive/>
    </>
  );
}

export default App;
