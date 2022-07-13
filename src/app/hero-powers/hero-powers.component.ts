import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-powers',
  templateUrl: './hero-powers.component.html',
  styleUrls: ['./hero-powers.component.css']
})
export class HeroPowersComponent implements OnInit {

  @Input() hero? : Hero;
  @Input() vista?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
