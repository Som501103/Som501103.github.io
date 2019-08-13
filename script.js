function validateForm() {

  var groupchk = document.forms['myForm'].elements['group[]'];
  var txt = "";
  var i;
  for (i = 0; i < groupchk.length; i++) {
    if (groupchk[i].checked) {
      txt = txt + groupchk[i].value;
    }
  }

  var triptype = document.forms['myForm'].elements['trip'];
  var trip = "";
  var i;
  for (i = 0; i < triptype.length; i++) {
    if (triptype[i].checked) {
      trip = trip + triptype[i].value;
    }
  }


    var datehappen = document.forms["myForm"]["datehappen"].value;
    var timehappen = document.forms["myForm"]["timehappen"].value;
    var daterestore = document.forms["myForm"]["daterestore"].value;
    var timerestore = document.forms["myForm"]["timerestore"].value;
    var course = document.forms["myForm"]["course"].value;
    var timeexpect = document.forms["myForm"]["timeexpect"].value;
    var equipcode = document.forms["myForm"]["equipcode"].value;
    // var triptype = document.forms["myForm"]["trip"].value;
    var relay = document.forms["myForm"]["relay"].value;
    var load = document.forms["myForm"]["load"].value;
    var load_A = document.forms["myForm"]["load_A"].value;
    var load_B = document.forms["myForm"]["load_B"].value;
    var load_C = document.forms["myForm"]["load_C"].value;
    var load_G = document.forms["myForm"]["load_G"].value;
    var detail = document.forms["myForm"]["detail"].value;
    var lon = document.getElementById("lon").value;
    var lat = document.getElementById("lat").value;
    // var filename = document.getElementById('fileButton').files[0].name;

    // var img= document.forms["myForm"]["img"].value;


    // alert("complease...");
    var myObj = { firstname : "John", lastname : "Doe" };
    console.log(myObj);
    console.log("datehappen");
    console.log(datehappen);
    console.log(document.getElementById("lon").value)
    console.log(document.getElementById("lat").value)

    // console.log("img");
    // console.log(img);
    // alert("Name must be filled out");

    // var firebaseConfig = {
    //     apiKey: "AIzaSyDbwz3Nhbc47UwxZoF9_2Sy3x1ouPmWmJE",
    //     authDomain: "updatetable-ce5d8.firebaseapp.com",
    //     databaseURL: "https://updatetable-ce5d8.firebaseio.com",
    //     projectId: "updatetable-ce5d8",
    //     storageBucket: "updatetable-ce5d8.appspot.com",
    //     messagingSenderId: "1073280316561",
    //     appId: "1:1073280316561:web:9cd3a219b71a0e29"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);


  //   const firebaseConfig = {
  //   apiKey: "AIzaSyCzCyaklYiapilTfCDP2GwrrMnao-9TETM",
  //   authDomain: "rc2line-3b221.firebaseapp.com",
  //   databaseURL: "https://rc2line-3b221.firebaseio.com",
  //   projectId: "rc2line-3b221",
  //   storageBucket: "rc2line-3b221.appspot.com",
  //   messagingSenderId: "272565657956",
  //   appId: "1:272565657956:web:2f2698bd1625c6ab"
  // };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);

    // var fileButton = document.getElementById("fileButton");
    //           fileButton.addEventListener('change', function(e){
    //               var file = e.target.files[0];
    //               var storageRef = firebase.storage().ref(file.name);
    //               storageRef.put(file);
    //           });

    var db = firebase.firestore();
    var timestamp = Date.now();

    db.collection("test1").doc("rc"+timestamp).set({
        datehappen1: datehappen,
        timehappen1: timehappen,
        daterestore1: daterestore,
        timerestore1: timerestore,
        course1: course,
        timeexpect1: timeexpect,
        equipcode1: equipcode,
        triptype1: trip,
        relay1: relay,
        phase1: txt,
        load1: load,
        load_A1: load_A,
        load_B1: load_B,
        load_C1: load_C,
        load_G1: load_G,
        detail1: detail,
        lat1: lat,
        lon1: lon
        // img1: img
    })
        .then(function(docs) {
            console.log(docs.data());
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    return false;

}

function showMyImage(fileInput) {
        var files = fileInput.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
                continue;
            }
            var img=document.getElementById("thumbnil");
            img.file = file;
            var reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    }
