import Main from "./pages/Main";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-C978G4BY60"; // OUR_TRACKING_ID

function App() {
  ReactGA.initialize(TRACKING_ID);
  return <Main />;
}

export default App;
