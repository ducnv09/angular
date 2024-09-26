import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit, OnChanges {
  private _progress = 50;
  get progress() {
    return this._progress;
  }

  @Input() set progress(val: number) {
    //validation for validation
    if (typeof val !== "number") {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    } 
    this._progress = val;
  }



  // @Input() progress = 20; // Correctly defining the progress as a number
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
  // @Input('progress-color') progressColor = 'tomato';
  //         external           internal

  constructor() {
    // console.log({
    //   progress: this.progress,
    //   backgroundColor: this.backgroundColor,
    //   progressColor: this.progress
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('onChange', {
    //   progress: this.progress,
    //   backgroundColor: this.backgroundColor,
    //   progressColor: this.progressColor
    // });
  }

  ngOnInit(): void {
    // console.log('onInit', {
    //   progress: this.progress,
    //   backgroundColor: this.backgroundColor,
    //   progressColor: this.progressColor
    // });
  }
}

// new ProgressBarComponent(); //invoke