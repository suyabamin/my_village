import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { EditModeProvider } from './context/EditModeContext';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <EditModeProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </EditModeProvider>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
