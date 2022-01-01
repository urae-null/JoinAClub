function loadClubList(){
    let url = 'https://script.google.com/macros/s/AKfycbz48SfrCNoyzAC2Y4cassb96sI35bHVK6wXZ12gB4x9yr6JPzBeerH7Tj_DONO6js4ziQ/exec'
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            data = json.list
            var firstClubExplain = document.getElementById('firstClubExplain')
            var secondClubExplain = document.getElementById('secondClubExplain')
            firstClubExplain.innerHTML = ''
            secondClubExplain.innerHTML = ''
            for (let i in data) {
                if (data[i].group == 1) {
                    document.getElementById('firstList').innerHTML += `<div class="${i}" onclick="moveY(${i},1)">${data[i].name}</div>`
                    document.getElementById('firstClub1').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                    document.getElementById('firstClub2').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                    firstClubExplain.innerHTML += clubContainer(data[i])
                } else if (data[i].group == 2) {
                    document.getElementById('secondList').innerHTML += `<div class="${i}" onclick="moveY(${i-10},2)">${data[i].name}</div>`
                    document.getElementById('secondClub1').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                    document.getElementById('secondClub2').innerHTML += `<option value=${data[i].name}>${data[i].name}</option>`
                    secondClubExplain.innerHTML += clubContainer(data[i])
                }
            }
            document.getElementById('firstClub2').innerHTML += `<option value=none>없음</option>`
            document.getElementById('secondClub1').innerHTML += `<option value=none>없음</option>`
            document.getElementById('secondClub2').innerHTML += `<option value=none>없음</option>`
        }).catch(() => {
            console.log('error')
    });
}

function clubContainer(data) {
    var container = `
    <div id="${data.name}" style="display:flex;">
    <div class="clubPoster">
        <img style="width: 80%; margin: auto;">
    </div>
    <div style="height: 720px; width: 50%;">
        <div style="height: 195px;">
            <img style="width: 62px; height: 62px; text-align: left;">
            <p class="clubName">${data.name}</p>
        </div>
        <div class="clubType">제${data.group}동아리</div>
        <div class="clubSubject">${data.subject}</div>
        <div class="clubIntroTitle">소개</div>
        <div class="clubIntro">
            ${data.intro}
        </div>
        <footer style="margin-top: auto; margin-bottom: 17px;">
            <div style="text-align: center; margin: 28px; display: flex; align-items: center; justify-content: center;">
                <div class="clubInterview">면접<br>${data.interview}</div>
                <div class="clubMyself">자소서<br>${data.myself}</div>
            </div>
            <div class="clubInterviewDate">면접 일시 - ${data.date}</div>
            </div>
        </footer>
    </div>
    </div>`;
    return container;
}

function moveY(cnt, group) {
    if (group == 1) {
        var clubExplain = document.getElementById("firstClubExplain");
    } else if (group == 2) {
        var clubExplain = document.getElementById("secondClubExplain");
    }
    clubExplain.style.transform = `translateY(-${cnt*720}px)`
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