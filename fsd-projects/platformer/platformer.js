$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(500, 620, 50, 700,);
     createPlatform(800, 620, 100, 50, "red");
     createPlatform(800, 390, 100, 50, "red");
     createPlatform(600, 490, 100, 50, "red");
     createPlatform(600, 290, 100, 50, "red");
     createPlatform(500, 290, 100, 50, "red");
     createPlatform(400, 200, 100, 50, "red");
     createPlatform(300, 290, 100, 50, "red");
     createPlatform(200, 290, 100, 50, "red");



    // TODO 3 - Create Collectables
    createCollectable("steve", 600, 50);
createCollectable("diamond", 200, 170,);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
createCannon("right", 300, 2000);
createCannon("right", 700, 2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
