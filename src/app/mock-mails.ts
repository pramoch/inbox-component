import { Mail } from './Mail';

const today = new Date();

export const MAILS: any[] = [
  {
    from: {
      name: 'Now TV',
      email: 'nowtv@test.com'
    },
    date: (new Date(today.setHours(15))).toJSON(),
    subject: 'Grab another Pass, you need to be watching this...',
    body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.'
  },
  {
    from: {
      name: 'Investopedia Terms',
      email: 'investopedia@test.com'
    },
    date: (new Date(today.setHours(10))).toJSON(),
    subject: 'What is \'Fibonanci Retracement\'?',
    body: 'Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).'
  },
  {
    from: {
      name: 'ASICS Greater Manchester Marathon',
      email: 'events@human-race.co.uk'
    },
    date: (new Date(today.setHours(7))).toJSON(),
    subject: 'Your chance to take on the marathon',
    body: 'Do you feel inspired to take on one of Europe\'s most highly regarded and popular marathons?'
  },
  {
    from: {
      name: 'Now TV',
      email: 'nowtv@test.com'
    },
    date: '2018-04-26T17:00:00.000Z',
    subject: 'Grab another Pass, you need to be watching this...',
    body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.'
  },
  {
    from: {
      name: 'Investopedia Terms',
      email: 'investopedia@test.com'
    },
    date: '2018-04-25T17:00:00.000Z',
    subject: 'What is \'Fibonanci Retracement\'?',
    body: 'Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).'
  },
  {
    from: {
      name: 'ASICS Greater Manchester Marathon',
      email: 'events@human-race.co.uk'
    },
    date: '2018-04-24T17:00:00.000Z',
    subject: 'Your chance to take on the marathon',
    body: 'Do you feel inspired to take on one of Europe\'s most highly regarded and popular marathons?'
  },
  // no sender
  {
    subject: 'Grab another Pass, you need to be watching this...',
    body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.',
    date: '2018-04-23T17:00:00.000Z',
  },
  // no subject & body
  {
    from: {
      name: 'ASICS Greater Manchester Marathon',
      email: 'events@human-race.co.uk'
    },
    date: '2018-04-22T17:00:00.000Z',
  },
  // no body
  {
    from: {
      name: 'Now TV',
      email: 'nowtv@test.com'
    },
    date: '2018-04-21T17:00:00.000Z',
    subject: 'Grab another Pass, you need to be watching this...'
  },
  // no subject
  {
    from: {
      name: 'Investopedia Terms',
      email: 'investopedia@test.com'
    },
    date: '2018-04-20T17:00:00.000Z',
    body: 'Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).'
  }
];
