// Tokens
var data = "%data%";
var $header = $('#header');
var $topContacts = $("#topContacts");
var $footerContacts = $("#footerContacts");
var $workExperience = $("#workExperience");
var $projects = $("#projects");
var $education = $("#education");
var $mapDiv = $("#mapDiv");

var bio = {
   "name" : "Example Name",
   "role" : "Web Developer",
   "contacts" : {
     "mobile" : "(000)-000-0000",
     "email" : "example@examplename.com",
     "github" : "examplename",
     "twitter" : "@examplename",
     "location" : "San Francisco, United States"
   },
   "welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   "skills" : ["Sample Skill", "Another Skill", "HTML", "CSS", "JavaScript", "Version Control"],
   "biopic" : "images/197x148.gif",
   "display" : function() {

     // Displays name and role
     if  (bio.role.length > 0) {
       var formattedRole = HTMLheaderRole.replace(data, bio.role);
       $header.prepend(formattedRole);
     }

     if  (bio.name.length > 0) {
       var formattedName = HTMLheaderName.replace(data, bio.name);
       $header.prepend(formattedName);
     }

     // Displays contact details (for header and footer)
     if  (bio.contacts.mobile.length > 0) {
       var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
       $topContacts.append(formattedMobile);
       $footerContacts.append(formattedMobile);
     }

     if  (bio.contacts.email.length > 0) {
       var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
       $topContacts.append(formattedEmail);
       $footerContacts.append(formattedEmail);
     }

     if  (bio.contacts.github.length > 0) {
       var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
       $topContacts.append(formattedGithub);
       $footerContacts.append(formattedGithub);
     }

     if  (bio.contacts.twitter.length > 0) {
       var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
       $topContacts.append(formattedTwitter);
       $footerContacts.append(formattedTwitter);
     }

     if  (bio.contacts.location.length > 0) {
       var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
       $topContacts.append(formattedLocation);
       $footerContacts.append(formattedLocation);
     }

     // Displays contact photo
     if  (bio.biopic.length > 0) {
       var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
       $header.append(formattedBiopic);
     }

     // Displays welcome message
     if  (bio.welcomeMessage.length > 0) {
       var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
       $header.append(formattedWelcomeMsg);
     }

     // Displays skills
     if  (bio.skills.length >= 0) {
       $header.append(HTMLskillsStart);
     }

     for (i = 0; i < bio.skills.length; i++) {
         var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
         $header.append(formattedSkill);
     }
  }
};

bio.display();

var work = {
  "jobs" : [{
      "employer" : "Sample Employer",
      "title" : "Role",
      "location" : "London, United Kingdom",
      "dates" : "2012 - 2016",
      "description" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui \
      blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias \
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia \
      deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis \
      est et expedita distinctio."
    },{
      "employer" : "Another Employer",
      "title" : "Role",
      "location" : "London, United Kingdom",
      "dates" : "2008 - 2012",
      "description" : "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil \
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, \
      omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum \
      necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. \
      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores \
      alias consequatur aut perferendis doloribus asperiores repellat."
    },
  ],
  "display" : function() {
   for (job in work.jobs) {
     $workExperience.append(HTMLworkStart);

     // Displays work information for jobs
     var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     $(".work-entry:last").append(formattedEmployerTitle);

     var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
     $(".work-entry:last").append(formattedLocation);

     var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
     $(".work-entry:last").append(formattedDates);

     var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);
   }
 }
};

work.display();

var projects = {
  "projects" : [{
      "title" : "Sample Project",
      "dates" : "2012 - Present",
      "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium \
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi \
      architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur \
      aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },{
      "title" : "Another Project",
      "dates" : "2014 - 2015",
      "description" : "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci \
      velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. \
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex \
      ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }
  ],
  "display" : function() {
    for (project in projects.projects) {
      $projects.append(HTMLprojectStart);

    // Displays project information
      var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};

projects.display();

var education = {
  "schools" : [{
      "name" : "Sample University",
      "location" : "London, United Kingdom",
      "degree" : "BA",
      "majors" : ["Sample Major"],
      "dates" : "2009",
      "url" : "http://example.edu"
    }
  ],
  "onlineCourses" : [{
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "majors" : ["Front-End Web Development"],
      "date" : "2016",
      "url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
    },{
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "majors" : ["Front-End Web Development"],
      "date" : "2016",
      "url" : "https://www.udacity.com/course/viewer#!/c-ud775"
    },{
      "title" : "Responsive Images",
      "school" : "Udacity",
      "majors" : ["Front-End Web Development"],
      "date" : "2015",
      "url" : "https://www.udacity.com/course/viewer#!/c-ud882-nd"
    },{
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "majors" : ["Front-End Web Development"],
      "date" : "2015",
      "url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd"
    },{
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "majors" : ["Front-End Web Development"],
      "date" : "2015",
      "url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
    }
  ],
  "display" : function() {
    for (school in education.schools) {
      $education.append(HTMLschoolStart);

      // Displays work information for jobs
      var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
      var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
      $(".education-entry:last").append(formattedSchoolTitle);

      var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
      if  (education.onlineCourses.length >= 0) {
      $(".education-entry").append(HTMLonlineClasses);
    }

    for (course in education.onlineCourses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
      var formattedOnlineCourseTitle = formattedOnlineTitle + formattedOnlineSchool;
      $(".education-entry:last").append(formattedOnlineCourseTitle);

      var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[course].date);
      $(".education-entry:last").append(formattedOnlineDates);

      var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
};

education.display();

// Displays map
$mapDiv.append(googleMap);
