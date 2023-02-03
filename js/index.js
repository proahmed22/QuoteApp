var Quotes = [
  {
    "author" : "علي ابن ابي طالب",
    "quote": ". واحفظ لسانك واحترز من لفظه فالمرء يسلم باللسان ويعطب "
  },
  {
    "author" : "علي ابن ابي طالب",
    "quote": ". إذا علم الرّجل زاد أدبه وتضاعفت خشيته"
  },
  {
    "author" : "ابو بكر الصديق ",
    "quote": " . أكيس الكيْس التقوى، وأحمق الحَمَق الفجور، وأصدق الصِدْق الأمانة، وأكذب الكذِب الخيانة"
  },{
    "author" : "عمر ابن الخطاب",
    "quote": " . استعيذوا بالله من شرار النساء وكونوا من خيارهن على حذر "
  },
  {
    "author" : "علي بن ابي طالب",
    "quote": ".حين سكت أهل الحق عن الباطل توهم أهل الباطل انهم علي حق"
  },
  {
    "author" : "علي بن ابي طالب",
    "quote": ". كما تدين تُدان وكما تُعين تُعان وكما تَرحم تُرحم وكما تزرع تحصُد "
  },
  {
    "author" : "علي بن ابي طالب",
    "quote": ".إنَّ الله يقذف الحب في قلوبنا، فلا تسأل مُحبًا.. لماذا أحببت "
  },
  {
    "author" : "المتنبي",
    "quote": ".فعِش وحيدًا فما في العشقِ منفعةٌ وصُن فؤادَك عن حُزنٍ وعن ألَمٍ "
  }
]

function randomQuote (arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote(){
  var randomNumber = randomQuote (Quotes.length);
  document.getElementById("QuoteDay").innerHTML = '"' + Quotes[randomNumber].quote +'"'  ;
  document.getElementById("QuoteAuthor").innerHTML = '"' + Quotes[randomNumber].author + '"';
}
