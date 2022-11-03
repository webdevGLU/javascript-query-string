const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let voornaam = params.voornaam; // "some_value"
let tussenvoegsel = params.tussenvoegsel; // "some_value"
let achternaam = params.achternaam; // "some_value"
document.write(voornaam);
document.write(" "+tussenvoegsel+" ");
document.write(achternaam);