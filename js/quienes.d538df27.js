(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["quienes"],{"003e":function(t,a,e){"use strict";e("d37b")},"0aa3":function(t,a,e){},2498:function(t,a,e){},"3bec":function(t,a,e){"use strict";e("60e4")},"60e4":function(t,a,e){},"6af5":function(t,a,e){},"70ac":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bienvenida"},[e("h1",{staticClass:"title"},[t._v("Carta de bienvenida")]),e("iframe",{attrs:{width:"80%",height:"80%",src:"https://www.youtube.com/embed/HhzB71xdDO0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],o={name:"bienvenida"},n=o,r=(e("fcba"),e("2877")),l=Object(r["a"])(n,s,i,!1,null,"231ec562",null);a["default"]=l.exports},"7a47":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"inner-content"},[e("span",{staticClass:"title"},[t._v("Consejo de Estado")]),e("p",[t._v(" Es un cuerpo colegiado, es decir, está conformado por varios magistrados también llamados consejeros de Estado que resuelven grupalmente los casos. Lo integran 31 magistrados elegidos para periodos individuales de ocho años. ")])])}],o={name:"magistrados_inicio"},n=o,r=(e("3bec"),e("2877")),l=Object(r["a"])(n,s,i,!1,null,"4416c126",null);a["default"]=l.exports},8503:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"presidencia"},[e("transition",{attrs:{name:t.transition_class}},[t.current_magistrado&&!t.is_mobile?e("div",{key:t.current_magistrado.nombre,class:t.current_magistrado.cssClass.container},[e("span",{class:t.current_magistrado.cssClass.titulo},[t._v(t._s(t.current_magistrado.title))]),e("span",{class:t.current_magistrado.cssClass.magistrado},[t._v(t._s(t.current_magistrado.magistrado))]),e("p",{class:t.current_magistrado.cssClass.nombre},[t._v(" "+t._s(t.current_magistrado.nombre)+" ")]),e("img",{class:t.current_magistrado.cssClass.foto,attrs:{src:"/assets/images/"+t.current_magistrado.foto,alt:"magistrado",loading:"lazy"}}),t._l(t.current_magistrado.cargo,(function(a,s){return e("span",{key:a,class:[t.current_magistrado.cssClass.cargos,{cargo__margin:s+1==t.current_magistrado.cargo.length}]},[t._v(t._s(a))])})),e("span",{class:t.current_magistrado.cssClass.funcion},[t._v(t._s(t.current_magistrado.funcion))]),e("span",{class:t.current_magistrado.cssClass.comision},[t._v(t._s(t.current_magistrado.comision))])],2):t._e()]),t.is_mobile?t._l(t.magistrados,(function(a,s){return e("div",{key:a.nombre,class:["presidencia__mobile-container"]},[0==s?e("span",{class:t.current_magistrado.cssClass.titulo},[t._v(t._s(t.current_magistrado.title))]):t._e(),e("span",{class:a.cssClass.magistrado},[t._v(t._s(a.magistrado))]),e("span",{class:a.cssClass.nombre},[t._v(" "+t._s(a.nombre)+" ")]),e("div",{staticClass:"row__mobile"},[e("div",{staticClass:"column__mobile--centrado"},[e("img",{class:a.cssClass.foto,attrs:{src:"/assets/images/"+a.foto,alt:"magistrado",loading:"lazy"}})]),e("div",{staticClass:"column__mobile"},[t._l(a.cargo,(function(s,i){return e("span",{key:s,class:[a.cssClass.cargos,{cargo__margin:i+1==a.cargo.length}]},[t._v(t._s(s))])})),e("span",{class:a.cssClass.funcion},[t._v(t._s(a.funcion))]),e("span",{class:a.cssClass.comision},[t._v(t._s(a.comision))])],2)])])})):t._e()],2)},i=[],o={name:"presidencia",data:function(){return{transition_class:"SlideInXRight",is_mobile:!1,magistrados:[{cssClass:{container:"presidencia__content-magistrado",titulo:"title_presidencia",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Presidencia",magistrado:"Magistrado",nombre:"Álvaro Namén Vargas",foto:"Mag Álvaro Namén Vargas.jpg",cargo:["Presidente del Consejo de Estado","Presidente de la Sala Plena"],funcion:"Sala de Consulta y Servicio Civil",comision:"Integrante de todas las comisiones de trabajo de Sala Plena."}],magistrado_index:0}},methods:{right_callback:function(){this.magistrado_index+=1},left_callback:function(){this.magistrado_index-=1},handleResize:function(){var t=window.matchMedia("(max-width: 720px), (max-height: 410px)");this.is_mobile=!!t.matches}},computed:{current_magistrado:function(){return this.magistrados[this.magistrado_index]}},watch:{magistrado_index:function(t,a){this.transition_class=t>a?"SlideInXRight":"SlideInXLeft"}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},n=o,r=(e("b3fe"),e("2877")),l=Object(r["a"])(n,s,i,!1,null,"101bdd5a",null);a["default"]=l.exports},"9fd6":function(t,a,e){"use strict";e("6af5")},b3fe:function(t,a,e){"use strict";e("0aa3")},d19f:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"FadeIn",mode:"in-out",appear:""}},[e("div",{staticClass:"quienes_layout"},[e("span",{staticClass:"quienes__title"},[t._v("Quienes somos")]),e("div",{staticClass:"quienes__content"},[e("transition",{attrs:{name:"SlideIn",appear:""}},[e("router-view")],1)],1),e("div",{staticClass:"quienes__links"},[e("router-link",{attrs:{to:{name:"bienvenida"}}},[t._v("Carta de bienvenida")]),t._v(" / "),e("router-link",{attrs:{to:{name:"magistrados_inicio"}}},[t._v("Magistrados")]),t._v(" / "),e("router-link",{attrs:{to:{name:"jurisdiccion"}}},[t._v(" Jurisdicción de lo Contencioso Administrativo ")]),t._v(" / "),e("router-link",{staticStyle:{color:"#fff !important"},attrs:{to:{name:"index"}}},[t._v("Inicio")])],1)])])},i=[],o={name:"quienes"},n=o,r=(e("9fd6"),e("2877")),l=Object(r["a"])(n,s,i,!1,null,"caf8f990",null);a["default"]=l.exports},d37b:function(t,a,e){},eee2:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vicepresidencia"},[e("transition",{attrs:{name:t.transition_class}},[t.current_magistrado&&!t.is_mobile?e("div",{key:t.current_magistrado.nombre,class:t.current_magistrado.cssClass.container},[e("span",{class:t.current_magistrado.cssClass.titulo},[t._v(t._s(t.current_magistrado.title))]),e("span",{class:t.current_magistrado.cssClass.magistrado},[t._v(t._s(t.current_magistrado.magistrado))]),e("p",{class:t.current_magistrado.cssClass.nombre},[t._v(" "+t._s(t.current_magistrado.nombre)+" ")]),e("img",{class:t.current_magistrado.cssClass.foto,attrs:{src:"/assets/images/"+t.current_magistrado.foto,alt:"magistrado",loading:"lazy"}}),t._l(t.current_magistrado.cargo,(function(a,s){return e("span",{key:a,class:[t.current_magistrado.cssClass.cargos,{cargo__margin:s+1==t.current_magistrado.cargo.length}]},[t._v(t._s(a))])})),e("span",{class:t.current_magistrado.cssClass.funcion},[t._v(t._s(t.current_magistrado.funcion))]),e("span",{class:t.current_magistrado.cssClass.comision},[t._v(t._s(t.current_magistrado.comision))])],2):t._e()]),t.is_mobile?t._l(t.magistrados,(function(a,s){return e("div",{key:a.nombre,class:["vicepresidencia__mobile-container"]},[0==s?e("span",{class:t.current_magistrado.cssClass.titulo},[t._v(t._s(t.current_magistrado.title))]):t._e(),e("span",{class:a.cssClass.magistrado},[t._v(t._s(a.magistrado))]),e("span",{class:a.cssClass.nombre},[t._v(" "+t._s(a.nombre)+" ")]),e("div",{staticClass:"row__mobile"},[e("div",{staticClass:"column__mobile--centrado"},[e("img",{class:a.cssClass.foto,attrs:{src:"/assets/images/"+a.foto,alt:"magistrado",loading:"lazy"}})]),e("div",{staticClass:"column__mobile"},[t._l(a.cargo,(function(s,i){return e("span",{key:s,class:[a.cssClass.cargos,{cargo__margin:i+1==a.cargo.length}]},[t._v(t._s(s))])})),e("span",{class:a.cssClass.funcion},[t._v(t._s(a.funcion))]),e("span",{class:a.cssClass.comision},[t._v(t._s(a.comision))])],2)])])})):t._e()],2)},i=[],o={name:"vicepresidencia",data:function(){return{transition_class:"SlideInXRight",is_mobile:!1,magistrados:[{cssClass:{container:"vicepresidencia__content-magistrado",titulo:"title_vicepresidencia",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__vicepresidencia",funcion:"funcion",comision:"comision"},title:"Vicepresidencia",magistrado:"Magistrada",nombre:"Marta Nubia Velásquez Rico",foto:"Mag Marta Nubia Velásquez Rico.jpg",cargo:["Vicepresidenta del Consejo de Estado"],funcion:"Sección Tercera",comision:"Integrante de las comisiones de relatoria y de calidad y archivo."}],magistrado_index:0}},methods:{right_callback:function(){this.magistrado_index+=1},left_callback:function(){this.magistrado_index-=1},handleResize:function(){var t=window.matchMedia("(max-width: 720px), (max-height: 410px)");this.is_mobile=!!t.matches}},computed:{current_magistrado:function(){return this.magistrados[this.magistrado_index]}},watch:{magistrado_index:function(t,a){this.transition_class=t>a?"SlideInXRight":"SlideInXLeft"}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},n=o,r=(e("fe6b"),e("2877")),l=Object(r["a"])(n,s,i,!1,null,"0ab1fdb1",null);a["default"]=l.exports},f46a:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"magistrados"},[e("div",{staticClass:"info"},[e("transition",{attrs:{name:"SlideInX",appear:""}},[e("router-view")],1)],1),e("div",{staticClass:"svg"},[e("svg",{staticClass:"svg__network",style:{height:t.switch_height_val?"99%":"100%"},attrs:{viewBox:"0 0 324.20801 327.89417",preserveAspectRatio:"xMidYMin meet"}},[e("defs",{attrs:{id:"defs1187"}},[e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath164"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path162"}})])]),e("metadata",{attrs:{id:"metadata1190"}},[e("rdf:RDF",[e("cc:Work",{attrs:{"rdf:about":""}},[e("dc:format",[t._v("image/svg+xml")]),e("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),e("dc:title")],1)],1)],1),e("defs",{attrs:{id:"defs440"}},[e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath116"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path114"}})]),e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath142"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path140"}})]),e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath164"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path162"}})]),e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath218"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path216"}})]),e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath252"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path250"}})]),e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath270"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path268"}})]),e("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath290"}},[e("path",{attrs:{d:"M 0,1791.623 H 2318.57 V 0 H 0 Z",id:"path288"}})])]),e("transition",{attrs:{name:"FadeIn",appear:""}},[t.show_network?e("g",{attrs:{id:"layer1",transform:"translate(104.65163,22.583996)"}},[e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 23.536321,-15.928297 -50.694518,27.18823 -34.617025,40.150696 -12.048066,25.436336 -5.668433,83.322225 25.318155,56.76195 42.964099,39.9489 79.383465,22.53298 89.303222,-29.23293 45.19013,-53.01897 16.49271,-65.41841 L 209.02828,73.796495 182.03338,29.171871 156.5279,5.9001803 112.81309,-15.928297 56.407095,-22.184105 Z",id:"path56"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m -54.173468,216.9312 49.3335017,-12.14191 -6.3694027,52.09082 44.30536,-81.33574 35.078105,103.86871 -4.642203,-87.38552 93.945427,58.15259 -30.47824,-68.78637 75.66837,15.7674 -15.55539,-32.99883 32.0481,-32.41957 -59.69741,9.23925 49.56528,-67.185471 -66.57975,5.8547 39.58519,-50.479324 -25.50548,13.972469 V 5.9002435 L 126.49532,24.534318 112.81318,-15.928234 85.020646,16.558718 56.407193,-22.184042 48.332816,-4.1789701 23.536419,-15.928234 40.888147,46.335632 -27.158099,11.259996 l 16.46943,37.734169 -51.086454,2.416528 26.095324,22.385866 -38.143744,3.050469 19.650075,51.541892 -25.318155,31.78034 74.6516567,44.62003 -49.3335017,-76.40037 18.493669,-54.592361 24.99113,-24.802394 51.576816,-2.658533 7.444669,-50.5146021 36.68783,20.7376881 41.474674,7.9756 30.03267,18.610086 -14.07971,36.506855 17.01447,61.330771 27.64931,23.18032 -60.11298,17.23143 -63.467187,10.63378 -30.435902,-16.48319",id:"path60"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m -35.67986,73.796637 25.7238494,50.060573 -44.2175184,4.53179 56.8226209,10.55017 -7.4891192,65.8502 37.9363103,-29.24527 24.920574,-33.90548 5.514975,50.38902 38.823198,-51.06388 24.64399,40.4301 L 159.46269,140.9821 120.8113,114.62925 142.44822,79.651337 129.58947,58.361198 156.52793,43.144482 103.48003,47.781393 126.49526,24.534044 84.122765,46.43096 85.020585,16.558444 40.888086,46.33571 31.682702,79.517634 -10.68873,48.99389 18.853586,99.774486 Z",id:"path64"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m -9.9558518,123.85732 12.6047497,15.0816 30.4471911,36.60528 -4.741333,-39.74465 29.66226,5.83918 44.337814,-0.67486 57.10767,0.018 -44.87827,-10.54876 6.22723,-15.80409 -15.52963,-38.225592 37.16655,3.247672 -25.00207,-14.696721 12.14332,-6.593417 -26.10944,-10.579453 -19.357266,-1.350433 -43.23468,-0.0956 18.594564,36.866688 -27.8003,-3.684411 -12.829116,20.2565 z",id:"path68"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"M 18.853411,99.774384 2.6489169,138.93907 28.354775,135.79934 54.29911,116.76875 l 3.717925,24.86977 25.799344,-28.1499 18.538471,27.47504 12.2294,-10.53042 -12.319,-13.45953 18.54623,-2.34456 L 88.736218,100.7798 105.28185,76.403562 117.44633,64.95416 103.48021,47.781643 88.531607,61.627113 84.122943,46.43121 59.482827,83.202295 46.099497,99.960298 31.682527,79.517884 35.235352,103.85461 Z",id:"path72"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 18.853411,99.774384 9.501364,36.024956 6.880577,-31.94473 19.063758,12.91414 29.517269,-3.28013 18.448871,3.48509 L 88.736218,100.7798 88.531607,61.627113 105.28185,76.403562 103.48021,47.781643",id:"path76"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"M 35.235191,103.85475 46.099688,99.960083 54.298949,116.76889 74.75371,96.873983 83.81657,113.48876 88.736056,100.77994 72.983824,80.324473 88.531445,61.626898 59.482665,83.202434 63.097226,98.378581 46.099688,99.960083",id:"path80"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 54.298951,116.76884 8.798278,-18.390305 11.65613,-1.504597 13.9827,3.905952 -29.253391,-17.577502 13.501158,-2.877961",id:"path84"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"M 74.753541,96.873944 59.48285,83.202394",id:"path88"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"M 68.174101,279.41319 8.1122745,221.40806",id:"path92"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"M -30.108794,239.3078 -4.8400279,204.7892 -63.699588,195.57323",id:"path96"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m -44.585788,181.03264 -9.587794,-52.64397 -22.365405,-11.61979",id:"path100"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"M -9.9558518,123.85732 -46.028084,104.34448 -73.823445,76.847213",id:"path104"}}),e("path",{staticStyle:{fill:"none",stroke:"#f5e102","stroke-width":"0.804686","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 119.23659,226.50962 8.17492,-44.97493",id:"path108"}}),e("g",{attrs:{id:"g158",transform:"matrix(0.35277777,0,0,-0.35277777,-426.4958,476.80156)"}},[e("g",{attrs:{id:"g160","clip-path":"url(#clipPath164)"}},[e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1293.3389,1392.7913 c 0,-8.532 -6.917,-15.449 -15.449,-15.449 -8.532,0 -15.448,6.917 -15.448,15.449 0,8.532 6.916,15.448 15.448,15.448 8.532,0 15.449,-6.916 15.449,-15.448",id:"path168"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1314.5254,1122.6628 c 0,-8.532 -6.917,-15.449 -15.449,-15.449 -8.531,0 -15.448,6.917 -15.448,15.449 0,8.532 6.917,15.448 15.448,15.448 8.532,0 15.449,-6.916 15.449,-15.448",id:"path172"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1590.1484,831.6384 c 0,-8.531 -6.917,-15.448 -15.448,-15.448 -8.532,0 -15.449,6.917 -15.449,15.448 0,8.532 6.917,15.449 15.449,15.449 8.531,0 15.448,-6.917 15.448,-15.449",id:"path176"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1795.834,791.031 c 0,-8.531 -6.916,-15.448 -15.448,-15.448 -8.532,0 -15.448,6.917 -15.448,15.448 0,8.532 6.916,15.449 15.448,15.449 8.532,0 15.448,-6.917 15.448,-15.449",id:"path180"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1195.5488,618.8904 c 0,-8.531 -6.916,-15.448 -15.448,-15.448 -8.532,0 -15.448,6.917 -15.448,15.448 0,8.532 6.916,15.449 15.448,15.449 8.532,0 15.448,-6.917 15.448,-15.449",id:"path184"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1070.8506,736.6404 c 0,-8.531 -6.917,-15.448 -15.449,-15.448 -8.531,0 -15.448,6.917 -15.448,15.448 0,8.532 6.917,15.449 15.448,15.449 8.532,0 15.449,-6.917 15.449,-15.449",id:"path188"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1435.2109,1121.5017 c 0,-8.532 -6.916,-15.449 -15.448,-15.449 -8.532,0 -15.448,6.917 -15.448,15.449 0,8.532 6.916,15.448 15.448,15.448 8.532,0 15.448,-6.916 15.448,-15.448",id:"path192"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1320.4775,845.7595 c 0,-8.531 -6.916,-15.448 -15.448,-15.448 -8.532,0 -15.448,6.917 -15.448,15.448 0,8.532 6.916,15.449 15.448,15.449 8.532,0 15.448,-6.917 15.448,-15.449",id:"path196"}}),e("path",{staticStyle:{fill:"#a09f9f","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{d:"m 1740.4131,1268.8713 c 0,-8.532 -6.917,-15.448 -15.448,-15.448 -8.532,0 -15.449,6.916 -15.449,15.448 0,8.532 6.917,15.449 15.449,15.449 8.531,0 15.448,-6.917 15.448,-15.449",id:"path200"}})])])]):t._e()]),e("g",{attrs:{id:"layer2",transform:"translate(104.65163,22.583996)"}},[e("router-link",{attrs:{to:{name:"plena"}}},[e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{fill:"#000000ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 111.83514,142.59655 c 0,19.68324 -15.951905,35.63444 -35.636552,35.63444 -19.675475,0 -35.630555,-15.9512 -35.630555,-35.63444 0,-19.68006 15.95508,-35.63126 35.630555,-35.63126 19.684647,0 35.636552,15.9512 35.636552,35.63126",id:"path146"}})]),e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"14.9996px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#ffffff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text152",x:"61.324688",y:"138.04619"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"61.324688 70.729431 78.469223 82.039124",y:"138.04619",id:"tspan148"}},[t._v(" Sala ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"57.049816 66.454559 70.02446 77.764236 86.328995",y:"154.02074",id:"tspan150"}},[t._v(" Plena ")])])])],1),e("router-link",{attrs:{to:{name:"gobierno"}}},[e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{fill:"#9c9c9cff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 181,145.303976 c 0,13.440833 -10.89589,24.336724 -24.33637,24.336724 -13.44119,0 -24.33708,-10.895891 -24.33708,-24.336724 0,-13.440833 10.89589,-24.336727 24.33708,-24.336727 13.44048,0 24.33637,10.895894 24.33637,24.336727",id:"path274"}})]),e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text210",x:"143.18192",y:"140.22478"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"143.18192 148.26932 152.45607 154.38719 158.57396 160.50508 165.13808 169.32487",y:"140.22478",id:"tspan206"}},[t._v(" Sala de ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"140.48811 146.47615 151.10918 155.7422 157.67332 161.86009 164.69182 169.32487",y:"150.81342",id:"tspan208"}},[t._v(" Gobierno ")])])])],1),e("router-link",{attrs:{to:{name:"sala_consulta"}}},[e("transition",{attrs:{name:"ScaleIn3",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_3,expression:"show_3"}],staticStyle:{fill:"#78def5ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 174.37502,84.303976 c 0,13.440833 -10.89589,24.336724 -24.33637,24.336724 -13.44119,0 -24.33708,-10.895891 -24.33708,-24.336724 0,-13.440833 10.89589,-24.336727 24.33708,-24.336727 13.44048,0 24.33637,10.895894 24.33637,24.336727",id:"path274"}})]),e("transition",{attrs:{name:"ScaleIn3",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_3,expression:"show_3"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"6.6198px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text282",x:"139.07451",y:"77.799919"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"139.07451 143.22511 146.64093 148.21645 151.63225 153.20778 156.98769 160.40352",y:"77.799919",id:"tspan276"}},[t._v(" Sala de ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"134.14275 138.65746 142.43736 146.21727 149.63307 153.41301 154.98851 156.92812 160.34392 161.91945 165.33528",y:"85.227341",id:"tspan278"}},[t._v(" Consulta y ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"131.58749 135.73811 139.15393 141.46425 144.88005 146.45558 149.8714 151.44691 155.22682 156.80232 161.31703 162.89256 166.3084 167.88387",y:"92.654762",id:"tspan280"}},[t._v(" Servicio Civil ")])])])],1),e("router-link",{attrs:{to:{name:"presidencia"}}},[e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{fill:"#ffc505ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 61.898846,44.398602 c 0,13.440833 -10.895894,24.336727 -24.336374,24.336727 -13.441186,0 -24.33708,-10.895894 -24.33708,-24.336727 0,-13.440833 10.895894,-24.336727 24.33708,-24.336727 13.44048,0 24.336374,10.895894 24.336374,24.336727",id:"path124"}})]),e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text156",x:"15.850492",y:"46.751667"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"15.850492 20.937902 23.769651 27.956419 32.143185 34.074291 38.707317 42.894085 47.527111 51.713894 53.644985",y:"46.751667",id:"tspan154"}},[t._v(" Presidencia ")])])])],1),e("router-link",{attrs:{to:{name:"vicepresidencia"}}},[e("transition",{attrs:{name:"ScaleIn3",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{fill:"#ffc505ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 16.888319,120.72073 c 0,13.44083 -10.8958942,24.33673 -24.3363745,24.33673 -13.4408335,0 -24.3367275,-10.8959 -24.3367275,-24.33673 0,-13.44083 10.895894,-24.336727 24.3367275,-24.336727 13.4404803,0 24.3363745,10.895897 24.3363745,24.336727",id:"path128"}})]),e("transition",{attrs:{name:"ScaleIn3",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"6.4593px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text304",x:"-29.727106",y:"122.39668"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"-29.727106 -25.790819 -24.253496 -20.920504 -17.587511 -13.899263 -11.644968 -8.3119755 -4.9789834 -3.4416754 0.24658744 3.5795801 7.2678275 10.600828 12.138144",y:"122.39668",id:"tspan302"}},[t._v(" Vicepresidencia ")])])])],1),e("router-link",{attrs:{to:{name:"seccion_primera"}}},[e("transition",{attrs:{name:"ScaleIn1",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_3,expression:"show_3"}],staticStyle:{fill:"#11a6d4ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 150.89667,26.122173 c 0,13.440833 -10.89589,24.336727 -24.33637,24.336727 -13.44084,0 -24.33708,-10.895894 -24.33708,-24.336727 0,-13.440833 10.89624,-24.3363745 24.33708,-24.3363745 13.44048,0 24.33637,10.8955415 24.33637,24.3363745",id:"path294"}})]),e("transition",{attrs:{name:"ScaleIn1",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_3,expression:"show_3"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text300",x:"111.91078",y:"24.534187"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"111.91078 116.99818 121.18497 125.37172 129.5585 131.48959 136.12263",y:"24.534187",id:"tspan296"}},[t._v(" Sección ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"112.35704 117.44446 120.2762 122.20732 129.09599 133.28276 136.1145",y:"33.63797",id:"tspan298"}},[t._v(" Primera ")])])])],1),e("router-link",{attrs:{to:{name:"seccion_segunda"}}},[e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{fill:"#11a6d4ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m -32.264067,50.755657 c 0,13.440833 -10.895894,24.336727 -24.336727,24.336727 -13.440833,0 -24.336727,-10.895894 -24.336727,-24.336727 0,-13.440833 10.895894,-24.336727 24.336727,-24.336727 13.440833,0 24.336727,10.895894 24.336727,24.336727",id:"path120"}})]),e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text134",x:"-71.108047",y:"49.697857"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"-71.108047 -66.020638 -61.83387 -57.647106 -53.460339 -51.529236 -46.896202",y:"49.697857",id:"tspan130"}},[t._v(" Sección ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"-72.682137 -67.594734 -63.407967 -58.774937 -54.141907 -49.508877 -44.875847",y:"58.80164",id:"tspan132"}},[t._v(" Segunda ")])])])],1),e("router-link",{attrs:{to:{name:"seccion_cuarta"}}},[e("transition",{attrs:{name:"ScaleIn1",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{fill:"#11a6d4ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m -55.978529,160.2153 c 0,13.44083 -10.895894,24.33673 -24.336727,24.33673 -13.440481,0 -24.336374,-10.8959 -24.336374,-24.33673 0,-13.44083 10.895893,-24.33637 24.336374,-24.33637 13.440833,0 24.336727,10.89554 24.336727,24.33637",id:"path256"}})]),e("transition",{attrs:{name:"ScaleIn1",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text262",x:"-95.702576",y:"158.94214"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"-95.702576 -90.615166 -86.428398 -82.241631 -78.054863 -76.123764 -71.49073",y:"158.94214",id:"tspan258"}},[t._v(" Sección ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"-93.154816 -87.62114 -82.988113 -78.801346 -75.969597 -73.592232",y:"168.04593",id:"tspan260"}},[t._v(" Cuarta ")])])])],1),e("router-link",{attrs:{to:{name:"seccion_tercera"}}},[e("transition",{attrs:{name:"ScaleIn3",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{fill:"#11a6d4ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 179.54025,251.17513 c 0,13.44083 -10.89625,24.33673 -24.33673,24.33673 -13.44083,0 -24.33672,-10.8959 -24.33672,-24.33673 0,-13.44083 10.89589,-24.33673 24.33672,-24.33673 13.44048,0 24.33673,10.8959 24.33673,24.33673",id:"path222"}})]),e("transition",{attrs:{name:"ScaleIn3",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text244",x:"141.13742",y:"249.53419"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"141.13742 146.22484 150.41161 154.59837 158.78514 160.71623 165.34926",y:"249.53419",id:"tspan232"}},[t._v(" Sección ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"142.33017 146.36357 150.55035 153.3821 157.56886 161.75563 164.58739",y:"258.638",id:"tspan234"}},[t._v(" Tercera ")])])])],1),e("router-link",{attrs:{to:{name:"seccion_quinta"}}},[e("transition",{attrs:{name:"ScaleIn1",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{fill:"#11a6d4ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 95.707269,280.97346 c 0,13.44083 -10.895894,24.33673 -24.336374,24.33673 -13.441186,0 -24.33708,-10.8959 -24.33708,-24.33673 0,-13.44083 10.895894,-24.33637 24.33708,-24.33637 13.44048,0 24.336374,10.89554 24.336374,24.33637",id:"path226"}})]),e("transition",{attrs:{name:"ScaleIn1",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_2,expression:"show_2"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text244",x:"141.13742",y:"249.53419"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"55.665722 60.753124 64.939896 69.126678 73.313431 75.244537 79.877563",y:"278.94705",id:"tspan236"}},[t._v(" Sección ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"58.213482 64.201538 68.834564 70.765671 75.398697 77.776077",y:"288.05087",id:"tspan238"}},[t._v(" Quinta ")])])])],1),e("router-link",{attrs:{to:{name:"contenciosa"}}},[e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("path",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{fill:"#78def5ff","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352778"},attrs:{d:"m 15.450326,209.05985 c 0,13.44119 -10.896247,24.33673 -24.3367272,24.33673 -13.4408328,0 -24.3367268,-10.89554 -24.3367268,-24.33673 0,-13.44083 10.895894,-24.33637 24.3367268,-24.33637 13.4404802,0 24.3367272,10.89554 24.3367272,24.33637",id:"path230"}})]),e("transition",{attrs:{name:"ScaleIn2",appear:""}},[e("text",{directives:[{name:"show",rawName:"v-show",value:t.show_1,expression:"show_1"}],staticStyle:{"pointer-events":"none","font-variant":"normal","font-weight":"bold","font-stretch":"normal","font-size":"8.1139px","font-family":"Helvetica","-inkscape-font-specification":"Helvetica-Bold","writing-mode":"lr-tb",fill:"#000000","fill-opacity":"1","fill-rule":"nonzero",stroke:"none","stroke-width":"0.352777"},attrs:{id:"text244",x:"141.13742",y:"249.53419"}},[e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"-28.394175 -23.306757 -19.119997 -17.18889 -13.002123 -11.071009 -5.9836144 -4.0525079 0.13425986 4.7673011",y:"205.43524",id:"tspan240"}},[t._v(" Sala Plena ")]),e("tspan",{staticStyle:{"stroke-width":"0.352777"},attrs:{x:"-32.280727 -26.747049 -22.114023 -17.480989 -15.103617 -10.916849 -6.2838235 -2.0970557 -0.16594918 4.467092 8.6538525",y:"216.02385",id:"tspan242"}},[t._v(" Contenciosa ")])])])],1)],1)],1)])])},i=[],o={name:"magistrados",data:function(){return{show_1:!1,show_2:!1,show_3:!1,show_network:!1,switch_height_val:!1}},methods:{show_map:function(){var t=this;this.show_1=!this.show_1,setTimeout((function(){t.show_2=!t.show_2}),300),setTimeout((function(){t.show_3=!t.show_3}),600),setTimeout((function(){t.show_network=!t.show_network}),800),setTimeout((function(){t.switch_height(),t.switch_height_val=!t.switch_height_val}),1600)},switch_height:function(){var t=this;setTimeout((function(){t.switch_height_val=!t.switch_height_val}),100)}},mounted:function(){var t=this;setTimeout((function(){t.show_map()}),1e3)}},n=o,r=(e("003e"),e("2877")),l=Object(r["a"])(n,s,i,!1,null,"fd339a90",null);a["default"]=l.exports},f5a7:function(t,a,e){},fcba:function(t,a,e){"use strict";e("2498")},fe6b:function(t,a,e){"use strict";e("f5a7")}}]);
//# sourceMappingURL=quienes.d538df27.js.map