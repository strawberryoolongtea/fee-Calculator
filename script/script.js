        /////////////////////////////
        // 체크인 체크아웃 날짜 부분 //
        /////////////////////////////
        
let currentDate = new Date().toISOString().substring(0, 10)
let nextDate = currentDate.split('-').map(function(day,index){
                    if (index === 2){
                        day++;
                        if ((day+"").length === 2){
                            return day+"";
                        }else{
                            return '0'+ day+""
                        }
                    }else{
                        return day;
                    }
                }).join('-');
document.querySelector('input#checkInCal').value = currentDate;
document.querySelector('input#checkOutCal').value = nextDate;

        /////////////////////////////////
        // 방 종류 별로 가격 나오는 부분 //
        /////////////////////////////////

let roomSizeArr = [...document.querySelectorAll('.roomSelected')]
let roomFeeArr = ['100,000', '200,000', '300,000', '400,000'];

for (let i=0;i<roomSizeArr.length;i++){
    roomSizeArr[i].addEventListener('click', function (){
        for (let i=0;i<roomSizeArr.length;i++){
            if (this === roomSizeArr[i]){
                document.querySelector('div#roomFeeBox').innerText = roomFeeArr[i];
                document.querySelector('div#roomFeeBox').value = this.innerText;
                this.style.backgroundColor = 'rgb(224, 193, 80)';
            }
        }
    })
}

        //////////////
        /// 인원 수 ///
        //////////////

let countButton = [...document.querySelectorAll('button.countButton')];
for (let i=0;i<countButton.length;i++){
    countButton[i].addEventListener('click',function(){
        if(this.parentNode === document.querySelector('div#adult')){
            if (document.querySelector('input#adultCount').value <= 0) {
                if(this.innerText === '+'){
                    document.querySelector('input#adultCount').value++;
                }
            }else{
                this.innerText === '-' ?
                document.querySelector('input#adultCount').value-- : document.querySelector('input#adultCount').value++;
            }
        }else{
            if (document.querySelector('input#childCount').value <= 0) {
                if(this.innerText === '+'){
                    document.querySelector('input#childCount').value++;
                }
            }else{
                this.innerText === '-' ?
                document.querySelector('input#childCount').value-- : document.querySelector('input#childCount').value++;
            }
        }
    })
}

        //////////////
        // 계산 버튼 //
        //////////////

document.querySelector('input#calculate').addEventListener('click',function(){
    // 체크인
    let checkInValue = document.querySelector('input#checkInCal')/value;
    // 체크아웃
    let checkOutValue = document.querySelector('input#checkOutCal').value;
    // 객실
    // 요금
    let roomSizeValue = document.querySelector('div#roomFeeBox').value;
    let roomFeeValue = document.querySelector('div#roomFeeBox').innerText;
    // 인원
    // 성인
    let adultValue = document.querySelector('input#adultCount').value;
    // 아동
    let childValue = document.querySelector('input#childCount').value;

})