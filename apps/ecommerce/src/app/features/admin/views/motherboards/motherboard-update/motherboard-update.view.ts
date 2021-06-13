import { Component, OnInit } from '@angular/core';
import { Motherboard } from 'apps/ecommerce/src/app/commons/interfaces/motherboard.interface';
import { MotherboardsHttpService } from 'apps/ecommerce/src/app/services/motherboards-http.service';

@Component({
  templateUrl: './motherboard-update.view.html',
  styleUrls: ['./motherboard-update.view.css']
})
export class MotherboardUpdateView implements OnInit {

  motherboards: Motherboard[] = [];

  constructor(private motherboardsServices: MotherboardsHttpService) { }

  ngOnInit(): void {
    this.motherboardsServices.getAll().subscribe(

      data => this.motherboards = data

    )
  }

}
