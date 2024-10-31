import CustomerModel from "../model/customerModel.js";
import {customer_array} from "../db/database.js";
import {validateMobile} from "../util/validation.js";

let index;
let selected_customer_index = null;

const loadCustomerTable = () => {
    $("#customerTableBody").empty();

    customer_array.map((item) => {
        let data = `<tr>
            <td>${item.cid}</td>
            <td>${item.cname}</td>
            <td>${item.caddress}</td>
            <td>${item.cphone}</td>
        </tr>`;
        $("#customerTableBody").append(data);
    });
};

function clear(){
    $("#id").val('');
    $("#name").val('');
    $("#address").val('');
    $("#phone").val('');
}

$("#customersave").on("click", function (event) {
    event.preventDefault();

    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let cphone = $("#phone").val();

    if(cid.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid First Name",
        });
    } else if(cname.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Last Name",
        });
    } else if(caddress.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Address",
        });
    } else if(!validateMobile(cphone)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Mobile",
        });

    } else {

        let customer = new CustomerModel(

            cid,
            cname,
            caddress,
            cphone,
        );

        customer_array.push(customer);
        loadCustomerTable();
        clear();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Customer has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

});



$("#customerupdate").on("click", function (event) {


    // let index = selected_customer_index;


    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let cphone = $("#phone").val();

    // if(cid.length===0) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Invalid Input",
    //         text: "Invalid First Name",
    //     });
    // } else if(cname.length===0) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Invalid Input",
    //         text: "Invalid Last Name",
    //     });
    // } else if(caddress.length===0) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Invalid Input",
    //         text: "Invalid Address",
    //     });
    // } else if(!validateMobile(cphone)) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Invalid Input",
    //         text: "Invalid Mobile",
    //     });
    //
    // } else {
    //
    //     let customer = new CustomerModel(
    //         customer_array[index].id,
    //         cid,
    //         cname,
    //         caddress,
    //         cphone,
    //     );
    //
    //     // update item
    //     customer_array[selected_customer_index] = customer;
    //
    //     // clean customer form
    //     clear();
    //
    //     // reload the table
    //     loadCustomerTable();
    //
    //     Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Customer update successfully",
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // }
    //






    for (let i = 0; i < customer_array.length; i++) {
        if (customer_array[i].cid === cid){
            customer_array[i].cname = cname;
            customer_array[i].caddress = caddress;
            customer_array[i].csalary = cphone;

            loadCustomerTable();
            clear();
        }
    }


});

$("#customerdelete").on("click", function (event) {

    if (customer_array != "index") {
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

    customer_array.pop(customer_array[index]);



    loadCustomerTable();
    clear();
});


$("#customerTableBody").on("click", 'tr' ,function (event) {
    console.log('clicked');
    let index= $(this).index()

    $("#id").val(customer_array[index].cid);
    $("#name").val(customer_array[index].cname);
    $("#address").val(customer_array[index].caddress);
    $("#phone").val(customer_array[index].cphone);
})
