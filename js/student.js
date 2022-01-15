function getResult(){
    if (data) {
        M.toast({html: '로딩중...',inDuration: 200, outDuration:200})
    } else {
        M.toast({html: '잠시후 다시 시도하세요.',inDuration: 200, outDuration:200})
        return;
    }
    let url = 'https://script.google.com/macros/s/AKfycbz48SfrCNoyzAC2Y4cassb96sI35bHVK6wXZ12gB4x9yr6JPzBeerH7Tj_DONO6js4ziQ/exec'
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            studentData = json.list
            var studentNumber = document.getElementById("schoolNumber").value;
            var resultFirstClub1 = document.getElementById("resultFirstClub1");
            var myselfFirstClub1 = document.getElementById("myselfFirstClub1");
            var passOrNotFirstClub1 = document.getElementById("passOrNotFirstClub1");
            var resultFirstClub2 = document.getElementById("resultFirstClub2");
            var myselfFirstClub2 = document.getElementById("myselfFirstClub2");
            var passOrNotFirstClub2 = document.getElementById("passOrNotFirstClub2");
            var resultSecondClub1 = document.getElementById("resultSecondClub1");
            var myselfSecondClub1 = document.getElementById("myselfSecondClub1");
            var passOrNotSecondClub1 = document.getElementById("passOrNotSecondClub1");
            var resultSecondClub2 = document.getElementById("resultSecondClub2");
            var myselfSecondClub2 = document.getElementById("myselfSecondClub2");
            var passOrNotSecondClub2 = document.getElementById("passOrNotSecondClub2");
            for (let student of studentData) {
                if (student.number == studentNumber) {
                    resultFirstClub1.innerHTML = student.resultFirstClub1;
                    myselfFirstClub1.innerHTML = `<a href='${data[student.firstClub1].myself}'>클릭</a>`;
                    passOrNotFirstClub1.innerHTML = student.passOrNotFirstClub1;
                    resultFirstClub2.innerHTML = student.resultFirstClub2;
                    myselfFirstClub2.innerHTML = `<a href='${data[student.firstClub2].myself}'>클릭</a>`;
                    passOrNotFirstClub2.innerHTML = student.passOrNotFirstClub2;
                    resultSecondClub1.innerHTML = student.resultSecondClub1;
                    myselfSecondClub1.innerHTML = `<a href='${data[student.secondClub1].myself}'>클릭</a>`;
                    passOrNotSecondClub1.innerHTML = student.passOrNotSecondClub1;
                    resultSecondClub2.innerHTML = student.resultSecondClub2;
                    myselfSecondClub2.innerHTML = `<a href='${data[student.secondClub2].myself}'>클릭</a>`;
                    passOrNotSecondClub2.innerHTML = student.passOrNotSecondClub2;
                    return;
                }
            }
            M.toast({html: '학번이 올바르지 않아요.',inDuration: 200, outDuration:200})
        }).catch(() => {
            console.log('error')
    });
}

function sign(){
    var appliForm = document.getElementById("application");
    var schoolNumber = appliForm.schoolNum.value;
    var name = appliForm.name.value;
    var firstClub1 = appliForm.firstClub1.options[appliForm.firstClub1.options.selectedIndex].value;
    var firstClub2 = appliForm.firstClub2.options[appliForm.firstClub2.options.selectedIndex].value;
    var secondClub1 = appliForm.secondClub1.options[appliForm.secondClub1.options.selectedIndex].value;
    var secondClub2 = appliForm.secondClub2.options[appliForm.secondClub2.options.selectedIndex].value;
    console.log(schoolNumber,name, firstClub1, firstClub2, secondClub1, secondClub2)
    if (!schoolNumber || !name || !firstClub1 || !firstClub2 || !secondClub1 || !secondClub2) {
        M.toast({html: '모두 입력해 주세요.',inDuration: 200, outDuration:200})
        return
    } else if(isNaN(schoolNumber) || schoolNumber.length != 5 ) {
        M.toast({html: '올바른 학번을 입력해 주세요.',inDuration: 200, outDuration:200})
        return
    } else if (firstClub1 == firstClub2 || secondClub1 == secondClub2) {
        M.toast({html: '동아리를 중복해서 신청할 수 없습니다.',inDuration: 200, outDuration:200})
        return
    }
    fetch("https://script.google.com/macros/s/AKfycbykBSZN_j6GgkcGJdsDC60N8vCYk5h0fXzCCTs7knNpaoqXYg25JYUpsG69J7XW0a9qJQ/exec", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        number : schoolNumber,
        name : name,
        firstClub1 : firstClub1,
        firstClub2 : firstClub2,
        secondClub1 : secondClub1,
        secondClub2 : secondClub2,
    }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.result == "modify") {
            M.toast({html: '수정되었습니다.',inDuration: 200, outDuration:200})
        } else if (data.result == "success") {
            M.toast({html: '신청되었습니다.',inDuration: 200, outDuration:200})
        }
    });
    return
    
}