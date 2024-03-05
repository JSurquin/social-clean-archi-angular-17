import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { SearchBarComponent } from './search-bar.component';
import { UserGateway } from '../../../ports/user.gateway';
import { UserAdapterService } from '../../../adapters/user/user.adapter.service';
import { provideHttpClient } from '@angular/common/http';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let scheduler: TestScheduler;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent],
      providers: [
        {
          provide: UserGateway,
          useClass: UserAdapterService,
        },
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // scheduler.run is a helper function that takes a function that returns an Observable and runs it in a test environment
  it('should respect the marble diagram', () => {
    // scheduler.run(({ cold, hot }) => {
    //   const expected = 'a 500ms b 499ms c 499ms (d|)';
    //   const source = 'a 500ms b 500ms c 500ms d|';
    //   const source$ = cold(source);
    //   const expected$ = cold(expected);
    //   //expect(source$).toBeObservable(expected$);
    // });
  });
});
