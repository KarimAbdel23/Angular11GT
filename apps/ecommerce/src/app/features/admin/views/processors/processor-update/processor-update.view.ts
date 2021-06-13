import { Component, OnInit } from '@angular/core';
import { Processor } from 'apps/ecommerce/src/app/commons/interfaces/processor.interface';
import { ProcessorsHttpService } from 'apps/ecommerce/src/app/services/processors-http.service';

@Component({
  templateUrl: './processor-update.view.html',
  styleUrls: ['./processor-update.view.css']
})
export class ProcessorUpdateView implements OnInit {
  processors: Processor[] = [];

  constructor(private processorsServices: ProcessorsHttpService) { }

  ngOnInit(): void {
    this.processorsServices.getAll().subscribe(

      data => this.processors = data

    )
  }

}
