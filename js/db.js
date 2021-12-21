function loadClubList(){
    let url = 'https://script.google.com/macros/s/AKfycbz48SfrCNoyzAC2Y4cassb96sI35bHVK6wXZ12gB4x9yr6JPzBeerH7Tj_DONO6js4ziQ/exec'
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            data = json.list
            for (let i in data) {
                if (data[i].group == 1) {
                    document.getElementById('firstList').innerHTML += `<div class="${i}">${data[i].name}</div>`
                } else if (data[i].group == 2) {
                    document.getElementById('secondList').innerHTML += `<div class="${i}">${data[i].name}</div>`
                }
            }
        }).catch(() => {
            console.log('error')
    });
}