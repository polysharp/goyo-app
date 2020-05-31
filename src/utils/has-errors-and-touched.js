const hasErrorAndTouched = (errors, touched) =>
  Object.keys(errors).filter((key) => Object.keys(touched).includes(key)).length > 0;

export default hasErrorAndTouched;
