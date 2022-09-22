import { createAction, props } from "@ngrx/store";
import { CardMenu } from "src/dto/CardMenu";

export enum CardActionType{
    ADD_CARD = "[CARD] Add Card"
}

export const addCardAction = createAction(
    '[CARD] Add Item',
    props<{payload: CardMenu}>()
);
    