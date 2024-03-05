import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { UserGateway } from '../ports/user.gateway';
import { UserAdapterService } from '../adapters/user/user.adapter.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        SearchBarComponent,
        FormsModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: UserGateway,
          useClass: UserAdapterService,
        },
        provideHttpClient(),
      ],
    }).compileComponents();
  });

  // sanity test
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // smoke test
  it(`should have the 'final_app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('final_app');
  });

  it('should render title in navbar component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title')?.textContent).toContain(
      'Angular Social'
    );
  });

  // integration test
});
