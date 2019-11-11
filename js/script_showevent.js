// var electrician;
// console.log(window.location.search);
// var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('id'));
// var id = urlParams.get('id')
// console.log(id);
// document.getElementById("electrician").innerHTML = localStorage.getItem("electrician");
// document.getElementById("dept").innerHTML = localStorage.getItem("dept");

window.onload = function (e) {
    liff.init({ liffId: "your-liff-id" }).then(() =>{
        initializeApp();
    });
};

function initializeApp() {
    document.getElementById('languagefield').textContent = liff.language;
    document.getElementById('viewtypefield').textContent = liff.context.viewType;
    document.getElementById('useridfield').textContent = liff.context.userId;
    document.getElementById('utouidfield').textContent = liff.context.utouId;
    document.getElementById('roomidfield').textContent = liff.context.roomId;
    document.getElementById('groupidfield').textContent = liff.context.groupId;

    $(document).ready(function() {
      liff.getProfile().then(function (profile) {
          document.getElementById('useridprofilefield').textContent = profile.userId;
          document.getElementById('displaynamefield').textContent = profile.displayName;
        )}.catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}
