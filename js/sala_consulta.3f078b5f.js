(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sala_consulta"],{"0ba5":function(a,s,o){},"0e9d":function(a,s,o){"use strict";o("0ba5")},"63c9":function(a,s,o){"use strict";o.r(s);var t=function(){var a=this,s=a.$createElement,o=a._self._c||s;return o("div",{staticClass:"consulta"},[0==a.magistrado_index||a.is_mobile?a._e():o("svg",{staticClass:"left-arrow",attrs:{viewBox:"0 0 19.051315 21.998528",preserveAspectRatio:"xMidYMin meet"},on:{click:a.left_callback}},[o("g",{attrs:{id:"layer1",transform:"translate(-97.060402,-132.61559)"}},[o("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 115.74183,143.61485 v 10.67894 l -9.24807,-5.33965 -9.248421,-5.33929 9.248421,-5.33929 9.24807,-5.33965 z",id:"path272"}})])]),a.magistrado_index<a.magistrados.length-1&&!a.is_mobile?o("svg",{staticClass:"right-arrow",attrs:{viewBox:"0 0 19.236232 22.097601",preserveAspectRatio:"xMidYMin meet"},on:{click:a.right_callback}},[o("g",{attrs:{id:"layer1",transform:"translate(-96.875488,-132.56605)"}},[o("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 97.245376,143.61485 v 10.67894 l 9.248074,-5.33965 9.24842,-5.33929 -9.24842,-5.33929 -9.248074,-5.33965 z",id:"path272"}})])]):a._e(),o("transition",{attrs:{name:a.transition_class}},[a.current_magistrado&&!a.is_mobile?o("div",{key:a.current_magistrado.nombre,class:a.current_magistrado.cssClass.container},[o("span",{class:a.current_magistrado.cssClass.titulo},[a._v(a._s(a.current_magistrado.title))]),o("span",{class:a.current_magistrado.cssClass.magistrado},[a._v(a._s(a.current_magistrado.magistrado))]),o("p",{class:a.current_magistrado.cssClass.nombre},[a._v(" "+a._s(a.current_magistrado.nombre)+" ")]),o("img",{class:a.current_magistrado.cssClass.foto,attrs:{src:"http://consejodeestado.gov.co/especiales/rendicionCuentas2020/assets/images/"+a.current_magistrado.foto,alt:"magistrado",loading:"lazy"}}),a._l(a.current_magistrado.cargo,(function(s,t){return o("span",{key:s,class:[a.current_magistrado.cssClass.cargos,{cargo__margin:t+1==a.current_magistrado.cargo.length}]},[a._v(a._s(s))])})),o("span",{class:a.current_magistrado.cssClass.funcion},[a._v(a._s(a.current_magistrado.funcion))]),o("span",{class:a.current_magistrado.cssClass.comision},[a._v(a._s(a.current_magistrado.comision))])],2):a._e()]),a.is_mobile?a._l(a.magistrados,(function(s,t){return o("div",{key:s.nombre,class:["consulta__mobile-container"]},[0==t?o("span",{class:a.current_magistrado.cssClass.titulo},[a._v(a._s(a.current_magistrado.title))]):a._e(),o("span",{class:s.cssClass.magistrado},[a._v(a._s(s.magistrado))]),o("span",{class:s.cssClass.nombre},[a._v(" "+a._s(s.nombre)+" ")]),o("div",{staticClass:"row__mobile"},[o("div",{staticClass:"column__mobile--centrado"},[o("img",{class:s.cssClass.foto,attrs:{src:"http://consejodeestado.gov.co/especiales/rendicionCuentas2020/assets/images/"+s.foto,alt:"magistrado",loading:"lazy"}})]),o("div",{staticClass:"column__mobile"},[a._l(s.cargo,(function(t,i){return o("span",{key:t,class:[s.cssClass.cargos,{cargo__margin:i+1==s.cargo.length}]},[a._v(a._s(t))])})),o("span",{class:s.cssClass.funcion},[a._v(a._s(s.funcion))]),o("span",{class:s.cssClass.comision},[a._v(a._s(s.comision))])],2)])])})):a._e()],2)},i=[],n={name:"consulta",data:function(){return{transition_class:"SlideInXRight",is_mobile:!1,magistrados:[{cssClass:{container:"consulta__content-consulta",titulo:"title_consulta",magistrado:"hidden_consulta",nombre:"nombre_consulta",foto:"hidden_consulta",cargos:"hidden_consulta",funcion:"hidden_consulta",comision:"hidden_consulta"},title:"Sala de Consulta y Servicio Civil",magistrado:"",nombre:"La conforman cuatro magistrados que actúan como Cuerpo Supremo Consultivo del Gobierno en asuntos de la Administración.",foto:null,cargo:[""],funcion:"",comision:""},{cssClass:{container:"consulta__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_consulta",comision:"comision"},title:"Sala de Consulta y Servicio Civil",magistrado:"Magistrado",nombre:"Álvaro Namén Vargas",foto:"Mag Álvaro Namén Vargas.jpg",cargo:["Presidente del Consejo de Estado","Presidente de la Sala Plena"],funcion:"",comision:"Integrante de todas las comisiones de trabajo de Sala Plena."},{cssClass:{container:"consulta__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala de Consulta y Servicio Civil",magistrado:"Magistrado",nombre:"Germán Bula Escobar",foto:"Mag Germán Bula Escobar.jpg",cargo:["Presidente","Sala de Consulta y Servicio Civil"],funcion:"Coordinador de la comisión de ética, transparencia y rendición de cuentas.",comision:"Integrante de la comisión de calidad y archivo, y de género."},{cssClass:{container:"consulta__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_consulta",comision:"comision"},title:"Sala de Consulta y Servicio Civil",magistrado:"Magistrado",nombre:"Édgar González López",foto:"Mag Édgar González López.jpg",cargo:[],funcion:"Sala de Consulta y Servicio Civil",comision:"Coordinador de la comisión normativa."},{cssClass:{container:"consulta__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_consulta",comision:"comision"},title:"Sala de Consulta y Servicio Civil",magistrado:"Magistrado",nombre:"Oscar Dario Amaya",foto:"Mag Oscar Dario Amaya.jpg",cargo:[],funcion:"Sala de Consulta y Servicio Civil",comision:"Integrande de la comisión de calidad y archivo."}],magistrado_index:0}},methods:{right_callback:function(){this.magistrado_index+=1},left_callback:function(){this.magistrado_index-=1},handleResize:function(){var a=window.matchMedia("(max-width: 720px), (max-height: 410px)");this.is_mobile=!!a.matches}},computed:{current_magistrado:function(){return this.magistrados[this.magistrado_index]}},watch:{magistrado_index:function(a,s){this.transition_class=a>s?"SlideInXRight":"SlideInXLeft"}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},e=n,r=(o("0e9d"),o("2877")),c=Object(r["a"])(e,t,i,!1,null,"c3ad415a",null);s["default"]=c.exports}}]);