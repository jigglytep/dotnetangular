import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  pdfSrc = "assets/pdf/LevTsenovoy.PDF";
  constructor() { }

  ngOnInit() {
  }

}
