import './App.css';
import DropdownMenu from './components/Dropdown';

const options = ['Tokyo', 'Beijing', 'Seoul'];

const cities = {  'Tokyo': {}, 
                  'Beijing': {}, 
                  'Seoul': {}};

const handleSelectOption = (option) => {
  console.log(`Selected option: ${option}`);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        :: A React App ::
      </header>
      <body>
        <DropdownMenu options={options} onSelect={handleSelectOption} />
        <h1>Tokyo</h1>
        <p>Latitude: 35.65</p>
        <p>Longitude: 139.84</p>
        <img 
          className="city-square"
          src="https://api.nasa.gov/planetary/earth/imagery?lon=139.84&lat=35.65&date=2018-01-01&dim=0.35&api_key=DEMO_KEY" 
          alt="nasa landsat image"
        ></img>
      </body>
    </div>
  );
}

export default App;
