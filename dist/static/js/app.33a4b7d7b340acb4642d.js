webpackJsonp([2,0],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(541),o=(r(i),n(540)),s=(r(o),n(527)),a=r(s),l=n(25),c=r(l),u=n(551),d=r(u),f=n(563),h=r(f),p=n(561),S=r(p),v=n(552),m=r(v);c.default.component(a.default.name,a.default),c.default.use(S.default),c.default.use(h.default);var _=new h.default.Store({state:{count:0}}),y=new S.default({routes:[{path:"/dashboard",component:m.default}],linkActiveClass:"active"});new c.default({router:y,store:_,template:"<App>",components:{App:d.default},data:{eventHub:new c.default,charts:[]}}).$mount("#app"),y.push("dashboard")},236:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(219);r(i);e.default={data:function(){return{seller:{}}},created:function(){}}},237:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(555),o=r(i);e.default={data:function(){return{items:[]}},mounted:function(){this._init()},methods:{_resize:function(){this.$root.charts.forEach(function(t){t.resize()})},_init:function(){this.items=document.querySelectorAll(".flex-container .item");for(var t=0;t<this.items.length;t++)this.items[t].dataset.order=t+1},clickChart:function(t){var e=document.querySelector(".flex-container .active"),n=e.dataset.order,r=this.items[t-1];n!==t&&(e.classList.remove("active"),r.classList.add("active"),this._setStyle(r,e))},_setStyle:function(t,e){var n=t.style.transform,r=e.style.transform;t.style.transform=r,e.style.transform=n}},components:{scatter:o.default}}},238:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(241),o=r(i),s=n(244),a=r(s);e.default={props:{myChart:{tyoe:Object,default:{}}},data:function(){return{}},mounted:function(){this._init()},methods:{_init:function(){this.prevClass=this.$parent.$el._prevClass,this.option=this.myChart.getOption(),this.resetOption=this._deepCopy(this.myChart.getOption()),this._initProList()},_initProList:function(){var t=[];"point"!==this.prevClass&&(this.showProduct=!0,this.option.xAxis[0].data.forEach(function(e,n){t.push({name:e,selected:!0})}),this.pro_list=t)},_deepCopy:function(t){var e=void 0,n=void 0;if(e=n=t.constructor===Array?[]:{},"object"===("undefined"==typeof t?"undefined":(0,a.default)(t))){if(window.JSON)e=(0,o.default)(t),n=JSON.parse(e);else for(var r in t)n[r]="object"===(0,a.default)(t[r])?cloneObj(t[r]):t[r];return n}},pro_toggle:function(t,e){t.selected=!t.selected,this.selectAll_flag=this.isSelectAll(),this.redraw()},redraw:function(){var t=this._deepCopy(this.resetOption),e=0;this.pro_list.forEach(function(n,r){r-=e,n.selected||(t.xAxis[0].data.splice(r,1),t.series.forEach(function(t){t.data.splice(r,1)}),e++)}),this.myChart.setOption(t)},isSelectAll:function(){var t=!0;return this.pro_list.forEach(function(e){e.selected||(t=!1)}),t},selectAll:function(){var t=this;this.selectAll_flag=!this.selectAll_flag,this.pro_list.forEach(function(e){e.selected=t.selectAll_flag}),this.redraw()},showProPane:function(){this.pro_filter_flag=!this.pro_filter_flag}}}},239:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{legendArr:{type:Array,default:[]},myChart:Object,name:String},created:function(){this._init()},data:function(){return{styleArr:[],color:this.$store.state.color}},methods:{_init:function(){var t=this;this.color.forEach(function(e){t.styleArr.push({background:e,border:"1px solid"+e})})},highlight:function(t){this.myChart.dispatchAction({type:"highlight",seriesIndex:t})},donwplay:function(t){this.myChart.dispatchAction({type:"downplay",seriesIndex:t})},legendToggle:function(t){t.selected=!t.selected,this.myChart.dispatchAction({type:"legendToggleSelect",name:t.name}),this.changeStyle()},changeStyle:function(){var t=this;this.legendArr.forEach(function(e,n){e.selected?(t.styleArr[n].background=t.color[n],t.styleArr[n].border="1px solid"+t.color[n]):(t.styleArr[n].background="transparent",t.styleArr[n].border="1px solid #9C8C84")})}}}},240:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(274),o=r(i),s=n(554),a=r(s),l=n(553),c=r(l);e.default={data:function(){return{legendArr:[],myChart:{},SomaRegion:["LGd","LP","MG","RE","VM","VPL","VPM","CLA","MOp","MOs","RSPv","SSp-bfd","SSp-ll","SSp-m","SSp-n","SSp-ul","SSs","VISp","CP","OT"],ArborLocation:["LGd","LP","MG","RE","SMT","VM","VPL","VPM","Ald","AUDp","AUDv","CLA","MOp","MOs","ORBl","ORBvl","RSPagl","RSPd","RSPv","SSp-bfd","SSp-ll","SSp-m","SSp-n","SSp-ul","SSs","TEa","VISa","VISam","VISl","VISp","CP","GPe","OT","SI","ZI","SNr"],data1:[["LGd","LGd",7.5,.75],["RSPv","RSPv",28,.25],["SSp-bfd","SSp-bfd",25,.4],["SSp-ll","SSp-ll",25,.3],["SSp-m","SSp-m",22,.45],["SSp-n","SSp-n",22,.3],["SSp-ul","SSp-ul",22,.58],["SSs","SSs",22,.3]],data:[]}},created:function(){this.getdata()},methods:{getdata:function(){var t,e,n,r;for(n=0;n<=20;n++)for(r=0;r<=36;r++){t=this.SomaRegion[n],e=this.ArborLocation[r];var i=7.5+Math.round(22.5*Math.random()),o=parseFloat(Math.random().toFixed(2));this.data.push([t,e,i,o])}console.log(this.data1),console.log(this.data)},_init:function(){this.legendArr=this.myChart.getOption().series,this.legendArr.forEach(function(t){t.selected=!0}),this.$root.charts.push(this.myChart),window.addEventListener("resize",function(){this.myChart.resize()}.bind(this))}},components:{"v-header":a.default,"v-filter":c.default},mounted:function(){this.myChart=o.default.init(document.querySelector(".scatterChart .main"));this.myChart.setOption({grid:{left:"10%",bottom:"8%",containLabel:!0},tooltip:{padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1,formatter:function(t){var e=t.value;return"Soma Region："+e[0]+"<br>Arbor Location："+e[1]+"<br>Arbor length："+e[2]+"<br>Distal arbor："+e[3]+"<br>"}},xAxis:{type:"category",data:this.SomaRegion,splitLine:{show:!0,lineStyle:{color:"gray",type:"dashed"}},axisLabel:{interval:0,rotate:40},axisLine:{lineStyle:{color:"gray"}}},yAxis:{type:"category",axisLabel:{interval:0},data:this.ArborLocation,axisLine:{lineStyle:{color:"gray"}}},visualMap:{left:"90%",top:"10%",min:0,max:1,dimension:3,calculable:!0,show:!0,inRange:{color:["#8d2821","#dc8b55","#e8e9ea","#96b6d6","#5463cd"].reverse()},textStyle:{color:"#fff"}},series:[{type:"scatter",data:this.data,symbolSize:function(t){return t[2]/1.1}}]}),this._init()}}},540:function(t,e){},541:function(t,e){},542:function(t,e){},543:function(t,e){},544:function(t,e){},545:function(t,e){},546:function(t,e){},551:function(t,e,n){n(542);var r=n(61)(n(236),n(556),null,null);t.exports=r.exports},552:function(t,e,n){n(546);var r=n(61)(n(237),n(560),"data-v-c2e4a4f2",null);t.exports=r.exports},553:function(t,e,n){n(544);var r=n(61)(n(238),n(558),null,null);t.exports=r.exports},554:function(t,e,n){n(545);var r=n(61)(n(239),n(559),"data-v-6cb5db06",null);t.exports=r.exports},555:function(t,e,n){n(543);var r=n(61)(n(240),n(557),"data-v-30b38b6d",null);t.exports=r.exports},556:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainApp"},[n("router-view",{staticClass:"router-view"})],1)},staticRenderFns:[]}},557:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scatterChart"},[n("v-header",{attrs:{name:t.name}}),t._v(" "),n("v-filter"),t._v(" "),n("div",{staticClass:"main"})],1)},staticRenderFns:[]}},558:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},staticRenderFns:[]}},559:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"legend-wrapper"},[n("ul",t._l(t.legendArr,function(e,r){return n("li",{style:t.styleArr[r],on:{mouseout:function(e){return t.donwplay(r)},mouseover:function(e){return t.highlight(r)},click:function(n){return t.legendToggle(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),0)])])},staticRenderFns:[]}},560:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scatter")},staticRenderFns:[]}}});
//# sourceMappingURL=app.33a4b7d7b340acb4642d.js.map