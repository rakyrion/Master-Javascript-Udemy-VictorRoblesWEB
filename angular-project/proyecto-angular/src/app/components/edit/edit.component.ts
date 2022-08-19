import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project: any;
  public status: string = '';
  public edit_status: string = '';
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar proyecto";
    this.project = new Project('','','','',2022,'','');
    this.filesToUpload = [];
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

  onSubmit(form: any){
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          

          // Subir la imagen
          if(this.filesToUpload.length){
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any) => {
              
                this.save_project = response.project;
                
                this.edit_status = 'success';
                location.reload();
              })
          }else{
            this.save_project = response.project;
            this.edit_status = 'success';
          }
         

          
        }else{
          this.edit_status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = fileInput.target.files;
  }

}
