import { describe, expect, test } from "@jest/globals";
import { ESLint } from "eslint";

const makeEsLint = (): ESLint => new ESLint();

const runLint = async (code: string): Promise<string | null> => {
  const esLint = makeEsLint();
  const lintResults = await esLint.lintText(code);
  return lintResults[0].messages[0].ruleId;
};

const disableNoUnusedVarsCheck =
  "// eslint-disable-next-line @typescript-eslint/no-unused-vars";
const disableEolLastCheck =
  "// eslint-disable-next-line @stylistic/js/eol-last";

describe("ESLint rules", () => {
  test("'Strings must use doublequote' reported, passed", async () => {
    const ruleId = "@stylistic/ts/quotes";
    const code = `
      ${disableNoUnusedVarsCheck}
      const foo = 'bar';
      ${disableEolLastCheck}
    `;
    const reportedRuleId = await runLint(code);
    expect(reportedRuleId).toBe(ruleId);
  });
});
