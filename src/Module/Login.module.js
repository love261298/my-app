import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../Context';
import { login1, login2 } from '../asset/index';

function LoginModule() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(ThemeContext);
  const [validate, setValidate] = useState(false);
  const navigator = useNavigate();
  const validateForm = () => {
    if (username === '' || password === '') return true;
    setValidate(false);
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setValidate(true);
      return;
    }
    axios
      .post(
        `https://training.bks.center/api/auth/Module`,
        {},
        {
          params: {
            username: username,
            password: password,
          },
        },
      )
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setAuth(true);
          navigator('/');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-screen max-w-screen h-screen max-h-screen relative">
      <img src={login1} alt="anh" className="absolute top-[0px] right-[0px] w-[30%]" />
      <img src={login2} alt="anh" className="absolute bottom-[0px] right-[0px] w-[40%]" />
      <div className="w-[361px] absolute top-[140px] left-[250px]">
        <div className="text-center mb-[51px] text-[32px] text-[#1890FF] font-bold">Đăng Nhập</div>
        <form onSubmit={(e) => handleSubmit(e)} className="">
          <div className="mb-6">
            <label className="font-normal text-[#252F40] text-[16px]">Tài khoản</label>
            <input
              className="border border-solid border-[#D9D9D9] rounded-lg w-full h-[40px] mt-2.5 text-[#8C8C8C] pl-6"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateForm();
              }}
            />
          </div>
          <div className="mb-10">
            <label className="font-normal text-[#252F40] text-[16px]">Mật khẩu</label>
            <input
              className="border border-solid border-[#D9D9D9] rounded-lg w-full h-[40px] mt-2.5 text-[#8C8C8C] pl-6"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateForm();
              }}
            />
          </div>
          {validate && <div>Email or PassWord Faild!</div>}
          <button className="block w-full bg-[#1890FF] text-[#fff] h-[40px] rounded-lg" type="submit">
            Đăng Nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModule;
