import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { UtilHttpService }  from '../../common/util/util-http.service';

@Injectable()
export class UserService {

  constructor (private http: UtilHttpService) {}

  // 获取用户列表
  getUserList (searchParams): Observable<any> {
    return this.http.get("appointapi/doctor", searchParams);
  }

}
