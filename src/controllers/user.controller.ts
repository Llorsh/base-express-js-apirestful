import { Request, Response, NextFunction } from 'express';
import { User } from "../entities";
import { HttpApiResponse } from "../entities/http.api.response";

export default class UserController {

  /**
   * Lista de recursos
   * @param req
   * @param res
   */
  list(req: Request, res: Response, next: NextFunction): void {
    const timeStart = new Date().getTime();
    try {

      const users: User[] = [];
      users.push(new User(1, "Juan", "Juan es un usuario", "Juan es un usuario", new Date(), new Date(), new Date()));
      users.push(new User(2, "Pedro", "Pedro es un usuario", "Pedro es un usuario", new Date(), new Date(), new Date()));
      users.push(new User(3, "Maria", "Maria es un usuario", "Maria es un usuario", new Date(), new Date(), new Date()));

      const response = new HttpApiResponse({
        data: users,
        time: new Date().getTime() - timeStart
      });

      res.send(response);
    } catch (error) {

      next(error)
    }
  }

  /**
   * Obtiene un recurso
   * @param req
   * @param res
   */
  get(req: Request, res: Response, next: NextFunction): void {

  }

  /**
   * Crear un recurso
   * @param req
   * @param res
   */
  create(req: Request, res: Response, next: NextFunction): void {

  }

  /**
   * Actualiza un recurso
   * @param req
   * @param res
   */
  update(req: Request, res: Response, next: NextFunction): void {

  }

  /**
   * Elimina un recurso
   * @param req
   * @param res
   */
  delete(req: Request, res: Response, next: NextFunction): void {

  }

}