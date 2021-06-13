import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../../../commons/interfaces/motherboard.interface';
import { LoggerService } from '../../../services/logger.service';
import { MotherboardsHttpService } from '../../../services/motherboards-http.service';

@Component({
  templateUrl: './motherboards.view.html',
  styleUrls: ['./motherboards.view.css']
})
export class MotherboardsView implements OnInit {
  motherboards: Motherboard[] = [];

  constructor(
    public logger: LoggerService,
    private motherboardsHttp: MotherboardsHttpService
  ) { }

  ngOnInit(): void {
    this.motherboardsHttp.getAll()
    .subscribe(
      motherboards => this.motherboards = motherboards

    );

  }

}
