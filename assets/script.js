const Toggle = document.getElementsByName("input");
const monthlyPrice = document.querySelectorAll(".monthly");
const annualPrice = document.querySelectorAll(".annually");

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");

    // If the checkbox is checked, display the output text
    for(let i =0; i < monthlyPrice.length, i < annualPrice.length; i++){
        if (checkBox.checked == true){
        
            monthlyPrice[i].style.display = "block";
            annualPrice[i].style.display = "none";

        } else {
            monthlyPrice[i].style.display = "none";
            annualPrice[i].style.display = "block";

        }
      }

    }


    