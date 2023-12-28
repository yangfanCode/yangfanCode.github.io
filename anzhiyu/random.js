var posts=["2023/12/16/hello-world/","2023/12/20/life/about_hz_twelve_people/","2023/12/20/moto/ninja400/","2023/12/20/moto/zhinanVillage/20221106/index/","2023/12/28/photography/basic/curve/","2023/12/28/android/2023/curveView/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };