import { useContext } from 'react';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Context';

function App() {
  const { auth } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path="*" element={auth ? <Dashboard /> : <Login />} />
    </Routes>
  );
}

export default App;
