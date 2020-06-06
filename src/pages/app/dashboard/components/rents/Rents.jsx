import React from 'react';

import { ThemedButton, EaseIn } from 'components';
import { Rent, Pagination } from './components';

import fakeRents from './fake-rents-data';

const Rents = () => (
  <div className="flex flex-col pt-2">
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full overflow-hidden align-middle">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left border-b">
                <ThemedButton className="px-6 py-3">
                  <EaseIn>
                    <div className="flex flex-row items-center">
                      <span className="text-xs font-bold leading-4 tracking-wider uppercase">
                        Locataires
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 ml-1 transform rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                        />
                      </svg>
                    </div>
                  </EaseIn>
                </ThemedButton>
              </th>
              <th className="text-left border-b">
                <ThemedButton className="px-6 py-3">
                  <EaseIn>
                    <div className="flex flex-row items-center">
                      <span className="text-xs font-bold leading-4 tracking-wider uppercase">
                        Location
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 ml-1 transform rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                        />
                      </svg>
                    </div>
                  </EaseIn>
                </ThemedButton>
              </th>
              <th className="text-left border-b">
                <ThemedButton className="px-6 py-3">
                  <EaseIn>
                    <div className="flex flex-row items-center">
                      <span className="text-xs font-bold leading-4 tracking-wider uppercase">
                        Loyer
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 ml-1 transform rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                        />
                      </svg>
                    </div>
                  </EaseIn>
                </ThemedButton>
              </th>
              <th className="text-left border-b">
                <ThemedButton className="px-6 py-3">
                  <EaseIn>
                    <div className="flex flex-row items-center">
                      <span className="text-xs font-bold leading-4 tracking-wider uppercase">
                        Montant
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 ml-1 transform rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                        />
                      </svg>
                    </div>
                  </EaseIn>
                </ThemedButton>
              </th>
              <th className="text-left border-b">
                <ThemedButton className="px-6 py-3">
                  <EaseIn>
                    <div className="flex flex-row items-center">
                      <span className="text-xs font-bold leading-4 tracking-wider uppercase">
                        Date
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 ml-1 transform rotate-90"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                        />
                      </svg>
                    </div>
                  </EaseIn>
                </ThemedButton>
              </th>
              <th className="text-left border-b">
                <div className="flex flex-row items-center px-6 py-3">
                  <span className="text-xs font-bold leading-4 tracking-wider uppercase">
                    Détails
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {fakeRents.map((data) => (
              <Rent key={data.id} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Pagination />
  </div>
);

export default Rents;
