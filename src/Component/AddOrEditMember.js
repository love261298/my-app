import { useState } from 'react';
import { camera, userCircle } from '../asset';

const AddOrEditMember = (props) => {
  const [popupSerImage, setPopupSerImage] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const handleTitle = () => {
    switch (props.title) {
      case 'sinhVien':
        return 'Sinh Viên';
      case 'giangVien':
        return 'Giảng Viên';
      default:
        return 'Quản Lý';
    }
  };
  console.log(props.title);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-[rgba(66,82,110,0.4)]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.handleClose();
        }
      }}
    >
      <form className="w-[850px] mx-auto my-5 bg-[#FFFFFF] rounded">
        <div className="h-[52px] flex justify-between px-[36px] items-center border-b">
          <span className="text-[16px] text-[#172B4D]">
            {props.edit ? 'Sửa' : 'Thêm'} {handleTitle()}
          </span>
          <span className="p-4 cursor-pointer hover:opacity-70" onClick={(e) => props.handleClose()}>
            X
          </span>
        </div>
        <div className="p-[25px_50px_48px_50px] border-b">
          <ul className="flex flex-wrap mb-6">
            <li className="flex-auto w-1/2">
              <div className="relative flex items-center justify-center w-[124px] h-[124px] bg-[#efece8] rounded-md">
                <img className="w-[50px] h-[50px]" src={userCircle} alt="anh" />
                <img
                  className="absolute right-1 bottom-1 w-[32px] h-[32px]"
                  src={camera}
                  alt="anh"
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
                      <div className="block text-center p-[8px_16px] rounded hover:bg-[#F4F5F7] hover:text-[#1890FF] w-full cursor-pointer">
                        Xóa
                      </div>
                    </div>
                  </>
                )}
              </div>
            </li>
            <li className="flex-auto w-1/2 pl-[35px]">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2">Tài khoản</div>
                <input
                  className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                  type="text"
                  placeholder="Nhập tài khoản"
                />
              </div>
              <div className="mb-6">
                {props.edit ? (
                  <>
                    <div className="text-right text-[#1890FF]" onClick={() => setChangePassword(!changePassword)}>
                      Đổi mật khẩu
                    </div>
                    {changePassword && (
                      <div
                        className="fixed top-0 left-0 w-screen h-screen bg-[rgba(66,82,110,0.4)] z-10"
                        onClick={(e) => {
                          if (e.target === e.currentTarget) {
                            setChangePassword(!changePassword);
                          }
                        }}
                      >
                        <div className="w-[440px] bg-[#fff] mx-auto mt-[100px] rounded overflow-hidden">
                          <div className="h-[56px] flex px-[36px] justify-between items-center border-b">
                            <span className="text-[16px]">Đổi mật khẩu</span>
                            <span className="p-4" onClick={() => setChangePassword(!changePassword)}>
                              X
                            </span>
                          </div>
                          <div className="p-[25px_50px_48px_50px] border-b">
                            <div className="text-[14px] mb-2">Nhập mật khẩu</div>
                            <input
                              type="password"
                              className="border h-8 rounded w-full pl-2.5"
                              placeholder="Nhập mật khẩu"
                            />
                          </div>
                          <div className="px-6 text-right py-3">
                            <button
                              className="px-4 py-2 border border-[#E2E3E9] rounded text-[#172B4D] text-[14px] hover:opacity-70"
                              onClick={() => setChangePassword(!changePassword)}
                            >
                              Hủy
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 border border-[#E2E3E9] rounded bg-[#1890FF] text-[#fff] text-[14px] hover:opacity-70 ml-2.5"
                              onClick={() => setChangePassword(!changePassword)}
                            >
                              Thêm
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="text-[16px] text-[#172B4D] pb-2">Mật khẩu</div>
                    <input
                      className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                      type="password"
                      placeholder="Nhập mật khẩu"
                    />
                  </>
                )}
              </div>
            </li>
          </ul>
          <ul className="flex flex-wrap">
            <li className="flex-auto w-1/2 pr-[35px]">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2">Họ và tên</div>
                <input
                  className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                  type="text"
                  placeholder="Nhập Họ và tên"
                />
              </div>
            </li>
            <li className="flex-auto w-1/2 pl-[35px]">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2 invisible">Tài khoản</div>
                <div className="h-8 flex items-center justify-between">
                  <div>Giới tính</div>
                  <div className="flex">
                    <input className="h-4 mx-4" name="sex" type="radio" placeholder="Nhập tài khoản" />
                    <div>Nam</div>
                  </div>
                  <div className="flex">
                    <input className="h-4 mx-4" name="sex" type="radio" placeholder="Nhập tài khoản" />
                    <div>Nữ</div>
                  </div>
                  <div className="flex">
                    <input className="h-4 mx-4" name="sex" type="radio" placeholder="Nhập tài khoản" />
                    <div>Khác</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex-auto w-1/2 pr-[35px]">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2">Ngày sinh</div>
                <input
                  className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                  type="text"
                  placeholder="Nhập Ngày sinh"
                />
              </div>
            </li>
            <li className="flex-auto w-1/2 pl-[35px]">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2">Số điện thoại</div>
                <input
                  className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                  type="text"
                  placeholder="Nhập Số điện thoại"
                />
              </div>
            </li>
            <li className="flex-auto w-1/2 pr-[35px]">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2">Email</div>
                <input
                  className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                  type="text"
                  placeholder="Nhập Email"
                />
              </div>
            </li>
            <li className="flex-auto w-1/2"></li>
          </ul>
          <ul className="flex flex-wrap border-b">
            <li className="flex-auto w-full pr-7.5">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2">Địa chỉ</div>
                <input
                  className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                  type="text"
                  placeholder="Nhập Địa chỉ"
                />
              </div>
            </li>
          </ul>
          <ul className="flex flex-wrap mt-8">
            <li className="flex-auto w-1/2 pr-[35px]">
              <div className="mb-6">
                <div className="text-[16px] text-[#172B4D] pb-2">
                  {props.title === 'sinhVien'
                    ? 'Mã sinh viên'
                    : props.title === 'giangVien'
                    ? 'Hình thức'
                    : 'Học và làm việc tại'}
                </div>
                {props.title === 'sinhVien' ? (
                  <input
                    className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                    type="text"
                    placeholder="Nhập Học và làm việc tại"
                  />
                ) : props.title === 'giangVien' ? (
                  <select className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5">
                    <option>Biên chế</option>
                    <option>Hợp đồng</option>
                  </select>
                ) : (
                  <input
                    className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                    type="text"
                    placeholder="Nhập Học và làm việc tại"
                  />
                )}
              </div>
            </li>
            <li className="flex-auto w-1/2 pl-[35px]">
              {props.title === 'giangVien' || props.title === 'sinhVien' ? (
                <div className="mb-6">
                  <div className="text-[16px] text-[#172B4D] pb-2">Chuyên ngành</div>
                  <input
                    className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                    type="text"
                    placeholder="Nhập Học và làm việc tại"
                  />
                </div>
              ) : (
                <></>
              )}
            </li>
            {props.title === 'sinhVien' && (
              <>
                <li className="flex-auto w-1/2 pr-[35px]">
                  <div className="mb-6">
                    <div className="text-[16px] text-[#172B4D] pb-2">Khóa</div>
                    <input
                      className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                      type="text"
                      placeholder="Nhập Học và làm việc tại"
                    />
                  </div>
                </li>
                <li className="flex-auto w-1/2 pl-[35px]">
                  <div className="mb-6">
                    <div className="text-[16px] text-[#172B4D] pb-2">Lớp</div>
                    <input
                      className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                      type="text"
                      placeholder="Nhập Học và làm việc tại"
                    />
                  </div>
                </li>
              </>
            )}
            <li className="flex-auto">
              <div className="text-[16px] text-[#172B4D] pb-2">Ghi chú</div>
              <input
                className="border border-[#E2E3E9] rounded h-8 w-full block pl-2.5"
                type="text"
                placeholder="Nhập Ghi chú"
              />
            </li>
          </ul>
        </div>
        <div className="px-6 text-right py-3">
          <button
            className="px-4 py-2 border border-[#E2E3E9] rounded text-[#172B4D] text-[14px] hover:opacity-70"
            onClick={() => (props.edit ? props.handleEdit() : props.handleClose())}
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-[#E2E3E9] rounded bg-[#1890FF] text-[#fff] text-[14px] hover:opacity-70 ml-2.5"
          >
            {props.edit ? 'Cập nhật' : 'Thêm'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrEditMember;
