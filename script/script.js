let roomSizeArr = [...document.querySelectorAll('.roomSelected')]
let roomFeeArr = ['100,000', '200,000', '300,000', '400,000'];

for (let i=0;i<roomSizeArr.length;i++){
    roomSizeArr[i].addEventListener('click', function (){
        for (let i=0;i<roomSizeArr.length;i++){
            if (this === roomSizeArr[i]){
                document.querySelector('#roomFeeBox').innerText = roomFeeArr[i];
            }
        }
    })
}