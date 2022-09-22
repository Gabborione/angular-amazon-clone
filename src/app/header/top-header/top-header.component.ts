import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    closeMenuAction,
    openMenuAction
} from 'src/app/store/actions/accountMenu.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
    accountOpened: boolean = false;
    @Output() darkOverlayChange = new EventEmitter<boolean>();

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {}

    async toggleMenu() {
        if (this.accountOpened) {
            await new Promise((f) => {
                setTimeout(f, 1000);
            });
            this.store.dispatch(closeMenuAction());
        } else {
            this.store.dispatch(openMenuAction());
        }
    }

    openMenu() {
        this.store.dispatch(openMenuAction());
        this.toggleOverlay(true);
    }

    closeAccount(open: boolean) {
        this.accountOpened = open;
        this.close();
    }

    async closeMenu() {
        if (!this.accountOpened) {
            await new Promise((f) => {
                setTimeout(f, 1000);
            });

            this.close();
        }
    }

    private close() {
        if (!this.accountOpened) {
            this.store.dispatch(closeMenuAction());

            if (this.store.select('accountMenu')) {
                this.toggleOverlay(false);
            }
        }
    }

    toggleOverlay(focus: boolean) {
        this.change(focus);
    }

    private change(focus: boolean) {
        this.darkOverlayChange.emit(focus);
    }
}
