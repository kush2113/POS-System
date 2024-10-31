import ItemModel from "../model/itemModel.js";
import {item_array} from "../db/database.js";



let index;

const loadItemTable = () => {
    $("#ItemTableBody").empty();

    item_array.map((item) => {
        let data = `<tr>
            <td>${item.iid}</td>
            <td>${item.iname}</td>
            <td>${item.iprice}</td>
            <td>${item.iqty}</td>
        </tr>`;
        $("#ItemTableBody").append(data);
    });
};

function clear(){
    $("#itemId").val('');
    $("#itemName").val('');
    $("#itemPrice").val('');
    $("#itemQty").val('');
}

$("#itemsave").on("click", function (event) {
    event.preventDefault();

    let iid = $("#itemId").val();
    let iname = $("#itemName").val();
    let iprice = $("#itemPrice").val();
    let iqty = $("#itemQty").val();

    if (!iid || !iname || !iprice || !iqty) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }


    let itemModel = new ItemModel(
        iid,
        iname,
        iprice,
        iqty,
    );

    item_array.push(itemModel);

    loadItemTable();
    clear();

});

// const validateEmail = (email) => {
//      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// }
//
// const validateNumber = (number) => {
//     const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
// }
//


// $("#customerTableBody").on("click", 'tr' ,function (event) {
//     let value= $(this).text()
//     let index= $(this).text()
//     console.log('clicked -' + index);
// })


$("#itemupdate").on("click", function (event) {
    let iid = $("#itemId").val();
    let iname = $("#itemName").val();
    let iprice = $("#itemPrice").val();
    let iqty = $("#itemQty").val();

    for (let i = 0; i < item_array.length; i++) {
        if (item_array[i].iid === iid){
            item_array[i].iname = iname;
            item_array[i].iaprice = iprice;
            item_array[i].iqty = iqty;

            loadCustomerTable();
            clear();
        }
    }


});

$("#itemdelete").on("click", function (event) {

    if (item_array != "index") {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    item_array.pop(item_array[index]);



    loadItemTable();
    clear();
});


$("#ItemTableBody").on("click", 'tr' ,function (event) {
    console.log('clicked');
    let index= $(this).index()

    $("#itemId").val(item_array[index].iid);
    $("#itemName").val(item_array[index].iname);
    $("#itemPrice").val(item_array[index].iaprice);
    $("#itemQty").val(item_array[index].iqty);
})
