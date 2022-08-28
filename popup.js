$(document).ready(function() {
    $("#sorgubutton").click(function() {
        const urladress = $("#url").val();
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": 'https://servers-frontend.fivem.net/api/servers/single/' + urladress,
            "method": "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest'
            }
        };

        $.ajax(settings).done(function(response) {
            console.log(response);
            $("#url").val("")
            document.querySelector("#server_name").innerText = response.Data.hostname;
            document.querySelector('#server_max_client').innerHTML = response.Data.players.length
            document.querySelector("#server_ip").innerText = response.Data.connectEndPoints;
            document.querySelector("#server_owner").innerText = response.Data.ownerName;
        });


    });

});