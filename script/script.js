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
let roomFeeArr = [100000, 200000, 300000, 400000];

for (let i=0;i<roomSizeArr.length;i++){
    roomSizeArr[i].addEventListener('click', function (){
        console.log(this)
        for (let i=0;i<roomSizeArr.length;i++){
            if (this === roomSizeArr[i]){
                document.querySelector('div#roomFeeBox').innerText = roomFeeArr[i];
                document.querySelector('div#roomFeeBox').value = this.innerText + ' Room';
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

function clickCalculate(obj){
    for(let i in obj){
        if (obj[i][1] !== undefined){
            obj[i][1].innerText = obj[i][0]
        }
    }
    
    // 계산된금액
    calculatedPrice = document.getElementById('calculatedPrice');
    
    if (childValue !== 0) {
        switch (childValue) {
            case '1' :
                childFee = 10000;
                break;
            case '2' :
                childFee = 20000;
                break;
            case '3' :
                childFee = 30000;
                break;
            default :
            childFee = 50000;
        }
                    
        totalFee = parseInt(roomFeeValue, 10);
    }
    calculatedPrice.innerHTML = (totalFee += childFee).toLocaleString();
}

document.querySelector('input#calculate').addEventListener('click',function(){
    document.querySelector('div#mainPage').style.display = 'none';
    document.querySelector('div#receiptPage').style.display = 'block';
    // 체크인
    checkInValue = document.querySelector('input#checkInCal').value;
    // 체크아웃
    checkOutValue = document.querySelector('input#checkOutCal').value;
    // 객실
    roomSizeValue = document.querySelector('div#roomFeeBox').value;
    // 요금
    roomFeeValue = document.querySelector('div#roomFeeBox').innerText;
    // 인원
    // 성인
    adultValue = document.querySelector('input#adultCount').value;
    // 아동
    childValue = document.querySelector('input#childCount').value;

    let receiptObj = {
        checkIn: [checkInValue, receiptCheckIn],
        checkOut: [checkOutValue, receiptCheckOut],
        roomSize: [roomSizeValue, receiptRoom],
        roomFee: [roomFeeValue],
        adult: [adultValue, receiptAdult],
        child: [childValue, receiptChild]
    }
    clickCalculate(receiptObj);
})

//뒤로가기 버튼
document.querySelector('button#back').addEventListener('click',function(){
    document.querySelector('div#mainPage').style.display = 'block';
    document.querySelector('div#receiptPage').style.display = 'none';
})