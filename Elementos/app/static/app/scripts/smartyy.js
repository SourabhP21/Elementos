sqspeak = (str) => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = str;
    window.speechSynthesis.speak(speech);
    console.log("executed speak")
};

key = 0;

quiz = (k) => {
    if (k == 1) {
        document.getElementById("sq-ques").innerHTML = "What is the atomic number of Hydrogen?";
        sqspeak("What is the atomic number of Hydrogen?")
    }
    else if (k == 2) {
        document.getElementById("sq-ques").innerHTML = "What is the 6th element of the Periodic Table?";
        sqspeak("What is the 6th element of the Periodic Table?")
    }
};

key=document.querySelector("#sqstrt").onclick = () => {
    document.getElementById("sq-ques").innerHTML= "Hello User! LETS BEGIN!";
    sqspeak("Hello User! LETS BEGIN!");
    key = 1;
    quiz(key);
    document.querySelector("#sqans").style.display = "initial";
    document.querySelector("#sqstrt").style.display = "none";
    return key;
}

//if (document.querySelector("sqnext").style.display!="none" ){
//    key=document.querySelector("sqnext").onclick = () => {
//        key = 2;
//        quiz(key);
//        return key;
//    }
//}

document.querySelector("#sqst").onclick = () => {
    document.getElementById("sq-ques").innerHTML = " ";
    document.getElementById("sq-ans").innerHTML = " ";
    document.querySelector("#sqstrt").style.display = "initial";
    document.querySelector("#sqnext").style.display = "none";

}

document.querySelector("#sqans").onclick = () => {
    document.querySelector("#sqstrt").style.display = "none";
    document.querySelector("#sqnext").style.display = "initial";
    document.getElementById("sq-ques").innerHTML = "Tell me your answer > (i'm listening now!)";

    if ("webkitSpeechRecognition" in window) {

        let speechRecognition = new webkitSpeechRecognition();
        let final_transcript = "";

        speechRecognition.interimResults = true;
        speechRecognition.lang = "en-UK";

        speechRecognition.onresult = (event) => {
            let interim_transcript = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript = event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            document.querySelector("#sq-ans").innerHTML = final_transcript;
        };

        speechRecognition.start();

        speechRecognition.onend = () => {
            strans = document.querySelector("#sq-ans").innerHTML;
            console.log(strans);

            lk = 'https://api.wit.ai/message?v=20210602&q=' + strans

            async function postData(url = '') {
                const response = await fetch(url, {
                    headers: {
                        'authorization': 'Bearer ' + '######'
                    },
                });
                return response.json();
            }

            postData(lk)
                .then(data => {
                    console.log(data);

                    x = data["intents"];

                    for (i = 0; i < x.length; i++) {
                        intent = x[i]["name"];
                        console.log(intent);
                    }

                    y = data["entities"]["value:value"];

                    for (i = 0; i < y.length; i++) {
                        vl = y[i]["value"];
                        console.log(vl);

                    };

                    z = data["entities"]["atomic_no_property:atomic_no_property"];

                    for (i = 0; i < z.length; i++) {
                        prp = z[i]["value"];
                        console.log(prp);

                    };

                    w = data["entities"]["element:element"];

                    for (i = 0; i < w.length; i++) {
                        ele = w[i]["value"];
                        console.log(ele);

                    };

                    if (key == 1) {
                        if (ele == "hydrogen" && prp == "atomic number" && vl == "1") {
                            document.querySelector("#sq-ques").innerHTML = "Correct Answer!! 10 points";
                            document.querySelector("#score").innerHTML = "10";
                            sqspeak("Correct Answer!! 10 points");
                        }
                        else {
                            document.querySelector("#sq-ques").innerHTML = "I'm Afraid that is a wrong answer!";
                            sqspeak("I'm Afraid that is a wrong answer!");
                        }
                    }

                    y = data["entities"]["value:value"];

                    for (i = 0; i < y.length; i++) {
                        ele = y[i]["value"];
                        console.log(ele);

                    };
                });
        }
        
    }
    else {
            console.log("Speech Recognition Not Available");
        }
}
