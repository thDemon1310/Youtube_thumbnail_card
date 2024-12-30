// -------title----------
function Ctitle() {
  let title = document.getElementById("input_title").value;
  console.log(title);
  document.getElementById("title").children[0].innerHTML = title;
}
// -----------dureation---------
function dure() {
  let time = document.getElementById("input_dur").value;
  console.log(time);

  var timepart = [];
  timepart = time.split(":");
  minpart = timepart[0];
  secpart = timepart[1];
  if (timepart.length == 1) {
    console.log("Please provide proper formet for time");
    if (minpart == 0) {
      if (secpart == 0) {
        console.log("The min timeplay for video is 1 sec");
      } else {
        console.log(`video length is ${secpart}`);
      }
    }
  } else {
    document.getElementById("dureation").innerHTML = time;
  }
}
// ---------thumbnail-------
function photo() {
  let pic_link = document.getElementById("input_thumbnail").value;
  let pic = document.getElementById("thumbnail");
  pic.src = pic_link;
}
// -------------channel name----------
function cname() {
  let chaname = document.getElementById("input_channel").value;
  console.log(chaname);

  document.getElementsByClassName("link")[0].innerHTML = chaname;
}
// ----------views-----------
// function t_views() {
//   let views = document.getElementById("input_views").value ;
//   if (views >= 1000) {
//     let t_views = [];
//     t_views = views.split([]);
//     console.log(t_views);
//     let first_view = t_views[0] + "K";
//     console.log(first_view);
//     document.getElementById("v").innerHTML = first_view;
//   } else if (views >= 1000000) {
//     let t_views = [];
//     t_views = views.split([-6]);
//     let first_view = t_views[0] + "M";
//     document.getElementById("v").innerHTML = first_view;
//   }
//   else{
//     document.getElementById("v").innerHTML=views;
//   }
// }

function t_views() {
  let view = document.getElementById("input_views").value * 1;
  console.log(view);
  let show_view;
  if (view >= 1000000) {
    show_view = Math.floor(view / 1000000) + "M";
  } else if (view >= 1000) {
    show_view = Math.floor(view / 1000) + "K";
  } else {
    show_view = view;
  }
  document.getElementById("v").innerHTML = show_view;
}
// --------MOnths old=--------
function monthsold() {
  let time = document.getElementById("input_months").value;
  cal_time = time / 24;
  if (cal_time < 1) {
    document.getElementById("o").innerHTML = time;
  } else {
    document.getElementById("o").innerHTML = cal_time;
  }
  // if ((time) => 24) {
  //   cal_time = time / 24;
  //   document.getElementById("o").innerHTML = cal_time;
  // } else {
  //   document.getElementById("o").innerHTML = time;
  // }
}
