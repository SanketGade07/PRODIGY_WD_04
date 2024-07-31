  var tablinks=document.getElementsByClassName('tab-links');
  var tabcontents=document.getElementsByClassName('tab-contents');
    function opentab(tabname)
      {
        for(tablink of tablinks)
        {
          tablink.classList.remove('active-link');
        }
        for(tabcontent of tabcontents)
        {
          tabcontent.classList.remove('active-tab');
          
        }
        event.currentTarget.classList.add('active-link');
        document.getElementById(tabname).classList.add('active-tab');
        }
        function openmenu(){
          document.getElementById('sidemenu').style.right=0;         
        }
        function closemenu(){
          document.getElementById('sidemenu').style.right='-200px';
        }
        
//  ANIMATION CODE  USING INTERSECTIONOBSERVER


  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        entry.target.classList.add("right");
        entry.target.classList.add("left");
      } 
    });

  });
  const hiddenElements =document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=>observer.observe(el));


