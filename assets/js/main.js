$(document).ready(function () {

// Style per exampleParent //

    let brPadding = "<hr>\n<hr>\n<br>\n<br>\n<br>\n";

    let beforeExampleParentHTML = `
    <hr>
        <div class="row">
            <div class="col-md-6 offset-md-3 border rounded bg-white">
                <br>`;
    let afterExampleParentHTML = `
                <br>
            <br>
        </div>
    </div>`;

    $(".exampleParents").each(function () {
            let firstPChild = $(this).children("p:first-child");

            firstPChild.addClass("border rounded bg-light m-0")
            firstPChild.css("text-align", "center")
            firstPChild.after("<br>\n")

            $(this).html( `
                ${beforeExampleParentHTML}
                ${$(this).html()}
                ${afterExampleParentHTML}` );
    }
    )

// Footer //

    $("#footer").html(`
        ${brPadding}
        ${$("#footer").html()}
        ${brPadding}`)

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

    $("#txtField_keyPressTxtRef").keypress(function () {
        $("#dom_keyPressUpdateTextColor").css("background-color", "steelblue");
        console.log(" " + $("#txtField_keyPressTxtRef").val());
        if ($("#txtField_keyPressTxtRef").val() == "") {
            $("#dom_keyPressUpdateTextColor").css("background-color", "#088A68");
        }
    });

    $("#txtField_keyDownTxtRef").keydown(function () {
        $("#keyDownUpdateTextColor").css("color", "red");
        console.log(" " + $("#txtField_keyDownTxtRef").val());
        if ($("#txtField_keyDownTxtRef").val() == "") {
            $("#keyDownUpdateTextColor").css("color", "#EDEFEE");
        }
    });

    $("#txtField_keyUpTxtRef").keyup(function () {
        $("#keyUpUpdateTextBgColor").css("background-color", "red");
        console.log(" " + $("#txtField_keyUpTxtRef").val());
        if ($("#txtField_keyUpTxtRef").val() == "") {
            $("#keyUpUpdateTextBgColor").css("background-color", "#088A68");
        }
    });

// Example 7 //

    $("#txt_multipleEvents").on({
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

    $("#txt_clickAndDoubleClick").on("dblclick", function () {
        $("#txt_clickAndDoubleClick").css("background-color", "black");
    });
    $("#txt_clickAndDoubleClick").on("click", function () {
        $("#txt_clickAndDoubleClick").css("background-color", "#088A68");
    });

// Example 9 //

    function sumOfPairs(x, y) {
        return x + y;
    }

    $("#btn_creationOfFunctionsJS").click(function () {
        alert(sumOfPairs(4, 3));
    });

// Example 10 //

    $.fn.hello = function () {
        alert("Hola usuario");
    }

    $(".btn_creationOfFunctionsJQuery").click(function () {
        $.fn.hello();
    });

// Example 11 //

    var person = {
        name: "Horacio",
        age: 34
    };

    $(".class_JQueryPOO").click(function () {
        alert(`Hola ${person.name} tienes ${person.age} años de edad`);
    });

// Example 12 //

    $.fn.fooBar = function () {
        alert(this, arguments.size);
    }

    $(".class_JQueryCallAndApply").click(function () {
        $.fn.fooBar();
        $.fn.fooBar.call("Foo", [1, 2]);
        $.fn.fooBar.apply("Bar", [1, 2]);
    });

// Example 13 //

    $("#class_JQueryAddClass").mouseenter(function () {
        $("#class_JQueryAddClass").addClass("selected");
    });

    $("#class_JQueryAddClass").mouseleave(function () {
        $("#class_JQueryAddClass").addClass("deselected");
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
        $("#id29").text(`${conversor} soles es igual a  ${(conversor * 3.56)} dolares`);
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
        dt2 += "Ancho: " + $("#box").width() + "px , Alto: ";
        dt2 += $("#box").height() + "px";
        $("#detalles").html(dt2);
    });

    $("#id35").mouseleave(function () {
        $("#detalles").html("");
    });

// Example 23 //

    $("#id38").click(function () {
        var dt3 = `El valor del atributo es: ${ $("#id36").attr("value") }`;
        $("#id37").html(dt3);
        $("#id36").attr("id", "nuevoId");

    });

// Example 24 //

    $("#id43").click(function () {
        $("#id39").addClass("txtBlack-bgLime");
        $("#id40").addClass("cls4");
        $("#id41").addClass("cls5");
        $("#id42").addClass("txtGray-bgBrown");
    });

// Example 25 //

    $("#id46").click(function () {
        $("#id44").removeClass("txtGray-bgBrown");
        $("#id45").removeAttr("id");
    });

});
