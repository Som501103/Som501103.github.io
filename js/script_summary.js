function getstaffid(){
  console.log(document.getElementById("datestart").value);
  var datestart = document.getElementById("datestart").value;
  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/summarytable/",
    // url: "https://e89704f8.ngrok.io/api/linegraph/",
    // url: "http://127.0.0.1:8000/api/linegraph/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "staffid" : "486808",
      "datestart" : datestart
    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {
        var dataSet = data['totalevent'];

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
