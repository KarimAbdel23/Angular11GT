import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Processor } from 'apps/ecommerce/src/app/commons/interfaces/processor.interface';
import { ProcessorsHttpService } from 'apps/ecommerce/src/app/services/processors-http.service';

@Component({
  templateUrl: './processor-create.view.html',
  styleUrls: ['./processor-create.view.css']
})
export class ProcessorCreateView implements OnInit {

  //titleField:FormControl = new FormControl();
  processor: Processor;
  registroGuardado = false;

  skuField:FormControl = new FormControl('', [Validators.required ]);
  familyField:FormControl = new FormControl();
  modelField:FormControl = new FormControl();
  socketField:FormControl = new FormControl();
  coresField:FormControl = new FormControl();
  brandField:FormControl = new FormControl();
  descriptionField:FormControl = new FormControl();
  rgdField:FormControl = new FormControl();
  frecuencyField:FormControl = new FormControl();
  promotionField:FormControl = new FormControl();
  piecesField:FormControl = new FormControl();
  priceField:FormControl = new FormControl();
  beforePriceField:FormControl = new FormControl();
  costField:FormControl = new FormControl();
  percentageField:FormControl = new FormControl();
  validUntilField:FormControl = new FormControl();
  imageField:FormControl = new FormControl();

  constructor( private processorService: ProcessorsHttpService ) { }

  ngOnInit(): void {
  }

  saveProcessor(): void {
      console.log(this.skuField.value);
      this.processor.SKU = this.skuField.value;

      this.processorService.save(this.processor).subscribe(
        data => this.registroGuardado = data
      )
  }

}
