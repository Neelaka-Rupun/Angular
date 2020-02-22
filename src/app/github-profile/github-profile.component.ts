import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubFollowersComponent } from '../github-followers/github-followers.component';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //snapshot use the original paramMap to get the id insted of using the observerbale
    // const id  = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    //Using the observerble to get the paramMap id
    this.route.paramMap.
      subscribe(params => {
        const id = +params.get('id');
        console.log(id);
      });

    }
    submit() {
      this.router.navigate(['/followers'], {
        queryParams: { page: 1, order: 'newst'}
      });
  }

}
