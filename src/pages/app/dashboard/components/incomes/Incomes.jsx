import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import { Card, CardHeader, CardTitle, CardBody } from '../../../shared';

const Incomes = () => {
  const [options] = useState({
    xaxis: {
      categories: [
        'Jan',
        'Fev',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Aout',
        'Septemnbre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
    },
    yaxis: {
      title: {
        text: '€ (euros)',
      },
    },
    tooltip: {
      y: {
        formatter(val) {
          return `${val} €`;
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Revenu',
      data: [0, 4000, 3500, 5000, 4950, 600, 7000, 910],
    },
  ]);

  return (
    <Card className="relative col-span-8 row-span-3">
      <CardHeader>
        <CardTitle>Revenu mensuel</CardTitle>
      </CardHeader>
      <CardBody className="h-full p-2">
        <Chart type="area" options={options} series={series} width="100%" height="100%" />
      </CardBody>
      <div className="flex flex-row items-center justify-between">
        <button
          onClick={() =>
            setSeries([
              {
                name: 'Travaux',
                data: [200, 500, 220, 50],
              },
              {
                name: 'Entretien',
                data: [200, 730, 190, 102],
              },
              {
                name: 'Rénovation',
                data: [400, 150, 289, 330],
              },
            ])
          }
        >
          New data
        </button>
      </div>
    </Card>
  );
};

export default Incomes;
