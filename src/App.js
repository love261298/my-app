import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Context';
import LoginModule from './Module/Login.module';
import OrganizationModule from './Module/Organization.module';

function App() {
  const { auth } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path="/organization" element={auth ? <OrganizationModule /> : <LoginModule />} />
      <Route path="*" element={auth ? <OrganizationModule /> : <LoginModule />} />
    </Routes>
  );
}

export default App;
