/*
GUI Assignment: Creating an Interactive Dynamic Table
Joshua Hou
10/21/21
*/
function genTable() {
    var minimumcolumn = +document.getElementById('mincol').value;
    var maxcolumn = +document.getElementById('maxcol').value;
    var minimumrow = +document.getElementById('minrow').value;
    var maxrow = +document.getElementById('maxrow').value;
    var row = '';
    var errmsg = '';

    /* User input Error Check (checks for missing inputs and if invalid table values*/
    if (minimumcolumn == '' || maxcolumn == '' || minimumrow == '' || maxrow == '') {
        errmsg = 'Missing value detected, please enter all numeric values.';
        document.getElementById('errorsign').innerHTML = errmsg;
        return false;
    }
    if (minimumcolumn > maxcolumn) {
        errmsg = 'Minimum Column Value can not be higher than the Max Column Value.';
        document.getElementById('errorsign').innerHTML = errmsg;
        return false;
    }
    if (minimumrow > maxrow) {
        errmsg = 'Minimum Row Value can not be higher than the Max Row Value.';
        document.getElementById('errorsign').innerHTML = errmsg;
        return false;
    }

    /* User input is correct (print the rows corresponding to inputs) */
    if (!(minimumcolumn == '' || maxcolumn == '' || minimumrow == '' || maxrow == '')) {
        /* empty spot */
        row += '<td>' + '' + '</td>';
        /* makes 1st row */
        for (var i = minimumrow; i <= maxrow; i++) {
            row += '<td>' + i + '</td>';
        }
        row += '</tr>';
        /* makes 1st column */
        for (var i = minimumcolumn; i <= maxcolumn; i++) {
            row += '<tr>';
            row += '<td>' + i + '</td>';
            /* makes rows for multiplcation */
            for (var j = minimumrow; j <= maxrow; j++) {
                row += '<td>' + i * j + '</td>';
            }
            row += '</tr>';
        }
        document.getElementById('table').innerHTML = row;
    }
}
