import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const EditModeContext = createContext();

export const EditModeProvider = ({ children }) => {
  const { isSuperAdmin } = useAuth();
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  // If user logs out or is no longer super admin, disable edit mode
  useEffect(() => {
    if (!isSuperAdmin) {
      setEditModeEnabled(false);
    }
  }, [isSuperAdmin]);

  const toggleEditMode = () => {
    if (!isSuperAdmin) return;
    setEditModeEnabled(prev => !prev);
  };

  return (
    <EditModeContext.Provider value={{ editModeEnabled, toggleEditMode, isSuperAdmin }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => useContext(EditModeContext);
