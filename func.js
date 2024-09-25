const wallet = document.getElementById('wallet-balance');
document.getElementById('blog').addEventListener('click', ()=>{
    window.location.href = './blog.html'
})
let balance = 5500;
wallet.innerText = balance;

function donateButton(totalDonateId, input, btn){
    let currentDonation = parseFloat(totalDonateId.innerText);
    
    if(input.value === '' || parseFloat(input.value) <= 0){
        alert('Invalid amount');
    }else if(parseFloat(input.value) > balance) {
        alert("You Don't Have Enough Money");
    }else{
        let donationAmount = parseFloat(input.value);
        balance -= donationAmount;
        currentDonation += donationAmount;
        totalDonateId.innerText = currentDonation;
        wallet.innerText = balance;
    }
    
    
    if(input.value === '' || parseFloat(input.value) > balance || parseFloat(input.value) <= 0){
        if(btn.hasAttribute("popovertarget")) { 
            btn.removeAttribute("popovertarget");
            console.log('Apni kono tk den nai othoba 0/- amount tk disen shei jonno modal open hoinai :)');
        }
    }else{
        btn.setAttribute("popovertarget", "popup");
    }    
    
    if(input.value === '' || parseFloat(input.value) > balance || parseFloat(input.value) <= 0){
        console.log('etihash apnake mone rakhbena :(')
    }else{

    }

    if(input.value === '' || parseFloat(input.value) > balance || parseFloat(input.value) <= 0){
        console.log('etihash apnake mone rakhbena :(')
    }else{
        const currentDate = new Date();
        const formattedDate = currentDate.toString();


        let buttonclickText = '';
        if(btn.id === 'button1'){
            buttonclickText = 'Taka is Donate for Flood at Noakhali, Bangladesh'
        }else if(btn.id === 'button2'){
            buttonclickText = 'Taka is Donate for Flood Relief in Feni,Bangladesh'
        }else if(btn.id === 'button3'){
            buttonclickText = 'Taka is Aid for Injured in the Quota Movement';
        }

        let div = document.createElement('div');
        div.innerHTML = 
        `
        <div>
            <h2>${input.value} ${buttonclickText}</h2>
            <p>Date : ${formattedDate}</p>   
        </div><br>
        `;

        historySection.appendChild(div);
        historySection.classList.add('extra')
        historySection.classList.add('hide')
    }
    
    

    input.value = '';
}


// Donate & History Toggle

let donateSection = document.getElementById('donate-sec');
let historySection = document.getElementById('history-sec');
let donateSectionButton = document.getElementById('donateSectionButton');
let historySectionButton = document.getElementById('historySectionButton');


donateSectionButton.addEventListener('click', ()=>{
    donateSection.classList.remove('hide')
    donateSectionButton.classList.add('active')
    historySection.classList.add('hide')
    historySectionButton.classList.remove('active')
})

historySectionButton.addEventListener('click', ()=>{
    donateSection.classList.add('hide')
    donateSectionButton.classList.remove('active')
    historySection.classList.remove('hide')
    historySectionButton.classList.add('active')
    if(historySection.classList.contains('extra')){
        historySection.classList.remove('extra')
    }
})

function btn1() {
    donateSection.classList.remove('hide')
    donateSectionButton.classList.add('active')
    historySection.classList.add('hide')
    historySectionButton.classList.remove('active')
}
function btn2() {
    donateSection.classList.add('hide')
    donateSectionButton.classList.remove('active')
    historySection.classList.remove('hide')
    historySectionButton.classList.add('active')
    if(historySection.classList.contains('extra')){
        historySection.classList.remove('extra')
    }
}

function open() {
    document.getElementById('opens').style.display = 'block';
}
function close() {
    document.getElementById('opens').style.display = 'none';
}