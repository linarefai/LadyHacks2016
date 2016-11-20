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
	v = v.replace(/\bshit\b/gi, "shoot");
	v = v.replace(/\bfuck\b/gi, "fudge");
	v = v.replace(/\bfuckwit\b/gi, "poor thing");
	v = v.replace(/\bdamn\b/gi, "dang");
	v = v.replace(/\bdick\b/gi, "penis");
	v = v.replace(/\bcock\b/gi, "penis");
	v = v.replace(/\bpussy\b/gi, "cat");
	v = v.replace(/\basshole\b/gi, "rapscallion");
	v = v.replace(/\bdouche\b/gi, "dummy");
	v = v.replace(/\bfag\b/gi, "fun person");
	v = v.replace(/\bslut\b/gi, "shamelessly amazing person");
	v = v.replace(/\btrump\b/gi, "the piece of pumpkin shit");
	v = v.replace(/\bpiss\b/gi, "pee");
	v = v.replace(/\bbastard\b/gi, "John Snow");
	v = v.replace(/\bcunt\b/gi, "flower");
	v = v.replace(/\bdumbass\b/gi, "stupid");






	textNode.nodeValue = v;
}
