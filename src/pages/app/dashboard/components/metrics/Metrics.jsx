import React from 'react';

import { Card } from '../../../shared';

const Metrics = () => (
  <>
    <Card className="col-span-2">Revenus mensuel + % Objectif</Card>
    <Card className="col-span-2">Depenses mensuel + Seuil dépense</Card>
    <Card className="col-span-2">Revenu annuel</Card>
    <Card className="col-span-2">Location total / nombre biens</Card>
  </>
);

export default Metrics;
