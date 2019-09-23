jQuery.ajax({
  url: "http://127.0.0.1:8000/api/getpeaid/",
  // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
  type: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  dataType: 'json',
  data: JSON.stringify({
    'uid' : "U649ce5cbe448b470e9a8eb4557952a3b"
    })
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

          console.log(staffname);
          document.getElementById('staffname').innerHTML = staffname + "  " + stafflastname;
          document.getElementById('staffdept').innerHTML = staffdept;
          document.getElementById('stafftel').innerHTML = stafftel;


      };
    })


function validateForm() {

  // var groupchk = document.forms['myForm'].elements['group[]'];
  // var txt = "";
  // var i;
  // for (i = 0; i < groupchk.length; i++) {
  //   if (groupchk[i].checked) {
  //     txt = txt + groupchk[i].value;
  //   }
  // }


  var maincausetype = document.forms['myForm'].elements['maincause'];
  var maincause = "";
  var i;
  for (i = 0; i < maincausetype.length; i++) {
    if (maincausetype[i].checked) {
      maincause = maincause + maincausetype[i].value;
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



  jQuery.ajax({
    url: "http://127.0.0.1:8000/api/lineliff/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    dataType: 'json',
    data: JSON.stringify({

      "datehappen" : document.forms["myForm"]["datehappen"].value,
      "daterestore" : document.forms["myForm"]["daterestore"].value,
      "course": document.forms["myForm"]["course"].value,
      "equipcode": document.forms["myForm"]["equipcode"].value,
      "peacode": document.forms["myForm"]["peacode"].value,
      "fedder": document.forms["myForm"]["fedder"].value,
      "fedderwork": document.forms["myForm"]["fedderwork"].value,
      "relay": document.forms["myForm"]["relay"].value,
      "load": document.forms["myForm"]["load"].value,
      "equipstrat": document.forms["myForm"]["equipstrat"].value,
      "equipend": document.forms["myForm"]["equipend"].value,
      "bk": document.forms["myForm"]["bk"].value,
      "r": document.forms["myForm"]["r"].value,
      "load_A": document.forms["myForm"]["load_A"].value,
      "load_B": document.forms["myForm"]["load_B"].value,
      "load_C": document.forms["myForm"]["load_C"].value,
      "load_G": document.forms["myForm"]["load_G"].value,
      "distance": document.forms["myForm"]["distance"].value,
      "maincause": maincause,
      "weather": document.forms["myForm"]["weather"].value,
      "area": document.forms["myForm"]["area"].value,
      "trip": trip

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {

      //   // TODO: Check condition Comp_type
      //   // if Comp_type == 1 || Comp_type == 2
      //   //window.location = "p11searchp.html"
      //   // else if (Comp_type == 3) {
      //   //window.location = "p11searchp.html"
      //   // }

      //   //window.location = "p11searchp.html"

       window.location.replace("file:///Users/som501103/Downloads/rc2-test2/login.html")

      };
    })


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
    {display: "คนงานพาดสายโทรศัพท์ู",value: "CC04002"},
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
    $("#country").change(function() {
    var select = $("#country option:selected").val();
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
    });
    // Function To List out Cities in Second Select tags
    function city(arr) {
    $("#city").empty(); //To reset cities
    $("#city").append("<option>กรุณาเลือกสาเหตุย่อย</option>");
    $(arr).each(function(i) { //to list cities
    $("#city").append("<option value="+ arr[i].value + ">" + arr[i].display + "</option>")
    });
    }
    });

  function FunctionAutoinput() {
      var x = document.getElementById("equipcode").value;
      document.getElementById("equipstrat").value = x;
  }


  function FunctionAutoweather() {
      var w = document.getElementById("peacode").value;
      jQuery.ajax({
        url: "http://127.0.0.1:8000/api/scada/",
        // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
        type: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        dataType: 'json',
        data: JSON.stringify({
          "peacode" : document.forms["myForm"]["peacode"].value

        })

      })
      .done(function(data, textStatus, jqXHR) {
          console.log("HTTP Request Succeeded: " + jqXHR.status);
          console.log(data); //Return Data
          if (jqXHR.status == 200) {
            var des = data['description'];

            if (des=="light rain") {
              description = "ฝนตกบางเบา"
            }else if (des=="very heavy rain") {
              description = "ฝนตกหนัก"
            }else if(des=="overcast clouds"){
              description = "เมฆเยอะ"
            }else if(des=="broken clouds"){
              description = "เมฆบางส่วน"
            }

            document.getElementById("weather").value = description;

          };
        })


        return false;


  }