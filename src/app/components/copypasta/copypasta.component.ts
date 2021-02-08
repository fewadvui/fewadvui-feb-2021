import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'

@Component({
  selector: 'app-copypasta',
  templateUrl: './copypasta.component.html',
  styleUrls: ['./copypasta.component.css']
})
export class CopypastaComponent implements OnInit {

  value = 'This is some default stuff';
  constructor(private clipboardService: Clipboard) { }

  ngOnInit(): void {
  }

  doIt(): void {
    this.clipboardService.copy('A Secret Message Just For You');

  }
}
