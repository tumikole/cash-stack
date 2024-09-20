import React from 'react';
import { Tree } from 'react-tree-graph';

const MLMTree = () => {
  // Define the MLM network structure
  const data = {
    name: 'Top Distributor',
    children: [
      {
        name: 'Level 1: Person A',
        children: [
          { name: 'Level 2: Person A1' },
          { name: 'Level 2: Person A2' },
          { name: 'Level 2: Person A3' }

        ]
      },
      {
        name: 'Level 1: Person B',
        children: [
          { name: 'Level 2: Person B1' },
          { name: 'Level 2: Person B2' },
          { name: 'Level 2: Person B3' }
        ]
      },
      {
        name: 'Level 1: Person C',
        children: [
          { name: 'Level 2: Person C1' },
          {
            name: 'Level 2: Person C2',
            children: [
              { name: 'Level 3: Person C2-1' },
              { name: 'Level 3: Person C2-2' }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="mlm-tree">
      <Tree
        data={data}
        height={400}
        width={600}
        animated={true}
        svgProps={{
          className: 'custom-tree'
        }}
      />
    </div>
  );
};

export default MLMTree;
