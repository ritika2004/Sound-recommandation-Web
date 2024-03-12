const mongoose = require("mongoose");
const Song = require("./models/Song");

const songs = [
  {
    name: "Naino  Ki Baat Naina Jaane Hai",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
  {
    name: "Aye Khuda",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
  {
    name: "Teri Yaddo Mein ",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
  {
    name: "Dil Toh Pagal Hai",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
  {
    name: "Hamari Aadhuri Kahani",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
  {
    name: "Mera Desh Rangeela ",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
  {
    name: "Narayan Mil Jayega ",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
  {
    name: "Radhe Radhe ",
    img: "https://d1bltcifwhkdae.cloudfront.net/uploads/Photohero-2048x580.jpg",
    desc: "Very costly",
  },
];

async function seedDB() {
  await Song.insertMany(songs);
  console.log("Data seeded successfully");
}
module.exports = seedDB;
