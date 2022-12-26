import { useContext, useState } from 'react';
import { camera, iconHome, userCircle } from '../asset';
import { ThemeContext } from '../core/Context';

function EditOrganization(props) {
  const [name, setName] = useState('Trường Đại Học A');
  const [email, setEmail] = useState('abc@gmail.com');
  const [taxCode, setTaxCode] = useState('PM123');
  const [phone, setPhone] = useState('0965486643');
  const [website, setWebsite] = useState('https:abc.vn');
  const [address, setAddress] = useState('Địa chỉ A');
  const { edit, setEdit, popupSerImage, setPopupSerImage } = useContext(ThemeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || taxCode === '' || phone === '' || website === '' || address === '') {
      alert('Lỗi...!');
      return;
    }
    setEdit(!edit);
  };
  return (
    <form className="w-full h-full bg-[#F9F9F9] p-[24px_24px_0px_146px] block" onSubmit={(e) => handleSubmit(e)}>
      <div className="relative flex items-center">
        <img src={props.infomation ? userCircle : iconHome} alt="anh" className="w-[120px] mr-[40px]" />
        <img
          src={camera}
          alt="anh"
          className="w-[32px] absolute bottom-2 left-[90px] cursor-pointer hover:opacity-75"
          onClick={() => setPopupSerImage(!popupSerImage)}
        />
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
        <div className="font-normal text-[#9EA3A9] grow text-[14px]">
          <div className="text-[#172B4D] font-medium mb-2">{props.infomation ? 'Họ và tên' : 'Tên trường'}</div>
          <input
            type="text"
            className="w-5/12 border border-[#E2E3E9] rounded text-[16px] h-[32px] pl-2.5 text-[#172B4D] font-normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="text-[#172B4D] text-medium text-[20px] pt-[40px] pb-[24px]">
        {props.infomation ? 'Thông tin cá nhân' : 'Thông tin trường'}
      </div>
      <ul className="flex flex-wrap flex-auto">
        <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
          <div className="mb-2 text-[14px]">{props.infomation ? 'Tài khoản' : 'Email'}</div>
          <input
            type="text"
            className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
          <div className="mb-2 text-[14px]">{props.infomation ? 'Giới tính' : 'Mã số thuế'}</div>
          <input
            type="text"
            className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
            value={taxCode}
            onChange={(e) => setTaxCode(e.target.value)}
          />
        </li>
        <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
          <div className="mb-2 text-[14px]">{props.infomation ? 'Ngày sinh' : 'Số điện thoại'}</div>
          <input
            type="text"
            className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </li>
        <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
          <div className="mb-2 text-[14px]">{props.infomation ? 'Số điện thoại' : 'Website'}</div>
          <input
            type="text"
            className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </li>
        <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
          <div className="mb-2 text-[14px]">{props.infomation ? 'Email' : 'Địa chỉ'}</div>
          <input
            type="text"
            className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </li>
        {props.infomation && (
          <li className="w-6/12 text-[#172B4D] mb-6 font-medium">
            <div className="mb-2 text-[14px]">Địa chỉ</div>
            <input
              type="text"
              className="w-6/12 border border-[#E2E3E9] rounded h-[32px] pl-2.5 text-[#172B4D] font-normal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
        )}
      </ul>
      <div className="w-9/12 border-t text-right">
        <button type="submit" className="p-[8px_16px] bg-[#1890FF] text-[#FFFFFF] text-[14px] mt-4 rounded">
          Cập Nhật
        </button>
      </div>
    </form>
  );
}

export default EditOrganization;
