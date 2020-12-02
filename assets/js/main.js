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

    $("#dom_HideDotShow").click(function () {
        $("#txt_HideDotShow").hide(2000).show(1000);
    });

// Example 15 //

    $("#btn_idsManipulationExample15").click(function () {
        $("*").hide(2000).show(1000);
    });

// Example 16 //

    $("#btn_idsManipulationExample16").click(function () {
        var tmpValue = $("#textField_idsManipulation").val();
        alert(tmpValue);
        $("#textField_idsManipulation").val("");
    });

// Example 17 //

    $("#btn_idsManipulationExample17").click(function () {
        $(this).hide(2000).show(3000);
    });

// Example 18 //

    $("#btn_listManipulation").click(function () {
        $("ul li:first-child").hide(3000).show(600);
        $("ul li:last-child").hide(3000).show(600);
    });

// Example 19 //

    $("#txtField_moneyExchange").click(function () {
        var conversor = $("#id27").val();
        $("#txt_moneyExchange").text(`${conversor} soles es igual a  ${(conversor * 3.56)} dolares`);
        $("#id27").val("");
    });

// Example 20 //

    $("#btn_evenAndOddsTable").click(function () {
        $("tr:even").css("background-color", "black");
        $("tr:odd").css("background-color", "lime");
    });

// Example 21 //

    $("#btn_useOfText").click(function () {
        $("#txt_useOfText").text("<font color='black'> Siempre desconfia</font>");
    });

    $("#btn_useOfHTML").click(function () {
        $("#txt_useOfHTML").html("<font color='black'> La luz siempre brilla más fuerte</font>");
    });

// Example 22 //

    $("#txt_showBoxDimensions").mouseenter(function () {
        var responseString = `Ancho: ${$("#box").width()} px , Alto: ${$("#box").height()} px`
        $("#txt_boxDetails").html(responseString);
    });

    $("#txt_showBoxDimensions").mouseleave(function () {
        $("#txt_boxDetails").html("");
    });

// Example 23 //

    $("#btn_attrUseExample").click(function () {
        var dt3 = `El valor del atributo es: ${ $("#txtField_attrUseExample").attr("value") }`;
        $("#dom_attrUseExample").html(dt3);
        $("#txtField_attrUseExample").attr("id", "nuevoId");

    });

// Example 24 //

    $("#btn_addClassExample").click(function () {
        $("#txt_addClassExampleItem1").addClass("txtBlack-bgLime");
        $("#txt_addClassExampleItem2").addClass("txtLime-bgBlack");
        $("#txt_addClassExampleItem3").addClass("txtYellow-bgBlack");
        $("#txt_addClassExampleItem4").addClass("txtGray-bgBrown");
    });

// Example 25 //

    $("#btn_removeAttrAndClass").click(function () {
        $("#txt_removeClass").removeClass("txtGray-bgBrown");
        $("#txt_removeAttr").removeAttr("class");
    });

});
