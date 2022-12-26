import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userCircle, circleStart, bellSolid, logOut } from '../asset';
import { ThemeContext } from '../core/Context';

function Header(props) {
  const [popup, setPopup] = useState(false);
  const { setAuth, setEdit } = useContext(ThemeContext);
  const navigator = useNavigate();
  const handleParentClick = (e) => {
    if (e.target === e.currentTarget) {
      setPopup(!popup);
    }
  };
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setAuth(false);
    navigator('/');
  };
  return (
    <div className="h-[81px] flex items-center pl-[26px] pr-[75px] justify-between relative">
      <div className="font-medium text-xl text-[#172B4D]">{props.title}</div>
      <div className="flex">
        <img src={circleStart} alt="anh" className="ml-4 hover:opacity-60 cursor-pointer" />
        <img src={bellSolid} className="w-[20px] ml-4 hover:opacity-60 cursor-pointer" alt="anh" />
        <img
          src={userCircle}
          alt="anh"
          className="ml-4 hover:opacity-60 cursor-pointer"
          onClick={() => setPopup(!popup)}
        />
      </div>
      {popup && (
        <div
          className="fixed top-[0] left-[0] w-screen h-screen max-w-screen max-h-screen z-[1]"
          onClick={(e) => handleParentClick(e)}
        >
          <div className="absolute top-[68px] right-[45px] w-[260px] bg-[#FFFFFF] rounded-lg shadow-lg">
            <div className="text-center border-b">
              <img src={userCircle} alt="anh" className="w-[70px] mt-4 mb-[18px] block mx-auto" />
              <div className="text-center text-[#172B4D] font-medium text-[16px] mb-[22px]">Nguyễn Văn A</div>
              <Link
                to="/manage-acount"
                className="py-2.5 px-4 border border-[#E2E3E9] rounded-[3px] mb-6 hover:opacity-60 inline-block"
                onClick={() => {
                  setEdit(false);
                  setPopup(!popup);
                }}
              >
                Quản lý tài khoản
              </Link>
            </div>
            <div className="flex px-3 py-4 hover:opacity-60 cursor-pointer items-center" onClick={handleLogOut}>
              <img src={logOut} alt="anh" className="mr-2.5" />
              <span className="text-[#172B4D]">Đăng xuất</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
