
$(function() { /*document ready*/
// same as:
// $(document).ready(function {});

  var body = $('body');


// PART 1
  var headerDiv = $('<div>', { id: "header_continer" });
  body.append(headerDiv);

  var headerContent = $('<h1>', { class: "header_title" });
  headerDiv.append(headerContent);
  headerContent.html("Hello, this is the jQuery-ray Project");


// PART 2
  var sectionDiv = $('<section>', { class: "content_section" });
  body.append(sectionDiv);

  var  sectionHeader = $('<header>', { class: "section_title" });
  sectionDiv.append(sectionHeader);

  var sectionHeaderContent = $('<h1>');
  sectionHeader.append(sectionHeaderContent);
  sectionHeaderContent.html("I'm Section Header H1 Text");

  var sectionBody = $('<p>', { class: "section_body" });
  sectionDiv.append(sectionBody);
  sectionBody.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptatibus, praesentium nobis, assumenda aliquam id sit, ab pariatur placeat excepturi odio deserunt at minus quia debitis perspiciatis? Eaque, quibusdam architecto.");

  sectionImage = $('<img>', { src: "http://lorempixel.com/100/100"});
  sectionDiv.append(sectionImage);


// PART 3

  var sectionDiv2 = $('<section>', { class: "content_section" });
  body.append(sectionDiv2);

  var  sectionHeader2 = $('<header>', { class: "section_title" });
  sectionDiv2.append(sectionHeader2);

  var sectionHeaderContent2 = $('<h2>');
  sectionHeader2.append(sectionHeaderContent2);
  sectionHeaderContent2.html("I'm Section Header 2's H2 Text");

  var section2Ulist = $('<ul>');

  for(var i=0; i<3; i++) {
    var listElement = $('<li>');
    section2Ulist.append(listElement);
    listElement.html("my name");
    sectionDiv2.append(section2Ulist);
  }

// PART 4

// iterating over an array of objects

  var posts = [
    {
      title: "My First Car",
      body: "It was so sweet like candy.",
      date: "Jan-20-1976"
    },
    {
      title: "My Second Car",
      body: "She ran so smooth.",
      date: "Aug-23-1988"
    },
    {
      title: "My Third Car",
      body: "Old faithful.",
      date: "May-11-1997"
    }
  ];

// console.log(posts);
// console.log(posts[0]);
// console.log(posts[1]);
// console.log(posts[2]);

// each post is a section

var ulist = $('<ul>');
body.append(ulist); 


  for(var j=0; j<posts.length; j++) {
    var post_section = $('<section>');
    var post_header = $('<header>');
    var post_body = $('<body>');
    var post_footer = $('<footer>');

    post_header.html(posts[j].title);
    post_body.html(posts[j].body);
    post_footer.html(posts[j].date);

    // append to inner DOM elements
    post_section.append(post_header);
    post_section.append(post_body);
    post_section.append(post_footer);

    // append parent element to DOM ul
    var listItem2 = $('<li>');
    listItem2.append(post_section);

    ulist.append(listItem2);

  }

});