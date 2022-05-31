let fileContent;

function handleChange(files) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        fileContent = JSON.parse(e.target.result); // FIXME : handle error (IDE only)
    }
    reader.readAsText(file);
}

function upload() {
    if (!fileContent) {
        alert("No file selected");
    } else {
        document.querySelector("#upload-zone").remove();

        let chaines = {};
        let videos = {};
        let videos_uniques = {};

        let indispos = 0;

        for (const video of fileContent) {
            try {
                const chaine = video["subtitles"][0]["name"];
                if (chaine in chaines) {
                    chaines[chaine]++;
                } else {
                    chaines[chaine] = 1;
                }

                const title = video["title"].replace("Vous avez regardé ", "");
                if (title in videos) {
                    videos[title]++;
                } else {
                    videos[title] = 1;

                    if (title in videos_uniques) {
                        videos_uniques[title]++;
                    } else {
                        videos_uniques[title] = 1;
                    }
                }

            } catch {
                indispos++;
            }
        }

        /*console.log(chaines);
        console.log(videos);
        console.log(videos_uniques);
        console.log(indispos);*/

        createTable(["Chaine", "Nombre de vidéos"/*, "Nombre de vidéos uniques"*/], // TODO : combine the two
            Object.entries(chaines).map(e => [e[0], e[1]]),
            document.querySelector(".stats"));

        createTable(["Vidéo", "Nombre de visionnages"],
            Object.entries(videos).map(e => [e[0], e[1]]),
            document.querySelector(".stats"));

        createTable(["Chaine", "Nombre de visionnages uniques"],
            Object.entries(videos_uniques).map(e => [e[0], e[1]]),
            document.querySelector(".stats"));
    }
}


function createTable(header, tableData, parent) { // TODO : use dict instead of array
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    const tableHeader = document.createElement('thead');
    const tableHeaderRow = document.createElement('tr');
    header.forEach(headerCell => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(headerCell));
        tableHeaderRow.appendChild(th);
    })
    tableHeader.appendChild(tableHeaderRow);
    table.appendChild(tableHeader);

    tableData.forEach(function (rowData) {
        const row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            const cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    parent.appendChild(table);
}