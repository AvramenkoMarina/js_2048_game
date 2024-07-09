!function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,r)}}var a,n,i=function(){var a,n;function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.getInitialState();!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,i),this.gameStatus=i.gameStatus.idle,this.score=0,this.initialState=JSON.parse(JSON.stringify(t)),this.state=t}return n=[{key:"getInitialState",value:function(){return[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}}],a=[{key:"getEmptyTiles",value:function(){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)0===this.state[e][r]&&t.push([e,r]);return t}},{key:"generateTile",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.getEmptyTiles(),a=Math.min(t,e.length);if(e.length){for(var n=0;n<a;n++){var i,s=Math.floor(Math.random()*e.length),o=function(t){if(Array.isArray(t))return t}(i=e.splice(s,1)[0])||function(t,e){var r,a,n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i=[],s=!0,o=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),2!==i.length);s=!0);}catch(t){o=!0,a=t}finally{try{s||null==n.return||n.return()}finally{if(o)throw a}}return i}}(i,2)||r(i,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=o[0],l=o[1];this.state[u][l]=Math.random()>=.9?4:2}this.updateBoard()}}},{key:"updateBoard",value:function(){var t=this;document.querySelectorAll(".field-row").forEach(function(e,r){e.querySelectorAll(".field-cell").forEach(function(e,a){var n=t.state[r][a];e.classList="field-cell",e.innerHTML="",0!==n&&(e.classList.add("field-cell--".concat(n)),e.innerHTML=n)})}),this.isWin(),this.isLose()}},{key:"isWin",value:function(){var t=this;this.state.flat().some(function(e){2048===e&&(t.gameStatus=i.gameStatus.win)})}},{key:"isLose",value:function(){if(!(this.getEmptyTiles().length>0)){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(t<3&&this.state[t][e]===this.state[t+1][e]||e<3&&this.state[t][e]===this.state[t][e+1])return;this.gameStatus=i.gameStatus.lose}}},{key:"updateState",value:function(t){JSON.stringify(t)!==JSON.stringify(this.getState())&&(this.state=t,this.updateBoard(),this.generateTile())}},{key:"moveLeft",value:function(){var t=this;if(this.getStatus()===i.gameStatus.playing){var e=this.getState().map(function(e){return t.compareAndMerge(e)});this.updateState(e)}}},{key:"moveRight",value:function(){var t=this;if(this.getStatus()===i.gameStatus.playing){var a=this.getState().map(function(a){return t.compareAndMerge(((function(t){if(Array.isArray(t))return e(t)})(a)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||r(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reverse())}).map(function(t){return t.reverse()});this.updateState(a)}}},{key:"moveUp",value:function(){if(this.getStatus()===i.gameStatus.playing){for(var t=i.getInitialState(),e=0;e<4;e++){var r=[this.state[0][e],this.state[1][e],this.state[2][e],this.state[3][e]];r=this.compareAndMerge(r);for(var a=0;a<4;a++)t[a][e]=r[a]}this.updateState(t)}}},{key:"moveDown",value:function(){if(this.getStatus()===i.gameStatus.playing){for(var t=i.getInitialState(),e=0;e<4;e++){var r=[this.state[0][e],this.state[1][e],this.state[2][e],this.state[3][e]];(r=this.compareAndMerge(r.reverse())).reverse();for(var a=0;a<4;a++)t[a][e]=r[a]}this.updateState(t)}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.gameStatus}},{key:"start",value:function(){this.gameStatus=i.gameStatus.playing,this.generateTile(2)}},{key:"restart",value:function(){this.score=0,this.state=this.initialState,this.gameStatus=i.gameStatus.idle,this.updateBoard()}},{key:"filterZero",value:function(t){return t.filter(function(t){return 0!==t})}},{key:"compareAndMerge",value:function(t){for(var e=this.filterZero(t),r=0;r<e.length;r++)e[r]===e[r+1]&&(e[r]+=e[r+1],e[r+1]=0,this.score+=e[r]);for(e=this.filterZero(e);e.length<4;)e.push(0);return e}}],t(i.prototype,a),n&&t(i,n),i}();n={idle:"idle",playing:"playing",win:"win",lose:"lose"},(a="gameStatus")in i?Object.defineProperty(i,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[a]=n;var s=new i,o=document.querySelector(".button"),u=document.querySelector(".game-score"),l=document.querySelector(".message-start"),c=document.querySelector(".message-lose"),f={idle:l,win:document.querySelector(".message-win"),lose:c};function h(){var t=s.getStatus();for(var e in f)f[e]&&f[e].classList.toggle("hidden",e!==t)}o.addEventListener("click",function(){o.classList.contains("start")?(s.start(),o.classList.replace("start","restart"),o.innerHTML="Restart"):(s.restart(),u.innerHTML=s.getScore(),o.classList.replace("restart","start"),o.innerHTML="Start"),h()}),document.addEventListener("keyup",function(t){if("playing"===s.getStatus()){switch(t.code){case"ArrowLeft":s.moveLeft();break;case"ArrowRight":s.moveRight();break;case"ArrowUp":s.moveUp();break;case"ArrowDown":s.moveDown()}u.innerHTML=s.getScore(),h()}})}();
//# sourceMappingURL=index.3f7e4718.js.map