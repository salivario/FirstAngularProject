import { Component } from '@angular/core';
import { Observable, map, filter, Subscription} from 'rxjs';
import { IClient } from 'src/app/interfaces/iclient';
import { IClients } from 'src/app/interfaces/iclients';
import { ClientReturnerService } from '../../services/client-returner.service'
import { IProducts } from 'src/app/interfaces/products';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  requests!: IClients[];
  requestsSub!: Subscription;
  constructor(private ClientReturnerService: ClientReturnerService) { }
  ngOnInit() {
    this.requestsSub = this.ClientReturnerService.getRequests().subscribe((data)=>{
      this.requests = data
    })
    
  }

  deleteClient(id: number){
    console.log(id)
    this.ClientReturnerService.deleteClient(id).subscribe(()=> this.requests.find( (item)=>{
      if(id === item.id){
        let idx = this.requests.findIndex((data)=>data.id === id)
        this.requests.splice(idx, 1)
      }
  }))
  }

}
