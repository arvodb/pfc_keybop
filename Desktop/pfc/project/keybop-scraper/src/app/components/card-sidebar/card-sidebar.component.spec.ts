import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSidebarComponent } from './card-sidebar.component';

describe('CardSidebarComponent', () => {
  let component: CardSidebarComponent;
  let fixture: ComponentFixture<CardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
