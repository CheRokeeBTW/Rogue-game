if (typeof window !== 'undefined') {
  
// Select the HTML container where the maze will be displayed
const container = document.getElementById("maze_container");
const test = document.getElementById("test");
const main = document.getElementById("main_viewport");
const popup = document.getElementById("myPopup");
const dialog1 = document.getElementById("dialog1");
const closeButton = document.querySelector("dialog button");
const closeButton1 = document.querySelector("dialog button1");
const skelDial = document.getElementById("text");
const skelDial1 = document.getElementById("heroChoice1");
const arisDial1 = document.getElementById("heroChoiceAris");
const arisDial2 = document.getElementById("heroChoiceAris1");
const arisDial3 = document.getElementById("heroChoiceAris2");
const inv = document.getElementById("inventory");

inv.style.display = "none";
document.getElementById("Intro").showModal()
document.getElementById("MusicDjall").pause()
document.getElementById("Music").pause()
document.getElementById("MusicSecond").pause()
document.getElementById("yourDeath").pause()
// document.getElementById("Music").play()
// document.getElementById("MusicSecond").play()

// setTimeout(function () {
//   document.getElementById("MusicSecond").play()
// }, 148000);

function swapRu(){
  $(document.getElementById("rules")).toggle() 
  $(document.getElementById("last")).toggle() 
  $(document.getElementById("lastEng")).toggle()
  $(document.getElementById("keybinds")).toggle()
  $(document.getElementById("Eng")).toggle()
  $(document.getElementById("Ru")).toggle()
  document.getElementById("leaveIntro").style.display = "none"
  document.getElementById("leaveIntroRu").style.display = "block"
 document.getElementById("rulesRu").style.display = "grid"
 document.getElementById("keybindsRu").style.display = "grid"
}

function swapEng(){
  $(document.getElementById("rules")).toggle() 
  $(document.getElementById("last")).toggle() 
  $(document.getElementById("Eng")).toggle()
  $(document.getElementById("Ru")).toggle()
  $(document.getElementById("keybinds")).toggle()
  $(document.getElementById("lastEng")).toggle() 
  document.getElementById("leaveIntro").style.display = "block"
  document.getElementById("leaveIntroRu").style.display = "none"
 document.getElementById("rulesRu").style.display = "none"
 document.getElementById("keybindsRu").style.display = "none"
}

function leaveIntro(){
  document.getElementById("Intro").close()
  document.getElementById("Music").play()
  setTimeout(function () {
    document.getElementById("MusicSecond").play()
  }, 148000);
  setTimeout(function () {
    document.getElementById("MusicThird").play()
  }, 269000);
  setTimeout(function () {
    document.getElementById("Music").play()
    document.getElementById("MusicSecond").pause()
    document.getElementById("MusicThird").pause()
  },386000);
  setTimeout(function () {
    document.getElementById("MusicSecond").play()
    document.getElementById("Music").pause()
    document.getElementById("MusicThird").pause()
  },514000);
  setTimeout(function () {
    document.getElementById("MusicThird").play()
    document.getElementById("Music").pause()
    document.getElementById("MusicSecond").pause()
  },635000);
  setTimeout(function () {
    document.getElementById("Music").play()
    document.getElementById("MusicThird").pause()
    document.getElementById("MusicSecond").pause()
  },752000);
  setTimeout(function () {
    document.getElementById("MusicSecond").play()
    document.getElementById("Music").pause()
    document.getElementById("MusicThird").pause()
  },873000);
  setTimeout(function () {
    document.getElementById("MusicThird").play()
    document.getElementById("Music").pause()
    document.getElementById("MusicSecond").pause()
  },990000);
  setTimeout(function () {
    document.getElementById("Music").play()
    document.getElementById("MusicThird").pause()
    document.getElementById("MusicSecond").pause()
  },1138000);
  setTimeout(function () {
    document.getElementById("MusicSecond").play()
    document.getElementById("Music").pause()
    document.getElementById("MusicThird").pause()
  },1259000);
}

// Define the dimension of each grid item in pixels
const gridSize = 450;

// Define the maze structure as a 2D array with path, wall and end tiles
const maze = [
      ["start", "wall", "image_part_002", "image_part_003", "image_part_004", "image_part_005", "image_part_006", "image_part_007", "image_part_008", "wall", "wall"],
      ["nextStep", "image_part_007", "pic3", "wall", "wall", "wall", "wall", "wall", "image_part_023", "image_part_024","wall"],
      ["wall", "wall", "image_part_032", "wall","wall","wall","wall","wall", "wall", "image_part_039",  "wall"],
      ["wall", "wall", "image_part_047", "wall", "wall","wall","wall","wall","wall", "image_part_165", "wall"],
      ["wall", "wall", "image_part_092", "wall", "wall","wall","wall","wall","wall", "image_part_180", "wall"],
      ["wall", "wall", "image_part_107", "wall", "wall","wall","wall","wall","wall", "image_part_195", "wall"],
      ["wall", "wall", "image_part_122", "wall","wall","image_part_207","image_part_004", "image_part_208", "wall", "image_part_210", "wall"],
      ["wall", "wall", "image_part_149", "wall", "image_part_221","image_part_222","wall","image_part_223","image_part_224", "image_part_225", "wall"],
      ["wall", "wall", "wall", "wall", "end","wall","wall","wall","wall", "wall", "wall"]
];

function attack(){
   test.style.backgroundImage = "url(/mazepic/__Attack2NoMovement.gif)"
   test.style.backgroundSize = "250px"
   setTimeout(function () {
      test.style.backgroundImage = "url(/mazepic/__Idle.gif)"
    }, 300);
}
$("#Aris").attr("src", "/images/DENeutral.png");
document.getElementById("Aris").style.height = "185px"
document.getElementById("Aris").style.width = "125px"

document.addEventListener("keydown", function (event){
   if(event.key == 'Shift'){
     attack()
   }
})

// DIALOGS 
//var for SkelDIAL

function button1(){
   dialog1.close()
}

 function skeletonDialChoice(){
   skelDial.animate(
      [
        { width: "0" },
        { width: "50%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
    skelDial.innerHTML = "DIE!"
    skelDial.style.fontSize = "25px"
    skelDial1.remove()
}

//DIAL for ARIS

function ArisDialChoice1(){
   document.getElementById("arisDial").animate(
      [
        { width: "0" },
        { width: "100%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
    document.getElementById("arisDial").innerHTML = "Knight? What are you doing here?"
    arisDial1.remove()
    document.getElementById("heroChoiceAris1").remove()
    document.getElementById("heroChoiceAris2").remove()
    $(document.getElementById("heroChoiceAris_1")).toggle() 
    $(document.getElementById("heroChoiceAris_2")).toggle()
}

function ArisDialChoice2(){
   document.getElementById("arisDial").animate(
      [
        { width: "0" },
        { width: "100%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
    document.getElementById("arisDial").innerHTML = "You will die here pretty quick with that attitude"
    arisDial1.remove()
    document.getElementById("heroChoiceAris1").remove()
    document.getElementById("heroChoiceAris2").remove()
    $(document.getElementById("heroChoiceAris1_1")).toggle() 
    $(document.getElementById("heroChoiceAris1_2")).toggle() 
    $("#Aris").attr("src", "/images/DEAngry.png")
}

function ArisDialChoice3(){
   document.getElementById("arisDial").animate(
      [
        { width: "0" },
        { width: "100%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
    document.getElementById("arisDial").innerHTML = "None of us do, but you have no choice"
    arisDial1.remove()
    document.getElementById("heroChoiceAris1").remove()
    document.getElementById("heroChoiceAris2").remove()
    $(document.getElementById("heroChoiceAris1_1")).toggle() 
    $(document.getElementById("heroChoiceAris1_2")).toggle() 
}

function ArisDialChoice1_1(){
   document.getElementById("arisDial").animate(
      [
        { width: "0" },
        { width: "100%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
    setTimeout(() => {
      document.getElementById("arisDial").animate(
         [
           { width: "0" },
           { width: "100%" },
         ],
         {
           duration: 2000,
           iterations: 1,
         },
       ),
      document.getElementById("arisDial").innerHTML = "the Great Djall protects the Divine Exit"
   }, 2500); document.getElementById("arisDial").innerHTML = "This is the Hell... you're doomed and..."
   document.getElementById("heroChoiceAris_1").remove()
   document.getElementById("heroChoiceAris_2").remove()
    document.getElementById("heroChoiceAris1_1").remove()
    document.getElementById("heroChoiceAris1_2").remove()
    $(document.getElementById("heroChoiceAris1_1_1")).toggle() 
    $(document.getElementById("heroChoiceAris1_1_2")).toggle()
    $("#Aris").attr("src", "/images/DENeutral.png")
}

function ArisDialChoice1_2(){
   document.getElementById("arisDial").animate(
      [
        { width: "0" },
        { width: "100%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
   setTimeout(() => {
      document.getElementById("arisDial").animate(
         [
           { width: "0" },
           { width: "100%" },
         ],
         {
           duration: 2000,
           iterations: 1,
         },
       ),
      document.getElementById("arisDial").innerHTML = "this is the Djall's domain and he spares no soul"
   }, 2500); document.getElementById("arisDial").innerHTML = "Then you're already dead poor Knight..."
    document.getElementById("heroChoiceAris_1").remove()
    document.getElementById("heroChoiceAris_2").remove()
    $(document.getElementById("heroChoiceAris1_1_1")).toggle() 
    $(document.getElementById("heroChoiceAris1_1_2")).toggle() 
    $("#Aris").attr("src", "/images/DEAngry.png")
}

function ArisDialChoice1_1_1(){
   document.getElementById("arisDial").animate(
      [
        { width: "0" },
        { width: "100%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
    setTimeout(() => {
      document.getElementById("arisDial").animate(
         [
           { width: "0" },
           { width: "100%" },
         ],
         {
           duration: 2000,
           iterations: 1,
         },
       ),
      document.getElementById("arisDial").innerHTML = "He's unbeatable! You have not a single chance!"
   }, 2500); document.getElementById("arisDial").innerHTML = "Ha! Djall is the God of Death who rules the hell..."
    document.getElementById("heroChoiceAris1_1_1").remove()
    document.getElementById("heroChoiceAris1_1_2").remove()
    $(document.getElementById("heroChoiceAris1_1_1_1")).toggle() 
    $(document.getElementById("heroChoiceAris1_1_1_2")).toggle() 
    $("#Aris").attr("src", "/images/DEHappy.png")
}

function ArisDialChoice1_1_1_1(){
   document.getElementById("arisDial").animate(
      [
        { width: "0" },
        { width: "100%" },
      ],
      {
        duration: 2000,
        iterations: 1,
      },
    ),
    setTimeout(() => {
      document.getElementById("arisDial").animate(
         [
           { width: "0" },
           { width: "100%" },
         ],
         {
           duration: 2000,
           iterations: 1,
         },
       ),
      document.getElementById("arisDial").innerHTML = "Take this loot and go South from here first"
   }, 2500); document.getElementById("arisDial").innerHTML = "You're delusional...I feel bad for you...However..."
    document.getElementById("heroChoiceAris1_1_1_1").remove()
    document.getElementById("heroChoiceAris1_1_1_2").remove()
    $(document.getElementById("heroChoiceAris1_1_1_1_1")).toggle() 
    $(document.getElementById("heroChoiceAris1_1_1_1_2")).toggle() 
    $("#Aris").attr("src", "/images/DESad.png")
}

   function ArisDialChoice1_1_1_2(){
      document.getElementById("arisDial").animate(
         [
           { width: "0" },
           { width: "100%" },
         ],
         {
           duration: 2000,
           iterations: 1,
         },
       ),
       setTimeout(() => {
         document.getElementById("arisDial").animate(
            [
              { width: "0" },
              { width: "100%" },
            ],
            {
              duration: 2000,
              iterations: 1,
            },
          ),
         document.getElementById("arisDial").innerHTML = "...but I think I can help you..."
      }, 2500);
      setTimeout(() => {
         document.getElementById("arisDial").animate(
            [
              { width: "0" },
              { width: "100%" },
            ],
            {
              duration: 2000,
              iterations: 1,
            },
          ),
         document.getElementById("arisDial").innerHTML = "Take this loot and go South from here first"
      }, 5000); document.getElementById("arisDial").innerHTML = "Yes, you would suffer much less this way..."
       document.getElementById("heroChoiceAris1_1_1_1").remove()
       document.getElementById("heroChoiceAris1_1_1_2").remove()
       $(document.getElementById("heroChoiceAris1_1_1_1_1")).toggle() 
       $(document.getElementById("heroChoiceAris1_1_1_1_2")).toggle() 
       $("#Aris").attr("src", "/images/DENeutral.png")
   }
   
   function ArisDialChoice1_1_1_1_1(){
      document.getElementById("arisDial").animate(
         [
           { width: "0" },
           { width: "100%" },
         ],
         {
           duration: 2000,
           iterations: 1,
         },
       ),
       document.getElementById("arisDial").innerHTML = "Good luck, you will need it"
       document.getElementById("heroChoiceAris1_1_1_1_1").remove()
       document.getElementById("heroChoiceAris1_1_1_1_2").remove()
       $(document.getElementById("heroChoiceArisFINAL")).toggle() 
       document.getElementById("lootAris").showModal()
       $("#Aris").attr("src", "/images/DEShyBlush.png")
      }

      //DIAL FOR BLIGHT DEMON
      document.getElementById("BlightDial").showModal()

      function BlightDialChoice(){
         document.getElementById("BlightText").animate(
            [
              { width: "0" },
              { width: "70%" },
            ],
            {
              duration: 2000,
              iterations: 1,
            },
          ),
          setTimeout(() => {
            document.getElementById("BlightText").animate(
               [
                 { width: "0" },
                 { width: "70%" },
               ],
               {
                 duration: 2000,
                 iterations: 1,
               },
             ),
            document.getElementById("BlightText").innerHTML = "...and you will die today"
         }, 2500)
          document.getElementById("BlightText").innerHTML = "I'm the one who serves Djall..."
          document.getElementById("heroChoiceBlight").remove()
          document.getElementById("heroChoiceBlight2").remove()
          $(document.getElementById("heroChoiceBlight_1")).toggle() 
      }

      function BlightDialChoice1(){
         document.getElementById("BlightText").animate(
            [
              { width: "0" },
              { width: "70%" },
            ],
            {
              duration: 2000,
              iterations: 1,
            },
          ),
          setTimeout(() => {
            document.getElementById("BlightText").animate(
               [
                 { width: "0" },
                 { width: "70%" },
               ],
               {
                 duration: 2000,
                 iterations: 1,
               },
             ),
            document.getElementById("BlightText").innerHTML = "YOU WILL SERVE DJALL AFTER DEATH!"
         }, 2500)
          document.getElementById("BlightText").innerHTML = "IMPOSSIBLE! YOU WILL NEVER ESCAPE!..."
          document.getElementById("heroChoiceBlight").remove()
          document.getElementById("heroChoiceBlight2").remove()
          $(document.getElementById("heroChoiceBlight_1")).toggle()
      }

      // DIAL FOR TERRA
      function TerraDialChoice(){
        document.getElementById("TerraText").animate(
           [
             { width: "0" },
             { width: "70%" },
           ],
           {
             duration: 2000,
             iterations: 1,
           },
         ),
         setTimeout(() => {
           document.getElementById("TerraText").animate(
              [
                { width: "0" },
                { width: "70%" },
              ],
              {
                duration: 2000,
                iterations: 1,
              },
            ),
           document.getElementById("TerraText").innerHTML = "...I'm on my mission to kill Djall"
        }, 3500); document.getElementById("TerraText").innerHTML = "Weak creature can speak? Turn around..."
         document.getElementById("heroChoiceTerra").remove()
         document.getElementById("heroChoiceTerra1").remove()
         document.getElementById("heroChoiceTerra2").remove()
         $(document.getElementById("heroChoiceTerra_1")).toggle() 
         $(document.getElementById("heroChoiceTerra_2")).toggle() 
         $(document.getElementById("heroChoiceTerra_3")).toggle() 
     }

     function TerraDialChoice1(){
      document.getElementById("TerraText").animate(
         [
           { width: "0" },
           { width: "70%" },
         ],
         {
           duration: 2000,
           iterations: 1,
         },
       ),
       setTimeout(() => {
         document.getElementById("TerraText").animate(
            [
              { width: "0" },
              { width: "70%" },
            ],
            {
              duration: 2000,
              iterations: 1,
            },
          ),
         document.getElementById("TerraText").innerHTML = "...I will kill Djall and take all the glory!"
      }, 3500); document.getElementById("TerraText").innerHTML = "Team up with you? HA! Look at you..."
       document.getElementById("heroChoiceTerra_1").remove()
       document.getElementById("heroChoiceTerra_2").remove()
       document.getElementById("heroChoiceTerra_3").remove()
       $(document.getElementById("heroChoiceTerra_1_1")).toggle() 
       $(document.getElementById("heroChoiceTerra_1_2")).toggle() 
   }

   function TerraDialChoice2(){
    document.getElementById("TerraText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
     setTimeout(() => {
       document.getElementById("TerraText").animate(
          [
            { width: "0" },
            { width: "70%" },
          ],
          {
            duration: 2000,
            iterations: 1,
          },
        ),
       document.getElementById("TerraText").innerHTML = "...only one of us should survive and kill Djall"
    }, 3500); document.getElementById("TerraText").innerHTML = "Finally someone who understands what i want..."
     document.getElementById("heroChoiceTerra_1").remove()
     document.getElementById("heroChoiceTerra_2").remove()
     document.getElementById("heroChoiceTerra_3").remove()
     $(document.getElementById("heroChoiceTerra_1_1")).toggle() 
   $(document.getElementById("heroChoiceTerra_1_2")).toggle() 
 }

 function TerraDialChoice3(){
  document.getElementById("TerraText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("TerraText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("TerraText").innerHTML = "...I'm the one who deserves to kill him!..."
  }, 3500); 
  setTimeout(() => {
    document.getElementById("TerraText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("TerraText").innerHTML = "...Now give me your loot and run away"
 }, 6000);document.getElementById("TerraText").innerHTML = "You're here to kill Djall, weak one..."
   document.getElementById("heroChoiceTerra_1").remove()
   document.getElementById("heroChoiceTerra_2").remove()
   document.getElementById("heroChoiceTerra_3").remove()
   $(document.getElementById("heroChoiceTerra_1_1")).toggle() 
   $(document.getElementById("heroChoiceTerra_1_2")).toggle() 
}

function TerraDialChoice4(){
  document.getElementById("TerraText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("TerraText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("TerraText").innerHTML = "...I've been training all my life to kill this God"
  }, 3500); 
  setTimeout(() => {
    document.getElementById("TerraText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("TerraText").innerHTML = "I will never share this glory with anyone!..."
 }, 6500); 
 setTimeout(() => {
  document.getElementById("TerraText").animate(
     [
       { width: "0" },
       { width: "75%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("TerraText").innerHTML = "Now shut up and fight me! Accept your death, weak one"
}, 9500);document.getElementById("TerraText").innerHTML = "Such a weak mind also! Listen..."
   document.getElementById("heroChoiceTerra_1_1").remove()
}

//SPIDER DIAL
function SpiderDialChoice(){
  document.getElementById("SpiderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("SpiderText").innerHTML = "PPPSSSSSTTT!"
   document.getElementById("heroChoiceSpider").remove()
   $(document.getElementById("heroChoiceSpider_1")).toggle() 
}

//HOARDER DIAL
function HoarderDialChoice(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "there's already plenty of death in this place!..."
  }, 3500); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "However, I want to help you, but tell me first..."
 }, 6500); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "75%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "What are you doing here?"
}, 9500);document.getElementById("HoarderText").innerHTML = "Dear traveller! I seek no violence..."
   document.getElementById("heroChoiceHoarder").remove()
   document.getElementById("heroChoiceHoarder1").remove()
   $(document.getElementById("heroChoiceHoarder_1")).toggle() 
}

function HoarderDialChoice1(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "Thousands of others been trying to slain Djall..."
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "None of the succeeded, none of them were even close..."
 }, 8000); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "75%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Perhaps, I can help you, but answer my questions first!"
}, 12000);document.getElementById("HoarderText").innerHTML = "Kill DJALL? The God of Death? Well..."
   document.getElementById("heroChoiceHoarder1").remove()
   $(document.getElementById("heroChoiceHoarder_1_1")).toggle() 
   $(document.getElementById("heroChoiceHoarder_1_3")).toggle() 
}

function HoarderDialChoice1_1(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "Thousands of others been trying to slain Djall..."
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "None of the succeeded, none of them were even close..."
 }, 8000); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "75%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Perhaps, I can help you, but answer my questions first!"
}, 12000);document.getElementById("HoarderText").innerHTML = "Kill DJALL? The God of Death? Well..."
   document.getElementById("heroChoiceHoarder_1").remove()
   document.getElementById("heroChoiceHoarderleave").remove()
   $(document.getElementById("heroChoiceHoarder_1_1")).toggle() 
   $(document.getElementById("heroChoiceHoarder_1_3")).toggle() 
}

function HoarderDialChoiceQuestion1(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "just answer honestly and don't lie to yourself..."
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "80%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "Do you have any chances to kill Djall?"
 }, 8000); document.getElementById("HoarderText").innerHTML = "Great! You know the answers to the first question...."
   document.getElementById("heroChoiceHoarder_1_2").remove()
   $(document.getElementById("heroChoiceAnswer1")).toggle() 
   $(document.getElementById("heroChoiceAnswer2")).toggle()
   $(document.getElementById("heroChoiceAnswer3")).toggle()
   $(document.getElementById("heroChoiceAnswer4")).toggle()
}

function HoarderDialChoice1_1_1(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "enough about your future, about your enemy..."
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "80%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "I will give you my precious loot for every correct answer"
 }, 8000); document.getElementById("HoarderText").innerHTML = "Question that will tell me if you know enough..."
   $(document.getElementById("heroChoiceHoarder_1_2")).toggle() 
   document.getElementById("heroChoiceHoarder_1_1").remove()
}

function HoarderDialChoiceAnswer1No(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "Poor traveller...you stand no chances against Djall"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "Next question!...Think better this time..."
 }, 8000); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Was there someone who already escaped this place?"
}, 12000);
  document.getElementById("HoarderText").innerHTML = "Incorrect...your cockiness will be kill you soon"
  document.getElementById("heroChoiceAnswer1").remove()
  document.getElementById("heroChoiceAnswer2").remove()
  document.getElementById("heroChoiceAnswer3").remove()
  document.getElementById("heroChoiceAnswer4").remove()
  $(document.getElementById("heroChoiceAnswer2_1")).toggle() 
   $(document.getElementById("heroChoiceAnswer2_2")).toggle() 
}
function HoarderDialChoiceAnswer1NoNo(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "Next question!...Think better this time..."
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "Was there someone who already escaped this place?"
 }, 8000); 
  document.getElementById("HoarderText").innerHTML = "Well, then no equipment for you..."
  document.getElementById("heroChoiceAnswer1").remove()
  document.getElementById("heroChoiceAnswer2").remove()
  document.getElementById("heroChoiceAnswer3").remove()
  document.getElementById("heroChoiceAnswer4").remove()
  $(document.getElementById("heroChoiceAnswer2_1")).toggle() 
   $(document.getElementById("heroChoiceAnswer2_2")).toggle() 
}

function HoarderDialChoiceAnswer1Yes(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "Only I can help by giving you this armor"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "It's already in your stash...next question!"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Was there someone who already escaped this place?"
}, 12000);
  document.getElementById("HoarderText").innerHTML = "Yes! Correct! You have no chances by yourself..."
  document.getElementById("heroChoiceAnswer1").remove()
  document.getElementById("heroChoiceAnswer2").remove()
  document.getElementById("heroChoiceAnswer3").remove()
  document.getElementById("heroChoiceAnswer4").remove()
  $(document.getElementById("heroChoiceAnswer2_1")).toggle() 
  $(document.getElementById("heroChoiceAnswer2_2")).toggle() 
  inventory.push("infiniteArmorINV")
  InventoryAdd();
}

function HoarderDialChoiceAnswer2No(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "Djall can't be slained, but he never had a challenge"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "With my weapon you could've have a chance, too bad..."
 }, 8000); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Last question! Who am I?"
}, 12000);
  document.getElementById("HoarderText").innerHTML = "Incorrect! You need to think before your answer..."
  document.getElementById("heroChoiceAnswer2_1").remove()
  document.getElementById("heroChoiceAnswer2_2").remove()
  document.getElementById("heroChoiceHoarder_1_3").remove()
  $(document.getElementById("heroChoiceAnswer3_1")).toggle() 
  $(document.getElementById("heroChoiceAnswer3_2")).toggle() 
  $(document.getElementById("heroChoiceAnswer3_3")).toggle() 
}

function HoarderDialChoiceAnswer2Yes(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "This God never faced a worthy challenge..."
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "Djall never faced another God...He's scared deep down"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Last question! Who am I?"
}, 12000);
  document.getElementById("HoarderText").innerHTML = "Correct! Djall is undefeated only for one reason..."
  document.getElementById("heroChoiceAnswer2_1").remove()
  document.getElementById("heroChoiceAnswer2_2").remove()
  document.getElementById("heroChoiceHoarder_1_3").remove()
  $(document.getElementById("heroChoiceAnswer3_1")).toggle() 
  $(document.getElementById("heroChoiceAnswer3_2")).toggle() 
  $(document.getElementById("heroChoiceAnswer3_3")).toggle() 
  inventory.push("hoarderRingINV")
  InventoryAdd();
}

function HoarderDialChoiceAnswer3Y(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Who am I?"
}, 4000);
  document.getElementById("HoarderText").innerHTML = "Then answer my question if you want my help!"
  document.getElementById("heroChoiceAnswer3_3").remove()
}

function HoarderDialChoiceAnswer2Yes(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("HoarderText").animate(
        [
          { width: "0" },
          { width: "70%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("HoarderText").innerHTML = "This God never faced a worthy challenge..."
  }, 4000); 
  setTimeout(() => {
    document.getElementById("HoarderText").animate(
       [
         { width: "0" },
         { width: "70%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("HoarderText").innerHTML = "Djall never faced another God...He's scared deep down"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Last question! Who am I?"
}, 12000);
  document.getElementById("HoarderText").innerHTML = "Correct! Djall is undefeated only for one reason..."
  document.getElementById("heroChoiceAnswer2_1").remove()
  document.getElementById("heroChoiceAnswer2_2").remove()
  document.getElementById("heroChoiceHoarder_1_3").remove()
   $(document.getElementById("heroChoiceAnswer3_1")).toggle() 
   $(document.getElementById("heroChoiceAnswer3_2")).toggle() 
   $(document.getElementById("heroChoiceAnswer3_3")).toggle() 
   inventory.push("hoarderRingINV")
  InventoryAdd();
}

function HoarderDialChoiceAnswer3Yes(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
 setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "I was here from the start and I will be here till the end"
}, 4000);
setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "I'm the one who built this maze of HELL. I'm the creator"
}, 8000);
setTimeout(() => {
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("HoarderText").innerHTML = "Now take this weapon and slain the God of Death!"
}, 12000);
  document.getElementById("HoarderText").innerHTML = "HA! I am the one who is rotting in this place..."
  document.getElementById("heroChoiceAnswer3_1").remove()
  document.getElementById("heroChoiceAnswer3_2").remove()
  $(document.getElementById("heroChoiceAnswer4_1")).toggle() 
  $(document.getElementById("heroChoiceAnswer4_2")).toggle() 
  inventory.push("swordOfDjallINV")
  InventoryAdd();
}

function HoarderDialChoiceAnswer4leave(){
  document.getElementById("HoarderText").animate(
     [
       { width: "0" },
       { width: "70%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
 setTimeout(() => {
  document.getElementById("HoarderDial").close()
}, 2000);
  document.getElementById("HoarderText").innerHTML = "Good luck poor lost traveller..."
  document.getElementById("heroChoiceAnswer4_1").remove()
  document.getElementById("heroChoiceAnswer4_2").remove()
  $(document.getElementById("h")).toggle() 
}

function HoarderDialleave(){
  document.getElementById("HoarderDial").close()
  $(document.getElementById("h")).toggle() 
}

//TARNISHED DIAL
function TarnishedDialChoice(){
  document.getElementById("TarnishedText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("TarnishedText").animate(
        [
          { width: "0" },
          { width: "65%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("TarnishedText").innerHTML = "Now I serve him in death like his personal guard"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("TarnishedText").animate(
       [
         { width: "0" },
         { width: "65%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("TarnishedText").innerHTML = "You will die and your soul will be tarnished"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("TarnishedText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("TarnishedText").innerHTML = "Turn around and go back or Djall will prevail"
}, 12000);
  document.getElementById("TarnishedText").innerHTML = "You cannot kill him, I tried it 500 years ago..."
  document.getElementById("heroChoiceTarnished").remove()
  document.getElementById("heroChoiceTarnished1").remove()
   $(document.getElementById("heroChoiceTarnished_1")).toggle() 
   $(document.getElementById("heroChoiceTarnished_2")).toggle() 
}

function TarnishedDialChoice1(){
  document.getElementById("TarnishedText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("TarnishedText").animate(
        [
          { width: "0" },
          { width: "65%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("TarnishedText").innerHTML = "Now I serve him in death like his personal guard"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("TarnishedText").animate(
       [
         { width: "0" },
         { width: "65%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("TarnishedText").innerHTML = "You will die and your soul will be tarnished"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("TarnishedText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("TarnishedText").innerHTML = "Turn around and go back or Djall will prevail"
}, 12000);
  document.getElementById("TarnishedText").innerHTML = "I'm one of the knights who tried to kill Djall"
  document.getElementById("heroChoiceTarnished").remove()
  document.getElementById("heroChoiceTarnished1").remove()
  $(document.getElementById("heroChoiceTarnished_1")).toggle() 
  $(document.getElementById("heroChoiceTarnished_2")).toggle() 
}

function TarnishedDialChoice_1(){
  document.getElementById("TarnishedText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("TarnishedText").animate(
        [
          { width: "0" },
          { width: "65%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("TarnishedText").innerHTML = "My soul screams in agony to destroy you"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("TarnishedText").animate(
       [
         { width: "0" },
         { width: "65%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("TarnishedText").innerHTML = "I have to do it, I must do it"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("TarnishedText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("TarnishedText").innerHTML = "Now fight me, die and then we could talk"
}, 12000);
  document.getElementById("TarnishedText").innerHTML = "No time to talk, I cannot afford it."
  document.getElementById("heroChoiceTarnished_1").remove()
  document.getElementById("heroChoiceTarnished_2").remove()
  $(document.getElementById("heroChoiceTarnished_3")).toggle() 
  $(document.getElementById("heroChoiceTarnished_4")).toggle() 
}

//DJALL DIAL
function DjallDialChoice(){
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("DjallText").animate(
        [
          { width: "0" },
          { width: "65%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("DjallText").innerHTML = "I am the Djall, the beginning and the end"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("DjallText").animate(
       [
         { width: "0" },
         { width: "65%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("DjallText").innerHTML = "And today I will destroy you and claim your soul"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("DjallText").innerHTML = "And you will serve me in death forever"
}, 12000);
  document.getElementById("DjallText").innerHTML = "You're the first human who has no idea who I am..."
  document.getElementById("heroChoiceDjall").remove()
  document.getElementById("heroChoiceDjall1").remove()
  $(document.getElementById("heroChoiceDjall_1")).toggle() 
  $(document.getElementById("heroChoiceDjall_2")).toggle() 
}

function DjallDialChoice1(){
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("DjallText").animate(
        [
          { width: "0" },
          { width: "65%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("DjallText").innerHTML = "He was just like you - useless and brave"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("DjallText").animate(
       [
         { width: "0" },
         { width: "65%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("DjallText").innerHTML = "I used him to destroy unworthy challenge"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("DjallText").innerHTML = "However, you're still unworthy, your mind is putrid"
}, 12000);
  document.getElementById("DjallText").innerHTML = "So weak...so arrogant...you killed a human"
  document.getElementById("heroChoiceDjall").remove()
  document.getElementById("heroChoiceDjall1").remove()
  $(document.getElementById("heroChoiceDjall_1")).toggle() 
  $(document.getElementById("heroChoiceDjall_2")).toggle() 
}

function DjallDialChoice_1(){
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("DjallText").animate(
        [
          { width: "0" },
          { width: "65%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("DjallText").innerHTML = "Your bodies and minds are not ready, you're meat"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("DjallText").animate(
       [
         { width: "0" },
         { width: "65%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("DjallText").innerHTML = "The purpose of this maze is to be a prison for weak"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("DjallText").innerHTML = "I am the God and your time is due! Now die in agony"
}, 12000);
  document.getElementById("DjallText").innerHTML = "Oh yes, like thousands of others, human can't kill the God"
  document.getElementById("heroChoiceDjall_1").remove()
  document.getElementById("heroChoiceDjall_2").remove()
  $(document.getElementById("heroChoiceDjall_1_1")).toggle()
}

function DjallDialChoice_2(){
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
   setTimeout(() => {
     document.getElementById("DjallText").animate(
        [
          { width: "0" },
          { width: "65%" },
        ],
        {
          duration: 2000,
          iterations: 1,
        },
      ),
     document.getElementById("DjallText").innerHTML = "This maze was created with no escape, it is a prison"
  }, 4000); 
  setTimeout(() => {
    document.getElementById("DjallText").animate(
       [
         { width: "0" },
         { width: "65%" },
       ],
       {
         duration: 2000,
         iterations: 1,
       },
     ),
    document.getElementById("DjallText").innerHTML = "I am the only one who can leave, but I am the God"
 }, 8000); 
 setTimeout(() => {
  document.getElementById("DjallText").animate(
     [
       { width: "0" },
       { width: "65%" },
     ],
     {
       duration: 2000,
       iterations: 1,
     },
   ),
  document.getElementById("DjallText").innerHTML = "Now your soul will be consumed, pray while you can"
}, 12000);
  document.getElementById("DjallText").innerHTML = "Pointless is trying to kill me, not your questions..."
  document.getElementById("heroChoiceDjall_1").remove()
  document.getElementById("heroChoiceDjall_2").remove()
  $(document.getElementById("heroChoiceDjall_1_1")).toggle() 
}

//INVENTORY
let inventory = []

let InventoryAdd = function () {
     let square = document.createElement('div');
     square.classList.add(inventory[inventory.length - 1]);
     inv.appendChild(square);
 }

 inventory.push("sword")
 InventoryAdd()
 inventory.push("dice")
 InventoryAdd()

   document.addEventListener("keydown", function (event){
   if(event.key == 'Tab'){
      $(inv).toggle() 
     }
})

document.addEventListener("keydown", function (event){
   if(event.key == 'CapsLock'){
      $(document.getElementById("HeroStats")).toggle() 
     }
})


//INSPECTION WINDOWS

$(".sword").click(function(){
   document.getElementById("dialog").showModal();
});

setInterval(function () {
  $(".skeletonMaceINV").click(function(){
  document.getElementById("skeletonMaceInspect").showModal();
})
},10)

$(".dice").click(function(){
  document.getElementById("diceInspect").showModal();
});

setInterval(function () {
  $(".healthPotionINV").click(function(){
  document.getElementById("healthPotionIns").showModal();
})
},10)

setInterval(function () {
  $(".daggerINV").click(function(){
  document.getElementById("daggerIns").showModal();
})
},10)

setInterval(function () {
  $(".ringINV").click(function(){
  document.getElementById("ringIns").showModal();
})
},10)

setInterval(function () {
  $(".ringOfHealthINV").click(function(){
  document.getElementById("HPringIns").showModal();
})
},10)

setInterval(function () {
  $(".armorOfHealthINV").click(function(){
  document.getElementById("armorIns").showModal();
})
},10)

setInterval(function () {
  $(".greatSwordINV").click(function(){
  document.getElementById("greatSwordIns").showModal();
})
},10)

setInterval(function () {
  $(".swordOfDjallINV").click(function(){
  document.getElementById("swordOfDjallIns").showModal();
})
},10)

setInterval(function () {
  $(".hoarderRingINV").click(function(){
  document.getElementById("HoarderRingIns").showModal();
})
},10)

setInterval(function () {
  $(".infiniteArmorINV").click(function(){
  document.getElementById("infiniteArmorIns").showModal();
})
},10)

setInterval(function () {
  $(".eternalRingINV").click(function(){
  document.getElementById("eternalRingIns").showModal();
})
},10)

document.getElementById("skeletonMaceInspect").close();
document.getElementById("healthPotionIns").close();
document.getElementById("diceInspect").close();

//HERO STATS

let addDMG = 0
let DMGdebuff = 0

class skeletonClass{
   constructor(hp,dmg){
      this.hp = hp
      this.dmg = dmg
   }
   removeHP(){
      this.hp = this.hp - 1
   }
   getHP(){
      return this.hp
   }
   getDMG(){
      return this.dmg
   }
}

class blightClass{
   constructor(hp,dmg){
      this.hp = hp
      this.dmg = dmg
   }
   removeHP(){
      this.hp = this.hp - 1
   }
   getHP(){
      return this.hp
   }
   getDMG(){
      return this.dmg
   }
}

class terraClass{
  constructor(hp,dmg){
    this.hp = hp
    this.dmg = dmg
 }
 removeHP(){
    this.hp = this.hp - 1
 }
 getHP(){
    return this.hp
 }
 getDMG(){
    return this.dmg
 }
}

class spiderClass{
  constructor(hp,dmg){
    this.hp = hp
    this.dmg = dmg
 }
 removeHP(){
    this.hp = this.hp - 1
 }
 getHP(){
    return this.hp
 }
 getDMG(){
    return this.dmg
 }
}

class tarnishedClass{
  constructor(hp,dmg){
    this.hp = hp
    this.dmg = dmg
 }
 removeHP(){
    this.hp = this.hp - 1
 }
 getHP(){
    return this.hp
 }
 getDMG(){
    return this.dmg
 }
}

class djallClass{
  constructor(hp,dmg){
    this.hp = hp
    this.dmg = dmg
 }
 removeHP(){
    this.hp = this.hp - 1
 }
 getHP(){
    return this.hp
 }
restoreHP(){
  this.hp = this.hp + 1
}
increaseDMG(){
  this.dmg = this.dmg + 2
}
 getDMG(){
    return this.dmg
 }
}

class heroStats{
   constructor(hp, weaponName, dmg, armorName, armor, luck, miss, ringName){
      this.weapon = weaponName
      this.hp = hp
      this.armorName = armorName
      this.armor = armor
      this.dmg = dmg
      this.luck = luck
      this.miss = miss
      this.ringName = ringName
   }

   getRingName(){
    return this.ringName
   }

   getWeapon(weapon, dmg, luck, miss){
      this.weapon = weapon
      this.weaponDMG = dmg
      this.WeaponCrit = luck
      this.dmg = dmg
      this.luck = this.luck + this.WeaponCrit
      this.weaponMiss = miss
      this.miss = this.miss + this.weaponMiss
   }

   removeWeapon(){
      this.weapon = "fists"
      this.dmg = 0
      this.luck = this.luck - this.WeaponCrit
      this.miss = this.miss - this.weaponMiss
   }

   getArmor(armorName, armor ,luck,miss){
    this.armorName = armorName
      this.armor = armor
      this.armorCrit = luck
      this.armorMiss = miss
      this.luck = this.luck + this.armorCrit
      this.miss = this.miss + this.armorMiss
   }

   getArmorSave(){
      return this.armor
   }

   removeArmor(){
      this.armorName = "No Armor"
      this.armor = 0
      this.luck = this.luck - this.armorCrit
      this.miss = this.miss - this.armorMiss
   }

   getRing(RingName,hp,luck,miss){
      this.ringName = RingName
      this.RingHP = hp
      this.RingCrit = luck
      this.RingMiss = miss
      this.hp = this.hp + this.RingHP
      this.luck = this.luck + this.RingCrit
      this.miss = this.miss + this.RingMiss
   }

   removeRing(){
      this.ringName = "none"
      this.hp = this.hp - this.RingHP
      this.luck = this.luck - this.RingCrit
      this.miss = this.miss - this.RingMiss
   }

   removeHP(amount){
      this.hp = this.hp - amount
   }

   addHP(amount){
      this.hp = this.hp + amount
   }

   showHP(){
      return this.hp
   }

   getDMG(){
      return this.dmg
   }

   getWeaponName(){
      return this.weapon
   }

   getArmorName(){
    return this.armorName
   }

   tryCrit(){
      let d = Math.random()
      this.d = d
         if(this.d<=this.luck){
            addDMG = 15
         }
         else{
            addDMG = 0
         }
         return addDMG
   }

   getLuck(){
      return Math.floor(this.luck * 100)
   }

   missHit(){
         if(this.d>=this.miss){
            DMGdebuff = 0
         }
         else{
            DMGdebuff = 200 
         }
         return DMGdebuff
   }

   getMiss(){
      return Math.floor(this.miss * 100)
   }

   weaponHit(min,max){
      let random = Math.floor(Math.random() * (max - min + 1)) + min + knight.getDMG() + knight.tryCrit() - knight.missHit();
   return random
   }
}

let knight = new heroStats(10, "fists", 0, "No Armor",0, 0, 0,"none");
let skeleton = new skeletonClass(2,1)
let blight = new blightClass(4,2)
let terra = new terraClass(5,3)
let spider = new spiderClass(5,3)
let tarnished = new tarnishedClass(6,4)
let djall = new djallClass(8,3)



let hpUpdate = setInterval(function () {
   document.getElementById("health").innerHTML = `Health: ${knight.showHP()}`
   document.getElementById("weaponType").innerHTML = `Weapon: ${knight.getWeaponName()}`
   document.getElementById("armorType").innerHTML = `Equipped armor: ${knight.getArmorName()}`
   document.getElementById("ringType").innerHTML = `Equipped ring: ${knight.getRingName()}`
   document.getElementById("weaponDMG").innerHTML = `Weapon damage: ${knight.getDMG()}`
   document.getElementById("armorProt").innerHTML = `Armor's protection: ${knight.getArmorSave()}`
},10)

//functions for equip
function knightSwordEquip(){
  if(knight.getWeaponName() !== "fists"){
  knight.removeWeapon();
  }
  knight.getWeapon("Sword", 1, 0.01, 0.05)
  document.getElementById("dialog").close()
}

function knightMaceEquip(){
  if(knight.getWeaponName() !== "fists"){
    knight.removeWeapon();
    }
  knight.getWeapon("Skeleton Mace", 4, 0.02, 0.13)
  document.getElementById("skeletonMaceInspect").close()
}

function knightRestoreHP(){
      document.querySelector(".healthPotionINV").remove()
      document.getElementById("healthPotionIns").close()
      if(knight.showHP() > 10){
        knight.addHP(1)
      }
      else if(knight.showHP() <= 10 && knight.showHP() > 5){
        knight.addHP(2)
      }
      else if(knight.showHP() <= 5){
        knight.addHP(5)
      }
  }

  function knightDaggerEquip(){
    if(knight.getWeaponName() !== "fists"){
      knight.removeWeapon();
      }
    knight.getWeapon("Lucky one", 1, 0.3, 0.05)
    document.getElementById("daggerIns").close()
  }

  function knightRingEquip(){
    if(knight.getRingName() !== "none"){
      knight.removeRing();
      }
    knight.getRing("Old Ring", 0, 0.01, 0.02)
    document.getElementById("ringIns").close()
  }

  function knightHPringEquip(){
    if(knight.getRingName() !== "none"){
      knight.removeRing();
      }
    knight.getRing("Ring of Health", 3, 0.02, 0.03)
    document.getElementById("HPringIns").close()
  }

  function knightArmorEquip(){
    if(knight.getArmorName() !== "No Armor"){
      knight.removeArmor();
      }
    knight.getArmor("Heavy Armor", 2, 0, 0.3)
    document.getElementById("armorIns").close()
  }

  function knightgreatSEquip(){
    if(knight.getWeaponName() !== "fists"){
      knight.removeWeapon();
      }
    knight.getWeapon("Terra's GreatSword", 6, 0.02, 0.1)
    document.getElementById("greatSwordIns").close()
  }

  function knightSwordOfDjallEquip(){
    if(knight.getWeaponName() !== "fists"){
      knight.removeWeapon();
      }
    knight.getWeapon("Sword Of Djall", 7, 0.1, 0.05)
    document.getElementById("swordOfDjallIns").close()
  }

  function knightHoarderRingEquip(){
    if(knight.getRingName() !== "none"){
      knight.removeRing();
      }
    knight.getRing("Hoarder Ring", 5, 0.1, 0)
    document.getElementById("HoarderRingIns").close()
  }

  function knightInfiniteArmorEquip(){
    if(knight.getArmorName() !== "No Armor"){
      knight.removeArmor();
      }
    knight.getArmor("Infinite Armor", 3, 0.05, 0)
    document.getElementById("infiniteArmorIns").close()
  }

  function knightEternalRingEquip(){
    if(knight.getRingName() !== "none"){
      knight.removeRing();
      }
    knight.getRing("Eternal Ring", 7, 0.07, 0.03)
    document.getElementById("eternalRingIns").close()
  }

  setInterval(function () {
    if(knight.showHP() < 1){
      document.getElementById("GameOver").showModal();
    }
  },10)
  
  document.getElementById("healthPotionIns").close()
  document.getElementById("skeletonMaceInspect").close()

//RANDOM DICE NUMBER for Skel fight

   function animateDice(){
    document.getElementById("diceRoll").play()
      $(document.getElementById("dice")).toggle()
      $(document.getElementById("diceAnimated")).toggle()
      document.getElementById("SuccessOrFail").innerHTML = " ";
      document.getElementById("Reroll").innerHTML = " ";
      setTimeout(function () {
         $(document.getElementById("dice")).toggle()
         $(document.getElementById("diceAnimated")).toggle()
       }, 700);
       setTimeout(function(){
         let score = knight.weaponHit(0,20)
       this.score = score
       if(this.score < 0){
         this.score = 0
       }
       document.getElementById("result").innerHTML = `You scored: ${this.score}`
       if(DMGdebuff > 0){
         document.getElementById("info").innerHTML = `You missed!`
       }
       else if(DMGdebuff <= 0 && addDMG > 0){
       document.getElementById("info").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Nice Crit!) Miss chance: ${knight.getMiss()}`
      }
       else{
         document.getElementById("info").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Didn't crit) Miss chance:${knight.getMiss()}`
       }
       if(this.score >= 9){
         skeleton.removeHP(1)
       }
       else{
         knight.removeHP(skeleton.getDMG() - knight.getArmorSave()) 
         document.getElementById("knightScream").play()
       }
       document.getElementById("HeroHP").innerHTML = `Health: ${knight.showHP()}`
       document.getElementById("npcHP").innerHTML = `Health: ${skeleton.getHP()}`
       }
       ,600)
       setTimeout(function(){if(this.score >= 9 && skeleton.getHP() > 0){
         document.getElementById("SuccessOrFail").innerHTML = `Success! Enemy got hit!`
         document.getElementById("SuccessOrFail").style.color = "#4af805"
       }
       else if(this.score < 9){
         document.getElementById("SuccessOrFail").innerHTML = `You got hit!`
         document.getElementById("SuccessOrFail").style.color = "#fc0505"
         document.getElementById("Reroll").innerHTML = `Reroll or Die!`
       }
       else if(this.score >= 9 && skeleton.getHP() < 1){
         document.getElementById("SuccessOrFail").innerHTML = `Success! Scary skeleton defeated!`
         document.getElementById("SuccessOrFail").style.color = "#4af805"
         document.getElementById("lootSkelFight").showModal()
       }
      },1000)
   }
   //RANDOM DICE NUMBER for BLIGHT fight
   setInterval(function () {
   document.getElementById("HeroHPBlight").innerHTML = `Health: ${knight.showHP()}`
document.getElementById("npcHPBlight").innerHTML = `Health: ${blight.getHP()}`
   }, 10)

   function animateDiceBlight(){
    document.getElementById("diceRoll").play()
      $(document.getElementById("diceBlight")).toggle()
      $(document.getElementById("diceAnimatedBlight")).toggle()
      document.getElementById("SuccessOrFail").innerHTML = " ";
      document.getElementById("Reroll").innerHTML = " ";
      setTimeout(function () {
         $(document.getElementById("diceBlight")).toggle()
         $(document.getElementById("diceAnimatedBlight")).toggle()
       }, 700);
       setTimeout(function(){
         let score = knight.weaponHit(0,20)
       this.score = score
       if(this.score < 0){
         this.score = 0
       }
       document.getElementById("resultB").innerHTML = `You scored: ${this.score}`
       if(DMGdebuff > 0){
         document.getElementById("infoB").innerHTML = `You missed!`
       }
       else if(DMGdebuff <= 0 && addDMG > 0){
       document.getElementById("infoB").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Nice Crit!) Miss chance: ${knight.getMiss()}`
      }
       else{
         document.getElementById("infoB").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Didn't crit) Miss chance:${knight.getMiss()}`
       }
       if(this.score >= 12){
         blight.removeHP(1)
       }
       else{
         knight.removeHP(blight.getDMG() - knight.getArmorSave()) 
         document.getElementById("knightScream1").play()
       }
       document.getElementById("HeroHPBlight").innerHTML = `Health: ${knight.showHP()}`
       document.getElementById("npcHPBlight").innerHTML = `Health: ${blight.getHP()}`
       }
       ,600)
       setTimeout(function(){if(this.score >= 12 && blight.getHP() > 0){
         document.getElementById("SuccessOrFailB").innerHTML = `Success! Enemy got hit!`
         document.getElementById("SuccessOrFailB").style.color = "#4af805"
       }
       else if(this.score < 12){
         document.getElementById("SuccessOrFailB").innerHTML = `You got hit!`
         document.getElementById("SuccessOrFailB").style.color = "#fc0505"
         document.getElementById("RerollB").innerHTML = `Reroll or Die!`
       }
       else if(this.score >= 9 && blight.getHP() < 1){
         document.getElementById("SuccessOrFailB").innerHTML = `Victory! Blight Demon slained!`
         document.getElementById("SuccessOrFailB").style.color = "#4af805"
         document.getElementById("lootBlightFight").showModal()
       }
      },1000)
   }

   //RANDOM DICE FOR TERRA FIGHT
   setInterval(function () {
    document.getElementById("HeroHPTerra").innerHTML = `Health: ${knight.showHP()}`
 document.getElementById("npcHPTerra").innerHTML = `Health: ${terra.getHP()}`
    }, 10)
 
    function animateDiceTerra(){
      document.getElementById("diceRoll").play()
       $(document.getElementById("diceTerra")).toggle()
       $(document.getElementById("diceAnimatedTerra")).toggle()
       document.getElementById("SuccessOrFail").innerHTML = " ";
       document.getElementById("Reroll").innerHTML = " ";
       setTimeout(function () {
          $(document.getElementById("diceTerra")).toggle()
          $(document.getElementById("diceAnimatedTerra")).toggle()
        }, 700);
        setTimeout(function(){
          let score = knight.weaponHit(0,20)
        this.score = score
        if(this.score < 0){
          this.score = 0
        }
        document.getElementById("resultT").innerHTML = `You scored: ${this.score}`
        if(DMGdebuff > 0){
          document.getElementById("infoT").innerHTML = `You missed!`
        }
        else if(DMGdebuff <= 0 && addDMG > 0){
        document.getElementById("infoT").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Nice Crit!) Miss chance: ${knight.getMiss()}`
       }
        else{
          document.getElementById("infoT").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Didn't crit) Miss chance:${knight.getMiss()}`
        }
        if(this.score >= 12){
          terra.removeHP(1)
          document.getElementById("TerraScream").play()
        }
        else{
          knight.removeHP(terra.getDMG() - knight.getArmorSave()) 
          document.getElementById("knightScream2").play()
        }
        document.getElementById("HeroHPTerra").innerHTML = `Health: ${knight.showHP()}`
        document.getElementById("npcHPTerra").innerHTML = `Health: ${terra.getHP()}`
        }
        ,600)
        setTimeout(function(){if(this.score >= 12 && terra.getHP() > 0){
          document.getElementById("SuccessOrFailT").innerHTML = `Success! Enemy got hit!`
          document.getElementById("SuccessOrFailT").style.color = "#4af805"
        }
        else if(this.score < 12){
          document.getElementById("SuccessOrFailT").innerHTML = `You got hit!`
          document.getElementById("SuccessOrFailT").style.color = "#fc0505"
          document.getElementById("RerollT").innerHTML = `Reroll or Die!`
        }
        else if(this.score >= 12 && terra.getHP() < 1){
          document.getElementById("SuccessOrFailT").innerHTML = `Victory! Terra learns her lesson!`
          document.getElementById("SuccessOrFailT").style.color = "#4af805"
          document.getElementById("lootTerraFight").showModal()
        }
       },1000)
    }
-
    //RANDOM DICE FOR SPIDER FIGHT
     setInterval(function () {
      document.getElementById("HeroHPSpider").innerHTML = `Health: ${knight.showHP()}`
   document.getElementById("npcHPSpider").innerHTML = `Health: ${spider.getHP()}`
      }, 10)
   
      function animateDiceSpider(){
        document.getElementById("diceRoll").play()
         $(document.getElementById("diceSpider")).toggle()
         $(document.getElementById("diceAnimatedSpider")).toggle()
         document.getElementById("SuccessOrFail").innerHTML = " ";
         document.getElementById("Reroll").innerHTML = " ";
         setTimeout(function () {
            $(document.getElementById("diceSpider")).toggle()
            $(document.getElementById("diceAnimatedSpider")).toggle()
          }, 700);
          setTimeout(function(){
            let score = knight.weaponHit(0,20)
          this.score = score
          if(this.score < 0){
            this.score = 0
          }
          document.getElementById("resultS").innerHTML = `You scored: ${this.score}`
          if(DMGdebuff > 0){
            document.getElementById("infoS").innerHTML = `You missed!`
          }
          else if(DMGdebuff <= 0 && addDMG > 0){
          document.getElementById("infoS").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Nice Crit!) Miss chance: ${knight.getMiss()}`
         }
          else{
            document.getElementById("infoS").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Didn't crit) Miss chance:${knight.getMiss()}`
          }
          if(this.score >= 13){
            spider.removeHP(1)
            document.getElementById("SpiderScream").play()
          }
          else{
            knight.removeHP(spider.getDMG() - knight.getArmorSave()) 
            document.getElementById("knightScream").play()
          }
          document.getElementById("HeroHPSpider").innerHTML = `Health: ${knight.showHP()}`
          document.getElementById("npcHPSpider").innerHTML = `Health: ${spider.getHP()}`
          }
          ,600)
          setTimeout(function(){if(this.score >= 13 && spider.getHP() > 0){
            document.getElementById("SuccessOrFailS").innerHTML = `Success! Enemy got hit!`
            document.getElementById("SuccessOrFailS").style.color = "#4af805"
          }
          else if(this.score < 13){
            document.getElementById("SuccessOrFailS").innerHTML = `You got hit!`
            document.getElementById("SuccessOrFailS").style.color = "#fc0505"
            document.getElementById("RerollS").innerHTML = `Reroll or Die!`
          }
          else if(this.score >= 13 && spider.getHP() < 1){
            document.getElementById("SuccessOrFailS").innerHTML = `Victory! Spider defeated!`
            document.getElementById("SuccessOrFailS").style.color = "#4af805"
            document.getElementById("lootSpiderFight").showModal()
          }
         },1000)
      }

      //RANDOM DICE FOR TARNISHED FIGHT
      setInterval(function () {
        document.getElementById("HeroHPTarnished").innerHTML = `Health: ${knight.showHP()}`
     document.getElementById("npcHPTarnished").innerHTML = `Health: ${tarnished.getHP()}`
        }, 10)
     
        function animateDiceTarnished(){
          document.getElementById("diceRoll").play()
           $(document.getElementById("diceTarnished")).toggle()
           $(document.getElementById("diceAnimatedTarnished")).toggle()
           document.getElementById("SuccessOrFail").innerHTML = " ";
           document.getElementById("Reroll").innerHTML = " ";
           setTimeout(function () {
              $(document.getElementById("diceTarnished")).toggle()
              $(document.getElementById("diceAnimatedTarnished")).toggle()
            }, 700);
            setTimeout(function(){
              let score = knight.weaponHit(0,20)
            this.score = score
            if(this.score < 0){
              this.score = 0
            }
            document.getElementById("resultTar").innerHTML = `You scored: ${this.score}`
            if(DMGdebuff > 0){
              document.getElementById("infoTar").innerHTML = `You missed!`
            }
            else if(DMGdebuff <= 0 && addDMG > 0){
            document.getElementById("infoTar").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Nice Crit!) Miss chance: ${knight.getMiss()}`
           }
            else{
              document.getElementById("infoTar").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Didn't crit) Miss chance:${knight.getMiss()}`
            }
            if(this.score >= 14){
              tarnished.removeHP(1)
            }
            else{
              knight.removeHP(tarnished.getDMG() - knight.getArmorSave()) 
              document.getElementById("knightScream1").play()
            }
            document.getElementById("HeroHPTarnished").innerHTML = `Health: ${knight.showHP()}`
            document.getElementById("npcHPTarnished").innerHTML = `Health: ${tarnished.getHP()}`
            }
            ,600)
            setTimeout(function(){if(this.score >= 14 && tarnished.getHP() > 0){
              document.getElementById("SuccessOrFailTar").innerHTML = `Success! Enemy got hit!`
              document.getElementById("SuccessOrFailTar").style.color = "#4af805"
            }
            else if(this.score < 14){
              document.getElementById("SuccessOrFailTar").innerHTML = `You got hit!`
              document.getElementById("SuccessOrFailTar").style.color = "#fc0505"
              document.getElementById("RerollTar").innerHTML = `Reroll or Die!`
            }
            else if(this.score >= 14 && tarnished.getHP() < 1){
              document.getElementById("SuccessOrFailTar").innerHTML = `Victory! Tarnished defeated!`
              document.getElementById("SuccessOrFailTar").style.color = "#4af805"
              document.getElementById("lootTarnishedFight").showModal()
            }
           },1000)
        }

        //DJALL RANDOM DICE
        setInterval(function () {
          document.getElementById("HeroHPDjall").innerHTML = `Health: ${knight.showHP()}`
       document.getElementById("npcHPDjall").innerHTML = `Health: ${djall.getHP()}`
          }, 10)
       
          function animateDiceDjall(){
            document.getElementById("diceRoll").play()
             $(document.getElementById("diceDjall")).toggle()
             $(document.getElementById("diceAnimatedDjall")).toggle()
             document.getElementById("SuccessOrFail").innerHTML = " ";
             document.getElementById("Reroll").innerHTML = " ";
             setTimeout(function () {
                $(document.getElementById("diceDjall")).toggle()
                $(document.getElementById("diceAnimatedDjall")).toggle()
              }, 700);
              setTimeout(function(){
                let score = knight.weaponHit(0,20)
              this.score = score
              if(this.score < 0){
                this.score = 0
              }
              document.getElementById("resultD").innerHTML = `You scored: ${this.score}`
              if(DMGdebuff > 0){
                document.getElementById("infoD").innerHTML = `You missed!`
              }
              else if(DMGdebuff <= 0 && addDMG > 0){
              document.getElementById("infoD").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Nice Crit!) Miss chance: ${knight.getMiss()}`
             }
              else{
                document.getElementById("infoD").innerHTML = `Weapon DMG: ${knight.getDMG()} Crit chance: ${knight.getLuck()}(Didn't crit) Miss chance:${knight.getMiss()}`
              }
              if(this.score >= 15){
                djall.removeHP(1)
              }
              else if(this.score < 15 && djall.getHP() <= 3){
                knight.removeHP(djall.getDMG() - knight.getArmorSave())
                djall.restoreHP()
                document.getElementById("knightScream2").play()
              }
              else{
                knight.removeHP(djall.getDMG() - knight.getArmorSave())
                document.getElementById("knightScream2").play()
              }
              document.getElementById("HeroHPDjall").innerHTML = `Health: ${knight.showHP()}`
              document.getElementById("npcHPDjall").innerHTML = `Health: ${djall.getHP()}`
              }
              ,600)
              setTimeout(function(){if(this.score >= 15 && djall.getHP() > 0){
                document.getElementById("SuccessOrFailD").innerHTML = `Success! Enemy got hit!`
                document.getElementById("SuccessOrFailD").style.color = "#4af805"
              }
              else if(this.score < 15){
                document.getElementById("SuccessOrFailD").innerHTML = `You got hit!`
                document.getElementById("SuccessOrFailD").style.color = "#fc0505"
                document.getElementById("RerollD").innerHTML = `Reroll or Die!`
              }
              else if(this.score >= 15 && djall.getHP() < 1){
                document.getElementById("SuccessOrFailD").innerHTML = `Victory! Djall defeated!`
                document.getElementById("SuccessOrFailD").style.color = "#4af805"
                document.getElementById("GameEnd").showModal()
              }
             },1000)
          }
       let interval = setInterval(function(){
          if(djall.getHP() < 3){
            djall.increaseDMG() 
            document.getElementById("djallPhase").play()
            clearTimeout(interval)
          }
        },10)
        
// Define the starting position of the player
const startpoint = {x:0, y:0};
const endpoint = {x:2, y:2}
 
container.style.gridTemplateColumns = 'repeat('+ maze[0].length +', '+gridSize+'px)';
      container.style.gridTemplateRows = 'repeat('+maze.length+', '+gridSize+'px)';
       
      main.style.width = gridSize + "px";
      main.style.height = gridSize + "px";
 
      container.style.left = - (startpoint.x * gridSize) + "px";
      container.style.top = - (startpoint.y * gridSize) + "px";
      

// Generate a 3x3 loop to create grid items
for (let i = 0; i < maze.length; i++) {
   for (let j = 0; j < maze[0].length; j++) {
 
     // Create a new HTML element for the grid item
     // Add a CSS class to the grid item based on the maze structure
     // Append the grid item to the container
     let cell = document.createElement('div');
     let testing = document.querySelector(".testing");
     let Aris = document.querySelector(".Aris")
     let testing1= document.querySelector(".skeleton");
     let blightModel = document.querySelector(".BlightDemonModel");
     cell.classList.add(maze[i][j]);
     container.appendChild(cell);
   //  if(maze[i][j] == "pic3"){
   //    const y = document.querySelector(".pic3");
   //   y.appendChild(testing)
   //  }
    if(maze[i][j] == "nextStep"){
      const y = document.querySelector(".nextStep");
      y.appendChild(testing1)
    }

    if(maze[i][j] == "pic3"){
      const y = document.querySelector(".pic3");
      y.appendChild(Aris)
    }

    if(maze[i][j] == "image_part_149"){
      const y = document.querySelector(".image_part_149");
      y.appendChild(blightModel)
    }

    if(maze[i][j] == "image_part_005"){
      const y = document.querySelector(".image_part_005");
      y.appendChild(document.querySelector(".TerraModel"))
    }

    if(maze[i][j] == "image_part_023"){
      const y = document.querySelector(".image_part_023");
      y.appendChild(document.querySelector(".SpiderModel"))
    }

    if(maze[i][j] == "image_part_180"){
      const y = document.querySelector(".image_part_180");
      y.appendChild(document.querySelector(".HoarderModel"))
    }

    if(maze[i][j] == "image_part_223"){
      const y = document.querySelector(".image_part_223");
      y.appendChild(document.querySelector(".TarnishedModel"))
    }
     
     //initiate the player's starting position
     if(i == startpoint.x && j == startpoint.y){
       cell.classList.add("player");
     }
   }
}
let playerRow = startpoint.x;
let playerCol = startpoint.y;

let topPosition = container.offsetTop;
let leftPosition = container.offsetLeft;
 
const x = document.querySelector(".start");
let islastFight = setInterval(function tick() {
if($('.image_part_221').hasClass('player')){
  document.getElementById("MusicDjall").play()
  document.getElementById("DjallDial").showModal()
  setInterval(function () {
    document.getElementById("Music").pause()
    document.getElementById("MusicSecond").pause()
  },10)
  setInterval(function () {
    document.getElementById("MusicDjall").play()
  },7900)
   clearTimeout(islastFight);
}
},100)

// FIGHT FUNCTIONS 

function isSkeletonFight(){
      document.getElementById("skeletonFight").showModal();
}

function skeleteonFight(){
   $(document.getElementById("SkelFight")).toggle() 
   document.getElementById("skeletonFight").close();
}

function BlightFight(){
   $(document.getElementById("BlightDemonFight")).toggle() 
   document.getElementById("BlightDial").close();
}

function TerraFight(){
  $(document.getElementById("TerraFight")).toggle() 
  document.getElementById("TerraDial").close();
}

function SpiderFight(){
  $(document.getElementById("SpiderFight")).toggle() 
  document.getElementById("SpiderDial").close();
}

function TarnishedFight(){
  $(document.getElementById("TarnishedFight")).toggle() 
  document.getElementById("TarnishedDial").close();
}

function DjallFight(){
  $(document.getElementById("DjallFight")).toggle() 
  document.getElementById("DjallDial").close();
  document.getElementById("yourDeath").play()
  document.getElementById("yourDeath").volume = 0.6
  clearTimeout(islastFight);
  setInterval(function () {
    document.getElementById("MusicDjall").pause()
    document.getElementById("Music").pause()
    document.getElementById("MusicSecond").pause()
    document.getElementById("MusicThird").pause()
  },1)
  setInterval(function () {
    document.getElementById("yourDeath").play()
  },20300)
}

//Skeleton loot
function leave(){
   $(document.getElementById("SkelFight")).toggle() 
   $(document.getElementById("s")).toggle() 
   document.getElementById("lootSkelFight").close()
   inventory.push("healthPotionINV")
   InventoryAdd()
   inventory.push("skeletonMaceINV")
   InventoryAdd()
}

//ARIS loot

function leaveAris(){
   document.getElementById("dialog1").close()
   document.getElementById("lootAris").close()
   inventory.push("daggerINV")
   InventoryAdd()
   inventory.push("ringINV")
   InventoryAdd()
}

function justLeaveAris(){
   document.getElementById("dialog1").close()
   $("#Aris").attr("src", "/images/DEAngry.png")
   document.getElementById("arisDial").innerHTML = "You have no chances arrogant human!"
   $(document.getElementById("heroChoiceArisFINAL")).toggle() 
   document.getElementById("heroChoiceAris1_1_1_1_2").remove()
   document.getElementById("heroChoiceAris1_1_1_1_1").remove()
}

function justLeaveAris1(){
   document.getElementById("dialog1").close()
}

function isArisDial(){
   document.getElementById("dialog1").showModal();
}

$(document.getElementById("skeleton")).toggle() 

//TAKE BLIGHT LOOT 

function leaveBlightFight(){
   document.getElementById("lootBlightFight").close()
   $(document.getElementById("BlightDemonFight")).toggle() 
   document.getElementById("BlightDial").close()
   $(document.getElementById("b")).toggle() 
   inventory.push("ringOfHealthINV")
   InventoryAdd()
   inventory.push("armorOfHealthINV")
   InventoryAdd()
   inventory.push("healthPotionINV")
   InventoryAdd()
}

function isblightDial(){
   document.getElementById("BlightDial").showModal();
}

//TAKE TERRA LOOT
function leaveTerraFight(){
  document.getElementById("lootTerraFight").close()
  $(document.getElementById("TerraFight")).toggle() 
  document.getElementById("TerraDial").close()
  $(document.getElementById("t")).toggle() 
  inventory.push("greatSwordINV")
  InventoryAdd()
  inventory.push("healthPotionINV")
  InventoryAdd()
}

function isTerraDial(){
  document.getElementById("TerraDial").showModal();
}

//TAKE SPIDER LOOT
function leaveSpiderFight(){
  document.getElementById("lootSpiderFight").close()
  $(document.getElementById("SpiderFight")).toggle() 
  document.getElementById("SpiderDial").close()
  $(document.getElementById("sp")).toggle() 
  inventory.push("healthPotionINV")
  InventoryAdd()
  inventory.push("healthPotionINV")
  InventoryAdd()
  inventory.push("healthPotionINV")
  InventoryAdd()
}

function isSpiderDial(){
  document.getElementById("SpiderDial").showModal();
}

function isHoarderDial(){
  document.getElementById("HoarderDial").showModal();
}


function isTarnishedDial(){
  document.getElementById("TarnishedDial").showModal();
}

function leaveTarnishedFight(){
  document.getElementById("lootTarnishedFight").close()
  $(document.getElementById("TarnishedFight")).toggle() 
  document.getElementById("TarnishedDial").close()
  $(document.getElementById("tar")).toggle() 
  inventory.push("healthPotionINV")
  InventoryAdd()
  inventory.push("eternalRingINV")
  InventoryAdd()
}

document.getElementById("BlightDial").close();
//Add an event listener to listen for key-down events
document.addEventListener("keydown", (event) => {
    
   const key = event.key;
 
   //Create a temporary cell to select the current player's container
   const tempplayerCell = document.querySelector(".player");
    
   //Check if the player has already won the game, if yes, do nothing. else, proceed to detect the key pressed
   if (!container.classList.contains("win")) {
 
      if (key === "ArrowUp" && playerRow > 0 && maze[playerRow - 1][playerCol] !== "wall") {
         playerRow--;
         topPosition += gridSize;
                  container.style.top = topPosition + "px";
      }
      else if (key === "ArrowDown" && playerRow < maze.length - 1 && maze[playerRow + 1][playerCol] !== "wall") {
         playerRow++;
         topPosition -= gridSize;
                  container.style.top = topPosition + "px";
      }
      else if (key === "ArrowLeft" && playerCol > 0 && maze[playerRow][playerCol - 1] !== "wall") {
         playerCol--;
         leftPosition += gridSize;
         container.style.left = leftPosition + "px";
      }
      else if (key === "ArrowRight" && playerCol < maze[0].length - 1 && maze[playerRow][playerCol + 1] !== "wall") {
         playerCol++;
         leftPosition -= gridSize;
         container.style.left = leftPosition + "px";
      }

     
 
      //Create a new cell to hold where the player moved to
      let newPlayerCell = container.children[playerRow * maze[0].length + playerCol];
 
      //Remove the player class from the old cell and add it to the new cell
      tempplayerCell.classList.remove("player");
      newPlayerCell.classList.add("player");
     
      //check if the player has reached the end-point and won the game, if yes, apply winning effect
      if (newPlayerCell.classList.contains("end")) {
          popup.classList.toggle("show");
        newPlayerCell.classList.add("win");
      }
      document.getElementById('myPopup').onclick = myFunction;
      function myFunction(){
         container1.classList.remove()
         container1.classList.toggle("show");
         playerCol = 0
         playerRow = 0
      newPlayerCell.classList.remove("win");
      newPlayerCell.classList.remove("player")
      newPlayerCell = container.children[0]
      newPlayerCell.classList.add("player")
      tempplayerCell.classList.remove("player");
      popup.classList.toggle("show");
      }
   }
});
function tryAgain(){
  location.reload()
}
}
