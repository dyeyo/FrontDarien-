export interface TaskRequest {
  id?: number;
  title: string;
  description: string;
  due_date: string;
}

export interface TaskRespose {
  id: number;
  title: string;
  description: string;
  due_date: string;
  completed: number;
  user: {name : string; email: string};
}
