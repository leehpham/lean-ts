import { describe, expect, test } from "@jest/globals";
import { ESLint } from "eslint";

const eolLastRuleId = "@stylistic/eol-last";

const disableNextLineCommand = "eslint-disable-next-line";
const disableNoUnusedVarsCheck = `// ${disableNextLineCommand} @typescript-eslint/no-unused-vars`;
const disableEolLastCheck = `// ${disableNextLineCommand} ${eolLastRuleId}`;

const ERROR = 2;

describe("ESLint rules", () => {
  const quotesRuleId = "@stylistic/quotes";
  const quotesMsg = "Strings must use doublequote.";
  describe(`${quotesRuleId}`, () => {
    test(`'${quotesMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(quotesMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });

  const semiRuleId = "@stylistic/semi";
  const semiMsg = "Missing semicolon.";
  describe(`${semiRuleId}`, () => {
    test(`'${semiMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(semiMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });

  const memberDelimiterStyleRuleId = "@stylistic/member-delimiter-style";
  const memberDelimiterStyleMsg = "Expected a semicolon.";
  describe(`${memberDelimiterStyleRuleId}`, () => {
    test(`Line break used, '${memberDelimiterStyleMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(memberDelimiterStyleMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });

    test(`Comma used, '${memberDelimiterStyleMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(memberDelimiterStyleMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });

  const methodSignatureStyleRuleId =
    "@typescript-eslint-plugin/method-signature-style";
  const methodSignatureStyleMsg =
    "Shorthand method signature is forbidden. Use a function property instead.";
  describe(`${methodSignatureStyleRuleId}`, () => {
    test(`Method shorthand syntax used, '${methodSignatureStyleMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(methodSignatureStyleMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });

  const eolLastMsg = "Newline required at end of file but not found.";
  describe(`${eolLastRuleId}`, () => {
    test(`no trailing new line, '${eolLastMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(eolLastMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });

  const explicitFunctionReturnTypeRuleId =
    "@typescript-eslint-plugin/explicit-function-return-type";
  const explicitFunctionReturnTypeMsg = "Missing return type on function.";
  describe(`${explicitFunctionReturnTypeRuleId}`, () => {
    test(`Normal function definition syntax, No function return type, '${explicitFunctionReturnTypeMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(explicitFunctionReturnTypeMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });

    test(`First-class normal function definition syntax, No function return type, '${explicitFunctionReturnTypeMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(explicitFunctionReturnTypeMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });

    test(`First-class arrow function definition syntax, No function return type, '${explicitFunctionReturnTypeMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(explicitFunctionReturnTypeMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });

    test(`Class method definition syntax, No function return type, '${explicitFunctionReturnTypeMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(explicitFunctionReturnTypeMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });

  const explicitMemberAccessibilityRuleId =
    "@typescript-eslint-plugin/explicit-member-accessibility";
  const explicitMemberAccessibilityMsg =
    "Missing accessibility modifier on class property.";
  describe(`${explicitMemberAccessibilityRuleId}`, () => {
    test(`No access modifier on class property, '${explicitMemberAccessibilityMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.severity).toBe(ERROR);
    });

    test(`No access modifier on class method, '${explicitMemberAccessibilityMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });

  const importsRuleId = "simple-import-sort/imports";
  const importsMsg = "Run autofix to sort these imports!";
  describe(`${importsRuleId}`, () => {
    test(`Imports not sorted, '${importsMsg}' reported, passed`, async () => {
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
      expect(onlyMessage.message).toBe(importsMsg);
      expect(onlyMessage.severity).toBe(ERROR);
    });
  });
});
