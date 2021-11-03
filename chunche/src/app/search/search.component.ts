import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  files: File[] = [];
  content:any[] =[]
  async onSelect(event: any) {
    console.log(event);
    console.log(this.files)
    this.files.push(...event.addedFiles);
    await this.getData()
    console.log(await this.content)
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  async getData(){
    await this.http.get<any>('localhost:8080/python').subscribe(data => {
      this.content = data;
    })
  }
}
