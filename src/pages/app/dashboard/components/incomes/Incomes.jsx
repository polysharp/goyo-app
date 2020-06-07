import React from 'react';

import { Card, CardHeader, CardTitle, CardBody } from '../../../shared';

const Incomes = () => (
  <Card className="relative col-span-8 row-span-3">
    <CardHeader>
      <CardTitle>Revenu mensuel</CardTitle>
    </CardHeader>
    <CardBody>
      <div>Graphique evolution des revenus</div>
    </CardBody>
  </Card>
);

export default Incomes;
