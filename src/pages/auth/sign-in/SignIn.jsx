import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

import { useStore } from 'store';
import { SIGN_IN } from 'gql/user';

import { Heading, Input, Button, Link } from 'components';
import { Divider, Error, Form } from '../shared';

const SignInSchema = Yup.object().shape({
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
});

const SignInPage = () => {
  const store = useStore();
  const recaptchaRef = React.createRef();

  const [auth, { loading }] = useMutation(SIGN_IN, {
    onCompleted: () => store.user.sign(),
    onError: (error) => console.log(error),
  });

  return (
    <main className="w-full bg-white md:w-2/3 lg:w-1/2 xl:w-1/3">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          recaptchaRef.current.execute();
          setSubmitting(true);
          auth({ variables: { ...values } });
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
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full">
              <Heading>Bienvenue chez Goyo</Heading>
            </div>
            <div className="w-full mt-8">
              <Input
                className="placeholder-gray-900"
                aria-label="Email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="mt-4">
                <Input
                  className="placeholder-gray-900"
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
            {!isValid && <Error errors={errors} touched={touched} />}
            <div className="w-full mt-8">
              <Button
                type="submit"
                disabled={!isValid || isSubmitting || loading}
                className="transition duration-150 ease-in"
              >
                Se connecter
              </Button>
              <Divider label="OU" />
              <Link
                as={NavLink}
                to="/auth/signup"
                disabled={isSubmitting || loading}
                className="mt-6 transition duration-150 ease-in"
              >
                Créer un compte
              </Link>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              badge="bottomleft"
              sitekey="6LehKfoUAAAAAPL1UHtd9gxRbbQPG0TAqi5tM57-"
              onChange={(token) => console.log(token)}
            />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default SignInPage;
