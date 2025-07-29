import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProviderWrapper } from "./Layout/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import "./utils/featureDetection"; // Import feature detection utilities
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/AppLayout";
import JobCards from "./pages/JobCards";
import RecordReport from "./pages/Reports";
import AssignEngineer from "./pages/AssignEngineer";
import WorkInProgress from "./pages/WorkInProgress";
import QualityCheck from "./pages/QualityCheck";
import SetServiceReminder from "./pages/SetServiceReminder";
import InsuranceManagement from "./pages/InsuranceManagement";
import InventoryManagement from "./pages/InventoryManagement";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./Login/SignUpPage";
import BillingPage from "./pages/BillingPage";
import UserManagement from "./pages/UserList";
import AwaitingApproval from "./pages/AwaitingApproval";
import WaitingApprovalPage from "./pages/WaitingApprovalPage";
import RenewPlanPage from "./pages/RenewPlanPage";
import Profile from "./pages/Profile";
import AddEngineer from "./pages/AddEngineer";

function App() {
  console.log("App component rendering...");
  console.log("Current location:", window.location.pathname);
  console.log("LocalStorage check:", {
    token: !!localStorage.getItem("token"),
    garageToken: !!localStorage.getItem("garageToken"),
    garageId: !!localStorage.getItem("garageId"),
    garage_id: !!localStorage.getItem("garage_id"),
    userType: localStorage.getItem("userType"),
  });

  // Temporary simple test to see if basic rendering works
  if (window.location.pathname === "/test") {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Test Page</h1>
        <p>If you can see this, basic rendering is working.</p>
        <p>Current path: {window.location.pathname}</p>
        <p>Token exists: {!!localStorage.getItem("token")}</p>
        <p>GarageId exists: {!!localStorage.getItem("garageId")}</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProviderWrapper>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/renew-plan" element={<RenewPlanPage />} />
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="jobs" element={<JobCards />} />
              <Route path="jobs/:id" element={<JobCards />} />
              <Route path="inventory" element={<InventoryManagement />} />
              <Route path="reports" element={<RecordReport />} />
              <Route path="assign-engineer/:id" element={<AssignEngineer />} />
              <Route path="work-in-progress/:id" element={<WorkInProgress />} />
              <Route path="quality-check/:id" element={<QualityCheck />} />
              <Route path="reminders" element={<SetServiceReminder />} />
              <Route path="insurance" element={<InsuranceManagement />} />
              <Route path="billing/:id" element={<BillingPage />} />
              <Route path="UserManagemt" element={<UserManagement />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="add-Engineer" element={<AddEngineer />} />
            </Route>

            <Route path="AwaitingApproval" element={<AwaitingApproval />} />
            <Route path="/waiting-approval" element={<WaitingApprovalPage />} />

            {/* <Route element={<ProtectedRoute />}>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="jobs" element={<JobCards />} />
              <Route path="inventory" element={<InventoryManagement />} />
              <Route path="reports" element={<RecordReport />} />
              <Route path="assign-engineer" element={<AssignEngineer />} />
              <Route path="work-in-progress" element={<WorkInProgress />} />
              <Route path="quality-check" element={<QualityCheck />} />
              <Route path="reminders" element={<SetServiceReminder />} />
              <Route path="insurance" element={<InsuranceManagement />} />
            </Route>
          </Route> */}

            {/* Redirect any unknown routes to login */}
          </Routes>
        </Router>
      </ThemeProviderWrapper>
    </ErrorBoundary>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import GarageLogin from './components/GarageLogin';
// // import GarageDashboard from './components/GarageDashboard';
// import GarageLogin from './Login/LoginPage';
// import Dashboard from '../../master-admin/src/pages/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<GarageLogin />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* Other routes */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
