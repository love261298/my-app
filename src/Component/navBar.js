import { Download, Upload } from '../asset';

function NavBar(props) {
  return (
    <div className="h-[46px] shadow-[0px_1px_16px_rgba(0,0,0,0.1)] flex items-center justify-between px-10">
      <div className="font-semibold">
        <span className="mr-2.5">{props.title}</span>
        {props.check && <span>(0)</span>}
      </div>
      {props.check && (
        <div className="flex">
          <button className="first-letter:mr-[11px] px-3 bg-[#1890FF] text-[#ffffff] rounded-[3px] h-[32px] ml-2">
            + Thêm thành viên
          </button>
          <img src={Upload} alt="anh" className="ml-2" />
          <img src={Download} alt="anh" className="ml-2" />
        </div>
      )}
    </div>
  );
}

export default NavBar;
