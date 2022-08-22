//Native js es6 solution with some jQuery for the buttons
//loops though all table elements, adds table class (note that this can be removed if already present on the table element, just delete 'table' on line 8)

// find tables and loop through them, add unique class (by integer) to each, and add the buttons
var elem = document.querySelectorAll('table');
let j = 1;
for(let i=0; i <= elem.length -1; i++){
  let k = i +1;
    //set class value
  elem[i].className = 'table table'+j;
  const tablename = elem[i].className;
  //add buttons
  elem[i].outerHTML += '<p class="lead"><button class="btn btn-info csv ' + tablename + '">SAVE TO CSV</button><button class="btn btn-primary json ' + tablename + '">SAVE TO JSON</button><button class="btn btn-danger pdf ' + tablename + '">SAVE TO PDF</button></p>';
  // fire buttons on each table
  $('.csv.table'+[k]).on('click',function(){
    $(".table"+[k]).tableHTMLExport({type:'csv',filename:"table" + [k] + ".csv"});
  })
   $('.json.table'+[k]).on('click',function(){
    $(".table"+[k]).tableHTMLExport({type:'json',filename:"table" + [k] + ".json"});
  })
  $('.pdf.table'+[k]).on('click',function(){
    $(".table"+[k]).tableHTMLExport({type:'pdf',filename:"table" + [k] + ".pdf"});
  })
j++
}
