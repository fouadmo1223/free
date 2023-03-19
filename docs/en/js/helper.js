//  get variable server domain



async function GetServerDomain() {
    try {
        const response = await fetch('https://api.github.com/gists/458cc68066d2c1e0fa01ba1271e81699');
        const gist = await response.json();
        const content = gist.files['ngrok.txt'].content;
        return content;
    } catch (error) {
        console.error(error);
    }
}

function addanimations() {
    $(".watingtext").addClass("animate__tada");
    setTimeout(function() {
        $(".watingtext").removeClass("animate__tada")
    }, 1000)
}













// get server domain from json file 

function getServerDomainJson() {
    $.getJSON("../json/file.json", function(data) {

        return data['apiurl'];
    })
}