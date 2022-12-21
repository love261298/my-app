import { useState } from 'react';
import { camera, iconHome } from '../asset';

function Organization() {
  const [edit, setEdit] = useState(false);
  const [formEdit, setFromEdit] = useState({
    email,
    taxCode,
    phone,
    website,
    address,
  });
  return (
    <div className="grow p-[16px_24px_24px_24px]">
      {!edit ? (
        <>
          <div className="w-full h-full bg-[#F9F9F9] p-[24px_24px_0px_146px]">
            <div className="relative flex items-center">
              <img src={iconHome} alt="anh" className="w-[120px] mr-[40px]" />
              <img src={camera} alt="anh" className="w-[32px] absolute bottom-2 left-[90px]" />
              <span className="font-normal text-[#9EA3A9]">Tên trường</span>
              <button
                className="px-4 py-2 border border-[#1890FF] rounded absolute top-0 right-0 font-[14px] text-[#1890FF]"
                onClick={() => setEdit(!edit)}
              >
                Sửa
              </button>
            </div>
            <div className="text-[#172B4D] text-medium text-[20px] pt-[40px] pb-[24px]">Thông tin trường</div>
            <ul className="flex flex-wrap flex-auto">
              <li className="w-6/12 text-[#9EA3A9] mb-6">Email</li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Mã số thuế</li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Số điện thoại</li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Website</li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Địa chỉ</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-full bg-[#F9F9F9] p-[24px_24px_0px_146px]">
            <div className="relative flex items-center">
              <img src={iconHome} alt="anh" className="w-[120px] mr-[40px]" />
              <img src={camera} alt="anh" className="w-[32px] absolute bottom-2 left-[90px]" />
              <span className="font-normal text-[#9EA3A9]">Tên trường</span>
              <button
                className="px-4 py-2 border border-[#1890FF] rounded absolute top-0 right-0 font-[14px] text-[#1890FF]"
                onClick={() => setEdit(!edit)}
              >
                Sửa
              </button>
            </div>
            <div className="text-[#172B4D] text-medium text-[20px] pt-[40px] pb-[24px]">Thông tin trường</div>
            <ul className="flex flex-wrap flex-auto">
              <li className="w-6/12 text-[#9EA3A9] mb-6">
                <sapn>Email</sapn>
                <input />
              </li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Mã số thuế</li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Số điện thoại</li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Website</li>
              <li className="w-6/12 text-[#9EA3A9] mb-6">Địa chỉ</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Organization;
