import { Subject } from 'rxjs/Subject';

export class CommonService {
    private _user = null;
    private _userSource = new Subject<object>();
    public userUpdated$ = this._userSource.asObservable();
    
    get user(): object {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    
    set user(user: object) {
        this._user = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    
    updateUser(user: object) {
        this._userSource.next(user); // Emitting the value to the subscribers
    }

    removeUser() {
        localStorage.removeItem('currentUser');
        this._userSource.next({});
    }

    isAuthenticated() {
        if (this.user === null) {
            this.removeUser();
            return false;
        }
        return true;
    }
}
