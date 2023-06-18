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

entreeBtn.addEventListener('click', () => {
    console.log("Je liste les entrees...");
    let filtered_transactions = transactions.filter((transaction) => transaction.type == "entree")
    console.log(filtered_transactions);
    total = filtered_transactions.reduce((acc, curValue) => { return acc + curValue }, 0)
    console.log(total);

})
sortieBtn.addEventListener('click', () => {
    console.log("Je liste les sorties...");
    let filtered_transactions = transactions.filter((transaction) => transaction.type == "sortie")
    console.log(filtered_transactions);
    total = filtered_transactions.reduce((arr, trans) => { 
        trans.amount += trans.amount;        
        return arr }, [])
    console.log(total);
})
addTransactionBtn.addEventListener('click', (e) => {
    e.preventDefault()
    transaction = {
        'label': mvtInputElt.value,
        'amount': amountInputElt.value,
        'type': typeInputElt.value,
    }
    transactions.push(transaction)
    console.log(transactions);
    document.querySelector('.mvt-list').innerHTML = 
    transactions.map(transaction => (
        `<tr>
            <td class="mvt-label">${transaction.label}</td>
            <td class="mvt-type">${transaction.type}</td>
            <td class="mvt-amount">${transaction.amount}</td>
        </tr>`
    )).join("")

    document.querySelector('#total').innerHTML = total

    resetForm()
})