import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  dataLoaded=false;
  todos:Todo[]=[];
  filterText="";

  constructor(private todoService:TodoService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
        if(params["userId"]){
            this.getTodosByCategory(params["userId"]);
        }else{
          this.getTodos();
        }
     })
  }

  getTodos(){
    this.todoService.getTodos().subscribe(response=>{
      this.todos = response;
      this.dataLoaded = true;
    })
  }

  getTodosByCategory(userId:number){
    this.todoService.getTodosByCategory(userId).subscribe(response=>{
      this.todos = response;
      this.dataLoaded = true;
    })
  }

  addToCart(product:Todo){
    if(product.userId===2){
      this.toastrService.error("Hata", "Bu ürün sepete eklenemez")
    }else{
      this.toastrService.success("Sepete eklendi", product.title)
      this.cartService.addToCart(product);
    }
  }


}
