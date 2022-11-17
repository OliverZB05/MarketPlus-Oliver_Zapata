const ShoppingCart = [];


//==========={ 𝐀𝐩𝐚𝐫𝐞𝐜𝐞𝐫 𝐬𝐞𝐜𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐢́𝐚𝐬 }===========
function ClickCategories(){
    let SubMenu = document.getElementById("SubMenu");

    if(SubMenu.classList.contains("main__none")){ 
        SubMenu.classList.remove("main__none");
        SubMenu.classList.add("main__visible");
    }
    else{
        SubMenu.classList.remove("main__visible");
        SubMenu.classList.add("main__none");
    }
}
//==========={ 𝐀𝐩𝐚𝐫𝐞𝐜𝐞𝐫 𝐬𝐞𝐜𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐢́𝐚𝐬 }===========


//==============={ 𝐎𝐛𝐭𝐞𝐧𝐞𝐫 𝐝𝐚𝐭𝐨𝐬 𝐝𝐞 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨 }===============
function BringRegistration(){

    let CheckIn1 = localStorage.getItem("Nombre");
    let CheckIn2 = localStorage.getItem("Email");
    
    console.log("Nombre: " + CheckIn1);
    console.log("Email: " + CheckIn2);
    
    let LocalName = document.getElementById("LocalName");
    let LocalEmail = document.getElementById("LocalEmail");
    
    LocalName.innerHTML = CheckIn1;
    LocalEmail.innerHTML = CheckIn2;
}
BringRegistration();
//==============={ 𝐎𝐛𝐭𝐞𝐧𝐞𝐫 𝐝𝐚𝐭𝐨𝐬 𝐝𝐞 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐨 }===============


//==========={ 𝐂𝐫𝐞𝐚𝐫 𝐂𝐚𝐫𝐭𝐚𝐬 }===========
function CreateCards(){
    const URLJSON = "../JSON/products.json";
    fetch(URLJSON)
    .then(res => res.json())
    .then(DataReceived => {

        let ContainerCards = document.getElementById("ContainerCards");
        let SubContainerCards = document.getElementById("SubContainerCards");

        //============= Ciclo que crea las cartas =============
        for(let i = 0; i < DataReceived.Products.length; i++){
            let CardId = "btn" + DataReceived.Products[i].id;

            SubContainerCards.innerHTML += 
            `
            <div class="ContainerCards__Card" onclick=(ClickCard(${"'"+CardId+"'"})) id="Card${i}">
                        <div class="Card__ImgCard${i}"></div>
                        <h2 class="Card__TitleCard">${DataReceived.Products[i].name}</h2><br>
                        <h2 class="Card__Qualification">★★★★★</h2><br>
                        <h2 class="Card__PriceCard">$${DataReceived.Products[i].price}</h2><br>
            </div>
            `
        } 
        //============= Ciclo que crea las cartas =============
    })
}
CreateCards();
//==========={ 𝐂𝐫𝐞𝐚𝐫 𝐂𝐚𝐫𝐭𝐚𝐬 }===========



//==========={ 𝐅𝐢𝐥𝐭𝐫𝐚𝐫 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐢́𝐚𝐬 }===========

function ClickHome(){
    
    for(let i = 0; i <= 23; i++){
        document.getElementById("Card" + i).style.display = 'block';
    }

    for(let i = 8; i <= 23; i++){
        if(document.getElementById("Card" + i)){
            document.getElementById("Card" + i).style.display = 'none';
        }
    }

}


function ClickKitchen(){

    for(let i = 0; i <= 23; i++){
        document.getElementById("Card" + i).style.display = 'block';
    }

    for(let i = 0; i <= 7; i++){
        if(document.getElementById("Card" + i)){
            document.getElementById("Card" + i).style.display = 'none';
        }
    }

    for(let i = 16; i <= 23; i++){
        if(document.getElementById("Card" + i)){
            document.getElementById("Card" + i).style.display = 'none';
        }
    }
}


function ClickElectronics(){

    for(let i = 0; i <= 23; i++){
        document.getElementById("Card" + i).style.display = 'block';
    }

    for(let i = 0; i <= 7; i++){
        if(document.getElementById("Card" + i)){
            document.getElementById("Card" + i).style.display = 'none';
        }
    }

    for(let i = 8; i <= 15; i++){
        if(document.getElementById("Card" + i)){
            document.getElementById("Card" + i).style.display = 'none';
        }
    }
}
//==========={ 𝐅𝐢𝐥𝐭𝐫𝐚𝐫 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐢́𝐚𝐬 }===========





//==========={ 𝐂𝐫𝐞𝐚𝐫 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐨𝐬 𝐞𝐧 𝐞𝐥 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠𝐂𝐚𝐫𝐭 }===========
let Enumeration = 0;
function ClickCard(CardId){
    const URLJSON = "../JSON/products.json";
    fetch(URLJSON)
    .then(res => res.json())
    .then(DataReceived => {

        let CheckIn1 = localStorage.getItem("Nombre");
        let CheckIn2 = localStorage.getItem("Email");

        if(CheckIn1 != null && CheckIn2 != null){  

            let idProduct = CardId.substring(3, CardId.length);
            let TableShoppingCart = document.getElementById("TableShoppingCart");

            //=========== Si el producto del carro se repite has esto ===========
            for(let j = 0; j < ShoppingCart.length; j++){   
                if(ShoppingCart[j].id == idProduct){
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Este producto ya se encuenta en el carrito de compras',
                    });
                    return;
                }
            }
            //=========== Si el producto del carro se repite has esto ===========


            //=========== Si el producto del carro no se repite has esto ===========
            ShoppingCart.push(DataReceived.Products[idProduct - 1]);
            console.table(ShoppingCart);
            
            for(let j = 0; j < ShoppingCart.length; j++){
                    if(ShoppingCart[j].id == idProduct){
        
                        TableShoppingCart.innerHTML +=  
                        `
                        <tbody class="ShoppingCart__ContainerTbody TbodyColor" id="Identifier__${ShoppingCart[j].id}">
                            <tr class="ContainerTbody__ProductRow">
                                <td class="ProductRow__Colmn1"><h2 class="ColmnText" id="TextEnumeration">${++Enumeration}.</h2></td>  
                                <td class="ProductRow__Colmn2"><h2 class="ColmnText">${ShoppingCart[j].name}</h2></td> 

                                <td class="ProductRow__Colmn3">
                                    <h2 class="ColmnText" id=${"Quantity--" + idProduct}>${ShoppingCart[j].quantity}</h2>
                                    <button class="PlusButton" onclick=(ClickPlus(${"'"+idProduct+"'"}))><p class="PlusButton__Text">+</p></button>
                                    <button class="MinusButton" onclick=(ClickMinus(${"'"+idProduct+"'"}))><p class="MinusButton__Text">-</p></button>
                                </td>

                                <td class="ProductRow__Colmn4"><h2 class="ColmnText" id=${"Price--" + idProduct}>$${ShoppingCart[j].price}</h2></td>  
                                <td class="ProductRow__Colmn5"><h2 class="ColmnText">21%</h2></td>
                                <td class="ProductRow__Colmn6"><h2 class="ColmnText"><div class="icons8-basura" onclick=(ClickTrash(${"'"+idProduct+"'"}))></div></h2></td>   
                            </tr>
                        </tbody>
                        `
                    }
            }
            //=========== Si el producto del carro no se repite has esto ===========


            //============== Precio Total ==============
            let AddValue = 0;

            for(let i = 0; i < ShoppingCart.length; i++){
                AddValue += ShoppingCart[i].price;
            }

            let FinalPrice = document.getElementById("FinalPrice");
            FinalPrice.innerHTML = `$${AddValue}`;
            //============== Precio Total ==============

        }else{  
            
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Debes registrarte para poder agregar productos al carro',
            });
        }
    })
}
//==========={ 𝐂𝐫𝐞𝐚𝐫 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐨𝐬 𝐞𝐧 𝐞𝐥 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠𝐂𝐚𝐫𝐭 }===========



//==============={ 𝐂𝐥𝐢𝐜𝐤 𝐚 𝐥𝐨𝐬 𝐛𝐨𝐭𝐨𝐧𝐞𝐬 𝐝𝐞 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠𝐂𝐚𝐫𝐭 }===============
function ClickPlus(idProduct){
    const URLJSON = "../JSON/products.json";
    fetch(URLJSON)
    .then(res => res.json())
    .then(DataReceived => {

        let QuantityHTML = document.getElementById("Quantity--" + idProduct);
        let PriceHTML = document.getElementById("Price--" + idProduct);


        //=========== Sumar cantidad ===========
        for(let j = 0; j < ShoppingCart.length; j++){
            if(ShoppingCart[j].id == idProduct){

                if(ShoppingCart[j].quantity > 14){
                    
                    Swal.fire({
                        icon: 'info',
                        title: 'Has llegado al límite',
                        text: 'Límite de productos alcanzado',
                    });
                    return;
                }

                ++ShoppingCart[j].quantity;
                ++QuantityHTML.innerHTML;
                ShoppingCart[j].price = ShoppingCart[j].unitprice * ShoppingCart[j].quantity;
                PriceHTML.innerHTML = "$" + ShoppingCart[j].unitprice * ShoppingCart[j].quantity;

                //============== Precio Total ==============
                let AddValue = 0;

                for(let i = 0; i < ShoppingCart.length; i++){
                    AddValue += ShoppingCart[i].price;
                }

                let FinalPrice = document.getElementById("FinalPrice");
                FinalPrice.innerHTML = `$${AddValue}`;
                //============== Precio Total ==============
            }
        }
        //=========== Sumar cantidad ===========
    })
}


function ClickMinus(idProduct){
    const URLJSON = "../JSON/products.json";
    fetch(URLJSON)
    .then(res => res.json())
    .then(DataReceived => {

        let QuantityHTML = document.getElementById("Quantity--" + idProduct);
        let PriceHTML = document.getElementById("Price--" + idProduct);

        //=========== Restar cantidad ===========
        for(let j = 0; j < ShoppingCart.length; j++){
            if(ShoppingCart[j].id == idProduct){

                if(ShoppingCart[j].quantity < 2){
                    
                    Swal.fire({
                        icon: 'info',
                        title: 'Has llegado al límite',
                        text: 'Límite de productos alcanzado',
                    });
                    return;
                }

                --ShoppingCart[j].quantity;
                --QuantityHTML.innerHTML;
                ShoppingCart[j].price = ShoppingCart[j].unitprice * ShoppingCart[j].quantity;
                PriceHTML.innerHTML = "$" + ShoppingCart[j].unitprice * ShoppingCart[j].quantity;

                //============== Precio Total ==============
                let AddValue = 0;

                for(let i = 0; i < ShoppingCart.length; i++){
                    AddValue += ShoppingCart[i].price;
                }

                let FinalPrice = document.getElementById("FinalPrice");
                FinalPrice.innerHTML = `$${AddValue}`;
                //============== Precio Total ==============
            }
        }
        //=========== Restar cantidad ===========
    })
}


function ClickTrash(idProduct){
    const URLJSON = "../JSON/products.json";
    fetch(URLJSON)
    .then(res => res.json())
    .then(DataReceived => {
    
        //========== Borrar producto ==========
        for(let j = 0; j < ShoppingCart.length; j++){
            if(ShoppingCart[j].id == idProduct){

                let Identifier = document.getElementById("Identifier__" + ShoppingCart[j].id);
                TableShoppingCart.removeChild(Identifier);

                Swal.fire(
                    '¡Borrado con éxito!',
                    'El producto seleccionado fue borrado de forma exitosa',
                    'success'
                );
                

                let FinalPriceSubst = FinalPrice.innerHTML.substring(1, FinalPrice.innerHTML.length);

                FinalPrice.innerHTML = "$" + (FinalPriceSubst - ShoppingCart[j].price);
                ShoppingCart.splice(j, 1);

            }
        }
        //========== Borrar producto ==========
    })
}
//==============={ 𝐂𝐥𝐢𝐜𝐤 𝐚 𝐥𝐨𝐬 𝐛𝐨𝐭𝐨𝐧𝐞𝐬 𝐝𝐞 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠𝐂𝐚𝐫𝐭 }===============



//==============={ 𝐁𝐨𝐭𝐨𝐧𝐞𝐬 𝐝𝐞 𝐞𝐧𝐯𝐢𝐚𝐫 𝐲 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠𝐂𝐚𝐫𝐭 }===============
function ClickSendButton(){

    //============ Enviar productos si el usuario está registrado ============
    if(ShoppingCart.length != 0){

        const SaveLocal = (key, value) => { localStorage.setItem(key, value) };
        SaveLocal("Compra reciente", JSON.stringify(ShoppingCart));
        localStorage.getItem("Compra reciente");
        console.log("================= Compra reciente =================");
        console.table(ShoppingCart);

        Swal.fire(
            '¡Enviado con éxito!',
            'A partir de 30 segundos de llegará su paquete',
            'success'
        );

        let TableProducts = Array.prototype.slice.call(document.getElementsByClassName("ShoppingCart__ContainerTbody"));

        for(element of TableProducts){
            element.remove();
        }  
            
        ShoppingCart.splice(0, 23);
        console.table(ShoppingCart);
        FinalPrice.innerHTML = "";

        setTimeout(()=>{

            Swal.fire(
                '¡Enviado con éxito!',
                'El paquete que reservó a ha sido entregado',
                'success'
            );
        }, 10000);
    }
    //============ Enviar productos si el usuario está registrado ============


    //============ Si no está registrado has esto ============
    else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes de ingresar productos en el carro para poder enviar',
        });
    }
    //============ Si no está registrado has esto ============
}



function ClickDeleteButton(){
    //============ Borrar todos los productos ============
    let TableProducts = Array.prototype.slice.call(document.getElementsByClassName("ShoppingCart__ContainerTbody"));

    for(element of TableProducts){
        element.remove();
    }  
        
    ShoppingCart.splice(0, 23);
    console.table(ShoppingCart);
    FinalPrice.innerHTML = "";

    Swal.fire(
        '¡Borrado con éxito!',
        'Los productos del carro fueron borrados con éxito',
        'success'
    );
    //============ Borrar todos los productos ============
}
//==============={ 𝐁𝐨𝐭𝐨𝐧𝐞𝐬 𝐝𝐞 𝐞𝐧𝐯𝐢𝐚𝐫 𝐲 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠𝐂𝐚𝐫𝐭 }===============
