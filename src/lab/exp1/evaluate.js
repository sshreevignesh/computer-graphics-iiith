var number_of_attempts = 0;
function eval()
{
	number_of_attempts=number_of_attempts+1;
	var form = document.forms["quiz"];

	/* Initialise answers */
	var a1a = "(2, 2)";
	var a1b = "(-2, 3)";
	var a1c = "(-4, 0)";
	var a1d = "(-3, -3)";
	var a1e = "(4, -3)";
	var a2  = "1";
	var a3  = "3";
	var first_correct_answer_printed = 0;

	/* Extract answers */
	var q1a = form["q1_a"].value;
	var q1b = form["q1_b"].value;
	var q1c = form["q1_c"].value;
	var q1d = form["q1_d"].value;
	var q1e = form["q1_e"].value;
	var q2, q3, length;

	length = form["q2"].length;
	for(i=0; i<length; i++)
	if(form["q2"][i].checked)
	q2 = form["q2"][i].value;

	length = form["q3"].length;
	for(i=0; i<length; i++)
	if(form["q3"][i].checked)
	q3 = form["q3"][i].value;

	/* Evaluate answers */
	var score = 0;
	var result = "Your Correct Answers: ";

	if(q1a == a1a)
	{
		score++;
		if(first_correct_answer_printed)
		{
			result+=", ";
		}
		else
		{
			first_correct_answer_printed++;
		}
		result += "Q1a";
	}

	if(q1b == a1b)
	{
		score++;
		if(first_correct_answer_printed)
		{
			result+=", ";
		}

		else
		{
			first_correct_answer_printed++;
		}
		result += "Q1b";
	}

	if(q1c == a1c)
	{
		score++;
		if(first_correct_answer_printed)
		{
			result+=", ";
		}
		else
		{
			first_correct_answer_printed++;
		}
		result += "Q1c";
	}

	if(q1d == a1d)
	{
		score++;
		if(first_correct_answer_printed)
		{
			result+=", ";
		}
		else
		{
			first_correct_answer_printed++;
		}
		result += "Q1d";
	}

	if(q1e == a1e)
	{
		score++;
		if(first_correct_answer_printed)
		{
			result+=", ";
		}
		else
		{
			first_correct_answer_printed++;
		}
		result += "Q1e";
	}

	if(q2 == a2)
	{
		score++;
		if(first_correct_answer_printed)
		{
			result+=", ";
		}
		else
		{
			first_correct_answer_printed++;
		}
		result += "Q2";
	}

	if(q3 == a3)
	{
		score++;
		if(first_correct_answer_printed)
		{
			result+=", ";
		}
		else
		{
			first_correct_answer_printed++;
		}
		result += "Q3";
	}

	/* Show result */
	var output = "Your score is " + score + "\n";
	output += result;

	alert(output);
}

function show_correct_ans()
{
	/* Initialise answers */
	var a1a = "(2, 2)";
	var a1b = "(-2, 3)";
	var a1c = "(-4, 0)";
	var a1d = "(-3, -3)";
	var a1e = "(4, -3)";
	var a2  = "1";
	var a3  = "3";

	var answers="Correct Answers:\n"
	answers=answers+"Q1. a)"+a1a+" b)"+a1b+" c)"+a1c+" d)"+a1d+" e)"+a1e+'\n';
	answers=answers+"Q2. "+a2+'\n';
	answers=answers+"Q3. "+a3+'\n';
	if(number_of_attempts)
	{
		alert(answers);
	}
	else
	{
		alert("Please attempt the quiz atleast once before checking for the answer");
	}
}
