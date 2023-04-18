import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore'

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    firestore = inject(Firestore);
}