// ==UserScript==
// @name         VirtualPiano MIDI converter
// @namespace    http://virtualpiano.net/
// @version      1.0
// @description  convert MIDI files to virtualpiano sheets!
// @author       djsmax
// @include      https://virtualpiano.net/
// @grant        none
// ==/UserScript==

(function (window, undefined) {
    var w;
    if (typeof unsafeWindow !== 'undefined') {
        w = unsafeWindow;
    } else {
        w = window;
    }
    if (w.self != w.top) {
        return;
    }
    if (/https:\/\/virtualpiano.net/.test(w.location.href)) {
        var e = document.getElementById('sheet_tb1');
        var c = document.createElement('span');
        c.className = 'sep';
        c.style = "visibility: visible;";
        c.innerHTML = " | ";
        e.appendChild(c);
        var q = document.createElement('input');
        q.type = 'file';
        q.accept = 'audio/mid';
        q.setAttribute('onchange',"PMCopenFile(event);");
        q.style = 'display: none;';
        var f = document.createElement('input');
        f.type = 'button';
        f.style = "visibility: visible;";
        f.value = "MIDI";
        f.onclick = function() {
            q.click();
        };
        e.appendChild(f);
        var jsmdf = document.createElement('script');
        jsmdf.src = 'https://cdn.jsdelivr.net/gh/colxi/midi-parser-js@2.1.2/src/midi-parser.min.js';
        document.head.appendChild(jsmdf);
        var oplc = 'var ntstc=[\'1\',\'!\',\'2\',\'@\',\'3\',\'4\',\'$\',\'5\',\'%\',\'6\',\'^\',\'7\',\'8\',\'*\',\'9\',\'(\',\'0\',\'q\',\'Q\',\'w\',\'W\',\'e\',\'E\',\'r\',\'t\',\'T\',\'y\',\'Y\',\'u\',\'i\',\'I\',\'o\',\'O\',\'p\',\'P\',\'a\',\'s\',\'S\',\'d\',\'D\',\'f\',\'g\',\'G\',\'h\',\'H\',\'j\',\'J\',\'k\',\'l\',\'L\',\'z\',\'Z\',\'x\',\'c\',\'C\',\'v\',\'V\',\'b\',\'B\',\'n\',\'m\'];var PMCopenFile=function(event){var input=event.target;var reader=new FileReader();reader.onload=function(){oc=MIDIParser.parse(reader.result);if(oc.tracks>1){console.warn("More than one track! Will be selected first one..")};var q=convertMid(oc.track[0].event);document.getElementById(\'s1\').value=q};reader.readAsDataURL(input.files[0])};function convertMid(trackevs){covertable_notes=[];var tn=[];for(var i=0;i<trackevs.length;i++){var msg=trackevs[i];if(msg.type==9&&msg.data[1]!=0&&msg.data[0]!=0){if(tn.length>0){tn.push(msg.data[0])}else{tn=[msg.data[0]]}}else if(msg.type==8){if(tn.length>0){covertable_notes.push(tn);var tn=[]}}};var asc_notes="";covertable_notes.forEach(function nt(e){var l=\'\';e.forEach(function ntt(oe){var w=ntstc[oe-24];if(w!=undefined){l+=w}});asc_notes+=l+\' \'});return asc_notes}';
        var jsmmpc = document.createElement('script');
        jsmmpc.innerHTML = oplc;
        document.head.appendChild(jsmmpc);
    }
})(window);

