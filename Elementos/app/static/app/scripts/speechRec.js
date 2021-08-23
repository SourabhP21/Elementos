if ("webkitSpeechRecognition" in window) {

    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";

    speak = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en";

        speech.text = document.querySelector("#final").innerHTML;
        window.speechSynthesis.speak(speech);
        console.log("executed speak")
    };



    speechRecognition.interimResults = true;
    speechRecognition.lang = "en-UK";

    speechRecognition.onstart = () => {
        document.querySelector("#status").style.display = "block";
    };

    speechRecognition.onerror = () => {
        document.querySelector("#status").style.display = "none";
        console.log("Speech Recognition Error");
    };

    speechRecognition.onresult = (event) => {
        let interim_transcript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript = event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        document.querySelector("#final").innerHTML = final_transcript;
        document.querySelector("#interim").innerHTML = interim_transcript;
    };

    document.querySelector("#start").onclick = () => {
        let final_transcript = "";
        speechRecognition.start();
    };

    speechRecognition.onend = () => {
        fl = 1;
        document.querySelector("#status").style.display = "none";
        console.log("Speech Recognition Ended");

        str = document.getElementById("final").innerHTML;
        console.log(str);

        l = 'https://api.wit.ai/message?v=20210602&q=' + str

        async function postData(url = '') {
            const response = await fetch(url, {
                headers: {
                    'authorization': 'Bearer ' + '######'
                },
            });
            return response.json();
        }

        postData(l)
            .then(data => {
                console.log(data);

                x = data["intents"];

                for (i = 0; i < x.length; i++) {
                    intent = x[i]["name"];
                    console.log(intent);
                }

                y = data["entities"]["element:element"];

                for (i = 0; i < y.length; i++) {
                    ele = y[i]["value"];
                    console.log(ele);
                }

                

                fetch("https://neelpatel05.pythonanywhere.com/")
                    .then(res => res.json())
                    .then(data => {


                        if (intent == "atmoic_no_ele") {

                            console.log("check true");

                            for (j = 0; j < data.length; j++) {

                                console.log("running loop");

                                if (data[j]["name"].toUpperCase() === ele.toUpperCase()) {
                                    console.log("match found");

                                    res = data[j]["atomicNumber"];

                                    console.log(res);
                                    break;
                                }
                            }
                            document.getElementById("final").innerHTML = "The Atomic Number of " + ele + " is " + res;
                            speak();
                        }

                        else if (intent == "atomic_mass") {

                            console.log("check true");

                            for (j = 0; j < data.length; j++) {

                                console.log("running loop");

                                if (data[j]["name"].toUpperCase() === ele.toUpperCase()) {
                                    console.log("match found");

                                    res = data[j]["atomicMass"];

                                    console.log(res);
                                    break;
                                }
                            }
                            document.getElementById("final").innerHTML = "The Atomic Mass of " + ele + " is " + res;
                            speak();
                        }

                        else if (intent == "disc_yr") {

                            console.log("check true");

                            for (j = 0; j < data.length; j++) {

                                console.log("running loop");

                                if (data[j]["name"].toUpperCase() === ele.toUpperCase()) {
                                    console.log("match found");

                                    res = data[j]["yearDiscovered"];

                                    console.log(res);
                                    break;
                                }
                            }
                            document.getElementById("final").innerHTML = ele + " was discovered in " + res;
                            speak();
                        }

                        else if (intent == "elec_config") {

                            console.log("check true");

                            for (j = 0; j < data.length; j++) {

                                console.log("running loop");

                                if (data[j]["name"].toUpperCase() === ele.toUpperCase()) {
                                    console.log("match found");

                                    res = data[j]["electronicConfiguration"];

                                    console.log(res);
                                    break;
                                }
                            }
                            document.getElementById("final").innerHTML = "The Electronic Configuration of " + ele + " is " + res;
                            speak();
                        }


                        else {
                            document.getElementById("final").innerHTML = "I'm Unable to answer your query at this moment";
                            speak();
                        }

                    });
            });
    };

}
else {
    console.log("Speech Recognition Not Available");
}


