import { Component, forwardRef } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

const tabBsGroupProviders = [
  {
    provide: TabGroupComponent,
    useExisting: forwardRef(() => TabBsGroupComponent)
  }
]

@Component({
  selector: 'app-tab-bs-group',
  templateUrl: './tab-bs-group.component.html',
  styleUrl: './tab-bs-group.component.css',
  // providers: [
  //   {
  //     provide: TabGroupComponent,
  //     useExisting: TabBsGroupComponent,
  //     // useClass: SomeClass,
  //     // useValue: new SomeClass(),
  //     // useFactory: (configService) => {return configService},
  //     // deps: [ConfigurationService],
  //     // multi:  
  //   }
  // ]
  providers: tabBsGroupProviders
})
export class TabBsGroupComponent extends TabGroupComponent{

}
