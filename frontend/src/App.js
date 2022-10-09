import NavBar from "./component/Navbar/NavBar";

import { Route, Routes } from "react-router-dom";
import EmployeesSidebar from "./component/EmployeesSidebar/EmployeesSidebar";
import Admin from "./component/AdminSidebar/Admin";

// import Profile from "./component/profile/Profile";
import Employee from "./component/Table/Employee";
import Department from "./component/Table/Department";
// import Login from "./component/BtnComponent/Login";
import Signup from "./component/signup/Signup";
import Login from "./component/user/Login";
import ForgotPassword from "./component/forgotPassword/ForgotPassword";
// import EmployeeDashboard from "./component/employeeDashboard/EmployeeDashboard";
import Induction from "./component/Table/Induction";
import Profile from "./component/user/Profile";

import Offer_Letter from "./component/Table/Offer_Letter";
import Leaves from "./component/Table/Leaves";
import AddEmployeeForm from "./component/employeeForm/AddEmployeeForm";
import Check from "./component/user/Check";
import InductionUploadPost from "./component/PostDataTabal.jsx/InductionUploadPost";
import InductionAdd from "./component/PostDataTabal.jsx/InductionAdd";

import EditEmployee from "./component/employeeForm/EditEmployeeForm";
import Holiday from "./component/Table/Holiday";
import EditHoliday from "./component/holidayForm/EditHolidayForm";

import RequestLeave from "./component/Table/RequestLeavs";
import MonthWiseAttandance from "./component/Table/MonthWiseAttendance";
import JobGred from "./component/Table/JobGred";
import AddOfferLetter from "./component/Table/AddOfferLetter";
import AddJobGred from "./component/Table/AddJobGred";
import EmpApproved from "./component/Table/EmpApproved";

import EmpLeave from "./component/Table/EmpLeave";
import AddLeave from "./component/PostDataTabal.jsx/AddLeave";
import OptedLeaves from "./component/Table/OptedLeave";
import AddOptedLeaves from "./component/optedLeavesForm/AddOptedLeaves";
import EmployeeDashboard from "./component/employeeDashboard/EmployeeDashboard";


function App() {
  // const { isLoading, error, isAuthenticated } = useAuth0();

  // const [showTable,setShowTable]=useState(false)
  // const handleTable=()=>{
  //   setShowTable(true)
  // }
  // const handleHome=()=>{
  //   setShowTable(false)
  // }
  return (
    <div>
      {/* <RequestLeave/> */}
      {/* <SalesNav/> */}
      <NavBar />
      {/* <LeavesChart/> */}
      {/* <AddEmployeeForm/> */}
      {/* <Check/> */}
      {/* <Employee/> */}
      {/* <Profile/> */}
      {/* {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}

      {!error && !isLoading && isAuthenticated && ( */}
      <>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/holiday" element={<Holiday />} />
            <Route exact path="/editHoliday" element={<EditHoliday />} />
            {/* <Route path="/" element={<SideBar/> }/> */}
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/Profile" element={<Profile />} />
            {/* <Route exact path="/RequestLeave" element={<RequestLeave />} /> */}
            <Route exact path="/employee" element={<EmployeeDashboard />} />
            <Route exact path="/employeeData" element={<Employee />} />
            <Route exact path="/Induction" element={<Induction />} />
            <Route exact path="/offerletter" element={<Offer_Letter/>} />
            <Route exact path="/Leaves" element={<Leaves/>} />
            <Route exact path="/admin/employeeData" element={<Employee />} />
            <Route exact path="/departmentData" element={<Department />} />
            <Route exact path="/addempdata" element={<AddEmployeeForm />} />
            <Route exact path="/editEmployee" element={<EditEmployee />} />
            <Route exact path="/Induction/InductionUploadPost" element={<InductionUploadPost />} />
            <Route exact path="Induction/InductionAdd" element={< InductionAdd/>} />
            <Route exact path="/Employee/addEmployee" element={< AddEmployeeForm/>} />
            <Route exact path="/requestleave" element={< RequestLeave/>} />
            <Route exact path="/attendence" element={< MonthWiseAttandance/>} />
            <Route exact path="/jobGrade" element={<JobGred/>} />
            <Route exact path="/addOfferLetter" element={<AddOfferLetter/>} />
            <Route exact path="/offerLetter" element={<Offer_Letter/>} />
            <Route exact path="/addJobGred" element={<AddJobGred/>} />
            <Route exact path="/employee/addOptedLeaves" element={<AddOptedLeaves/>} />
            <Route exact path="/employee/employeeLeaves" element={<EmpLeave/>} />
            <Route exact path="/epmloyee/empApproved" element={<EmpApproved/>} />
            <Route exact path="/employee/employeeLeaves/optedLeave" element={<OptedLeaves/>} />
            
            
            <Route exact path="/addLeave" element={< AddLeave/>} />
            {/* <Route
              exact 
              path="/admin/departmentData"
              element={<Department />}
            /> */}
            <Route exact path="/login" element={<Login />} />
            <Route path="/login/forgot-password" element={<ForgotPassword />} />

            {/* <Route path="./component/AdminSidebar/Home.jsx" element={<Home />} /> */}
            {/* <Route path="/TodoList" element={} /> */}
            {/* <Route path="/CardForm" element={} /> */}

            {/* <Route path="/Navbar2" element={<Navbar2 />} /> */}
            {/* <Route path="/ShopingCart" element={<Navbar2 cart={cart} />} /> */}
          </Routes>
        </div>
      </>

      {/* )} */}
    </div>
  );
}

export default App;
