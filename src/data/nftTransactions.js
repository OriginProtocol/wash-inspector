import useAlchemy from "../../src/hooks/useAlchemy"
import { orderBy, uniq } from "lodash"

async function transferHistory (contractAddress, nftId) {
  const result = await fetch(`https://nip.ogn-review.net/v1/collections/${contractAddress}/${nftId}`)
  const json = await result.json()
  const activity = orderBy(json.activity, ['timestamp'], ['asc'])
  const connectedWallets = findConnectedWallets(activity)

  const washTrades = detectWashTrades(activity, connectedWallets)

  if (washTrades.length > 0) {
		console.log(nftId, uniq(washTrades.map(i => i.washTradeType)))
	}

  json.washTraded = washTrades.length > 0
  json.washTrades = washTrades
  json.activity = activity

  return json;
}

function detectWashTrades(activity, connectedWallets) {
	let washTradeIndicators = detectBackandForthTransactions(activity)
	washTradeIndicators = [...detectBuyerIsSeller(activity), ...washTradeIndicators]
	washTradeIndicators = [...detectBuyerAndSellerWalletsConnected(activity, connectedWallets), ...washTradeIndicators]

	return washTradeIndicators;
}

function detectBuyerAndSellerWalletsConnected(activity, connectedWallets) {
	const sales = activity.filter(i => i.event === 'Sale')
	const walletConnectedTrades = []
	sales.forEach(sale => {
		connectedWallets.forEach(({addresses, transactions}) => {
			// if buyer and seller are not the same address but are connected
			if(sale.from !== sale.to &&
				addresses.includes(sale.from.toLowerCase()) && addresses.includes(sale.to.toLowerCase())) {
				walletConnectedTrades.push({
					washTradeType: "wallets_connected",
					// 1st transaction is sale, subsequent are explaining wallet connections
					transactions: [sale, ...orderBy(transactions, ['timestamp'], ['asc'])]
				})
			}
		})
	})

	return walletConnectedTrades;
}

function detectBuyerIsSeller(activity) {
	const buyerIsSellerTrades = []

	for (let i = 0; i < activity.length; i++) {
		// wash trade detected
		if (activity[i].from === activity[i].to && activity[i].event === 'Sale') {
			buyerIsSellerTrades.push({
				washTradeType: "buyer_is_seller",
				transactions: [activity[i]]
			})
		}
	}

	return buyerIsSellerTrades
}

function detectBackandForthTransactions(activity) {
	const backAndForthTrades = []
	const activityIndexesProcessed = []

	for (let i = 0; i < activity.length; i++) {
		for (let j = 0; j < activity.length; j++) {
			if (i === j || activityIndexesProcessed.includes(i)) continue

			const activityI = activity[i]
			const activityJ = activity[j]

			// wash trade detected
			if (activityI.from === activityJ.to && activityI.to === activityJ.from &&
				activityI.event === 'Sale' && activityJ.event === 'Sale'
				) {
				activityIndexesProcessed.push(j)
				activityIndexesProcessed.push(i)
				backAndForthTrades.push({
					washTradeType: "back_and_forth",
					transactions: [activityI, activityJ]
				})
			}
		}
	}

	return backAndForthTrades
}

/**
 * Find groups of wallets that transfer the nft between themselves without selling it
 * indicating that they could be controlled by the same entity
 */
function findConnectedWallets(activity) {
	const groups = []
	activity.filter(item => 
		item.event === 'Transfer'
	).forEach(item => {
		const from = item.from.toLowerCase()
		const to = item.to.toLowerCase()
		let found = false

		for (let i = 0; i < groups.length; i++) {
			const addresses = groups[i].addresses
			if(addresses.includes(from) || addresses.includes(to)) {
				found = true
				groups[i].transactions = [...groups[i].transactions, item]
				if (addresses.includes(from)) {
					groups[i].addresses = [...groups[i].addresses, to]
				} else {
					groups[i].addresses = [...groups[i].addresses, from]
				}
			}
		}

		// first connection record 
		if (!found) {
			groups.push({
				addresses: [from, to],
				transactions: [item]
			})
		}
	})

	return groups
}


module.exports = {
	transferHistory
}