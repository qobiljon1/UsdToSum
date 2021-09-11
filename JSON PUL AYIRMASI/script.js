$(document).ready( () =>{
    Array.isArray(valyuta)?valyuta.forEach(value => {
        str = `<option value="${value.code}">${value.code}</option> `

        $("Select").append(str);
    }): " "                                          

})

$(".set #Select").change(() => {
    a = $(".set  #Select").val();
    valyuta.forEach((item) => {
        if(item.code == a){
            $(".set legend").html(item.title)
        }
    })
    ayirboshlash()
})

$(".get #Select").change(() => {
    a = $(".get  #Select").val();
    valyuta.forEach((item) => {
        if(item.code == a){
            $(".get legend").html(item.title)
        }
    })
    ayirboshlash()
})

const ayirboshlash = () =>{

    set_select = $(".set #Select").val()
    get_select = $(".get #Select").val()

    set_val = Number($(".set #TextInput").val())
    valyuta.forEach(item =>{
        if(set_select === item.code){
            set_price = item.cb_price
        }
        if(get_select === item.code){
            get_price = item.cb_price
        }
    })

    set_val *= set_price;
    get_val = set_val / get_price

    $(".get #TextInput").val(get_val)
}