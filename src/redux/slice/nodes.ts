import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NodesState } from "../types/types";

import {
  Connection,
  EdgeChange,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

const initialState: NodesState = {
  nodes: [
    {
      id: "1",
      type: "head",
      data: { data: "Head Node" },
      position: {
        x: 50,
        y: 50,
      },
    },
    {
      id: "2",
      type: "chain",
      data: { data: "Chain Node" },
      position: {
        x: 250,
        y: 250,
      },
    },
    {
      id: "3",
      type: "chain",
      data: { data: "Chain Node" },
      position: {
        x: 450,
        y: 450,
      },
    },
  ],
  edges: [],
};

const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(action.payload, state.edges);
    },
  },
});

export const { actions, reducer } = nodesSlice;
