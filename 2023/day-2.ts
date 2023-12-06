//                                               ----  Challenge Description ----

// In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

// Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

// A gift can be made if we have all the necessary materials to make it.

// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'
// console.log(manufacture(gifts, materials)) // ["tren", "oso"]

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'
// console.log(manufacture(gifts, materials)) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'
// console.log(manufacture(gifts, materials)) // []

// My Solution
function manufacture(gifts: string[], materials: string): string[] {
  const giftsMade: string[] = []

  gifts.forEach(gift => {
    const giftArr = gift.split('')
    let hasAllMaterials = true
    for (let i = 0; i < giftArr.length; i++) {
      if (!materials.includes(giftArr[i])) {
        hasAllMaterials = false
        break
      }
    }

    if (hasAllMaterials) {
      giftsMade.push(gift)
    }
  })

  return giftsMade
}

// ChatGPT's solution
function manufacture2(gifts: string[], materials: string): string[] {
  return gifts.filter((gift: string) => {
    const giftArr: string[] = gift.split('')
    return giftArr.every((char: string) => materials.includes(char))
  })
}
