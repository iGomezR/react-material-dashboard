const userStorage = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');

const initialState = { 
  user: userStorage || {},
  loggedIn: (userStorage && token),
  token,
  error: false,
  errorMessage: ''
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        loggedIn: true,
        error: false,
        errorMessage: ''
      };
    case 'ERROR_LOGIN':
      return {
        ...state,
        user: {},
        token: null,
        error: true,
        loggedIn: false,
        errorMessage: payload.errorMessage
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
        token: null,
        error: false
      };
    case 'GET_USER':
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
