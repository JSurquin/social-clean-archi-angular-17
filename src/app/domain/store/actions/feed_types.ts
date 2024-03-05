export class retrievePost {
  static readonly type = '[Page] Action to retrieve post';
}

export class retrievedPostSuccessFull {
  static readonly type = '[API] SUCCESS TO RETRIEVE POST';
  constructor(public payload: any) {}
}
