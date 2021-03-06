import React, {Context} from 'react';
import RootStore from "./store/Hotels";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootContext = React.createContext(null)

root.render(
    <RootContext.Provider value={RootStore}>
        <App/>
    </RootContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export const useStore =()=>React.useContext(RootContext)