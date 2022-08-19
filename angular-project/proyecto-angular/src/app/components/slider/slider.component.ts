import { Component, Input, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number = 0;
  @Input() etiquetas: boolean = false;
  constructor() { }

  ngOnInit(): void {
    $('#logo').click(function(e:any){
      e.preventDefault();
      $("header").css("background","green")
                .css('height','90px');
    })

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.etiquetas,
      slideWidth: this.anchura
    });
  }

}
