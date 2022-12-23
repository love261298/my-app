import { useState } from 'react';
import { arrowLeft, arrowRight, setting } from '../asset';

const Content = (prop) => {
  const [sex, setSex] = useState('M');
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Quân',
      phone: '0965486642',
      email: '456@gmail.com',
      address: 'Địa chỉ B',
      sex: 'F',
      birth: '26/12/1998',
    },
    {
      name: 'Minh',
      phone: '0965486641',
      email: '789@gmail.com',
      address: 'Địa chỉ C',
      sex: 'M',
      birth: '26/12/1999',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Quân',
      phone: '0965486642',
      email: '456@gmail.com',
      address: 'Địa chỉ B',
      sex: 'F',
      birth: '26/12/1998',
    },
    {
      name: 'asdasd',
      phone: '0965486641',
      email: '789@gmail.com',
      address: 'Địa chỉ C',
      sex: 'M',
      birth: '26/12/1999',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Thuc',
      phone: '0965486643',
      email: '123@gmail.com',
      address: 'Địa chỉ A',
      sex: 'M',
      birth: '26/12/2000',
    },
    {
      name: 'Quân',
      phone: '0965486642',
      email: '456@gmail.com',
      address: 'Địa chỉ B',
      sex: 'F',
      birth: '26/12/1998',
    },
    {
      name: 'Toan',
      phone: '0965486641',
      email: '789@gmail.com',
      address: 'Địa chỉ C',
      sex: 'M',
      birth: '26/12/1999',
    },
    {
      name: 'asdasdasdas',
      phone: '0965486641',
      email: '789@gmail.com',
      address: 'Địa chỉ C',
      sex: 'M',
      birth: '26/12/1999',
    },
  ];
  const active = 'border border-[#1890FF] rounded';
  const handleCurrentPage = (currentPage) => {
    switch (Math.ceil(data.length / 10)) {
      case 1:
        return (
          <>
            <img src={arrowLeft} alt="anh" className="cursor-pointer hover:opacity-75" />
            <span className={`p-[2px_8px] text-[#1890FF] ${active} mx-1 hover:opacity-75 cursor-pointer`}>
              {currentPage}
            </span>
            <img src={arrowRight} alt="anh" className="cursor-pointer hover:opacity-75" />
          </>
        );
      case 2:
        if (currentPage === 1) {
          return (
            <>
              <img src={arrowLeft} alt="anh" className="cursor-pointer hover:opacity-75" />
              <span className={`p-[2px_8px] text-[#1890FF] ${active} mx-1 hover:opacity-75 cursor-pointer`}>
                {currentPage}
              </span>
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </span>
              <img
                src={arrowRight}
                alt="anh"
                className="cursor-pointer hover:opacity-75"
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </>
          );
        } else {
          return (
            <>
              <img
                src={arrowLeft}
                alt="anh"
                className="cursor-pointer hover:opacity-75"
                onClick={() => setCurrentPage(currentPage - 1)}
              />
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </span>
              <span className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer ${active}`}>
                {currentPage}
              </span>
              <img src={arrowRight} alt="anh" className="cursor-pointer hover:opacity-75" />
            </>
          );
        }
      default:
        if (currentPage === 1) {
          return (
            <>
              <img src={arrowLeft} alt="anh" className="cursor-pointer hover:opacity-75" />
              <span className={`p-[2px_8px] text-[#1890FF] ${active} mx-1 hover:opacity-75 cursor-pointer`}>
                {currentPage}
              </span>
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </span>
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage + 2)}
              >
                {currentPage + 2}
              </span>
              <img
                src={arrowRight}
                alt="anh"
                className="cursor-pointer hover:opacity-75"
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </>
          );
        } else if (currentPage === Math.ceil(data.length / 10)) {
          return (
            <>
              <img
                src={arrowLeft}
                alt="anh"
                className="cursor-pointer hover:opacity-75"
                onClick={() => setCurrentPage(currentPage - 1)}
              />
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage - 2)}
              >
                {currentPage - 2}
              </span>
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </span>
              <span className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer ${active}`}>
                {currentPage}
              </span>
              <img src={arrowRight} alt="anh" className="cursor-pointer hover:opacity-75" />
            </>
          );
        } else {
          return (
            <>
              <img
                src={arrowLeft}
                alt="anh"
                className="cursor-pointer hover:opacity-75"
                onClick={() => setCurrentPage(currentPage - 1)}
              />
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </span>
              <span className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer ${active}`}>
                {currentPage}
              </span>
              <span
                className={`p-[2px_8px] text-[#1890FF] mx-1 hover:opacity-75 cursor-pointer`}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </span>
              <img
                src={arrowRight}
                alt="anh"
                className="cursor-pointer hover:opacity-75"
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </>
          );
        }
    }
  };
  return (
    <>
      <div className="h-[48px] flex items-center text-[14px] text-[#172B4D] border border-[#F0F0F0]">
        <div className="flex items-center w-[104px]">
          <span className="p-[8px_16px] text-[#1890FF] border border-[#E2E3E9] rounded mx-auto">Tìm kiếm</span>
        </div>
        <ul className="flex items-center justify-between grow">
          <li className="flex items-center justify-center w-1/5">
            <input type="text" className="w-full mx-2 h-[34px] border border-[#E2E3E9] rounded pl-2" />
          </li>
          <li className="flex justify-center items-center w-2/5">
            <input type="text" className="w-full mx-2 h-[34px] border border-[#E2E3E9] rounded pl-2" />
          </li>
          <li className="flex justify-center items-center w-2/5">
            <input type="text" className="w-full mx-2 h-[34px] border border-[#E2E3E9] rounded pl-2" />
          </li>
        </ul>
        <ul className="flex items-center justify-between">
          <li className="flex justify-center items-center w-[150px]">
            <input type="text" className="w-full mx-2 h-[34px] border border-[#E2E3E9] rounded pl-2" />
          </li>
          <li className="flex justify-center items-center w-[100px]">
            <select
              className="w-full mx-2 h-[34px] border border-[#E2E3E9] rounded text-center"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="M">Nam</option>
              <option value="F">Nữ</option>
              <option value="D">Khác</option>
            </select>
          </li>
          <li className="flex justify-center items-center w-[150px]">
            <input type="date" className="w-full mx-2 h-[34px] border border-[#E2E3E9] rounded text-center" />
          </li>
        </ul>
      </div>
      <div className="grow">
        {data.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10).map((el, index) => (
          <div className="h-[58px] flex items-center text-[14px] text-[#172B4D] border">
            <div className="flex items-center border-r">
              <span className="w-[52px] leading-[58px] border-r text-center">{index + 1}</span>
              <div className="w-[52px] hover:opacity-80 cursor-pointer">
                <img src={setting} alt="anh" className="w-[32px] block mx-auto" />
              </div>
            </div>
            <ul className="flex items-center justify-between grow">
              <li className="border-r flex items-center justify-center w-1/5">
                <span className="leading-[58px]">{el.name}</span>
              </li>
              <li className="border-r flex justify-center items-center w-2/5">
                <span className="leading-[58px]">{el.email}</span>
              </li>
              <li className="border-r flex justify-center items-center w-2/5">
                <span className="leading-[58px]">{el.address}</span>
              </li>
            </ul>
            <ul className="flex items-center justify-between">
              <li className="border-r flex justify-center items-center w-[150px]">
                <span className="leading-[58px]">{el.phone}</span>
              </li>
              <li className="border-r flex justify-center items-center w-[100px]">
                <span className="leading-[58px]">{el.sex}</span>
              </li>
              <li className="flex justify-center items-center w-[150px]">
                <span className="leading-[58px]">{el.birth}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end text-[#172B4D]">
        <span>
          {(currentPage - 1) * 10 + 1}-{(currentPage - 1) * 10 + 10} trên {data.length} thành viên
        </span>
        <div className="flex items-center mx-4">{handleCurrentPage(currentPage)}</div>
        <span>Total : {Math.ceil(data.length / 10)} Page</span>
      </div>
    </>
  );
};

export default Content;
