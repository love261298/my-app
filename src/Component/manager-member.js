import { mdi, upDown } from '../asset';
import Content from './Content';

export default function ManagerMember(props) {
  return (
    <div className="grow p-[16px_24px_24px_24px] flex flex-col">
      <Manager />
      {props.data ? <Content data={props.data} /> : <NotificationData />}
    </div>
  );
}

const NotificationData = () => {
  return (
    <div className="w-[calc(100%-48xp)] grow flex items-center justify-center text-[#3B3B3B] text-[16px]    ">
      <div className="text-center">
        <div className="leading-8">Chưa có thành viên nào được thêm</div>
        <div className="leading-8">
          Click vào button <buttom className="font-bold cursor-pointer">"Thêm mới thành viên"</buttom> để bắt đầu
        </div>
      </div>
    </div>
  );
};

const Manager = () => {
  return (
    <div className="h-[48px] flex items-center text-[14px] text-[#172B4D] border border-[#F0F0F0] bg-[#FAFAFA]">
      <div className="flex items-center">
        <span className="w-[52px] leading-[30px] border-r text-center">STT</span>
        <div className="w-[52px] border-r">
          <img src={mdi} alt="anh" className="w-[30px] block mx-auto" />
        </div>
      </div>
      <ul className="flex items-center justify-between grow">
        <li className="border-r flex items-center justify-center w-1/5">
          <img src={upDown} alt="anh" className="px-1" />
          <span className="leading-[30px]">Họ và tên</span>
        </li>
        <li className="border-r flex justify-center items-center w-2/5">
          <img src={upDown} alt="anh" className="px-1" />
          <span className="leading-[30px]">Email</span>
        </li>
        <li className="border-r flex justify-center items-center w-2/5">
          <img src={upDown} alt="anh" className="px-1" />
          <span className="leading-[30px]">Địa chỉ</span>
        </li>
      </ul>
      <ul className="flex items-center justify-between">
        <li className="border-r flex justify-center items-center w-[150px]">
          <img src={upDown} alt="anh" className="px-1" />
          <span className="leading-[30px]">Số điện thoại</span>
        </li>
        <li className="border-r flex justify-center items-center w-[100px]">
          <img src={upDown} alt="anh" className="px-1" />
          <span className="leading-[30px]">Giới tính</span>
        </li>
        <li className="flex justify-center items-center w-[150px]">
          <img src={upDown} alt="anh" className="px-1" />
          <span className="leading-[30px]">Ngày sinh</span>
        </li>
      </ul>
    </div>
  );
};
