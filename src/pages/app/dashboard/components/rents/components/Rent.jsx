import React from 'react';
import PropTypes from 'prop-types';

const Rent = ({ data }) => (
  <tr>
    <td className="px-6 py-3 whitespace-no-wrap border-b">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
          <img className="w-10 h-10 rounded-full" src={data.profile.avatar || ''} alt="" />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium leading-5 text-gray-900">
            {`${data.profile.firstName} ${data.profile.lastName}`}
          </div>
          <div className="text-sm leading-5 text-gray-500">bernardlane@example.com</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-3 whitespace-no-wrap border-b">
      <div className="text-sm leading-5 text-gray-900">{data.location.address}</div>
      <div className="text-sm leading-5 text-gray-500">{data.location.city}</div>
    </td>
    <td className="px-6 py-3 whitespace-no-wrap border-b">
      {data.rent.status === 'PAID' && (
        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
          Payé
        </span>
      )}
      {data.rent.status === 'RETARDED' && (
        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full">
          En retard
        </span>
      )}
      {data.rent.status === 'UNPAID' && (
        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
          Impayé
        </span>
      )}
    </td>
    <td className="px-6 py-3 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b">
      {`${data.rent.amount} €`}
    </td>
    <td className="px-6 py-3 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b">
      {data.rent.date}
    </td>
    <td className="px-6 py-3 text-sm font-medium leading-5 whitespace-no-wrap border-b">
      <a href="/" className="text-indigo-600 hover:text-indigo-900">
        Edit
      </a>
    </td>
  </tr>
);

Rent.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    profile: PropTypes.exact({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatar: PropTypes.string,
    }),
    location: PropTypes.exact({
      address: PropTypes.string,
      city: PropTypes.string,
    }),
    rent: PropTypes.exact({
      status: PropTypes.string,
      amount: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
};

export default Rent;
