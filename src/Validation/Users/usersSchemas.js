import * as yup from 'yup';

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Your email must be ***@***.***',
    )
    .required('This input is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*)',
    )
    .required('This input is required'),
});

const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'At least 3 characters')
    .max(50, 'You`ve typed more than 50 characters')
    .required('This input is required'),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Your email must be ***@***.***',
    )
    .required('This input is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*)',
    )
    .required('This input is required'),
});

const usersSchemas = {
  signUpSchema,
  signInSchema,
};

export default usersSchemas;
