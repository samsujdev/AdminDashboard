import { Route, Routes } from 'react-router-dom';
import Admin from "../pages/admin/admin"
import DashBoard from "../pages/dashboard/dashboard"
import UserList from "../pages/users/list"
import UserAdd from "../pages/users/add"
import CardList from "../pages/cardlist/admin"

function routes() {
  return (
    <Routes>
      <Route exact path="/" element={ <Admin/> } />
      <Route path="/dashboard" element={ <DashBoard/> } />
      <Route path="/user/list" element={ <UserList/> } />
      <Route path="/user/add" element={ <UserAdd/> } />
      <Route path="/card/list" element={ <CardList/> } />
    </Routes>
  );
}

export default routes;
