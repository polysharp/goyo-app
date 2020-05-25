import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

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
    .min(8, 'Minimum of 8 characters')
    .max(255, 'Maximum of 255 characters')
    .matches(/\S+/, { excludeEmptyString: true, message: 'Inccorect password format' })
    .required('Required'),
  language: Yup.string().oneOf(['fr-FR', 'en-EN', 'es-ES']).required('Required'),
  currency: Yup.string().oneOf(['euro', 'dollar', 'yen']).required('Required'),
});

const SignUpPage = () => {
  const store = useStore();
  const recaptchaRef = React.createRef();
  const { i18n } = useTranslation();

  const [auth, { loading }] = useMutation(USER.SIGN_UP_MUTATION, {
    onCompleted: (data) => store.user.onAuth(data.signUp),
    onError: (error) => console.log(error),
  });

  return (
    <main className="w-full bg-white md:w-2/3 lg:w-1/2 xl:w-1/3">
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          language: i18n.language || 'fr-FR',
          currency: 'euro',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          recaptchaRef.current.execute();
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
            <div className="flex flex-col items-center justify-center h-screen px-4 md:px-6 lg:px-10 xl:px-16">
              <div className="w-full">
                <h2 className="text-xl font-bold text-center text-teal-900 uppercase">
                  Bienvenue chez Goyo
                </h2>
              </div>
              <div className="flex flex-row items-center justify-between w-full mt-8">
                <input
                  className="relative block w-full px-3 py-2 mr-2 text-teal-900 placeholder-teal-900 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:border-teal-700"
                  aria-label="First name"
                  name="firstName"
                  type="text"
                  placeholder="Prénom"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <input
                  className="relative block w-full px-3 py-2 ml-2 text-teal-900 placeholder-teal-900 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:border-teal-700"
                  aria-label="Last name"
                  name="lastName"
                  type="test"
                  placeholder="Nom"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
              </div>
              <div className="w-full mt-6">
                <input
                  className="relative block w-full px-3 py-2 text-teal-900 placeholder-teal-900 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:border-teal-700"
                  aria-label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <input
                  className="relative block w-full px-3 py-2 mt-4 text-teal-900 placeholder-teal-900 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:border-teal-700"
                  aria-label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div className="w-full mt-8">
                <button
                  type="submit"
                  disabled={!(isValid && dirty) || isSubmitting || loading}
                  className={`bg-teal-900 w-full px-4 py-2 font-semibold text-white rounded-md border border-transparent focus:outline-none focus:shadow-outline ${
                    !(isValid && dirty) || isSubmitting
                      ? 'cursor-not-allowed opacity-50'
                      : 'hover:bg-teal-700 focus:border-teal-700'
                  }`}
                >
                  Créer mon compte
                </button>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                      <span className="px-2 text-gray-500 bg-white">OU</span>
                    </div>
                  </div>
                </div>
                <NavLink
                  to="/auth/signin"
                  style={isSubmitting || loading ? { pointerEvents: 'none' } : null}
                  className={`block text-center mt-6 w-full px-4 py-2 font-semibold text-teal-900 rounded-md border-2 border-teal-900 focus:outline-none focus:shadow-outline ${
                    isSubmitting || loading
                      ? 'opacity-50'
                      : 'hover:bg-teal-700 hover:border-teal-700 focus:border-teal-700 hover:text-white'
                  }`}
                >
                  Se connecter
                </NavLink>
              </div>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              badge="bottomleft"
              sitekey="6LehKfoUAAAAAPL1UHtd9gxRbbQPG0TAqi5tM57-"
              onChange={(token) => console.log(token)}
            />
          </form>
        )}
      </Formik>
    </main>
  );
};

export default SignUpPage;
