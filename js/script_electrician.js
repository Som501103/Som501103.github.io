// console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('id'));
var id = urlParams.get('id')
// console.log(id);


jQuery.ajax({
  url: "https://rc2backend.herokuapp.com/api/getlineliffdata/",
  // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
  // url: "https://a9107217.ngrok.io/api/getlineliffdata/",
  // url: "http://127.0.0.1:8000/api/getlineliffdata/",
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
      var id = data['id'];
      document.getElementById("id_record").value = id
      var datehappen = data['electricdata']['datehappen'];
      document.getElementById("datehappen").value = datehappen;
      var timehappen = data['electricdata']['timehappen'];
      document.getElementById("timehappen").value = timehappen;
      var daterestore = data['electricdata']['daterestore'];
      document.getElementById("daterestore").value = daterestore;
      var timerestore = data['electricdata']['timerestore'];
      document.getElementById("timerestore").value = timerestore;
      var electrician = data['electricianInfo']['name'];
      document.getElementById("electrician").innerHTML = electrician;
      var dept = data['electricianInfo']['department'];
      document.getElementById("dept").innerHTML = dept;
      var equipcode = data['electricdata']['equipcode'];
      document.getElementById("equipcode").value = equipcode;
      var fedderwork = data['electricdata']['fedderwork'];
      document.getElementById("fedderwork").value = fedderwork;
      var equipend = data['electricdata']['equipend'];
      document.getElementById("equipend").value = equipend;
      var load = data['electricdata']['load'];
      document.getElementById("load").value = load;
      var fault_current = data['electricdata']['fault_current'];
      document.getElementById("distance").value = fault_current;
      var maincause = data['electricdata']['maincause'];
      document.getElementById("maincause").value = maincause;
      var course = data['electricdata']['course'];
      document.getElementById("course").value = course;
      var country = data['electricdata']['causetype'];
      document.getElementById("country").value = country;
      var subcause = data['electricdata']['subcause'];
      document.getElementById("city").value = subcause;
      console.log(subcause);
      var detail = data['electricdata']['detail'];
      document.getElementById("detail").value = detail;
      var happenarea = data['electricdata']['happenarea'];
      document.getElementById("happenarea").value = happenarea;
      var subhappenarea = data['electricdata']['subhappenarea'];
      document.getElementById("subhappenarea").value = subhappenarea;
      document.getElementById("image1").src = data['image1'];
      document.getElementById("image2").src = data['image2'];
      document.getElementById("image3").src = data['image3'];

      // console.log(electrician);
      // console.log(btoa(data['image1']));

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


    };
  })

  function functionRelation(){
    var happenarea = document.getElementById("happenarea").value;
    console.log(happenarea);
    jQuery.ajax({
      url: "https://rc2backend.herokuapp.com/api/getsubpeacode/",
      // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
      // url:"https://a9107217.ngrok.io/api/getsubpeacode/",
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
          // console.log(data); //Return Data

          if (jqXHR.status == 200) {
              var subarea = data['subpea']['label'];
              // console.log(subarea);
              $("#subhappenarea").empty();
              var i,y = "";
              for (i in subarea){
                y += "<option value=\""+subarea[i][0]+"\">"+subarea[i][1]+"</option>";
              }

              $('#subhappenarea').append(y);
          };
        })
  }

function validateForm(){
  jQuery.ajax({
    // url: "https://a9107217.ngrok.io/api/getupdate/",
    // url: "http://127.0.0.1:8000/api/getupdate/",
    url: "https://rc2backend.herokuapp.com/api/getupdate/",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "datehappen" : document.forms["form_e1"]["datehappen"].value,
      "daterestore" : document.forms["form_e1"]["daterestore"].value,
      "timerestore" : document.forms["form_e1"]["timerestore"].value,
      "maincause" : document.forms["form_e1"]["maincause"].value,
      "course" : document.forms["form_e1"]["course"].value,
      "happenarea":document.forms["form_e1"]["happenarea"].value,
      "subhappenarea":document.forms["form_e1"]["subhappenarea"].value,
      "causetype": document.forms["form_e1"]["country"].value,
      "subcause": document.forms["form_e1"]["city"].value,
      "detail": document.forms["form_e1"]["detail"].value,
      "id" : id,
      "page": "e1",
      "image1": "image1:"+base64updte,
      "image2": "image2:"+base64updte2,
      "image3": "image3:"+base64updte3,
      "lat": lat,
      "lon": lng
    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {


       window.location.replace("https://som501103.github.io/tech-step2.html?id="+id)

      };
    })


    return false;

}
