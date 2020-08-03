$(document).ready(function(){
  function Order(type,crust,topping,size,quantity){
    this.pizzatype=type;
    this.pizzacrust=crust;
    this.pizzatopping=topping;
    this.pizzasize=size;
    this.pizzaquantity=quantity;
    this.deliveryaddress=[];
  };
  function Delivery(name,phone,location){
    this.customerName=name;
    this.telNumber=phone;
    this.delivaryLocation=location;
  };




  //User inerface logic
  $('input[name=delivery]').change(function(){
    if($(this).is(':checked')) {
      $("#delivery-address").show();
    } else {
      $("#delivery-address").hide();
    }
});
  $("#checkoutbtn").click(function(event){
    var pizzatype =$("#pizzatype option:selected").val();
    var pizzacrust =$("#pizzacrust option:selected").val();
    var pizzatopping=$("#pizzatopping option:selected").val();
    var pizzasize =$("#pizzasize option:selected").val();
    var pizzaquantity =parseInt(document.getElementById("quantity").value);
    var customerName=$("input#name").val();
    var customerPhone=$("input#phonenumber").val();
    var customerLocation=$("input#location").val();
    var newAddress= new Delivery(customerName,customerPhone,customerLocation);
    newOrder.deliveryaddress.push(newAddress);

    var newOrder= new Order(pizzatype,pizzacrust,pizzatopping,pizzasize,pizzaquantity);

    $("#checkout").show();
    $(".pizza-type").text(newOrder.pizzatype);
    $(".pizza-crust").text(newOrder.pizzacrust);
    $(".pizza-topping").text(newOrder.pizzatopping);
    $(".pizza-size").text(newOrder.pizzasize);
    $(".pizza-quantity").text(newOrder.pizzaquantity);
    newOrder.deliveryaddress.forEach(function(address){
      $(".delivery-info").text(address.customerName+""+address.customerPhone+""+address.delivaryLocation)
    })
    

    switch (pizzasize){
      case "large":
       var price=1330;
      break;
      case "medium":
        price=1000;
      break;
      case "small":
        price=600;
      break;
      default:
        alert("select your pizza size");
    }
    switch(pizzacrust){
      case "cripsy":
       var crust_price=200;
      break;
      case "stuffed":
        crust_price=150;
        break;
      case "glutenfree":
        crust_price=300;
      break;
      default:
        alert("select your crust");
    }
    switch(pizzatopping){
      case "mushrooms":
       var topping_cost=200;
      break;
      case "onions":
        topping_cost=100
      break;
      case "extracheese":
        topping_cost=250;
      break;
      default:
        alert("select your topping");
    }
    var total=(price+crust_price+topping_cost)*pizzaquantity;
    console.log(total)
    $(".pizza-cost").text(total);

    event.preventDefault();
  });
  
})