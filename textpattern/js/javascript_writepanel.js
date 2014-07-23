// Show help for markdown, for textile or no help in function of what the user has chosen in the syntax combo
function showHelp(option) {
	if (option == "1") {
		// Textile chosen for writing
		$("#textfilter_group").show();
		$("#textile_help").show();
		$("#markdown_help").hide();
	}
    else if (option == "wet_markdown") {
    	// Markdown chosen for writing
		$("#textfilter_group").show();
		$("#textile_help").hide();
		$("#markdown_help").show();
   	}
	else {
		// Help box is hiden if not markdown or textile syntax is chosen
		$("#textfilter_group").hide();
	}
}

$(document).ready(function() {
	// SHOW MARKDOWN/TEXTILE/NO HELP
	var syntaxBody;
	var syntaxExcerpt;
	
	// Make markdown help text a little bit interactive
	$("#markdown_help p.hidden").hover(function() {
		$(this).css('cursor', 'pointer');
	});
	$("#markdown_help p.hidden").next().hide();
	$("#markdown_help p.hidden").click(function() {
		$(this).next().slideToggle();
	});

	// Show markdown, textile or no help text
	syntaxBody = $('#markup-body').val();
	showHelp(syntaxBody);
	
	// Change the text help when selector for body syntax changes
	$('#markup-body').change(function() {
		syntaxBody = $('#markup-body').val();
		showHelp(syntaxBody);	
	});
	// Change the text help when selector for excerpt syntax changes
	$('#markup-excerpt').change(function() {
		syntaxExcerpt = $('#markup-excerpt').val();
		showHelp(syntaxExcerpt);
	});
	
	// CHANGE ELEMENTS POSITION
    if ($("p#write-publish").length != 0)	{
    	// NEW ARTICLE
		// move the publish button to a best place
		$("p#write-publish").insertAfter("input#title");
		$("p#write-publish").css({"float": "right", "display": "inline", "margin-top": "0em", "margin-right": "1em"});
	}
	else {
		// EDIT ARTICLE
		// move the save button to a best place
		$("p#write-save").insertAfter("span#article_partial_article_view");
		$("p#write-save").css({"float": "right", "display": "inline", "margin-top": "0em", "margin-right": "1em"});
	}
	
});
