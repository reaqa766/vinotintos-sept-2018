import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { PlayerInterface } from '../models/playerInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersCollection: AngularFirestoreCollection<PlayerInterface>;
  players: Observable<PlayerInterface[]>;
  playerDoc: AngularFirestoreDocument<PlayerInterface>;


  constructor(public afs: AngularFirestore) {
    // this.playersCollection = afs.collection<PlayerInterface>('players');
    this.playersCollection = afs.collection<PlayerInterface>('players');
    this.players = this.playersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PlayerInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  getPlayers() {
    return this.players;
  }
}