import { Action, createReducer, on } from "@ngrx/store";
import { closeMenuAction, openMenuAction } from "../actions/accountMenu.actions";

const initialState: boolean = false;

const reducer = createReducer(
    initialState,
    on(openMenuAction, (state) => state = true),
    on(closeMenuAction, (state) => state = false)
);

export function accountMenuReducer(
    state: boolean | undefined = initialState,
    action: Action
){
    return reducer(state, action);
}