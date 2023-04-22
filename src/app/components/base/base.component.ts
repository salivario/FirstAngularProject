import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/interfaces/products';
import { VisitedListService } from '../../services/visited-list.service'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{
  visited!: IProducts[];
  visit!:IProducts;
  visitedSubscribtion!: Subscription;
  constructor(private VisitedListService: VisitedListService){}
  ngOnInit(){
    this.visited = this.VisitedListService.getVisited();
    console.log(this.visited)
  }
}
