

// Default user
const account = {
    username: "admin",
    password: "1234",
    balance: 1000
};

// Login Function
function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === account.username && password === account.password) {

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";

        document.getElementById("user").innerText = username;

        updateBalance();

    } else {

        document.getElementById("loginMessage").innerText =
            "Invalid username or password";

    }
}

// Update Balance
function updateBalance() {

    document.getElementById("balance").innerText =
        account.balance.toFixed(2);
}

// Deposit Function
function deposit() {

    const amount =
        parseFloat(document.getElementById("depositAmount").value);

    if(amount > 0) {

        account.balance += amount;

        updateBalance();

        addTransaction(Deposited $${amount});

        document.getElementById("depositAmount").value = "";

    } else {

        alert("Enter a valid amount");
    }
}

// Withdraw Function
function withdraw() {

    const amount =
        parseFloat(document.getElementById("withdrawAmount").value);

    if(amount > 0 && amount <= account.balance) {

        account.balance -= amount;

        updateBalance();

        addTransaction(Withdrew $${amount});

        document.getElementById("withdrawAmount").value = "";

    } else {

        alert("Insufficient balance or invalid amount");
    }
}

// Transaction History
function addTransaction(message) {

    const li = document.createElement("li");

    li.innerText = message;

    document.getElementById("transactionList").appendChild(li);
}