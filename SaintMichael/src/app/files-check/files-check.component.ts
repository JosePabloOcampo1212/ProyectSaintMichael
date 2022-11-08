import { Component, OnInit } from '@angular/core';
import { CursoDataService } from '../services/curso-data.service';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-files-check',
  templateUrl: './files-check.component.html',
  styleUrls: ['./files-check.component.css']
})
export class FilesCheckComponent implements OnInit {
  idCurso:any;
  programas: string [][];
  constructor(private cursoData: CursoDataService) { 
    this.idCurso = this.cursoData.idCurso;
    this.programas = [];
    this.getFiles();
    console.log(this.programas)
  }

  ngOnInit(): void {
  }

  getFiles(){
    const storage = getStorage();
    const curso = String(this.idCurso);
    const storageRef = ref(storage, `programasDeCurso/${curso}`);

    listAll(storageRef).then( response => {
      response.items.forEach(async (data) => {
        var name = data.name;
        var url = await getDownloadURL(data);
        this.programas.push([name,url]);
        console.log(data.name)
      })
    })
    .catch(error =>{
      console.log(error)
    })
  }

  goFile(url: string){
    window.open(url,"_blank");
  }

}
