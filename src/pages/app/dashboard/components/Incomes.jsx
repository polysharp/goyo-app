import React from 'react';

const Incomes = () => (
  <div className="flex flex-row items-center justify-between h-full">
    <div className="w-1/3 p-4 border-r">
      <h2 className="text-lg leading-4 tracking-wider text-gray-800">Revenus à venir</h2>
      <div className="flex flex-row items-end pt-2">
        <span className="text-2xl font-bold leading-7 text-indigo-500">30 000 €</span>
        <span className="pl-2 text-sm text-gray-600">/ 100 000€</span>
      </div>
    </div>
    <div className="w-1/3 p-4 border-r">
      <div className="flex flex-row items-baseline justify-between">
        <h2 className="text-lg leading-4 tracking-wider text-gray-800">Revenu mensuel</h2>
        <span className="pr-1 text-sm font-semibold leading-none text-gray-600">15/05</span>
      </div>
      <div className="flex flex-row items-center justify-between pt-2">
        <span className="text-2xl font-bold text-indigo-500">30 000 €</span>
        <span className="px-2 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
          <span>Svg</span>
          <span className="pl-2">5%</span>
        </span>
      </div>
    </div>
    <div className="w-1/3 p-4">
      <div className="flex flex-row items-baseline justify-between">
        <h2 className="text-lg leading-4 tracking-wider text-gray-800">Revenu annuel</h2>
        <span className="pr-1 text-sm font-semibold leading-none text-gray-600">30/05</span>
      </div>
      <div className="flex flex-row items-center justify-between pt-2">
        <span className="text-2xl font-bold text-indigo-500">30 000 €</span>
        <span className="px-2 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
          <span>Svg</span>
          <span className="pl-2">5%</span>
        </span>
      </div>
    </div>
  </div>
);

export default Incomes;
