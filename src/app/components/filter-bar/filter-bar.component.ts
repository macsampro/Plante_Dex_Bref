import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  @Input() plantsCategorie!: string[];
  categoriesChecked : string[]=[];
  @Output() categItemEvent = new EventEmitter<string[]>();
  searchOption! : string;
  @Output() onEnterSearch = new EventEmitter<string>();

     onCheckCategory(e: Event) {
     console.log(e);     
     const target = e.target as HTMLInputElement;
     console.log("valeur de la checkbox: ", target.value);
     console.log("est t'elle coché ?: ", target.checked);

     if(target.checked){
      if(this.categoriesChecked.length === this.plantsCategorie.length){
        this.categoriesChecked = [];
      }
      this.categoriesChecked.push(target.value);
     }else {
      this.categoriesChecked = this.categoriesChecked.filter((categ)=> categ !== target.value);
     }
     if(this.categoriesChecked.length === 0){
      this.categoriesChecked = [...this.plantsCategorie];
     }
     console.log(this.categoriesChecked);
     // .emit() de notre output devra ce faire a la fin de cet methode
       this.categItemEvent.emit(this.categoriesChecked);
     
    }

    // onSearch(e: Event){
    //   console.log(e,`ca c'est ton e`);
    //   const target = e.target as HTMLInputElement;
    //   console.log(`L'utilisateur recherche : `, target.value);
    //   if(target.value != ""){
    //     this.searchOption = target.value;
    //   }else{
    //     this.searchOption = "";
    //   }
    //   console.log(this.searchOption);
    //   //emit de mon output
    //   this.onEnterSearch.emit(this.searchOption);
    // }


  // onSearching(e) {
  //   this.searchOption = this..filter((user) => {
  //     if (
  //       user.name.first
  //         .toLowerCase()
  //         .includes(
  //           e.target.value.toLowerCase() || user.name.last.toLowerCase()
  //         )
  //     ) {
  //       return true;
  //     }
  //   });

    
}
