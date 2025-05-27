function create2Darr() {
    let arr = [];
    let value = 0;
    const size = 500;

    const container = document.getElementById("container");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "10px";

    const containerButton = document.createElement("div");
    const containerTable = document.createElement("div");
    containerTable.style.width =`${size}px`;
    containerTable.style.height =`${size}px`;
    containerTable.style.overflow = "auto";
    containerTable.style.overflow = "hidden"; 
    containerTable.style.boxSizing = "border-box";
    containerTable.style.border = "1.6px solid black";

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    const buttonBlack = document.createElement("button");
    buttonBlack.textContent = "black";

    const buttonRgb = document.createElement("button");
    buttonRgb.textContent = "rgb";

    const buttonEraser = document.createElement("button");
    buttonEraser.textContent = "eraser";

    const buttonReset = document.createElement("button");
    buttonReset.textContent = "reset";

    const buttonGrid = document.createElement("button");
    buttonGrid.textContent = "change grid size";

    container.appendChild(containerButton);
    container.appendChild(containerTable);
    containerButton.appendChild(buttonBlack);
    containerButton.appendChild(buttonRgb);
    containerButton.appendChild(buttonEraser);
    containerButton.appendChild(buttonReset);
    containerButton.appendChild(buttonGrid);

    function generateGrid(gridSize = 16) {

        containerTable.innerHTML = "";
        arr = [];
        value = 0;

        const table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.tableLayout = "fixed";

        for (let i = 0; i < gridSize; i++) {
            let tr = document.createElement("tr");
            arr[i] = [];

            for (let j = 0; j < gridSize; j++) {
                arr[i][j] = value++;
                let td = document.createElement("td");
                const cellSize = Math.floor(size / gridSize);
                td.style.aspectRatio = "1 / 1";
                td.style.height =` ${cellSize}px`;
                td.style.width = `${cellSize}px`;
                td.style.border = "1px solid black";
                td.style.boxSizing = "border-box";
                // td.style.padding = "5px";
                // td.style.width = "20px";
                // td.style.height = "20px";

                function paintBlack() {
                    td.style.backgroundColor = "black";
                }

                function paintRgb() {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    td.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                }

                function eraseColor() {
                    td.style.removeProperty("background-color");
                }

                buttonBlack.addEventListener("click", function() {
                    td.removeEventListener("mouseover", eraseColor);
                    td.addEventListener("mouseover", paintBlack);
                });

                buttonRgb.addEventListener("click", function() {
                    td.removeEventListener("mouseover", eraseColor);
                    td.addEventListener("mouseover", paintRgb);
                });

                buttonEraser.addEventListener("click", function() {
                    td.removeEventListener("mouseover", paintBlack);
                    td.removeEventListener("mouseover", paintRgb);
                    td.addEventListener("mouseover", eraseColor);
                });

                buttonReset.addEventListener("click", function() {
                    td.style.removeProperty("background-color");
                    td.removeEventListener("mouseover", paintBlack);
                    td.removeEventListener("mouseover", paintRgb);
                });

                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        containerTable.appendChild(table);
    }

    buttonGrid.addEventListener("click", function() {
        let size = prompt("Enter grid size (max 100):");
        size = parseInt(size);
        if (!isNaN(size) && size > 0 && size <= 100) {
            generateGrid(size);
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    });
    //generate default x16 grid
    generateGrid(); 
}

create2Darr();