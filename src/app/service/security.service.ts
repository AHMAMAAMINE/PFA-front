import { environment } from './../../../environments/environment';
import { User } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient) {
    this.init();
  }

  private label = 'user';
  private roleUrlMapping = new Map<string, string>(); // Change init method
  private url = environment.baseUrl; // configure env
  private urlUser = environment.baseUrl + '/user/name'; // Change with backend link

  private init() {
    this.roleUrlMapping.set('admin', '/admin'); // key is role and value is rest link
    this.roleUrlMapping.set('membre-equipe', '/membre-equipe');
    this.roleUrlMapping.set('chef-equipe', '/chef-equipe');
  }

  public isUserInRole(role: string) {
    return this.getUserRoles().find((item) => item === role);
  }

  public getUrl() {
    const roles = this.getUserRoles();
    if (!roles) { return null; }
    else { return this.url + this.roleUrlMapping.get(roles[0]); }
  }

  public getConnectedUser(): User {
    const user = JSON.parse(localStorage.getItem(this.label));

    if (!user) {
      this.http.get<User>(this.urlUser).subscribe((data) => {
        if (data) {
          this.registerUser(data);
          return data;
        } else {
          return null;
        }
      });
    } else {
      user.roles = Array<string>();
      user.roles.push(user.role);
      return user;
    }
  }

  public registerUser(user: User) {
    return localStorage.setItem(this.label, JSON.stringify(user));
  }

  private getUserRoles(): Array<string> {
    const userConnected = this.getConnectedUser();
    if (userConnected) {
      return userConnected.roles;
    }
    return null;
  }
}
