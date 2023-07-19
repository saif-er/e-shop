import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage } from './Routes.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { server } from '../../frontend/src/server';
import axios from 'axios';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    // axios
    //   .get(`${server}/user/getuser`, { withCredentials: true })
    //   .then((res) => {
    //     console.log(res.data.message);
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message); //
    //   });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route
          path='/activation/:activation_token'
          element={<ActivationPage />}
        />
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </BrowserRouter>
  );
};

export default App;
