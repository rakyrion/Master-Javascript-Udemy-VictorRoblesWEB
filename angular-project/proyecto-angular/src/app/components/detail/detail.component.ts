import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: any;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){ 

    this.url = Global.url;

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this.getProject(id);
    })
  }


  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  deleteProject(id: any){

    if(confirm('¿Seguro que quieres eliminar el proyecto?') == true){
      this._projectService.deleteProject(id).subscribe(
        response => {
          if(response.project){
            this._router.navigate(['/proyectos']);
            alert('El proyecto se ha borrado\nEstamos redirigiendote a la ruta de proyectos');
          }
         
        },
        error => {
          console.log(<any>error);
        }
      ); 
    }else{
      alert('Se ha cancelado el borrado del proyecto');
    }
    
  }
} 
