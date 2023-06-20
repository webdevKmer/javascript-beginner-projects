const addTransactionBtn = document.getElementById("add-transaction-btn")
const entreeBtn = document.getElementById("entree-btn")
const sortieBtn = document.getElementById("sortie-btn")
const mvtInputElt = document.getElementById("mvt-label")
const amountInputElt = document.getElementById("mvt-amount")
const typeInputElt = document.getElementById("mvt-type")
const formMessage = document.querySelector(".message")

const resetForm = () => {
    mvtInputElt.value = "";
    amountInputElt.value = "";
    typeInputElt.value = "entree";
}
let transactions = []
let total = 0
let total_entrees = 0
let total_sorties = 0

entreeBtn.addEventListener('click', () => {
    console.log("Je liste les entrees...");
    let filtered_transactions = transactions.filter((transaction) => transaction.type == "entree")
    console.log(filtered_transactions);
    total_entrees = 0
    filtered_transactions.forEach((transac)=>{
        total_entrees += parseInt(transac.amount)
    })
    console.log(total_entrees);

})
sortieBtn.addEventListener('click', () => {
    console.log("Je liste les sorties...");
    let filtered_transactions = transactions.filter((transaction) => transaction.type == "sortie")
    console.log(filtered_transactions);
    total_sorties = 0
    filtered_transactions.forEach((transac)=>{
        total_sorties += parseInt(transac.amount)
    })
    console.log(total_sorties);
})
addTransactionBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(mvtInputElt.value == ""){
        formMessage.textContent = "Enter a Label for the transcaction"
    } else if (amountInputElt.value == ""){
        formMessage.textContent = "Enter an amount for the transcaction"
    } else {
        transaction = {
            'label': mvtInputElt.value,
            'amount': amountInputElt.value,
            'type': typeInputElt.value,
        }
        transactions.push(transaction)
    }
    console.log(transactions);
    document.querySelector('.mvt-list').innerHTML = 
    transactions.map(transaction => (
        `<tr>
            <td class="mvt-label">${transaction.label}</td>
            <td class="mvt-type">${transaction.type}</td>
            <td class="mvt-amount">${transaction.amount}</td>
        </tr>`
    )).join("")
    total = 0
    transactions.forEach((transac)=>{
        if(transac.type == 'sortie'){
            total -= parseInt(transac.amount)
        }else{
            total += parseInt(transac.amount)
        }
    })
    // total = parseInt(total_entrees - total_sorties)
    console.log(total_entrees, total_sorties, total);
    document.querySelector('#total').innerHTML = total

    resetForm()
})