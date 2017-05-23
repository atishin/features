import { Component, OnInit, AfterViewInit, ContentChild, ContentChildren, QueryList, Input } from '@angular/core';
import { ParalaxLayerComponent } from "app/paralax/components/paralax-layer/paralax-layer.component";

class ParalaxLayer {
  private position = 0;
  constructor(public layer: ParalaxLayerComponent) {}
  public updatePosition() {
    this.position -= this.layer.speed;
  }
  public getStyle() {
    return {
      'background-image': `url('${this.layer.src}')`,
      'background-position': `${this.position}px`,
      'background-size': this.layer.size,
      'opacity': this.layer.opacity
    };
  }
}

@Component({
  selector: 'app-paralax-container',
  templateUrl: './paralax-container.component.html',
  styleUrls: ['./paralax-container.component.scss']
})
export class ParalaxContainerComponent implements OnInit, AfterViewInit {

  @ContentChildren(ParalaxLayerComponent)
  public layersQuery: QueryList<ParalaxLayerComponent>;

  @Input()
  public height: string | number;

  public layers: ParalaxLayer[] = [];

  constructor() { }

  ngOnInit() {
  }

  private createLayer(layer: ParalaxLayerComponent) {
    return new ParalaxLayer(layer);
  }

  ngAfterViewInit(): void {
    this.layers = this.layersQuery.toArray().map(l => this.createLayer(l));
    this.layersQuery.changes.subscribe(layers => {
      console.log('onChangeQuery', layers);
      //this.layers = layers;
    });
    setInterval(() => {
      this.layers.forEach(layer => layer.updatePosition());
    }, 1);
  }

}
