import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdIconModule,
    MdTabsModule,
    MdSliderModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule,
        MdIconModule,
        MdTabsModule,
        MdSliderModule
    ],
    exports: [
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule,
        MdIconModule,
        MdTabsModule,
        MdSliderModule
    ],
    declarations: []
})
export class MaterialModule { }
