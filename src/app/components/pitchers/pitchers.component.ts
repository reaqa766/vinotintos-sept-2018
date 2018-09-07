import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { PlayerInterface } from '../../models/playerInterface';
import { Subject } from '../../../../node_modules/rxjs';
import { resolve } from '../../../../node_modules/@types/q';

@Component({
  selector: 'app-pitchers',
  templateUrl: './pitchers.component.html',
  styleUrls: ['./pitchers.component.css']
})
export class PitchersComponent implements OnInit {

  players: PlayerInterface[];
  // editState: boolean = false;
  // palyerToEdit: PlayerInterface;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayersByRegion("Pitcher").subscribe(players => {
      this.players = players;
      // console.log(players);
    });

  }

  }
