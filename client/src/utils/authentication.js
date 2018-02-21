import jwtDecode from 'jwt-decode';

const authChecker = () => {
  const token = localStorage.getItem('token');
  let initialState = {
    Authenticated: false,
    token: null,
    firstName: null
  };
  if (token) {
    initialState = {
      Authenticated: true,
      token,
      firstName: jwtDecode(token).firstName
    };
  }
  return initialState;
};

export default authChecker;
