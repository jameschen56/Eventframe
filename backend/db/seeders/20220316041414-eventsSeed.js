'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      name: 'John Doe',
      isBetaMember: false
      */
   return queryInterface.bulkInsert('Events', [
     // Online 
     {
      title: "Vegan For Beginners",
      description: "More and more people are interested in vegan/plant-based eating. Some are curious, some want to get their feet wet, and others are ready to come to the V-side! *smiles* \n"+
      '\n'+ 
      "I am here for you all! I offer information to introduce you to what eating vegan is like.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F202151239%2F208521885653%2F1%2Foriginal.20211217-023402?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C433%2C1080%2C540&s=e226895d5686a068e2d2523bc9ed2eaf",
      eventDate: "5-21-2022",
      location: "Online Event",
      userId: 1,
      // price: 6,
      // startTime: '20:00:00',
      // endTime: '00:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Fundamentals of Home Espresso",
      description: "Breville is excited to announce a VIRTUAL class - Fundamentals of Home Espresso. \n"+
      '\n'+ 
      "Learn the tricks to making third wave specialty coffee at home from a Breville expert. Join our session covering ingredients, espresso preparation, measuring and milk texturing.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F147258706%2F335937692325%2F1%2Foriginal.20210909-173109?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C546%2C273&s=d0b71c61b810c61228bb3253eb816238",
      eventDate: "5-27-2022",
      location: "Online Event",
      userId: 1,
      // price: 50,
      // startTime: '20:00:00',
      // endTime: '00:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Curb Your Sugar Addiction",
      description: "Do you try to eat healthy, but find you’re unable to resist cookies, donuts, a sugar-filled latte, chips, bread or other goodies? \n"+
      '\n'+ 
      "Sugar might be controlling YOU and your weight, instead of YOU controlling what you eat! The average American consumes about 150 pounds of sugar a year, more than any other country in the world. Sugar in some form is found in almost everything and causes those “roller coaster” mood swings, irritation, exhaustion, headaches, intense cravings, and several other detrimental effects. Luckily, there’s a simple fix.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F136275581%2F142562651550%2F1%2Foriginal.20210523-000411?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C278%2C2000%2C1000&s=e62adc4f04c390ba403c5d0a72f8923c",
      eventDate: "4-23-2022",
      location: "Online Event",
      userId: 1,
      // price: 15,
      // startTime: '19:00:00',
      // endTime: '01:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // Free 
     {
      title: "Trópico Tuesdays @ La Cita Bar",
      description: "With Cumbia and Reggaeton music pumping, palm trees swaying, and Hawaiian leis being passed around the club, Trópico Tuesdays is by far the best thing to do on a Tuesday night in DTLA. \n"+
      '\n'+ 
      "Held at La Cita, LA’s favorite Latin dance floor, and hosted by DJ Nativity and The Portuguese Lover, Trópico Tuesdays features the best in tropical music including merengue, punta, hiphop and house- making the night feel like a fiesta at an island getaway. MC Barlos rocks the party as these seasoned DJs play the hits from past to present.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F140236459%2F274485824460%2F1%2Foriginal.20210629-211746?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C21%2C750%2C375&s=6228fc49b95a4a322b85282da86e685f",
      eventDate: "5-17-2022",
      location: "336 South Hill Street Los Angeles, CA 90013",
      userId: 1,
      // price: 0,
      // startTime: '19:00:00',
      // endTime: '01:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Saturday Morning Beach Yoga",
      description: "A team of creatives on a mission to light up the world. Through music, movement, sound healing & art, we create a safe space for everyone to shine. \n"+
      '\n'+ 
      "Join our donation based park yoga classes every Saturday at 10am. Start your weekend off right with a flow under the palm trees, good music, great company, and a dose of Vitamin D. Feel free to spread the word, bring your friends, neighbors, and barista —all levels welcome!",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F210374709%2F291054907802%2F1%2Foriginal.20220110-234834?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1944%2C3648%2C1824&s=48b29671f4dadb8e70269429de5dafcc",
      eventDate: "5-14-2022",
      location: "2400 Ocean Front Walk Santa Monica, CA 90405",
      userId: 2,
      // price: 0,
      // startTime: '19:00:00',
      // endTime: '23:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "CUTE & RATCHET: A R&B AND RATCHET PARTY",
      description: "Join us every 2nd Saturday of the month at Paper Tiger Bar for a night of smooth R&B and also ratchet hip-hop music We have JACKJACK and SOOSH! on the turn tables all night.\n"+
      '\n'+ 
      "Bring your cute friends, and definitely bring your ratchet friends. We gonna be bump and grinding all night!",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F243794869%2F598231389153%2F1%2Foriginal.20220309-013704?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C35%2C1920%2C960&s=850f9f86dc34a78d6a97d3324b0e0af8",
      eventDate: "6-11-2022",
      location: "4574 Beverly Boulevard Los Angeles, CA 90004",
      userId: 1,
      // price: 0,
      // startTime: '20:00:00',
      // endTime: '23:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // Food & Drink 
     {
       title: "626 Night Market Mini @ Downtown Santa Monica",
       description: "626 Night Market is bringing the epic flavors of our flagship summer food festivals to the Westside: Downtown Santa Monica! \n"+
       '\n'+ 
       "Featuring two dozen local food vendors curated by the 626 Night Market team, merchandise & craft vendors, and a full bar. The free mini markets will start February 26 & 27th (Saturday and Sunday) and continue every 2nd and 4th weekends through April. Hours are 1pm-10pm each day.",
       imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F223899609%2F37045133340%2F1%2Foriginal.20220204-051702?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2400%2C1200&s=a199361636b04939777135c48005ac4e",
       eventDate: "4-9-2022",
       location: "1324 5th St Santa Monica, CA 90401",
       userId: 2,
      //  price: 15,
      //  startTime: '16:00:00',
      //  endTime: '22:00:00',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {

      title: "DC Wine Fest! Spring Edition",
      description: "Specially curated wineries serve patrons tastings over a multi-session, all-day, all-night vino experience. You’ll have the chance to sample premium wine to your heart's content, while live entertainment keep the party lively during this one of a kind experience. Check out all these awesome participating wineries @ DCWineFest.com !",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124149499%2F35694333470%2F1%2Foriginal.20210125-215313?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C9%2C1004%2C502&s=c64fe414faf7c50d3ebb3bfcb64713b0",
      eventDate: "4-23-2022",
      location: "1234 9th St NW Washington, DC 20001",
      userId: 2,
      // price: 50,
      // startTime: '12:00:00',
      // endTime: '14:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Pittsburgh Mac and Cheese Festival",
      description: "It's Here - The Cheesiesst Event Pittsburgh Has Ever Seen... Pittsburgh Mac and Cheese Festival - We're Coming to Strip District Terminal - Don't Miss If You're Cheeesay! \n"+
      "\n"+
      "Top Chefs, Food Trucks and Food Vendors Serving up the World's Most Amazing (and Cheesiest!) Dish - America's Own Mac and Cheese! More than just a Food Festival, we'll also have an amazing selection of Craft Beers, wines and ciders to sample.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F221133949%2F1331067705%2F1%2Foriginal.20220131-125859?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C128%2C1080%2C540&s=b6442448cd4342ce1896fc5e903802a9",
      eventDate: "5-15-2022",
      location: "2101 Smallman St Pittsburgh, PA 15222",
      userId: 1,
      // price: 35,
      // startTime: '14:00:00',
      // endTime: '20:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Fashion
    {
      title: "EVOLVE Spring Fashion Show",
      description: "EVOLVE is back this season with a runway and pop up event hosted by The Aveda Arts & Sciences Institute featuring all local MN designers. This season's designers are showcasing a mix of ready-to-wear, swimwear and couture that will be immediately be available for purchase right after the show. We are excited to close out the Spring FWMN season with this premier fashion event.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F237632079%2F271479713962%2F1%2Foriginal.20220227-231935?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ecad2dd04b99c280f733cf609d149d55",
      eventDate: "4/30/2022",
      location: "400 Central Avenue Southeast Minneapolis, MN 55414",
      userId: 3,
      // price: 100,
      // startTime: '13:00:00',
      // endTime: '17:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Sneaker Travelers Dallas",
      description: "Sell,Buy,Trade Sneakers,Vintage Wear,Trading Cards,Collectibles & So Much More ‼",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F206304989%2F219666700054%2F1%2Foriginal.20220101-230455?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C270%2C1080%2C540&s=e065b1f2e4572dc24ce889da93b71017",
      eventDate: "6-20-2022",
      location: "500 West Las Colinas Boulevard Irving, TX 75039",
      userId: 2,
      // price: 25,
      // startTime: '20:00:00',
      // endTime: '23:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Charlotte Girl Tribe Pop Up",
      description: "Purge your closet for the season ahead, get styling tips for your new finds, and meet new women! \n"+
      "\n"+
      "What to Expect: *Bring clothes you want to get rid of and search others stuff for new gems. Feel free to bring clothes, shoes, belts, jewelry, home decor and anything you're ready to part with! ✨Sweet and sparkly treats by Kristina's Chocolate Creations ✨DIY Facials and Shop with Revival Body Care ✨Styling Tips with Jen Koury ✨Mini chair massage sessions with Lake Family Chiropractic ✨Meet other women and connect over bubbly ✨Any leftover items will be donated to Laura's Women's Crisis Center. ",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F202667819%2F348252114065%2F1%2Foriginal.20211218-154032?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=97%2C0%2C626%2C313&s=7a194ec4d9eb9131816646de3b9eac46",
      eventDate: "5-20-2022",
      location: "501 South College Street Charlotte, NC 28202",
      userId: 3,
      // price: 30,
      // startTime: '16:00:00',
      // endTime: '18:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "NFTs x FASHION x NYC",
      description: "Are you a fashion designer curious about the endless utility of NFTs and how they may empower you to reshape your business model? \n"+
      "\n"+
      "Join us for an evening of networking, and meet other designers and brands exploring the NFT space. Build community, collaborate, and brainstorm as we lay the foundation for our future world.  ",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F241648769%2F189822477699%2F1%2Foriginal.20220305-153441?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=17%2C57%2C878%2C439&s=2409d3d392209cd9520454bcd706549e",
      eventDate: "4-25-2022",
      location: "601 Lexington Avenue New York, NY 10022",
      userId: 3,
      // price: 100,
      // startTime: '16:00:00',
      // endTime: '18:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Music
    {
      title: "Sangria Saturdays: 90's On The Patio",
      description: "Join the Sangria Saturdays family as we bring you high quality new normal entertainment while adhering to the City's Social Distancing Guidelines \n"+
      "\n"+
      "Party, Socialize and Drink with Friends in a safe social atmosphere until midnight! Classic Feel good vibes provided by DJ WildChild DNA Casual but Mandatory mature Dress Code required: (No Sweats, Staff Reserves the Right to neglect admission due to inappropriate attire)",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125364611%2F13493533145%2F1%2Foriginal.20201019-174543?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C271%2C1274%2C637&s=52481539bad95ece7c5c26732cab3a33",
      eventDate: "5-21-2022",
      location: "930 North Charles Street Baltimore, MD 21201",
      userId: 3,
      // price: 200,
      // startTime: '12:00:00',
      // endTime: '16:30:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Chickenstock Music Festival 2022",
      description: "Join us for the 16th annual Chickenstock Music Festival! It’s a fun-filled weekend for the whole family hosted by Chicken Gold Camp in Chicken Alaska on “Top of the World”. Enjoy a weekend of boot stompin’ music by Alaskan artists, locally prepared eats, delicious local craft beer, the “Peep Drop”, games, Alaskan made crafts and fun local Chicken hospitality.\n"+
      "\n"+
      "Come shake your tail feathers “under the Midnight Sun” in Chicken Alaska at our annual “Music Fest on Top of the World”.... June 10 & 11 and prepare yourselves to have a “Cluck’n Good Time”!      ",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F204811289%2F199227523375%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C211%2C2480%2C1240&s=ac785597e32a56507940b5a3266e61b4",
      eventDate: "6-12-2022",
      location: "1/4 Mile Airport Road Chicken, AK 99732",
      userId: 1,
      // price: 300,
      // startTime: '16:00:00',
      // endTime: '20:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Events', null, {});
    }
};
