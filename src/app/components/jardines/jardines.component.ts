import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { PlayerInterface } from '../../models/playerInterface';
import { Subject } from 'rxjs';
import { resolve } from 'q';


@Component({
  selector: 'app-jardines',
  templateUrl: './jardines.component.html',
  styleUrls: ['./jardines.component.css']
})
export class JardinesComponent implements OnInit {

  players: PlayerInterface[];
  // editState: boolean = false;
  // palyerToEdit: PlayerInterface;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayersByRegion("Outfield").subscribe(players => {
      this.players = players;
      // console.log(players);
    });

  }

  }
