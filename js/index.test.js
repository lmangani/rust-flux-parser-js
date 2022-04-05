const { get_syntax_error, get_tree } = require("../pkg/wasmy_flux.js");

describe('error', () => {
  test('parse without errors', () => {
    const source = 'from(bucket:"telegraf/aaa") |> limit(limit:100, offset:10)';
    const result = get_syntax_error(source);
    expect(result).toEqual("");
  });
  test('parse with errors', () => {
    const source = 'from(bucket:"telegraf/aaa") ;> limit(limit:100, offset:10)';
    const result = get_syntax_error(source);
    expect(result).not.toEqual("");
  });
  test('parse tree', () => {
    const source = 'from(bucket:"telegraf/aaa") |> limit(limit:100, offset:10)';
    const result = get_tree(source);
    expect(result.length).toEqual(4046);
  });
  test('parse json', () => {
    const source = 'from(bucket:"telegraf/aaa") |> limit(limit:100, offset:10)';
    const result = JSON.parse(get_tree(source));
    expect(result.name).toEqual('Start [from(bucket:"telegraf/aaa") |> limit(limit:100, offset:10)]');
  });
});
