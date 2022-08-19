import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project: any;
  public status: string = '';
  public edit_status: string = '';
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear proyectos";
    this.project = new Project('','','','',2022,'','');
    this.filesToUpload = [];
    this.url = Global.url;

   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
  
    // Guardar datos básicos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          

          // Subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image').then((result:any) => {
            
            this.save_project = response.project;

            console.log("Siguiente linea el result")
            console.log(result);
            
            this.status = 'success';
            
            form.reset();
          })

          
        }else{
          this.status = 'failed';
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
