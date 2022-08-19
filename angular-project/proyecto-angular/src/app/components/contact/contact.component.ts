import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    public widthSlider: number = 0;
    public anchuraToSlider : number = 0;
    public set_captions: boolean;
    public captions: boolean;

  constructor() { 

    this.captions = false;
    this.set_captions = false;
  }

  ngOnInit(): void {
    

  }

  cargarSlider(){
    this.anchuraToSlider = 0;
    this.captions = false;
    setTimeout(() =>{
      this.captions = this.set_captions;
      this.anchuraToSlider = this.widthSlider;
    }, 10);
    
  }
}
