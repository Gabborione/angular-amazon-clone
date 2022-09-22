import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    closeMenuAction,
    openMenuAction
} from 'src/app/store/actions/accountMenu.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'app-login-menu',
    templateUrl: './login-menu.component.html',
    styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {
    //@Input() isOpen: boolean = false;
    isOpen: boolean = true;
    opened: Observable<boolean> = this.store.select('accountMenu');
    @Output() isOpenChange = new EventEmitter<boolean>();
    constructor(private store: Store<AppState>) {}

    openMenu() {
        this.isOpen = true;
        this.change(this.isOpen);
    }

    closeMenu() {
        this.isOpen = false;
        this.change(this.isOpen);
        this.store.dispatch(closeMenuAction());
    }

    // closeMenu() {
    //     this.change(this.isOpen);
    // }

    private change(state: boolean) {
        this.isOpenChange.emit(state);
    }
}
