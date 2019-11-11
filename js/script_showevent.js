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

    });
};

function initializeApp() {

  document.getElementById('browserLanguage').textContent = liff.getLanguage();
  alert("browserLanguage:"+liff.getLanguage());
  document.getElementById('sdkVersion').textContent = liff.getVersion();
  document.getElementById('isInClient').textContent = liff.isInClient();
  document.getElementById('isLoggedIn').textContent = liff.isLoggedIn();
  document.getElementById('deviceOS').textContent = liff.getOS();

    $(document).ready(function() {
      liff.getProfile().then(function (profile) {
          document.getElementById('useridprofilefield').textContent = profile.userId;
          alert("uid:"+profile.userId);
          document.getElementById('displaynamefield').textContent = profile.displayName;
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}
