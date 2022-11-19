import Main from "./pages/Main";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-249951575-1"; // OUR_TRACKING_ID

function App() {
  ReactGA.initialize(TRACKING_ID);
  return <Main />;
}

export default App;
