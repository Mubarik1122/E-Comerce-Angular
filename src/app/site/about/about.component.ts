import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  formValue!: FormGroup;
  team1= require("./../../../json/team.json");
  constructor() { }

  ngOnInit(): void {
  }

}
