import charmImage from './assets/images/charm.jpg';
import silverImage from './assets/images/silver.jpg';
import beadedImage from './assets/images/beaded.jpg';
import leatherImage from './assets/images/leather.jpg';
import banglestackImage from './assets/images/banglestack.jpg';
import tennisImage from './assets/images/tennis.jpg';
import personalImage from './assets/images/personal.jpg';
import minimalistImage from './assets/images/minimal.jpg';
import pearlImage from './assets/images/pearl.jpg';
import bohoImage from './assets/images/boho.jpg';
import hoopImage from './assets/images/hoop.jpg';
import studImage from './assets/images/stud.jpg';
import dropImage from './assets/images/drop.jpg';
import tasselImage from './assets/images/tassel.jpg';
import chandelierImage from './assets/images/chandelier.jpg';
import cuffImage from './assets/images/cuff.jpg';
import clusterImage from './assets/images/cluster.jpg';
import huggieImage from './assets/images/huggie.jpg';
import teardropImage from './assets/images/teardrop.jpg';
import featherImage from './assets/images/feather.jpg';
import layeredImage from './assets/images/layered.jpg';
import pendantImage from './assets/images/pendant.jpg';
import chokerImage from './assets/images/choker.jpg';
import initialImage from './assets/images/initial.jpg';
import barImage from './assets/images/bar.jpg';
import nameplateImage from './assets/images/nameplate.jpg';
import lariatImage from './assets/images/lariant.jpg';
import coinImage from './assets/images/coin.jpg';
import heartLocketImage from './assets/images/heartlocket.jpg';
import yImage from './assets/images/y.jpg';
import stackableImage from './assets/images/stackable.jpg';
import signetImage from './assets/images/signet.jpg';
import midiImage from './assets/images/midi.jpg';
import cocktailImage from './assets/images/cocktail.jpg';
import bandImage from './assets/images/band.jpg';
import birthstoneImage from './assets/images/birthstone.jpg';
import promiseImage from './assets/images/promise.jpg';
import chevronImage from './assets/images/chevron.jpg';
import eternityImage from './assets/images/eternity.jpg';
import adjustableImage from './assets/images/adjustable.jpg';


const products = [
  // Bracelets
  { id: 1, name: 'Gold Charm Bracelet', description: 'Trendy charm bracelet perfect for layering', price: 120.00, image: charmImage, category: 'bracelets' },
  { id: 2, name: 'Silver Cuff Bracelet', description: 'Modern cuff bracelet for a bold statement', price: 85.00, image: silverImage, category: 'bracelets' },
  { id: 3, name: 'Beaded Friends Bracelet', description: 'Colorful beaded bracelet for a fun look', price: 35.00, image: beadedImage, category: 'bracelets' },
  { id: 4, name: 'Leather Wrap Bracelet', description: 'Stylish leather wrap bracelet for casual wear', price: 50.00, image: leatherImage, category: 'bracelets' },
  { id: 5, name: 'Bangle Stack', description: 'Set of bangles for a chic and elegant look', price: 65.00, image: banglestackImage, category: 'bracelets' },
  { id: 6, name: 'Crystal Tennis Bracelet', description: 'Sparkling tennis bracelet for glamorous nights', price: 150.00, image: tennisImage, category: 'bracelets' },
  { id: 7, name: 'Personalized Name Bracelet', description: 'Customized name bracelet for a personal touch', price: 45.00, image: personalImage, category: 'bracelets' },
  { id: 8, name: 'Minimalist Chain Bracelet', description: 'Simple chain bracelet for everyday elegance', price: 40.00, image: minimalistImage, category: 'bracelets' },
  { id: 9, name: 'Pearl Strand Bracelet', description: 'Classic pearl bracelet for timeless style', price: 110.00, image: pearlImage, category: 'bracelets' },
  { id: 10, name: 'Boho Charm Bracelet', description: 'Bohemian-inspired charm bracelet', price: 55.00, image: bohoImage, category: 'bracelets' },

  // Earrings
  { id: 11, name: 'Hoop Earrings', description: 'Trendy hoop earrings for any occasion', price: 70.00, image: hoopImage, category: 'earrings' },
  { id: 12, name: 'Stud Earrings', description: 'Simple stud earrings for a classic look', price: 30.00, image: studImage, category: 'earrings' },
  { id: 13, name: 'Drop Earrings', description: 'Elegant drop earrings for a touch of glamour', price: 55.00, image: dropImage, category: 'earrings' },
  { id: 14, name: 'Tassel Earrings', description: 'Colorful tassel earrings for a fun vibe', price: 40.00, image: tasselImage, category: 'earrings' },
  { id: 15, name: 'Chandelier Earrings', description: 'Dramatic chandelier earrings for special occasions', price: 95.00, image: chandelierImage, category: 'earrings' },
  { id: 16, name: 'Ear Cuff', description: 'Edgy ear cuff for a modern look', price: 20.00, image: cuffImage, category: 'earrings' },
  { id: 17, name: 'Cluster Earrings', description: 'Cluster earrings for a unique statement', price: 60.00, image: clusterImage, category: 'earrings' },
  { id: 18, name: 'Huggie Earrings', description: 'Small huggie earrings for everyday wear', price: 45.00, image: huggieImage, category: 'earrings' },
  { id: 19, name: 'Teardrop Earrings', description: 'Teardrop earrings for an elegant touch', price: 50.00, image: teardropImage, category: 'earrings' },
  { id: 20, name: 'Feather Earrings', description: 'Boho feather earrings for a free-spirited style', price: 35.00, image: featherImage, category: 'earrings' },

  // Necklaces
  { id: 21, name: 'Layered Chain Necklace', description: 'Trendy layered chain necklace for a stylish look', price: 90.00, image: layeredImage, category: 'necklaces' },
  { id: 22, name: 'Pendant Necklace', description: 'Elegant pendant necklace for a touch of class', price: 75.00, image: pendantImage, category: 'necklaces' },
  { id: 23, name: 'Choker Necklace', description: 'Modern choker necklace for a bold statement', price: 50.00, image: chokerImage, category: 'necklaces' },
  { id: 24, name: 'Initial Necklace', description: 'Personalized initial necklace for a custom touch', price: 60.00, image: initialImage, category: 'necklaces' },
  { id: 25, name: 'Bar Necklace', description: 'Minimalist bar necklace for everyday wear', price: 55.00, image: barImage, category: 'necklaces' },
  { id: 26, name: 'Nameplate Necklace', description: 'Custom nameplate necklace for a unique look', price: 70.00, image: nameplateImage, category: 'necklaces' },
  { id: 27, name: 'Lariat Necklace', description: 'Chic lariat necklace for a sophisticated style', price: 80.00, image: lariatImage, category: 'necklaces' },
  { id: 28, name: 'Coin Necklace', description: 'Vintage-inspired coin necklace', price: 65.00, image: coinImage, category: 'necklaces' },
  { id: 29, name: 'Heart Locket Necklace', description: 'Romantic heart locket necklace', price: 85.00, image: heartLocketImage, category: 'necklaces' },
  { id: 30, name: 'Y-Necklace', description: 'Trendy Y-necklace for a stylish statement', price: 60.00, image: yImage, category: 'necklaces' },

  // Rings
  { id: 31, name: 'Stackable Rings', description: 'Trendy stackable rings for a modern look', price: 45.00, image: stackableImage, category: 'rings' },
  { id: 32, name: 'Signet Ring', description: 'Bold signet ring for a statement style', price: 80.00, image: signetImage, category: 'rings' },
  { id: 33, name: 'Midi Rings', description: 'Chic midi rings for a fashionable touch', price: 30.00, image: midiImage, category: 'rings' },
  { id: 34, name: 'Cocktail Ring', description: 'Dramatic cocktail ring for special occasions', price: 95.00, image: cocktailImage, category: 'rings' },
  { id: 35, name: 'Band Ring', description: 'Elegant band ring for everyday wear', price: 60.00, image: bandImage, category: 'rings' },
  { id: 36, name: 'Birthstone Ring', description: 'Personalized birthstone ring for a custom touch', price: 55.00, image: birthstoneImage, category: 'rings' },
  { id: 37, name: 'Promise Ring', description: 'Romantic promise ring for special moments', price: 70.00, image: promiseImage, category: 'rings' },
  { id: 38, name: 'Chevron Ring', description: 'Stylish chevron ring for a trendy look', price: 40.00, image: chevronImage, category: 'rings' },
  { id: 39, name: 'Eternity Ring', description: 'Elegant eternity ring for timeless style', price: 85.00, image: eternityImage, category: 'rings' },
  { id: 40, name: 'Adjustable Ring', description: 'Versatile adjustable ring for a perfect fit', price: 50.00, image: adjustableImage, category: 'rings' },
];

export default products;
