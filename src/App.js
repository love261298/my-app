import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Context';
import LoginModule from './Module/Login.module';
import ManagerAcountModule from './Module/ManagerAcount.module';
import OrganizationModule from './Module/Organization.module';

function App() {
  const { auth } = useContext(ThemeContext);
  return (
    <Routes>
      <Route path="/manage-acount" element={auth ? <ManagerAcountModule /> : <LoginModule />} />
      <Route path="/organization" element={auth ? <OrganizationModule /> : <LoginModule />} />
      <Route path="*" element={auth ? <OrganizationModule /> : <LoginModule />} />
    </Routes>
  );
}

export default App;
