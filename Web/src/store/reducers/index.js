import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import projectsReducer from './projectsReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'



const rootReducer = combineReducers({
  session: sessionReducer,
  projects: projectsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
