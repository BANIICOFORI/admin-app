import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ResetPassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colotlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Login />}/>
        <Route path = "/reset-password" element={<ResetPassword />}/>
        <Route path = "/forgot-password"element={<Forgotpassword/>}/>
        <Route path = "/admin" element={<MainLayout />}>
          <Route index element={<Dashboard/>} />
          <Route path="/admin/enquiries" element={<Enquiries />} />
          <Route path="/admin/blog-list" element={<Bloglist />} />
          <Route path="/admin/blog-category-list" element={<Blogcatlist />} />
          <Route path="/admin/orders" element={<Orders/>} />
          <Route path="/admin/customers" element={<Customers/>} />
          <Route path="/admin/list-color" element={<Colorlist/>} />
          <Route path="/admin/list-category" element={<Categorylist/>} />
          <Route path="/admin/list-brand" element={<Brandlist/>} />
          <Route path="/admin/list-product" element={<Productlist/>} />
          <Route path="/admin/blog" element={<Addblog/>} />
          <Route path="/admin/blog-category" element={<Addblogcat/>} />
          <Route path="/admin/color" element={<Addcolor/>} />
          <Route path="/admin/category" element={<Addcat/>} />
          <Route path="/admin/brand" element={<Addbrand/>} />
          <Route path="/admin/product" element={<Addproduct/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
