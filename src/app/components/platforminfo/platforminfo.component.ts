import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
@Component({
  selector: 'app-platforminfo',
  templateUrl: './platforminfo.component.html',
  styleUrls: ['./platforminfo.component.css']
})
export class PlatforminfoComponent implements OnInit {

  constructor(public platform: Platform) { }

  ngOnInit(): void {
  }

}
