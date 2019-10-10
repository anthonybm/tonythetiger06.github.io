/**
 * Hides other "hidable" divs other than this one provided
 */
function showhide(id) {
    if (document.getElementById) {
        var divToShow = document.getElementById(id);
        var divs = document.getElementsByClassName("hideable");
        for (var i = 0; i < divs.length; i+= 1) {
            divs[i].style.display = 'none';
        }
        divToShow.style.display = 'block';
    }
    return false;
}