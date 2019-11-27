function FunctionIDinput(){
  var staffid = document.getElementById("staffid").value;
  var staffid_inner = document.getElementById('staffid');


  if(isNaN(staffid)){
    // document.getElementById("bk").value.match(numbers);
    alert('เฉพาะตัวเลขเท่านั้น');
    // document.myForm.staffid.focus();
    return false;
  }
  var staff_lenght = document.getElementsByName("staffid").length;

 if(staffid.length === 6){
   console.log(staffid.length);

  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/getpeaid/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      // 'staffid' : "U649ce5cbe448b470e9a8eb4557952a3b"
      "staffid" : document.getElementById("staffid").value
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
            var region = data['region']['label'];
            var pea = data['pea']['label'];


            $('#happenarea').empty();
            console.log(staffname);
            console.log(pea);

            // var obj = region;
            var i, x,j,y = "";
            // console.log(obj);

            for (i in region) {
                          x += "<option value=\""+region[i][0]+"\">"+region[i][1]+"</option>";
                          console.log(x);
                        }
            // $('#peacode').empty();
            $('#peacode').append(x);

            for (j in pea){
                          y += "<option value=\""+pea[j][0]+"\">"+pea[j][1]+"</option>";
                          // console.log(y);
                        }
            $('#happenarea').append(y);
            document.getElementById('staffname').innerHTML = staffname + "  " + stafflastname;
            document.getElementById('staffdept').innerHTML = staffdept;
            // document.getElementById('peacode').innerHTML = region;
            // document.getElementById('peacode').innerHTML = x;
            // $('#peacode').empty();



            // var w = document.getElementById("peacode").value;
            jQuery.ajax({
              url: "https://rc2backend.herokuapp.com/api/scada/",
              // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
              type: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
              },
              dataType: 'json',
              data: JSON.stringify({
                "peacode" : document.getElementById("peacode").value

              })

            })
            .done(function(data, textStatus, jqXHR) {
                console.log("HTTP Request Succeeded: " + jqXHR.status);
                console.log(data); //Return Data
                if (jqXHR.status == 200) {
                  var id = data['id'];
                  var main = data['main']
                  var des = data['description'];
                  var temp = data['temp'];
                  var pressure = data['pressure'];
                  var humidity = data['humidity'];
                  var main_temp_min = data['min'];
                  var main_temp_max = data['max'];
                  var wind = data['wind'];
                  var clouds =data['clouds'];
                  var dt_weather = data['localDT'];

                  if (des=="light rain") {
                    description = "ฝนตกบางเบา"
                  }else if (des=="very heavy rain") {
                    description = "ฝนตกหนัก"
                  }else if(des=="overcast clouds"){
                    description = "เมฆเยอะ"
                  }else if(des=="broken clouds"){
                    description = "เมฆบางส่วน"
                  }else if(des=="few clouds"){
                    description = "เมฆน้อย"
                  }else{
                    description = "เมฆกระจายตัว"
                  }

                  document.getElementById("weather_id").value = id;
                  document.getElementById("weather").value = description;
                  document.getElementById("temp").value = temp;
                  document.getElementById("weather_main").value = main;
                  document.getElementById("main_pressure").value = pressure;
                  document.getElementById("main_humidity").value = humidity;
                  document.getElementById("main_temp_min").value  = main_temp_min;
                  document.getElementById("main_temp_max").value = main_temp_max;
                  document.getElementById("wind").value = wind;
                  document.getElementById("clouds").value = clouds;
                  document.getElementById("dt_weather").value = dt_weather;
                  document.getElementById("weather_description").value = des;

                  console.log(peacode);
                   var fedder = data['fedder']['label'];
                   console.log(fedder);
                   $("#fedder").empty();
                   var i,y = "";
                   for (i in fedder){
                     y += "<option value=\""+fedder[i]+"\">"+fedder[i]+"</option>";
                   }

                   $('#fedder').append(y);
                };
              })

              return false;

            };
          })

        }
}

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
    url: "https://rc2backend.herokuapp.com/api/lineliff/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "created_by": document.getElementById("staffid").value,
      "datehappen" : document.forms["myForm"]["datehappen"].value,
      "timehappen" : document.forms["myForm"]["timehappen"].value,
      "daterestore" : document.forms["myForm"]["daterestore"].value,
      "timerestore" : document.forms["myForm"]["timerestore"].value,
      "trip": trip,
      "peacode": document.forms["myForm"]["peacode"].value,
      "equipcode": document.forms["myForm"]["equipcode"].value,
      "fedder": document.forms["myForm"]["fedder"].value,
      "fedderwork": document.forms["myForm"]["fedderwork"].value,
      "relay": document.forms["myForm"]["relay"].value,
      "load": document.forms["myForm"]["load"].value,
      "equipstrat": document.forms["myForm"]["equipstrat"].value,
      "equipend": document.forms["myForm"]["equipend"].value,
      "Zone": document.forms["myForm"]["Zone"].value,
      "load_A": document.forms["myForm"]["load_A"].value,
      "load_B": document.forms["myForm"]["load_B"].value,
      "load_C": document.forms["myForm"]["load_C"].value,
      "load_G": document.forms["myForm"]["load_G"].value,
      "distance": document.forms["myForm"]["distance"].value,
      "maincause": maincause,
      "course": document.forms["myForm"]["course"].value,
      "weather": document.forms["myForm"]["weather"].value,
      "temp": document.forms["myForm"]["temp"].value,
      "weather_id": document.getElementById("weather_id").value,
      "weather_main": document.getElementById("weather_main").value,
      "weather_description": document.getElementById("weather_description").value,
      "main_pressure": document.getElementById("main_pressure").value,
      "main_humidity": document.getElementById("main_humidity").value,
      "main_temp_min": document.getElementById("main_temp_min").value,
      "main_temp_max": document.getElementById("main_temp_max").value,
      "wind": document.getElementById("wind").value,
      "clouds": document.getElementById("clouds").value,
      "dt_weather": document.getElementById("dt_weather").value,
      "sitearea":document.forms["myForm"]["sitearea"].value,
      "area": document.forms["myForm"]["happenarea"].value,
      "subhappenarea": document.forms["myForm"]["subhappenarea"].value,
      "electrician": document.forms["myForm"]["electricianID"].value,
      "causetype": document.forms["myForm"]["country"].value,
      "subcause": document.forms["myForm"]["city"].value,
      "detail": document.forms["myForm"]["detail"].value
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

       window.location.replace("https://som501103.github.io/")

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

function ComIDfilter(){
  jQuery.ajax({
    // url: "https://rc2backend.herokuapp.com/api/equipeodefilter/",
    url: "http://127.0.0.1:8000/api/equipeodefilter/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "fedder" : document.forms["myForm"]["fedder"].value

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded fedderfilter: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {
         console.log(fedder);
          var equipcode = data['equipcode']['label'];
          console.log(equipcode);
          $("#equipcode").empty();
          $("#equipstrat").empty();
          var i,y = "";
          for (i in equipcode){
            y += "<option value=\""+equipcode[i][1]+"\">"+equipcode[i][1]+"</option>";
          }
          $('#equipcode').append(y);
          $('#equipstrat').append(y);

          $("#equipend").empty();
          var i,x = "";
          for (i in equipcode){
            x += "<option value=\""+equipcode[i][1]+"\">"+equipcode[i][1]+"</option>";
          } x += "<option value=\"end\">End</option>";
          $("#equipend").append(x);

          var peaarea = data['peaarea']['label'][0];
          console.log(peaarea);


          var areaname = data['peaarea']['area'][1];
          var br_code = data['peaarea']['area'][0];
          console.log("areaname"+areaname);
          document.getElementById("happenarea1").value = areaname;
          document.getElementById("happenarea").value = br_code;
          document.getElementById("Br_code").value = br_code;

          jQuery.ajax({
            url: "https://rc2backend.herokuapp.com/api/getsubpeacode/",
            // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
            type: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349"
            },
            dataType: 'json',
            data: JSON.stringify({
              "happenarea" : br_code
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

      };
    })

    return false;

}


function FunctionAutoweather() {
      var w = document.getElementById("peacode").value;
      jQuery.ajax({
        url: "https://rc2backend.herokuapp.com/api/scada/",
        // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
        type: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
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
            }else if(des=="few clouds"){
              description = "เมฆน้อย"
            }

            document.getElementById("weather").value = description;

          };
        })


        return false;

  }

function functionpredict(){
    var intA =document.getElementById('load_A').value;
    var intB =document.getElementById('load_B').value;
    var intC =document.getElementById('load_C').value;
    var intG =document.getElementById('load_G').value;
    var intload =document.getElementById('load').value;
    var nA = parseInt(intA);
    var nB = parseInt(intB);
    var nC = parseInt(intC);
    var nG = parseInt(intG);
    var nload = parseInt(load);
    var show=document.getElementById('hide');
    var result = 0;
    var weather = document.getElementById("weather").value;

    result = nA+nB+nC+nG+nload;
    show.value= result;

    if(weather=="ฝนตกบางเบา"){
        if(result>=1000){
          document.getElementById("country").value = "TC002";
          document.getElementById("city").value = "CC02001";
        }
        else if(result<1000){
          // document.getElementById('country').options[document.getElementById('country').selectedIndex].value = "TC004";
          document.getElementById("country").value = "TC004";
          document.getElementById("city").value = "CC04003";
        }
      }
      // document.getElementById('country').options[document.getElementById('country').selectedIndex].value = "TC005";
    else if(weather=="ฝนตกหนัก"){
      if(result>=1000){
        document.getElementById("country").value = "TC001";
        document.getElementById("city").value = "CC01001";
      }
      }else{
        document.getElementById("country").value = "TC005";
        document.getElementById("city").value = "CC05001";
      }

    console.log(result);
  }

function functionRelation(){
  var happenarea = document.getElementById("happenarea1").value;
  console.log(happenarea);
  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/getsubpeacode/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
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

      if(isNaN(document.myForm.load.value)){
        alert('เฉพาะตัวเลขเท่านั้น');
        document.myForm.load.focus();
        return false
      }else if(isNaN(document.myForm.distance.value)){
        alert('เฉพาะตัวเลขเท่านั้น');
        document.myForm.distance.focus();
        return false
      }

}
