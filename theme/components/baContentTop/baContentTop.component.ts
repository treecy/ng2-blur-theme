import { Component, Input, OnInit } from '@angular/core';

import { AppState } from "../../../app.state";

@Component({
    selector: 'ba-content-top',
    styles: [require('./baContentTop.scss')],
    template: require('./baContentTop.html'),
})
export class BaContentTop implements OnInit {

    @Input()
    title: string

    public activePageTitle: string = '';

    constructor(private _state: AppState) { }

    ngOnInit(): void {
        this.activePageTitle = this.title
        
        this._state.subscribe('menu.activeLink', (activeLink) => {
            if (activeLink) {
                this.activePageTitle = activeLink.title
            }
        });
    }
}
