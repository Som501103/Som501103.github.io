var electrician;
// console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('id'));
var id = urlParams.get('id')
// console.log(id);
document.getElementById("electrician").innerHTML = localStorage.getItem("electrician");
document.getElementById("dept").innerHTML = localStorage.getItem("dept");
document.getElementById("maincause").value = localStorage.getItem("maincause");
document.getElementById("course").value = localStorage.getItem("course");
document.getElementById("weather").value = localStorage.getItem("weather");
document.getElementById("temp").value = localStorage.getItem("temp");
document.getElementById("sitearea").value = localStorage.getItem("sitearea");
var happenarea = localStorage.getItem("happenarea");
document.getElementById("happenarea").value = happenarea;
var subhappenarea = localStorage.getItem("subhappenarea");
document.getElementById("subhappenarea").value = subhappenarea;
// console.log(subhappenarea);
var detail = localStorage.getItem("detail");
document.getElementById("detail").value = detail;

var country =localStorage.getItem("causetype");
document.getElementById("country").value = country;
var subcause = localStorage.getItem("subcause");
document.getElementById("city").value = subcause;
// console.log(subcause);
$(document).ready(function() {
// Initializing arrays with city names.
var TC001 = [{
display: "กิ่งไม้พลาดสาย",value: "CC01001"},
{display: "กิ่งไม้โตมาแตะสาย", value: "CC01002"},
{display: "ต้นไม้ล้มทับสาย",value: "CC01003"},
{display: "ต้นไม้เลื้อยมาแตะสาย",value: "CC01004"},
{display: "อื่นๆ",value: "CC01005"}];
var TC002 = [{
display: "อุปกรณ์ชำรุด",value: "CC02001"},
{display: "ทำงานผิดพลาด",value: "CC02002"},
{display: "ติดตั้งไม่ได้มาตรฐาน",value: "CC02003"},
{display: "อุปกรณ์ทำงานไม่สัมพันธ์กัน",value: "CC02004"},
{display: "อื่นๆ",value: "CC02005"}];
var TC003 = [{
display: "ผู้สั่งการ",value: "CC03001"},
{display: "พนักงานบำรุงรักษา",value: "CC03002"},
{ display: "พนักงานก่อสร้าง",value: "CC03003"},
{display: "คนงาน", value: "CC03004"},
{display: "พนักงาน/ช่างบริษัทที่รับเหมากฟภ.", value: "CC03005"},
{display: "อื่นๆ", value: "CC03006"}];
var TC004 = [{
display: "คนตัดต้นไม้",value: "CC04001"},
{display: "คนงานพาดสายโทรศัพท์",value: "CC04002"},
{ display: "คนยิงลูกถ้วย",value: "CC04003"},
{display: "คนลักไฟใช้", value: "CC04004"},
{display: "อื่นๆ", value: "CC04005"}];
var TC005 = [{
display: "นก/ค้างคาว",value: "CC05001"},
{display: "งู",value: "CC05002"},
{ display: "แมลง/แมง",value: "CC05003"},
{display: "ลิง/ค่าง", value: "CC05004"},
{display: "แมว", value: "CC05005"},
{display: "กระรอก/กระแต/หนู", value: "CC05006"},
{display: "ตุ๊กแก", value: "CC05007"},
{display: "อื่นๆ", value: "CC05008"}];
var TC006 = [{
display: "รถยนต์",value: "CC06001"},
{display: "รถก่อสร้าง",value: "CC06002"},
{display: "รถบรรทุก",value: "CC06003"},
{display: "ยานพาหนะทางน้ำ", value: "CC06004"},
{display: "ยานพาหนะทางอากาศ", value: "CC06005"},
{display: "เครื่องจักรกล/ปั้นจั่น/เครน", value: "CC06006"},
{display: "อื่นๆ", value: "CC06007"}];
var TC007 = [{
display: "ว่าว",value: "CC07001"},
{display: "โคมลอย",value: "CC07002"},
{ display: "ป้ายโฆษณา",value: "CC07003"},
{display: "ลูกโป่ง", value: "CC07004"},
{display: "สังกะสีและแผ่นโลหะ", value: "CC07005"},
{display: "เสาอากาศทีวีล้มทับนู", value: "CC07006"},
{display: "วัสดุก่อสร้างแตะสาย", value: "CC07007"},
{display: "ฟาง,ใบอ้อย,ทางมะพร้าวปลิว", value: "CC07008"},
{display: "อื่นๆ", value: "CC07009"}];
var TC008 = [{
display: "ไฟไหม้",value: "CC08001"},
{display: "ฝุ่น",value: "CC08002"},
{display: "ฟ้าผ่า",value: "CC08003"},
{display: "น้ำเซาะ", value: "CC08004"},
{display: "ดินทรุด", value: "CC08005"},
{display: "ไอเกลือ", value: "CC08006"},
{display: "ตะไคร่น้ำจับสาย", value: "CC08007"},
{display: "อื่นๆ", value: "CC08008"}];
var TC009 = [{
display: "พายุ/ดีเปรสชั่น/ใต้ฝุ่น",value: "CC09001"},
{display: "แผ่นดินไหว",value: "CC09002"},
{ display: "น้ำท่วม (อุทกภัย)",value: "CC09003"},
{display: "ไฟป่า", value: "CC09004"},
{display: "โคลนถล่ม", value: "CC09005"},
{display: "ลูกเห็บู", value: "CC09006"},
{display: "อื่นๆ", value: "CC05007"}];
var TC010 = [{
display: "สงคราม/จราจล",value: "CC10001"}];
var TC011 = [{
display: "จ่ายเกินพิกัด",value: "CC11001"}];
var TC012 = [{
display: "อื่นๆ",value: "CC12001"}];
// Function executes on change of first select option field.

selectsubcause(country);
$("#city").val(subcause);
console.log(subcause);

$("#country").change(function() {
var select = $("#country option:selected").val();
selectsubcause(select);
});
function selectsubcause(select){
  switch (select) {
  case "TC001":
  city(TC001);
  break;
  case "TC002":
  city(TC002);
  break;
  case "TC003":
  city(TC003);
  break;
  case "TC004":
  city(TC004);
  break;
  case "TC005":
  city(TC005);
  break;
  case "TC006":
  city(TC006);
  break;
  case "TC007":
  city(TC007);
  break;
  case "TC008":
  city(TC008);
  break;
  case "TC009":
  city(TC009);
  break;
  case "TC010":
  city(TC010);
  break;
  case "TC011":
  city(TC011);
  break;
  case "TC012":
  city(TC012);
  break;
  default:
  $("#city").empty();
  $("#city").append("<option>กรุณาเลือกสาเหตุ</option>");
  break;
  }
}
// Function To List out Cities in Second Select tags
function city(arr){
console.log(arr);
$("#city").empty(); //To reset cities
$("#city").append("<option>กรุณาเลือกสาเหตุย่อย</option>");
$(arr).each(function(i) { //to list cities
$("#city").append("<option value="+ arr[i].value + ">" + arr[i].display + "</option>");
    });
  }
});

jQuery.ajax({
  url: "https://rc2backend.herokuapp.com/api/getdatae1/",
  // url: "https://e89704f8.ngrok.io/api/getdatae1/",

  type: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
  },
  dataType: 'json',
  data: JSON.stringify({
    "id" : id

  })

})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data); //Return Data
    if (jqXHR.status == 200) {

      var pea = data['pea']['pea'];
      var subpea = data['pea']['subpea'];
      var i,j,x,y = "";
      // document.getElementById("subhappenarea").value = subhappenarea;
      for (i in subpea){
                    x += "<option value=\""+subpea[i][0]+"\">"+subpea[i][1]+"</option>";
      //               console.log(x);
                    console.log(subpea[i][0]);
                  }
      $('#subhappenarea').append(x);
      document.getElementById("subhappenarea").value = subhappenarea;
      // console.log("kkk",subhappenarea);

      for (j in pea){
                    y += "<option value=\""+pea[j][0]+"\">"+pea[j][1]+"</option>";
                    // console.log(y);
                  }
      $('#happenarea').append(y);
      document.getElementById("happenarea").value = happenarea;


    };
  })

function getDate(electrician){
  console.log(electrician);
  console.log(typeof(electrician));
  setTimeout(function(){
    var electrician = document.getElementById("electrician").innerHTML;
    console.log(electrician);
    var staffid = {"staffid" : electrician};
    jQuery.ajax({
      url: "https://rc2backend.herokuapp.com/api/getpeaid/",
      // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
      type: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
      },
      dataType: 'json',
      data: JSON.stringify(staffid)
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data); //Return Data
        if (jqXHR.status == 200) {
          var staffname = data['obj']['FirstName'];
          var stafflastname = data['obj']['LastName'];
          var staffdept = data['obj']['DepartmentShort'];
          var stafftel = data['obj']['DepartmentShort'];
          var subregion = data['obj']['SubRegionCode'];
          var region = data['region']['label'];
          var pea = data['pea']['label'];

        };
      })

  },2000)


}

function validateForm(){

  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/getupdate/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "id" : id,
      "maincause" : document.forms["form_e4"]["maincause"].value,
      "course" : document.forms["form_e4"]["course"].value,
      "sitearea" : document.forms["form_e4"]["sitearea"].value,
      "happenarea" : document.forms["form_e4"]["happenarea"].value,
      "subhappenarea": document.forms["form_e4"]["subhappenarea"].value,
      "causetype": document.forms["form_e4"]["country"].value,
      "subcause": document.forms["form_e4"]["city"].value,
      "detail": document.forms["form_e4"]["detail"].value,
      "page": "e4"
    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {

       window.location.replace("https://som501103.github.io/electrician-index.html?id="+id)

      };
    })


    return false;

}

function functionRelation(){
  var happenarea = document.getElementById("happenarea").value;
  console.log(happenarea);
  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/getsubpeacode/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    // url:" https://e89704f8.ngrok.io/api/getsubpeacode/",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349"
    },
    dataType: 'json',
    data: JSON.stringify({
      "happenarea" : document.getElementById("happenarea").value
      })
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data); //Return Data

        if (jqXHR.status == 200) {
            var subarea = data['subpea']['label'];
            console.log(subarea);
            $("#subhappenarea").empty();
            var i,y = "";
            for (i in subarea){
              y += "<option value=\""+subarea[i][0]+"\">"+subarea[i][1]+"</option>";
            }

            $('#subhappenarea').append(y);
        };
      })
}

function Checknumber(){
      var numbers = /^[0-9]+$/;
      // var text = document.getElementById("bk").value;

      if(isNaN(document.form_e3.load.value)){
        alert('เฉพาะตัวเลขเท่านั้น');
        document.form_e3.load.focus();
        return false
      }else if(isNaN(document.form_e3.distance.value)){
        alert('เฉพาะตัวเลขเท่านั้น');
        document.form_e3.distance.focus();
        return false
      }

}
