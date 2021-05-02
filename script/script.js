function roomSize(){
    let room_Arr = ['Single Room', 'Double Room', 'Twin Room', 'Suite Room'];
    for(let i=0;i<room_Arr.length;i++){
        let newRoom = document.createElement('div');
        newRoom.innerHTML = room_Arr[i]
        newRoom.setAttribute('class', 'roomOption inlineBlock');
        document.querySelector('div#roomOption').appendChild(newRoom);
    }
}

function deleteChildren(parent){
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}

for (let i=0;i<checkBoxes.length;i++){
    checkBoxes[i].addEventListener('click', function(){
        if (this === checkBoxes[0]){
            if (this.checked){
                roomSize();
            }else{
                deleteChildren(document.querySelector('div#roomOption'));
            }
        }else if(this === checkBoxes[1]){
            console.log(1)
        }else{
            console.log(2)
        }
    })
}