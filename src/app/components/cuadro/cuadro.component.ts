import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../../services/player.service';
import { PlayerInterface } from '../../models/playerInterface';
import { componentRefresh } from '../../../../node_modules/@angular/core/src/render3/instructions';


@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {

  players: PlayerInterface[];
  // editState: boolean = false;
  // palyerToEdit: PlayerInterface;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  
      this.playerService.getPlayers().subscribe(players => {
      this.players = players;
      // console.log(players);
    });
  }
  }
