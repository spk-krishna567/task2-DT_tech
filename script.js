function toggle() {
  document.querySelector(".one").style.display = "none";
  document.querySelector(".top-left").querySelector("p").style.display =
    "block";
  document.querySelector(".top-left").style.width = "15rem";
  document.querySelector(".left-side").style.width = "15rem";
  document.querySelector(".left-side").querySelector("ul").style.display =
    "block";
  console.log("opened");
}
function t_back() {
  if (document.querySelector(".one").style.display == "none") {
    document.querySelector(".one").style.display = "flex";
    document.querySelector(".top-left").querySelector("p").style.display =
      "none";
    document.querySelector(".top-left").style.width = "8vw";
    document.querySelector(".left-side").style.width = "8vw";
    document.querySelector(".left-side").querySelector("ul").style.display =
      "none";
    console.log("closed");
  } else {
    Pass;
  }
}
