$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText("b");
  });
});


function submitText(key) {
	var text = $('#textinput').val();
	alert(text);
  var passOn=key;
  storeValue(passOn,text);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage
  localStorage.setItem(key, value);
}
