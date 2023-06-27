import { configureStore } from "@reduxjs/toolkit";
import {reducer as nodesReducer} from "./slice/nodes"

export const store = configureStore({
  reducer: {
    nodes: nodesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
