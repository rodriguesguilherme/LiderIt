import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dogs',
  templateUrl: './list-dogs.component.html',
  styleUrls: ['./list-dogs.component.scss']
})
export class ListDogsComponent implements OnInit {

  selected: any = null;
  dogExist: boolean = false;
  dogs: any[] = [];

  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  ngOnInit() { }

  dogs$ = this.listService.dogs$.pipe(
    map(res => {
      for (const key in res.message) {
        this.dogs.push(key)
        if (res.message.hasOwnProperty(key)) {
          const element = res.message[key];
          for (const x of element) {
            this.dogs.push(key + ' ' + x)
          }
        }
      }
      return this.dogs
    }),
    catchError(error => {
      console.log(error);
      return error;
    })
  )

  filter() {
    if (this.dogs.indexOf(this.selected) >= 0) {
      this.dogExist = true;
    }
  }

  cancel() {
    this.dogExist = false;
  }

  detail(item) {
    this.router.navigate(['/dog-detail', item])
  }

}
