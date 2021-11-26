$("#one").hover(function() {
    $(this).addClass("enlarge");
    $('.ct_parrafo').css({
        "display": "flex",
        "flex-direction": "row"
    });
    $('.dnrrafo').css({
        "display": "flex",
        "flex-direction": "column"
    });
    $('.imgdescrip').css({
        "display": "inline-block", 
        "max-width": "30%",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "margin": "10px 50px",
        "box-shadow": "0 0 5px 5px grey"
    });
}, function() {
    $(this).removeClass("enlarge");
    $('.ct_parrafo').css({
        "display": "flex",
        "flex-direction": "column"
    });
    $('.dnrrafo').css({
        "display": "flex",
        "flex-direction": "column"
    });
    $('.imgdescrip').css({
        "display": "none"
    });
});

//////


$("#two").hover(function() {
    $(this).addClass("enlarge");
    $('.ct_parrafo').css({
        "display": "flex",
        "flex-direction": "row"
    });
    $('.dnrrafo').css({
        "display": "flex",
        "flex-direction": "column"
    });
    $('.imgdescrip').css({
        "display": "inline-block",
        "max-width": "30%",
        "height": "250px",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "margin": "10px 50px",
        "box-shadow": "0 0 5px 5px grey"
    });
}, function() {
    $(this).removeClass("enlarge");
    $('.ct_parrafo').css({
        "display": "flex",
        "flex-direction": "column"
    });
    $('.dnrrafo').css({
        "display": "flex",
        "flex-direction": "column"
    });
    $('.imgdescrip').css({
        "display": "none",
    });
});