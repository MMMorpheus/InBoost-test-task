import { FC, useState } from 'react';
// import { ReactFlow, Node, Edge } from 'reactflow';
// import 'reactflow/dist/style.css';

import { CheckboxNode } from '..';

import './App.css';

// const initialNodes: Node[] = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Input Node' },
//     position: {
//       x: 100,
//       y: 100,
//     },
//   },
//   {
//     id: '2',
//     // type: 'input',
//     data: { label: 'Input Node' },
//     position: {
//       x: 150,
//       y: 150,
//     },
//   },
//   {
//     id: '3',
//     type: 'output',
//     data: { label: 'Input Node' },
//     position: {
//       x: 200,
//       y: 200,
//     },
//   },
// ];

// const initialEdges: Edge[] = [
//   {
//     id: '1-2',
//     source: '1',
//     target: '2',
//   },
//   {
//     id: '2-3',
//     source: '2',
//     target: '3',
//   },
// ];

export const App: FC = () => {
  // const [nodes, setNodes] = useState<Node[]>(initialNodes);
  // const [edges, setEdjes] = useState<Edge[]>(initialEdges);

  return (
    <>
      <CheckboxNode />
      
    </>

    // <div className="container">
    //   <ReactFlow nodes={nodes} edges={edges} fitView />
    // </div>
  );
};
