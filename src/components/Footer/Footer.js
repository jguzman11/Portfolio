import React from 'react';

function Footer() {
    return(
        <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Jordan Guzman 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://twitter.com/explore">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}
    export default Footer;
//     function renderTime(){
//       // Date
//       var myDate = new Date();
//       var year = myDate.getFullYear();
//       if(year < 1000){
//         year += 1900;
//       }
//       var day = myDate.getDay();
//       var month = myDate.getMonth();
//       var daym = myDate.getDate();
//       var montharray = new Array("January","February","March","April", "May", "June", "July", "August", "September","Octover", "November", "December");

//       // Time
//       var currentTime = new Date();
//       var hrs = currentTime.getHours();
//       var min = currentTime.getMinutes();
//       var sec = currentTime.getSeconds();
//         if(h == 12) {
//           h = 0;
//         } 
//         if(h < 10)
//         h = '0' + h;
//     }
//     if(m < 10){
//       m = "0" + m;
//     }
//     if(s < 10 ){
//       s = "0" + s;
//     }
//     var myClock = document.getElementById("clockDisplay");
//     myClock.textContent = "" + " " + daym + " " + montharray[month] + " " + year + "|" +h+ ":" +m+ ":" +s;
//     myClock.innerText = "" + " " + daym + " " + montharray[month] + " " + year + "|" +h+ ":" +m+ ":" +s;
    
//     setTimeout("renderTime()", 1000); 
// };
// renderTime();

