import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Motherboard } from 'apps/ecommerce/src/app/commons/interfaces/motherboard.interface';
import { LoggerService } from 'apps/ecommerce/src/app/services/logger.service';
import { MotherboardsHttpService } from 'apps/ecommerce/src/app/services/motherboards-http.service';

@Component({
  templateUrl: './motherboard-detail.view.html',
  styleUrls: ['./motherboard-detail.view.css']
})
export class MotherboardDetailView implements OnInit {

  motherboard: Motherboard;

  constructor(
    public logger:LoggerService ,
    private motherboardsHttp: MotherboardsHttpService,
    private activatedRoute: ActivatedRoute
    ) {

  }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.motherboardsHttp.getOne(id)
      .subscribe(
        motherboard => this.motherboard = motherboard
      )

  }

}
