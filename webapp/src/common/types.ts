export type TodoItem = {
  id: string,
  completed: boolean,
  message: string,
}


export namespace API {
  export namespace create {
    export const endpoint = '/add';
    export type Request = {
      message: string
    }
    export type Response = {
      id: string
    }
  }
  
  export namespace getAll {
    export const endpoint = '/get-all';
    export type Response = {
      todos: TodoItem[]
    }
  }

  export namespace setAll {
    export const endpoint = '/set-all';
    export type Request = {
      todos: TodoItem[]
    }
  }
}
