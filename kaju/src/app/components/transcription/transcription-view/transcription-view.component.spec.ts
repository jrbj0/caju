import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionViewComponent } from './transcription-view.component';

describe('TranscriptionViewComponent', () => {
  let component: TranscriptionViewComponent;
  let fixture: ComponentFixture<TranscriptionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
