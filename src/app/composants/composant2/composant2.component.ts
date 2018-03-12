import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composant2',
  templateUrl: './composant2.component.html',
  styleUrls: ['./composant2.component.css']
})
export class Composant2Component implements OnInit {

  titre: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(v => this.titre = v.titre);
  }

}
