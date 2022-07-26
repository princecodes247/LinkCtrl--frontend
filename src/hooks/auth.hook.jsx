import React, { useState, useEffect, useContext, createContext } from 'react';
import { PropTypes } from 'prop-types';

import useToken from './token.hook';

const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  resetEmail,
  confirmReset,
  onAuthStateChanged,
} = '../adapters';

const AuthContext = createContext();

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  // const [user, setUser] = useState();
  const { token, setToken } = useToken();
  console.log('see token:', token);

  // Wrap all auth adapter methods to make sure ...
  // ... to save the user to state.
  const signin = (email, password) =>
    signInWithEmailAndPassword(email, password).then((response) => {
      setToken(response.user);
      return response.user;
    });

  const signup = (email, password) =>
    createUserWithEmailAndPassword(email, password).then((response) => {
      setToken(response.user);
      return response.user;
    });

  const signout = () =>
    signOut().then(() => {
      setToken(false);
    });

  const sendPasswordResetEmail = (email) => resetEmail(email).then(() => true);

  const confirmPasswordReset = (code, password) =>
    confirmReset(code, password).then(() => true);

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged((userData) => {
  //     if (userData) {
  //       setUser(userData);
  //     } else {
  //       setUser(false);
  //     }
  //   });

  //   // Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, []);

  // Return the user object and auth methods
  return {
    token,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(AuthContext);
