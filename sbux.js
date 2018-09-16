//MENU SECTION: HOVER

/*
$('#menu li.dropdown_1column,#menu li:hover.dropdown_2columns,#menu li:hover .dropdown_3columns,#menu li:hover .dropdown_4columns,#menu li:hover .dropdown_5columns').hover(function() {
  $(this).find('.col_1,.col_2,.col_3,.col_4,.col_5').stop(true, true).delay(200).fadeIn(500);
}, function() 
{
  $(this).find('.dropdown_1column,.dropdown_2columns,.dropdown_3columns,.dropdown_4columns,.dropdown_6columns').stop(true, true)
  .delay(200).fadeOut(500);
});
*/

//MENU SECTION

function openMenu(p){
	if(p==1)
		document.getElementsByClassName("dropdown_1column").style.display="inline";
	else if (p==2) 
		document.getElementsByClassName("dropdown_2columns").style.display="inline";
	else if (p==3)
		document.getElementsByClassName("dropdown_3columns").style.display="inline";
	else if (p==4)
		document.getElementsByClassName("dropdown_4columns").style.display="inline";
	else if (p==5)
		document.getElementsByClassName("dropdown_5columns").style.display="inline";
}

function closeMenu(p){
	if (p==1)
		document.getElementsByClassName("dropdown_1column").style.display="none";
	else if(p==2)
		document.getElementsByClassName("dropdown_2columns").style.display="none";
	else if(p==3)
		document.getElementsByClassName("dropdown_3columns").style.display="none";
	else if(p==4)
		document.getElementsByClassName("dropdown_4columns").style.display="none";
	else if(p==5)
		document.getElementsByClassName("dropdown_5columns").style.display="none";
}	


/* Feedback section */
function validate(){
	var name= document.forms["myForm"]["name"].value;
	var email= document.forms["myForm"]["email"].value;
	
	if (name =="" || email ==""){
		alert("Please fill all fields");
		return false;
	}else{
		alert("Thank You for Your Feedback!");
		return true;
	}
}