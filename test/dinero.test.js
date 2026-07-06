import { test } from "node:test";
import assert from "node:assert/strict";
import { euros } from "../src/dinero.js";

test("euros da formato a los céntimos", () => {
  assert.equal(euros(405), "4,05 €");
  assert.equal(euros(1000), "10,00 €");
});
