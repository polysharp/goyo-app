import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Currencies = () => (
  <div className="pb-6 mt-6">
    <h2 className="pb-4 pl-2 text-xl text-gray-800">
      <FontAwesomeIcon icon="yen-sign" />
      <span className="pl-2">Currency</span>
    </h2>
    <div className="pl-2">list</div>
  </div>
);

export default Currencies;
