function create2Darr() {
    let arr = [];
    let value = 0;

    const container = document.getElementById("container");
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    const buttonBlack = document.createElement("button")
    buttonBlack.textContent = "black"
    container.appendChild(buttonBlack)

    const buttonEraser = document.createElement("button")
    buttonEraser.textContent = "eraser"
    container.appendChild(buttonEraser)

    const buttonReset = document.createElement("button")
    buttonReset.textContent = "reset"
    container.appendChild(buttonReset)
    // const userInput = prompt("max 100x100")

    
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        arr[i] = [];
        
        for (let j = 0; j < 10; j++) {
            arr[i][j] = value++;
            let td = document.createElement("td");         
            td.style.border = "1px solid black";
            td.style.padding = "5px";
            tr.appendChild(td);
            function paintBlack() {
                console.log("black added");
                td.style.backgroundColor = "black";
            }

            function eraseColor() {
                console.log("color removed");
                td.style.removeProperty("background-color");
            }

            buttonBlack.addEventListener("click", function() {
                td.removeEventListener("mouseover", eraseColor);
                td.addEventListener("mouseover", paintBlack);
            });

            buttonEraser.addEventListener("click", function() {
                td.removeEventListener("mouseover", paintBlack);
                td.addEventListener("mouseover", eraseColor);
            });

            buttonReset.addEventListener("click", function() {
                td.style.removeProperty("background-color");
                td.removeEventListener("mouseover", paintBlack)
            });
            
        }

        table.appendChild(tr);
    }

    container.appendChild(table);
}



create2Darr();



