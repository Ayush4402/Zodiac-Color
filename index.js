const zodiac=document.getElementById("zodiac");



const body=document.querySelector("body");

const changeBackground=()=>{
    switch (zodiac.value) {
        case "Aries":
            body.style.backgroundImage="url('./images/aries.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="red";
            document.querySelector("button").innerText="Red";
            break;
        case "Tarus":
            body.style.backgroundImage="url('./images/taurus.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#FF78F0";
            document.querySelector("button").innerText="Pink";
            break;
        case "Gemini":
            body.style.backgroundImage="url('./images/gemini.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#1F8A70";
            document.querySelector("button").innerText="Green";
            break;
        case "Cancer":
            body.style.backgroundImage="url('./images/cancer.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#362FD9";
            document.querySelector("button").innerText="Light Blue";
            break;
        case "Leo":
            body.style.backgroundImage="url('./images/leo.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#FFD700";
            document.querySelector("button").innerText="Gold";
            document.querySelector("button").style.color="Black";
            break;
        case "Virgo":
            body.style.backgroundImage="url('./images/virgo.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#FFE5B4";
            document.querySelector("button").innerText="Peach";
            document.querySelector("button").style.color="Black";
            break;
        case "Libra":
            body.style.backgroundImage="url('./images/libra.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#FEFAE0";
            document.querySelector("button").innerText="Cream";
            document.querySelector("button").style.color="Black";
            break;
        case "Scorpio":
            body.style.backgroundImage="url('./images/scorpio.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#800000";
            document.querySelector("button").innerText="Maroon";
            break;
        case "Sagittarius":
            body.style.backgroundImage="url('./images/sagittarius.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#FFD966";
            document.querySelector("button").innerText="Yellow";
            document.querySelector("button").style.color="Black";
            break;
        case "Aquarius":
            body.style.backgroundImage="url('./images/aquarius.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#8F00FF";
            document.querySelector("button").innerText="Violet";
            break;
        case "Capricorn":
            body.style.backgroundImage="url('./images/capricorn.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#A86464";
            document.querySelector("button").innerText="Brown";
            break;
        case "Pisces":
            body.style.backgroundImage="url('./images/pisces.gif')";
            body.style.backgroundPosition = "center center";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.backgroundClip = "content-box";
            document.querySelector("button").style.backgroundColor="#FDFD96";
            document.querySelector("button").innerText="Pale yellow";
            document.querySelector("button").style.color="Black";
            break;
        
        default:
            break;
    }
}