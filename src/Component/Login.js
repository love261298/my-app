import axios from 'axios';
import { useContext, useState } from 'react';
import { ThemeContext } from '../Context';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(ThemeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://training.bks.center/api/auth/login?password=admin&username=admin').then((res) => {
      console.log(res);
      if (res.data.token) setAuth(true);
      localStorage.setItem('token', res.data.token);
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Email</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>PassWord</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Click!</button>
    </form>
  );
}

export default Login;
