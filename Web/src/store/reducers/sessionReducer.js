//import * as actionTypes from 'store/actions';

const initialState = {
  auth: {
    authError: null,
    loggedIn: false
  },
  user: {
    first_name: 'Anonymous',
    last_name: 'MCUser',
    email: 'anon@MCUniversity.online',
    avatar: '/images/avatars/anon-avatar.png',
    bio: 'Guest User',
    role: 'GUEST' // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR': {
      return {
        ...state,
        auth: {
          loggedIn: false,
          authError: true,
        },
        user: {
          role: 'USER'
        }
      };
    }

    case 'SESSION_LOGIN': {
      return {
        ...state,
        auth: {
          loggedIn: true,
          authError: false,
        },
        user: {
          role: 'USER'
        }
      };
    }
    

    case 'SESSION_LOGOUT': {
      return {
        ...state,
        auth: {
          loggedIn: false,
          authError: null,
        },
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
