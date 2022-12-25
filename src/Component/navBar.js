import { useState } from 'react';
import { Download, giangVien, quanLy, sinhVien, Upload } from '../asset';

function NavBar(props) {
  const [addMember, setAddMember] = useState(false);
  const [title, setTitle] = useState('');
  return (
    <div className="h-[46px] shadow-[0px_1px_16px_rgba(0,0,0,0.1)] flex items-center justify-between px-10">
      <div className="font-semibold">
        <span className="mr-2.5">{props.title}</span>
        {props.check && <span>(0)</span>}
      </div>
      {props.check && (
        <div className="flex">
          <button
            className="first-letter:mr-[11px] px-3 bg-[#1890FF] text-[#ffffff] rounded-[3px] h-[32px] ml-2 hover:opacity-80 cursor-pointer"
            onClick={() => setAddMember(!addMember)}
          >
            + Thêm thành viên
          </button>
          <img src={Upload} alt="anh" className="ml-2" />
          <img src={Download} alt="anh" className="ml-2" />
          {addMember && (
            <div
              className="fixed w-screen h-screen bg-[rgba(66,82,110,0.4)] top-0 left-0 z-10"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setAddMember(!addMember);
                }
              }}
            >
              <div className="w-[850px] mx-auto mt-[100px] bg-[#fff] rounded">
                <div className="flex px-[36px] items-center justify-between h-[56px] border-b">
                  <span>Thêm thành viên</span>
                  <span className="p-4" onClick={() => setAddMember(!addMember)}>
                    X
                  </span>
                </div>
                <ul className="flex items-center justify-between pl-[150px] pr-[138px] h-[120px] border-b">
                  <li className="flex items-center">
                    <input className="w-5 h-5" type="radio" name="check" onChange={() => setTitle('quanLy')} />
                    <img className="px-3" src={quanLy} alt="quanly" />
                    <span>Quản lý</span>
                  </li>
                  <li className="flex items-center">
                    <input className="w-5 h-5" type="radio" name="check" onChange={() => setTitle('giangVien')} />
                    <img className="px-3" src={giangVien} alt="giangVien" />
                    <span>Giảng viên</span>
                  </li>
                  <li className="flex items-center">
                    <input className="w-5 h-5" type="radio" name="check" onChange={() => setTitle('sinhVien')} />
                    <img className="px-3" src={sinhVien} alt="sinhVien" />
                    <span>Sinh viên</span>
                  </li>
                </ul>
                <div className="py-3 px-6 flex justify-end">
                  <button
                    className="p-[8px_16px] border rounded hover:opacity-70"
                    onClick={() => setAddMember(!addMember)}
                  >
                    Hủy
                  </button>
                  <button
                    className="p-[8px_16px] rounded hover:opacity-70 ml-3 bg-[#1890FF] text-[#FFFFFF]"
                    onClick={() => console.log(title)}
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
