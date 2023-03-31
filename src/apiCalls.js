const key = 'gbyfINMWDrzRtiKj161LGdGwcnlnHEwG'

const getBooks = (genre) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${key}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return response
    })
}

const getBookById = (url, id) => {
  url = url + '/' + id
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()

      }
      return response
    })
}

const getAwardedBooks = (year) => {
  return fetch(`https://hapi-books.p.rapidapi.com/top/${year}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return response
    })
}

export { getBooks, getBookById, getAwardedBooks }

let genreNames = [
  "humor",
  "science",
  "health",
  "food-and-fitness",
  "education",
  "business-books",
  "culture",
  "celebrities",
  "advice-how-to-and-miscellaneous",
  "hardcover-nonfiction",
  "hardcover-fiction",
  "picture-books"
]

/*
EXAMPLE BOOK SET
"books": [
      {
        "rank": 1,
        "rank_last_week": 0,
        "weeks_on_list": 1,
        "asterisk": 0,
        "dagger": 0,
        "primary_isbn10": "1455522716",
        "primary_isbn13": "9781455522712",
        "publisher": "Grand Central Life & Style",
        "description": "Easy, healthy, sugar-free recipes.",
        "price": "32.00",
        "title": "IT'S ALL GOOD",
        "author": "Gwyneth Paltrow and Julia Turshen",
        "contributor": "by Gwyneth Paltrow and Julia Turshen",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781455522712.jpg",
        "book_image_width": 128,
        "book_image_height": 153,
        "amazon_product_url": "http://www.amazon.com/Its-All-Good-Delicious-Recipes/dp/1455522716?tag=NYTBSREV-20",
        "age_group": "",
        "book_review_link": "",
        "first_chapter_link": "",
        "sunday_review_link": "",
        "article_chapter_link": "",
        "isbns": [
          {
            "isbn10": "1455522716",
            "isbn13": "9781455522712"
          },
          {
            "isbn10": "1455522708",
            "isbn13": "9781455522705"
          }
        ],
        "buy_links": [
          {
            "name": "Amazon",
            "url": "http://www.amazon.com/Its-All-Good-Delicious-Recipes/dp/1455522716?tag=NYTBSREV-20"
          },
          {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9781455522712?at=10lIEQ"
          },
          {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781455522712"
          },
          {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252527S%252BALL%252BGOOD%252FGwyneth%252BPaltrow%252Band%252BJulia%252BTurshen%252F9781455522712&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252527S%252BALL%252BGOOD%252BGwyneth%252BPaltrow%252Band%252BJulia%252BTurshen"
          },
          {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781455522712&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2527S%2BALL%2BGOOD"
          },
          {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781455522712%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2527S%2BALL%2BGOOD%2BGwyneth%2BPaltrow%2Band%2BJulia%2BTurshen%26aff%3DNYT"
          }
        ],
        "book_uri": "nyt://book/d51394d6-2683-54c0-b2fb-e6209f1789d2"
      },
      {
        "rank": 2,
        "rank_last_week": 0,
        "weeks_on_list": 6,
        "asterisk": 0,
        "dagger": 0,
        "primary_isbn10": "1476734941",
        "primary_isbn13": "9781476734941",
        "publisher": "Atria",
        "description": "A diet that calls for eating normally five days a week and fasting for the other two days.",
        "price": "24.00",
        "title": "THE FASTDIET",
        "author": "Michael Mosley and Mimi Spencer",
        "contributor": "by Michael Mosley and Mimi Spencer",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781476734941.jpg",
        "book_image_width": 128,
        "book_image_height": 196,
        "amazon_product_url": "http://www.amazon.com/The-FastDiet-Healthy-Intermittent-Fasting-ebook/dp/B00ALYY6ZA?tag=NYTBSREV-20",
        "age_group": "",
        "book_review_link": "",
        "first_chapter_link": "",
        "sunday_review_link": "",
        "article_chapter_link": "",
        "isbns": [
          {
            "isbn10": "1476734941",
            "isbn13": "9781476734941"
          },
          {
            "isbn10": "1476734968",
            "isbn13": "9781476734965"
          },
          {
            "isbn10": "1780721684",
            "isbn13": "9781780721682"
          }
        ],
        "buy_links": [
          {
            "name": "Amazon",
            "url": "http://www.amazon.com/The-FastDiet-Healthy-Intermittent-Fasting-ebook/dp/B00ALYY6ZA?tag=NYTBSREV-20"
          },
          {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9781476734941?at=10lIEQ"
          },
          {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781476734941"
          },
          {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BFASTDIET%252FMichael%252BMosley%252Band%252BMimi%252BSpencer%252F9781476734941&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BFASTDIET%252BMichael%252BMosley%252Band%252BMimi%252BSpencer"
          },
          {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781476734941&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BFASTDIET"
          },
          {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781476734941%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BFASTDIET%2BMichael%2BMosley%2Band%2BMimi%2BSpencer%26aff%3DNYT"
          }
        ],
        "book_uri": "nyt://book/9eaf49c7-4ab4-5559-ac1a-11844c4a27f9"
      }
    ]
*/

/*
GENRES
{
  "status": "OK",
  "copyright": "Copyright (c) 2023 The New York Times Company.  All Rights Reserved.",
  "num_results": 59,
  "results": [
    {
      "list_name": "Combined Print and E-Book Fiction",
      "display_name": "Combined Print & E-Book Fiction",
      "list_name_encoded": "combined-print-and-e-book-fiction",
      "oldest_published_date": "2011-02-13",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Combined Print and E-Book Nonfiction",
      "display_name": "Combined Print & E-Book Nonfiction",
      "list_name_encoded": "combined-print-and-e-book-nonfiction",
      "oldest_published_date": "2011-02-13",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Hardcover Fiction",
      "display_name": "Hardcover Fiction",
      "list_name_encoded": "hardcover-fiction",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Hardcover Nonfiction",
      "display_name": "Hardcover Nonfiction",
      "list_name_encoded": "hardcover-nonfiction",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Trade Fiction Paperback",
      "display_name": "Paperback Trade Fiction",
      "list_name_encoded": "trade-fiction-paperback",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Mass Market Paperback",
      "display_name": "Paperback Mass-Market Fiction",
      "list_name_encoded": "mass-market-paperback",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Paperback Nonfiction",
      "display_name": "Paperback Nonfiction",
      "list_name_encoded": "paperback-nonfiction",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "E-Book Fiction",
      "display_name": "E-Book Fiction",
      "list_name_encoded": "e-book-fiction",
      "oldest_published_date": "2011-02-13",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "E-Book Nonfiction",
      "display_name": "E-Book Nonfiction",
      "list_name_encoded": "e-book-nonfiction",
      "oldest_published_date": "2011-02-13",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Hardcover Advice",
      "display_name": "Hardcover Advice & Misc.",
      "list_name_encoded": "hardcover-advice",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2013-04-21",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Paperback Advice",
      "display_name": "Paperback Advice & Misc.",
      "list_name_encoded": "paperback-advice",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2013-04-21",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Advice How-To and Miscellaneous",
      "display_name": "Advice, How-To & Miscellaneous",
      "list_name_encoded": "advice-how-to-and-miscellaneous",
      "oldest_published_date": "2013-04-28",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Hardcover Graphic Books",
      "display_name": "Hardcover Graphic Books",
      "list_name_encoded": "hardcover-graphic-books",
      "oldest_published_date": "2009-03-15",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Paperback Graphic Books",
      "display_name": "Paperback Graphic Books",
      "list_name_encoded": "paperback-graphic-books",
      "oldest_published_date": "2009-03-15",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Manga",
      "display_name": "Manga",
      "list_name_encoded": "manga",
      "oldest_published_date": "2009-03-15",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Combined Print Fiction",
      "display_name": "Combined Hardcover & Paperback Fiction",
      "list_name_encoded": "combined-print-fiction",
      "oldest_published_date": "2011-02-13",
      "newest_published_date": "2013-05-12",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Combined Print Nonfiction",
      "display_name": "Combined Hardcover & Paperback Nonfiction",
      "list_name_encoded": "combined-print-nonfiction",
      "oldest_published_date": "2011-02-13",
      "newest_published_date": "2013-05-12",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Chapter Books",
      "display_name": "Children’s Chapter Books",
      "list_name_encoded": "chapter-books",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2012-12-09",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Childrens Middle Grade",
      "display_name": "Children’s Middle Grade",
      "list_name_encoded": "childrens-middle-grade",
      "oldest_published_date": "2012-12-16",
      "newest_published_date": "2015-08-23",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Childrens Middle Grade E-Book",
      "display_name": "Children’s Middle Grade E-Book",
      "list_name_encoded": "childrens-middle-grade-e-book",
      "oldest_published_date": "2015-08-30",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Childrens Middle Grade Hardcover",
      "display_name": "Children’s Middle Grade Hardcover",
      "list_name_encoded": "childrens-middle-grade-hardcover",
      "oldest_published_date": "2015-08-30",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Childrens Middle Grade Paperback",
      "display_name": "Children’s Middle Grade Paperback",
      "list_name_encoded": "childrens-middle-grade-paperback",
      "oldest_published_date": "2015-08-30",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Paperback Books",
      "display_name": "Children’s Paperback Books",
      "list_name_encoded": "paperback-books",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2012-12-09",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Picture Books",
      "display_name": "Children’s Picture Books",
      "list_name_encoded": "picture-books",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Series Books",
      "display_name": "Children’s Series",
      "list_name_encoded": "series-books",
      "oldest_published_date": "2008-06-08",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Young Adult",
      "display_name": "Young Adult",
      "list_name_encoded": "young-adult",
      "oldest_published_date": "2012-12-16",
      "newest_published_date": "2015-08-23",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Young Adult E-Book",
      "display_name": "Young Adult E-Book",
      "list_name_encoded": "young-adult-e-book",
      "oldest_published_date": "2015-08-30",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Young Adult Hardcover",
      "display_name": "Young Adult Hardcover",
      "list_name_encoded": "young-adult-hardcover",
      "oldest_published_date": "2015-08-30",
      "newest_published_date": "2023-04-02",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Young Adult Paperback",
      "display_name": "Young Adult Paperback",
      "list_name_encoded": "young-adult-paperback",
      "oldest_published_date": "2015-08-30",
      "newest_published_date": "2017-01-29",
      "updated": "WEEKLY"
    },
    {
      "list_name": "Animals",
      "display_name": "Animals",
      "list_name_encoded": "animals",
      "oldest_published_date": "2014-09-07",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Audio Fiction",
      "display_name": "Audio Fiction",
      "list_name_encoded": "audio-fiction",
      "oldest_published_date": "2018-03-11",
      "newest_published_date": "2023-03-12",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Audio Nonfiction",
      "display_name": "Audio Nonfiction",
      "list_name_encoded": "audio-nonfiction",
      "oldest_published_date": "2018-03-11",
      "newest_published_date": "2023-03-12",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Business Books",
      "display_name": "Business",
      "list_name_encoded": "business-books",
      "oldest_published_date": "2013-11-03",
      "newest_published_date": "2023-03-12",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Celebrities",
      "display_name": "Celebrities",
      "list_name_encoded": "celebrities",
      "oldest_published_date": "2014-09-07",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Crime and Punishment",
      "display_name": "Crime and Punishment",
      "list_name_encoded": "crime-and-punishment",
      "oldest_published_date": "2014-10-12",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Culture",
      "display_name": "Culture",
      "list_name_encoded": "culture",
      "oldest_published_date": "2014-10-12",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Education",
      "display_name": "Education",
      "list_name_encoded": "education",
      "oldest_published_date": "2014-10-12",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Espionage",
      "display_name": "Espionage",
      "list_name_encoded": "espionage",
      "oldest_published_date": "2014-12-14",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Expeditions Disasters and Adventures",
      "display_name": "Expeditions",
      "list_name_encoded": "expeditions-disasters-and-adventures",
      "oldest_published_date": "2014-12-14",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Fashion Manners and Customs",
      "display_name": "Fashion, Manners and Customs",
      "list_name_encoded": "fashion-manners-and-customs",
      "oldest_published_date": "2014-10-12",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Food and Fitness",
      "display_name": "Food and Diet",
      "list_name_encoded": "food-and-fitness",
      "oldest_published_date": "2013-09-01",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Games and Activities",
      "display_name": "Games and Activities",
      "list_name_encoded": "games-and-activities",
      "oldest_published_date": "2014-10-12",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Graphic Books and Manga",
      "display_name": "Graphic Books and Manga",
      "list_name_encoded": "graphic-books-and-manga",
      "oldest_published_date": "2019-10-13",
      "newest_published_date": "2023-03-12",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Hardcover Business Books",
      "display_name": "Hardcover Business Books",
      "list_name_encoded": "hardcover-business-books",
      "oldest_published_date": "2011-07-03",
      "newest_published_date": "2013-10-13",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Health",
      "display_name": "Health",
      "list_name_encoded": "health",
      "oldest_published_date": "2014-10-12",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Humor",
      "display_name": "Humor",
      "list_name_encoded": "humor",
      "oldest_published_date": "2014-09-07",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Indigenous Americans",
      "display_name": "Indigenous Americans",
      "list_name_encoded": "indigenous-americans",
      "oldest_published_date": "2014-12-14",
      "newest_published_date": "2016-01-10",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Relationships",
      "display_name": "Love and Relationships",
      "list_name_encoded": "relationships",
      "oldest_published_date": "2014-09-07",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Mass Market Monthly",
      "display_name": "Mass Market",
      "list_name_encoded": "mass-market-monthly",
      "oldest_published_date": "2019-10-13",
      "newest_published_date": "2023-03-12",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Middle Grade Paperback Monthly",
      "display_name": "Middle Grade Paperback",
      "list_name_encoded": "middle-grade-paperback-monthly",
      "oldest_published_date": "2019-10-13",
      "newest_published_date": "2023-03-12",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Paperback Business Books",
      "display_name": "Paperback Business Books",
      "list_name_encoded": "paperback-business-books",
      "oldest_published_date": "2011-07-03",
      "newest_published_date": "2013-10-13",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Family",
      "display_name": "Parenthood and Family",
      "list_name_encoded": "family",
      "oldest_published_date": "2014-09-07",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Hardcover Political Books",
      "display_name": "Politics and American History",
      "list_name_encoded": "hardcover-political-books",
      "oldest_published_date": "2011-07-03",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Race and Civil Rights",
      "display_name": "Race and Civil Rights",
      "list_name_encoded": "race-and-civil-rights",
      "oldest_published_date": "2014-12-14",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Religion Spirituality and Faith",
      "display_name": "Religion, Spirituality and Faith",
      "list_name_encoded": "religion-spirituality-and-faith",
      "oldest_published_date": "2014-09-07",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Science",
      "display_name": "Science",
      "list_name_encoded": "science",
      "oldest_published_date": "2013-04-14",
      "newest_published_date": "2019-09-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Sports",
      "display_name": "Sports and Fitness",
      "list_name_encoded": "sports",
      "oldest_published_date": "2014-03-02",
      "newest_published_date": "2019-09-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Travel",
      "display_name": "Travel",
      "list_name_encoded": "travel",
      "oldest_published_date": "2014-09-07",
      "newest_published_date": "2017-01-15",
      "updated": "MONTHLY"
    },
    {
      "list_name": "Young Adult Paperback Monthly",
      "display_name": "Young Adult Paperback",
      "list_name_encoded": "young-adult-paperback-monthly",
      "oldest_published_date": "2019-10-13",
      "newest_published_date": "2023-03-12",
      "updated": "MONTHLY"
    }
  ]
}
*/