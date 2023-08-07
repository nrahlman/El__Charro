import { Nav } from 'react-bootstrap';
import './App.css';
import RRoutes from './components/rroutes/RRoutes'
import { useState } from 'react';


function App() {
  const [language, setLanguage] = useState(1);
  return (
    <div className="App">
<RRoutes language={language} setLanguage={setLanguage}/>
<Nav language={language} setLanguage={setLanguage}/>
    </div>
  );
}

export default App;
