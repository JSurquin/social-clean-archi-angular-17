import { TestBed, inject } from '@angular/core/testing';
import { CommentAdapterService } from './comment.adapter.service';
import { CommentGateway } from '../../ports/comment.gateway';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { User } from '../../model/user';
describe('Comment Adapter Service', () => {
  let httpTestingController: HttpTestingController;
  let serviceTest: CommentGateway;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: CommentGateway,
          useClass: CommentAdapterService,
        },
        //provideHttpClient(),
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    serviceTest = TestBed.inject(CommentGateway);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject(
    [CommentGateway],
    (service: CommentGateway) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should call getAllComments method', inject(
    [CommentGateway],
    (service: CommentGateway) => {
      jest.spyOn(service, 'getAllComments');
      service.getAllComments();
      expect(service.getAllComments).toHaveBeenCalled();
    }
  ));

  it('should call getSpecificComment method', inject(
    [CommentGateway],
    (service: CommentGateway) => {
      jest.spyOn(service, 'getSpecificComment');
      service.getSpecificComment('1');
      expect(service.getSpecificComment).toHaveBeenCalled();
    }
  ));

  it('should call sendComment method', inject(
    [CommentGateway],
    (service: CommentGateway) => {
      jest.spyOn(service, 'sendComment');
      service.sendComment({} as any);
      expect(service.sendComment).toHaveBeenCalled();
    }
  ));

  it('should call updateComment method', inject(
    [CommentGateway],
    (service: CommentGateway) => {
      jest.spyOn(service, 'updateComment');
      service.updateComment({} as any);
      expect(service.updateComment).toHaveBeenCalled();
    }
  ));

  const mockUser: User[] | any = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    },
  ];

  it('should get specific post with id 3', () => {
    //jest.spyOn(service, 'getSpecificComment');

    let myData;

    serviceTest.getAllComments().subscribe((data) => {
      myData = data;
    });

    const req = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );

    req.flush(mockUser);

    expect(myData).toEqual(mockUser);
  });
});
