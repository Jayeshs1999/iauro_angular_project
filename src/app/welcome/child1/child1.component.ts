import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  // changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child1.component.css']
  
})
export class Child1Component implements OnInit {

  @Input() dates;
  constructor() { }

  ngOnInit(): void {
  }

}
