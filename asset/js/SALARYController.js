var SALARYController = {

    init: function() {
		SALARYController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			SALARYController.calculateSALARY(form);
			event.preventDefault();
		});
	},
	
	calculateSALARY: function(form) {
		var 
			salary = parseFloat(form.salary.value),
			resultinss = 0;
			irpfcalc = 0;
			salaryliq = 0;
		
		var callback = function(resultinss) {
			SALARYController.showResult(resultinss);			
		};
		
		SALARYService.calculateinss(salary, callback);
		
		var callbackIRPF = function(irpfcalc) {
			SALARYController.showResult(irpfcalc);			
		};
		
		SALARYService.calculateirpf(salary, callbackIRPF);
		
		var callbackLIQUID = function(salaryliq) {
			SALARYController.showResult(salaryliq);			
		};
		
		SALARYService.calculateSalaryLiq(salary, callback);
	},
	
	showResult: function(resultinss) {
		var spanResult = document.querySelector('.resultinss');
		spanResult.innerHTML = resultinss.toFixed(2);
	}
};

//initialization
SALARYController.init();