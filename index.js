const farmAnimals = 'cow horse sheep pig chicken';


const [moo,neigh,baa,oink,cluck] = farmAnimals.split(" ");
const [bessie,, dolly, babe, little]= farmAnimals.split(" ");
const [blackAndWhite,, black,pink] = farmAnimals.split(" ");

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


let [red,orange,yellow,green,blue,indigo,violet] = [...colors]
let [r,o,y,g,b,,v]= [...colors]
let [,,,,,indg]=[...colors]

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const {muppetName="Miss Piggy",color="pink",song="Never Before, Never Again",job= "Cast member of The Muppet Show",partner= "Kermit"} = {muppet};
// Objects

//const {nestedJob,nestedPartner,album:{theMuppetMovie: {song2,song4}}}= nestedMuppet

//both ways work. ^^ or vv

const {nestedMuppet: {nestedJob="Host of the Muppet Show",nestedPartner="Miss Piggy",album: { theMuppetMovie: {song2="Moving Right Along",song4="I Hope That Something Better Comes Along"}}}}= {nestedMuppet}