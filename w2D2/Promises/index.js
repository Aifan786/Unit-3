


let images_array = [
    {
        images1: "https://media.gettyimages.com/photos/fish-biryani-picture-id991925098?s=612x612",
    },
    {
        images2: "https://media.istockphoto.com/photos/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-picture-id1156896083?k=20&m=1156896083&s=612x612&w=0&h=_TOEluPtKxmbkt_80JWO2GN0v_w2ZTG0uUaHjk2TSEY=",
    },
    {
        images3: "https://cdn.w600.comps.canstockphoto.com/supreme-italian-pizza-with-pepperoni-and-stock-image_csp17977467.jpg",
    },
    {
        images4: "https://cdn.w600.comps.canstockphoto.com/plate-of-stir-fried-chow-mein-pictures_csp11038182.jpg"
    }
]

// var fooditems = JSON.parse(localStorage.getItem("images"))||[]

//     images_array.map(function(el){

//         let box = document.createElement("div")
        
//         var img1 = document.createElement("img");
//         img1.src = el.images1;

//         var img2 = document.createElement("img");
//         img2.src = el.images2;

//         var img3 = document.createElement("img");
//         img3.src = el.images3;

//         var img4 = document.createElement("img");
//         img4.src = el.images4;

//         box.append(img1,img2,img3,img4)
       
//         fooditems.push(box)
//         localStorage.setItem("images_array", JSON.stringify(fooditems))

//     })
                   

function order(){
    
    var items = document.getElementById("choice").value

    let status = "open";

    let mypromise = new Promise (function(resolve, reject){
      let time = Math.random()*10*1000;

        setTimeout(function(){
            if(status == "open"){
                resolve(items);
            }
            else{
                reject("Not available");
                // console.log("Not available")
            }
        },time)
    
    });
    mypromise.then(function(res){
        console.log(res)

        document.querySelector("#served").innerHTML = null;
        
        if(items=="Biryani"){
            var img1 = document.createElement("img");
            img1.src = images_array[0].images1;
            img1.setAttribute("class","center")

            var name = document.createElement("h1")
            name.innerText = "Biryani is ready";
            name.setAttribute("class","name")

            var num = document.createElement("p")
            num.innerText = "Order-Id: 6";
            num.setAttribute("class","right")
            
            document.querySelector("#served").append(name,num,img1)
        }
        else if(items=="Dosa"){
            var img2 = document.createElement("img");
            img2.src = images_array[1].images2;
            img2.setAttribute("class","center")

            var name = document.createElement("h1")
            name.innerText = "Dosa is ready";
            name.setAttribute("class","name")

            var num = document.createElement("p")
            num.innerText = "Order-Id: 3";
            num.setAttribute("class","right")

            document.querySelector("#served").append(name,num,img2)
        }
        else if(items=="Pizza"){
            var img3 = document.createElement("img");
            img3.src = images_array[2].images3;
            img3.setAttribute("class","center")

            var name = document.createElement("h1")
            name.innerText = "Pizza is ready";
            name.setAttribute("class","name")

            var num = document.createElement("p")
            num.innerText = "Order-Id: 7";
            num.setAttribute("class","right")

            document.querySelector("#served").append(name,num,img3)
        }
        else{
            var img4 = document.createElement("img");
            img4.src = images_array[3].images4;
            img4.setAttribute("class","center")

            var name = document.createElement("h1")
            name.innerText = "Chowmein is ready";
            name.setAttribute("class","name")

            var num = document.createElement("p")
            num.innerText = "Order-Id: 5";
            num.setAttribute("class","right")

            document.querySelector("#served").append(name,num,img4)
        }

    })
    .catch(function(err){
        console.log("err:", err)
        gif.src = "https://media3.giphy.com/media/3o7aD4XavHnL5UsWEE/200.webp?cid=ecf05e471e4yver9r3gy2tzq178rp274u5y0nxnolmyv95xe&rid=200.webp&ct=g"

    })

}