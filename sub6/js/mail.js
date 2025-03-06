// 메일 전송
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_xxahbpq', 'template_zcpt63k', this)
        .then(() => {
            console.log('SUCCESS!');
            alert('메일 전송에 성공하였습니다.');
            location.href = './sub6_3.html';
        }, (error) => {
            console.log('FAILED...', error);
            alert('메일 전송에 실패하였습니다.');
        });
});

// 메일 tab

//탭 버튼과 탭 내용 담기
const tabCli = document.querySelectorAll(".tab_m")

tabCli.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        tabMail(item);
    });
});


function tabMail() {
    document.querySelector('.tab_m').classList.toggle('active');
   
    document.querySelector('.list').classList.toggle('active');

}


