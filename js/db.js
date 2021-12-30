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
                    document.getElementById('firstClub1').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                    document.getElementById('firstClub2').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                } else if (data[i].group == 2) {
                    document.getElementById('secondList').innerHTML += `<div class="${i}">${data[i].name}</div>`
                    document.getElementById('secondClub1').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                    document.getElementById('secondClub2').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                }
            }
            document.getElementById('firstClub2').innerHTML += `<option value=none>없음</option>`
            document.getElementById('secondClub1').innerHTML += `<option value=none>없음</option>`
            document.getElementById('secondClub2').innerHTML += `<option value=none>없음</option>`
        }).catch(() => {
            console.log('error')
    });
}

function sign(){
    var loginForm = document.loginForm;
    var userId = loginForm.userId.value;
    var password = loginForm.password.value;
    
    if(!userId || !password){
        alert("아이디와 비밀번호를 모두 입력해주세요.")
    }else{
        loginForm.submit();
    }
}