import assert from "assert";
import { 
  TestHelpers,
  Ambient_CrocSwap
} from "generated";
const { MockDb, Ambient } = TestHelpers;

describe("Ambient contract CrocSwap event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Ambient contract CrocSwap event
  const event = Ambient.CrocSwap.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Ambient_CrocSwap is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Ambient.CrocSwap.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAmbientCrocSwap = mockDbUpdated.entities.Ambient_CrocSwap.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAmbientCrocSwap: Ambient_CrocSwap = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      base: event.params.base,
      quote: event.params.quote,
      poolIdx: event.params.poolIdx,
      isBuy: event.params.isBuy,
      inBaseQty: event.params.inBaseQty,
      qty: event.params.qty,
      tip: event.params.tip,
      limitPrice: event.params.limitPrice,
      minOut: event.params.minOut,
      reserveFlags: event.params.reserveFlags,
      baseFlow: event.params.baseFlow,
      quoteFlow: event.params.quoteFlow,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAmbientCrocSwap, expectedAmbientCrocSwap, "Actual AmbientCrocSwap should be the same as the expectedAmbientCrocSwap");
  });
});
