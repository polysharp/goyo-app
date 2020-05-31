import React from 'react';

import { capitalize, hasErrorAndTouched } from 'utils';

// eslint-disable-next-line react/prop-types
const Error = ({ errors, touched }) =>
  hasErrorAndTouched(errors, touched) ? (
    <div className="w-full p-4 mt-4 text-red-700 bg-red-100 border-l-4 border-red-500" role="alert">
      {Object.keys(errors).map((key) =>
        touched[key] ? (
          <div key={key} className="flex flex-row items-center">
            <span>&bull;</span>
            <p className="pl-4 font-bold">{capitalize(key)}</p>
            <p className="pl-4">{errors[key]}</p>
          </div>
        ) : null
      )}
    </div>
  ) : null;

export default Error;
