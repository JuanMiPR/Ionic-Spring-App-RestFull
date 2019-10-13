import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { updateClientPage } from './updateClient.page';

describe('updateClientPage', () => {
  let component: updateClientPage;
  let fixture: ComponentFixture<updateClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [updateClientPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(updateClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
