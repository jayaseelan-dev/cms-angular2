import { Subject } from 'rxjs/Subject';

export class CommonService {
    private _user: object;
    private _userSource = new Subject<object>();
    public userUpdated$ = this._userSource.asObservable();

    get user(): object {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    
    set user(user: object) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    updateUser(user: object) {
        this._userSource.next(user);
    }

    removeUser() {
        localStorage.removeItem('currentUser');
        this._userSource.next({});
    }
}
