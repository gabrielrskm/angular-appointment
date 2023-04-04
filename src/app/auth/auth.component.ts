import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, Subscriber, tap } from 'rxjs';
import { FirebaseService } from 'src/app/core/firebase/auth.service';
import { UserInformation } from '../core/interface/userInfo.interface';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
    router = inject(Router);
    fireService = inject(FirebaseService);
    userInfo$: Observable<UserInformation | null> = new BehaviorSubject(null);
    authSubscription: any;

    ngOnInit() {
        this.userInfo$ = this.fireService.getUserInfo();
        this.authSubscription = this.userInfo$.subscribe(
            (value) => {
                if (!value) return;
                if (value.role === 'admin') this.router.navigate(['/dashboard']);
                else this.router.navigate(['/appointment']);
            }
        )
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }

}
