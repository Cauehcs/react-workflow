export class User {
  public name: string;
  public email: string;
  public photo: string;
  public role: string;
  public team: string;

  constructor(
    name: string,
    email: string,
    photo: string,
    role: string,
    team: string
  ) {
    this.name = name;
    this.email = email;
    this.photo = photo;
    this.role = role;
    this.team = team;
  }
}
