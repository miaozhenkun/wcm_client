import { Component, ViewContainerRef } from '@angular/core';
import { ComponentsHelper } from 'ng2-bootstrap/components/utils/components-helper.service'
import './rxjs-operators';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-light bg-faded top-nav">
      <a class="navbar-brand" routerLink="">SINOWCM</a>
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="demo" routerLinkActive="active">DEMO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="website" routerLinkActive="active">站点管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="system" routerLinkActive="active">系统管理</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .top-nav .active{
      border-bottom: 2px solid #5F5151;
    }
  `]
})
export class AppComponent {

  title:string = '欢迎访问wcm';

  private viewContainerRef: ViewContainerRef;

  public constructor(componentsHelper:ComponentsHelper, viewContainerRef:ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    componentsHelper.setRootViewContainerRef(viewContainerRef)
  }

}
