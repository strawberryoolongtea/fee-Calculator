function roomSize(){
    let room_Arr = ['Single', 'Double', 'Suite', 'Deluxe'];
}

function deleteChildren(parent){
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}

let roomOption = document.getElementById('roomOption');
let optionList = document.getElementById('optionList');

roomOption.addEventListener('click', () => {
    let optionType = [
        { type: 'single', fee: 100000 },
        { type: 'double', fee: 200000 },
        { type: 'suite', fee: 300000 },
        { type: 'deluxe', fee: 400000 },
    ];

    let click = true;

    if (click === true) {
        for (let i = 0; i < optionType.length; i++) {
            let newRoom = document.createElement('div');
            newRoom.innerHTML = optionType[i].type;
            optionList.appendChild(newRoom);
        }
        click = false;
    } else {
        roomOption.removeChild(roomOption.firstChild);

        click = true;
    }
})