import { describe, expect, test } from "@jest/globals";
import { ESLint } from "eslint";

const quotesRuleId = "@stylistic/ts/quotes";
const semiRuleId = "@stylistic/ts/semi";
const memberDelimiterStyleRuleId = "@stylistic/ts/member-delimiter-style";

const disableNoUnusedVarsCheck =
  "// eslint-disable-next-line @typescript-eslint/no-unused-vars";
const disableEolLastCheck =
  "// eslint-disable-next-line @stylistic/js/eol-last";

describe("ESLint rules", () => {
  describe(`${quotesRuleId}`, () => {
    test("'Strings must use doublequote' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      const foo = 'bar';
      ${disableEolLastCheck}
    `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(quotesRuleId);
    });
  });

  describe(`${semiRuleId}`, () => {
    test("'Missing semicolon' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      const foo = 123
      ${disableEolLastCheck}
    `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(semiRuleId);
    });
  });

  describe(`${memberDelimiterStyleRuleId}`, () => {
    test("Line break used, 'Expected a semicolon' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      interface Foo {
        bar: number
      }
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(memberDelimiterStyleRuleId);
    });

    test("Comma used, 'Expected a semicolon' not reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      interface Foo {
        bar: number,
      }
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(memberDelimiterStyleRuleId);
    });
  });
});
