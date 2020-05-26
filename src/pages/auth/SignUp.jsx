import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

import { useStore } from '../../store';
import { USER } from '../../graphql';

import { Divider, Error, Form, Heading, Input, Button, Link } from '../../components';

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
    onCompleted: () => store.user.sign(),
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
          <Form onSubmit={handleSubmit}>
            <div className="w-full">
              <Heading>Création d&apos;un compte Goyo</Heading>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-8">
              <Input
                className="mr-2 placeholder-teal-900"
                aria-label="First name"
                name="firstName"
                type="text"
                placeholder="Prénom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <Input
                className="ml-2 placeholder-teal-900"
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
              <Input
                className="placeholder-teal-900"
                aria-label="Email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Input
                className="mt-4 placeholder-teal-900"
                aria-label="Password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {!isValid && <Error errors={errors} touched={touched} />}
            <div className="w-full mt-8">
              <Button
                type="submit"
                disabled={!(isValid && dirty) || isSubmitting || loading}
                className="transition duration-150 ease-in"
              >
                Créer mon compte
              </Button>
              <Divider label="OU" />
              <Link
                as={NavLink}
                to="/auth/signin"
                disabled={isSubmitting || loading}
                className="mt-6 transition duration-150 ease-in"
              >
                Se connecter
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

export default SignUpPage;
