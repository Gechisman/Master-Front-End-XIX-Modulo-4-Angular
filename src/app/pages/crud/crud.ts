import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Task {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-crud',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './crud.html',
  styleUrl: './crud.scss'
})
export class Crud {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Aprender Angular',
      description: 'Familiarizarme con los componentes y servicios.'
    },
    {
      id: 2,
      title: 'Practicar Angular Material',
      description: 'Utilizar los componentes de Material.'
    },
    {
      id: 3,
      title: 'Completar Amazoff',
      description: 'Finalizar el ejercicio de la aplicación.'
    }
  ];

  title = '';
  description = '';

  editingId: number | null = null;
  nextId = 4;

  saveTask(): void {
    if (!this.title.trim() || !this.description.trim()) {
      return;
    }

    if (this.editingId !== null) {
      this.tasks = this.tasks.map(task =>
        task.id === this.editingId
          ? {
              ...task,
              title: this.title,
              description: this.description
            }
          : task
      );
    } else {
      const newTask: Task = {
        id: this.nextId++,
        title: this.title,
        description: this.description
      };

      this.tasks = [...this.tasks, newTask];
    }

    this.resetForm();
  }

  editTask(task: Task): void {
    this.title = task.title;
    this.description = task.description;
    this.editingId = task.id;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);

    if (this.editingId === id) {
      this.resetForm();
    }
  }

  resetForm(): void {
    this.title = '';
    this.description = '';
    this.editingId = null;
  }
}