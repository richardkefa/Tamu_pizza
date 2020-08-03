
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


