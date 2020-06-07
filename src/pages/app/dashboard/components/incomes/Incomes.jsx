import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import { Card, CardHeader, CardTitle, CardBody } from '../../../shared';

const Incomes = () => {
  const [options] = useState({
    chart: {
      id: 'income-chart',
    },
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
  });

  const [series] = useState([
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
        <Chart type="line" options={options} series={series} width="100%" height="100%" />
      </CardBody>
    </Card>
  );
};

export default Incomes;
