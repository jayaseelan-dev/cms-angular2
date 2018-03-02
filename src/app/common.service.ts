export class CommonService {
    private _user: object;

    get user(): object {
        return this._user;
    }
    
    set user(user: object) {
        this._user = user;
    }
}
