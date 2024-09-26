import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '100day';

  inputType = 'text';

  user = {
    name: 'Duc',
    age: 18
  };

  handler(event: Event) {
    console.log('clicked', event);
  };

  user1 = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "1@gmail.com",
      address: {
        street: "Duong 1",
        suite: "Apt. 556",
        city: "Tp 1",
        zipcode: "92321-2213",
        geo: {
          lat: "-32.3133",
          lng: "81.212"
        }
      },
      phone: "1-213-121-3432 x2141",
      website: "dsadwd.com",
      company: {
        name: "Romage-Crona",
        catchPhrase: "Multi-layered client-server",
        bs: "harness real-time e-market"
      }
    }
    // },
    // {
    //   "id": 2,
    //   "name": "Ervin Howell",
    //   "username": "Antonette",
    //   "email": "2@gmail.com",
    //   "address": {
    //     "street": "Duong 2",
    //     "suite": "Apt. 23",
    //     "city": "Tp 2",
    //     "zipcode": "90566-7771",
    //     "geo": {
    //       "lat": "-37.3159",
    //       "lng": "81.1496"
    //     }
    //   },
    //   "phone": "2-222-555-2435",
    //   "website": "shana.com",
    //   "company": {
    //     "name": "Deckow-Crist",
    //     "catchPhrase": "Proactive didactic contingency",
    //     "bs": "synergize scalable supply-chains"
    //   }
    // },
    // {
    //   "id": 3,
    //   "name": "Clementine Bauch",
    //   "username": "Samantha",
    //   "email": "3@gmail.com",
    //   "address": {
    //     "street": "Duong 3",
    //     "suite": "Suite 847",
    //     "city": "Tp 3",
    //     "zipcode": "92998-3874",
    //     "geo": {
    //       "lat": "-68.6102",
    //       "lng": "101.6651"
    //     }
    //   },
    //   "phone": "3-654-321-6543",
    //   "website": "ramiro.info",
    //   "company": {
    //     "name": "Romaguera-Jacobson",
    //     "catchPhrase": "Face to face bifurcated interface",
    //     "bs": "e-enable strategic applications"
    //   }
    // },
    // {
    //   "id": 4,
    //   "name": "Patricia Lebsack",
    //   "username": "Karianne",
    //   "email": "4@gmail.com",
    //   "address": {
    //     "street": "Duong 4",
    //     "suite": "Apt. 294",
    //     "city": "Tp 4",
    //     "zipcode": "90555-6844",
    //     "geo": {
    //       "lat": "-71.4197",
    //       "lng": "84.3869"
    //     }
    //   },
    //   "phone": "4-213-654-1214",
    //   "website": "kale.biz",
    //   "company": {
    //     "name": "Robel-Corkery",
    //     "catchPhrase": "Multi-tiered zero tolerance productivity",
    //     "bs": "transition cutting-edge web services"
    //   }
    // },
    // {
    //   "id": 5,
    //   "name": "Chelsey Dietrich",
    //   "username": "Kamren",
    //   "email": "5@gmail.com",
    //   "address": {
    //     "street": "Duong 5",
    //     "suite": "Suite 351",
    //     "city": "Tp 5",
    //     "zipcode": "53919-4257",
    //     "geo": {
    //       "lat": "-31.8129",
    //       "lng": "62.5342"
    //     }
    //   },
    //   "phone": "5-333-123-6543",
    //   "website": "demarco.info",
    //   "company": {
    //     "name": "Keebler LLC",
    //     "catchPhrase": "User-centric fault-tolerant solution",
    //     "bs": "revolutionize end-to-end systems"
    //   }
    // },
    // {
    //   "id": 6,
    //   "name": "Mrs. Dennis Schulist",
    //   "username": "Leopoldo_Corkery",
    //   "email": "6@gmail.com",
    //   "address": {
    //     "street": "Duong 6",
    //     "suite": "Apt. 780",
    //     "city": "Tp 6",
    //     "zipcode": "33263",
    //     "geo": {
    //       "lat": "-21.1496",
    //       "lng": "100.415"
    //     }
    //   },
    //   "phone": "6-222-654-1234",
    //   "website": "ola.org",
    //   "company": {
    //     "name": "Considine-Lockman",
    //     "catchPhrase": "Synchronised bottom-line interface",
    //     "bs": "e-enable innovative applications"
    //   }
    // },
    // {
    //   "id": 7,
    //   "name": "Kurtis Weissnat",
    //   "username": "Elwyn.Skiles",
    //   "email": "7@gmail.com",
    //   "address": {
    //     "street": "Duong 7",
    //     "suite": "Apt. 173",
    //     "city": "Tp 7",
    //     "zipcode": "76495-3109",
    //     "geo": {
    //       "lat": "-55.1334",
    //       "lng": "77.6205"
    //     }
    //   },
    //   "phone": "7-213-654-9876",
    //   "website": "elwyn.com",
    //   "company": {
    //     "name": "Johns Group",
    //     "catchPhrase": "Configurable multimedia task-force",
    //     "bs": "generate enterprise e-tailers"
    //   }
    // },
    // {
    //   "id": 8,
    //   "name": "Nicholas Runolfsdottir V",
    //   "username": "Maxime_Nienow",
    //   "email": "8@gmail.com",
    //   "address": {
    //     "street": "Duong 8",
    //     "suite": "Suite 729",
    //     "city": "Tp 8",
    //     "zipcode": "31428-2261",
    //     "geo": {
    //       "lat": "-14.3990",
    //       "lng": "120.7677"
    //     }
    //   },
    //   "phone": "8-213-555-2234",
    //   "website": "jacynthe.com",
    //   "company": {
    //     "name": "Abernathy Group",
    //     "catchPhrase": "Implemented secondary concept",
    //     "bs": "e-enable extensible e-tailers"
    //   }
    // },
    // {
    //   "id": 9,
    //   "name": "Glenna Reichert",
    //   "username": "Delphine",
    //   "email": "9@gmail.com",
    //   "address": {
    //     "street": "Duong 9",
    //     "suite": "Suite 981",
    //     "city": "Tp 9",
    //     "zipcode": "67975",
    //     "geo": {
    //       "lat": "-64.3142",
    //       "lng": "115.6204"
    //     }
    //   },
    //   "phone": "9-123-654-4567",
    //   "website": "conrad.com",
    //   "company": {
    //     "name": "Yost and Sons",
    //     "catchPhrase": "Switchable contextually-based project",
    //     "bs": "aggregate real-time technologies"
    //   }
    // },
    // {
    //   "id": 10,
    //   "name": "Clementina DuBuque",
    //   "username": "Moriah.Stanton",
    //   "email": "10@gmail.com",
    //   "address": {
    //     "street": "Duong 10",
    //     "suite": "Apt. 633",
    //     "city": "Tp 10",
    //     "zipcode": "76495-3109",
    //     "geo": {
    //       "lat": "-38.2386",
    //       "lng": "57.2232"
    //     }
    //   },
    //   "phone": "10-213-555-1212",
    //   "website": "ambrose.net",
    //   "company": {
    //     "name": "Hoeger LLC",
    //     "catchPhrase": "Centralized empowering task-force",
    //     "bs": "target end-to-end models"
    //   }
    // }
  ];

  tags = ['angular', 'typescript', '100days'];

  currentProgress = 70;
}
