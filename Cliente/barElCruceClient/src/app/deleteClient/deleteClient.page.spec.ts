import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { deleteClientPage } from './deleteClient.page';

describe('deleteClientPage', () => {
  let component: deleteClientPage;
  let fixture: ComponentFixture<deleteClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [deleteClientPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(deleteClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
