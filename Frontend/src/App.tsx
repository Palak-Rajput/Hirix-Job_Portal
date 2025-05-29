import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Notifications } from '@mantine/notifications';
import React from 'react';

import Store from './Store';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Pages
import HomePage from './Pages/HomePage';
import FindJobsPage from './Pages/FindJobsPage';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import JobPage from './Pages/JobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';
import AdminLogin from './Pages/admin/AdminLogin';
import AdminDashboard from './Pages/admin/AdminDashboard';
import JobDetailPage from './Pages/JobDetailPage';

const theme = createTheme({
  focusRing: "never",
  colors: {
    brightSun: [
      '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
      '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902',
    ],
    mineShaft: [
      '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0',
      '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f',
      '#454545', '#3d3d3d', '#2d2d2d',
    ]
  },
  fontFamily: "poppins, sans-serif",
  primaryColor: 'brightSun',
  primaryShade: 4,
});

function App() {
  return (
    <Provider store={Store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
        <BrowserRouter>
          <div className="relative">
            <Header />
            <Divider size="xs" />
            <Routes>
              {/* Public/User Routes */}
              <Route path="/find-jobs" element={<FindJobsPage />} />
             <Route path="/jobs/:id" element={<JobDetailPage />} />
<Route path="/apply-job/:id" element={<ApplyJobPage />} />
              <Route path="/find-talent" element={<FindTalentPage />} />
              <Route path="/company/:name" element={<CompanyPage />} />
              <Route path="/posted-job/:id" element={<PostedJobPage />} />
              <Route path="/job-history" element={<JobHistoryPage />} />
              <Route path="/talent-profile/:id" element={<TalentProfilePage />} />
              <Route path="/post-job" element={<PostJobPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<SignUpPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<HomePage />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
}

export default App;
