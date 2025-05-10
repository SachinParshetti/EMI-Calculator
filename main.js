$(()=>{
    $("#AmountRange").change(()=>{
        $("#Amountinput").val($("#AmountRange").val());
    });

    $("#YearRange").change(()=>{
        $("#Yearinput").val($("#YearRange").val());
    });

    $("#InterestRange").change(() =>{
        $("#Interestinput").val($("#InterestRange").val());
    });

    
$("#btnCalculate").click(()=>{
    var P = parseInt($("#Amountinput").val());
    var N = parseInt($("#Yearinput").val())*12;
    var R = parseFloat($("#Interestinput").val())/12/100;

   var EMI = P * R * (Math.pow(1+R, N)) / (Math.pow(1 +R,N)-1);
   //console.log(EMI.toFixed(2))
   var interest = (EMI * N) - P ;
   console.log(interest.toFixed(2))
   console.log($("#InterestRange").val())

   $("#result").html(`<div class='border border-2 border-primary p-4 rounded m-2'>
                      <div>Your EMI IS:<b>${EMI.toLocaleString('en-IN',{style:"currency",currency:"INR"})}</b> for Next <b>${N}</b> Months</div>
                      <div>Rate of interest is:${$("#InterestRange").val()} </div>
                      <div>Total interest is:${interest.toLocaleString('en-IN',{style:"currency",currency:"INR"})}</div>
                      </div>
                    `);
});

});
