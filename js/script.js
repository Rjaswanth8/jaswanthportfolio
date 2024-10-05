// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 40,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar

let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// bootstrap progress circular bar

let bootstrapProgress = document.querySelector(".bootstrap"),
  bootstrapValue = document.querySelector(".bootstrap-progress");

let bootstrapStartValue = 0,
  bootstrapEndValue = 80,
  bootstrapSpeed = 30; 

let bootstrapProgressInterval = setInterval(() => { 
  bootstrapStartValue++; 

  bootstrapValue.textContent = `${bootstrapStartValue}%`;
  bootstrapProgress.style.background = `conic-gradient(#000 ${
    bootstrapStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (bootstrapStartValue == bootstrapEndValue) { 
    clearInterval(bootstrapProgressInterval);
  }
}, bootstrapSpeed);

// SQL progress circular bar 
let sqlProgress = document.querySelector(".sql"),
    sqlValue = document.querySelector(".sql-progress");

let sqlStartValue = 0,
    sqlEndValue = 70, // Set your desired percentage here
    sqlSpeed = 30;

let progressSql = setInterval(() => {
    sqlStartValue++;
    sqlValue.textContent = `${sqlStartValue}%`;
    sqlProgress.style.background = `conic-gradient(#185519 ${sqlStartValue * 3.6}deg, #ededed 0deg)`;
    
    if (sqlStartValue == sqlEndValue) {
        clearInterval(progressSql);
    }
}, sqlSpeed);

// Python progress circular bar 
let pythonProgress = document.querySelector(".python"),
    pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
    pythonEndValue = 60, // Set your desired percentage here
    pythonSpeed = 30;

let progressPython = setInterval(() => {
    pythonStartValue++;
    pythonValue.textContent = `${pythonStartValue}%`;
    pythonProgress.style.background = `conic-gradient(#1230AE ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
    
    if (pythonStartValue == pythonEndValue) {
        clearInterval(progressPython);
    }
}, pythonSpeed);

// MySQL progress circular bar 
let mysqlProgress = document.querySelector(".mysql"),
    mysqlValue = document.querySelector(".mysql-progress");

let mysqlStartValue = 0,
    mysqlEndValue = 75, // Set your desired percentage here
    mysqlSpeed = 30;

let progressMySQL = setInterval(() => {
    mysqlStartValue++;
    mysqlValue.textContent = `${mysqlStartValue}%`;
    mysqlProgress.style.background = `conic-gradient(#E85C0D ${mysqlStartValue * 3.6}deg, #ededed 0deg)`;
    
    if (mysqlStartValue == mysqlEndValue) {
        clearInterval(progressMySQL);
    }
}, mysqlSpeed);

// wordpress progress circular bar

let wordpressProgress = document.querySelector(".wordpress"),
    wordpressValue = document.querySelector(".wordpress-progress");

let wordpressStartValue = 0,
    wordpressEndValue = 50, // Set your desired percentage here
    wordpressSpeed = 30;

let progresswordpress = setInterval(() => {
    wordpressStartValue++;
    wordpressValue.textContent = `${mysqlStartValue}%`;
    wordpressProgress.style.background = `conic-gradient(#674636 ${wordpressStartValue * 3.6}deg, #ededed 0deg)`;
    
    if (wordpressStartValue == wordpressEndValue) {
        clearInterval(progresswordpress);
    }
}, wordpressSpeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});