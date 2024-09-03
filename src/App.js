import './App.css';
import CustomTabs from './CustomTabs/CustomTabs';
import Holdings from './Holdings/Header';
import Positions from './Positions/Positions';

function App() {
  return (
    <div className='app'>
      <Holdings/>
      <CustomTabs />
      <Positions/>
      
    </div>
  );
}

export default App;
