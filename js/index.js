const { get_syntax_error, get_tree } = require("../pkg/wasmy_flux.js");
const source = 'from(bucket:"telegraf/aaa") |> limit(limit:100, offset:10)';

const err = get_syntax_error(source);
if (err == "" ){
	console.log(get_tree(source));
} else { console.log(err) }
