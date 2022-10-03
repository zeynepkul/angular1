import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private todoService:TodoService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      title:['', Validators.required],
      userId:['',Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      this.todoService.add(productModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success("Ürün eklendi", "Başarılı")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      })

    }else{
      this.toastrService.error("Form Eksik","Dikkat");
    }
  }

}
