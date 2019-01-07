export type TodoItem = {
  id: string,
  completed: boolean,
  message: string,
}


export namespace API {
  export namespace add {
    export const endpoint = '/add';
    export type Request = {
      message: string
    }
    export type Response = {
      id: string
    }
  }
}