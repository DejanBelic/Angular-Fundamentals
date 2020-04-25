import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.scss']
})
export class UpVoteComponent implements OnInit {
@Input() count: number;
@Input() voted: boolean;
@Output() vote = new EventEmitter();
faHearth = faHeart;
faHearthBroken = faHeartBroken;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
  this.vote.emit({});
  }
}
