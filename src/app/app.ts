import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from "./components/table/table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Table],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'theatre';
}
