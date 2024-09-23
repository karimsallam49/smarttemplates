import { createRoot } from 'react-dom/client'
import Approuter from './routes/routes';
// Store
import { Provider } from 'react-redux';
import persistor, { store } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Appstyle/Appstyle.css"
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

        <Approuter/>
        </PersistGate>

    </Provider>
)
