const Users = [
  {
    email: 'shahrukh@hotmail.com',
    username: 'shahrukh',
    first_name: 'shahrukh',
    last_name: 'khan',
    password: '123',
  },
];

const Movies = [
  {
    name: 'harry potter',
    description:
      'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
    release_date: new Date(),
    ticket_price: 12.0,
    genre: 'Adventure',
    photo_url:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYGx6w4wW7xmC8h_UdhyzyxhOV4QZofI0lrgZ7JgMkCyqGG5M_',
    country: 'US',
    reviews: [],
  },
  {
    name: 'Spider Man',
    description:
      'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.',
    release_date: new Date(),
    ticket_price: 12.0,
    genre: 'Superhero',
    photo_url:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTb-iTrAmE_x35oWfFcFpgMbFtuG59NXUUoiOn0jMp93POq5YDH',
    country: 'US',
    reviews: [],
  },
  {
    name: 'The witcher',
    description:
      'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.',
    release_date: new Date(),
    ticket_price: 20.0,
    genre: 'Fantasy',
    photo_url:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZkkt9ZesujIficGP_RjI-iH0n-CXUpzXq0jgLtpklKheIVf09',
    country: 'US',
    reviews: [],
  },
];

const Reviews = [
  {
    comment:
      'The Harry Potter series, written by J.K. Rowling, has undoubtedly captivated the hearts and imaginations of millions of readers around the world. With its enchanting blend of magic, friendship, and adventure, this seven-book saga has become a modern-day literary phenomenon.',
  },
  {
    comment:
      'You can tell by the music with the slight hint of dread in it, and the wild, incredible animation, you know this is gonna be a wild ride. Its such an experience',
    rating: 4,
  },
  {
    comment:
      'It is not easy to become the number one trending series globally going into the second season of a convoluted, multi-faceted fantasy storyline, but Witchers showrunner Lauren Schmidt Hissrich has managed to sustain and surpass the momentum of a fabulous inaugural season. Henry Cavill returns as the beleaguered, battle-hardened Witcher-Geralt of Rivia, a biogenetically engineered warrior forever tasked with hunting down this magical realms numerous monsters.',
    rating: 4,
  },
];

module.exports = {
  Users,
  Movies,
  Reviews,
};
