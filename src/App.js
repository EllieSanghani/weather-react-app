import Weather from './Weather';
import './App.css';
import Loader from 'react-loader-spinner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>
          Hello
        </h1>
       <Weather city="Paris"/>
       <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
      </header>
    </div>
  );
}

export default App;
