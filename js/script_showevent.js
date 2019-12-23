// var electrician;
// console.log(window.location.search);
// var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('id'));
// var id = urlParams.get('id')
// console.log(id);
// document.getElementById("electrician").innerHTML = localStorage.getItem("electrician");
// document.getElementById("dept").innerHTML = localStorage.getItem("dept");

window.onload = function (e) {
    liff.init({ liffId: "1597802238-nV5lBzz4" }).then(() =>{
        initializeApp();
        // uid="U42ccde1095ff0fa6798ab14ee1717a3e";
        // uid=profile.userId;
        // getstaffid(uid);
    });
};

function initializeApp() {
  // document.getElementById('browserLanguage').textContent = liff.getLanguage();
  // document.getElementById('sdkVersion').textContent = liff.getVersion();
  // document.getElementById('isInClient').textContent = liff.isInClient();
  // document.getElementById('isLoggedIn').textContent = liff.isLoggedIn();
  // document.getElementById('deviceOS').textContent = liff.getOS();

      liff.getProfile().then(function (profile) {
          document.getElementById('uid').value = profile.userId;
          // alert(profile.userId);
          getstaffid(profile.userId);
          document.getElementById('uname').value = profile.displayName;
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });

}

function getstaffid(uid){
  console.log(document.getElementById("datestart").value);
  var datestart = document.getElementById("datestart").value;
  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/linegraph/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "uid" : uid,
      "datestart" : datestart
    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {
        var dataSet = data['showall'];

        console.log(dataSet);
        $(document).ready(function() {
        var table = $('#example').DataTable( {
            data: dataSet,
            retrieve: true,
            paging: true,
            columns: [
            { title: "Timestart" },
            { title: "Equipcode" },
            { title: "Status" }
            ]
          } );
          table.destroy();
          // $('#example').empty();
          table.draw();
        } );

      };
    })
}
