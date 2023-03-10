import axios from 'axios';
import { useEffect } from 'react';
import Header from '../Component/header';
import NavBar from '../Component/navBar';
import SizeBar from '../Component/sizeBar';
import Organization from '../Component/organization';

function OrganizationModule() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
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
      <SizeBar managerAcount={false} organization={true}/>
      <div className="grow flex flex-col">
        <Header title="Trường Đại Học A" />
        <NavBar title="Tổ chức" check={false} />
        <Organization infomation={false}/>
      </div>
    </div>
  );
}

export default OrganizationModule;
