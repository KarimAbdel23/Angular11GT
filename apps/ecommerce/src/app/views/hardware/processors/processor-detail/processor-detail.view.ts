import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Processor } from 'apps/ecommerce/src/app/commons/interfaces/processor.interface';
import { LoggerService } from 'apps/ecommerce/src/app/services/logger.service';
import { ProcessorsHttpService } from 'apps/ecommerce/src/app/services/processors-http.service';

@Component({
  templateUrl: './processor-detail.view.html',
  styleUrls: ['./processor-detail.view.css']
})
export class ProcessorDetailView implements OnInit {
  processor: Processor;

  constructor(
    public logger:LoggerService ,
    private processorsHttp: ProcessorsHttpService,
    private activatedRoute: ActivatedRoute
    ) {

  }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.processorsHttp.getOne(id)
      .subscribe(
         processor => this.processor = processor
      )

  }

}
