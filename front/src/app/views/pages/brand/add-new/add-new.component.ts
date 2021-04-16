import { Component ,OnInit} from '@angular/core';
import {FormGroup , Validators,FormControl}  from '@angular/forms';
import {Brand} from 'src/app/models/brand';
import {BrandService} from 'src/app/services/brand.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class  AddNewComponent implements OnInit {
  brand:Brand;
  exform : FormGroup;

  constructor(private brandService:BrandService) { }
 
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'about': new FormControl(null,Validators.required),
      'logo': new FormControl(null,null),
      'featured': new FormControl(null,null),
      'meta_title': new FormControl(null,null),
      'meta_description': new FormControl(null,null),
      'status': new FormControl('Inactive')
     });
  }
  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }
  submitForm(){
    if(this.exform.valid){
    
     this.brand=  this.exform.value;
     this.brandService.saveBrand(this.brand).subscribe(
      (brand)=>{
        swal.fire("Good job!", "Brand has been saved successfully!", "success");
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

openFileBrowser(event: any) {
  event.preventDefault();
  let element: HTMLElement = document.querySelector("#fileUploadInputExample") as HTMLElement;
  element.click()
}
handleFileInput(event: any) {
  if (event.target.files.length) {
    let element: HTMLElement = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info") as HTMLElement;
    let fileName = event.target.files[0].name;
    element.setAttribute( 'value', fileName)
  }
}
}
