import { useContext, useState } from 'react';
import { camera, iconHome } from '../asset';
import { ThemeContext } from '../Context';
import EditOrganization from './editOrganization';

function Organization() {
  const { edit, setEdit } = useContext(ThemeContext);
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState();
  return (
    <div className="grow p-[16px_24px_24px_24px]">
      {!edit ? (
        <>
          <div className="w-full h-full bg-[#F9F9F9] p-[24px_24px_0px_146px]">
            <div className="relative flex items-center">
              <img src={iconHome} alt="anh" className="w-[120px] mr-[40px]" />
              <img
                src={camera}
                alt="anh"
                className="w-[32px] absolute bottom-2 left-[90px] cursor-pointer hover:opacity-75"
                onClick={() => setPopup(!popup)}
              />
              <span className="font-normal text-[#9EA3A9]">Trường Đại Học A</span>
              <button
                className="px-4 py-2 border border-[#1890FF] rounded absolute top-0 right-0 font-[14px] text-[#1890FF]"
                onClick={() => setEdit(!edit)}
              >
                Sửa
              </button>
              {popup && (
                <div
                  className="fixed top-0 left-0 w-screen h-screen"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setPopup(!popup);
                    }
                  }}
                >
                  <div className="absolute top-[200px] left-[512px] text-[#172B4D] p-[6px_10px] rounded shadow-[1px_4px_4px_rgba(0,0,0,0.15)] bg-[#fff]">
                    <label
                      for="upload-photo"
                      className="block text-center p-[8px_16px] rounded hover:bg-[#F4F5F7] hover:text-[#1890FF] cursor-pointer"
                    >
                      Chọn ảnh
                    </label>
                    <input
                      type="file"
                      id="upload-photo"
                      className="absolute top-[12px] -left-[32px] invisible"
                      value={image}
                      onChange={(e) => setImage(e.target.event.files[0])}
                    />
                    <button className="block text-center p-[8px_16px] rounded hover:bg-[#F4F5F7] hover:text-[#1890FF] w-full">
                      Xóa
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="text-[#172B4D] text-medium text-[20px] pt-[40px] pb-[24px]">Thông tin trường</div>
            <ul className="flex flex-wrap flex-auto">
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">Email</div>
                <div className="text-[#172B4D]">abc@gmail.com</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">Mã số thuế</div>
                <div className="text-[#172B4D]">PM123</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">Số điện thoại</div>
                <div className="text-[#172B4D]">0965486643</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">Website</div>
                <div className="text-[#172B4D]">https:abc.vn</div>
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-8">
                <div className="mb-4 text-[14px]">Địa chỉ</div>
                <div className="text-[#172B4D]">Địa chỉ A</div>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <EditOrganization />
      )}
    </div>
  );
}

export default Organization;
