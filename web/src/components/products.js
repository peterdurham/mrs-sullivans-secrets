const products = [
  {
    name: 'Seven Syllable Types Anchor Charts - Orton-Gillingham Inspired',
    subject: ['Reading', 'Reading Strategies', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Seven-Syllable-Types-Anchor-Charts-4623905-1578000020/original-4623905-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Seven-Syllable-Types-Anchor-Charts-Orton-Gillingham-Inspired-4623905'
  },
  {
    name: 'Open and Closed Syllables - Orton-Gillingham Inspired',
    subjects: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Spelling-Rules-Open-and-Closed-Syllables-4640634-1578750540/original-4640634-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Open-and-Closed-Syllables-Orton-Gillingham-Inspired-4640634'
  },
  {
    name: '-ss, -ll, -ff, -zz (Sammy Loves Friendly Zebras) - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Spelling-Rules-Activities-and-Games-ss-ll-ff-zz-4626015-1578231486/original-4626015-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/-ss-ll-ff-zz-Sammy-Loves-Friendly-Zebras-Orton-Gillingham-Inspired-4626015'
  },
  {
    name: 'Phonics Skills Instructional Posters - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Orton-Gillingham-Inspired-Spelling-Rules-Instructional-Posters-4660563-1578591492/original-4660563-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Phonics-Skills-Instructional-Posters-Orton-Gillingham-Inspired-4660563'
  },
  {
    name: 'Magic e (CVCe) - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Orton-Gillingham-Inspired-Spelling-Rules-Magic-e-4693457-1578237499/original-4693457-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Magic-e-CVCe-Orton-Gillingham-Inspired-4693457'
  },
  {
    name: 'Consonant Blends - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Orton-Gillingham-Inspired-Spelling-Rules-Consonant-Blends-4802728-1578231907/original-4802728-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Consonant-Blends-Orton-Gillingham-Inspired-4802728'
  },
  {
    name: 'Vowel Teams (oa, oe) - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Spelling-Rules-Vowel-Teams-oe-oa-Orton-Gillingham-Inspired-4906485-1578232891/original-4906485-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Vowel-Teams-oa-oe-Orton-Gillingham-Inspired-4906485'
  },
  {
    name: 'Blending Board - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Orton-Gillingham-Inspired-Blending-Board-4625166-1577999675/original-4625166-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Blending-Board-Orton-Gillingham-Inspired-4625166'
  },
  {
    name: 'Vowel Teams Bundle (ai, ay, ee, ea, oa, oe)',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Orton-Gillingham-Inspired-Spelling-Rules-Vowel-Teams-4626233-1578058600/original-4626233-4.jpg',
    url: 'https://www.teacherspayteachers.com/Product/Vowel-Teams-Bundle-ai-ay-ee-ea-oa-oe-4626233'
  },
  {
    name: 'The Sounds of Suffix -ed - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Spelling-Rules-The-Sounds-of-Suffix-ed-Orton-Gillingham-Inspired-4891548-1578232318/original-4891548-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/The-Sounds-of-Suffix-ed-Orton-Gillingham-Inspired-4891548'
  },
  {
    name: 'Vowel Teams (ai, ay) - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Spelling-Rules-Vowel-Teams-ai-ay-Orton-Gillingham-Inspired-4906461-1578233047/original-4906461-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Vowel-Teams-ai-ay-Orton-Gillingham-Inspired-4906461'
  },
  {
    name: 'Vowel Teams (ee, ea) - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Spelling-Rules-Vowel-Teams-ee-ea-Orton-Gillingham-Inspired-4906473-1578233343/original-4906473-1.jpg',
    url:
      'https://www.teacherspayteachers.com/Product/Vowel-Teams-ee-ea-Orton-Gillingham-Inspired-4906473'
  },
  {
    name: 'Bossy R - Orton-Gillingham Inspired',
    subject: ['Reading', 'Spelling', 'Phonics'],
    imageURL:
      'https://ecdn.teacherspayteachers.com/thumbitem/Spelling-Rules-Bossy-R-Orton-Gillingham-Inspired-5050163-1578590517/original-5050163-1.jpg',
    url: 'https://www.teacherspayteachers.com/Product/Bossy-R-Orton-Gillingham-Inspired-5050163'
  }
]
export default products
