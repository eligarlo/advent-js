//                                               ----  Challenge Description ----

// In the toy factory of the North Pole, each toy has a unique identification number.
// However, due to an error in the toy machine, some numbers have been assigned to more than one toy.
// Find the first identification number that has been repeated, where the second occurrence has the smallest index!
// In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

// const giftIds = [2, 1, 3, 5, 3, 2]
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5

// My Solution
function findFirstRepeated(gifts: number[]): number {
  // Code here
  let repeatedGiftId = -1

  const checkedGifts: number[] = []

  for (let i = 0; i < gifts.length; i++) {
    const giftId = gifts[i]

    if (checkedGifts.includes(giftId)) {
      return (repeatedGiftId = giftId)
    }

    checkedGifts.push(giftId)
  }

  return repeatedGiftId
}

// ChatGPT's solution
function findFirstRepeated2(gifts: number[]): number {
  const checkedGifts = new Set<number>()

  for (const gift of gifts) {
    if (checkedGifts.has(gift)) {
      return gift
    }

    checkedGifts.add(gift)
  }

  return -1
}
