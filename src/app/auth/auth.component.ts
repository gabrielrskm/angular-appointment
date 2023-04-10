import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthService } from '../core/firebase/auth.service';
import { UserInformation } from '../core/interface/userInfo.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {

    service = inject(AuthService)
    route  = inject(Router)
    result$: Observable<UserInformation | null> = new BehaviorSubject(null);
    init : Subscription = new Subscription();
    charge : boolean = false

    ngOnInit() {
        this.result$ = this.service.getUserInfo();
        this.init = this.result$.subscribe((value) => {
            
            if (value === null) this.charge = true;
            if (value)  {
                this.charge = false;
                if (value.role === 'admin') this.route.navigate(['/admin']);
                else this.route.navigate(['/appointment']);
            }
        
            
        })
    }

    ngOnDestroy(): void {
        this.init.unsubscribe();
    }

}
