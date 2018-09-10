const API_URL = 'https://swapi.co/api';
const PEOPLE_URL = 'people/:id';


const opts = { crossDomain: true };
for (var i = 1; i < 5; i++) {
    const URL = `${API_URL}/${PEOPLE_URL.replace(':id', i)}`;
    $.get(URL, opts, function (data) {
        console.log(`mi nombre es ${data.name}`)
    })
}
