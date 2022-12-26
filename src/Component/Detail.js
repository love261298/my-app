import { userCircle } from '../asset';

const Detail = (props) => {
  const title = () => {
    switch (props.data.rank) {
      case 'student':
        return 'sinh viên';
      case 'teacher':
        return 'giảng viên';
      default:
        return 'quản lý';
    }
  };
  return (
    <div
      className="fixed w-screen h-screen bg-[rgba(66,82,110,0.4)] top-0 left-0 p-[120px_120px_52px_120px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.handleDetail();
        }
      }}
    >
      <div className="w-full h-full bg-[#fff] relative overflow-hidden">
        <span className="absolute top-[2px] right-[20px] p-4 hover:opacity-70" onClick={() => props.handleDetail()}>
          X
        </span>
        <div className="text-center text-[#172B4D] pt-10 text-[24px] text-medium">Chi tiết {title()}</div>
        <div className="p-[40px_70px_0_380px]">
          <div className="text-[16px] pb-5 text-[#172B4D]">{props.data.name}</div>
          <ul className="flex flex-wrap flex-auto border-b border-dotted">
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">Tài khoản</div>
              <div className="text-[#172B4D]">{props.data.name}</div>
            </li>
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">Giới tính</div>
              <div className="text-[#172B4D]">
                {props.data.sex === 'M' ? 'Nam' : props.data.sex === 'F' ? 'Nữ' : 'Khác'}
              </div>
            </li>
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">Ngày sinh</div>
              <div className="text-[#172B4D]">{props.data.birth}</div>
            </li>
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">Số điện thoại</div>
              <div className="text-[#172B4D]">{props.data.phone}</div>
            </li>
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">Email</div>
              <div className="text-[#172B4D]">{props.data.email}</div>
            </li>
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">Địa chỉ</div>
              <div className="text-[#172B4D]">{props.data.address}</div>
            </li>
          </ul>
          <ul className="flex flex-wrap flex-auto mt-10">
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">
                {props.data.rank === 'studen'
                  ? 'Mã sinh viên'
                  : props.data.rank === 'teacher'
                  ? 'Hình thức'
                  : 'Quản lý tạm thời'}
              </div>
              <div className="text-[#172B4D]">{props.data.name}</div>
            </li>
            <li className="w-4/12 mb-5">
              <div className="text-[#9EA3A9] text-[14px] mb-2">
                {props.data.rank === 'manager' ? 'Ghi chú' : 'Chuyên ngành'}
              </div>
              <div className="text-[#172B4D]">{props.data.rank === 'manager' ? 'Quản lý tạm thời' : 'Lập trình'}</div>
            </li>
            {props.data.rank === 'manager' ? (
              <></>
            ) : (
              <li className="w-4/12 mb-5">
                <div className="text-[#9EA3A9] text-[14px] mb-2">
                  {props.data.rank === 'student' ? 'Khóa' : 'Ghi chú'}
                </div>
                <div className="text-[#172B4D]">{props.data.rank === 'student' ? 'Khóa 20' : 'Đang thử việc'}</div>
              </li>
            )}
            {props.data.rank === 'student' && (
              <>
                <li className="w-4/12 mb-5">
                  <div className="text-[#9EA3A9] text-[14px] mb-2">Lớp</div>
                  <div className="text-[#172B4D]">0123456789</div>
                </li>
                <li className="w-4/12 mb-5">
                  <div className="text-[#9EA3A9] text-[14px] mb-2">Ghi chú</div>
                  <div className="text-[#172B4D]">Học bổng toàn phần</div>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="w-[220px] h-[220px] bg-[#1890ff40] absolute top-[108px] left-[119px] rounded-[50%]"></div>
        <div className="w-[200px] h-[200px] bg-[#1890ff40] absolute top-[152px] left-[70px] rounded-[50%]"></div>
        <div className="w-[150px] h-[150px] bg-[#efece8] absolute top-[149px] left-[149px] flex items-center justify-center">
          <img className="w-[50%]" src={userCircle} alt="anh" />
        </div>
        <div className="w-[200px] h-[200px] bg-[#1890ff40] absolute -bottom-[100px] -right-[100px] rounded-[50%]"></div>
      </div>
    </div>
  );
};
export default Detail;
