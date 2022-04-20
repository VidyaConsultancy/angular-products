### Angular Component
- Delete all content from the app.component.html
- Create a property name title and subtitle in app.component.ts
- Render this title and subtitle in app.component.html using a h1 and h3 tag
- Create a button. Attach click event on this button. Simply alert or console.log `Hello World` string

### Directives Pipes
- Create a type for post. Use this type in app component class to define the type of posts.
- Render this posts list in app component using ngFor. Render post title, likes, hits, content
- If the list size is zero then render a 'No record found' message else the list.
- Use ngStyle to give font color of purple to first and last post title.
- Use ngClass to give different background-color to odd and even items.
```json
[
  {
    "id": 1,
    "title": "Ante egestas ligula ultricies sed lacinia ipsum mauris tincidunt egestas.",
    "userId": 1,
    "content": "Elit vehicula adipiscing ut dolor quam amet augue mattis congue a tincidunt praesent lorem egestas viverra ut congue lectus sed ante lorem donec mattis nec donec mollis vitae lectus consectetur porta ante enim consectetur congue tortor sit ut amet ipsum adipiscing consectetur sed eget adipiscing libero a consectetur augue donec.",
    "likes": 2,
    "hits": 345,
    "categoryId": 4,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 2,
    "title": "Consectetur lacinia nam maecenas quam et amet lorem.",
    "userId": 2,
    "content": "Lorem adipiscing ipsum a mollis hendrerit a lorem ut sed viverra tincidunt viverra amet eget ut augue ut lorem dolor ipsum a tincidunt tortor et libero ut nam elit et donec adipiscing nam donec ipsum ut amet lacinia amet vitae non congue donec libero ac lacinia sit donec ipsum ante.",
    "likes": 21,
    "hits": 240,
    "categoryId": 2,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 3,
    "title": "Ipsum non hendrerit lectus libero sit donec vehicula viverra consectetur.",
    "userId": 2,
    "content": "Diam libero porta dolor consectetur amet libero sed viverra eget non ut maecenas mattis ut ligula adipiscing mattis hendrerit ipsum nec consectetur non lectus diam mauris sed libero donec lorem donec lorem diam mauris amet vehicula augue congue diam tortor donec congue eget et hendrerit consectetur libero maecenas consectetur congue.",
    "likes": 21,
    "hits": 45,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 4,
    "title": "Vehicula enim ipsum et ipsum sit lorem donec mattis ut.",
    "userId": 3,
    "content": "Nam lorem eget a amet sit nam eget non vitae arcu lorem hendrerit libero mattis praesent ligula a tortor quam consectetur amet ut tincidunt vehicula sed et mattis libero quam libero quam lacinia nam a lorem tortor enim non libero sit ante donec non vehicula mollis elit tortor vitae ut.",
    "likes": 23,
    "hits": 62,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 5,
    "title": "Quam lorem dolor vehicula ipsum ultricies vehicula sit lacinia.",
    "userId": 4,
    "content": "Sit non hendrerit congue augue viverra ante consectetur lorem elit mauris egestas a congue donec sit amet adipiscing non consectetur augue egestas sed ante augue ac nec amet enim consectetur enim amet diam congue nec dolor amet diam viverra ipsum praesent dolor elit diam enim sit enim donec amet libero.",
    "likes": 12,
    "hits": 89,
    "categoryId": 4,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 6,
    "title": "Tortor ut et mollis sed lacinia sed a donec.",
    "userId": 5,
    "content": "Amet mauris lorem arcu maecenas sit vehicula arcu lorem ante diam libero ligula praesent libero ut mattis congue ut ultricies praesent amet elit ac sit augue nec donec ac amet arcu lorem lacinia donec hendrerit elit lectus tortor sit consectetur ut adipiscing a tortor enim nec nam ac ligula ut.",
    "likes": 10,
    "hits": 34,
    "categoryId": 5,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 7,
    "title": "Enim dolor viverra ipsum sed lectus consectetur ligula diam.",
    "userId": 2,
    "content": "Praesent nec vehicula et lorem egestas libero mattis sed congue a libero dolor ligula ut donec a amet mattis donec augue maecenas diam lacinia donec ante tortor congue ac elit lectus diam egestas ipsum nam eget amet consectetur libero non ante congue sit hendrerit et libero viverra nam ipsum hendrerit.",
    "likes": 12,
    "hits": 56,
    "categoryId": 1,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 8,
    "title": "Maecenas a adipiscing praesent lorem mollis donec diam vehicula.",
    "userId": 2,
    "content": "Donec praesent ut congue amet lacinia consectetur ultricies lorem ultricies consectetur et diam et nec lectus quam congue libero donec non sit ut egestas eget nam eget lorem vitae amet lacinia mattis dolor congue sit mollis sit eget tincidunt viverra praesent ac hendrerit consectetur enim sit porta ultricies ipsum lacinia.",
    "likes": 13,
    "hits": 56,
    "categoryId": 1,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 9,
    "title": "Consectetur ligula lorem a consectetur ut hendrerit adipiscing lorem.",
    "userId": 3,
    "content": "Libero tincidunt augue sed a ultricies lectus diam lorem ante elit augue lorem congue ipsum tincidunt amet adipiscing vehicula sit nec augue consectetur egestas donec dolor porta et adipiscing arcu augue lorem ipsum non adipiscing augue lorem enim amet egestas hendrerit consectetur tincidunt viverra sed maecenas ultricies sit ipsum amet.",
    "likes": 14,
    "hits": 32,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 10,
    "title": "Quam lorem donec dolor mauris a lorem donec amet non.",
    "userId": 5,
    "content": "A non hendrerit diam lectus consectetur lacinia vitae elit hendrerit sed augue ac ut egestas praesent ipsum ligula sed tortor mattis non vehicula diam amet lorem viverra amet ipsum donec consectetur diam donec ut et donec viverra egestas a arcu amet sit libero amet congue non eget arcu ac nam.",
    "likes": 19,
    "hits": 97,
    "categoryId": 4,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 11,
    "title": "Libero ac hendrerit amet augue lorem consectetur dolor.",
    "userId": 1,
    "content": "Enim hendrerit mattis ligula sed praesent amet hendrerit a non lorem maecenas sed ipsum sed diam lorem adipiscing dolor donec libero donec elit amet sit praesent ipsum lacinia ac nec ac sit libero hendrerit augue et libero amet augue congue et nec congue ultricies consectetur eget elit sed a dolor.",
    "likes": 8,
    "hits": 45,
    "categoryId": 2,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 12,
    "title": "Vitae egestas arcu augue ut libero amet ipsum.",
    "userId": 2,
    "content": "Augue consectetur eget augue libero donec sit mattis sit lorem sit quam augue et non sed et elit sit non vitae enim consectetur viverra consectetur et nec a consectetur egestas libero sed mauris mollis congue amet donec congue sit nec sit ante sit vehicula lectus tortor arcu lectus ipsum sed.",
    "likes": 6,
    "hits": 34,
    "categoryId": 1,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 13,
    "title": "Congue sed ante donec egestas tincidunt enim hendrerit tincidunt viverra.",
    "userId": 2,
    "content": "Amet lorem vehicula ligula consectetur donec non sit ut sit dolor praesent elit eget sit arcu sed enim amet adipiscing sit porta maecenas lorem maecenas viverra praesent ut et diam ipsum diam et ut ac a lacinia sit adipiscing ipsum nec lorem sed mollis non mauris et eget viverra non.",
    "likes": 5,
    "hits": 96,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 14,
    "title": "Diam amet sit lacinia mauris donec vitae libero.",
    "userId": 3,
    "content": "Nam libero amet praesent diam sit adipiscing lacinia sit nam amet et congue consectetur dolor hendrerit nec sit viverra elit ipsum donec tincidunt praesent consectetur adipiscing lorem amet consectetur lectus amet ipsum amet porta consectetur amet nec tortor mauris sed ut sit amet ipsum adipiscing quam donec tortor lorem maecenas.",
    "likes": 4,
    "hits": 87,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 15,
    "title": "Libero enim ultricies libero ultricies quam libero quam tincidunt.",
    "userId": 4,
    "content": "Lorem enim ut et nam consectetur arcu mollis et quam ipsum dolor ipsum amet adipiscing ut hendrerit elit consectetur a lacinia ligula dolor ut sit consectetur amet hendrerit a consectetur diam a et lorem donec amet enim hendrerit et enim non vitae lectus dolor arcu tortor lorem egestas a sit.",
    "likes": 3,
    "hits": 18,
    "categoryId": 4,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 16,
    "title": "Amet ipsum sit amet lacinia hendrerit libero ut.",
    "userId": 5,
    "content": "Donec diam a lectus sed nec nam lorem lectus diam vehicula ante diam vehicula augue congue a consectetur ligula augue adipiscing enim ante nec ipsum tortor hendrerit congue quam consectetur lorem sit vehicula lacinia sit et vehicula diam ligula ultricies amet vehicula libero hendrerit vehicula tortor sed quam mollis congue.",
    "likes": 2,
    "hits": 86,
    "categoryId": 5,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 17,
    "title": "Augue praesent congue arcu enim non praesent lorem.",
    "userId": 2,
    "content": "Egestas nec lacinia amet hendrerit consectetur non mauris lacinia ultricies consectetur tincidunt nam sed a hendrerit elit amet dolor consectetur amet dolor maecenas lorem lacinia praesent lorem tortor congue donec dolor congue ante ultricies dolor libero consectetur enim eget hendrerit vitae non mattis non donec et congue libero lorem tortor.",
    "likes": 1,
    "hits": 45,
    "categoryId": 1,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 18,
    "title": "Porta eget et libero consectetur a mattis ultricies elit.",
    "userId": 2,
    "content": "Consectetur lacinia vitae maecenas lacinia lorem tortor donec nam ante lectus ut a vehicula consectetur tincidunt et elit lacinia libero ante augue sit ipsum vitae sit dolor amet lectus ultricies consectetur egestas ut donec lorem praesent et dolor elit ligula lectus consectetur mollis et sit maecenas porta dolor egestas consectetur.",
    "likes": 21,
    "hits": 27,
    "categoryId": 1,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 19,
    "title": "Ante lacinia dolor a eget tincidunt lorem amet lorem ac.",
    "userId": 3,
    "content": "Ipsum sit quam congue donec lectus lacinia dolor consectetur hendrerit dolor enim sit tincidunt sit nam adipiscing maecenas a hendrerit ut dolor adipiscing diam a hendrerit mauris congue consectetur egestas donec hendrerit diam lorem eget tortor nam donec lorem non consectetur ipsum mollis consectetur vehicula lorem tortor nec praesent a.",
    "likes": 2,
    "hits": 98,
    "categoryId": 3,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  },
  {
    "id": 20,
    "title": "Sit mattis ipsum consectetur amet enim ultricies tincidunt amet diam.",
    "userId": 5,
    "content": "Dolor egestas donec egestas ipsum porta ac adipiscing maecenas mauris adipiscing sed elit mollis vehicula libero sit hendrerit tortor donec enim consectetur lorem et consectetur amet diam maecenas a dolor donec diam consectetur donec augue viverra vehicula donec a diam ut amet arcu lorem sit ut augue tincidunt dolor mollis.",
    "likes": 5,
    "hits": 23,
    "categoryId": 4,
    "imageUrl": "https://i.picsum.photos/id/348/600/300.jpg"
  }
]
```

### PART II
- Create a posts component using angular cli/ng
- Create a post component using angular cli/ng
- Move the code to generate posts list in posts component.
- Use post component to create the individual post item.
- Create a delete button in post component that will delete the underlying post.
- Use Input and Output decorator to pass data.

### PART III
**Service Task**
1. Create a service PostService.
2. Add a like button to a post.
3. In PostService, maintain a list of liked posts.
    a. Add a method to add a post to liked list.
    b. Add a method to return the liked post list. (Ensure to return a copy of it not the reference)
4. Create a new component LikedPosts. Render liked post list in this component. Use a button to fetch liked post list.

### PART IV
**Routing & Navigation**
1. Setup routing in your project.
2. Create following routes
  a. `posts` => this will show the list of posts
  b. `posts/liked` => this will show the list of liked posts
  c. `posts/:id` => this will show the post detail