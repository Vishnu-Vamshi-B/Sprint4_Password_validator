import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceProject1Component } from './workspace-project1.component';

describe('WorkspaceProject1Component', () => {
  let component: WorkspaceProject1Component;
  let fixture: ComponentFixture<WorkspaceProject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceProject1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
