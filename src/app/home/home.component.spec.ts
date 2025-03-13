/**
 * Here is were you will write all the tests for the HomeComponent
 * 
 * The test cases you will write for this component are:
 * 1. should create
 * 2. should render
 * 3. should have a title of 'Task Manager | Lexis Nexis Hackathon'
 * 4. should render the app-tasks-list component
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
