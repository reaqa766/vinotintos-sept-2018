import { Component, OnInit } from '@angular/core';

import { PlayerInterface  } from '../../../models/playerInterface';

import { PlayeridService  } from '../../../services/playerid.service';

import { Router, ActivatedRoute  } from '@angular/router';



@Component({
  selector: 'app-pitcherste',
  templateUrl: './pitcherste.component.html',
  styleUrls: ['./pitcherste.component.css']
})
export class PitchersteComponent implements OnInit {
  players: PlayerInterface[];
  idPlayer: string;
  // editState: boolean = false;
  // playerToEdit: PlayerInterface;
  player: PlayerInterface = {
  id: '',
  name: '',
  Avgte: '' ,
  BBOLASte:'' ,
  BBOLASPte: '',
  BRte:'' ,
  Birdthdate: '',
  CAte: '',
  CEte: '',
  CLIMPte: '',
  CSUCte: '',
  EFECTte: '',
  Gldate: '',
  HPERMte: '',
  HRte: '',
  INNPte: '',
  PCHEte: '',
  PCHESR: '',
  Position: '',
  VBte: '',
  hitste: '',
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
        this.player.INNPte='';
        this.player.CLIMPte='';
        this.player.CSUCte='';
        this.player.HPERMte='';
        this.player.PCHSREte='';
        this.player.hitsPermte='';
        this.player.Region='';
        this.player.Position='';
        this.player.team='';
        this.player.PCHE='';
        this.player.BBOLASPte='';


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
 
