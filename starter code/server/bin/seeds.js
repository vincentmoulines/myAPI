const mongoose = require('mongoose')
const Place = require('../models/Place')
const Activity = require('../models/Activity');

const dbName = 'MydB';
mongoose.connect(`mongodb://localhost/${dbName}`);

const activities = [
  { content:{
    name: "Canyoning aux corbeaux",
    img: "http://montemedio.com/wp-content/uploads/2016/12/Canyoning-Annecy-Monte-Medio-15-2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
    organisation:{
      latitude:47.911858,
      longitude:6.979305999999951,
      place:"Les corbeaux"
    }

  },
  { content:{
    name: "Canyoning Hesbach",
    img: "http://montemedio.com/wp-content/uploads/2016/12/Canyoning-Annecy-Monte-Medio-15-2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
    organisation:{
      latitude:47.907503,
      longitude:6.984817000000021,
      place:"Hensbach"
    }
  },
  {content:{
    name: "les eaux d'Oderen",
    img: "http://montemedio.com/wp-content/uploads/2016/12/Canyoning-Annecy-Monte-Medio-15-2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
    organisation:{
      latitude:47.909895,
      longitude:6.975635000000011,
      place:"Oderen"
    }

  },
  { content:{
    name: "rafting à Raingott",
    img: "http://www.tignes.net/uploads/media/contractor/0001/64/cf46390bde5e950be509fc7fe3195a1291577526.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
    organisation: {
      latitde:47.910311,
      longitude:6.961978,
      place: "Raingott"
    }
  },
  { content:{
    name: "les eaux de Bergenbach",
    img: "http://www.tignes.net/uploads/media/contractor/0001/64/cf46390bde5e950be509fc7fe3195a1291577526.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
    organisation: {
      latitude:47.906026,
      longitude:6.953242000000046,
      place: "Bergenbach"
    }
  },
  {  content:{
    name: "les pedales du Jura",
    img: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2014/11/increase-average-cycling-speed-2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  organisation:{
      latitude:47.9319098 ,
      longitude:6.997519600000032,
      place:"Thalhorn"
    }
  },
  { content:{
    name: "mont Schliffels",
    img: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2014/11/increase-average-cycling-speed-2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  organisation:{
      latitude:47.899899,
      longitude:6.972385000000031,
      place: "Schliffels"
    }
  },
  {  content:{
    name: "6 barres à vélo",
    img: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2014/11/increase-average-cycling-speed-2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },organisation:{
      latitude:47.902574,
      longitude:6.997286000000031,
      place:"Siebach"
    }
  },
  { content:{
    name: "prince de Bel Air",
    img: "https://previews.123rf.com/images/andrewkoh/andrewkoh0901/andrewkoh090100039/4108416-Parachuting-Parachute-on-sky-background-Stock-Photo.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  organisation:{
      latitude:47.7302297,
      longitude:7.305362699999932,
      place: "Bel-Air"
    }
  }
]

const places = [
  { name: "Les corbeaux", latitude: 47.911858, longitude:6.979305999999951, id: 1  },
  { name: "Hensbach", latitude:47.907503 ,longitude:6.984817000000021, id: 2 },
  { name: "Oderen", latitude: 47.909895,longitude:6.975635000000011, id: 3 },
  { name: "Raingott", latitude:47.9103109, longitude:6.961978000000045, id: 4 },
  {name:"Bergenbach", latitude:47.906026 ,longitude: 6.953242000000046, id: 5},
  {name: "Thalhorn", latitude: 47.9319098 ,longitude:6.997519600000032, id: 6},
  {name:"Schliffels", latitude:47.899899 ,longitude:6.972385000000031, id: 7},
  {name:"Siebach", latitude:47.902574 ,longitude:6.997286000000031, id:8},
  {name:"Bel-Air", latitude:47.7302297 ,longitude:7.305362699999932, id:9}
]

Activity.remove({}, () => {
  Place.remove({}, () => {
    Activity.create(activities, (err) => {
      if (err) { throw(err) }
      console.log(`Created ${activities.length} activities`)

      Place.create(places, (err) => {
        if (err) { throw(err) }
        console.log(`Created ${places.length} places`)
        mongoose.connection.close()
      })
    });
  })
})
