(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contenciosa"],{"1ca5":function(o,a,i){},6081:function(o,a,i){"use strict";i.r(a);var t=function(){var o=this,a=o.$createElement,i=o._self._c||a;return i("div",{staticClass:"contenciosa"},[0==o.magistrado_index||o.is_mobile?o._e():i("svg",{staticClass:"left-arrow",attrs:{viewBox:"0 0 19.051315 21.998528",preserveAspectRatio:"xMidYMin meet"},on:{click:o.left_callback}},[i("g",{attrs:{id:"layer1",transform:"translate(-97.060402,-132.61559)"}},[i("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 115.74183,143.61485 v 10.67894 l -9.24807,-5.33965 -9.248421,-5.33929 9.248421,-5.33929 9.24807,-5.33965 z",id:"path272"}})])]),o.magistrado_index<o.magistrados.length-1&&!o.is_mobile?i("svg",{staticClass:"right-arrow",attrs:{viewBox:"0 0 19.236232 22.097601",preserveAspectRatio:"xMidYMin meet"},on:{click:o.right_callback}},[i("g",{attrs:{id:"layer1",transform:"translate(-96.875488,-132.56605)"}},[i("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 97.245376,143.61485 v 10.67894 l 9.248074,-5.33965 9.24842,-5.33929 -9.24842,-5.33929 -9.248074,-5.33965 z",id:"path272"}})])]):o._e(),i("transition",{attrs:{name:o.transition_class}},[o.current_magistrado&&!o.is_mobile?i("div",{key:o.current_magistrado.nombre,class:o.current_magistrado.cssClass.container},[i("span",{class:o.current_magistrado.cssClass.titulo},[o._v(o._s(o.current_magistrado.title))]),i("span",{class:o.current_magistrado.cssClass.magistrado},[o._v(o._s(o.current_magistrado.magistrado))]),i("p",{class:o.current_magistrado.cssClass.nombre},[o._v(" "+o._s(o.current_magistrado.nombre)+" ")]),i("img",{class:o.current_magistrado.cssClass.foto,attrs:{src:"/assets/images/"+o.current_magistrado.foto,alt:"magistrado",loading:"lazy"}}),o._l(o.current_magistrado.cargo,(function(a,t){return i("span",{key:a,class:[o.current_magistrado.cssClass.cargos,{cargo__margin:t+1==o.current_magistrado.cargo.length}]},[o._v(o._s(a))])})),i("span",{class:o.current_magistrado.cssClass.funcion},[o._v(o._s(o.current_magistrado.funcion))]),i("span",{class:o.current_magistrado.cssClass.comision},[o._v(o._s(o.current_magistrado.comision))])],2):o._e()]),o.is_mobile?o._l(o.magistrados,(function(a,t){return i("div",{key:a.nombre,class:["contenciosa__mobile-container"]},[0==t?i("span",{class:o.current_magistrado.cssClass.titulo},[o._v(o._s(o.current_magistrado.title))]):o._e(),i("span",{class:a.cssClass.magistrado},[o._v(o._s(a.magistrado))]),i("span",{class:a.cssClass.nombre},[o._v(" "+o._s(a.nombre)+" ")]),i("div",{staticClass:"row__mobile"},[i("div",{staticClass:"column__mobile--centrado"},[i("img",{class:a.cssClass.foto,attrs:{src:"/assets/images/"+a.foto,alt:"magistrado",loading:"lazy"}})]),i("div",{staticClass:"column__mobile"},[o._l(a.cargo,(function(t,n){return i("span",{key:t,class:[a.cssClass.cargos,{cargo__margin:n+1==a.cargo.length}]},[o._v(o._s(t))])})),i("span",{class:a.cssClass.funcion},[o._v(o._s(a.funcion))]),i("span",{class:a.cssClass.comision},[o._v(o._s(a.comision))])],2)])])})):o._e()],2)},n=[],s={name:"contenciosa",data:function(){return{transition_class:"SlideInXRight",is_mobile:!1,magistrados:[{cssClass:{container:"contenciosa__content-contenciosa",titulo:"title_contenciosa",magistrado:"hidden_contenciosa",nombre:"nombre_contenciosa",foto:"hidden_contenciosa",cargos:"hidden_contenciosa",funcion:"hidden_contenciosa",comision:"hidden_contenciosa"},title:"Sala Plena Contenciosa",magistrado:"",nombre:"Es la unión de 27 Consejeros de Estado, que cumplen funciones judiciales asignadas a la Corporación, entre otras: i) unifica las posiciones que existen y da pautas para que los Tribunales y Juzgados administrativos resuelvan casos similares con criterio unificado; ii) conoce las demandas de pérdida de investidura de los Congresistas de la República; iii) controla la legalidad de los actos generales proferidos por las autoridades nacionales durante los Estados de Excepción.",foto:null,cargo:[""],funcion:"",comision:""},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrada",nombre:"Marta Nubia Velásquez Rico",foto:"Mag Marta Nubia Velásquez Rico.jpg",cargo:["Vicepresidenta del consejo de estado"],funcion:"Seccion Tercera",comision:"Integrante de las comisiones de relatoria y de calidad y archivo."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrada",nombre:"Nubia Margoth Peña Garzón",foto:"Mag Nubia Peña Garzón.png",cargo:["Presidenta","Seccion Primera"],funcion:"",comision:"Integrante de las comisiones de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial; y de calidad y archivo."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Hernando Sánchez Sánchez",foto:"Mag Hernando Sánchez Sánchez.jpg",cargo:[],funcion:"Seccion Primera",comision:"Integrante de las comisiones de relatoría; de género; y de calidad de archivo."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Oswaldo Giraldo López",foto:"Mag Oswaldo Giraldo López.jpg",cargo:[],funcion:"Seccion Primera",comision:"Integrante de las comisiones normativa y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Roberto Augusto Serrato Valdés",foto:"Mag Roberto Augusto Serrato Valdés.jpg",cargo:["Seccion Primera"],funcion:"Coordinador de la comisión de tecnologías de la información y las comunicaciones.",comision:"Integrante de la comisión de presupuesto."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"César Palomino Cortés",foto:"Mag César Palomino Cortés.jpg",cargo:["Presidente","Seccion Segunda"],funcion:"Coordinador de la comisión de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial.",comision:"Integrante de la comisión de relatoría."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Carmelo Perdomo Cuéter",foto:"Mag Carmelo Perdomo Cuéter.jpg",cargo:[],funcion:"Seccion Segunda",comision:"Integrante de las comisiones normativa y de ética, transparencia y rendición de cuentas."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Gabriel Valbuena Hernández",foto:"Mag Gabriel Valbuena Hernández.jpg",cargo:[],funcion:"Seccion Segunda",comision:"Integrante de la comisión de tecnologías de la información y las comunicaciones."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Rafael Francisco Suárez Vargas",foto:"Mag Rafael Francisco Suárez Vargas.jpg",cargo:[],funcion:"Seccion Segunda",comision:"Integrante de la comisión de relatoría."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrada",nombre:"Sandra Lisset Ibarra Vélez",foto:"Mag Sandra Lisset Ibarra.jpg",cargo:[],funcion:"Seccion Segunda",comision:"Integrante de las comisiones normativa; ética, transparencia y rendición de cuentas; y de género."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"William Hernández Gómez",foto:"Mag William Hernández Gómez.jpg",cargo:[],funcion:"Seccion Segunda",comision:"Coordinador de la comisión normativa."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_contenciosa",comision:"hidden_contenciosa"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Guillermo Sánchez Luque",foto:"Mag Guillermo Sánchez Luque.jpg",cargo:["Presidente","Seccion Tercera"],funcion:"",comision:""},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"hidden_contenciosa"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Alberto Montaña Plata",foto:"Mag Alberto Montaña Plata.png",cargo:[],funcion:"Seccion Tercera",comision:""},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrada",nombre:"María Adriana Marín",foto:"Mag María Adriana Marín.jpg",cargo:[],funcion:"Seccion Tercera",comision:"Integrante de la comisión de género."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Nicolás Yepes Corrales",foto:"Mag Nicolás Yepes Corrales.png",cargo:[],funcion:"Seccion Tercera",comision:"Integrante de la comisión de ética, transparencia y rendición de cuentas."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Jaime Enrique Rodríguez Navas",foto:"Mag Jaime Enrique Rodríguez Navas.jpg",cargo:[],funcion:"Seccion Tercera",comision:"Integrante de las comisiones de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial, y de relatoría."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Martín Bermúdez Muñoz",foto:"Mag Martín Bermúdez Muñoz.png",cargo:[],funcion:"Seccion Tercera",comision:"Integrante de la comisión normativa."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"José Roberto Sáchica Méndez",foto:"FINAL SACHICA.jpg",cargo:[],funcion:"Seccion Tercera",comision:"Inició su período constitucional a partir de julio de 2020."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Ramiro Pazos Guerrero",foto:"Mag Ramiro Pazos Guerrero.jpg",cargo:[],funcion:"Seccion Tercera",comision:"Integrante de las comisiones de presupuesto y de género."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrada",nombre:"Stella Jeannette Carvajal Basto",foto:"Mag Stella Jeannette Carvajal Basto.jpg",cargo:["Presidenta","Seccion Cuarta"],funcion:"Presidenta de la comisión de género de la Rama Judicial.",comision:"Integrante de las comisiones normativa y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Julio Roberto Piza Rodríguez",foto:"Mag Julio Roberto Piza Rodríguez.jpg",cargo:["Seccion Cuarta"],funcion:"Coordinador de la comisión de presupuesto.",comision:"Integrante de la comisión de ética, transparencia y rendición de cuentas."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Milton Chaves García",foto:"Mag Milton Chaves García.jpg",cargo:[],funcion:"Seccion Cuarta",comision:"Integrante de las comisiones normativa; presupuesto; y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Myriam Stella Gutiérrez Agüello",foto:"SinFoto.png",cargo:[],funcion:"Seccion Cuarta",comision:"Inició su período constitucional a partir de diciembre de 2020."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_contenciosa",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Luis Alberto Álvarez Parra",foto:"Mag Luis Alberto Álvarez Parra.png",cargo:["Presidente","Seccion Quinta"],funcion:"",comision:"Integrante de las comisiones normativa; de calidad y archivo; y de género."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrada",nombre:"Lucy Jeannette Bermúdez Bermúdez",foto:"Mag Lucy Jeannette Bermúdez Bermúdez.jpg",cargo:[],funcion:"Seccion Quinta",comision:"Integrante de las comisiones normativa y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrada",nombre:"Rocío Araújo Oñate",foto:"Mag Rocío Araújo Oñate.jpg",cargo:["Seccion Quinta"],funcion:"Coordinadora de la comisión de Relatoría.",comision:"Integrante de las comisiones normativa; de ética, transparencia y rendición de cuentas; y de género."},{cssClass:{container:"contenciosa__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena Contenciosa",magistrado:"Magistrado",nombre:"Carlos Enrique Moreno Rubio",foto:"Mag Carlos Enrique Moreno Rubio.jpg",cargo:[],funcion:"Seccion Quinta",comision:"Integrante de la comisión de género."}],magistrado_index:0}},methods:{right_callback:function(){this.magistrado_index+=1},left_callback:function(){this.magistrado_index-=1},handleResize:function(){var o=window.matchMedia("(max-width: 720px), (max-height: 410px)");this.is_mobile=!!o.matches}},computed:{current_magistrado:function(){return this.magistrados[this.magistrado_index]}},watch:{magistrado_index:function(o,a){this.transition_class=o>a?"SlideInXRight":"SlideInXLeft"}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},e=s,r=(i("fb46"),i("2877")),c=Object(r["a"])(e,t,n,!1,null,"7c69cc86",null);a["default"]=c.exports},fb46:function(o,a,i){"use strict";i("1ca5")}}]);
//# sourceMappingURL=contenciosa.e051913d.js.map