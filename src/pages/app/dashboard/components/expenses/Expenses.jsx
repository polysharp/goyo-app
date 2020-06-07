import React, { useState } from 'react';

import { Card, CardHeader, CardTitle, CardBody } from '../../../shared';

const Expenses = () => {
  const [graphMode, setGraphMode] = useState(false);

  return (
    <Card className="col-span-4 col-start-9 row-span-4 row-start-1">
      <CardHeader>
        <CardTitle>{graphMode ? 'Évolution des dépenses' : 'Dépenses par catégories'}</CardTitle>
        <button
          type="button"
          className="absolute"
          style={{ right: '8px' }}
          onClick={() => setGraphMode(!graphMode)}
        >
          Toggle
        </button>
      </CardHeader>
      <CardBody>{graphMode ? <div>Graphique</div> : <div>Répartition</div>}</CardBody>
    </Card>
  );
};

export default Expenses;
