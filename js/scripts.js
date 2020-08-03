
$(document).ready(function(){
function Order(type,crust,topping,size,quantity){
  this.pizzatype=type;
  this.pizzacrust=crust;
  this.pizzatopping=topping;
  this.pizzasize=size;
  this.pizzaquantity=quantity;
  // this.deliveryaddress=[];
}
function Delivery(name,phone,location){
  this.customerName=name;
  this.telNumber=phone;
  this.delivaryLocation=location;
}
});


//User inerface logic
$(document).ready(function(){
  $('input[name=delivery]').change(function(){
    if($(this).is(':checked')) {
      $("#delivery-address").show();
    } else {
      $("#delivery-address").hide();
    }
});
});
$(document).ready(function(){
  $("#checkoutbtn").click(function(event){
    var pizzatype =$("select#pizzatype").val();
    var pizzacrust =$("select#pizzacrust").val();
    var pizzatopping=$("select#pizzatopping").val();
    var pizzasize =$("select#pizzasize").val();
    var pizzaquantity =parseInt($("#pizzaquantity").val());

    var newOrder= new Order(pizzatype,pizzacrust,pizzatopping,pizzasize,pizzaquantity);

    $("#checkout").show();
    $(".pizza-type").text(newOrder.pizzatype);
    $(".pizza-crust").text(newOrder.pizzacrust);
    $(".pizza-topping").text(newOrder.pizzatopping);
    $(".pizza.size").text(newOrder.pizzasize);
    $(".pizza.quantity").text(newOrder.pizzaquantity);

    event.preventDefault();
  });
})