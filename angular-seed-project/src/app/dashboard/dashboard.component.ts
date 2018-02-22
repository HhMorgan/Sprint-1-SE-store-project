import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <ngx-main-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet style="color:black;"><p>
      <font size="4">
      It's not enough to say that we're T-16. Our purpose for being a team is: "We come together as a team to support each other, learn from each other, and identify ways that we can better meet the needs of being better programmers." Call it a purpose or a mission -- it doesn't really matter. What matters is that we're learning together and embarking on project together. We disagree about ideas, there's constructive dialogue and dissent, and we push ourselves to the limit. This means that when there's a conflict, we work it out together. We get to know each other more. We listen to each other more. Each member of the team contributes their fair share of the workload and fully understands what their responsibilities are and where they fit in with the running of the project. They feel a sense of belonging to the team, are committed to their work and really care about the success of the project. We are always happy to assist others when they need a helping hand with work. Teams are often more productive when they are also offered support from the university and access to the required resources. Everyone is unique and will be able to offer their own experiences and knowledge that others may not possess. Diversity is needed so that all of the required skills are covered by somebody in the team and each individual can be assigned a particular role on the basis of their strengths and skills.
      </font>
      </p></router-outlet>
    </ngx-main-layout>

  `
})
export class DashboardComponent implements OnInit {
  menu: NbMenuItem[];

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }
}
