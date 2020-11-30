$(document).ready(function () {

// Example 1 //

    $("#btn_hideSimple").click(function () {
        $("#dom_HideAndShowSimple").hide();
    });

    $("#btn_showSimple").click(function () {
        $("#dom_HideAndShowSimple").show();
    });

// Example 2 //

    $("#btn_hideWithParameters").click(function () {
        $("#dom_hideAndShowWithParameters").hide(1000);//"easing"
    });

    $("#btn_showWithParameters").click(function () {
        $("#dom_hideAndShowWithParameters").show(1000);//"easing"
    });

// Example 3 //

    $("#btn_toggleSimpleButton").click(function () {
        $("#dom_toggleSimple").toggle();
    });

// Example 4 //

    $("#btn_toggleWithParameters").click(function () {
        $("#dom_toggleWithParameters").toggle(1000);
    });

// Example 5 //

    $("#txt_simpleClick").click(function () {
        alert("Evento click");
    });

    $("#txt_doubleClick").dblclick(function () {
        alert("Evento dblclick");
    });

    $("#txt_mouseEnter").mouseenter(function () {
        //alert("Evento mouseenter");
    });

    $("#txt_mouseLeave").mouseleave(function () {
        ///alert("Evento mouseleave");
    });

// Example 6 //

    $("#inputText_keyPressTextReference").keypress(function () {
        $("#dom_keyPressUpdateTextColor").css("background-color", "steelblue");
        console.log(" " + $("#inputText_keyPressTextReference").val());
        if ($("#inputText_keyPressTextReference").val() == "") {
            $("#dom_keyPressUpdateTextColor").css("background-color", "#088A68");
        }
    });

    $("#keyDownTextReference").keydown(function () {
        $("#keyDownUpdateTextColor").css("color", "red");
        console.log(" " + $("#keyDownTextReference").val());
        if ($("#keyDownTextReference").val() == "") {
            $("#keyDownUpdateTextColor").css("color", "#EDEFEE");
        }
    });

    $("#keyUpTextReference").keyup(function () {
        $("#keyUpUpdateTextBgColor").css("background-color", "red");
        console.log(" " + $("#keyUpTextReference").val());
        if ($("#keyUpTextReference").val() == "") {
            $("#keyUpUpdateTextBgColor").css("background-color", "#088A68");
        }
    });

// Example 7 //

    $("#multipleEvents").on({
        mouseenter: function () {
            $(this).css("background-color", "lime");
        },
        mouseleave: function () {
            $(this).css("background-color", "gray");
        },
        click: function () {
            $(this).css("background-color", "magenta");
        }
    });

// Example 8 //

    $("#clickAndDoubleClick").on("dblclick", function () {
        $("#clickAndDoubleClick").css("background-color", "black");
    });
    $("#clickAndDoubleClick").on("click", function () {
        $("#clickAndDoubleClick").css("background-color", "#088A68");
    });

// Example 9 //

    function sumOfPairs(x, y) {
        return x + y;
    }

    $("#creationOfFunctionsJS").click(function () {
        alert(sumOfPairs(4, 3));
    });

// Example 10 //

    $.fn.hello = function () {
        alert("Hola usuario");
    }

    $(".cls0").click(function () {
        $.fn.hello();
    });

// Example 11 //

    var person = {
        name: "Horacio",
        age: 34
    };

    $(".classJQuerySimple").click(function () {
        alert("Hola " + person.name + " tienes " + person.age + " años de edad");
    });

// Example 12 //

    $.fn.fooBar = function () {
        alert(this, arguments.size);
    }

    $(".classJQueryCallAndApply").click(function () {
        $.fn.fooBar();
        $.fn.fooBar.call("Foo", [1, 2]);
        $.fn.fooBar.apply("Bar", [1, 2]);
    });

// Example 13 //

    $("#classJQueryAddClass").mouseenter(function () {
        $("#classJQueryAddClass").addClass("selected");
    });

    $("#classJQueryAddClass").mouseleave(function () {
        $("#classJQueryAddClass").addClass("inselected");
    });

// Example 14 //

    $("#id18").click(function () {
        $("#id19").hide(2000).show(1000);
    });

// Example 15 //

    $("#id22").click(function () {
        $("*").hide(2000).show(1000);
    });

// Example 16 //

    $("#id24").click(function () {
        var dt0 = $("#id23").val();
        alert(dt0);
        $("#id23").val("");
    });

// Example 17 //

    $("#id25").click(function () {
        $(this).hide(2000).show(3000);
    });

// Example 18 //

    $("#id26").click(function () {
        $("ul li:first-child").hide(3000).show(600);
        $("ul li:last-child").hide(3000).show(600);
    });

// Example 19 //

    $("#id28").click(function () {
        var conversor = $("#id27").val();
        $("#id29").text(conversor + " soles es igual a " + (conversor * 3.56) + " dolares");
        $("#id27").val("");
    });

// Example 20 //

    $("#id30").click(function () {
        $("tr:even").css("background-color", "black");
        $("tr:odd").css("background-color", "lime");
    });

// Example 21 //

    $("#id33").click(function () {
        $("#id31").text("<font color='black'> Siempre desconfia</font>");
    });

    $("#id34").click(function () {
        $("#id32").html("<font color='black'> La luz siempre brilla más fuerte</font>");
    });

// Example 22 //

    $("#id35").mouseenter(function () {
        var dt2 = "";
        dt2 += "Ancho: " + $("#caja").width() + "px , Alto: ";
        dt2 += $("#caja").height() + "px";
        $("#detalles").html(dt2);
    });

    $("#id35").mouseleave(function () {
        $("#detalles").html("");
    });

// Example 23 //

    $("#id38").click(function () {
        var dt3 = "El valor del atributo es: " + $("#id36").attr("value"); //attr("id"); //attr("type");
        $("#id37").html(dt3);
        $("#id36").attr("id", "nuevoId");

    });

// Example 24 //

    $("#id43").click(function () {
        $("#id39").addClass("cls3");
        $("#id40").addClass("cls4");
        $("#id41").addClass("cls5");
        $("#id42").addClass("cls6");
    });

// Example 25 //

    $("#id46").click(function () {
        $("#id44").removeClass("cls6");
        $("#id45").removeAttr("id");
    });
});
