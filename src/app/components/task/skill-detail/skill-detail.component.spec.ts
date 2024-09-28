import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailComponent } from './skill-detail.component';

describe('SkillDetailComponent', () => {
  let component: SkillDetailComponent;
  let fixture: ComponentFixture<SkillDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillDetailComponent]
    });
    fixture = TestBed.createComponent(SkillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
