import { Component } from '@angular/core';
import { Course } from '../models/course';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses = new MatTableDataSource<Course>([
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
  ]);
  displayedColumns = ['name', 'category'];
}
