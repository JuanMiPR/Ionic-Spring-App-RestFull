import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { searchClientPage } from './searchClient.page';

describe('searchClienttPage', () => {
  let component: searchClientPage;
  let fixture: ComponentFixture<searchClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [searchClientPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(searchClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
