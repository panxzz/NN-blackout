$.getScript("http://novanetllc.org/datetime.php", function(data, textStatus, jqxhr){
    if(jqxhr == 200 && textStatus == "success")
    {
        console.log("server returned date: " + data);
    }
});