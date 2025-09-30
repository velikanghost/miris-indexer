/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Ambient,
  Ambient_CrocSwap,
  AprMon,
  AprMon_Deposit,
  AprMon_Redeem,
  Clober,
  Clober_Swap,
  Magma,
  Magma_Deposit,
  Magma_Withdraw,
} from 'generated'

Ambient.CrocSwap.handler(async ({ event, context }) => {
  const entity: Ambient_CrocSwap = {
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
  }

  context.Ambient_CrocSwap.set(entity)
})

AprMon.Deposit.handler(async ({ event, context }) => {
  const entity: AprMon_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  }

  context.AprMon_Deposit.set(entity)
})

AprMon.Redeem.handler(async ({ event, context }) => {
  const entity: AprMon_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    controller: event.params.controller,
    receiver: event.params.receiver,
    requestId: event.params.requestId,
    shares: event.params.shares,
    assets: event.params.assets,
    fee: event.params.fee,
  }

  context.AprMon_Redeem.set(entity)
})

Clober.Swap.handler(async ({ event, context }) => {
  const entity: Clober_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    inToken: event.params.inToken,
    outToken: event.params.outToken,
    amountIn: event.params.amountIn,
    amountOut: event.params.amountOut,
    router: event.params.router,
    method: event.params.method,
  }

  context.Clober_Swap.set(entity)
})

Magma.Deposit.handler(async ({ event, context }) => {
  const entity: Magma_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    depositor: event.params.depositor,
    amount: event.params.amount,
    gMonMinted: event.params.gMonMinted,
    referralId: event.params.referralId,
  }

  context.Magma_Deposit.set(entity)
})

Magma.Withdraw.handler(async ({ event, context }) => {
  const entity: Magma_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawer: event.params.withdrawer,
    amount: event.params.amount,
    gMonBurned: event.params.gMonBurned,
  }

  context.Magma_Withdraw.set(entity)
})
