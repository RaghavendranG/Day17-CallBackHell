'use strict';
        let counter=10;
        let time = document.getElementById('display');
        time.style.margin= "auto";
        time.style.textAlign = "center";
        time.style.maxWidth ="200px"
        time.style.fontSize = "30px";
        setTimeout(() => {
            time.className = "badge rounded-pill bg-primary";
            time.innerHTML = counter--;
            setTimeout(() =>{
                time.className = "badge rounded-pill bg-light text-dark";
                time.innerHTML = counter--;
                setTimeout(() =>{
                    time.className = "badge rounded-pill bg-primary";
                    time.innerHTML = counter--;
                    setTimeout(() =>{
                        time.className = "badge rounded-pill bg-light text-dark";
                        time.innerHTML = counter--;
                        setTimeout(() =>{
                            time.className = "badge rounded-pill bg-primary";
                            time.innerHTML = counter--;
                            setTimeout(() =>{
                                time.className = "badge rounded-pill bg-light text-dark";
                                time.innerHTML = counter--;
                                setTimeout(() =>{
                                    time.className = "badge rounded-pill bg-primary";
                                    time.innerHTML = counter--;
                                    setTimeout(() =>{
                                        time.className = "badge rounded-pill bg-light text-dark";
                                        time.innerHTML = counter--;
                                        setTimeout(() =>{
                                            time.className = "badge rounded-pill bg-primary";
                                            time.innerHTML = counter--;
                                            setTimeout(() =>{
                                                time.className = "badge rounded-pill bg-light text-dark";
                                                time.innerHTML = counter--;
                                                setTimeout(() =>{
                                                    time.style.fontSize = "30px";
                                                    time.style.maxWidth = "500px";
                                                    time.className = "badge rounded-pill";
                                                    time.style.border = "black 0px solid"
                                                    time.style.color = "#000080";
                                                    time.innerHTML = "Happy Independence Day!"
                                                    
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000); 