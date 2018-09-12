import { Component, OnInit } from '@angular/core';

import { PlayerInterface  } from '../../models/playerInterface';

import { PlayeridService  } from '../../services/playerid.service';

import { Router, ActivatedRoute  } from '@angular/router';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
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
  PCHESR: '',
  Position: '',
  VB: '',
  hits: '',
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
        this.player.VB='';
        this.player.CA='';
        this.player.CE='';
        this.player.BR='';
        this.player.HR='';
        this.player.hits='';
        this.player.Region='';
        this.player.Position='';
        this.player.team='';
        this.player.PCHE='';
        this.player.BBOLAS='';


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
 