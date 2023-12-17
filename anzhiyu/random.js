var posts=["2023/12/17/life/about_hz_twelve people/","2023/12/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };