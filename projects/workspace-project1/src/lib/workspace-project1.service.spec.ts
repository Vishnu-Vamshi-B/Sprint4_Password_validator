import { TestBed } from '@angular/core/testing';

import { WorkspaceProject1Service } from './workspace-project1.service';

describe('WorkspaceProject1Service', () => {
  let service: WorkspaceProject1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceProject1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
