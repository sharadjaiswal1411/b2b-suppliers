import { Component ,OnInit} from '@angular/core';
import { FormGroup , Validators,FormControl}  from '@angular/forms';
import {Product} from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  product:Product;
  exform : FormGroup;
  constructor (private productService:ProductService) { }
  
 
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'metric_id': new FormControl(null,Validators.required),
      'featured_categories': new FormControl(null,Validators.required),
      'price': new FormControl(null,Validators.required),
      'category_id': new FormControl(null,Validators.required),
      'brand_id': new FormControl(null,Validators.required),
      'supplier_id': new FormControl(null,Validators.required),
     'main_image': new FormControl(null,null),
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
    
     this.product=  this.exform.value;
     this.productService.saveProduct(this.product).subscribe(
      (product)=>{
        swal.fire("Good job!", "Product has been saved successfully!", "success");
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
