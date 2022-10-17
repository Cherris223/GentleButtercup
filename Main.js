var stockLeft = 
[
    2, 
    2,
    1,
    1,
    1,
    1
];

function addElement() {
    //Find insertion and create a div for all items
    const existingDiv = document.getElementById("items");
    const itemsDiv = document.createElement("div");

    // Set up vars //
    //Misc
    const itemAmount = stockLeft.length;

    //Divs
    var soapRowDiv;
    var tagRowDiv;

    for(var i = 0; i < itemAmount; i++)
    {
        if (i % 2 == 0)
        {
            soapRowDiv = document.createElement("div");
            soapRowDiv.classList.add("itemsRow");
            soapRowDiv.id = i;

            tagRowDiv = document.createElement("div");
            tagRowDiv.classList.add("tagsRow");
            tagRowDiv.id = i + 1;

            itemsDiv.appendChild(soapRowDiv);
            soapRowDiv.appendChild(tagRowDiv);
        }
        
        //Set Soap Image
        var img = document.createElement('img');
        img.src = i + "_TombStone.png";
        img.style.width = "40%";

        soapRowDiv.appendChild(img);

        //Set Tag Image
        img = document.createElement('img');
        var srcDir = "OOSTag.png";
        if (stockLeft[i] == 1)
        {
            srcDir = '1LeftTag.png';
        }
        else if (stockLeft[i] == 2)
        {
            srcDir = '2LeftTag.png';
        }

        img.src = srcDir;
        img.style.width = "40%";

        tagRowDiv.appendChild(img);
    }

    //Add class to item container
    itemsDiv.classList.add("itemsContainer");

    //Add items to DOM
    existingDiv.appendChild(itemsDiv);

    const rose = document.getElementById('Rose');
    itemsDiv.appendChild(rose);
}