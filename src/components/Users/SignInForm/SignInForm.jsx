import css from '../SignInForm/signInForm.module.css';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Photo from './Rectangle 19.jpg';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    try {
      const response = await axios.post('/api/login', data);
      toast.success('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/tracker');
    } catch (error) {
      toast.error('Email or password is incorrect. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.signInContainer}>
      <div className={css.signInForm}>
        <div className={css.formSection}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>
            <div className={css.inputContainer}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={css.inputContainer}>
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password')}
              />
              <span
                className={css.togglePassword}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '👁️' : '👁️'}
              </span>
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Sign In</button>
            <p>
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
        <div className={css.imageSection}>
          <img src={Photo} alt="photo" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignInForm;
