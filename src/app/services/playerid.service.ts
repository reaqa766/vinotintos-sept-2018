import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { PlayerInterface } from '../models/playerInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlayeridService {
  playerCollection: AngularFirestoreCollection<PlayerInterface>;
  playerDoc: AngularFirestoreDocument<PlayerInterface>;
  players: Observable<PlayerInterface[]>;
  player: Observable<PlayerInterface>;
  
     constructor(
       public afs: AngularFirestore) {
        //  this.players = this.afs.collection('players').valueChanges();
        this.playerCollection = afs.collection<PlayerInterface>('players', ref => ref.orderBy('name', 'asc'));
        this.players = this.getPlayers()
        
  
        //  this.players = this.afs.collection('players', ref => ref);
       }
  
    getPlayers() {
      let players = this.playerCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as PlayerInterface;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      return players;
  }
  
    addPlayer(player: PlayerInterface){
    this.playerCollection.add(player);
  }
  
    deletePlayer(player: PlayerInterface) {
      this.playerDoc = this.afs.doc(`players/${player.id}`);
      this.playerDoc.delete();
    
  
    }
  
    updatePlayer(player: PlayerInterface) {
      this.playerDoc = this.afs.doc(`players/${player.id}`);
      this.playerDoc.update(player);
    }
  
  }