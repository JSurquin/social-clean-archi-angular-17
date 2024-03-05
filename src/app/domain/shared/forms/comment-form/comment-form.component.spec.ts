import { ComponentFixture, TestBed } from '@angular/core/testing';

import CommentFormComponent from './comment-form.component';
import { CommentGateway } from '../../../ports/comment.gateway';
import { CommentAdapterService } from '../../../adapters/comment/comment.adapter.service';
import { provideHttpClient } from '@angular/common/http';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentFormComponent],
      providers: [
        { provide: CommentGateway, useClass: CommentAdapterService },
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
