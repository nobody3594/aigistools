webpackJsonp([10],{0:function(a,t,n){(function(a){"use strict";function t(a){return a&&a.__esModule?a:{"default":a}}function e(a){return 27+(a<=100?3*a:300+a-100)}function i(a){return 12+(a<=100?0:Math.floor((a-100)/20)+1)}function o(a){var t=arguments.length<=1||void 0===arguments[1]?0:arguments[1];if(isNaN(a))return"?";if(a===1/0||a===-(1/0))return"∞";var n=a.toFixed(t).split("."),e=parseInt(n[0]);return e.toLocaleString()+(1===n.length?"":"."+n[1])}function s(){if(N&&"direct"!==q){var t=a("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(a(this).val())||0}).toArray().reduce(function(a,t){return a+t},0);a("input[name=current]").val(t).trigger("change")}}function r(){var t=void 0;try{t=JSON.parse(a.cookie(z+"_storage"))}catch(n){console.warn(n),t=S}return t}function c(t){a.cookie(z+"_storage",JSON.stringify(t),{expires:30})}function l(t){var n=void 0;try{n=JSON.parse(a.cookie(z+t.active))}catch(e){console.warn(e),n={}}return a.extend(!0,R,n)}function u(t){a.cookie(z+O.active,JSON.stringify(t),{expires:30})}function p(){if(E){var t=45,n=7,e=parseInt(A.val()),i=a("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=a(this),o=i.attr("data-amount")-e;if(o<-t)i.hide();else if(o<0)i.css("opacity",.5).show();else if(o<t)i.addClass("active").css("opacity",1).show();else if(o<t*n){var s=1-Math.floor(o/t)*t/(t*(n+1));i.show().css("opacity",s)}else i.hide();var r=0===o?"diff-eq":o>0?"diff-plus":"diff-minus",c=0===o?"":(o>0?"+":"")+o;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(r).text(c)})}}function m(){if("exchange"===j){var t=parseInt(A.val());C.forEach(function(n){for(var e=a('[data-prize="'+n.unit+'"]').empty(),i=0;i<t;i+=n.value){var o=a("<i />").addClass("icon icon-"+n.unit),s=25*Math.min(t-i,n.value)/n.value;a('<div class="prize-gage" />').append(o.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-s})).append(o.clone().css({width:s+"px"})).appendTo(e)}})}}function d(){var t=a("[name=expectation]:input").val(),n=1/0,e=0,i="drop"===t?null:t,s=I.map(function(a){var t=a.expectation/(i&&a[i]||1);return n=0,e=Math.max(e,t),t}),r=i?3:2;I.forEach(function(t,i){var c=a("[data-chart="+i+"]"),l=s[i],u=l/(e-n),p=120*u+240;c.find("span.barchart-label").text(o(l,r)+"個"),c.find("span.barchart").css({width:100*u+"%",backgroundColor:"hsla("+p+", 80%, 50%, 0.5)"})})}function f(){var t=parseInt(J.val()),n=parseInt(A.val()),e=Math.max(t-n,0);I.forEach(function(t,n){var i=a("[data-chart="+n+"]"),s=e?Math.ceil(e/t.expectation):0;i.find("span.marathon").text("残り"+o(s)+"周")})}function v(){var t=parseInt(A.val()),n=parseInt(J.val()),s=I[parseInt(a("[name=estimate_map]:input").val())],r=Math.max(n-t,0),c=Math.ceil(r/s.expectation);a("#estimate_required_marathon").text(o(c));var l=(new Date).getTime(),u=M.reduce(function(a,t){return a+Math.max(t[1],l)-Math.max(t[0],l)},0),p=0+a("[name=estimate_natural_recovery]:input").prop("checked"),m=Math.floor(u/18e4)*p,d=Math.floor(u/36e5)*p,f=parseInt(a("[name=estimate_rank]").val()),v=e(f),h=i(f),g=Math.ceil(s.charisma*c),x=Math.ceil(s.stamina*c),b=a("[name=estimate_use_crystal]:input").val(),_=0+("both"===b||"charisma"===b),k=0+("both"===b||"stamina"===b),y=_?g:m,w=k?x:d,C=Math.floor(Math.min(y/s.charisma,w/s.stamina));a("#estimate_available_marathon").text(o(C));var T=Math.ceil(Math.max(s.charisma*C-m,0)/v),j=Math.ceil(Math.max(s.stamina*C-d,0)/h),E=T+j;a("#estimate_required_crystal").text(o(E));var z=0===T?"diff-eq":T>0?"diff-plus":"diff-minus";a("#estimate_required_crystal_for_charisma").attr("class",z).text(o(T)),z=0===j?"diff-eq":j>0?"diff-plus":"diff-minus",a("#estimate_required_crystal_for_stamina").attr("class",z).text(o(j));var D=C-c;z=0===D?"diff-eq":D>0?"diff-plus":"diff-minus";var q=(D>=0?"+":"")+o(D);a("#estimate_available_marathon_diff").attr("class",z).text(q);var N=s.charisma*C;a("#estimate_using_charisma").text(o(N)),D=N-g,z=0===D?"diff-eq":D>0?"diff-plus":"diff-minus",q=(D>=0?"+":"")+o(D),a("#estimate_using_charisma_diff").attr("class",z).text(q);var O=Math.ceil(s.stamina*C);a("#estimate_using_stamina").text(o(O)),D=O-x,z=0===D?"diff-eq":D>0?"diff-plus":"diff-minus",q=(D>=0?"+":"")+o(D),a("#estimate_using_stamina_diff").attr("class",z).text(q);var R=t+Math.floor(s.expectation*C);a("#estimate_result_collection").text(o(R)),D=R-n,z=0===D?"diff-eq":D>0?"diff-plus":"diff-minus",q=(D>=0?"+":"")+o(D),a("#estimate_result_collection_diff").attr("class",z).text(q);var S=Math.floor(s.experience*C);q=(S>0?"+":"")+o(S),a("#estimate_experience").text(q);var L=E?S/E:0;q=(L>0?"+":"")+o(L),a("#estimate_avg_experience").text(q);var H=Math.floor(s.gold*C);q=(H>0?"+":"")+o(H),a("#estimate_gold").text(q);var U=E?H/E:0;q=(U>0?"+":"")+o(U),a("#estimate_avg_gold").text(q)}function h(){var t=parseInt(A.val()),n=parseInt(J.val()),e=(new Date).getTime(),i=M.reduce(function(a,t){return a+Math.max(t[1],e)-Math.max(t[0],e)},0),s=Math.max(n-t,0),r=i/864e5,c=s/Math.max(r,1),l=i/36e5,u=s/Math.max(l,1),p=i/18e5,m=s/Math.max(p,1),d=o(c,3).split(".");a("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=o(u,3).split("."),a("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=o(m,3).split("."),a("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),a("#remains_days").text(o(r,0)),a("#remains_hours").text(o(l,0)),a("#remains_minutes").text(o(60*l,0));var f=100*Math.min(t,n),v=parseInt(f/n)||0,h=w-i,g=parseInt(100*h/w)||0,x=void 0;x=100===v?"progress-bar-success":v>=g?"progress-bar-success":v>.7*g?"progress-bar-info":v>.4*g?"progress-bar-warning":"progress-bar-danger",a("#objective_progress > .progress-bar").width(v+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(x).children("span").text(v+"%達成"),a("#period_progress > .progress-bar").width(g+"%").children("span").text(g+"%経過");var b=t*w/h;a("#prediction_collection").text(o(Math.floor(b)));var _=Math.min(b/n,1),k=a("#objective_progress").width(),y=k*_-47;a(".pointer").css("left",y+"px");var C=k-y<230?-250:0;a(".pointer-label").css("margin-left",C+"px");var I="";t<n&&b>=n&&!function(){var a=void 0,t=void 0;M.forEach(function(n){a=a||n[0],t=t||n[1]});var e=n/b*w,i=M.reduce(function(a,t){if(a)return a;var n=t[1]-t[0];return n<e?(e-=n,null):new Date(t[0]+e)},null),o=i.getMonth(),s=i.getDate(),r=i.getHours(),c=i.getMinutes(),l=o+1+"/"+s+" "+(r<10?"0"+r:r)+":"+(c<10?"0"+c:c);I=l+"頃に目標達成できそうよ。"}(),a("#prediction_completion_date").text(I)}function g(){var a="animated bounce",t="",n="Webkit Moz O ms Khtml".split(" "),e="",i=document.createElement("div");if(void 0!==i.style.animationName)return!0;for(var o=0;o<n.length;o++)if(void 0!==i.style[n[o]+"AnimationName"])return e=n[o],a=e+"Animation",t="-"+e.toLowerCase()+"-",!0;return!1}function x(t){var n=y.objectives.find(function(a){return a.value==t.id});return a("<div />").append(a("<i />").addClass("icon icon-"+n.icon)).append(a("<span />").text(" ")).append(a("<span />").text(n.title)).append(a("<span />").text(" ")).append(a('<span class="label label-default" />').text(n.value)).html()}function b(){A=a("[name=current]:input");var t=(new Date).getTime(),n=a("#period_dates");M.forEach(function(e){var i=e[1]-e[0],o=100*i/w+"%",s=new Date(e[0]),r=new Date(e[1]-1),c=s.getMonth()+1+"/"+s.getDate()+"-"+(r.getMonth()+1)+"/"+r.getDate(),l=t>=e[0]&&t<e[1],u=t>=e[1],p=l?"progress-bar-active":u?"progress-bar-expired":"progress-bar-remain";a('<div class="progress-bar">').width(o).text(c).addClass(p).appendTo(n)}),a('[data-objective-mode="'+j+'"]').show(),a('[data-objective-mode][data-objective-mode!="'+j+'"]').remove(),A.click(function(){this.select()}).TouchSpin({min:0,max:1e4,step:1}),J=a("[name=objective]:input"),"achievement"===j?(y.objectives.map(function(t){a("<option />").attr("value",t.value).text(t.title+" ("+t.value+"個)").appendTo(J)}),J.select2({formatSelection:x,formatResult:x})):!function(){a("select[name=objective]").click(function(){this.select()});var t=a("#increse_objective_list");C.forEach(function(n){a('<button class="btn btn-default" name="add"  type="button" />').val(n.value).attr("title",n.name).append(a('<i class="fa fa-arrow-up" />')).append(a("<span />").addClass("icon icon-"+n.unit)).appendTo(t)})}(),a("button[name=add]").click(function(t){t.preventDefault();var n=parseInt(a(this).val()),e=parseInt(J.val());J.val(e+n).trigger("change")}),a("button[name=reset]").click(function(a){a.preventDefault(),J.val(0).trigger("change")}),a("[name=expectation]:input").change(function(){d(),f()}).val(D);var h=a("#prize_list");C.forEach(function(t){a('<div class="prize-list" />').append(a('<h4 class="prize-list-header" />').text(t.name).append(a('<span class="prize-value" />').text("@"+t.value))).append(a('<div class="prize-list-body" />').attr("data-prize",t.unit)).appendTo(h)});var b=I.reduce(function(a,t){return Math.max(a,t.drops.length)},0);O=r();var _=l(O);_.maps.forEach(function(a,t){I[t].expectation=a.expectation}),N=_.syncCurrentEnabled;var k=void 0,R=function(){k&&clearTimeout(k),setTimeout(function(){var t=a("#map");I.forEach(function(a,n){var e=t.find("tr[data-map="+n+"]"),i=Math.max(parseInt(e.find("input[name=num_laps]").val())||0,0),s=Math.max(parseInt(e.find("input[name=num_drops]").val())||0,0),r=e.find("input[name=actual_expectation]"),c=Math.max(parseFloat(r.val())||0,0);"aggregate"===q&&(c=s/i||0,r.val(c));var l=Math.floor(c);e.find("button[name=increase]").val(l).text("+"+o(l)),_.maps[n].numLaps=i,_.maps[n].numDrops=s,a.expectation=_.maps[n].expectation=c}),u(_),v(),d(),f()},100)},S=a("#map").on("keyup","input[type=number]",function(){R(),s()}).on("change","input[type=number]",function(){R(),s()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(t){t.preventDefault();var n=a(this).closest("tr"),e=n.find("input[name=num_laps]"),i=parseInt(e.val())+1;e.val(i);var o=n.find("input[name=num_drops]"),s=parseInt(o.val())+parseInt(this.value);o.val(s),o.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){q=a(this).val(),_.expectationInputMode=q,u(_),S.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===q).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===q).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===q),R()}).on("click","input[name=sync]",function(){_.syncCurrentEnabled=N=this.checked,u(_),s()}),L=S.find("tbody");I.forEach(function(t,n){var e=_.maps[n],i=a("<td />").attr("data-chart",n).append(a('<span class="barchart" />')).append(a('<span class="barchart-label" />')).append(a('<span class="marathon" />'));a("<tr />").attr("data-map",n).append(a("<th />").text(t.name)).append(a("<td />").text(""+t.charisma+"/"+t.stamina)).append(function(){for(var n=t.drops.map(function(t){var n=t.icon?a("<i />").attr("title",t.name).addClass("icon icon-"+t.icon):a("<span />").text(t.name),e=t.set?a('<span class="badge" />').text("x"+t.set):null;return a("<td />").append(n).append(e)}),e=t.drops.length;e<b;e++)n.push(a("<td />"));return n}).append(function(){var t=a('<span class="input-group input-group-sm" />').append(a('<span class="input-group-addon">1周の期待値</span>')).append(a('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(e.expectation)),n=a('<span class="input-group input-group-sm" />').append(a('<span class="input-group-addon">周回</span>')).append(a('<input type="number" name="num_laps" min="0" class="form-control" />').val(e.numLaps)).append(a('<span class="input-group-addon">ドロップ</span>')).append(a('<input type="number" name="num_drops" min="0" class="form-control" />').val(e.numDrops)).append(a('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return a('<td class="expectation" />').append(n).append(t)}).append(i).prependTo(L)}),a("#map thead th.drops").attr("colspan",b),E&&!function(){var t=a("#rewards tbody");T.forEach(function(n){var e=a('<span class="icon" />').addClass("icon-"+n.unit);a("<tr />").attr("data-amount",n.amount).append(a('<td class="text-right" />').html('<span class="diff"></span> '+n.amount)).append(a("<td />").html(e)).appendTo(t)})}();var H=a("[name=estimate_map]:input").change(function(){v(),_.estimateMap=parseInt(a(this).val()),u(_)});I.forEach(function(t,n){a("<option />").val(n).text(t.name+" ("+t.charisma+"/"+t.stamina+")").prependTo(H)});for(var U=a("[name=estimate_rank]:input").change(function(){v(),_.estimateRank=parseInt(a(this).val()),u(_)}),F=1;F<=200;F++){var K=e(F),W=i(F),B=""+F+" ("+K+"/"+W+")";a("<option />").val(F).text(B).appendTo(U)}var G=a("[name=estimate_use_crystal]").change(function(){v(),_.estimateUseCrystal=a(this).val(),u(_)}),P=a("[name=estimate_natural_recovery]:input").change(function(){v(),_.estimateNaturalRecovery=this.checked,u(_)});a("*[title]").tooltip(),A.val(_.current),"exchange"===j?J.val(_.objective):J.select2("val",_.objective),a("[name=current]:input, [name=objective]:input").change(function(){_[this.name]=a(this).val(),u(_),p(),m(),f(),v()}),H.val(_.estimateMap),U.val(_.estimateRank),G.val(_.estimateUseCrystal),P.prop("checked",_.estimateNaturalRecovery),"exchange"===j&&m(),E&&p(),S.find("input[name=sync]").prop("checked",N).end().find('input[name=expectation_input_mode][value="'+_.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active"),a("#initialize-button").on("click",function(){a.removeCookie(z),a.removeCookie(z+"_storage"),window.location.reload()});var Q=g(),V=["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(" ");a("#estimate_tutorial").on("click","a",function(t){a("#map .expectation").each(function(){var t=a(this);Q&&t.addClass("animated flash").one(V,function(){t.removeClass("animated flash")})})}).on("click","button",function(t){_.estimateTutorialHidden=!0,u(_),a(t.delegateTarget).each(function(){var t=a(this);Q?t.addClass("animated zoomOutRight").one(V,function(){t.hide()}):t.hide()})}).toggle(!_.estimateTutorialHidden).each(function(){var t=a(this),n=t.find(".anna");t.on("mouseenter",function(){n.addClass("animated bounce")}).on("mouseleave",function(){n.removeClass("animated bounce")})});var X=a("[name=slot]").change(function(){O.active=a(this).val(),c(O),window.location.reload()});a.map(O.slots,function(t,n){var e=n===O.active;a("<option />").val(n).text(t+(e?" *":"")).attr("selected",e).appendTo(X)})}n(188);var _=n(504),k=t(_),y=k["default"][0],M=y.periods.map(function(a){return a.map(Date.parse)}),w=M.reduce(function(a,t){return a+t[1]-t[0]},0);y.maxObjective=null===y.maxObjective?1/0:y.maxObjective;var C=y.prizes,I=y.maps,T=y.rewards,j="achievement",E=!0,z="sealing-talisman2-timer",D="stamina",q="direct",N=!0,O=void 0,R={current:20,objective:1400,estimateMap:4,estimateRank:100,estimateUseCrystal:"both",estimateNaturalRecovery:!0,expectationInputMode:q,syncCurrentEnabled:N,maps:I.map(function(a){return{numLaps:0,numDrops:0,expectation:a.expectation}}),estimateTutorialHidden:!1,version:1},S={active:"",slots:{"":"データ1",_2:"データ2",_3:"データ3"}},A=void 0,J=void 0;a(function(){b(),setInterval(h,1e3)})}).call(t,n(1))},504:function(a,t){a.exports=[{id:"20160812",periods:[["2016/08/12 15:00:00","2016/08/18 10:00:00"],["2016/08/18 15:00:00","2016/08/25 10:00:00"]],objectives:[{value:25,title:"ヒバリが仲間になる",icon:"sealing-talisman-1"},{value:30,title:"スキルレベル2",icon:"sealing-talisman-1"},{value:50,title:"初期レベル10",icon:"sealing-talisman-1"},{value:100,title:"スキルレベル3",icon:"sealing-talisman-1"},{value:150,title:"出撃コスト-1",icon:"sealing-talisman-1"},{value:200,title:"スキルレベル4",icon:"sealing-talisman-1"},{value:250,title:"出撃コスト-2",icon:"sealing-talisman-1"},{value:300,title:"スキルレベル5",icon:"sealing-talisman-1"},{value:400,title:"初期レベル20",icon:"sealing-talisman-1"},{value:500,title:"スキルレベル6",icon:"sealing-talisman-1"},{value:600,title:"出撃コスト-3",icon:"sealing-talisman-1"},{value:700,title:"スキルレベル7",icon:"sealing-talisman-1"},{value:800,title:"初期レベル30",icon:"sealing-talisman-1"},{value:855,title:"絆のニナ",icon:"bonds-nina"},{value:900,title:"スキルレベル8",icon:"sealing-talisman-1"},{value:1e3,title:"出撃コスト-4",icon:"sealing-talisman-1"},{value:1100,title:"初期レベル40",icon:"sealing-talisman-1"},{value:1125,title:"絆のセリア",icon:"bonds-celia"},{value:1200,title:"スキルレベル9",icon:"sealing-talisman-1"},{value:1300,title:"出撃コスト-5",icon:"sealing-talisman-1"},{value:1395,title:"絆のフローリカ",icon:"bonds-frorica"},{value:1400,title:"スキルレベル10",icon:"sealing-talisman-1"},{value:1500,title:"初期レベル50",icon:"sealing-talisman-1"},{value:1530,title:"プラチナアーマー",icon:"platinum-bucket"},{value:1575,title:"結晶のカケラ",icon:"crystal-fragment"},{value:1665,title:"ゴールドアーマー",icon:"gold-bucket"},{value:1710,title:"黒聖霊",icon:"black-sprit"},{value:1755,title:"プラチナアーマー",icon:"platinum-bucket"},{value:1800,title:"虹聖霊",icon:"rainbow-sprit"}],prizes:[],maps:[{name:"解かれし封印",charisma:20,stamina:1,expectation:2,drops:[{name:"封印の札",icon:"sealing-talisman-1",set:2},{name:"花束",icon:"flower"}],experience:140,gold:900},{name:"襲われた村",charisma:30,stamina:2,expectation:3,drops:[{name:"封印の札",icon:"sealing-talisman-1",set:3},{name:"サノスケ",icon:"sanosuke"},{name:"魔水晶",icon:"demon-crystal-1"}],experience:180,gold:1200},{name:"田んぼに潜む妖怪",charisma:40,stamina:4,expectation:6,drops:[{name:"封印の札3",icon:"sealing-talisman-3",set:1},{name:"封印の札5",icon:"sealing-talisman-1",set:3},{name:"サイゾウ",icon:"saizou"},{name:"フドウ",icon:"fudou"}],experience:240,gold:1800},{name:"妖怪総大将の本気",charisma:50,stamina:7,expectation:16,drops:[{name:"封印の札5",icon:"sealing-talisman-5",set:2},{name:"封印の札3",icon:"sealing-talisman-3",set:2},{name:"カズハ",icon:"kazuha"},{name:"白銀の聖霊",icon:"platinum-sprit"}],experience:300,gold:2100},{name:"鬼切りを狙う者",charisma:80,stamina:9,expectation:15,drops:[{name:"封印の札5",icon:"sealing-talisman-5",set:3},{name:"フィリス",icon:"philis"},{name:"プラチナアーマー",icon:"platinum-bucket"},{name:"魔水晶2",icon:"demon-crystal-2"}],experience:370,gold:2700},{name:"さまよえる落ち武者たち",charisma:40,stamina:5,expectation:9,drops:[{name:"封印の札3",icon:"sealing-talisman-3",set:3},{name:"イロハ",icon:"iroha"},{name:"精霊女王",icon:"queen-sprit"},{name:"プラチナアーマー",icon:"platinum-bucket"}],experience:260,gold:1950},{name:"重水の四天王",charisma:70,stamina:8,expectation:13,drops:[{name:"封印の札5",icon:"sealing-talisman-5",set:2},{name:"封印の札3",icon:"sealing-talisman-3",set:1},{name:"カリオペ",icon:"calliope"},{name:"ルビー",icon:"ruby"}],experience:350,gold:2550},{name:"鬼の頭領",charisma:90,stamina:12,expectation:26,drops:[{name:"封印の札5",icon:"sealing-talisman-5",set:4},{name:"封印の札3",icon:"sealing-talisman-3",set:2},{name:"虹聖霊",icon:"rainbow-sprit"}],experience:400,gold:4500},{name:"二匹の妖狐",charisma:100,stamina:2,expectation:0,drops:[{name:"金聖霊",icon:"gold-sprit"},{name:"白聖霊",icon:"platinum-sprit"},{name:"黒聖霊",icon:"black-sprit"},{name:"虹聖霊",icon:"rainbow-sprit"}],experience:200,gold:2700}],rewards:[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"bonds-nina"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"bonds-celia"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"bonds-frorica"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}]}]}});