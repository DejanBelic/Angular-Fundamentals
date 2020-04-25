import {Directive, OnInit, Inject, ElementRef } from '@angular/core';
import {JQUERY_TOKEN} from './jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;


  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  ngOnInit() {
    console.log(this.$('#simple-modal'))
     this.el.addEventListener('click', e => {
     this.$('#simple-modal').modal({});
    });
  }
}
