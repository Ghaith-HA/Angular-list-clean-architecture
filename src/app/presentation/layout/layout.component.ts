import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { navigationConfig } from 'src/app/config/navigation';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isLoading: boolean = false;
  navigationData: any = [];

  count: number = 0;
  constructor(
    public router: Router,
  ) {
    this.navigationData = navigationConfig;
    this.router.navigate([ '/movie/list' ]);
  }
  setListTo(url: any): void {
    this.router.navigateByUrl(url);
  }
  ngOnInit(): void {}

}
