(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gobierno"],{"966e":function(a,o,i){"use strict";i("d934")},c4f4:function(a,o,i){"use strict";i.r(o);var s=function(){var a=this,o=a.$createElement,i=a._self._c||o;return i("div",{staticClass:"gobierno"},[0==a.magistrado_index||a.is_mobile?a._e():i("svg",{staticClass:"left-arrow",attrs:{viewBox:"0 0 19.051315 21.998528",preserveAspectRatio:"xMidYMin meet"},on:{click:a.left_callback}},[i("g",{attrs:{id:"layer1",transform:"translate(-97.060402,-132.61559)"}},[i("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 115.74183,143.61485 v 10.67894 l -9.24807,-5.33965 -9.248421,-5.33929 9.248421,-5.33929 9.24807,-5.33965 z",id:"path272"}})])]),a.magistrado_index<a.magistrados.length-1&&!a.is_mobile?i("svg",{staticClass:"right-arrow",attrs:{viewBox:"0 0 19.236232 22.097601",preserveAspectRatio:"xMidYMin meet"},on:{click:a.right_callback}},[i("g",{attrs:{id:"layer1",transform:"translate(-96.875488,-132.56605)"}},[i("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 97.245376,143.61485 v 10.67894 l 9.248074,-5.33965 9.24842,-5.33929 -9.24842,-5.33929 -9.248074,-5.33965 z",id:"path272"}})])]):a._e(),i("transition",{attrs:{name:a.transition_class}},[a.current_magistrado&&!a.is_mobile?i("div",{key:a.current_magistrado.nombre,class:a.current_magistrado.cssClass.container},[i("span",{class:a.current_magistrado.cssClass.titulo},[a._v(a._s(a.current_magistrado.title))]),i("span",{class:a.current_magistrado.cssClass.magistrado},[a._v(a._s(a.current_magistrado.magistrado))]),i("p",{class:a.current_magistrado.cssClass.nombre},[a._v(" "+a._s(a.current_magistrado.nombre)+" ")]),i("img",{class:a.current_magistrado.cssClass.foto,attrs:{src:"/assets/images/"+a.current_magistrado.foto,alt:"magistrado",loading:"lazy"}}),a._l(a.current_magistrado.cargo,(function(o,s){return i("span",{key:o,class:[a.current_magistrado.cssClass.cargos,{cargo__margin:s+1==a.current_magistrado.cargo.length}]},[a._v(a._s(o))])})),i("span",{class:a.current_magistrado.cssClass.funcion},[a._v(a._s(a.current_magistrado.funcion))]),i("span",{class:a.current_magistrado.cssClass.comision},[a._v(a._s(a.current_magistrado.comision))])],2):a._e()]),a.is_mobile?a._l(a.magistrados,(function(o,s){return i("div",{key:o.nombre,class:["gobierno__mobile-container"]},[0==s?i("span",{class:a.current_magistrado.cssClass.titulo},[a._v(a._s(a.current_magistrado.title))]):a._e(),i("span",{class:o.cssClass.magistrado},[a._v(a._s(o.magistrado))]),i("span",{class:o.cssClass.nombre},[a._v(" "+a._s(o.nombre)+" ")]),i("div",{staticClass:"row__mobile"},[i("div",{staticClass:"column__mobile--centrado"},[i("img",{class:o.cssClass.foto,attrs:{src:"/assets/images/"+o.foto,alt:"magistrado",loading:"lazy"}})]),i("div",{staticClass:"column__mobile"},[a._l(o.cargo,(function(s,t){return i("span",{key:s,class:[o.cssClass.cargos,{cargo__margin:t+1==o.cargo.length}]},[a._v(a._s(s))])})),i("span",{class:o.cssClass.funcion},[a._v(a._s(o.funcion))]),i("span",{class:o.cssClass.comision},[a._v(a._s(o.comision))])],2)])])})):a._e()],2)},t=[],e={name:"gobierno",data:function(){return{transition_class:"SlideInXRight",is_mobile:!1,magistrados:[{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala de Gobierno",magistrado:"Magistrado",nombre:"Álvaro Namén Vargas",foto:"Mag Álvaro Namén Vargas.jpg",cargo:["Presidente del consejo de estado","Presidente de la Sala Plena"],funcion:"Sala de Consulta y Servicio Civil",comision:"Integrante de todas las comisiones de trabajo de Sala Plena."},{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala de Gobierno",magistrado:"Magistrada",nombre:"Marta Nubia Velásquez Rico",foto:"Mag Marta Nubia Velásquez Rico.jpg",cargo:["Vicepresidenta del consejo de estado"],funcion:"Sección Tercera",comision:"Integrante de las comisiones de relatoria y de calidad y archivo."},{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala de Gobierno",magistrado:"Magistrado",nombre:"Germán Bula Escobar",foto:"Mag Germán Bula Escobar.jpg",cargo:["Presidente","Sala de Consulta y Servicio Civil"],funcion:"Coordinador de la comisión de ética, transparencia y rendición de cuentas.",comision:"Integrante de la comisión de calidad y archivo, y de género."},{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala de Gobierno",magistrado:"Magistrada",nombre:"Nubia Margoth Peña Garzón",foto:"Mag Nubia Peña Garzón.png",cargo:["Presidenta","Sección Primera"],funcion:"",comision:"Integrante de las comisiones de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial; y de calidad y archivo."},{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala de Gobierno",magistrado:"Magistrado",nombre:"César Palomino Cortés",foto:"Mag César Palomino Cortés.jpg",cargo:["Presidente","Sección Segunda"],funcion:"Coordinador de la comisión de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial.",comision:"Integrante de la comisión de relatoría."},{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_gobierno",comision:"hidden_gobierno"},title:"Sala de Gobierno",magistrado:"Magistrado",nombre:"Guillermo Sánchez Luque",foto:"Mag Guillermo Sánchez Luque.jpg",cargo:["Presidente","Sección Tercera"],funcion:"",comision:""},{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala de Gobierno",magistrado:"Magistrada",nombre:"Stella Jeannette Carvajal Basto",foto:"Mag Stella Jeannette Carvajal Basto.jpg",cargo:["Presidenta","Sección Cuarta"],funcion:"Presidenta de la comisión de género de la Rama Judicial.",comision:"Integrante de las comisiones normativa y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"gobierno__content-magistrado",titulo:"title_gobierno",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_gobierno",comision:"comision"},title:"Sala de Gobierno",magistrado:"Magistrado",nombre:"Luis Alberto Álvarez Parra",foto:"Mag Luis Alberto Álvarez Parra.png",cargo:["Presidente","Sección Quinta"],funcion:"",comision:"Integrante de las comisiones normativa; de calidad y archivo; y de género."}],magistrado_index:0}},methods:{right_callback:function(){this.magistrado_index+=1},left_callback:function(){this.magistrado_index-=1},handleResize:function(){var a=window.matchMedia("(max-width: 720px), (max-height: 410px)");this.is_mobile=!!a.matches}},computed:{current_magistrado:function(){return this.magistrados[this.magistrado_index]}},watch:{magistrado_index:function(a,o){this.transition_class=a>o?"SlideInXRight":"SlideInXLeft"}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},r=e,n=(i("966e"),i("2877")),c=Object(n["a"])(r,s,t,!1,null,"1613a5b9",null);o["default"]=c.exports},d934:function(a,o,i){}}]);
//# sourceMappingURL=gobierno.c524b9b5.js.map