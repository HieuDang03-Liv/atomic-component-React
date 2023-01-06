import { Observable } from 'rxjs'
import { api } from '@configs/api'
import { LoginInfo, VerifiedUser } from './entity'

export class UsersService {
  public login(loginInfo: LoginInfo): Observable<VerifiedUser> {
    return api.post<VerifiedUser>('auth/login', loginInfo) as Observable<VerifiedUser>
  }
}
