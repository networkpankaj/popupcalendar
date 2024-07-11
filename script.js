document.getElementById('button1').addEventListener('click', function() {
    const calendar1 = document.getElementById('calendar1');
    calendar1.style.display = calendar1.style.display === 'none' ? 'block' : 'none';
    document.getElementById('calendar2').style.display = 'none'; 
});

document.getElementById('button2').addEventListener('click', function() {
    const calendar2 = document.getElementById('calendar2');
    calendar2.style.display = calendar2.style.display === 'none' ? 'block' : 'none';
    document.getElementById('calendar1').style.display = 'none'; 
});

// document.addEventListener('click', function(event) {
//     if (!event.target.closest('#button1') && !event.target.closest('#calendar1')) {
//         document.getElementById('calendar1').style.display = 'none';
//     }
//     if (!event.target.closest('#button2') && !event.target.closest('#calendar2')) {
//         document.getElementById('calendar2').style.display = 'none';
//     }
// });
