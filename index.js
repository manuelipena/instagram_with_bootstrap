$('#myNavTabs a').click(function (evt) {
  evt.preventDefault();
  $(this).tab('show');
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  //new tab
  console.log(e.target);
  
  //previous tab
  console.log(e.relatedTarget);
})