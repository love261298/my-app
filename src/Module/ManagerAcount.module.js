import axios from 'axios';
import { useEffect } from 'react';
import Header from '../Component/header';
import NavBar from '../Component/navBar';
import SizeBar from '../Component/sizeBar';
import Organization from '../Component/organization';

function ManagerAcountModule() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get('https://training.bks.center/api/field', { headers })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex w-screen max-w-screen min-h-screen">
      <SizeBar managerAcount={true} infomation={true}/>
      <div className="grow flex flex-col">
        <Header title="Trường Đại Học A" />
        <NavBar title="Thông tin cá nhân" check={false} />
        <Organization infomation={true}/>
      </div>
    </div>
  );
}

export default ManagerAcountModule;
