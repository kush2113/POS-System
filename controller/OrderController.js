import OrderModel from "../model/orderModel.js";
import { customer_array, item_array, order_array } from "../db/database.js";

$(document).ready(function () {
    $("#order_nav").on("click", function (event) {
        console.log("orderNav clicked");
        event.preventDefault();
        loadCustomerSelect();

        console.log("Order nav eka click krhama method ekaata awa")
        loadItemSelect();
    });
});

const loadCustomerSelect = () => {
    console.log("load array ekata awa")
    $('#csid').empty();
    $('#csid').append('<option value="">Select Customer</option>');

    customer_array.forEach((customer) => {
        let option = `<option value="${customer._cid}">${customer._cid}</option>`;
        $("#csid").append(option);
        console.log("ekin eka load wenwa");
    });
};

const loadItemSelect = () => {
    $('#itemIdSelector').empty();
    $('#itemIdSelector').append('<option value="">Select Item</option>');

    item_array.forEach((item) => {
        let option = `<option value="${item._iid}">${item._iid}</option>`;
        $("#itemIdSelector").append(option);
    });
};

$("#itemIdSelector").on("change", function (event) {
    event.preventDefault();
    let index = $(this).prop('selectedIndex');
    if (index > 0) {
        $("#oitemName").val(item_array[index - 1]._iname);
        $("#oitemPrice").val(item_array[index - 1]._iprice);
        $("#qtyOnHand").val(item_array[index - 1]._iqty);

    }
});


$("#oqty").on("input", function () {
    const unitPrice = parseFloat($("#oitemPrice").val()) || 0;
    const quantity = parseFloat($(this).val()) || 0;
    const total = unitPrice * quantity;
    $("#ototal").val(total.toFixed(2));
});

$("#csid").on("change", function (event) {
    event.preventDefault();
    let index = $(this).prop('selectedIndex');
    if (index > 0) {
        $("#ocustomerName").val(customer_array[index - 1]._cname);
        $("#ocustomerAddress").val(customer_array[index - 1]._caddress);
        $("#tel").val(customer_array[index - 1]._cphone);
    }
});


$("#cartBtn").on("click", function () {
    const itemId = $("#itemIdSelector").val();
    const itemName = $("#oitemName").val();
    const unitPrice = $("#oitemPrice").val();
    const quantity = $("#oqty").val();
    const total = $("#ototal").val();

    if (itemId && itemName && quantity && total) {
        const newRow = `
                <tr>
                    <td>${itemId}</td>
                    <td>${itemName}</td>
                    <td>${unitPrice}</td>
                    <td>${quantity}</td>
                    <td>${total}</td>
                </tr>
            `;
        $("#table tbody").append(newRow);

        $("#itemIdSelector").val('');
        $("#oitemName").val('');
        $("#oitemPrice").val('');
        $("#qtyOnHand").val('');
        $("#oqty").val('');
        $("#ototal").val('');
    } else {
        alert("Please fill in all fields before adding to the cart.");
    }
});