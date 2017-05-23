import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paralax-layer',
  templateUrl: './paralax-layer.component.html',
  styleUrls: ['./paralax-layer.component.scss']
})
export class ParalaxLayerComponent implements OnInit {
  
  @Input()
  public src: string;

  @Input()
  public speed: number = 1;

  @Input()
  public size: any = 'cover';

  @Input()
  public opacity = 1;
  
  constructor() { }

  ngOnInit() {
  }

}
