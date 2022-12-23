import { useContext, useState } from 'react';
import { camera, iconHome, userCircle } from '../asset';
import { ThemeContext } from '../Context';
import EditOrganization from './editOrganization';

function Organization(props) {
  const { edit, setEdit, popupSerImage, setPopupSerImage, passWord } = useContext(ThemeContext);
  const [oldPassWord, SetOldPassWord] = useState('');
  const [newPassWord, SetNewPassWord] = useState('');
  const [reNewPassWord, SetReNewPassWord] = useState('');
  return (
    <div className="grow p-[16px_24px_24px_24px]">
      {passWord ? (
        <form className="w-full h-full bg-[#F9F9F9] p-[90px_24px_0px_146px]">
          <div className="text-[#172B4D] text-medium text-[20px] pt-[40px] pb-[24px]">Đổi mật khẩu</div>
          <ul className="flex flex-wrap flex-auto justify-end">
            <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
              <div className="mb-2 text-[14px]">Mật khẩu cũ</div>
              <input
                type="password"
                className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
                value={oldPassWord}
                onChange={(e) => SetOldPassWord(e.target.value)}
              />
            </li>
            <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
              <div className="mb-2 text-[14px]">Mật khẩu mới</div>
              <input
                type="password"
                className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
                value={newPassWord}
                onChange={(e) => SetNewPassWord(e.target.value)}
              />
            </li>
            <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
              <div className="mb-2 text-[14px]">Nhập lại mật khẩu</div>
              <input
                type="password"
                className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
                value={reNewPassWord}
                onChange={(e) => SetReNewPassWord(e.target.value)}
              />
            </li>
          </ul>
          <div className="w-9/12 border-t text-right">
            <button type="submit" className="p-[8px_16px] bg-[#1890FF] text-[#FFFFFF] text-[14px] mt-4 rounded">
              Cập Nhật
            </button>
          </div>
        </form>
      ) : !edit ? (
        <>
          <div className="w-full h-full bg-[#F9F9F9] p-[24px_24px_0px_146px]">
            <div className="relative flex items-center">
              <img src={props.infomation ? userCircle : iconHome} alt="anh" className="w-[120px] mr-[40px]" />
              <img
                src={camera}
                alt="anh"
                className="w-[32px] absolute bottom-2 left-[90px] cursor-pointer hover:opacity-75"
                onClick={() => setPopupSerImage(!popupSerImage)}
              />
              <span className="font-normal text-[#9EA3A9]">
                {props.infomation ? 'Nguyen Van A' : 'Trường Đại Học A'}
              </span>
              {popupSerImage && (
                <>
                  <div
                    className="fixed top-0 left-0 w-screen h-screen"
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        setPopupSerImage(!popupSerImage);
                      }
                    }}
                  ></div>
                  <div className="absolute top-[32px] left-[132px] text-[#172B4D] p-[6px_10px] rounded shadow-[1px_4px_4px_rgba(0,0,0,0.15)] bg-[#fff]">
                    <label
                      for="upload-photo"
                      className="block text-center p-[8px_16px] rounded hover:bg-[#F4F5F7] hover:text-[#1890FF] cursor-pointer"
                    >
                      Chọn ảnh
                    </label>
                    <input type="file" id="upload-photo" className="absolute top-[12px] -left-[32px] invisible" />
                    <button className="block text-center p-[8px_16px] rounded hover:bg-[#F4F5F7] hover:text-[#1890FF] w-full">
                      Xóa
                    </button>
                  </div>
                </>
              )}
              <button
                className="px-4 py-2 border border-[#1890FF] rounded absolute top-0 right-0 font-[14px] text-[#1890FF]"
                onClick={() => setEdit(!edit)}
              >
                Sửa
              </button>
            </div>
            <div className="text-[#172B4D] text-medium text-[20px] pt-[40px] pb-[24px]">
              {props.infomation ? 'Thông tin cá nhân' : 'Thông tin trường'}
            </div>
            <ul className="flex flex-wrap flex-auto">
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">{props.infomation ? 'Tài khoản' : 'Email'}</div>
                <div className="text-[#172B4D]">abc@gmail.com</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">{props.infomation ? 'Giới tính' : 'Mã số thuế'}</div>
                <div className="text-[#172B4D]">PM123</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">{props.infomation ? 'Ngày sinh' : 'Số điện thoại'}</div>
                <div className="text-[#172B4D]">0965486643</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">{props.infomation ? 'Số điện thoại' : 'Website'}</div>
                <div className="text-[#172B4D]">https:abc.vn</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">{props.infomation ? 'Email' : 'Địa chỉ'}</div>
                <div className="text-[#172B4D]">Địa chỉ A</div>
              </li>
              {props.infomation && (
                <li className="w-6/12 text-[#9EA3A9] mb-8">
                  <div className="mb-4 text-[14px]">Địa chỉ</div>
                  <div className="text-[#172B4D]">Địa chỉ A</div>
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <EditOrganization infomation={props.infomation} />
      )}
    </div>
  );
}

export default Organization;
