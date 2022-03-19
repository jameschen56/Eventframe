"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          eventId: 1,
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          rating: 2,
        },
        {
          userId: 2,
          eventId: 1,
          review:
            "Vestibulum lectus mauris ultrices eros in cursus turpis massa. Diam vel quam elementum pulvinar. Nunc sed blandit libero volutpat sed cras ornare arcu. Pretium lectus quam id leo in vitae turpis massa sed.",
          rating: 10,
        },
        {
          userId: 1,
          eventId: 1,
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui nunc mattis enim. Egestas congue quisque egestas diam.",
          rating: 7,
        },
        {
          userId: 2,
          eventId: 1,
          review:
            "Integer malesuada nunc vel risus. Elementum nisi quis eleifend quam. Quisque non tellus orci ac auctor. Non tellus orci ac auctor. Eros donec ac odio tempor orci dapibus ultrices.",
          rating: 7,
        },
        {
          userId: 3,
          eventId: 2,
          review:
            "Nulla pellentesque dignissim enim sit amet. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. A diam maecenas sed enim ut sem viverra aliquet eget. ",
          rating: 6,
        },
        {
          userId: 3,
          eventId: 2,
          review:
            "Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi tincidunt ornare massa eget egestas purus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Dignissim convallis aenean et tortor at risus. Sed felis eget velit aliquet sagittis id consectetur purus.",
          rating: 5,
        },
        {
          userId: 2,
          eventId: 3,
          review:
            "Amet mauris commodo quis imperdiet. Eros in cursus turpis massa tincidunt dui. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Vel turpis nunc eget lorem. In vitae turpis massa sed elementum tempus. Parturient montes nascetur ridiculus mus mauris. Eu volutpat odio facilisis mauris sit amet.",
          rating: 8,
        },
        {
          userId: 1,
          eventId: 3,
          review:
            "Morbi quis commodo odio aenean sed. Magnis dis parturient montes nascetur ridiculus. Purus semper eget duis at. Tincidunt eget nullam non nisi est sit amet facilisis magna. Auctor elit sed vulputate mi sit. Ut sem viverra aliquet eget. Cursus metus aliquam eleifend mi in nulla posuere.",
          rating: 8,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
