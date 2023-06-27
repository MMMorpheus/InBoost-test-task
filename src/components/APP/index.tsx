import { FC, useState, useCallback, useMemo } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Node,
  Edge
} from "reactflow";
import "reactflow/dist/style.css";

import "./App.css";

import { ChainNode, HeadNode } from "..";
// import { nodesFlow } from "../../redux/selectors/selector";
import { useActions, useAppSelector } from "../../hooks";
// const nodeTypes = { head: HeadNode, chain: ChainNode };

// const initialNodes: Node[] = [
//   {
//     id: "1",
//     type: "head",
//     data: { data: "Head Node" },
//     position: {
//       x: 50,
//       y: 50,
//     },
//   },
//   {
//     id: "2",
//     type: "chain",
//     data: { data: "Chain Node" },
//     position: {
//       x: 250,
//       y: 250,
//     },
//   },
//   {
//     id: "3",
//     type: "chain",
//     data: { data: "Chain Node" },
//     position: {
//       x: 450,
//       y: 450,
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
  const nodeTypes = useMemo(() => ({ head: HeadNode, chain: ChainNode }), []);
  // const [nodes, setNodes] = useState<Node[]>(initialNodes);
  // const [edges, setEdges] = useState<Edge[]>([]);

  const {nodes} = useAppSelector(state => state.nodes)
  const {onNodesChange, onEdgesChange, onConnect} = useActions();

  // const onNodesChange = useCallback(
  //   changes => setNodes(nds => applyNodeChanges(changes, nds)),
  //   [setNodes],
  // );
  // const onEdgesChange = useCallback(
  //   changes => setEdges(eds => applyEdgeChanges(changes, eds)),
  //   [setEdges],
  // );
  // const onConnect = useCallback(
  //   connection => setEdges(eds => addEdge(connection, eds)),
  //   [setEdges],
  // );

  return (
    <div className="container">
      <ReactFlow
        nodes={nodes}
        // edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
};
