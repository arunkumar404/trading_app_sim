import './App.css';
import CustomTabs from './CustomTabs/CustomTabs';
import DetailsContainer from './DetailsContainer/DetailsContainer';
import Holdings from './Holdings/Header';
import Positions from './Positions/Positions';

function App() {
  return (
    <div className='app'>
      <Holdings/>
      <CustomTabs />
      <Positions/>
      <DetailsContainer/>
    </div>
  );
}

export default App;
