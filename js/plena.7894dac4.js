(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plena"],{d32e:function(a,o,i){"use strict";i.r(o);var t=function(){var a=this,o=a.$createElement,i=a._self._c||o;return i("div",{staticClass:"plena"},[0==a.magistrado_index||a.is_mobile?a._e():i("svg",{staticClass:"left-arrow",attrs:{viewBox:"0 0 19.051315 21.998528",preserveAspectRatio:"xMidYMin meet"},on:{click:a.left_callback}},[i("g",{attrs:{id:"layer1",transform:"translate(-97.060402,-132.61559)"}},[i("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 115.74183,143.61485 v 10.67894 l -9.24807,-5.33965 -9.248421,-5.33929 9.248421,-5.33929 9.24807,-5.33965 z",id:"path272"}})])]),a.magistrado_index<a.magistrados.length-1&&!a.is_mobile?i("svg",{staticClass:"right-arrow",attrs:{viewBox:"0 0 19.236232 22.097601",preserveAspectRatio:"xMidYMin meet"},on:{click:a.right_callback}},[i("g",{attrs:{id:"layer1",transform:"translate(-96.875488,-132.56605)"}},[i("path",{staticStyle:{fill:"none",stroke:"#7ae0f7","stroke-width":"0.739775","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-dasharray":"none","stroke-opacity":"1"},attrs:{d:"m 97.245376,143.61485 v 10.67894 l 9.248074,-5.33965 9.24842,-5.33929 -9.24842,-5.33929 -9.248074,-5.33965 z",id:"path272"}})])]):a._e(),i("transition",{attrs:{name:a.transition_class}},[a.current_magistrado&&!a.is_mobile?i("div",{key:a.current_magistrado.nombre,class:a.current_magistrado.cssClass.container},[i("span",{class:a.current_magistrado.cssClass.titulo},[a._v(a._s(a.current_magistrado.title))]),i("span",{class:a.current_magistrado.cssClass.magistrado},[a._v(a._s(a.current_magistrado.magistrado))]),i("p",{class:a.current_magistrado.cssClass.nombre},[a._v(" "+a._s(a.current_magistrado.nombre)+" ")]),i("img",{class:a.current_magistrado.cssClass.foto,attrs:{src:"http://consejodeestado.gov.co/especiales/rendicionCuentas2020/assets/images/"+a.current_magistrado.foto,alt:"magistrado",loading:"lazy"}}),a._l(a.current_magistrado.cargo,(function(o,t){return i("span",{key:o,class:[a.current_magistrado.cssClass.cargos,{cargo__margin:t+1==a.current_magistrado.cargo.length}]},[a._v(a._s(o))])})),i("span",{class:a.current_magistrado.cssClass.funcion},[a._v(a._s(a.current_magistrado.funcion))]),i("span",{class:a.current_magistrado.cssClass.comision},[a._v(a._s(a.current_magistrado.comision))])],2):a._e()]),a.is_mobile?a._l(a.magistrados,(function(o,t){return i("div",{key:o.nombre,class:["plena__mobile-container"]},[0==t?i("span",{class:a.current_magistrado.cssClass.titulo},[a._v(a._s(a.current_magistrado.title))]):a._e(),i("span",{class:o.cssClass.magistrado},[a._v(a._s(o.magistrado))]),i("span",{class:o.cssClass.nombre},[a._v(" "+a._s(o.nombre)+" ")]),i("div",{staticClass:"row__mobile"},[i("div",{staticClass:"column__mobile--centrado"},[i("img",{class:o.cssClass.foto,attrs:{src:"http://consejodeestado.gov.co/especiales/rendicionCuentas2020/assets/images/"+o.foto,alt:"magistrado",loading:"lazy"}})]),i("div",{staticClass:"column__mobile"},[a._l(o.cargo,(function(t,n){return i("span",{key:t,class:[o.cssClass.cargos,{cargo__margin:n+1==o.cargo.length}]},[a._v(a._s(t))])})),i("span",{class:o.cssClass.funcion},[a._v(a._s(o.funcion))]),i("span",{class:o.cssClass.comision},[a._v(a._s(o.comision))])],2)])])})):a._e()],2)},n=[],e={name:"plena",data:function(){return{transition_class:"SlideInXRight",is_mobile:!1,magistrados:[{cssClass:{container:"plena__content-plena",titulo:"title_plena",magistrado:"hidden_plena",nombre:"nombre_plena",foto:"hidden_plena",cargos:"hidden_plena",funcion:"hidden_plena",comision:"hidden_plena"},title:"Sala Plena",magistrado:"",nombre:"Se denomina a la reunión de los 31 magistrados del Consejo de Estado, tiene a cargo funciones administrativas y electorales, y resolver las solicitudes disciplinarias contra el procurador general de la Nación, tal como lo dispone la normatividad vigente.",foto:null,cargo:[""],funcion:"",comision:""},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Álvaro Namén Vargas",foto:"Mag Álvaro Namén Vargas.jpg",cargo:["Presidente del Consejo de Estado","Presidente de la Sala Plena"],funcion:"Sala de Consulta y Servicio Civil",comision:"Integrante de todas las comisiones de trabajo de Sala Plena."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"Marta Nubia Velásquez Rico",foto:"Mag Marta Nubia Velásquez Rico.jpg",cargo:["Vicepresidenta del Consejo de Estado"],funcion:"Sección Tercera",comision:"Integrante de las comisiones de relatoria y de calidad y archivo."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Germán Bula Escobar",foto:"Mag Germán Bula Escobar.jpg",cargo:["Presidente","Sala de Consulta y Servicio Civil"],funcion:"Coordinador de la comisión de ética, transparencia y rendición de cuentas.",comision:"Integrante de la comisión de calidad y archivo, y de género."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Édgar González López",foto:"Mag Édgar González López.jpg",cargo:[],funcion:"Sala de Consulta y Servicio Civil",comision:"Coordinador de la comisión normativa."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Oscar Dario Amaya",foto:"Mag Oscar Dario Amaya.jpg",cargo:[],funcion:"Sala de Consulta y Servicio Civil",comision:"Integrande de la comisión de calidad y archivo."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"Nubia Margoth Peña Garzón",foto:"Mag Nubia Peña Garzón.png",cargo:["Presidenta","Sección Primera"],funcion:"",comision:"Integrante de las comisiones de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial; y de calidad y archivo."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Hernando Sánchez Sánchez",foto:"Mag Hernando Sánchez Sánchez.jpg",cargo:[],funcion:"Sección Primera",comision:"Integrante de las comisiones de relatoría; de género; y de calidad de archivo."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Oswaldo Giraldo López",foto:"Mag Oswaldo Giraldo López.jpg",cargo:[],funcion:"Sección Primera",comision:"Integrante de las comisiones normativa y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Roberto Augusto Serrato Valdés",foto:"Mag Roberto Augusto Serrato Valdés.jpg",cargo:["Sección Primera"],funcion:"Coordinador de la comisión de tecnologías de la información y las comunicaciones.",comision:"Integrante de la comisión de presupuesto."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"César Palomino Cortés",foto:"Mag César Palomino Cortés.jpg",cargo:["Presidente","Sección Segunda"],funcion:"Coordinador de la comisión de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial.",comision:"Integrante de la comisión de relatoría."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Carmelo Perdomo Cuéter",foto:"Mag Carmelo Perdomo Cuéter.jpg",cargo:[],funcion:"Sección Segunda",comision:"Integrante de las comisiones normativa y de ética, transparencia y rendición de cuentas."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Gabriel Valbuena Hernández",foto:"Mag Gabriel Valbuena Hernández.jpg",cargo:[],funcion:"Sección Segunda",comision:"Integrante de la comisión de tecnologías de la información y las comunicaciones."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Rafael Francisco Suárez Vargas",foto:"Mag Rafael Francisco Suárez Vargas.jpg",cargo:[],funcion:"Sección Segunda",comision:"Integrante de la comisión de relatoría."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"Sandra Lisset Ibarra Vélez",foto:"Mag Sandra Lisset Ibarra.jpg",cargo:[],funcion:"Sección Segunda",comision:"Integrante de las comisiones normativa; ética, transparencia y rendición de cuentas; y de género."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"William Hernández Gómez",foto:"Mag William Hernández Gómez.jpg",cargo:[],funcion:"Sección Segunda",comision:"Coordinador de la comisión normativa."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_plena",comision:"hidden_plena"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Guillermo Sánchez Luque",foto:"Mag Guillermo Sánchez Luque.jpg",cargo:["Presidente","Sección Tercera"],funcion:"",comision:""},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"hidden_plena"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Alberto Montaña Plata",foto:"Mag Alberto Montaña Plata.png",cargo:[],funcion:"Sección Tercera",comision:""},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"María Adriana Marín",foto:"Mag María Adriana Marín.jpg",cargo:[],funcion:"Sección Tercera",comision:"Integrante de la comisión de género."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Nicolás Yepes Corrales",foto:"Mag Nicolás Yepes Corrales.png",cargo:[],funcion:"Sección Tercera",comision:"Integrante de la comisión de ética, transparencia y rendición de cuentas."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Jaime Enrique Rodríguez Navas",foto:"Mag Jaime Enrique Rodríguez Navas.jpg",cargo:[],funcion:"Sección Tercera",comision:"Integrante de las comisiones de evaluación de servidores judiciales de carrera y de reconocimiento al mérito judicial, y de relatoría."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Martín Bermúdez Muñoz",foto:"Mag Martín Bermúdez Muñoz.png",cargo:[],funcion:"Sección Tercera",comision:"Integrante de la comisión normativa."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"José Roberto Sáchica Méndez",foto:"FINAL SACHICA.jpg",cargo:[],funcion:"Sección Tercera",comision:"Inició su período constitucional a partir de julio de 2020."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Ramiro Pazos Guerrero",foto:"Mag Ramiro Pazos Guerrero.jpg",cargo:[],funcion:"Sección Tercera",comision:"Integrante de las comisiones de presupuesto y de género."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"Stella Jeannette Carvajal Basto",foto:"Mag Stella Jeannette Carvajal Basto.jpg",cargo:["Presidenta","Sección Cuarta"],funcion:"Presidenta de la comisión de género de la Rama Judicial.",comision:"Integrante de las comisiones normativa y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Julio Roberto Piza Rodríguez",foto:"Mag Julio Roberto Piza Rodríguez.jpg",cargo:["Sección Cuarta"],funcion:"Coordinador de la comisión de presupuesto.",comision:"Integrante de la comisión de ética, transparencia y rendición de cuentas."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Milton Chaves García",foto:"Mag Milton Chaves García.jpg",cargo:[],funcion:"Sección Cuarta",comision:"Integrante de las comisiones normativa; presupuesto; y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"Myriam Stella Gutiérrez Agüello",foto:"Mag stella gutierrez.png",cargo:[],funcion:"Sección Cuarta",comision:"Inició su período constitucional a partir de diciembre de 2020."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__presidencia",funcion:"hidden_plena",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Luis Alberto Álvarez Parra",foto:"Mag Luis Alberto Álvarez Parra.png",cargo:["Presidente","Sección Quinta"],funcion:"",comision:"Integrante de las comisiones normativa; de calidad y archivo; y de género."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"Lucy Jeannette Bermúdez Bermúdez",foto:"Mag Lucy Jeannette Bermúdez Bermúdez.jpg",cargo:[],funcion:"Sección Quinta",comision:"Integrante de las comisiones normativa y de tecnologías de la información y las comunicaciones."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrada",nombre:"Rocío Araújo Oñate",foto:"Mag Rocío Araújo Oñate.jpg",cargo:["Sección Quinta"],funcion:"Coordinadora de la comisión de Relatoría.",comision:"Integrante de las comisiones normativa; de ética, transparencia y rendición de cuentas; y de género."},{cssClass:{container:"plena__content-magistrado",titulo:"title_magistrado",magistrado:"title_magistrado magistrado",nombre:"nombre_magistrado",foto:"foto_magistrado",cargos:"cargo__magistrado",funcion:"funcion",comision:"comision"},title:"Sala Plena",magistrado:"Magistrado",nombre:"Carlos Enrique Moreno Rubio",foto:"Mag Carlos Enrique Moreno Rubio.jpg",cargo:[],funcion:"Sección Quinta",comision:"Integrante de la comisión de género."}],magistrado_index:0}},methods:{right_callback:function(){this.magistrado_index+=1},left_callback:function(){this.magistrado_index-=1},handleResize:function(){var a=window.matchMedia("(max-width: 720px), (max-height: 410px)");this.is_mobile=!!a.matches}},computed:{current_magistrado:function(){return this.magistrados[this.magistrado_index]}},watch:{magistrado_index:function(a,o){this.transition_class=a>o?"SlideInXRight":"SlideInXLeft"}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},s=e,r=(i("dc26"),i("2877")),c=Object(r["a"])(s,t,n,!1,null,"ca9389d6",null);o["default"]=c.exports},dc26:function(a,o,i){"use strict";i("f8bc")},f8bc:function(a,o,i){}}]);