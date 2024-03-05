import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeedComponent } from './create-feed.component';
import { FeedGateway } from '../../../ports/feed.gateway';
import { FeedAdapterService } from '../../../adapters/feed/feed.adapter.service';
import { provideHttpClient } from '@angular/common/http';

describe('CreateFeedComponent', () => {
  let component: CreateFeedComponent;
  let fixture: ComponentFixture<CreateFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFeedComponent],
      providers: [
        {
          provide: FeedGateway,
          useClass: FeedAdapterService,
        },
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    expect(component.createFeedForm).toBeTruthy();
  });

  it('should have invalid form by default', () => {
    expect(component.createFeedForm.valid).toBeFalsy();
  });

  it('should have valid form when all fields are filled', () => {
    component.createFeedForm.controls['description'].setValue('Description');
    expect(component.createFeedForm.valid).toBeTruthy();
  });
});
