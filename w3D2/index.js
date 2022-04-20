

// let arr = [1,2,3,4];

// for(let x of arr){

//     console.log(x)
// }

// let a=5
// let b=5
// let sum = (a,b) => a + b;
// sum()
// console.log(sum)

// let sum = (a,b,c) => {
//     return a + b + c;
// };

// let arr = [1,2,3];
// console.log(...arr)


// URL

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf2&key=[YOUR_API_KEY] HTTP/1.1

// AIzaSyA87bWLz5uYaffTu_gkQKgyztRA7zNjMvk

const API = "AIzaSyA87bWLz5uYaffTu_gkQKgyztRA7zNjMvk"
const searchVideos = async() => {
    try{
       const q = document.getElementById("query").value 
       
       const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)

       const data = await res.json();

       console.log(data.items);
       append(data.items)
    }
    catch(err) {
        console.log(err);
    }
};


const append = (videos) => {
    let show_videos = document.getElementById("show_videos");

    let store = JSON.parse(localStorage.getItem("videoArray"))||[];

    show_videos.innerHTML = null;
    videos.forEach(({id: {videoId}, snippet: {title}}) => {
       let div = document.createElement("div");

       let iframe = document.createElement("iframe");

       iframe.src = `https://www.youtube.com/embed/${videoId}`

       iframe.width = "100%";
       iframe.height = "100%";
       iframe.allow = "fullscreen";

       let name = document.createElement('h5');
       name.innerText = title;

       div.append(iframe,name);

       let data = {
           title,
           videoId,
       }

       div.onclick = () =>{
         showVideo(data);
       } 

       show_videos.append(div);
    });
};

const showVideo = (x) =>{
    window.location.href = "video.html";
    store.push(x)
    localStorage.setItem("videoArray", JSON.stringify(store));
}
