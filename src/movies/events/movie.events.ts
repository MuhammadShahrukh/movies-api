export class MovieCreatedEvent {
  constructor(public readonly movie: any) {}
}

export class MovieUpdatedEvent {
  constructor(public readonly movie: any) {}
}

export class MovieDeletedEvent {
  constructor(public readonly id: number) {}
}
