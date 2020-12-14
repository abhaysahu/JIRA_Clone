import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient:HttpClient,private router: Router,
    private errorHandlingService: ErrorHandlingService) { }


    TicketDataSave(task,boardId)
  {
    // const token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })
    const headers = this.errorHandlingService.getauthorization()

    const companyID = sessionStorage.getItem('companyId');

    return this.httpClient.post<any>(environment.webapiUrl+`api/company/${companyID}/board/${boardId}`,task, { headers: headers })
  }
}
