let search_icon=document.querySelector("nav .search i");
let search_inp=document.querySelector("nav .search input");


let toggle_Search=true;
function ShowSearch(){
    if(toggle_Search){
        search_inp.style.display="inline-block";
    }else{
        search_inp.style.display="none";
    }
    toggle_Search = !toggle_Search;
}
