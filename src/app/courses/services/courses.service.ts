import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'Frontend',
      },
      {
        _id: '2',
        name: 'React',
        category: 'Frontend',
      },
      {
        _id: '3',
        name: 'Vue',
        category: 'Frontend',
      },
      {
        _id: '4',
        name: 'Express',
        category: 'Backend',
      },
      {
        _id: '5',
        name: 'Django',
        category: 'Backend',
      },
      {
        _id: '6',
        name: 'Flask',
        category: 'Backend',
      },
    ];
  }
}
