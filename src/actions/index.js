export const login = (user, token) => {
  return {
    type: 'LOGIN',
    payload: {
      user,
      token
    }
  };
};

export const errorLogin = errorMessage => {
  return {
    type: 'ERROR_LOGIN',
    payload: {
      errorMessage
    }
  };
};

export const logOut = uiid => {
  localStorage.clear();
  return {
    type: 'LOG_OUT',
    payload: {
      uiid
    }
  };
};

export const getUser = () => {
  return {
    type: 'GET_USER'
  };
};
