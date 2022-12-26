import Header from '../Component/header';
import ManagerMember from '../Component/manager-member';
import NavBar from '../Component/navBar';
import SizeBar from '../Component/sizeBar';

const CareerModule = () => {
  return (
    <div className="flex w-screen max-w-screen min-h-screen">
      <SizeBar managerAcount={false} career={true} />
      <div className="grow flex flex-col">
        <Header title="Trường Đại Học A" />
        <NavBar title="Ngành Nghề" check={true} />
        <ManagerMember data={true} />
      </div>
    </div>
  );
};
export default CareerModule;
