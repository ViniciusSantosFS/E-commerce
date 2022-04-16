import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from '../ducks/rootReducer'

export const store = configureStore({
  reducer,
});


export default function ReduxProvider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}