import Task from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
//import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {

	api_url = 'http://localhost:3000';
	toDoListUrl = `${this.api_url}/api/ToDoList/`;
	constructor(private http: HttpClient) {}


	//GET
	getTasks(): Observable<Task[]>{
		return this.http.get(this.toDoListUrl).pipe(
		map(res  => { 
			 return (res as any) ["data"].docs as Task[]; 
		}));
	}

	// getData(): Observable<any> {
	// 	return this.http.get('api/endpoint').pipe(
	// 		map(response => {
	// 		  return response;
	// 		})
	// 	  );
	//   }

	//POST
	createTask(task: Task): Observable<any>{
		return this.http.post(`${this.api_url}/api/createTask/`, task);
	}

	//PUT
	editTask(task: Task){
		let editUrl = `${this.toDoListUrl}`;
		return this.http.put(editUrl, task);
	}

	//DELETE
	deleteTask(id: string): any{
		let deleteUrl = `${this.toDoListUrl}/${id}`
		return this.http.delete(deleteUrl).pipe(map(res  => {
      		return res;
      	}))
  	}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}