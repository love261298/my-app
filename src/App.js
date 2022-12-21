import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Context';
import Dashboard from './Module/Dashboard';
import Login from './Module/Login';

function App() {
  const { auth } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path="*" element={auth ? <Dashboard /> : <Login />} />
    </Routes>
  );
}

export default App;
