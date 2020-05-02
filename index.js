const stripe = require('stripe')('sk_test_3dgZ9i8193HbBuBjoZZmPtU300EOTPSYRN');


// stripe.customers.create(
//   {
//     name: "Pablo Torres",
//     email: "torrespjgt@gmail.com",
//     description: 'My First Test Customer (created for API docs)',
//     phone: "9999032910"
//   },
//   function(err, customer) {
//     if(err){
//       console.log(err)
//     }else{
//       console.log(customer)
//     }
//   }
// );


// async function cargo  (){
//   stripe.charges.create(
//     {
//       amount: 2000,
//       currency: 'mxn',
//       source: 'tok_amex',
//       description: 'My First Test Charge (created for API docs)',
//     },
//     function(err, charge) {
//       // asynchronously called
//     }
//   );

// }

// cargo()



function createPlan(){
  stripe.plans.create(
    {
      amount: 1500,
      currency: 'mxn',
      interval: 'month',
      product: {name: 'AIRBNB'},
    },
    function(err, plan) {
      if(err){
        console.log(err)
      }else{
        console.log(plan)
      }
      // asynchronously called
    }
  );
}


createPlan()