import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.scss']
})
export class UpVoteComponent implements OnInit {
@Input() count: number;
@Input() set voted(val) {
  this.iconColor = val ? 'red' : 'black';
} boolean;
@Output() vote = new EventEmitter();
faHearth = faHeart;
public iconColor: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
  this.vote.emit({});
  }
}
