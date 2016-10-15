$(document).ready(function(){
	
	/*--- Display information modal box ---*/

	$('body').on("click","#StartButton", function() {
    	
		$(".container").remove();
		$("body").append('<div class="container2"><p>This is a quiz, this is how the quiz works: </p><ul><li>1. A question will be presented with 4 possible answers.</li><li>2. Choose an answer and click submit.</li><li>3. If you dont know the answer you can click on Skip to go to next question. </li></ul><p>So, Are you ready?</p><a class="close" href="#">Got It!</a></div>');
		return false;
	});
	$('body').on("click",".close", function() {
		$(".container2").remove();
		$("body").append('<div><p>Question </p><ul><li>A. Answer .</li><li>B. Answer .</li><li>C. Answer . </li><li>D. Answer . </li></ul><form><input type="submit" id="SubmitButton" class="submit" name="Submit" value="Submit"/><input type="submit" id="SkipButton" class="submit" name="Skip" value="Skip"/></form>');
			});	
	});
