import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../Component/header';
import ManagerMember from '../Component/manager-member';
import NavBar from '../Component/navBar';
import SizeBar from '../Component/sizeBar';

export default function ManagerMemberModule() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get('https://training.bks.center/api/field', { headers })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex w-screen max-w-screen min-h-screen">
      <SizeBar memeber={true} />
      <div className="grow flex flex-col">
        <Header title="Trường Đại Học A" />
        <NavBar title="Thành viên" check={true} />
        <ManagerMember data={data} />
      </div>
    </div>
  );
}
