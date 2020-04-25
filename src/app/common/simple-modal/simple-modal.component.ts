import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {JQUERY_TOKEN} from '../jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
@Input() title: string;
@Input()  elementId: string;
@Input()  closeOnBodyClick: string;
// @ts-ignore
  @ViewChild('modalContainer') containerEl: ElementRef;
  constructor(@Inject(JQUERY_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLowerCase() === "true") {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
