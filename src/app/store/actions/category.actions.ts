import { createAction, props } from "@ngrx/store";

export enum CategoryActionType{
    ADD_CATEGORY = "[POST] Get Category"
}

export const AddCategoryAction = createAction(
    '[CATEGORY] Add Item',
    props<{payload: string}>()
);
    