speak = (str) => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = str;
    window.speechSynthesis.speak(speech);
    console.log("executed speak")
};


document.querySelector('#mn1').onclick = () => {
    speak(" LINA KI RUBY Say FRIENDSHIP Heyy");
    }

document.querySelector('#mn2').onclick = () => {
    speak(" BETA MAaN GAY CAR SCOOTER BAP RAJI");
}
document.querySelector('#mn3').onclick = () => {
    speak(" BaL GANGA DHAR TALES");
}

document.querySelector('#mn4').onclick = () => {
    speak(" CHAL AE SHIV JI SUNG PAR BATI");
}

document.querySelector('#mn5').onclick = () => {
    speak(" NAHI PASAND AS AE SUB BHAI");
}

document.querySelector('#mn6').onclick = () => {
    speak(" MNEMONIC UNAVAILABLE CURRENTLY");
}

document.querySelector('#mn7').onclick = () => {
    speak(" MNEMONIC UNAVAILABLE CURRENTLY");
}

document.querySelector('#mn8').onclick = () => {
    speak(" HE NEVER ARRIVED; KARAN ZERO PAY OUT");
}
