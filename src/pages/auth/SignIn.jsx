import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useStore } from '../../store';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .lowercase()
    .email('Please provide a valid email')
    .min(6, 'Please provide a valid email')
    .max(200, 'Please provide a valid email')
    .required('Required'),
  password: Yup.string()
    .min(8, '8 to 25 characters for password')
    .max(25, '8 to 25 characters for password')
    .required('Required'),
});

const SignInPage = () => {
  const store = useStore();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(true);

        // TODO: GRAPHQL MUTATION QUERY

        setTimeout(() => setSubmitting(false), 5000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
                Sign in to your account
              </h2>
              <div className="mt-8">
                <div className="rounded-md shadow-sm">
                  <div>
                    <input
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      aria-label="Email address"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <div className="-mt-px">
                    <input
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      aria-label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </div>
                </div>
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                {errors.password && touched.password ? <div>{errors.password}</div> : null}
                <div className="mt-6">
                  <button
                    className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md focus:outline-none  focus:shadow-outline-indigo ${
                      !(isValid && dirty) || isSubmitting
                        ? 'cursor-not-allowed bg-indigo-200'
                        : 'bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700'
                    }`}
                    type="submit"
                    disabled={!(isValid && dirty) || isSubmitting}
                  >
                    Sign in
                  </button>
                  <NavLink
                    to="/auth/signup"
                    className="relative flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-300 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                    disabled={isSubmitting}
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SignInPage;