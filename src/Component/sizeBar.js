import { useState } from 'react';
import { Link } from 'react-router-dom';
import { dropdown, Iconly, bifile, material, fluent, iconHome, Vector, Rectangle } from '../asset';

function SizeBar() {
  const [catelogy, setCatelogy] = useState(false);
  const [project, setProject] = useState(false);
  const [compact, setCompact] = useState(false);
  const active = 'bg-[#F0F7FF] text-[#1890FF]';
  const [organization, setOrganization] = useState(false);
  const [topic, setTopic] = useState(false);
  const [turn, setTurn] = useState(false);
  const [career, setCareer] = useState(false);
  const [course, setCourse] = useState(false);
  const [class_, setClass_] = useState(false);
  const [memeber, setMemeber] = useState(false);
  return (
    <>
      {!compact ? (
        <div className="w-[210px] text-[#42526E] border-r border-[#EBEBEB] relative">
          <img src={iconHome} alt="anh" className="h-[81px] block mx-auto w-[50px]" />
          <ul className="pt-[42px] px-4">
            <Link
              to="/"
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
                  to="/"
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
          <div className="hover:opacity-70" onClick={() => setCompact(!compact)}>
            <img src={Rectangle} alt="anh" className="absolute bottom-[80px] -right-[14px]" />
            <img src={Vector} alt="anh" className="absolute bottom-[95px] -right-[9px]" />
          </div>
        </div>
      ) : (
        <div className="w-[60px] text-[#42526E] border-r border-[#EBEBEB] relative">
          <img src={iconHome} alt="anh" className="h-[81px] block mx-auto w-[50px]" />
          <ul className="pt-[77px] px-2">
            <Link
              to="/"
              className={`h-[20px] mb-[38px] ${memeber && active}`}
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
              <img
                src={Iconly}
                alt="anh"
                className="mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer"
              />
            </Link>
            <li
              className="h-[20px] mb-[38px]  relative before:content-[''] before:block before:absolute before:w-full before:h-[43px] before:left-8"
              onMouseMove={() => setCatelogy(true)}
              onMouseOut={() => setCatelogy(false)}
            >
              <img
                src={bifile}
                alt="anh"
                className="mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer"
              />
            </li>
            {catelogy && (
              <ul
                className="absolute w-[138px] left-full shadow-2xl rounded-4 top-[214px] font-medium"
                onMouseMove={() => setCatelogy(true)}
                onMouseOut={() => setCatelogy(false)}
              >
                <Link
                  to="/"
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
                  }}
                >
                  Ngành nghề
                </Link>
                <Link
                  to="/"
                  className="flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer rounded-4 text-[#42526E]"
                >
                  Khóa
                </Link>
                <Link
                  to="/"
                  className="flex h-[40px] items-center justify-between hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer text-[#42526E] rounded-4"
                >
                  Lớp
                </Link>
              </ul>
            )}
            <li
              className="h-[20px] mb-[38px] relative before:content-[''] before:block before:absolute before:w-full before:h-[43px] before:left-8"
              onMouseMove={() => setProject(true)}
              onMouseOut={() => setProject(false)}
            >
              <img
                src={material}
                alt="anh"
                className=" mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer"
              />
            </li>
            {project && (
              <ul
                onMouseMove={() => setProject(true)}
                onMouseOut={() => setProject(false)}
                className="absolute w-[138px] left-full shadow-2xl rounded-4 top-[214px] font-medium"
              >
                <li className="flex h-[40px] items-center justify-between mb-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer text-[#42526E] rounded-4">
                  Quản lý đợt
                </li>
                <li className="flex h-[40px] items-center justify-between hover:bg-[#F0F7FF] hover:text-[#1890FF] px-3 rounded cursor-pointer text-[#42526E] rounded-4">
                  Kho đề tài
                </li>
              </ul>
            )}
            <li className="h-[20px] mb-[38px]">
              <img
                src={fluent}
                alt="anh"
                className="mx-auto p-2 hover:bg-[#F0F7FF] hover:text-[#1890FF] rounded cursor-pointer"
              />
            </li>
          </ul>
          <div className="hover:opacity-70" onClick={() => setCompact(!compact)}>
            <img src={Rectangle} alt="anh" className="absolute bottom-[80px] -right-[14px]" />
            <img src={Vector} alt="anh" className="absolute bottom-[95px] -right-[9px] rotate-180" />
          </div>
        </div>
      )}
    </>
  );
}

export default SizeBar;
