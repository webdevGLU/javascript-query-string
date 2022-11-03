const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
var voornaam = params.voornaam; // "voornaam"
var tussenvoegsel = params.tussenvoegsel; // "tussenvoegsel"
var achternaam = params.achternaam; // "achternaam"
var straat = params.straat; // "achternaam"

document.write(voornaam+" "+tussenvoegsel+" "+achternaam);
document.write("<br>"+straat);
// document.write(" "+tussenvoegsel+" ");
// document.write(achternaam);