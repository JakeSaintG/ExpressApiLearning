getCharacterData = () => {
    fetch("http://localhost:8000/api/demo")
        .then(r => r.json())
        .then(r => {
            document.querySelector("table").style.display = "block";
            
            console.log(r.data)

            if (r.data.characters.length > 0) {
                
                var generatedTable = "";
                r.data.characters.forEach((itemData) => {
                    generatedTable += "<tr>";
                    generatedTable += "<td>" + itemData.name + "</td>";
                    generatedTable += "<td>" + itemData.show + "</td>";
                    generatedTable += "<td>" + itemData.network + "</td></tr>";
                });

                document.getElementById("char-table").innerHTML = generatedTable;

            }
        })
        .catch(
            // Replace table with error banner
        );
}

sendCharacterData = () => {
    const characterName = document.getElementById("character-name").value;
    const show = document.getElementById("show-name").value;
    const network = document.getElementById("network-name").value;
    
    fetch("http://localhost:8000/api/demo", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": characterName,
            "show": show,
            "network": network
        })
    })
    .then( (response) => 
        data = response.json()
    )
    .then( (data) => {
        console.log(`Added: ${data.data.name}`);
        document.querySelector("h1").innerHTML = `Added: ${data.data.name}`;
    })
    .catch(
        //handle it 
    )
    .finally(
        // dispose
    );
}
