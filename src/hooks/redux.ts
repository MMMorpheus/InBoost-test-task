import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { actions } from "../redux/slice/nodes";

const rootActions = {
    ...actions
}

export const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}