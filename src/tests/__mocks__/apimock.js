const statesData = [
  {
    name: 'Hawaii',
    cases: 95254,
    map_image: 'https://cdn.civil.services/us-states/maps/hawaii-large.png',
  },
  {
    name: 'Colorado',
    cases: 877507,
    map_image: 'https://cdn.civil.services/us-states/maps/colorado-large.png',
  },
  {
    name: 'Massachusetts',
    cases: 1034731,
    map_image: 'https://cdn.civil.services/us-states/maps/massachusetts-large.png',
  },
  {
    name: 'Puerto Rico',
    cases: 202750,
    map_image: '/static/media/US-MAP.a904fd19.png',
  },
  {
    name: 'North Dakota',
    cases: 170371,
    map_image: 'https://cdn.civil.services/us-states/maps/north-dakota-large.png',
  },
  {
    name: 'Missouri',
    cases: 975089,
    map_image: 'https://cdn.civil.services/us-states/maps/missouri-large.png',
  },
  {
    name: 'Ohio',
    cases: 1880588,
    map_image: 'https://cdn.civil.services/us-states/maps/ohio-large.png',
  },
  {
    name: 'Alabama',
    cases: 861110,
    map_image: 'https://cdn.civil.services/us-states/maps/alabama-large.png',
  },
  {
    name: 'Virginia',
    cases: 1034107,
    map_image: 'https://cdn.civil.services/us-states/maps/virginia-large.png',
  },
  {
    name: 'Minnesota',
    cases: 992851,
    map_image: 'https://cdn.civil.services/us-states/maps/minnesota-large.png',
  },
  {
    name: 'New Jersey',
    cases: 1373212,
    map_image: 'https://cdn.civil.services/us-states/maps/new-jersey-large.png',
  },
  {
    name: 'Maine',
    cases: 139421,
    map_image: 'https://cdn.civil.services/us-states/maps/maine-large.png',
  },
  {
    name: 'Pennsylvania',
    cases: 1913959,
    map_image: 'https://cdn.civil.services/us-states/maps/pennsylvania-large.png',
  },
  {
    name: 'Rhode Island',
    cases: 215541,
    map_image: 'https://cdn.civil.services/us-states/maps/rhode-island-large.png',
  },
  {
    name: 'American Samoa',
    cases: 10,
    map_image: '/static/media/US-MAP.a904fd19.png',
  },
  {
    name: 'Utah',
    cases: 622414,
    map_image: 'https://cdn.civil.services/us-states/maps/utah-large.png',
  },
  {
    name: 'Louisiana',
    cases: 787538,
    map_image: 'https://cdn.civil.services/us-states/maps/louisiana-large.png',
  },
  {
    name: 'Montana',
    cases: 195417,
    map_image: 'https://cdn.civil.services/us-states/maps/montana-large.png',
  },
  {
    name: 'Guam',
    cases: 19414,
    map_image: '/static/media/US-MAP.a904fd19.png',
  },
  {
    name: 'Idaho',
    cases: 315270,
    map_image: 'https://cdn.civil.services/us-states/maps/idaho-large.png',
  },
  {
    name: 'Michigan',
    cases: 1645578,
    map_image: 'https://cdn.civil.services/us-states/maps/michigan-large.png',
  },
  {
    name: 'Washington',
    cases: 809600,
    map_image: 'https://cdn.civil.services/us-states/maps/washington-large.png',
  },
  {
    name: 'Mississippi',
    cases: 525502,
    map_image: 'https://cdn.civil.services/us-states/maps/mississippi-large.png',
  },
  {
    name: 'Nebraska',
    cases: 330181,
    map_image: 'https://cdn.civil.services/us-states/maps/nebraska-large.png',
  },
  {
    name: 'Maryland',
    cases: 631510,
    map_image: 'https://cdn.civil.services/us-states/maps/maryland-large.png',
  },
  {
    name: 'Nevada',
    cases: 472739,
    map_image: 'https://cdn.civil.services/us-states/maps/nevada-large.png',
  },
  {
    name: 'Arizona',
    cases: 1344183,
    map_image: 'https://cdn.civil.services/us-states/maps/arizona-large.png',
  },
  {
    name: 'Vermont',
    cases: 59826,
    map_image: 'https://cdn.civil.services/us-states/maps/vermont-large.png',
  },
  {
    name: 'Northern Mariana Islands',
    cases: 2641,
    map_image: '/static/media/US-MAP.a904fd19.png',
  },
  {
    name: 'Connecticut',
    cases: 471141,
    map_image: 'https://cdn.civil.services/us-states/maps/connecticut-large.png',
  },
  {
    name: 'Indiana',
    cases: 1200926,
    map_image: 'https://cdn.civil.services/us-states/maps/indiana-large.png',
  },
  {
    name: 'Tennessee',
    cases: 1360958,
    map_image: 'https://cdn.civil.services/us-states/maps/tennessee-large.png',
  },
  {
    name: 'Alaska',
    cases: 155294,
    map_image: 'https://cdn.civil.services/us-states/maps/alaska-large.png',
  },
  {
    name: 'District of Columbia',
    cases: 77661,
    map_image: '/static/media/US-MAP.a904fd19.png',
  },
  {
    name: 'Wyoming',
    cases: 114062,
    map_image: 'https://cdn.civil.services/us-states/maps/wyoming-large.png',
  },
  {
    name: 'South Carolina',
    cases: 942359,
    map_image: 'https://cdn.civil.services/us-states/maps/south-carolina-large.png',
  },
  {
    name: 'Georgia',
    cases: 1714093,
    map_image: 'https://cdn.civil.services/us-states/maps/georgia-large.png',
  },
  {
    name: 'New Hampshire',
    cases: 188644,
    map_image: 'https://cdn.civil.services/us-states/maps/new-hampshire-large.png',
  },
  {
    name: 'New York',
    cases: 3035474,
    map_image: 'https://cdn.civil.services/us-states/maps/new-york-large.png',
  },
  {
    name: 'Kansas',
    cases: 506359,
    map_image: 'https://cdn.civil.services/us-states/maps/kansas-large.png',
  },
  {
    name: 'Illinois',
    cases: 2002360,
    map_image: 'https://cdn.civil.services/us-states/maps/illinois-large.png',
  },
  {
    name: 'West Virginia',
    cases: 317540,
    map_image: 'https://cdn.civil.services/us-states/maps/west-virginia-large.png',
  },
  {
    name: 'Florida',
    cases: 3799661,
    map_image: 'https://cdn.civil.services/us-states/maps/florida-large.png',
  },
  {
    name: 'New Mexico',
    cases: 341509,
    map_image: 'https://cdn.civil.services/us-states/maps/new-mexico-large.png',
  },
  {
    name: 'Oklahoma',
    cases: 691282,
    map_image: 'https://cdn.civil.services/us-states/maps/oklahoma-large.png',
  },
  {
    name: 'California',
    cases: 5249273,
    map_image: 'https://cdn.civil.services/us-states/maps/california-large.png',
  },
  {
    name: 'Texas',
    cases: 4464706,
    map_image: 'https://cdn.civil.services/us-states/maps/texas-large.png',
  },
  {
    name: 'Wisconsin',
    cases: 1072270,
    map_image: 'https://cdn.civil.services/us-states/maps/wisconsin-large.png',
  },
  {
    name: 'Virgin Islands',
    cases: 7763,
    map_image: '/static/media/US-MAP.a904fd19.png',
  },
  {
    name: 'Delaware',
    cases: 167493,
    map_image: 'https://cdn.civil.services/us-states/maps/delaware-large.png',
  },
  {
    name: 'Arkansas',
    cases: 545934,
    map_image: 'https://cdn.civil.services/us-states/maps/arkansas-large.png',
  },
  {
    name: 'Iowa',
    cases: 562463,
    map_image: 'https://cdn.civil.services/us-states/maps/iowa-large.png',
  },
  {
    name: 'Oregon',
    cases: 409232,
    map_image: 'https://cdn.civil.services/us-states/maps/oregon-large.png',
  },
  {
    name: 'South Dakota',
    cases: 175249,
    map_image: 'https://cdn.civil.services/us-states/maps/south-dakota-large.png',
  },
  {
    name: 'Kentucky',
    cases: 836441,
    map_image: 'https://cdn.civil.services/us-states/maps/kentucky-large.png',
  },
  {
    name: 'North Carolina',
    cases: 1607378,
    map_image: 'https://cdn.civil.services/us-states/maps/north-carolina-large.png',
  },
];

export default statesData;
