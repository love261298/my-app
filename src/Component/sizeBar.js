import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dropdown, Iconly, bifile, material, fluent, Vector, Rectangle, info, iconHome } from '../asset';
import { ThemeContext } from '../core/Context';

function SizeBar(props) {
  const navigator = useNavigate();
  const [catelogy, setCatelogy] = useState(props.career || false);
  const [project, setProject] = useState(false);
  const [compact, setCompact] = useState(false);
  const active = 'bg-[#F0F7FF] text-[#1890FF]';
  const [organization, setOrganization] = useState(props.organization || false);
  const [topic, setTopic] = useState(false);
  const [turn, setTurn] = useState(false);
  const [career, setCareer] = useState(props.career || false);
  const [course, setCourse] = useState(false);
  const [class_, setClass_] = useState(false);
  const [memeber, setMemeber] = useState(props.memeber || false);
  const [infomation, setInfomation] = useState(props.infomation || false);
  const [changePassWord, setChangePassWord] = useState(false);
  const { setEdit, setPassWord } = useContext(ThemeContext);
  return (
    <>
      {!compact ? (
        props.managerAcount ? (
          <div className="w-[210px] text-[#42526E] border-r border-[#EBEBEB] relative">
            <img
              src={iconHome}
              alt="anh"
              className="h-[81px] block mx-auto w-[50px] cursor-pointer"
              onClick={() => {
                navigator('manage-member');
                setEdit(false);
                setPassWord(false);
              }}
            />
            <div className="pt-[24px] pb-[30px] text-center font-medium font-[#172B4D]">Quản lý tài khoản</div>
            <ul className="px-4">
              <Link
                className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                  infomation && active
                }`}
                onClick={() => {
                  setInfomation(true);
                  setChangePassWord(false);
                  setPassWord(false);
                }}
              >
                <img src={info} alt="anh" className="pr-2" />
                <span className="grow">Thông tin cá nhân</span>
              </Link>
              <Link
                className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                  changePassWord && active
                }`}
                onClick={() => {
                  setInfomation(false);
                  setChangePassWord(true);
                  setPassWord(true);
                }}
              >
                <img src={fluent} alt="anh" className="pr-2" />
                <span className="grow">Đổi mật khẩu</span>
              </Link>
            </ul>
            <div
              className="hover:opacity-70"
              onClick={() => {
                setCompact(!compact);
              }}
            >
              <img src={Rectangle} alt="anh" className="absolute bottom-[80px] -right-[14px]" />
              <img src={Vector} alt="anh" className="absolute bottom-[95px] -right-[9px]" />
            </div>
          </div>
        ) : (
          <div className="w-[210px] text-[#42526E] border-r border-[#EBEBEB] relative">
            <img
              src={iconHome}
              alt="anh"
              className="h-[81px] block mx-auto w-[50px] cursor-pointer"
              onClick={() => {
                navigator('manage-member');
                setEdit(false);
                setPassWord(false);
              }}
            />
            <ul className="pt-[42px] px-4">
              <Link
                to="/manage-member"
                className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                  memeber && active
                }`}
                onClick={() => {
                  setMemeber(true);
                  setClass_(false);
                  setCourse(false);
                  setCareer(false);
                  setTurn(false);
                  setTopic(false);
                  setOrganization(false);
                }}
              >
                <img src={Iconly} alt="anh" className="pr-2" />
                <span className="grow">Quản trị thành viên</span>
              </Link>
              <li
                className="flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer"
                onClick={() => {
                  setCatelogy(!catelogy);
                  setProject(false);
                }}
              >
                <img src={bifile} alt="anh" className="pr-2" />
                <span className="grow">Danh mục</span>
                <img src={dropdown} alt="anh" className="pl-2" />
              </li>
              {catelogy && (
                <ul>
                  <Link
                    to="/career"
                    className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                      career && active
                    }`}
                    onClick={() => {
                      setMemeber(false);
                      setClass_(false);
                      setCourse(false);
                      setCareer(true);
                      setTurn(false);
                      setTopic(false);
                      setOrganization(false);
                      setCatelogy(true);
                    }}
                  >
                    Ngành nghề
                  </Link>
                  <Link
                    to="/"
                    className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                      course && active
                    }`}
                    onClick={() => {
                      setMemeber(false);
                      setClass_(false);
                      setCourse(true);
                      setCareer(false);
                      setTurn(false);
                      setTopic(false);
                      setOrganization(false);
                      setCatelogy(true);
                    }}
                  >
                    Khóa
                  </Link>
                  <Link
                    to="/"
                    className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                      class_ && active
                    }`}
                    onClick={() => {
                      setMemeber(false);
                      setClass_(true);
                      setCourse(false);
                      setCareer(false);
                      setTurn(false);
                      setTopic(false);
                      setOrganization(false);
                      setCatelogy(true);
                    }}
                  >
                    Lớp
                  </Link>
                </ul>
              )}
              <li
                className="flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer"
                onClick={() => {
                  setProject(!project);
                  setCatelogy(false);
                }}
              >
                <img src={material} alt="anh" className="pr-2" />
                <span className="grow">Đồ án</span>
                <img src={dropdown} alt="anh" className="pl-2" />
              </li>
              {project && (
                <ul>
                  <Link
                    to="/"
                    className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                      turn && active
                    }`}
                    onClick={() => {
                      setProject(true);
                      setMemeber(false);
                      setClass_(false);
                      setCourse(false);
                      setCareer(false);
                      setTurn(true);
                      setTopic(false);
                      setOrganization(false);
                    }}
                  >
                    Quản lý đợt
                  </Link>
                  <Link
                    to="/"
                    className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                      topic && active
                    }`}
                    onClick={() => {
                      setProject(true);
                      setMemeber(false);
                      setClass_(false);
                      setCourse(false);
                      setCareer(false);
                      setTurn(false);
                      setTopic(true);
                      setOrganization(false);
                    }}
                  >
                    Kho đề tài
                  </Link>
                </ul>
              )}
              <Link
                to="/organization"
                className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer ${
                  organization && active
                }`}
                onClick={() => {
                  setMemeber(false);
                  setClass_(false);
                  setCourse(false);
                  setCareer(false);
                  setTurn(false);
                  setTopic(false);
                  setOrganization(true);
                }}
              >
                <img src={fluent} alt="anh" className="pr-2" />
                <span className="grow">Tổ chức</span>
              </Link>
            </ul>
            <div
              className="hover:opacity-70"
              onClick={() => {
                setCompact(!compact);
                setCatelogy(false);
                setProject(false);
              }}
            >
              <img src={Rectangle} alt="anh" className="absolute bottom-[80px] -right-[14px]" />
              <img src={Vector} alt="anh" className="absolute bottom-[95px] -right-[9px]" />
            </div>
          </div>
        )
      ) : props.managerAcount ? (
        <div className="w-[60px] text-[#42526E] border-r border-[#EBEBEB] relative">
          <img
            src={iconHome}
            alt="anh"
            className="h-[81px] block mx-auto w-[50px] cursor-pointer"
            onClick={() => {
              navigator('manage-member');
              setEdit(false);
              setPassWord(false);
            }}
          />
          <ul className="pt-[77px] px-2">
            <Link to="/manage-member" className="h-[20px] mb-[38px]">
              <img
                src={Iconly}
                alt="anh"
                className={`mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer ${
                  memeber && active
                }`}
                onClick={() => {
                  setMemeber(true);
                  setClass_(false);
                  setCourse(false);
                  setCareer(false);
                  setTurn(false);
                  setTopic(false);
                  setOrganization(false);
                }}
              />
            </Link>
            <Link
              to="/organization"
              className="h-[20px] mb-[38px]"
              onClick={() => {
                setMemeber(false);
                setClass_(false);
                setCourse(false);
                setCareer(false);
                setTurn(false);
                setTopic(false);
                setOrganization(true);
              }}
            >
              <img
                src={fluent}
                alt="anh"
                className={`mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer ${
                  organization && active
                }`}
              />
            </Link>
          </ul>
          <div
            className="hover:opacity-70"
            onClick={() => {
              setCompact(!compact);
            }}
          >
            <img src={Rectangle} alt="anh" className="absolute bottom-[80px] -right-[14px]" />
            <img src={Vector} alt="anh" className="absolute bottom-[95px] -right-[9px] rotate-180" />
          </div>
        </div>
      ) : (
        <div className="w-[60px] text-[#42526E] border-r border-[#EBEBEB] relative">
          <img
            src={iconHome}
            alt="anh"
            className="h-[81px] block mx-auto w-[50px] cursor-pointer"
            onClick={() => {
              navigator('manage-member');
              setEdit(false);
              setPassWord(false);
            }}
          />
          <ul className="pt-[77px] px-2">
            <Link to="/" className="h-[20px] mb-[38px] list-item">
              <img
                src={Iconly}
                alt="anh"
                className={`mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer ${
                  memeber && active
                }`}
                onClick={() => {
                  setMemeber(true);
                  setClass_(false);
                  setCourse(false);
                  setCareer(false);
                  setTurn(false);
                  setTopic(false);
                  setOrganization(false);
                }}
              />
            </Link>
            <li
              className="h-[20px] mb-[38px]  relative before:content-[''] before:block before:absolute before:w-full before:h-[43px] before:left-8"
              onMouseMove={() => {
                setCatelogy(true);
                setProject(false);
              }}
              onMouseLeave={() => {
                setCatelogy(false);
                setProject(false);
              }}
            >
              <img
                src={bifile}
                alt="anh"
                className={`mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer ${
                  (class_ || career || course) && active
                }`}
              />
            </li>
            {catelogy && (
              <ul
                className="absolute w-[138px] left-full shadow-2xl rounded-4 top-[214px] font-medium"
                onMouseMove={() => {
                  setCatelogy(true);
                  setProject(false);
                }}
                onMouseLeave={() => {
                  setCatelogy(false);
                  setProject(false);
                }}
              >
                <Link
                  to="/career"
                  className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer rounded-4 text-[#42526E] ${
                    career && active
                  }`}
                  onClick={() => {
                    setMemeber(false);
                    setClass_(false);
                    setCourse(false);
                    setCareer(true);
                    setTurn(false);
                    setTopic(false);
                    setOrganization(false);
                    setCatelogy(false);
                  }}
                >
                  Ngành nghề
                </Link>
                <Link
                  to="/"
                  className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer rounded-4 text-[#42526E] ${
                    course && active
                  }`}
                  onClick={() => {
                    setMemeber(false);
                    setClass_(false);
                    setCourse(true);
                    setCareer(false);
                    setTurn(false);
                    setTopic(false);
                    setOrganization(false);
                    setCatelogy(false);
                  }}
                >
                  Khóa
                </Link>
                <Link
                  to="/"
                  className={`flex h-[40px] items-center justify-between hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer text-[#42526E] rounded-4 ${
                    class_ && active
                  }`}
                  onClick={() => {
                    setMemeber(false);
                    setClass_(true);
                    setCourse(false);
                    setCareer(false);
                    setTurn(false);
                    setTopic(false);
                    setOrganization(false);
                    setCatelogy(false);
                  }}
                >
                  Lớp
                </Link>
              </ul>
            )}
            <li
              className="h-[20px] mb-[38px] relative before:content-[''] before:block before:absolute before:w-full before:h-[43px] before:left-8"
              onMouseMove={() => {
                setCatelogy(false);
                setProject(true);
              }}
              onMouseLeave={() => {
                setCatelogy(false);
                setProject(false);
              }}
            >
              <img
                src={material}
                alt="anh"
                className={`mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer ${
                  (turn || topic) && active
                }`}
              />
            </li>
            {project && (
              <ul
                className="absolute w-[138px] left-full shadow-2xl rounded-4 top-[214px] font-medium"
                onMouseMove={() => {
                  setCatelogy(false);
                  setProject(true);
                }}
                onMouseLeave={() => {
                  setCatelogy(false);
                  setProject(false);
                }}
              >
                <Link
                  to="/"
                  className={`flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer text-[#42526E] rounded-4 ${
                    turn && active
                  }`}
                  onClick={() => {
                    setMemeber(false);
                    setClass_(false);
                    setCourse(false);
                    setCareer(false);
                    setTurn(true);
                    setTopic(false);
                    setOrganization(false);
                    setProject(false);
                  }}
                >
                  Quản lý đợt
                </Link>
                <Link
                  to="/"
                  className={`flex h-[40px] items-center justify-between hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer text-[#42526E] rounded-4 ${
                    topic && active
                  }`}
                  onClick={() => {
                    setMemeber(false);
                    setClass_(false);
                    setCourse(false);
                    setCareer(false);
                    setTurn(false);
                    setTopic(true);
                    setOrganization(false);
                    setProject(false);
                  }}
                >
                  Kho đề tài
                </Link>
              </ul>
            )}
            <Link
              to="/organization"
              className="h-[20px] mb-[38px]"
              onClick={() => {
                setMemeber(false);
                setClass_(false);
                setCourse(false);
                setCareer(false);
                setTurn(false);
                setTopic(false);
                setOrganization(true);
              }}
            >
              <img
                src={fluent}
                alt="anh"
                className={`mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer ${
                  organization && active
                }`}
              />
            </Link>
          </ul>
          <div
            className="hover:opacity-70"
            onClick={() => {
              setCompact(!compact);
              if (turn || topic) {
                setProject(true);
              } else if (class_ || career || course) {
                setCatelogy(true);
              } else {
                setProject(false);
                setCatelogy(false);
              }
            }}
          >
            <img src={Rectangle} alt="anh" className="absolute bottom-[80px] -right-[14px]" />
            <img src={Vector} alt="anh" className="absolute bottom-[95px] -right-[9px] rotate-180" />
          </div>
        </div>
      )}
    </>
  );
}

export default SizeBar;
