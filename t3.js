function call() {
        setInterval(() => {
            document.getElementById("red").style.backgroundColor = "red"
            document.getElementById("green1").style.backgroundColor = "green"
            document.getElementById("yellow").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
            document.getElementById("yellow1").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
            document.getElementById("green").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
            document.getElementById("red1").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
        }, 2000); 
            setInterval(() => {
                document.getElementById("yellow").style.backgroundColor = "yellow"
                document.getElementById("yellow1").style.backgroundColor = "yellow"
                document.getElementById("red").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
                document.getElementById("green1").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
                document.getElementById("green").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
                document.getElementById("red1").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
            }, 4000);
    
            setInterval(() => {
                document.getElementById("green").style.backgroundColor = "green"
                document.getElementById("red1").style.backgroundColor = "red"
                document.getElementById("red").style.backgroundColor = "rgba(ms123, 117, 117, 0.397)"
                document.getElementById("green1").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
                document.getElementById("yellow").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
                document.getElementById("yellow1").style.backgroundColor = "rgba(123, 117, 117, 0.397)"
            }, 6000);
        } call()
    