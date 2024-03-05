import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import ProfilComponent from './profil.component';
import { UserGateway } from '../../ports/user.gateway';
import { UserAdapterService } from '../../adapters/user/user.adapter.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilComponent, RouterTestingModule],
      providers: [
        {
          provide: UserGateway,
          useClass: UserAdapterService,
        },
        provideHttpClient(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
