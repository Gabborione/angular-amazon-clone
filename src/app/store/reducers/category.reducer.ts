import { Action, createReducer, on } from "@ngrx/store";
import { AddCategoryAction, CategoryActionType } from "../actions/category.actions";

const initialState: Array<string> = [];

const reducer = createReducer(
    initialState,
    on(AddCategoryAction, (state, action) => {
        return [...state, action.payload]
    })
);

export function categoryReducer(
    state: Array<string> | undefined = initialState,
    action: Action
){
    return reducer(state, action);
}