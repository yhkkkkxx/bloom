import { createContext, useReducer, Dispatch } from 'react';

const initialState = {
  userid: '',
  username: '',
  isLogin: false,
};

function AuthReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      let currentState = { ...state, ...action.value, isLogin: true };
      setLocalStorageItem('authState', currentState);
      return currentState;

    case 'LOGOUT':
      setLocalStorageItem('authState', initialState);
      return initialState;

    default:
      throw new Error('unknown action');
  }
}

const AuthContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const setLocalStorageItem = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

const getLocalStorageItem = (key) => {
  const savedState = localStorage.getItem(key);
  return savedState ? JSON.parse(savedState) : {};
};

export { AuthContext, AuthProvider, setLocalStorageItem, getLocalStorageItem };
