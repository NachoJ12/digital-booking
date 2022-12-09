import { createContext, useState } from 'react';

export const userContext = createContext();

const Provider = userContext.Provider;

const UserContextProvider = (props) => {
  const [userJwt, setUserJwt] = useState(localStorage.getItem('jwt'));
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const loginUser = (user) => {
    setUserJwt(user.jwt);
    localStorage.setItem('jwt', JSON.stringify(user.jwt));
    setUserInfo(user);
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        city: user.city,
        redirect: user.redirect || false,
        role: user.role,
      })
    );
  };

  const logoutUser = () => {
    setUserJwt();
    localStorage.removeItem('jwt');
    setUserInfo();
    localStorage.removeItem('user');
  };

  return (
    <Provider value={{ userJwt, userInfo, loginUser, logoutUser }}>
      {props.children}
    </Provider>
  );
};

export default UserContextProvider;
