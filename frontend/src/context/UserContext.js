import { createContext, useState } from 'react';

export const userContext = createContext();

const Provider = userContext.Provider;

const UserContextProvider = (props) => {
  const [userLogin, setUserLogin] = useState(localStorage.getItem('login'));
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const loginUser = (user) => {
    setUserLogin('true');
    localStorage.setItem('login', true);
    setUserInfo(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logoutUser = () => {
    setUserLogin(false);
    localStorage.removeItem('login');
    setUserInfo();
    localStorage.removeItem('user');
  };

  return (
    <Provider value={{ userLogin, userInfo, loginUser, logoutUser }}>
      {props.children}
    </Provider>
  );
};

export default UserContextProvider;
