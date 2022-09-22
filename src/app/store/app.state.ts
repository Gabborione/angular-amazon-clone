import { CardMenu } from "src/dto/CardMenu";

export interface AppState{
    readonly categories: Array<string>;
    readonly cards: Array<CardMenu>
    readonly accountMenu: boolean;
}