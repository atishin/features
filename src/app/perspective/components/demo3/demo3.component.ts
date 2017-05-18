import { Component, OnInit } from '@angular/core';
import { MdSliderChange } from "@angular/material/material";

@Component({
    selector: 'app-demo3',
    templateUrl: './demo3.component.html',
    styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

    _xTrasform: number = 0;
    _yTrasform: number = 0;
    _zTrasform: number = 0;
    cubeStyle: Partial<CSSStyleDeclaration>;

    set xTransform(value: number) {
        this._xTrasform = value;
        this.updateStyles();
    }
    get xTransform() {
        return this._xTrasform;
    }

    set yTransform(value: number) {
        this._yTrasform = value;
        this.updateStyles();
    }
    get yTransform() {
        return this._yTrasform;
    }

    set zTransform(value: number) {
        this._zTrasform = value;
        this.updateStyles();
    }
    get zTransform() {
        return this._zTrasform;
    }

    constructor() { }

    ngOnInit() {
    }

    updateStyles() {
        this.cubeStyle = {
            'transform': `rotateX(${this.xTransform}deg) rotateY(${this.yTransform}deg) rotateZ(${this.zTransform}deg)`
        };
        console.log(this.cubeStyle);
    }

    updateSlider(event: MdSliderChange) {
        return event.value;
    }

}
