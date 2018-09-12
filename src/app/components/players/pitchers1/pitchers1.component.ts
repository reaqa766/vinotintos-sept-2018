import { Component, OnInit } from '@angular/core';

import { PlayerInterface  } from '../../../models/playerInterface';

import { PlayeridService  } from '../../../services/playerid.service';

import { Router, ActivatedRoute  } from '@angular/router';



@Component({
  selector: 'app-pitchers1',
  templateUrl: './pitchers1.component.html',
  styleUrls: ['./pitchers1.component.css']
})
export class Pitchers1Component implements OnInit {
    players: PlayerInterface[];
    idPlayer: string;
    // editState: boolean = false;
    // playerToEdit: PlayerInterface;
    player: PlayerInterface = {
    id: '',
    name: '',
    Avg: '' ,
    BBOLAS:'' ,
    BBOLASP: '',
    BR:'' ,
    Birdthdate: '',
    Region: '',
    CA: '',
    CE: '',
    CLIMP: '',
    CSUC: '',
    EFECT: '',
    Gldate: '',
    HPERM: '',
    HR: '',
    INNP: '',
    PCHE: '',
    PCHSRE: '',
    Position: '',
    VB: '',
    hits: '',
    hitsPermte: '',
    lastname: '',
    team: ''
     };
  
  
    constructor(
      private playeridService: PlayeridService,
      private router: Router,
      private route: ActivatedRoute
    ) {}
  
  
    
    ngOnInit() {
      this.playeridService.getPlayers().subscribe(players => {
        // console.log(players);
        this.players = players;
      })
      }
  
      onSavePlayer(){
        if(this.player.name != '' && this.player.lastname != '') {
          this.playeridService.addPlayer(this.player);
          this.player.name='';
          this.player.lastname='';
          this.player.INNP='';
          this.player.CLIMP='';
          this.player.CSUC='';
          this.player.HPERM='';
          this.player.PCHSRE='';
          this.player.hitsPerm='';
          this.player.Region='';
          this.player.Position='';
          this.player.team='';
          this.player.PCHE='';
          this.player.BBOLASP='';
  
  
        }} 
  
    
      // this.playeridService.getOnePlayer().subscribe(player => {
      // console.log(player)
  
      // this.getDetallesPlayer();
  
  
    // getDetallesPlayer() {
    //   this.idPlayer = this.route.snapshot.params['id'];
    //   this.playerIdService.getOnePlayer(this.idPlayer).subscribe( player => this.player = player);
    // }
  
    // onModificarPlayer({value}: {value: PlayerInterface}) {
    //   value.id = this.idPlayer;
    //   this.playeridService.updateplayer(value);
    //   this.router.navigate(['/details/' + this.idPlayer]);
    // }
  
  
    // onSavePlayer({value}: {value: PlayerInterface}) {
    // console.log(value);
    // }
  
    // }
   
  
  
      }
   