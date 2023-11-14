let currentState = "start";

let gameData = {
  start: {
    text: "Welcome to Avagio bay. Your choices will shape the story.",
    choices: ["Go to school", "Explore the town"],
    consequences: ["school", "exploreTown"],
    image: "https://3.bp.blogspot.com/-6p1LRpg72kI/UPSypHL_GcI/AAAAAAAAJwA/oSqeVFyg1Bo/s1600/Done+Recomputing+Strata+%5BDebugRelease%5D+1142013+53138+PM.jpg",
  },
  school: {
    text: "You arrive at Avagio bay High. What class do you attend?",
    choices: ["Science class", "Art class"],
    consequences: ["scienceClass", "artClass"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Elementary_classroom_in_Alaska.jpg",
  },
  exploreTown: {
    text: "As you explore the town, you encounter a mysterious person. What do you do?",
    choices: ["Approach them", "Ignore and continue"],
    consequences: ["approachPerson", "ignorePerson"],
    image: "https://media.istockphoto.com/id/1045045296/photo/young-people-exploring-the-city-on-bicycles.jpg?s=612x612&w=0&k=20&c=_6-uUjsUn5StFKGhYqT2p_cAQI-NCWrsusQrYwPqnKU=",
  },
  scienceClass: {
    text: "In Science class, you conduct fascinating experiments and learn about the mysteries of the universe.",
    choices: ["Participate in a Chemistry experiment", "Contribute to a Physics project"],
    consequences: ["chemistryExperiment", "physicsProject"],
    image: "https://i.pinimg.com/736x/97/a3/d5/97a3d527a241f1b0381d69c92651ce83.jpg",
  },
  artClass: {
    text: "In Art class, you express your creativity through various forms of art.",
    choices: ["Paint a vibrant canvas", "Sculpt a masterpiece"],
    consequences: ["paintCanvas", "sculptMasterpiece"],
    image: "https://paintfunstudio.com/wp-content/uploads/art-classes.jpg",
  },
  chemistryExperiment: {
    text: "In the Chemistry experiment, you work with a combination of acids and bases.",
    choices: [""],
    image: "https://previews.123rf.com/images/tan4ikk/tan4ikk1605/tan4ikk160500067/57342040-three-little-students-on-chemistry-lesson-in-lab-doing-an-experiment.jpg",
  },
  physicsProject: {
    text: "In the Physics project, you work with ultrasonic instruments.",
    choices: [""],
    image: "https://www.nccu.edu/sites/default/files/inline-images/Physics.jpg",
  },
  paintCanvas: {
    text: "Painting a vibrant canvas, you express your emotions through art. A masterpiece in the making!",
    choices: ["Paint a landscape", "Experiment with abstract art"],
    consequences: ["paintLandscape", "abstractArt"],
    image: "https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/201550053_Amber-Garrett-Photography-at-Capital-Ritz-Ballroom_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d",
  },
  sculptMasterpiece: {
    text: "Sculpting a masterpiece, you mold raw materials into a work of art. A masterpiece is born!",
    choices: ["Sculpt a bust", "Carve a symbolic sculpture"],
    consequences: ["sculptBust", "symbolicSculpture"],
    image: "https://pes-scanning.com/wp-content/uploads/2021/05/8a9c051e-c370-4c74-8604-26f6f585ff48_twitter-aspect-ratio_default_0.jpg",
  },
  paintLandscape: {
    text: "Painting a breathtaking landscape, you capture the beauty of nature on your canvas. An artistic achievement!",
    choices: [""],
    image: "https://artaistry.com/cdn/shop/articles/315772113_artistic_beginner_landscape_watercolor_painting_of_a_giant_sunrise_reflecting_over_a_lake_with_a_lar.png?v=1667163149&width=1024",
  },
  abstractArt: {
    text: "Experimenting with abstract art, you push the boundaries of creativity. An avant-garde expression!",
    choices: [""],
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/abstract-experiment-iii-larry-hamilton.jpg",
  },
  sculptBust: {
    text: "Sculpting a detailed bust, you showcase the intricacies of human form. A three-dimensional masterpiece!",
    choices: [""],
    image: "https://i.ytimg.com/vi/z2WeNydiYJ0/maxresdefault.jpg",
  },
  symbolicSculpture: {
    text: "Carving a symbolic sculpture, you convey a profound message through your art. A masterpiece with meaning!",
    choices: [""],
    image: "https://i.ytimg.com/vi/-alfVZMtLj4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA99aY6Rm_n7vd4L9Th-9A7jFNzXQ",
  },
  approachPerson: {
    text: "Approaching the person, you discover they hold a key to a hidden quest. An unexpected journey begins!",
    choices: ["Embark on the quest"],
    consequences: ["hiddenQuest"],
    image: "https://i1.wp.com/getthefriendsyouwant.com/wp-content/uploads/2021/12/approach-people-and-make-friends.jpg",
  },
  ignorePerson: {
    text: "Ignoring the person, you continue your exploration without any significant events.",
    choices: [""],
    image: "https://www.treatmentadvocacycenter.org/storage/nyc-homeless.jpg",
  },
  hiddenQuest: {
    text: "Embarking on the hidden quest, you face challenges and uncover the town's secrets. A thrilling adventure unfolds!",
    choices: [""],
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/10/36/c6.jpg",
  },
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

// Additional initialization
startGame();
