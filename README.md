# 〰️ wasmy flux js parser
JS Flux parser in Rust

### 🥇 Install
```bash
npm install @qxip/wasmy_flux
```

### Functions
- `get_tree` to parse to AST tree
- `get_syntax_error` to check for parsing error


### 🥈 Use
```javascript
const { get_syntax_error, get_tree } = require("@qxip/wasmy_flux");

const source = 'from(bucket:"telegraf/aaa") |> limit(limit:100, offset:10)';

if (get_syntax_error(source) == "" ){
        console.log(get_tree(source));
} else { console.log(err) }
```

#### Credits
Based on [wasmy_rust](https://github.com/chnn/wasmy-flux)
