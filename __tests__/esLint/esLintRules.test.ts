import { describe, expect, test } from "@jest/globals";
import { ESLint } from "eslint";

const disableNoUnusedVarsCheck =
  "// eslint-disable-next-line @typescript-eslint/no-unused-vars";
const disableEolLastCheck =
  "// eslint-disable-next-line @stylistic/js/eol-last";

describe("ESLint rules", () => {
  test("'Strings must use doublequote' reported, passed", async () => {
    const esLint = new ESLint();
    const ruleId = "@stylistic/ts/quotes";
    const code = `
      ${disableNoUnusedVarsCheck}
      const foo = 'bar';
      ${disableEolLastCheck}
    `;
    const lintResults = await esLint.lintText(code);
    expect(lintResults[0].messages[0].ruleId).toBe(ruleId);
  });

  test("'Missing semicolon' reported, passed", async () => {
    const esLint = new ESLint();
    const ruleId = "@stylistic/ts/semi";
    const code = `
      ${disableNoUnusedVarsCheck}
      const foo = 123
      ${disableEolLastCheck}
    `;
    const lintResults = await esLint.lintText(code);
    expect(lintResults[0].messages[0].ruleId).toBe(ruleId);
  });
});
