import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailComponent implements OnInit {

  dogName: string = this.activeRoute.snapshot.params['dogName'];
  dogImage: string;

  constructor(
    private listService: ListService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.dogDetail()
  }

  dogDetail() {
    this.listService.detail(this.dogName).subscribe(
      success => {
        this.dogImage = success.message
        console.log(success)
      },
      error => {
        return error;
      }
    )
  }

  back() {
    this.route.navigate(['/'])
    this.dogName = ' ';
    this.dogImage = ' ';
  }

}
