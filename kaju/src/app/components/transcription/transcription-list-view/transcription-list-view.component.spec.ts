import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionListViewComponent } from './transcription-list-view.component';

describe('TranscriptionListViewComponent', () => {
  let component: TranscriptionListViewComponent;
  let fixture: ComponentFixture<TranscriptionListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptionListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
