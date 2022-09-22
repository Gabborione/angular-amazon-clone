import { Action, createReducer, on } from "@ngrx/store";
import { CardMenu } from "src/dto/CardMenu";
import { addCardAction } from "../actions/card.actions";

const initialState: Array<CardMenu> = [];

const reducer = createReducer(
    initialState,
    on(addCardAction, (state, action) => {
        return [...state, action.payload]
    })
);

export function cardReducer(
    state: Array<CardMenu> | undefined = initialState,
    action: Action
){
    return reducer(state, action);
}