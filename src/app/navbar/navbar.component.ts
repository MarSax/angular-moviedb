import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Results } from '../models/film';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  films: Results[] = [];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  searchMovie(query: string) {
    this.router.navigateByUrl('/films', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/films/'+query], { relativeTo: this.route })); 
  }

}
