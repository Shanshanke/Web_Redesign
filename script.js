function checkbox(){
  var go = 'https://www.imls.gov/', '_blank';
  var message = "Action Was Cancelled By User";

  if (window.confirm('If you click "ok" you would be redirected. Cancel will load this website')){
    window.location = go;
  }
}
