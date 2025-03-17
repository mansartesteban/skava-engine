"use strict";var W=Object.defineProperty;var P=e=>{throw TypeError(e)};var j=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var D=(e,t,s)=>j(e,typeof t!="symbol"?t+"":t,s),G=(e,t,s)=>t.has(e)||P("Cannot "+s);var r=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),o=(e,t,s,i)=>(G(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),T=(e,t,s)=>(G(e,t,"access private method"),s);require("./Time-DqDcjPhP.js");require("uuid");const _=require("./TransformComponent-CbIqoe1q.js"),n=require("./Vector2-3guUrHSy.js"),z={strokeStyle:"#000",lineWidth:"1",fillStyle:"#000"},I={setLineDash:[]};class p{static draw(t,s){let i=t.ctx;i.beginPath();let h=s();i.closePath(),h&&p.reset(i,h)}static strokeRect(t,s,i,h,a,q=n.RGB.Green){let C=new n.Vector2(s,i),O=1;t.fillStyle=q._toString||"#ff0000",t.fillRect(C.x,C.y,h,a),t.fillStyle="#000000",t.fillRect(C.x+O,C.y+O,h-O*2,a-O*2)}static reset(t,s=[]){s.length===0&&(s=Object.keys(z).concat(Object.keys(I))),s.forEach(i=>{if(Object.keys(z).indexOf(i)!==-1)switch(i){case"fillStyle":t.fillStyle=z.fillStyle;break;case"lineWidth":t.lineWidth=z.lineWidth;break;case"strokeStyle":t.strokeStyle=z.strokeStyle;break}else if(Object.keys(I).indexOf(i)!==-1)switch(i){case"setLineDash":t.setLineDash(I.setLineDash);break}})}}var m,L,V;class A{constructor(t){l(this,L);l(this,m);D(this,"img");D(this,"imgLoaded");o(this,m,t),this.img=new Image,this.imgLoaded=!1,T(this,L,V).call(this)}draw(t,s=new _.TransformComponent){let i=t.ctx,h=s.position;s.scale;let a=s.size,q=s.rotation;this.imgLoaded&&(i.save(),i.translate(h.x,h.y),i.rotate(-q.angle),i.translate(-h.x,-h.y),i.shadowOffsetX=3,i.shadowOffsetY=2,i.shadowColor=new n.RGB(0,0,0,.25)._toString,i.shadowBlur=4,i.drawImage(this.img,h.x,h.y,a.x,a.y),i.restore())}}m=new WeakMap,L=new WeakSet,V=function(){this.img.onload=()=>{this.imgLoaded=!0},this.img.src=r(this,m)};var c,u,w,f,d,B,k,R,b;class E{constructor(t=new n.Vector2,s=new n.Vector2,i=[0],h=new n.RGB,a=new n.Rotation){l(this,c);l(this,u);l(this,w);l(this,f);l(this,d);l(this,B);l(this,k);l(this,R);l(this,b);o(this,c,t),o(this,u,s),o(this,w,i),o(this,f,a),o(this,d,h)}get position(){return r(this,c)}get size(){return r(this,u)}get radius(){return r(this,w)}get color(){return r(this,d)}get rotation(){return r(this,f)}get shadowBlur(){return r(this,B)}get shadowColor(){return r(this,k)}get shadowSize(){return r(this,R)}get shadowPosition(){return r(this,b)}set position(t){o(this,c,t)}set size(t){o(this,u,t)}set radius(t){o(this,w,t)}set color(t){o(this,d,t)}set rotation(t){o(this,f,t)}set shadowBlur(t){o(this,B,t)}set shadowColor(t){o(this,k,t)}set shadowSize(t){o(this,R,t)}set shadowPosition(t){o(this,b,t)}draw(t){let s=t.ctx;p.draw(t,()=>(s.fillStyle=r(this,d)._toString,s.save(),s.translate(this.position.x+this.size.x/2,this.position.y+this.size.y/2),s.rotate(-this.rotation.angle),s.translate(-this.position.x-this.size.x/2,-this.position.y-this.size.y/2),s.imageSmoothingEnabled=!1,this.shadowBlur&&(s.shadowBlur=this.shadowBlur),this.shadowColor&&(s.shadowColor=this.shadowColor._toString),s.roundRect(this.position.x,this.position.y,this.size.x,this.size.y,this.radius),s.fill(),s.restore(),this.shadowBlur&&(s.shadowBlur=0),this.shadowColor&&(s.shadowColor=""),["fillStyle"]))}}c=new WeakMap,u=new WeakMap,w=new WeakMap,f=new WeakMap,d=new WeakMap,B=new WeakMap,k=new WeakMap,R=new WeakMap,b=new WeakMap;var g,S,y,x;class M{constructor(t="",s=new n.Vector2,i=n.RGB.White,h=10){l(this,g);l(this,S);l(this,y);l(this,x);o(this,g,t),o(this,S,s),o(this,y,i),o(this,x,h)}get text(){return r(this,g)}get position(){return r(this,S)}get color(){return r(this,y)}get fontSize(){return r(this,x)}set text(t){o(this,g,t)}set position(t){o(this,S,t)}set color(t){o(this,y,t)}set fontSize(t){o(this,x,t)}draw(t){let s=t.ctx;p.draw(t,()=>(s.font=`${this.fontSize}pt BraahOne`,s.textAlign="center",s.textBaseline="center",s.fillStyle=this.color._toString,s.fillText(this.text.toString(),this.position.x,this.position.y+this.fontSize/3),["fillStyle"]))}}g=new WeakMap,S=new WeakMap,y=new WeakMap,x=new WeakMap;exports.Draw=p;exports.Img=A;exports.RoundSquare=E;exports.Text=M;
