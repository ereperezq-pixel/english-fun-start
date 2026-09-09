/* Lingua Fun 3.9 - secuencia obligatoria por nivel */
(function(){
'use strict';
function getData(l,c,n){
 if(l==='fr'){const arr=c==='A1'?window.words:c==='A2'?window.a2Levels:window.b1Levels;return (arr&&arr[n])||[];}
 if(c==='A1')return (window.getItalianA1PracticeData&&window.getItalianA1PracticeData(n))||[];
 if(c==='A2')return (window.getItalianA2PracticeData&&window.getItalianA2PracticeData(n))||[];
 return (window.getItalianB1PracticeData&&window.getItalianB1PracticeData(n))||[];
}
function normalize(l,c,n){const raw=getData(l,c,n),out=[];raw.forEach(x=>{if(!Array.isArray(x)||typeof x[0]!=='string'||typeof x[1]!=='string')return;let sentence=null,sentenceEs=null;if(l==='fr'&&window.EXTRA_DATA_FR){const z=window.EXTRA_DATA_FR.find(y=>y[0]===x[0]);if(z){sentence=z[2];sentenceEs=z[3]}}if(l==='it'&&window.exampleFor)sentence=window.exampleFor(x[0]);if(/[.!?¿¡]/.test(x[0])||x[0].split(/\s+/).length>4){sentence=x[0];sentenceEs=x[1]}out.push({term:x[0],es:x[1],sentence,sentenceEs:sentenceEs||x[1]})});return out}
window.runRequiredGames=function(l,c,n,done){if(!window.runPracticeSequence){done();return}const data=normalize(l,c,n);if(!data.length){done();return}window.runPracticeSequence(l,data,done)};
})();
