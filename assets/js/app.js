var windows = {};
function openWindow(url, name, features) {
    windows[name] = window.open(url, name, features);
    return windows[name];
}

function findWindow(name) {
    return windows[name];
}

function closeWindow(name) {
    var window = windows[name];
    if(window) {
        window.close();
        delete windows[name];
    }
}

//Gmail

function openMail() {
    openWindow("http://gmail.com","gmail","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, fullscreen=yes");
}

function closeMail() {
    closeWindow("gmail");
}


//News
function openNews() {
    openWindow("http://motherjones.com","news","fullscreen=yes");

}

function closeNews() {
    closeWindow("news");
}



function trash(){
      var audio = new Audio('assets/sounds/Baleeted.mp3');
      audio.play();
                }




//artyom
// A normal command

artyom.addCommands({
  indexes:["delete"],
  action: function(i){
    // i = index of the recognized option
    // console.log("Something matches");
    trash();
  }

});

artyom.addCommands({
  indexes:["internet"],
  action: function(i){
    // i = index of the recognized option
    // console.log("Something matches");
    alert("Connecting to the interwebs!");
  }

});


artyom.addCommands({
  indexes:["open gmail"],
  action: function(i){
    // i = index of the recognized option
    // console.log("Something matches");
    openMail()
  }

});

artyom.addCommands({
  indexes:["close gmail"],
  action: function(i){
    // i = index of the recognized option
    // console.log("Something matches");
    closeMail()
  }

});

artyom.addCommands({
  indexes:["open the news"],
  action: function(i){
    // i = index of the recognized option
    // console.log("Something matches");
    openNews()
  }

});

artyom.addCommands({
  indexes:["close the news"],
  action: function(i){
    // i = index of the recognized option
    // console.log("Something matches");
    closeNews()
  }

});





// artyom.addCommands({
//   indexes:[""],
//   action: function(i){
//     // i = index of the recognized option
//     // console.log("Something matches");
//     play();
//   }
// });

// artyom.addCommands({
//   smart:true,// We need to say that this command is smart !
//   indexes:["How many people live in *"], // * = the spoken text after How many people live in is recognized
//   action:function(i,wildcard){
//     switch(wildcard){
//       case "berlin":
//         alert("Why should i know something like this ?");
//       break;
//       case "paris":
//         alert("I don't know");
//       break;
//       default:
//     //    alert("I don't know what city is " + * + ". try to increase the switch cases !");
//       break;
//     }
//   }
// });
//
//
// artyom.simulateInstruction("How many people live in Paris");
// alert("I don't know ._.");


artyom.initialize({
   lang:"en-GB",// More languages are documented in the library
   continuous:true,//if you have https connection, you can activate continuous mode
   debug:true,//Show everything in the console
   listen:true // Start listening when this function is triggered
});

// Artyom has been started ;)
