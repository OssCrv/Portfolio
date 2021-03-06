import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSkillComponent } from './software-skill.component';

describe('SkillsComponent', () => {
  let component: SoftwareSkillComponent;
  let fixture: ComponentFixture<SoftwareSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
