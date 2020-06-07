import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import { Card, CardHeader, CardTitle, CardBody } from '../../../shared';

const Expenses = () => {
  const [options] = useState({
    plotOptions: {
      bar: {
        endingShape: 'rounded',
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr'],
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

  const [series] = useState([
    {
      name: 'Travaux',
      data: [300, 200, 100, 500],
    },
    {
      name: 'Entretien',
      data: [120, 73, 90, 102],
    },
    {
      name: 'Rénovation',
      data: [400, 1000, 899, 300],
    },
  ]);

  return (
    <Card className="col-span-4 col-start-9 row-span-4 row-start-1">
      <CardHeader>
        <CardTitle>Dépenses par catégories</CardTitle>
      </CardHeader>
      <CardBody className="h-full p-2">
        <Chart type="bar" options={options} series={series} width="100%" height="100%" />
      </CardBody>
    </Card>
  );
};

export default Expenses;
