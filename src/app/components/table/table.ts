import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

enum VideoFormat {
  DVD = 'DVD',
  BLU_RAY = 'Blu-ray',
  BLU_RAY_4K = '4K Blu-ray'
};

interface MovieData {
  title: string;
  year: number;
  formatVideo: VideoFormat;
  formatAudio: string;
  director: string;
  genres: string[];
  collection: string;
  tags: string[];
}

@Component({
  selector: 'app-table',
  imports: [KeyValuePipe, TableModule],
  standalone: true,
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table implements OnInit {
  public readonly COLUMNS = [
    'title',
    'year',
    'formatVideo',
    'formatAudio',
    'director',
    'genres',
    'collection',
    'tags'
  ];
  public readonly TABLE_HEADERS = [
    'Title',
    'Year',
    'Video Format',
    'Audio Format',
    'Director',
    'Genres',
    'Collection',
    'Tags'
  ];
  public data: MovieData[] = [];
  public customSort() {
   return 0; 
  }

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        title: 'Mad Max: Fury Road',
        year: -1,
        formatVideo: VideoFormat.BLU_RAY,
        formatAudio: 'Dolby Atmos 5.1',
        director: 'FOO BAR',
        genres: ['sci-fi'],
        collection: '',
        tags: ['mad max']
      }
    ];
  }
}
