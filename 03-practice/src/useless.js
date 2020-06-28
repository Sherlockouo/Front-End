document.getElementsByClassName("panel panel-info")[0].getElementsByClassName("nav nav-tabs sl_nav_tabs")[0].getElementsByTagName("li")[1].getElementsByTagName("a")[0].click()

let o = document.getElementById("more")
for (let i = 0; i < 4; i++) {
  console.log(i)
  setTimeout(() => {
    o.getElementsByTagName("a")[0].click()
  }, 1000)
}
console.log('shit')
setTimeout(() => {
  document.getElementsByClassName("panel panel-info")[41].getElementsByClassName("panel-heading kc_head")[0].getElementsByClassName("panel-title")[0].click()
}, 1000)

setInterval(() => {
  let o = document.getElementsByClassName("panel panel-info")[41].getElementsByClassName("panel-body table-responsive")[0].getElementsByClassName("table table-hover")[0].getElementsByClassName("body_tr")[13].getElementsByClassName("an")[0].getElementsByClassName("btn btn-primary btn-sm")[0]
  // console.log(document.getElementsByClassName("panel panel-info")[41].getElementsByClassName("panel-body table-responsive")[0].getElementsByClassName("table table-hover")[0].getElementsByClassName("body_tr")[13])
  // console.log(o.innerText)
  if (o.innerText == "选课") {
    o.click()
    setTimeout(() => {
      if (document.getElementsByClassName("modal-content")[0] != null) {
        var ok_btn = document.getElementsByClassName("modal-content")[0].getElementsByClassName("modal-footer ui-draggable-handle")[0].getElementsByClassName("btn btn-sm btn-default")[0]
        if (ok_btn != null)
          ok_btn.click()
      }
    }, 750)
  }
}, 1500)