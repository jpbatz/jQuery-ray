
$(function() { /*document ready*/
// same as:
// $(document).ready(function {});

  var body = $('body');


// PART 1
  var headerDiv = $('<div>', { id: "header_continer" });
  body.append(headerDiv);

  var headerContent = $('<h1>', { class: "header_title" });
  headerDiv.append(headerContent);
  headerContent.html("Hello!");


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

});