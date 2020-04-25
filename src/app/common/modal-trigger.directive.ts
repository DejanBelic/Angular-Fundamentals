import {Directive, OnInit, Inject, ElementRef, Input} from '@angular/core';
import {JQUERY_TOKEN} from './jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  // tslint:disable-next-line:no-input-rename
  @Input() appModalTrigger: string;

  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  ngOnInit() {
    console.log(this.appModalTrigger)
     this.el.addEventListener('click', e => {

     this.$(`#${this.appModalTrigger}`).modal({});
    });
  }
}
