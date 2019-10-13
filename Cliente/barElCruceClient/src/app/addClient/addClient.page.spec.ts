import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addClientPage } from './addClient.page';

describe('addClientPage', () => {
  let component: addClientPage;
  let fixture: ComponentFixture<addClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addClientPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
