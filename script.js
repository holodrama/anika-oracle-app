document.getElementById("enter-btn").onclick = () => {
    document.getElementById("door-screen").classList.add("hidden");
    document.getElementById("oracle-room").classList.remove("hidden");
};

document.getElementById("oracle-form").onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const question = document.getElementById("question").value;
    const result = `Email: ${email} | Question: ${question || 'Held in mind'} | Oracle: Awaiting message...`;
    document.getElementById("result").innerText = result;
    document.getElementById("result").classList.remove("hidden");
};

function generateMessage() {
    document.getElementById("result").innerText = "Oracle message: 'You are held in the mirror of truth.'";
    document.getElementById("result").classList.remove("hidden");
}

function insertMessage() {
    const msg = prompt("Enter your Oracle message:");
    if (msg) {
        document.getElementById("result").innerText = "Your Oracle message: " + msg;
        document.getElementById("result").classList.remove("hidden");
    }
}

function speakMessage() {
    alert("Voice input not supported in this prototype.");
}