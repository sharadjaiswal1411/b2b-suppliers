import { Component, OnInit } from '@angular/core';
import {  FormGroup , Validators,FormControl}  from '@angular/forms';
import {Metric} from 'src/app/models/metric';
import {MetricService} from 'src/app/services/metric.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {

  metric:Metric;
  exform : FormGroup;

  constructor(private metricService:MetricService) { }
 
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null,Validators.required)
     });
  }
  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }


  submitForm(){
    if(this.exform.valid){
    
     this.metric=  this.exform.value;
     this.metricService.saveMetric(this.metric).subscribe(
      (metric)=>{
        swal.fire("Good job!", "Matrics has been saved successfully!", "success");
        this.exform.reset();


       }); 

    }else{
        Object.keys(this.exform.controls).forEach(field => { // {1}
            const control = this.exform.get(field);            // {2}
            control.markAsTouched({ onlySelf: true });       // {3}
        });
      // alert('Error')
    }
   
  }


}
