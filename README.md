 # prj vire ux-recorder 



script vire-ux-recorder.js  
script che gestisce rrweb: avvia rrweb, riceve i frammenti di registrazione rilevati da rrweb, destina i frammenti di registrazione, tipicamente li invia ad un servizio remoto in cui vengono registrati du database

2) uno script che utilizza la libreria rrweb-record.min.js 
la sua funzione è inviare le registrazioni ad un nostro server che le memorizza in database
esempi di questo script si trovano sempre in 
https://github.com/rrweb-io/rrweb/blob/master/guide.md


<script src="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/record/rrweb-record.min.js"></script>

<script>
let vire_rrweb_events = [];
let vire_rrweb_counter = 0;

//if you only included the record code with <script>, then you must use the global variable rrwebRecord instead of rrweb.record
//rrweb.record({
rrwebRecord.record({
  emit(event) {
    // push event into the events array
    events.push(event);
  },
});

// this function will send events to the backend and reset the events array
function vire_rrweb_save() {
  const body = JSON.stringify({ events });
  vire_rrweb_cl_counter++;
  let time_cl_now = new Date().getTime() //86400000 time values, milliseconds since 1970-01-01. 
  vire_rrweb_events = [];
  fetch('http://YOUR_BACKEND_API', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
}

// save events every 10 seconds
setInterval(vire_rrweb_save, 10 * 1000); 
</script>


<script>
(function( window, undefined ) {
})(window);
</script>

////////
////////
////////
