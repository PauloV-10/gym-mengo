/* ===========================================================
   GYM MENGO
   Treino rubro-negro. Funciona em iPhone, Android e PC.
   Todos os dados ficam no proprio aparelho.
   =========================================================== */
(function(){
"use strict";

/* ===================== FICHA ===================== */
/* Cada link de video foi testado um a um antes de entrar aqui. */

var EX = {
  supinoInc:{n:"Supino máquina inclinado",alt:"ou halter",s:5,r:10,aq:2,g:"Peito",
    o:"As duas primeiras séries são de aquecimento. A carga pesada entra a partir da terceira.",
    v:"bZtXNt7gbPY"},
  voador:{n:"Voador",s:3,r:10,aq:0,g:"Peito",
    o:"Regule o banco para o cotovelo ficar na linha do ombro.",v:"FwtqdGlRgig"},
  crossover:{n:"Crossover na polia",s:3,r:10,aq:0,g:"Peito",
    o:"Deixe a polia na altura da orelha.",v:"E3aha5zhlc0"},
  supinoReto:{n:"Supino máquina reto",alt:"ou halter",s:3,r:10,aq:0,g:"Peito",
    o:"Pegadores na linha do peito e costas apoiadas no encosto.",v:"e-F32H5SF6E"},
  tricepsCorda:{n:"Tríceps corda",s:3,r:10,aq:0,g:"Tríceps",
    o:"Cotovelo travado junto ao corpo, abra a corda no final.",v:"gPJo1ZDGiS4"},
  tricepsFrances:{n:"Tríceps francês corda na polia",s:3,r:10,aq:0,g:"Tríceps",
    o:"Só o antebraço se move. O cotovelo fica parado apontando pra frente.",v:"PlQOxSm_ZWI"},

  puxadaAberta:{n:"Puxada pulley aberta",s:5,r:10,aq:2,g:"Costas",
    o:"Duas séries de aquecimento, aumente a carga na terceira.",v:"BOW9my4J_ek"},
  puxadaTri:{n:"Puxada triângulo",s:3,r:10,aq:0,g:"Costas",
    o:"Cotovelo fechado, desça na frente do peito.",v:"uAnrJBnxrZ0"},
  remadaTri:{n:"Remada triângulo",s:3,r:10,aq:0,g:"Costas",
    o:"Tronco firme, puxe até o abdômen sem balançar.",v:"2YebbYuuBJQ"},
  remadaAberta:{n:"Remada pegada aberta",s:3,r:10,aq:0,g:"Costas",
    o:"Cotovelada pro alto.",v:"xpkNxVSN2ec"},
  bicepsCorda:{n:"Bíceps na corda na polia",s:3,r:10,aq:0,g:"Bíceps",
    o:"Gire o punho e trave o cotovelo.",v:"anDf4NiAaDg"},
  bicepsMartelo:{n:"Bíceps martelo",s:3,r:10,aq:0,g:"Bíceps",
    o:"Pegada neutra, cotovelo colado no tronco.",v:"HgTwegZjTg8"},

  extensora:{n:"Cadeira extensora",s:5,r:10,aq:2,g:"Perna",
    o:"Duas de aquecimento, depois force. O rolo fica no tornozelo, nunca na canela.",
    v:"RHgqvYAed_8"},
  flexora:{n:"Cadeira flexora",s:5,r:10,aq:2,g:"Perna",
    o:"Mesma lógica da extensora.",v:"zX5saGYPgzw"},
  adutora:{n:"Cadeira adutora",s:4,r:10,aq:0,g:"Perna",
    o:"Controle a volta, não deixe os pesos baterem.",v:"uTIog2r9flM"},
  hack:{n:"Agachamento hack inclinado",alt:"ou máquina similar",s:4,r:10,aq:0,g:"Perna",
    o:"Pé na largura do ombro, desça até a coxa passar da paralela.",v:"Whp712OHPl8"},
  mesaFlexora:{n:"Flexão de joelho na máquina",alt:"ou mesa flexora",s:4,r:10,aq:0,g:"Perna",
    o:"Quadril colado no apoio, sem levantar.",v:"8UawXQA6FrY"},
  panturrilha:{n:"Panturrilha",s:5,r:10,aq:0,g:"Perna",
    o:"Amplitude completa, desça o calcanhar até esticar bem.",v:"qFQ8qNG4uZc"},

  desenvolvimento:{n:"Desenvolvimento com halter",s:5,r:10,aq:2,g:"Ombro",
    o:"Duas primeiras de aquecimento.",v:"eufDL9MmF8A"},
  elevFrontal:{n:"Elevação frontal na corda",s:3,r:10,aq:0,g:"Ombro",
    o:"Suba até a altura dos olhos, sem jogar o tronco pra trás.",v:"Ed1jFL_2464"},
  elevLatPolia:{n:"Elevação lateral na polia",s:3,r:10,aq:0,g:"Ombro",
    o:"Cotovelo levemente dobrado. Conduza pelo cotovelo, não pela mão.",v:"lKY3r_a5XcQ"},
  elevLatHalter:{n:"Elevação lateral com halter",s:3,r:10,aq:0,g:"Ombro",
    o:"Pare na altura do ombro e desça devagar.",v:"gURBTU9VSJg"},
  posterior:{n:"Elevação de posterior de ombro",s:4,r:10,aq:0,g:"Ombro",
    o:"Escápula retraída durante todo o movimento.",v:"3bF87yW4enQ"}
};

var PEITO  = ["supinoInc","voador","crossover","supinoReto","tricepsCorda","tricepsFrances"];
var COSTAS = ["puxadaAberta","puxadaTri","remadaTri","remadaAberta","bicepsCorda","bicepsMartelo"];
var PERNA  = ["extensora","flexora","adutora","hack","mesaFlexora","panturrilha"];
var OMBRO  = ["desenvolvimento","elevFrontal","elevLatPolia","elevLatHalter","posterior"];

/* A sequencia e circular. Nao existe dia fixo da semana. */
var SEQ = [
  {k:"A",n:"Peito e Tríceps",ex:PEITO},
  {k:"B",n:"Costas e Bíceps",ex:COSTAS},
  {k:"C",n:"Perna",ex:PERNA},
  {k:"D",n:"Peito e Tríceps",ex:PEITO},
  {k:"E",n:"Costas e Bíceps",ex:COSTAS},
  {k:"F",n:"Ombro",ex:OMBRO}
];
function porChave(k){
  for(var i=0;i<SEQ.length;i++) if(SEQ[i].k===k) return SEQ[i];
  return null;
}
function indiceDe(k){
  for(var i=0;i<SEQ.length;i++) if(SEQ[i].k===k) return i;
  return -1;
}

var MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
             "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var SEMANA = ["domingo","segunda-feira","terça-feira","quarta-feira",
              "quinta-feira","sexta-feira","sábado"];
var WD = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

/* ===================== ESTADO ===================== */

var KEY = "gymMengo.v2";
var veioDaVersaoAntiga = false;
var db = carregar();
/* grava na chave nova assim que converte, pra nao depender de o usuario mexer em algo */
if(veioDaVersaoAntiga) salvar();

var hoje = iso(new Date());
var dataSel = hoje;
var mesSel = {a:+hoje.slice(0,4), m:+hoje.slice(5,7)-1};
var aba = "treino";

function padrao(){
  return {v:2, cfg:{rest:90,bipe:true,vibra:true,nome:""}, s:{}};
}

function carregar(){
  try{
    var raw = localStorage.getItem(KEY);
    if(raw){
      var o = JSON.parse(raw);
      if(o && o.s){
        o.cfg = o.cfg || {};
        if(typeof o.cfg.rest!=="number")  o.cfg.rest = 90;
        if(typeof o.cfg.bipe!=="boolean") o.cfg.bipe = true;
        if(typeof o.cfg.vibra!=="boolean")o.cfg.vibra = true;
        if(typeof o.cfg.nome!=="string")  o.cfg.nome = "";
        return o;
      }
    }
    var antigo = localStorage.getItem("fichaDeFerro.v1");
    if(antigo){
      veioDaVersaoAntiga = true;
      return migrar(JSON.parse(antigo));
    }
  }catch(e){}
  return padrao();
}

/* Versao antiga amarrava o treino ao dia da semana. Converte para a sequencia. */
function migrar(velho){
  var novo = padrao();
  if(velho && velho.cfg){
    if(typeof velho.cfg.rest==="number") novo.cfg.rest = velho.cfg.rest;
    if(typeof velho.cfg.beep==="boolean") novo.cfg.bipe = velho.cfg.beep;
  }
  var mapa = {1:"A",2:"B",3:"C",4:"D",5:"E",6:"F"};
  for(var data in (velho && velho.log || {})){
    var k = mapa[deISO(data).getDay()];
    if(!k) continue;
    novo.s[data] = {t:k, log:velho.log[data]};
  }
  return novo;
}

function salvar(){
  try{ localStorage.setItem(KEY,JSON.stringify(db)); }
  catch(e){ aviso("Não deu pra salvar. O armazenamento do navegador está cheio ou bloqueado."); }
}

/* ===================== DATAS ===================== */

function pad(n){ return (n<10?"0":"")+n; }
function iso(d){ return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
function deISO(s){ var p=s.split("-"); return new Date(+p[0],+p[1]-1,+p[2]); }
function somaDias(s,n){
  var d = deISO(s); d.setDate(d.getDate()+n); return iso(d);
}
function curto(s){ var d=deISO(s); return pad(d.getDate())+"/"+pad(d.getMonth()+1); }

/* ===================== SESSÕES ===================== */

function sessao(data){ return db.s[data] || null; }

function garantirSessao(data,k){
  if(!db.s[data]) db.s[data] = {t:k, log:{}};
  else db.s[data].t = k;
  salvar();
  return db.s[data];
}

function seriesDe(data,exId){
  var ex = EX[exId];
  var s = sessao(data);
  var r = s && s.log ? s.log[exId] : null;
  var out = [];
  for(var i=0;i<ex.s;i++) out.push(r && r[i] ? r[i] : {kg:"",reps:"",ok:false});
  return out;
}

function gravarSeries(data,exId,arr){
  var s = db.s[data];
  if(!s) return;
  s.log = s.log || {};
  s.log[exId] = arr;
  salvar();
}

function progresso(data){
  var s = sessao(data);
  if(!s) return {total:0,feitas:0};
  var t = porChave(s.t);
  if(!t) return {total:0,feitas:0};
  var total=0, feitas=0;
  t.ex.forEach(function(id){
    total += EX[id].s;
    var r = s.log && s.log[id];
    if(r) r.forEach(function(x){ if(x.ok) feitas++; });
  });
  return {total:total,feitas:feitas};
}

function volumeDe(data){
  var s = sessao(data);
  if(!s || !s.log) return 0;
  var v=0;
  for(var id in s.log){
    s.log[id].forEach(function(x){ if(x.ok) v += num(x.kg)*num(x.reps); });
  }
  return v;
}

function seriesFeitas(data){
  var s = sessao(data);
  if(!s || !s.log) return 0;
  var c=0;
  for(var id in s.log) s.log[id].forEach(function(x){ if(x.ok) c++; });
  return c;
}

/* datas com pelo menos uma serie marcada, mais novas primeiro */
function datasTreinadas(){
  return Object.keys(db.s).filter(function(d){ return seriesFeitas(d)>0; })
                          .sort().reverse();
}

/* proximo treino da sequencia, olhando o ultimo treino feito antes da data */
function sugerido(data){
  var feitas = datasTreinadas().filter(function(d){ return d < data; });
  if(!feitas.length) return SEQ[0];
  var ult = db.s[feitas[0]];
  var i = indiceDe(ult.t);
  if(i < 0) return SEQ[0];
  return SEQ[(i+1)%SEQ.length];
}

/* ===================== AUXILIARES ===================== */

function num(v){ var n = parseFloat(String(v).replace(",",".")); return isFinite(n)?n:0; }
function fmtKg(n){ return (Math.round(n*10)/10).toString().replace(".",","); }
function fmtVol(kg){
  if(kg>=1000) return {n:(Math.round(kg/100)/10).toString().replace(".",","),u:"t"};
  return {n:String(Math.round(kg)),u:"kg"};
}
function $(id){ return document.getElementById(id); }

var toastEl = $("toast"), toastT = null;
function aviso(txt){
  toastEl.textContent = txt;
  toastEl.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(function(){ toastEl.classList.remove("show"); },2600);
}
function vibrar(p){
  if(!db.cfg.vibra) return;
  if(navigator.vibrate){ try{ navigator.vibrate(p); }catch(e){} }
}

function ultimaVez(exId,antesDe){
  var datas = Object.keys(db.s).sort().reverse();
  for(var i=0;i<datas.length;i++){
    if(datas[i] >= antesDe) continue;
    var s = db.s[datas[i]];
    var r = s.log && s.log[exId];
    if(!r) continue;
    var ok = r.filter(function(x){ return x.ok && num(x.kg)>0; });
    if(ok.length) return {data:datas[i],series:ok};
  }
  return null;
}

function recorde(exId){
  var melhor = null;
  for(var data in db.s){
    var r = db.s[data].log && db.s[data].log[exId];
    if(!r) continue;
    for(var i=0;i<r.length;i++){
      var kg = num(r[i].kg);
      if(r[i].ok && kg>0 && (!melhor || kg>melhor.kg)) melhor = {kg:kg,data:data};
    }
  }
  return melhor;
}

/* ===================== DESCANSO ===================== */

var dCard=$("descanso"), dTempo=$("descTempo"), dRot=$("descRotulo"), dSub=$("descSub");
var dInt=null, dLeft=0;

function iniciarDescanso(){
  pararDescanso(true);
  dLeft = db.cfg.rest;
  dCard.hidden = false;
  dCard.classList.remove("zero");
  dRot.textContent = "Descanso";
  dSub.textContent = "Respira e volta pra próxima série.";
  pintaDesc();
  dInt = setInterval(function(){
    dLeft--;
    pintaDesc();
    if(dLeft<=0){
      clearInterval(dInt); dInt=null;
      dCard.classList.add("zero");
      dRot.textContent = "Pode ir";
      dSub.textContent = "Descanso completo.";
      vibrar([90,60,90]); bipe();
      setTimeout(function(){ if(!dInt) dCard.hidden = true; },6000);
    }
  },1000);
}
function pintaDesc(){
  var s = Math.max(0,dLeft);
  dTempo.textContent = Math.floor(s/60)+":"+pad(s%60);
}
function pararDescanso(quieto){
  if(dInt){ clearInterval(dInt); dInt=null; }
  dCard.hidden = true;
  dCard.classList.remove("zero");
  if(!quieto) aviso("Descanso cancelado");
}
$("descPular").addEventListener("click",function(){ pararDescanso(); });

var ac=null;
function bipe(){
  if(!db.cfg.bipe) return;
  try{
    if(!ac) ac = new (window.AudioContext||window.webkitAudioContext)();
    if(ac.state==="suspended") ac.resume();
    var o=ac.createOscillator(), g=ac.createGain();
    o.type="sine"; o.frequency.value=760;
    g.gain.setValueAtTime(.0001,ac.currentTime);
    g.gain.exponentialRampToValueAtTime(.22,ac.currentTime+.02);
    g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+.42);
    o.connect(g); g.connect(ac.destination);
    o.start(); o.stop(ac.currentTime+.45);
  }catch(e){}
}

/* ===================== TOPO ===================== */

var anelBarra=$("anelBarra"), anelTexto=$("anelTexto"), anel=$("anel");
var CIRC = 2*Math.PI*24;

function pintarTopo(){
  var p = progresso(dataSel);
  var s = sessao(dataSel);
  var nome = db.cfg.nome ? db.cfg.nome : "Gym Mengo";

  if(aba==="treino"){
    $("kicker").textContent = dataSel===hoje ? "Hoje" : curto(dataSel);
    if(s && porChave(s.t)){
      var t = porChave(s.t);
      $("titulo").textContent = t.n;
      $("subtitulo").textContent = "Treino "+t.k+", "+p.feitas+" de "+p.total+" séries feitas";
    }else{
      $("titulo").textContent = nome;
      $("subtitulo").textContent = "Escolha o treino do dia";
    }
  }else if(aba==="calendario"){
    $("kicker").textContent = "Calendário";
    $("titulo").textContent = MESES[mesSel.m];
    $("subtitulo").textContent = "Cada dia treinado fica marcado de vermelho";
  }else if(aba==="painel"){
    $("kicker").textContent = "Painel";
    $("titulo").textContent = "Seus números";
    $("subtitulo").textContent = "Volume, recordes e constância";
  }else{
    $("kicker").textContent = "Ajustes";
    $("titulo").textContent = "Ajustes";
    $("subtitulo").textContent = "Descanso, backup e instalação";
  }

  var pct = p.total ? p.feitas/p.total : 0;
  anelBarra.setAttribute("stroke-dasharray",CIRC.toFixed(1));
  anelBarra.setAttribute("stroke-dashoffset",(CIRC*(1-pct)).toFixed(1));
  anelTexto.textContent = Math.round(pct*100)+"%";
  anel.classList.toggle("full", p.total>0 && p.feitas>=p.total);
}

/* ===================== VISTA: TREINO ===================== */

function pintarTreino(){
  var d = deISO(dataSel);
  $("dataDia").textContent = d.getDate()+" de "+MESES[d.getMonth()].toLowerCase();
  $("dataSemana").textContent = SEMANA[d.getDay()] + (dataSel===hoje ? "" : "");
  $("btnHoje").hidden = dataSel===hoje;

  var s = sessao(dataSel);
  var inicio = $("areaInicio");
  var sel = $("seletor");
  var rot = $("rotuloTreino");
  var lista = $("listaEx");

  inicio.innerHTML = ""; lista.innerHTML = "";

  if(!s || !porChave(s.t)){
    /* nenhum treino escolhido ainda: mostra a sugestao da sequencia */
    var sug = sugerido(dataSel);
    var b = document.createElement("button");
    b.type="button"; b.className="start";
    b.innerHTML =
      '<span class="big">'+sug.k+'</span>'+
      '<span class="tx"><span class="t">'+sug.n+'</span>'+
      '<span class="s">Próximo da sequência. Toque pra começar.</span></span>'+
      '<span class="go">Começar</span>';
    b.addEventListener("click",function(){
      garantirSessao(dataSel,sug.k);
      vibrar(20);
      pintarTudo();
    });
    inicio.appendChild(b);
  }

  rot.hidden = false;
  sel.hidden = false;
  sel.innerHTML = "";

  var sug2 = sugerido(dataSel);
  SEQ.forEach(function(t){
    var c = document.createElement("button");
    c.type="button"; c.className="chip";
    if(t.k===sug2.k) c.classList.add("sug");
    c.setAttribute("aria-pressed", s && s.t===t.k ? "true":"false");
    c.innerHTML = '<span class="cl">'+t.k+'</span><span class="cn">'+t.n+'</span>';
    c.addEventListener("click",function(){
      garantirSessao(dataSel,t.k);
      vibrar(16);
      pintarTudo();
    });
    sel.appendChild(c);
  });

  if(!s || !porChave(s.t)) return;

  porChave(s.t).ex.forEach(function(id){ lista.appendChild(cardEx(id)); });
}

function cardEx(id){
  var ex = EX[id];
  var series = seriesDe(dataSel,id);
  var card = document.createElement("article");
  card.className = "ex";
  if(series.filter(function(x){return x.ok;}).length >= ex.s) card.classList.add("done");

  var tags = '<span class="tag red">'+ex.s+" x "+ex.r+"</span>";
  if(ex.aq) tags += '<span class="tag">'+ex.aq+" aquec.</span>";
  var pr = recorde(id);
  if(pr) tags += '<span class="tag gold">recorde '+fmtKg(pr.kg)+" kg</span>";

  var head = document.createElement("div");
  head.className = "ex-head";
  head.innerHTML =
    '<div class="tx">'+
      '<h2 class="ex-name">'+ex.n+(ex.alt?' <span class="alt">'+ex.alt+'</span>':'')+'</h2>'+
      '<div class="meta">'+tags+'</div>'+
      (ex.o?'<p class="obs">'+ex.o+'</p>':'')+
    '</div>'+
    '<a class="vid" target="_blank" rel="noopener" '+
      'href="https://www.youtube.com/watch?v='+ex.v+'" '+
      'aria-label="Ver vídeo de execução de '+ex.n+'">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg></a>';
  card.appendChild(head);

  var wrap = document.createElement("div");
  wrap.className = "sets";

  series.forEach(function(st,i){
    var row = document.createElement("div");
    row.className = "set" + (st.ok?" on":"") + (i<ex.aq?" warm":"");

    var n = document.createElement("div");
    n.className = "set-n"; n.textContent = (i+1);

    var fKg = campo(st.kg,"carga","kg");
    var fRp = campo(st.reps,String(ex.r),"rep");

    var chk = document.createElement("button");
    chk.type = "button"; chk.className = "check";
    chk.setAttribute("aria-label","Marcar série "+(i+1)+" de "+ex.n);
    chk.setAttribute("aria-pressed", st.ok?"true":"false");
    chk.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4.5 4.5L19 7"/></svg>';

    function grava(marca){
      var atual = seriesDe(dataSel,id);
      atual[i] = {
        kg: fKg.querySelector("input").value,
        reps: fRp.querySelector("input").value,
        ok: marca===undefined ? atual[i].ok : marca
      };
      gravarSeries(dataSel,id,atual);
    }

    fKg.querySelector("input").addEventListener("input",function(){ grava(); });
    fRp.querySelector("input").addEventListener("input",function(){ grava(); });

    chk.addEventListener("click",function(){
      var atual = seriesDe(dataSel,id);
      var marcar = !atual[i].ok;
      var iKg = fKg.querySelector("input"), iRp = fRp.querySelector("input");

      if(marcar){
        if(!iRp.value) iRp.value = ex.r;
        if(!iKg.value){
          var u = ultimaVez(id,dataSel);
          if(u) iKg.value = u.series[u.series.length-1].kg;
        }
      }

      var antes = recorde(id);
      grava(marcar);
      vibrar(marcar?22:12);

      if(marcar){
        var dep = recorde(id);
        if(dep && (!antes || dep.kg>antes.kg) && num(iKg.value)>0){
          aviso("Recorde em "+ex.n+": "+fmtKg(dep.kg)+" kg");
          vibrar([40,50,40,50,70]);
        }
        iniciarDescanso();
      }

      card.parentNode.replaceChild(cardEx(id),card);
      pintarTopo();
    });

    row.appendChild(n); row.appendChild(fKg); row.appendChild(fRp); row.appendChild(chk);
    wrap.appendChild(row);
  });
  card.appendChild(wrap);

  var foot = document.createElement("div");
  foot.className = "ex-foot";
  var u = ultimaVez(id,dataSel);
  var info = document.createElement("div");
  info.className = "last";
  if(u){
    info.innerHTML = "Última vez ("+curto(u.data)+"): <b>"+
      u.series.map(function(x){ return fmtKg(num(x.kg)); }).join(" / ")+" kg</b>";
  }else{
    info.textContent = "Primeira vez neste exercício.";
  }

  var btn = document.createElement("button");
  btn.type="button"; btn.className="mini"; btn.textContent="Repetir carga";
  if(!u) btn.disabled = true;
  btn.addEventListener("click",function(){
    var atual = seriesDe(dataSel,id);
    var ult = u.series[u.series.length-1].kg;
    for(var i=0;i<atual.length;i++) if(!atual[i].kg) atual[i].kg = ult;
    gravarSeries(dataSel,id,atual);
    card.parentNode.replaceChild(cardEx(id),card);
    aviso("Carga de "+fmtKg(num(ult))+" kg preenchida");
  });

  foot.appendChild(info); foot.appendChild(btn);
  card.appendChild(foot);
  return card;
}

function campo(val,ph,un){
  var w = document.createElement("div");
  w.className = "field";
  var i = document.createElement("input");
  i.type="text"; i.inputMode="decimal"; i.value = val||""; i.placeholder = ph;
  i.setAttribute("aria-label", un==="kg"?"Carga em quilos":"Repetições");
  var u = document.createElement("span");
  u.className="u"; u.textContent = un;
  w.appendChild(i); w.appendChild(u);
  return w;
}

$("dAnt").addEventListener("click",function(){
  dataSel = somaDias(dataSel,-1); pararDescanso(true); pintarTudo();
});
$("dProx").addEventListener("click",function(){
  dataSel = somaDias(dataSel,1); pararDescanso(true); pintarTudo();
});
$("btnHoje").addEventListener("click",function(){
  dataSel = hoje; pararDescanso(true); pintarTudo();
});

/* ===================== VISTA: CALENDÁRIO ===================== */

function pintarCalendario(){
  $("mesNome").textContent = MESES[mesSel.m];
  $("mesAno").textContent = String(mesSel.a);

  var cal = $("calendario");
  cal.innerHTML = "";
  WD.forEach(function(w){
    var h = document.createElement("div");
    h.className = "wd"; h.textContent = w;
    cal.appendChild(h);
  });

  var primeiro = new Date(mesSel.a,mesSel.m,1);
  var dias = new Date(mesSel.a,mesSel.m+1,0).getDate();
  for(var i=0;i<primeiro.getDay();i++){
    var vz = document.createElement("div");
    vz.className = "cel vazio";
    cal.appendChild(vz);
  }

  var treinos=0, series=0, volume=0;

  for(var d=1; d<=dias; d++){
    var data = mesSel.a+"-"+pad(mesSel.m+1)+"-"+pad(d);
    var s = sessao(data);
    var p = progresso(data);
    var cel = document.createElement("button");
    cel.type = "button"; cel.className = "cel";
    if(data===hoje) cel.classList.add("hoje");
    if(data===dataSel) cel.classList.add("sel");
    if(data>hoje) cel.classList.add("fut");

    var letra = "";
    if(s && porChave(s.t) && p.feitas>0){
      letra = s.t;
      if(p.feitas>=p.total) cel.classList.add("tem");
      else cel.classList.add("parcial");
      treinos++;
      series += p.feitas;
      volume += volumeDe(data);
    }

    cel.innerHTML = '<span class="n">'+d+'</span>'+(letra?'<span class="l">'+letra+'</span>':'');
    cel.setAttribute("aria-label", d+" de "+MESES[mesSel.m]+(letra?", treino "+letra:", sem treino"));
    (function(dt){
      cel.addEventListener("click",function(){
        dataSel = dt; irPara("treino");
      });
    })(data);
    cal.appendChild(cel);
  }

  var v = fmtVol(volume);
  $("mTreinos").textContent = treinos;
  $("mSeries").textContent = series;
  $("mVolume").textContent = v.n + v.u;

  pintarHistorico();
}

function pintarHistorico(){
  var cont = $("historico");
  var datas = datasTreinadas().slice(0,12);
  if(!datas.length){
    cont.innerHTML = '<div class="vazio">Nenhum treino registrado ainda. '+
      'Comece pela aba Treino e os dias vão aparecer aqui.</div>';
    return;
  }
  cont.innerHTML = "";
  datas.forEach(function(data){
    var s = db.s[data], t = porChave(s.t), p = progresso(data);
    var v = fmtVol(volumeDe(data));
    var row = document.createElement("button");
    row.type="button"; row.className="pr";
    row.style.width="100%"; row.style.textAlign="left";
    row.innerHTML =
      '<span class="nm"><b style="color:var(--verm-claro)">'+s.t+'</b> '+
        (t?t.n:"Treino")+'</span>'+
      '<span class="vl">'+v.n+v.u+'</span>'+
      '<span class="dt">'+curto(data)+'</span>';
    row.setAttribute("aria-label","Abrir treino de "+curto(data));
    row.addEventListener("click",function(){ dataSel = data; irPara("treino"); });
    cont.appendChild(row);
  });
}

$("mAnt").addEventListener("click",function(){
  mesSel.m--; if(mesSel.m<0){ mesSel.m=11; mesSel.a--; } pintarCalendario(); pintarTopo();
});
$("mProx").addEventListener("click",function(){
  mesSel.m++; if(mesSel.m>11){ mesSel.m=0; mesSel.a++; } pintarCalendario(); pintarTopo();
});

/* ===================== VISTA: PAINEL ===================== */

function pintarPainel(){
  var datas = datasTreinadas();

  var limite = somaDias(hoje,-6);
  var sete = datas.filter(function(d){ return d>=limite && d<=hoje; }).length;

  var pref = hoje.slice(0,7);
  var doMes = datas.filter(function(d){ return d.slice(0,7)===pref; });
  var volMes = doMes.reduce(function(a,d){ return a+volumeDe(d); },0);

  var prs = 0;
  for(var id in EX) if(recorde(id)) prs++;

  var v = fmtVol(volMes);
  kpi("kSeq", sete, "");
  kpi("kMes", doMes.length, "");
  kpi("kVol", v.n, v.u);
  kpi("kPr", prs, "");

  pintarGrafico(datas.slice(0,8).reverse());
  pintarRecordes();
}
function kpi(id,n,small){
  $(id).querySelector("[data-n]").innerHTML = n + (small?'<small>'+small+'</small>':'');
}

function pintarGrafico(datas){
  var g = $("grafico");
  g.innerHTML = "";
  if(!datas.length){
    g.style.height = "auto";
    g.innerHTML = '<div class="vazio" style="width:100%">Marque as séries nos treinos '+
      'e o gráfico começa a encher.</div>';
    $("dicaGrafico").textContent = "Ainda não há treino registrado.";
    return;
  }
  g.style.height = "138px";
  $("dicaGrafico").textContent = "Carga vezes repetições das séries concluídas, nos últimos "+
    datas.length+(datas.length>1?" treinos.":" treino.");

  var vols = datas.map(volumeDe);
  var max = Math.max.apply(null,vols.concat([1]));
  datas.forEach(function(data,i){
    var col = document.createElement("div");
    col.className = "bcol" + (i===datas.length-1 ? " ult":"");
    var f = fmtVol(vols[i]);
    var h = vols[i]===0 ? 3 : Math.max(8, Math.round(vols[i]/max*100));
    col.innerHTML =
      '<span class="v">'+f.n+f.u+'</span>'+
      '<div class="w"><div class="b" style="height:'+h+'%"></div></div>'+
      '<span class="c">'+db.s[data].t+'</span>';
    col.title = curto(data);
    g.appendChild(col);
  });
}

var fGrupo = $("fGrupo"), fOrdem = $("fOrdem");
(function(){
  var vistos={}, o=['<option value="">Todos os grupos</option>'];
  for(var id in EX){
    var gr = EX[id].g;
    if(!vistos[gr]){ vistos[gr]=1; o.push("<option>"+gr+"</option>"); }
  }
  fGrupo.innerHTML = o.join("");
})();
fGrupo.addEventListener("change",pintarRecordes);
fOrdem.addEventListener("change",pintarRecordes);

function pintarRecordes(){
  var cont = $("recordes");
  var lista = [];
  for(var id in EX){
    if(fGrupo.value && EX[id].g!==fGrupo.value) continue;
    var pr = recorde(id);
    if(pr) lista.push({nome:EX[id].n, pr:pr});
  }
  var ord = fOrdem.value;
  lista.sort(function(a,b){
    if(ord==="carga") return b.pr.kg-a.pr.kg;
    if(ord==="data")  return a.pr.data<b.pr.data?1:-1;
    return a.nome.localeCompare(b.nome,"pt-BR");
  });

  if(!lista.length){
    cont.innerHTML = '<div class="vazio">Nenhuma carga registrada'+
      (fGrupo.value?" em "+fGrupo.value:"")+" ainda.</div>";
    return;
  }
  cont.innerHTML = lista.map(function(o){
    return '<div class="pr"><span class="nm">'+o.nome+'</span>'+
      '<span class="vl">'+fmtKg(o.pr.kg)+' kg</span>'+
      '<span class="dt">'+curto(o.pr.data)+'</span></div>';
  }).join("");
}

$("kSeq").addEventListener("click",function(){
  var lim = somaDias(hoje,-6);
  var d = datasTreinadas().filter(function(x){ return x>=lim && x<=hoje; })
          .map(function(x){ return db.s[x].t+" em "+curto(x); });
  aviso(d.length ? d.join(", ") : "Nenhum treino nos últimos 7 dias");
});
$("kMes").addEventListener("click",function(){
  mesSel = {a:+hoje.slice(0,4), m:+hoje.slice(5,7)-1};
  irPara("calendario");
});
$("kVol").addEventListener("click",function(){
  aviso("Volume é a soma de carga vezes repetições de cada série concluída");
});
$("kPr").addEventListener("click",function(){
  fGrupo.value=""; fOrdem.value="carga"; pintarRecordes();
  $("recordes").scrollIntoView({behavior:"smooth",block:"center"});
});

/* ===================== AJUSTES ===================== */

var inNome = $("nome");
inNome.value = db.cfg.nome;
inNome.addEventListener("input",function(){
  db.cfg.nome = inNome.value.trim(); salvar(); pintarTopo();
});

function pintaRest(){ $("restVal").textContent = db.cfg.rest+"s"; }
$("restMenos").addEventListener("click",function(){
  db.cfg.rest = Math.max(15,db.cfg.rest-15); salvar(); pintaRest();
});
$("restMais").addEventListener("click",function(){
  db.cfg.rest = Math.min(300,db.cfg.rest+15); salvar(); pintaRest();
});

function pintaToggles(){
  $("bipe").textContent = db.cfg.bipe ? "Ligado" : "Desligado";
  $("bipe").style.color = db.cfg.bipe ? "var(--verm-claro)" : "var(--dim)";
  $("vibra").textContent = db.cfg.vibra ? "Ligada" : "Desligada";
  $("vibra").style.color = db.cfg.vibra ? "var(--verm-claro)" : "var(--dim)";
}
$("bipe").addEventListener("click",function(){
  db.cfg.bipe = !db.cfg.bipe; salvar(); pintaToggles(); if(db.cfg.bipe) bipe();
});
$("vibra").addEventListener("click",function(){
  db.cfg.vibra = !db.cfg.vibra; salvar(); pintaToggles(); if(db.cfg.vibra) vibrar(30);
});

$("bExport").addEventListener("click",function(){
  var t = JSON.stringify(db);
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(function(){
      aviso("Backup copiado. Cole num bloco de notas pra guardar.");
    },function(){ window.prompt("Copie este texto e guarde:",t); });
  }else window.prompt("Copie este texto e guarde:",t);
});

$("bImport").addEventListener("click",function(){
  var t = window.prompt("Cole aqui o backup que você salvou:");
  if(!t) return;
  try{
    var o = JSON.parse(t);
    if(!o || (!o.s && !o.log)) throw new Error("formato");
    db = o.s ? o : migrar(o);
    db.cfg = db.cfg || {rest:90,bipe:true,vibra:true,nome:""};
    salvar(); inNome.value = db.cfg.nome||""; pintaRest(); pintaToggles(); pintarTudo();
    aviso("Histórico restaurado");
  }catch(e){
    aviso("Esse texto não é um backup válido. Copie o conteúdo inteiro e tente de novo.");
  }
});

$("bLimparDia").addEventListener("click",function(){
  if(!db.s[dataSel]){ aviso("Não há nada marcado em "+curto(dataSel)); return; }
  if(!window.confirm("Apagar o treino de "+curto(dataSel)+"?")) return;
  delete db.s[dataSel]; salvar(); pintarTudo();
  aviso("Treino de "+curto(dataSel)+" apagado");
});

$("bLimparTudo").addEventListener("click",function(){
  if(!window.confirm("Isso apaga todo o histórico de cargas e recordes. Tem certeza?")) return;
  if(!window.confirm("Confirma mesmo? Não dá pra desfazer.")) return;
  var nome = db.cfg.nome;
  db = padrao(); db.cfg.nome = nome; salvar();
  pintaRest(); pintaToggles(); pintarTudo();
  aviso("Histórico apagado");
});

(function(){
  var cont = $("listaSeq");
  cont.innerHTML = SEQ.map(function(t){
    return '<div class="pr"><span class="nm">'+
      '<b style="color:var(--verm-claro)">'+t.k+'</b> '+t.n+'</span>'+
      '<span class="dt">'+t.ex.length+' ex</span></div>';
  }).join("");
})();

/* instrucao de instalacao conforme o aparelho */
(function(){
  var ua = navigator.userAgent;
  var txt;
  if(/iPhone|iPad|iPod/i.test(ua)){
    txt = "No iPhone, abra esta página no Safari, toque no botão de compartilhar na barra de baixo "+
          "e escolha Adicionar à Tela de Início. Ele passa a abrir em tela cheia, sem a barra do navegador.";
  }else if(/Android/i.test(ua)){
    txt = "No Android, abra no Chrome, toque nos três pontinhos do canto e escolha Instalar aplicativo "+
          "ou Adicionar à tela inicial. O ícone fica na gaveta de apps igual a qualquer outro.";
  }else{
    txt = "No computador, abra no Chrome ou no Edge e clique no ícone de instalar que aparece "+
          "na barra de endereço, à direita. O Gym Mengo passa a abrir em janela própria.";
  }
  $("comoInstalar").textContent = txt;
})();

/* instalacao nativa no Android e no PC */
var adiado = null;
window.addEventListener("beforeinstallprompt",function(e){
  e.preventDefault(); adiado = e;
  $("cardInstalar").hidden = false;
});
$("btnInstalar").addEventListener("click",function(){
  if(!adiado){ aviso("Siga as instruções abaixo pra instalar neste aparelho"); return; }
  adiado.prompt();
  adiado.userChoice.then(function(r){
    if(r.outcome==="accepted"){ aviso("Instalado"); $("cardInstalar").hidden = true; }
    adiado = null;
  });
});
window.addEventListener("appinstalled",function(){ $("cardInstalar").hidden = true; });

/* ===================== NAVEGAÇÃO ===================== */

var ABAS = [
  {k:"treino",     r:"Treino",
   i:'<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>'},
  {k:"calendario", r:"Agenda",
   i:'<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'},
  {k:"painel",     r:"Painel",
   i:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'},
  {k:"ajustes",    r:"Ajustes",
   i:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4L5.3 5.3"/>'}
];

function svg(d){
  return '<svg viewBox="0 0 24 24" aria-hidden="true">'+d+'</svg>';
}

(function montarNav(){
  var baixo = $("navBaixo"), lado = $("navLado");
  ABAS.forEach(function(a){
    [baixo,lado].forEach(function(host){
      var b = document.createElement("button");
      b.type="button"; b.setAttribute("role","tab");
      b.setAttribute("data-k",a.k);
      b.setAttribute("aria-selected", a.k===aba ? "true":"false");
      b.innerHTML = svg(a.i)+"<span>"+a.r+"</span>";
      b.addEventListener("click",function(){ irPara(a.k); });
      host.appendChild(b);
    });
  });
})();

function irPara(k){
  aba = k;
  Array.prototype.forEach.call(document.querySelectorAll("[data-k]"),function(b){
    b.setAttribute("aria-selected", b.getAttribute("data-k")===k ? "true":"false");
  });
  $("v-treino").hidden     = k!=="treino";
  $("v-calendario").hidden = k!=="calendario";
  $("v-painel").hidden     = k!=="painel";
  $("v-ajustes").hidden    = k!=="ajustes";
  if(k==="treino")     pintarTreino();
  if(k==="calendario"){ mesSel = {a:+dataSel.slice(0,4), m:+dataSel.slice(5,7)-1}; pintarCalendario(); }
  if(k==="painel")     pintarPainel();
  pintarTopo();
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ===================== INÍCIO ===================== */

function pintarTudo(){
  if(aba==="treino")     pintarTreino();
  if(aba==="calendario") pintarCalendario();
  if(aba==="painel")     pintarPainel();
  pintarTopo();
}

pintaRest(); pintaToggles(); pintarTudo();

/* virou o dia com o app aberto */
setInterval(function(){
  var n = iso(new Date());
  if(n!==hoje){
    var seguia = dataSel===hoje;
    hoje = n;
    if(seguia) dataSel = n;
    pintarTudo();
  }
},60000);

/* funciona offline depois da primeira abertura */
if("serviceWorker" in navigator){
  window.addEventListener("load",function(){
    navigator.serviceWorker.register("sw.js").catch(function(){});
  });
}

})();
