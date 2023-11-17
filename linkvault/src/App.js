import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Dashboard/>}/>
    // </Routes>
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
