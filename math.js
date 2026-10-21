'use strict';
globalThis.RutaMath=(()=>{
 const safe=x=>Number.isFinite(Number(x))?Math.max(0,Number(x)):0;
 function pmt(p,annual,n){if(!(n>0))return 0;let r=annual/1200;return p<=0?0:r===0?p/n:p*r/(-Math.expm1(-n*Math.log1p(r)));}
 function presentValue(monthly,annual,n){let r=annual/1200;return r===0?monthly*n:monthly*(-Math.expm1(-n*Math.log1p(r)))/r;}
 function finalPrice(amount,basis,vat,igtf,mode){if(basis==='final'||basis==='quote')return amount;let base=basis==='base'?amount:amount/(1+vat/100),invoice=basis==='base'?amount*(1+vat/100):amount;return invoice+(mode==='full'?invoice:mode==='mixed'?base:0)*igtf/100;}
 function plan(input){let total=finalPrice(safe(input.amount),input.basis,safe(input.vat),safe(input.igtf),input.mode)+safe(input.fees),discount=Math.min(total,safe(input.discount)),net=total-discount,down=Math.min(net,safe(input.down)),principal=net-down,rate=safe(input.rate),months=safe(input.months),payment=pmt(principal,rate,months);return {total,discount,net,down,principal,rate,months,payment,interest:Math.max(0,payment*months-principal),paid:down+payment*months};}
 function schedule(principal,annual,n){let balance=principal,monthly=pmt(principal,annual,n),rows=[];for(let i=1;i<=n;i++){let interest=balance*annual/1200,payment=i===n?balance+interest:monthly,capital=payment-interest;balance=Math.max(0,balance-capital);rows.push({month:i,payment,interest,capital,balance});}return rows;}
 return {safe,pmt,presentValue,finalPrice,plan,schedule};
})();
if(typeof module!=='undefined')module.exports=globalThis.RutaMath;

// Convert the displayed rate to the nominal annual input used by the annuity formula.
RutaMath.rate=(value,type)=>{value=RutaMath.safe(value);let monthly=type==='monthly'?value/100:type==='effective'?Math.expm1(Math.log1p(value/100)/12):value/1200;return {monthly,nominal:monthly*1200,effective:Math.expm1(12*Math.log1p(monthly))};};
RutaMath.taxes=(amount,basis,vatRate,igtfRate,vatOn,igtfOn,mode)=>{amount=RutaMath.safe(amount);vatRate=RutaMath.safe(vatRate);igtfRate=RutaMath.safe(igtfRate);if(basis==='final')return {base:amount,vat:0,igtf:0,total:amount};let base=basis==='iva'?amount/(1+vatRate/100):amount,vat=vatOn?base*vatRate/100:0,invoice=base+vat,igtf=igtfOn?(mode==='mixed'?base:invoice)*igtfRate/100:0;return {base,vat,igtf,total:invoice+igtf};};
