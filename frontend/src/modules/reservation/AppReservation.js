import AppRouter from "./main/routers/AppRouter";

// Redux
import { Provider } from 'react-redux';
import store from './main/redux/store';

function AppReservation() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default AppReservation;
