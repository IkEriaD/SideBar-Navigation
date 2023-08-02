const items = document.querySelectorAll('.item');
const action = document.getElementById('action');
const downs = document.querySelectorAll('.ri-arrow-down-s-line');


items.forEach(item=>{
  item.addEventListener('click', function(e) {

    if (this.classList.contains('active') || e.target.classList.contains('ri-arrow-down-s-line') ) {
      return;
    }
    items.forEach(itemDel=>{
      itemDel.classList.remove('active');
    })
    this.classList.add('active');

    document.documentElement.style.setProperty('--height-begin', action.offsetHeight + 'px');
    document.documentElement.style.setProperty('--top-begin', action.offsetTop + 'px');
    document.documentElement.style.setProperty('--height-end', this.offsetHeight + 'px');
    document.documentElement.style.setProperty('--top-end', this.offsetTop + 'px');

    action.classList.remove('runAnimation');
    void action.offsetWidth;
    action.classList.add('runAnimation');
  })
})
downs.forEach(down=>{
  down.addEventListener('click', function(e){
    this.classList.toggle('showMenuChild');
    items.forEach(item=>{
      if(item.classList.contains('active')){
        document.documentElement.style.setProperty('--height-end', item.offsetHeight + 'px');
        document.documentElement.style.setProperty('--top-end', item.offsetTop + 'px');
      }
    })
  })
})