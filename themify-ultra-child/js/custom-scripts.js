// Custom scripts



// Wait for window load
jQuery(function ($) {
	
//	var btnO = document.querySelector('.btn-order-course'), // Находим кнопку заказа
//			modalOrder = document.getElementById('mpc-modal-552-0'); // Находим форму заказа 
//
//	btnO.addEventListener('click', function(event) { // Вешаем отлов кликов на кнопку заказа
//		event.preventDefault(); // Предотвращаем переход по ссылке на кнопке
//		modalOrder.classList.add('mpc-visible'); // Добавляем класс форме и показываем  ее
//	});
//	
//	window.addEventListener('keydown', function(event) { // Отлавливаем нажатие ESC
//		if(event.keyCode == 27) { // Если нажат ESC
//			if(modalOrder.classList.contains('mpc-visible')) { // Проверяем показана ли форма
//				modalOrder.classList.remove('mpc-visible'); // Если показана - скрываем ее
//			};
//		};
//	});
	
	$(document).ready(function() {  
//		$("html").niceScroll(); 
		
		$(".mfp-popup").magnificPopup({
			type:"inline",
			midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
			
			// Delay in milliseconds before popup is removed
			removalDelay: 300,
			
			// Class that is added to popup wrapper and background
			// make it unique to apply your CSS animations just to this exact popup
			mainClass: 'mfp-fade'
		});
	});

	$(window).load(function() {
		// Animate loader off screen
		$(".windows8").delay(200).fadeOut("slow");
	});
});

function wooFix () {
    setTimeout(function(){
        var shopHome = document.querySelector('.woocommerce .woocommerce-breadcrumb a');

        shopHome.href = '/vse-tovary';
    });
}
// wooFix();