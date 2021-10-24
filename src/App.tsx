import React from 'react';
import Routes from './routes/routes';
import './styles/global.scss';
import './styles/fonts.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
