import { CategoryAction, CategoryActionType } from "../actions/category.actions";

const initialState: Array<string> = [];

export function categoryReducer(
    state: Array<string> = initialState,
    action: CategoryAction
){
    switch(action.type){
        case CategoryActionType.GET_CATEGORY:
            return [...state, action.payload];
        default:
            return state;
    }
}