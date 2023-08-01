const Movies = [
  {
    id: 1,
    name: 'Stranger Things',
    description:
      'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    release_date: '2016-07-15T00:00:00Z',
    ticket_price: 5,
    genre: 'Drama, Fantasy, Horror',
    photo_url: 'https://link-to-stranger-things-poster.com',
    country: 'United States',
  },
  {
    id: 2,
    name: 'Money Heist',
    description:
      'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.',
    release_date: '2017-05-02T00:00:00Z',
    ticket_price: 9,
    genre: 'Action, Crime, Mystery',
    photo_url: 'https://link-to-money-heist-poster.com',
    country: 'Spain',
  },
  {
    id: 3,
    name: 'The Witcher',
    description:
      'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    release_date: '2019-12-20T00:00:00Z',
    ticket_price: 1,
    genre: 'Action, Adventure, Drama',
    photo_url: 'https://link-to-the-witcher-poster.com',
    country: 'United States',
  },
  {
    id: 4,
    name: 'The Crown',
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    release_date: '2016-11-04T00:00:00Z',
    ticket_price: 6,
    genre: 'Biography, Drama, History',
    photo_url: 'https://link-to-the-crown-poster.com',
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Dark',
    description:
      'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
    release_date: '2017-12-01T00:00:00Z',
    ticket_price: 8,
    genre: 'Crime, Drama, Mystery',
    photo_url: 'https://link-to-dark-poster.com',
    country: 'Germany',
  },
  {
    id: 6,
    name: 'Breaking Bad',
    description:
      'A high school chemistry teacher turned methamphetamine manufacturing drug dealer teams with a former student.',
    release_date: '2008-01-20T00:00:00Z',
    ticket_price: 7,
    genre: 'Crime, Drama, Thriller',
    photo_url: 'https://link-to-breaking-bad-poster.com',
    country: 'United States',
  },
  {
    id: 7,
    name: 'Narcos',
    description:
      'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.',
    release_date: '2015-08-28T00:00:00Z',
    ticket_price: 9,
    genre: 'Biography, Crime, Drama',
    photo_url: 'https://link-to-narcos-poster.com',
    country: 'United States',
  },
  {
    id: 8,
    name: 'Black Mirror',
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    release_date: '2011-12-04T00:00:00Z',
    ticket_price: 2,
    genre: 'Drama, Sci-Fi, Thriller',
    photo_url: 'https://link-to-black-mirror-poster.com',
    country: 'United Kingdom',
  },
  {
    id: 9,
    name: 'Peaky Blinders',
    description:
      'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
    release_date: '2013-09-12T00:00:00Z',
    ticket_price: 4,
    genre: 'Crime, Drama',
    photo_url: 'https://link-to-peaky-blinders-poster.com',
    country: 'United Kingdom',
  },
  {
    id: 10,
    name: "The Queen's Gambit",
    description:
      'Orphaned at 9, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But, child stardom comes at a price.',
    release_date: '2020-10-23T00:00:00Z',
    ticket_price: 9,
    genre: 'Drama',
    photo_url: 'https://link-to-queens-gambit-poster.com',
    country: 'United States',
  },
  {
    id: 11,
    name: 'Ozark',
    description:
      'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.',
    release_date: '2017-07-21T00:00:00Z',
    ticket_price: 4,
    genre: 'Crime, Drama, Thriller',
    photo_url: 'https://link-to-ozark-poster.com',
    country: 'United States',
  },
  {
    id: 12,
    name: 'Better Call Saul',
    description:
      'The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.',
    release_date: '2015-02-08T00:00:00Z',
    ticket_price: 8,
    genre: 'Crime, Drama',
    photo_url: 'https://link-to-better-call-saul-poster.com',
    country: 'United States',
  },
  {
    id: 13,
    name: 'Mindhunter',
    description:
      'Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.',
    release_date: '2017-10-13T00:00:00Z',
    ticket_price: 3,
    genre: 'Crime, Drama, Thriller',
    photo_url: 'https://link-to-mindhunter-poster.com',
    country: 'United States',
  },
  {
    id: 14,
    name: 'The Umbrella Academy',
    description:
      'A family of former child heroes, now grown apart, must reunite to continue to protect the world.',
    release_date: '2019-02-15T00:00:00Z',
    ticket_price: 9,
    genre: 'Action, Adventure, Comedy',
    photo_url: 'https://link-to-umbrella-academy-poster.com',
    country: 'United States',
  },
  {
    id: 15,
    name: 'Daredevil',
    description:
      'A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil.',
    release_date: '2015-04-10T00:00:00Z',
    ticket_price: 8,
    genre: 'Action, Crime, Drama',
    photo_url: 'https://link-to-daredevil-poster.com',
    country: 'United States',
  },
  {
    id: 16,
    name: 'House of Cards',
    description:
      'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
    release_date: '2013-02-01T00:00:00Z',
    ticket_price: 2,
    genre: 'Drama',
    photo_url: 'https://link-to-house-of-cards-poster.com',
    country: 'United States',
  },
  {
    id: 17,
    name: 'Punisher',
    description:
      "After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as 'The Punisher,' with only one goal in mind: to avenge them.",
    release_date: '2017-11-17T00:00:00Z',
    ticket_price: 9,
    genre: 'Action, Adventure, Crime',
    photo_url: 'https://link-to-punisher-poster.com',
    country: 'United States',
  },
];

const Mapping = {
  index: process.env.ELASTICSEARCH_INDEX,
  body: {
    settings: {
      analysis: {
        analyzer: {
          autocomplete: {
            tokenizer: 'autocomplete',
            filter: ['lowercase', 'english_stop'],
          },
        },
        filter: {
          english_stop: {
            type: 'stop',
            stopwords: '_english_',
          },
        },
        tokenizer: {
          autocomplete: {
            type: 'edge_ngram',
            min_gram: 2,
            max_gram: 10,
            token_chars: ['letter'],
          },
        },
      },
    },
    mappings: {
      properties: {
        name: {
          type: 'text',
          analyzer: 'autocomplete',
          search_analyzer: 'standard',
        },
        description: {
          type: 'text',
          analyzer: 'autocomplete',
          search_analyzer: 'standard',
        },
      },
    },
  },
};

module.exports = {
  Movies,
  Mapping,
};
