//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bbitch\b/gi, "mean person");
	v = v.replace(/\bbitches\b/gi, "mean people");
	v = v.replace(/shit/gi, "shoot");
	v = v.replace(/fuck/gi, "fudge");
	v = v.replace(/fuckwit/gi, "poor thing");
	v = v.replace(/damn/gi, "dang");
	v = v.replace(/\bdamnit\b/gi, "dangit");
	v = v.replace(/dick/gi, "apple");
	v = v.replace(/\bdicks\b/gi, "apples");
	v = v.replace(/cock/gi, "banana");
	v = v.replace(/\bcocks\b/gi, "bananas");
	v = v.replace(/pussy/gi, "cat");
	v = v.replace(/\bpussies\b/gi, "cats");
	v = v.replace(/ass/gi, "rapscallion");
	v = v.replace(/\basses\b/gi, "rapscallions");
	v = v.replace(/douche/gi, "dummy");
	v = v.replace(/\bdouches\b/gi, "dummies");
	v = v.replace(/fag/gi, "fun person");
	v = v.replace(/\bfaggot\b/gi, "fun person");
	v = v.replace(/\bfags\b/gi, "fun people");
	v = v.replace(/slut/gi, "shamelessly amazing person");
	v = v.replace(/\bsluts\b/gi, "shamelessly amazing people");
	v = v.replace(/\btrump\b/gi, "the piece of pumpkin poop");
	v = v.replace(/\bpiss\b/gi, "pee");
	v = v.replace(/\bbastard\b/gi, "John Snow");
	v = v.replace(/\bbastards\b/gi, "Snow siblings");
	v = v.replace(/cunt/gi, "flower");
	v = v.replace(/\bdumbass\b/gi, "stupid");
	v = v.replace(/\bcock\b/gi, "rooster");
	v = v.replace(/\bdumbasses\b/gi, "stupid people");






	textNode.nodeValue = v;
}
