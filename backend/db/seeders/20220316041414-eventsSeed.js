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
     // Food & Drink 
     {
       id: 1,
       title: "626 Night Market Mini @ Downtown Santa Monica",
       description: "626 Night Market is bringing the epic flavors of our flagship summer food festivals to the Westside: Downtown Santa Monica! \n"+
       '\n'+ 
       "Featuring two dozen local food vendors curated by the 626 Night Market team, merchandise & craft vendors, and a full bar. The free mini markets will start February 26 & 27th (Saturday and Sunday) and continue every 2nd and 4th weekends through April. Hours are 1pm-10pm each day.",
       imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F223899609%2F37045133340%2F1%2Foriginal.20220204-051702?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2400%2C1200&s=a199361636b04939777135c48005ac4e",
       eventDate: "4/9/2022",
       location: "1324 5th St Santa Monica, CA 90401",
       userId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      id: 2,
      title: "DC Wine Fest! Spring Edition",
      description: "Specially curated wineries serve patrons tastings over a multi-session, all-day, all-night vino experience. You’ll have the chance to sample premium wine to your heart's content, while live entertainment keep the party lively during this one of a kind experience. Check out all these awesome participating wineries @ DCWineFest.com !",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124149499%2F35694333470%2F1%2Foriginal.20210125-215313?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C9%2C1004%2C502&s=c64fe414faf7c50d3ebb3bfcb64713b0",
      eventDate: "4/23/2022",
      location: "1234 9th St NW Washington, DC 20001",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      title: "Pittsburgh Mac and Cheese Festival",
      description: "It's Here - The Cheesiesst Event Pittsburgh Has Ever Seen... Pittsburgh Mac and Cheese Festival - We're Coming to Strip District Terminal - Don't Miss If You're Cheeesay! \n"+
      "\n"+
      "Top Chefs, Food Trucks and Food Vendors Serving up the World's Most Amazing (and Cheesiest!) Dish - America's Own Mac and Cheese! More than just a Food Festival, we'll also have an amazing selection of Craft Beers, wines and ciders to sample.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F221133949%2F1331067705%2F1%2Foriginal.20220131-125859?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C128%2C1080%2C540&s=b6442448cd4342ce1896fc5e903802a9",
      eventDate: "4/23/2022",
      location: "2101 Smallman St Pittsburgh, PA 15222",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Fashion
    {
      id: 4,
      title: "Charlotte Girl Tribe Pop Up",
      description: "Girl Tribe Pop Up will return to the Charlotte Convention Center on Saturday, April 30th for a full day of shopping showcasing your women-owned brands! \n"+
      "\n"+
      "Attendees can expect an expertly curated collection of 100+ women-led businesses including premiere boutiques, clothing designers, jewelers, artists and makers that come together to bring you the ultimate day of shopping, one-of-a-kind activations, lots of fun photo moments and so much more.",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F202667819%2F348252114065%2F1%2Foriginal.20211218-154032?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=97%2C0%2C626%2C313&s=7a194ec4d9eb9131816646de3b9eac46",
      eventDate: "4/30/2022",
      location: "501 South College Street Charlotte, NC 28202",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      title: "The Sneaker Travelers Dallas",
      description: "Sell,Buy,Trade Sneakers,Vintage Wear,Trading Cards,Collectibles & So Much More ‼",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F206304989%2F219666700054%2F1%2Foriginal.20220101-230455?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C270%2C1080%2C540&s=e065b1f2e4572dc24ce889da93b71017",
      eventDate: "3/20/2022",
      location: "500 West Las Colinas Boulevard Irving, TX 75039",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      title: "Charlotte Girl Tribe Pop Up",
      description: "Purge your closet for the season ahead, get styling tips for your new finds, and meet new women! \n"+
      "\n"+
      "What to Expect: *Bring clothes you want to get rid of and search others stuff for new gems. Feel free to bring clothes, shoes, belts, jewelry, home decor and anything you're ready to part with! ✨Sweet and sparkly treats by Kristina's Chocolate Creations ✨DIY Facials and Shop with Revival Body Care ✨Styling Tips with Jen Koury ✨Mini chair massage sessions with Lake Family Chiropractic ✨Meet other women and connect over bubbly ✨Any leftover items will be donated to Laura's Women's Crisis Center. ",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F202667819%2F348252114065%2F1%2Foriginal.20211218-154032?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=97%2C0%2C626%2C313&s=7a194ec4d9eb9131816646de3b9eac46",
      eventDate: "3/20/2022",
      location: "501 South College Street Charlotte, NC 28202",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      title: "NFTs x FASHION x NYC",
      description: "Are you a fashion designer curious about the endless utility of NFTs and how they may empower you to reshape your business model? \n"+
      "\n"+
      "Join us for an evening of networking, and meet other designers and brands exploring the NFT space. Build community, collaborate, and brainstorm as we lay the foundation for our future world.  ",
      imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F241648769%2F189822477699%2F1%2Foriginal.20220305-153441?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=17%2C57%2C878%2C439&s=2409d3d392209cd9520454bcd706549e",
      eventDate: "3/30/2022",
      location: "601 Lexington Avenue New York, NY 10022",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
