import { describe, expect, test } from "@jest/globals";
import { ESLint } from "eslint";

const quotesRuleId = "@stylistic/ts/quotes";
const semiRuleId = "@stylistic/ts/semi";
const memberDelimiterStyleRuleId = "@stylistic/ts/member-delimiter-style";
const methodSignatureStyleRuleId =
  "@typescript-eslint-plugin/method-signature-style";
const eolLastRuleId = "@stylistic/js/eol-last";
const explicitFunctionReturnTypeRuleId =
  "@typescript-eslint-plugin/explicit-function-return-type";
const explicitMemberAccessibilityRuleId =
  "@typescript-eslint-plugin/explicit-member-accessibility";
const importsRuleId = "simple-import-sort/imports";

const disableNextLineCommand = "eslint-disable-next-line";
const disableNoUnusedVarsCheck = `// ${disableNextLineCommand} @typescript-eslint/no-unused-vars`;
const disableEolLastCheck = `// ${disableNextLineCommand} ${eolLastRuleId}`;

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

    test("Comma used, 'Expected a semicolon' reported, passed", async () => {
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

  describe(`${methodSignatureStyleRuleId}`, () => {
    test("Method shorthand syntax used, 'Shorthand method signature is forbidden. Use a function property instead' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      interface Example {
        func(arg: string): number;
      }
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResults = lintResults[0];
      expect(onlyLintResults.messages).toHaveLength(1);
      const onlyMessage = onlyLintResults.messages[0];
      expect(onlyMessage.ruleId).toBe(methodSignatureStyleRuleId);
    });
  });

  describe(`${eolLastRuleId}`, () => {
    test("no trailing new line, 'Newline required at end of file but not found' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      const foo = 123;
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResults = lintResults[0];
      expect(onlyLintResults.messages).toHaveLength(1);
      const onlyMessage = onlyLintResults.messages[0];
      expect(onlyMessage.ruleId).toBe(eolLastRuleId);
    });
  });

  describe(`${explicitFunctionReturnTypeRuleId}`, () => {
    test("Normal function definition syntax, No function return type, 'Missing return type on function' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      function foo() { 
        return;
      }
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(explicitFunctionReturnTypeRuleId);
    });

    test("First-class normal function definition syntax, No function return type, 'Missing return type on function' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      const foo = function () { 
        return;
      };
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(explicitFunctionReturnTypeRuleId);
    });

    test("First-class arrow function definition syntax, No function return type, 'Missing return type on function' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      const foo = () => { 
        return;
      };
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(explicitFunctionReturnTypeRuleId);
    });

    test("Class method definition syntax, No function return type, 'Missing return type on function' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      class Foo {
        public bar() {
          return;
        }
      }
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(explicitFunctionReturnTypeRuleId);
    });
  });

  describe(`${explicitMemberAccessibilityRuleId}`, () => {
    test("No access modifier on class property, 'Missing accessibility modifier on class property' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      class Foo {
        bar: number;
      }
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(explicitMemberAccessibilityRuleId);
    });

    test("No access modifier on class method, 'Missing accessibility modifier on method definition' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      class Foo {
        bar(): void {
          return;
        }
      }
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(explicitMemberAccessibilityRuleId);
    });
  });

  describe(`${importsRuleId}`, () => {
    test("Imports not sorted, 'Run autofix to sort these imports!' reported, passed", async () => {
      const esLint = new ESLint();
      const code = `
      ${disableNoUnusedVarsCheck}
      import { foo, bar } from "./bar";
      ${disableEolLastCheck}
      `;
      const lintResults = await esLint.lintText(code);
      expect(lintResults).toHaveLength(1);
      const onlyLintResult = lintResults[0];
      expect(onlyLintResult.messages).toHaveLength(1);
      const onlyMessage = onlyLintResult.messages[0];
      expect(onlyMessage.ruleId).toBe(importsRuleId);
    });
  });
});
