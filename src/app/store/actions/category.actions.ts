import { Action } from "@ngrx/store";

export enum CategoryActionType{
    GET_CATEGORY = "[GET] Get Category"
}

export class GetCategoryAction implements Action{
    readonly type = CategoryActionType.GET_CATEGORY;

    constructor(public payload: string){}
}

export type CategoryAction = GetCategoryAction;