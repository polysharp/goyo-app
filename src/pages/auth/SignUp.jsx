import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { useStore } from '../../store';
import { USER } from '../../graphql';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'What a short name...')
    .max(200, 'What a long name...')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'What a short name...')
    .max(200, 'What a long name...')
    .required('Required'),
  email: Yup.string()
    .lowercase()
    .email('Please provide a valid email')
    .min(6, 'Please provide a valid email')
    .max(200, 'Please provide a valid email')
    .required('Required'),
  password: Yup.string()
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,255})/,
      { excludeEmptyString: true, message: 'Inccorect password format' }
    )
    .required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  language: Yup.string().oneOf(['fr-FR', 'en-EN', 'es-ES']).required('Required'),
  currency: Yup.string().oneOf(['euro', 'dollar', 'yen']).required('Required'),
});

const SignUpPage = () => {
  const store = useStore();
  const { i18n } = useTranslation();

  const handleSignUpSuccess = (data) => store.user.onAuth(data.signUp);
  const handleSignUpError = (error) => console.log(error);

  const [auth, { loading }] = useMutation(USER.SIGN_UP_MUTATION, {
    onCompleted: handleSignUpSuccess,
    onError: handleSignUpError,
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        language: i18n.language || 'fr-FR',
        currency: 'euro',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password, firstName, lastName, language, currency } = values;
        setSubmitting(true);
        auth({ variables: { email, password, firstName, lastName, language, currency } });
        setSubmitting(false);
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
                Create a new Goyo Account
              </h2>
              <div className="mt-8">
                <div className="rounded-md shadow-sm">
                  <div>
                    <input
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      aria-label="First name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                  </div>
                  <div className="-mt-px">
                    <input
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      aria-label="Last name"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                  </div>
                </div>
                <div className="mt-8 rounded-md shadow-sm">
                  <div>
                    <input
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      aria-label="Email address"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      aria-label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </div>
                  <div className="-mt-px">
                    <input
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      aria-label="Confirm password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <div className="pr-4">
                    <Field as="select" name="language">
                      <option value="fr-FR">Francais</option>
                      <option value="en-EN">Anglais</option>
                      <option value="es-ES">Espagnol</option>
                    </Field>
                  </div>
                  <div className="pl-4">
                    <Field as="select" name="currency">
                      <option value="euro">€</option>
                      <option value="dollar">$</option>
                      <option value="yen">¥</option>
                    </Field>
                  </div>
                </div>
                <div className="mt-4">
                  {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                  {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  {errors.password && touched.password ? <div>{errors.password}</div> : null}
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div>{errors.confirmPassword}</div>
                  ) : null}
                </div>
                <div className="mt-6">
                  <button
                    className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md focus:outline-none  focus:shadow-outline-indigo ${
                      !(isValid && dirty) || isSubmitting || loading
                        ? 'cursor-not-allowed bg-indigo-200'
                        : 'bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700'
                    }`}
                    type="submit"
                    disabled={!(isValid && dirty) || isSubmitting || loading}
                  >
                    Sign Up
                  </button>
                  <NavLink
                    to="/auth/signin"
                    className="relative flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-300 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                    disabled={isSubmitting || loading}
                  >
                    Login
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

export default SignUpPage;
