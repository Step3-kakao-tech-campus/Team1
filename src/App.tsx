import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { myTheme } from 'styles/myTheme';

import { convertPath } from 'apis/convertURI';
import { Provider } from 'jotai';

import LogoutOnlyPrivate from 'privateRoutes/LogoutOnlyPrivate';
import AdminOnlyPrivate from 'privateRoutes/AdminOnlyPrivate';

import HomeIndex from 'pages/HomeIndex';
import KakaoAuthPage from 'pages/KakaoAuthPage';
import SignupPage from 'pages/SignupPage';
import InvitedPage from 'pages/alba/InvitedPage';
import AddGroupPage from 'pages/admin/AddGroupPage';
import SelectWeekPage from 'pages/admin/SelectWeekPage';
import ApplicationOpenPage from 'pages/admin/ApplicationOpenPage';
import ApplicationClosePage from 'pages/admin/ApplicationClosePage';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={myTheme}>
      <Provider>
        <BrowserRouter>
          <ErrorBoundary fallback={<p>에러... app.tsx</p>}>
            <Routes>
              <Route path={convertPath('/')} element={<HomeIndex />} />

              <Route element={<LogoutOnlyPrivate />}>
                <Route path={convertPath('/signup')} element={<SignupPage />} />
                <Route path={convertPath('/login/kakao')} element={<KakaoAuthPage />} />
              </Route>

              <Route element={<AdminOnlyPrivate />}>
                <Route path={convertPath('/addGroup')} element={<AddGroupPage />} />

                <Route path={convertPath('/newSchedule')} element={<SelectWeekPage />} />
                <Route path={convertPath('/newSchedule/open')} element={<ApplicationOpenPage />} />
                <Route path={convertPath('/newSchedule/close')} element={<ApplicationClosePage />} />
              </Route>

              <Route path={convertPath('/invited/:invitationKey')} element={<InvitedPage />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
