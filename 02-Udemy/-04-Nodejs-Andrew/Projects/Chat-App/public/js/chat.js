const $messageFromInput = document.querySelector("#inputMsg");
const $messageForm = document.querySelector("form");
const $messageFormBtn = document.querySelector(".formBtn");
const $locationBtn = document.querySelector(".locationBtn");
const $messages = document.querySelector(".messages");
const $sideBar = document.querySelector(".chat__sidebar")

// Templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationTemplate = document.querySelector("#location-template").innerHTML;
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;

const clientSocket = io();




const autoScroll = ()=>{
  const $newMessage= $messages.lastElementChild;

  const newMessageStyles = getComputedStyle($newMessage)
  const marginBottom = parseInt(newMessageStyles.marginBottom)
  const newMessageHeight= $newMessage.offsetHeight + marginBottom;

  const visibleHeight = $messages.offsetHeight;

  const containerHeight = $messages.scrollHeight;
  
  const totalScrollOffset = $messages.scrollTop + visibleHeight;
console.log('newMessageHeight',newMessageHeight);
  console.log('visibleHeight', visibleHeight);
  console.log('containerHeight', containerHeight);
  console.log('totalScrollOffset',totalScrollOffset);


  if(containerHeight - newMessageHeight <= totalScrollOffset){
    $messages.scrollTop =$messages.scrollHeight;
  }
   
}








// !  access url options
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

clientSocket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});

// clientSocket.on("counterUpdated", (counter) => {
//   console.log("Updated counter value:", counter);
// });

// document.querySelector("#incBtn").addEventListener("click", () => {
//   //clientSocket.emit("IncrementCounter");
// });

clientSocket.on("shardRoom", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, { room, users });

  $sideBar.innerHTML= html;
});

// ________CHALLANGE__________
clientSocket.on("message", (message) => {
  // console.log(msg);
  const html = Mustache.render(messageTemplate, {
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
    username: message.sender,
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoScroll()
});

$messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // const message = e.target.elements.message;
  const message = $messageFromInput.value;

  $messageFormBtn.setAttribute("disabled", "disabled");
  $messageFromInput.value = "";
  $messageForm.focus();

  clientSocket.emit("sendMessage", message, (acknowledgement) => {
    $messageFormBtn.removeAttribute("disabled");
    if (acknowledgement.text) {
      const html = Mustache.render(messageTemplate, {
        message: acknowledgement.text,
        createdAt: moment(acknowledgement.createdAt).format("h:mm a"),
        username: username,
      });
      $messages.insertAdjacentHTML("beforeend", html);
    }
    // console.log(acknowledgement);
  });
});
clientSocket.on("locationMessage", (location) => {
  const html = Mustache.render(locationTemplate, {
    URL: location.url,
    createdAt: moment(location.createdAt).format("h:mm a"),
    username: location.sender,
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoScroll()
});

$locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("your browser nt support locations");
  }

  navigator.geolocation.getCurrentPosition((response) => {
    const {
      coords: { latitude, longitude },
    } = response;

    $locationBtn.setAttribute("disabled", "disabled");
    clientSocket.emit(
      "location",
      { latitude, longitude },
      (acknowledgement) => {
        $locationBtn.removeAttribute("disabled");
        console.log(acknowledgement);
      }
    );
  });
});
