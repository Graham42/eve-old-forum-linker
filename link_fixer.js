
$('a[href*=externalLink]').each( function(){
  this.href = this.href.replace(/.*externalLink\.aspx\?l=/,"");
  $(this).attr('href', decodeURIComponent($(this).attr('href')));
})
