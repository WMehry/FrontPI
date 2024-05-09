import { ERole } from './role';

export class RegisterRequest {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public role: ERole[] // Assuming Role is defined similarly in Angular
  ) {}
}