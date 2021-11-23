/*
GUI Assignment: Creating an Interactive Dynamic Table
Joshua Hou
10/21/21

website: https://hourzn.github.io/
*/
function genTable() {
    $('.input-container').submit(function (e) {
        e.preventDefault();
    });
    var minimumcolumn = +document.getElementById('mincol').value;
    var maxcolumn = +document.getElementById('maxcol').value;
    var minimumrow = +document.getElementById('minrow').value;
    var maxrow = +document.getElementById('maxrow').value;
    var row = '';
    var errmsg = '';

    /* User input Error Check (checks for missing inputs and if invalid table values*/
    if ($('#mincol').val() == '' || $('#maxcol').val() == '' || $('#minrow').val() == '' || $('#maxrow').val() == '') {
        row = '';
        document.getElementById('table').innerHTML = row; // clear
    }
    if ($('#mincol').val() > $('#maxcol').val() || $('#minrow').val() > $('#maxrow').val()) {
        row = '';
        document.getElementById('table').innerHTML = row; // clear
    }
    if (isNaN(minimumcolumn) || isNaN(maxcolumn) || isNaN(minimumrow) || isNaN(maxrow)) {
        row = '';
        document.getElementById('table').innerHTML = row; // clear
    }
    if (minimumcolumn > maxcolumn) {
        errmsg = 'Minimum Column Value can not be higher than the Max Column Value.';
    }
    if (minimumrow > maxrow) {
        errmsg = 'Minimum Row Value can not be higher than the Max Row Value.';
    }

    document.getElementById('messages').innerHTML = errmsg;

    /* User input is correct (print the row corresponding to inputs) */
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
            /* makes row for multiplcation */
            for (var j = minimumrow; j <= maxrow; j++) {
                row += '<td>' + i * j + '</td>';
            }
            row += '</tr>';
        }

        document.getElementById('table').innerHTML = row;
    }
}

/* jQuery */
var error = '';
$(document).ready(function () {
    $('.input-container').validate({
        err: 'errorsign',
        wrapper: 'div',
        rules: {
            minrow: {
                range: [-100, 100],
                number: true,
                required: true,
            },
            maxrow: {
                range: [-100, 100],
                number: true,
                required: true,
            },
            mincol: {
                range: [-100, 100],
                number: true,
                required: true,
            },
            maxcol: {
                range: [-100, 100],
                number: true,
                required: true,
            },
        },
        messages: {
            minrowerr: {
                required: 'Enter a number from -100 to 100',
            },
            maxrowerr: {
                required: 'Enter a number from -100 to 100',
            },
            mincolerr: {
                required: 'Enter a number from -100 to 100',
            },
            maxcolerr: {
                required: 'Enter a number from -100 to 100',
            },
            HandleSubmit: function (form) {
                form.submit();
            },
        },
    });
});

$('#minrow').val(0);
$('#maxcol').val(0);
$('#mincol').val(0);
$('#maxrow').val(0);

var minrow = document.querySelector('#minrow');
var maxcol = document.querySelector('#maxcol');
var mincol = document.querySelector('#mincol');
var maxrow = document.querySelector('#maxrow');

/* event listen to generate table based on input */
minrow.addEventListener('input', function () {
    genTable();
});
maxcol.addEventListener('input', function () {
    genTable();
});
mincol.addEventListener('input', function () {
    genTable();
});
maxrow.addEventListener('input', function () {
    genTable();
});
/* min column slider*/
var MinColOpt = {
    values: null,
    animate: true,
    min: -100,
    max: 100,
    slide: function () {
        $('#mincol').val($('#sliderMinC').slider('value'));
        genTable();
    },
};

(function ($) {
    $('#sliderMinC').slider(MinColOpt);
})(jQuery);

/* max column slider*/
var MaxColOpt = {
    values: null,
    animate: true,
    min: -100,
    max: 100,
    slide: function () {
        $('#maxcol').val($('#sliderMaxC').slider('value'));
        genTable();
    },
};

(function ($) {
    $('#sliderMaxC').slider(MaxColOpt);
})(jQuery);

/* min row slider*/
var MinRowOpt = {
    values: null,
    animate: true,
    min: -100,
    max: 100,
    slide: function () {
        $('#minrow').val($('#sliderMinR').slider('value'));
        genTable();
    },
};

(function ($) {
    $('#sliderMinR').slider(MinRowOpt);
})(jQuery);

/* max row slider*/
var MaxRowOpt = {
    values: null,
    animate: true,
    min: -100,
    max: 100,
    slide: function () {
        $('#maxrow').val($('#sliderMaxR').slider('value'));
        genTable();
    },
};

(function ($) {
    $('#sliderMaxR').slider(MaxRowOpt);
})(jQuery);

function deleteTabs() {
    err = '';
    document.getElementById('messages').innerHTML = err;
    row = '';
    document.getElementById('table').innerHTML = row;
}
