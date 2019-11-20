const client_ID= "Iv1.07ffa0f13300b328";
const client_secret= "79b29273c47a23ce699955a79bfd96aad6a4ddea";


function getUserInfo()
{
    let request = new XMLHttpRequest()
    selectedValue=document.getElementById("username").value;
    console.log(selectedValue)
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'http://api.github.com/users/'+selectedValue+'?client_id='+client_ID+'&client_secret='+client_secret, true)
    request.onload = function() 
     {
    // Begin accessing JSON data here
        let data = JSON.parse(this.response);
        console.log(data);
        document.getElementById("repo").innerHTML=data.public_repos;
        document.getElementById("name").innerHTML=data.login;
        document.getElementById("link").innerHTML=data.html_url;
        document.getElementById("location").innerHTML = data.location;
        document.getElementById("location").innerHTML = data.location;
       
      

       
        
        // document.getElementById("button1").style.visibility = "visible";
        // document.getElementById("button2").style.visibility = "visible";
        //   document.getElementById("button1").style.outline = "none";
        // let icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
        // $("#icon").attr("src",icon);
        // document.getElementById("button2").disabled = false;
      }
      request.send();

}