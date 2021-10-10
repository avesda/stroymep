/*SPYSCROLL*/
    
function spyscroll() {
    const section = [];
    
    section[0] = document.getElementById('home');
    section[1] = document.getElementById('about');
    section[2] = document.getElementById('projects');
    section[3] = document.getElementById('services');
    section[4] = document.getElementById('contact');

    let navlinks = document.querySelectorAll('li a');
    section.forEach(sec =>{
    let top=window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    console.log("top: "+top+"\n");
    console.log("offset: "+offset+"\n");
    console.log("height: "+height+"\n");
    console.log("id: "+id+"\n");
    if(top >= offset && top < offset + height)
    {
      navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('li a[href*=' + id + ']').classList.add('active');
      });
    }
  });
}