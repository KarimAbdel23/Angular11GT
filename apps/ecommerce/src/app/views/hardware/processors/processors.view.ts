import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';
import { ProcessorsHttpService } from '../../../services/processors-http.service';
import { Processor } from '../../../commons/interfaces/processor.interface';

@Component({
  templateUrl: './processors.view.html',
  styleUrls: ['./processors.view.css']
})
export class ProcessorsView implements OnInit {
  processors: Processor[] = [];

  constructor(
    public logger: LoggerService,
    private processorsHttp: ProcessorsHttpService
    ) {
  }

  ngOnInit(): void {
    this.processorsHttp.getAll()
      .subscribe(
        processors => this.processors = processors

      );
  }

}
